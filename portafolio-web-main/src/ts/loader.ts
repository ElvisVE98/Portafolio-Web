/**
 * loader.ts — Cargador dinámico de componentes HTML
 * ===================================================
 * Este módulo es responsable de cargar los archivos HTML de cada
 * sección e inyectarlos en el DOM de index.html.
 *
 * CONCEPTO CLAVE — ¿Por qué hacer esto?
 * En lugar de tener 600+ líneas en un solo index.html, cada sección
 * vive en su propio archivo. Este módulo los "ensambla" en tiempo
 * de ejecución usando la Fetch API del navegador.
 * Así es como frameworks como React/Vue/Angular manejan componentes,
 * aunque con herramientas más sofisticadas.
 *
 * REQUIERE: Servidor local (no funciona abriendo index.html directamente
 * como archivo). Ver instrucciones en README.md.
 */


/**
 * Interface TypeScript — Define la forma de un objeto Component.
 *
 * Una interfaz es un "contrato": cualquier objeto que diga ser
 * de tipo Component DEBE tener exactamente estas dos propiedades string.
 * Si te falta una, TypeScript lo detecta en tiempo de compilación
 * (antes de ejecutar el código), no en el navegador.
 */
interface Component {
    /** El id del <div> en index.html donde se inyectará este componente */
    containerId: string;
    /** Ruta al archivo .html del componente, relativa desde index.html */
    path: string;
}


/**
 * Lista de todos los componentes de la aplicación.
 *
 * PARA AGREGAR UNA NUEVA SECCIÓN:
 *   1. Crea src/components/nueva-seccion.html
 *   2. Agrega <div id="nueva-seccion-container"></div> en index.html
 *   3. Agrega el objeto aquí: { containerId: 'nueva-seccion-container', path: 'src/components/nueva-seccion.html' }
 */
const COMPONENTS: Component[] = [
    { containerId: 'nav-container',            path: 'src/components/nav.html'            },
    { containerId: 'hero-container',           path: 'src/components/hero.html'           },
    { containerId: 'experience-container',     path: 'src/components/experience.html'     },
    { containerId: 'certifications-container', path: 'src/components/certifications.html' },
    { containerId: 'projects-container',       path: 'src/components/projects.html'       },
    { containerId: 'contact-container',        path: 'src/components/contact.html'        },
    { containerId: 'footer-container',         path: 'src/components/footer.html'         },
];


/**
 * Carga un único componente HTML en su contenedor del DOM.
 *
 * Es async porque fetch() es una operación asíncrona (hay que
 * esperar la respuesta del servidor). Con async/await el código
 * se lee de forma secuencial aunque internamente use Promises.
 *
 * @param component - Objeto con containerId y path
 * @returns Promise<void> — promesa que resuelve cuando el componente está en el DOM
 */
async function loadComponent(component: Component): Promise<void> {
    // document.getElementById() busca el elemento por su id en el DOM
    const container = document.getElementById(component.containerId);

    if (!container) {
        console.warn(`[Loader] No se encontró #${component.containerId} en el DOM.`);
        return; // sale de la función si el contenedor no existe
    }

    try {
        /**
         * fetch(url) hace una petición HTTP GET al servidor local.
         * Retorna una Promise<Response> — hay que esperar con await.
         */
        const response = await fetch(component.path);

        /**
         * response.ok es true cuando el status HTTP es 200-299.
         * Si el archivo no existe, status sería 404 → ok = false.
         */
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} al intentar cargar: ${component.path}`);
        }

        /**
         * response.text() lee el cuerpo de la respuesta como string.
         * El tipo explícito ": string" es TypeScript — en JS esto no existe.
         */
        const html: string = await response.text();

        /**
         * innerHTML reemplaza el contenido interno del contenedor
         * con el HTML del componente que acabamos de descargar.
         */
        container.innerHTML = html;

    } catch (error) {
        // Si algo falla, mostramos el error pero no detenemos los demás componentes
        console.error(`[Loader] Error al cargar ${component.path}:`, error);
        container.innerHTML = `
            <p style="color: #f87171; padding: 20px; text-align: center;">
                ⚠️ Error al cargar: ${component.path}
            </p>
        `;
    }
}


/**
 * Carga todos los componentes en PARALELO.
 *
 * Promise.all([p1, p2, p3]) espera que TODAS las promesas del array
 * se resuelvan, y retorna cuando la ÚLTIMA termina.
 * Esto es más eficiente que cargarlos uno por uno (serial).
 *
 * COMPONENTS.map(loadComponent) crea un array de promesas, una por componente.
 * Equivale a: [loadComponent(c1), loadComponent(c2), loadComponent(c3), ...]
 */
export async function loadAllComponents(): Promise<void> {
    await Promise.all(COMPONENTS.map(loadComponent));
}
