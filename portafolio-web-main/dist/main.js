/**
 * main.ts — Punto de entrada de la aplicación
 * =============================================
 * Este es el "entry point": el primer archivo que se ejecuta
 * y que coordina el inicio de todo lo demás.
 *
 * PATRÓN COMÚN en aplicaciones modernas:
 *   main.ts → importa módulos → llama funciones de inicialización
 *
 * ORDEN DE OPERACIONES:
 *   1. loadAllComponents() → carga el HTML de cada sección
 *   2. initNavigation()    → registra eventos del menú
 *   3. feather.replace()   → renderiza los íconos SVG
 *
 *   El orden importa: feather.replace() debe ir DESPUÉS de cargar
 *   los componentes porque los íconos <i data-feather="..."> están
 *   en los HTMLs de los componentes, no en index.html.
 */
import { loadAllComponents } from './loader.js';
import { initNavigation } from './navigation.js';
/**
 * Función principal asíncrona de arranque de la app.
 *
 * async/await simplifica el trabajo con Promises:
 * En lugar de .then().then().catch(), el código parece sincrónico
 * aunque internamente espera respuestas asíncronas (fetch).
 *
 * @returns Promise<void> — no retorna valor, solo ejecuta efectos
 */
async function init() {
    // Paso 1: Descarga e inyecta todos los HTML de los componentes
    // Espera a que TODOS estén en el DOM antes de continuar
    await loadAllComponents();
    // Paso 2: Registra los event listeners de navegación
    // (nav.html ya está en el DOM gracias al await anterior)
    initNavigation();
    // Paso 3: Convierte <i data-feather="nombre"> en SVGs
    // (todos los componentes ya están cargados)
    feather.replace();
}
/**
 * Ejecuta init() y maneja cualquier error inesperado.
 *
 * .catch() atrapa errores que no fueron manejados dentro de init().
 * Sin esto, los errores de Promises sin catch quedan silenciosos.
 */
init().catch((error) => {
    console.error('[App] Error crítico al inicializar la aplicación:', error);
});
//# sourceMappingURL=main.js.map