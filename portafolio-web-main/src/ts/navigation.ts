/**
 * navigation.ts — Lógica de la barra de navegación
 * ==================================================
 * Maneja el comportamiento interactivo del menú:
 *   · Abrir/cerrar el menú hamburguesa en móvil
 *   · Cerrar el menú al hacer clic en cualquier link
 *
 * SEPARACIÓN DE RESPONSABILIDADES:
 * Todo el JavaScript de la navegación está aquí, no en el HTML.
 * Los archivos HTML no tienen onclick="..." — eso está desaconsejado
 * porque mezcla lógica con presentación.
 * En su lugar, registramos event listeners desde TypeScript.
 */


/**
 * Inicializa los event listeners de la navegación.
 * Debe llamarse DESPUÉS de que nav.html esté inyectado en el DOM,
 * por eso se llama desde main.ts luego de loadAllComponents().
 *
 * querySelector<HTMLElement>('.menu-toggle') — el tipo genérico <HTMLElement>
 * le dice a TypeScript qué tipo de elemento esperamos encontrar.
 * Sin él, TypeScript devolvería Element | null, más genérico.
 */
export function initNavigation(): void {
    const menuToggle = document.querySelector<HTMLElement>('.menu-toggle');
    const navLinks   = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');

    // Registra el evento click en el botón hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    /**
     * forEach recorre todos los links del menú.
     * Al hacer clic en cualquiera, se cierra el menú.
     * Esto es especialmente importante en móvil: si el usuario
     * hace clic en "Proyectos", el menú debería cerrarse antes
     * de que el scroll lleve a esa sección.
     */
    navLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', toggleMenu);
    });
}


/**
 * Alterna la visibilidad del menú móvil.
 *
 * classList.toggle('active') agrega la clase si no existe,
 * la quita si ya existe. La clase "active" en .nav-links
 * cambia transform: translateY(-150%) → translateY(0)
 * haciendo que el menú se deslice hacia abajo (ver responsive.css).
 *
 * El operador ?. (optional chaining) evita errores si getElementById
 * retorna null — en lugar de lanzar un error, simplemente no hace nada.
 */
function toggleMenu(): void {
    const nav = document.getElementById('navLinks');
    nav?.classList.toggle('active');
}


