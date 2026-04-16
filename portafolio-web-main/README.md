# Portafolio Web — Elvis Velasquez

Sitio web estático de portafolio profesional. Una sola página (single-page) con
navegación interna por anclas (`#sección`) y arquitectura modular por archivos.

---

## Estructura de archivos

```
portafolio-web-main/
│
├── index.html                  ← Shell principal (solo estructura, sin contenido)
│
├── src/
│   ├── components/             ← HTML de cada sección (un archivo por sección)
│   │   ├── nav.html            · Barra de navegación
│   │   ├── hero.html           · Presentación principal
│   │   ├── experience.html     · Trayectoria laboral
│   │   ├── certifications.html · Certificaciones y cursos
│   │   ├── projects.html       · Proyectos destacados
│   │   ├── contact.html        · Sección de contacto
│   │   └── footer.html         · Pie de página
│   │
│   ├── css/                    ← Estilos CSS (un archivo por sección/tema)
│   │   ├── main.css            · Solo @import de los demás (punto de entrada)
│   │   ├── base.css            · Variables, reset, componentes compartidos
│   │   ├── nav.css             · Estilos del menú de navegación
│   │   ├── hero.css            · Estilos de la sección hero
│   │   ├── timeline.css        · Línea de tiempo de experiencia
│   │   ├── certifications.css  · Grid de certificaciones
│   │   ├── projects.css        · Grid de proyectos
│   │   ├── contact.css         · Sección de contacto
│   │   ├── footer.css          · Pie de página
│   │   └── responsive.css      · Media queries (diseño adaptable)
│   │
│   └── ts/                     ← TypeScript (lógica, un archivo por responsabilidad)
│       ├── main.ts             · Entry point: orquesta el inicio de la app
│       ├── loader.ts           · Carga los HTML de los componentes via fetch()
│       └── navigation.ts       · Lógica del menú hamburguesa
│
├── dist/
│   └── main.js                 ← JavaScript compilado desde TypeScript (NO editar)
│
├── img/                        ← Imágenes del sitio
│   └── FOTO_RETRATO.jpeg
│
├── docs/                       ← Archivos PDF (certificados, CV)
│   └── 5c6a45c9-...pdf
│
├── tsconfig.json               ← Configuración del compilador TypeScript
├── style.css                   ← OBSOLETO (migrado a src/css/)
└── README.md                   ← Este archivo
```

---

## Cómo funciona la arquitectura

```
index.html (cargado por el navegador)
    │
    ├── <link> src/css/main.css
    │     └── @import base.css, nav.css, hero.css, ...
    │
    └── <script type="module"> dist/main.js
          │
          ├── loadAllComponents()        ← loader.ts
          │     ├── fetch(nav.html)      → inyecta en #nav-container
          │     ├── fetch(hero.html)     → inyecta en #hero-container
          │     ├── fetch(experience.html) ...
          │     └── (todos en paralelo con Promise.all)
          │
          ├── initNavigation()           ← navigation.ts
          │     └── event listeners del menú hamburguesa
          │
          └── feather.replace()
                └── convierte <i data-feather="nombre"> en SVGs
```

---

## Requisito: Servidor local

Este sitio usa `fetch()` para cargar los componentes HTML, por lo que
**no funciona abriéndolo como archivo** (`file:///...`). Necesita un servidor local.

**Opción 1 — VS Code (recomendada):**
1. Instala la extensión **Live Server** (ritwickdey.LiveServer)
2. Haz clic derecho en `index.html` → **Open with Live Server**

**Opción 2 — Terminal:**
```bash
# Desde la carpeta portafolio-web-main/
npx serve .
```
Luego abre `http://localhost:3000` en el navegador.

---

## Cómo editar el contenido

### Cambiar tu nombre / logo

Abre [src/components/nav.html](src/components/nav.html) y edita:
```html
<div class="logo">
    TuNombre<span style="color: var(--accent-primary);">.tuRol</span>
</div>
```

---

### Sección Hero — Presentación

Archivo: [src/components/hero.html](src/components/hero.html)

| Qué quieres cambiar | Elemento HTML |
|---|---|
| Etiqueta de disponibilidad | `<span class="badge">` |
| Título | `<h1>` |
| Párrafo de descripción | `<p class="hero-desc">` |
| Foto | `<img src="img/TU-FOTO.jpg" ...>` |

**Agregar una skill:**
```html
<!-- Dentro de .skills-container del grupo correspondiente -->
<div class="skill-tag tech"><i data-feather="code"></i>Nueva Tecnología</div>
```
- `skill-tag tech` → hover azul (tecnologías web)
- `skill-tag data` → hover verde (automatización/datos)
- Íconos disponibles: [feathericons.com](https://feathericons.com)

---

### Sección Experiencia

Archivo: [src/components/experience.html](src/components/experience.html)

**Agregar un trabajo nuevo** — copia y pega dentro de `<div class="timeline">`:

```html
<div class="timeline-item">
    <!-- Sin style = punto azul (activo) | con style = punto gris (pasado) -->
    <div class="timeline-dot"></div>
    <div class="glass-card">
        <div class="job-header">
            <div>
                <div class="job-title">Tu Cargo</div>
                <div class="job-company">NOMBRE EMPRESA</div>
            </div>
            <div class="job-date">Mes Año - Mes Año</div>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 15px;">
            Descripción general del rol...
        </p>
        <ul style="list-style-position: inside; color: var(--text-muted); line-height: 1.8;">
            <li><strong>Categoría:</strong> Descripción del logro.</li>
        </ul>
    </div>
</div>
```

---

### Sección Certificaciones

Archivo: [src/components/certifications.html](src/components/certifications.html)

**Agregar una certificación** — copia y pega dentro de `<div class="cert-grid">`:

```html
<div class="glass-card">
    <div class="cert-header">
        <div style="display: flex; align-items: center; gap: 10px;">
            <div class="cert-icon">
                <i data-feather="award" style="color: var(--accent-primary); width: 24px; height: 24px;"></i>
            </div>
            <div>
                <h3 style="font-size: 1.2rem; margin: 0;">Nombre del Curso</h3>
                <p style="color: var(--accent-primary); font-family: 'JetBrains Mono'; font-size: 0.85rem; margin: 0;">INSTITUCIÓN</p>
            </div>
        </div>
        <span class="cert-date">Mes. Año</span>
    </div>
    <div class="cert-content">
        <div style="flex: 1;">
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; line-height: 1.5;">
                Descripción breve...
            </p>
            <div class="skills-container" style="margin-bottom: 15px;">
                <div class="skill-tag tech" style="font-size: 0.75rem; padding: 6px 10px;">Tema 1</div>
            </div>
            <!-- PDF local: -->
            <a href="docs/archivo.pdf" target="_blank" rel="noopener"
               style="color: var(--accent-primary); text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 5px; font-weight: 600;">
                Ver Certificado <i data-feather="file-text" style="width: 14px; height: 14px;"></i>
            </a>
            <!-- URL externa (Udemy, etc.): cambia file-text por external-link -->
        </div>
    </div>
</div>
```

**Colores de ícono disponibles:**
- Azul: `var(--accent-primary)`
- Verde: `var(--accent-tertiary)`
- Violeta: `var(--accent-secondary)`

---

### Sección Proyectos

Archivo: [src/components/projects.html](src/components/projects.html)

**Agregar un proyecto normal** — copia y pega dentro de `<div class="projects-grid">`:

```html
<div class="glass-card">
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
        <i data-feather="globe" style="color: var(--accent-primary); width: 40px; height: 40px;"></i>
    </div>
    <h3>Nombre del Proyecto</h3>
    <p style="color: var(--text-muted); margin: 15px 0;">
        Descripción del proyecto...
    </p>
    <div class="project-tags">
        <span>Tecnología 1</span>
        <span>Tecnología 2</span>
    </div>
    <div style="margin-top: 20px;">
        <a href="https://tu-proyecto.com" target="_blank" rel="noopener"
           style="color: var(--accent-primary); text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 5px; font-weight: 600;">
            Ver Proyecto <i data-feather="external-link" style="width: 14px; height: 14px;"></i>
        </a>
    </div>
</div>
```

**Para hacerlo "proyecto estrella"** (ocupa todo el ancho):
```html
<div class="glass-card featured-card">
```

---

### Sección Contacto

Archivo: [src/components/contact.html](src/components/contact.html)

```html
<!-- Cambiar email -->
<a href="mailto:tu@email.com" class="btn btn-primary" ...>
    tu@email.com
</a>

<!-- Cambiar redes sociales -->
<a href="https://linkedin.com/in/tu-perfil/" target="_blank" rel="noopener" ...>
    <i data-feather="linkedin"></i>
</a>
```

---

## Cómo agregar una sección completamente nueva

**1. Crea el componente HTML** en `src/components/nueva-seccion.html`:
```html
<section id="nueva-seccion">
    <div class="container">
        <h2 class="section-title">Título <span class="highlight">Sección</span></h2>
        <!-- Tu contenido aquí -->
    </div>
</section>
```

**2. Agrega el slot** en `index.html` dentro de `<main>`:
```html
<div id="nueva-seccion-container"></div>
```

**3. Registra el componente** en `src/ts/loader.ts`:
```typescript
const COMPONENTS: Component[] = [
    // ... los existentes ...
    { containerId: 'nueva-seccion-container', path: 'src/components/nueva-seccion.html' },
];
```

**4. Agrega el link al menú** en `src/components/nav.html`:
```html
<a href="#nueva-seccion">Nombre en Menú</a>
```

**5. Recompila TypeScript:**
```bash
npx tsc
```

---

## Cómo cambiar los colores globales

Todos los colores están en una sola variable en [src/css/base.css](src/css/base.css):

```css
:root {
    --bg-color:         #0f172a;   /* Fondo principal */
    --accent-primary:   #38bdf8;   /* Azul — links, botones, tecnologías */
    --accent-secondary: #818cf8;   /* Violeta — logros, subtítulos */
    --accent-tertiary:  #2dd4bf;   /* Verde — datos, automatización */
    --text-main:        #f8fafc;   /* Texto principal */
    --text-muted:       #94a3b8;   /* Texto secundario */
}
```
Cambia solo los valores hexadecimales y el cambio se aplica en todo el sitio.

---

## Cómo trabajar con TypeScript

Los archivos fuente están en `src/ts/`. Después de editar cualquier `.ts`:

```bash
# Instala TypeScript (solo la primera vez)
npm install -g typescript

# Compila (desde la carpeta portafolio-web-main/)
npx tsc

# O en modo "watch" (recompila automáticamente al guardar)
npx tsc --watch
```

Los archivos `.js` compilados se generan en `dist/`.

**Regla importante:** Edita `.ts` → compila → el navegador ejecuta `dist/main.js`.
Nunca edites `dist/main.js` directamente.

---

## Agregar archivos (imágenes y PDFs)

**Imagen nueva:**
```html
<!-- Copia el archivo a img/ y referencíalo así: -->
<img src="img/nombre-imagen.jpg" alt="Descripción breve de la imagen">
```
> El `alt` es obligatorio para accesibilidad (lectores de pantalla) y SEO.

**PDF nuevo:**
```html
<!-- Copia el archivo a docs/ y referencíalo así: -->
<a href="docs/nombre-archivo.pdf" target="_blank" rel="noopener">
    Ver documento <i data-feather="file-text" style="width: 14px; height: 14px;"></i>
</a>
```
