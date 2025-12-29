# Mi-Portafolio (Oscuro Tech)

Repositorio local con un scaffold de portafolio en estilo "Oscuro y Tech" (glass / neumorphism).

Contenido generado:

- `index.html` — página principal con secciones: Portada, Sobre mí, Proyectos, Estudios, Contacto, Footer.
- `styles.css` — estilos con efecto glass y paleta oscura.
- `scripts.js` — interacciones pequeñas (envío de formulario simulado, año dinámico).

Desarrollo local (Windows PowerShell):

1. Abrir PowerShell en la carpeta `Mi-Portafolio`.
2. Ejecutar un servidor estático (Python 3.x):

```powershell
python -m http.server 3000 --directory "c:\Users\hp\OneDrive\Desktop\Yo\Mi-Portafolio"
```

3. Abrir `http://localhost:3000` en el navegador.

Si no tienes Python, puedes usar una extensión de VS Code que sirva archivos estáticos o instalar `serve` via npm:

```powershell
npm install -g serve
serve -s . -l 3000
```

Siguientes pasos recomendados:
- Reemplazar textos y avatar por los tuyos.
	- Avatar: coloca tu foto en `assets/avatar.jpg`. Recomendado cuadrada o ligeramente rectangular; el CSS la recortará a 120×120 (object-fit: cover).
- Añadir imágenes de proyectos en las tarjetas (`.project-media`).
	- Coloca las imágenes de proyectos en `assets/projects/` con nombres como `direccion-turismo.jpg` o `portafolio.jpg`.
	- Recomendado: tamaño aproximado 1200x700 px (puedes optimizar a WebP). Usa `loading="lazy"` en `<img>` para mejorar rendimiento.
	 - Añadir tu CV en PDF para descarga:
	 	- Coloca tu archivo PDF en `assets/CV_Ezequiel_Cano.pdf`.
	 	- El sitio mostrará un botón "Descargar mi CV (PDF)" en la sección "Sobre mí". Puedes cambiar el nombre del archivo, pero actualiza el `href` en `index.html` si lo haces.
	 	- Recomendado: tamaño del PDF < 1 MB para una mejor experiencia.
- Conectar el formulario a un servicio (Formspree, Netlify Forms o un endpoint propio).
	- Cómo configurar el formulario de contacto:
		1. Formspree (fácil, gratis para usos básicos):
			 - Regístrate en https://formspree.io y crea un formulario. Copia el endpoint que te dan, algo como `https://formspree.io/f/abcdxyza`.
			 - Abre `scripts.js` y asigna ese endpoint a la constante `CONTACT_ENDPOINT` (línea superior dentro del DOMContentLoaded). Ejemplo:
				 ```js
				 const CONTACT_ENDPOINT = 'https://formspree.io/f/abcdxyza';
				 ```
			 - El formulario enviará los datos y Formspree te redirigirá/guardará los mensajes según su configuración.
		2. Endpoint propio / serverless: puedes crear una función que reciba `POST` JSON (name, email, message) y responder con 200.
			 - Pon la URL en `CONTACT_ENDPOINT`.
		3. Si no configuras `CONTACT_ENDPOINT`, el formulario usará `mailto:` como fallback — asegúrate de reemplazar `tu-email@example.com` por tu email real en `scripts.js`.

- Preparar despliegue (GitHub Pages, Netlify, Vercel).
