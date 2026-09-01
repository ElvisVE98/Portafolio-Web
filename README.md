# 🚀 Portafolio Web — Elvis Velásquez

Portafolio profesional desarrollado con **React 19**, **TypeScript**, **Tailwind CSS v4** y **Vite**, diseñado bajo arquitectura limpia (*Clean Code*), modularidad de componentes y separación de datos.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Empaquetador:** [Vite](https://vite.dev/)
- **Íconos:** [Lucide React](https://lucide.dev/) & SVGs vectoriales optimizados
- **Tipografías:** Google Fonts (*Outfit* y *JetBrains Mono*)

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/                  # Recursos estáticos (foto de perfil, certificados PDF)
├── components/
│   ├── layout/              # Estructura fija (Navbar con menú móvil, Footer)
│   ├── sections/            # Secciones independientes (Hero, Experience, Projects, Certifications, Contact)
│   └── ui/                  # Componentes reutilizables (GlassCard, Badge, SectionTitle, SocialIcons)
├── data/                    # Información pura (fácil de editar y ampliar)
│   ├── personal.data.ts     # Datos personales, biografía, redes y correo
│   ├── experience.data.ts   # Trayectoria profesional y educación
│   ├── projects.data.ts     # Proyectos destacados y arquitectura
│   └── certifications.data.ts # Título profesional y cursos certificados
├── pages/
│   └── HomePage.tsx         # Página principal que orquesta todas las secciones
├── types/                   # Interfaces estrictas de TypeScript
├── App.tsx                  # Componente raíz
├── main.tsx                 # Entrada de React y montaje en DOM
├── index.css                # Estilos globales y tokens de diseño
└── vite-env.d.ts            # Declaraciones de tipos para recursos estáticos
```

---

## ⚙️ Comandos de Desarrollo

### Instalar dependencias
```bash
npm install
```

### Iniciar servidor local de desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Vista previa de la compilación de producción
```bash
npm run preview
```

---

## 📝 Cómo Editar tus Datos

Toda tu información está centralizada en la carpeta `src/data/`:

- **Modificar tus datos o redes:** Edita `src/data/personal.data.ts`.
- **Agregar un nuevo trabajo:** Añade un objeto en `src/data/experience.data.ts`.
- **Añadir un proyecto nuevo:** Añade un objeto en `src/data/projects.data.ts`.
- **Agregar una certificación o curso:** Añade un objeto en `src/data/certifications.data.ts`.
