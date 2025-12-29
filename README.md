 # Mi Portafolio — Oscuro & Tech

Una versión ligera y personalizable de un portafolio estático con estética "Oscuro y Tech" (glass / neumorphism). Incluye secciones: portada, sobre mí, proyectos, estudios, contacto y footer.

**Características principales**
- Diseño responsive, estilo glass/neumorphism.
- Sección de proyectos con imágenes.
- Formulario de contacto configurable (Formspree / endpoint propio / mailto fallback).
- Botón para descargar CV en PDF.

**Estructura del proyecto**
- `index.html` — página principal.
- `styles.css` — estilos y responsividad.
- `scripts.js` — interacciones (formulario, año dinámico).
- `assets/` — carpeta para `avatar.jpg`, `projects/` (imágenes de proyectos) y `CV_Ezequiel_Cano.pdf`.

Recomendación rápida: abre [index.html](index.html) en tu editor y personaliza textos, imágenes y enlaces.

## Requisitos
- Navegador moderno.
- (Opcional) Python 3 para servidor local o `serve` de npm.

## Desarrollo local (PowerShell)
1. Abre PowerShell en la carpeta del proyecto:
```powershell
cd "C:\Users\hp\OneDrive\Desktop\Yo\Mi-Portafolio"
```
2. Levanta un servidor estático con Python 3:
```powershell
python -m http.server 3000 --directory "C:\Users\hp\OneDrive\Desktop\Yo\Mi-Portafolio"
```
3. Abre `http://localhost:3000` en el navegador.

Alternativa (si no tienes Python):
```powershell
npm install -g serve
serve -s . -l 3000
```

