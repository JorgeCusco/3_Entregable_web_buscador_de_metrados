# Guía Nivel 5: Despliegues, La Nube y el Flujo de Trabajo Profesional

Estás a un paso de sacar este proyecto de tu computadora personal y llevarlo al mundo real. Esta guía definitiva responde a tus tres preguntas clave: ¿Cómo lo comparto aquí en la oficina?, ¿Cómo lo subo a internet?, y ¿Cómo demonios lo edito una vez que ya está "arriba"?

---

## 🏢 1. Compartir en tu Servidor / Red Local (La Oficina)

Si quieres que tus compañeros de trabajo de tu misma oficina (misma red WiFi o red LAN por cable) entren a la página desde sus laptops o celulares hoy mismo, no necesitas pagar internet.

### Método A: El Modo "En Vivo" (Rápido pero frágil)
Si tu computadora está encendida con el código de Visual Studio y quieres que los demás entren a probar:
1. En la consola, en lugar de `npm run dev`, escribes:
   ```bash
   npm run dev -- --host
   ```
2. Vite te responderá algo como esto:
   ```text
   ➜  Local:   http://localhost:5173/
   ➜  Network: http://192.168.1.45:5173/  <-- ¡ESTO!
   ```
3. Tus compañeros de la oficina solo tienen que abrir Chrome en sus celulares o laptops y escribir esa IP (`http://192.168.1.45:5173`). ¡Boom!, verán la aplicación.
*(Nota: Si cierras la terminal, a ellos se les caerá la página).*

### Método B: Servidor Local de Producción (IIS, XAMPP, Apache)
Si tu empresa tiene un "Servidor Físico" prendido 24/7 en un rack en el sótano:
1. En tu computadora principal ejecutas una sola vez: `npm run build`.
2. Vite creará una pequeña carpetita llamada **`dist`** (Distribution). 
3. Copias **TODO el contenido** dentro de esa carpeta `dist/` (que son puramente archivos `index.html`, `js` y `css` inentendibles pero minúsculos) y los pegas en la carpeta pública del Servidor Local de tu empresa (Ej: la carpeta `htdocs` de XAMPP, o `wwwroot` de IIS Microsoft).
4. Listo. Ahora todos los trabajadores entrarán a `http://servidorempresa:80/metrados`. Y tú ya puedes apagar tu computadora personal en paz.

---

## ☁️ 2. Escalar a un Servicio de Red (La Nube Pública)

Llevar una SPA (Single Page Application) hecha en React a la Nube es hoy en día 100 veces más fácil que hace una década, y lo mejor: **¡Es Gratis!**.

Aquí dividimos nuestra aplicación en dos hemisferios:

### Hemisferio 1: El Frontend (Lo visual, la interfaz)
Esto es puramente tu código de botones azules (el `/dist` resultante). 
Se sube a plataformas llamadas **CDN** (Content Delivery Networks) súper rápidas. Las 3 líderes de la industria son:
*   **Vercel** (Los creadores de Next.js, la mejor plataforma hoy por hoy).
*   **Netlify**.
*   **Cloudflare Pages**.
Simplemente amarras tu cuenta de Vercel a la carpeta de tu proyecto y ellos publican la web dándote un link como `https://metrados.vercel.app`.

### Hemisferio 2: El Backend (La Base de Datos Verdadera)
Es el reemplazo definitivo del archivo simulado `mockDB.ts`. Tus datos en la nube estarán alojados en **BaaS (Backend as a Service)**.
*   **Supabase** (PostgreSQL): Mi máxima recomendación actual.
*   **Firebase** de Google (Bases NoSQL).
Crearás tu tabla "BD_METRADOS" allí, copiarás tu "URL Secreta", se la pondrás a tu código React, y cuando el usuario presione "Guardar", viajará a internet al instante.

---

## 🔧 3. ¿Cómo doy mantenimiento / edito el código cuando ya está en la Nube? 

> **¡Regla de Oro del Senior Developer!**
> JAMÁS editas código "en la nube". Cero. Nunca tocas los servidores directamente.

Si descubres un bug en internet (Ejem: El botón Guardar se puso rojo en producción) el ciclo de arreglo profesional moderno, conocido como **CI/CD (Integración Continua / Despliegue Continuo)** funciona de la siguiente impecable manera:

1.  **Editas Local (Tu Cueva):** Abres tu Visual Studio Code, igual que ahora, en tu disco `D:\00_OFI...`, haces el arreglo del botón de azul a verde, y lo pruebas primero en tu `http://localhost:5173`.
2.  **Mandar a la Nube Segura (GitHub):** Subes el código de tu computadora a un repositorio maestro gratuito en **GitHub** en internet usando comandos mágicos en consola llamados "Git".
    ```bash
    git add .
    git commit -m "Arreglé el color del botón"
    git push original main
    ```
3.  **Los Robots Mágicos (Vercel CI/CD):** 
    Recuerda que en el **Paso 2** (Escalar) amarraste **Vercel** a tu cuenta de **GitHub**.
    Al momento en que haces `git push`, Vercel (El servidor en la nube) tiene un robot que se entera al segundo y dice:
    * *"¡Ey! El ingeniero acaba de subir un arreglo a GitHub. Detengan las máquinas."*
    * El robot de Vercel crea un servidor virtual súper potente por 30 segundos, descarga tu nuevo código.
    * Corre el comando `npm run build` él solito en las nubes.
    * Reemplaza silenciosamente la vieja página web en internet por la nueva en todos los continentes del mundo entero.
4.  **Tú, mientras tanto:** Literalmente sólo te cruzas de brazos y tomas un café. En un minuto, los usuarios de tu web sólo tienen que presionar F5, y verán el cambio sin que tú jamás te hayas peleado con cables, servidores Linux pesados o archivos de la Nube. ¡Este es el poder del flujo CI/CD!
