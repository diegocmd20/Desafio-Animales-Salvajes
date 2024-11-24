# Desafío Animales Salvajes

**Objetivo:** Implementar los conocimientos de JavaScript Orientado a Objetos.

📍 Puedes visualizar tu proyecto haciendo click aquí: https://desafio-animales-salvajes.vercel.app/


## Descripción:

1. HTML:

   - Implementación de Framework CSS Bootstrap.
   - Formulario con `<select>` para eligir animales y su edad.
   - Sección de `<textarea>` para escribir comentarios.
   - Imagen dinámica.
   - Creación de Tarjeta de forma interactiva

2. `animal.js` :

   - Clases con Herencias para cada animal que tenga como características: *nombre*, *edad*, *imagen*, *comentarios* y *sonido*.
   - Función `reproducirSonido()` para reproducir el Sonido del Animal seleccionado.

3. `dom.js` :

   - Creación de Tarjeta con los datos de cada Animal
   - Creación de Modal para cada Animal

4. `main.js` :

   - Exportación de Clases y Funciones de `animal.js` y `dom.js`.
   - Función Autoejecutable que muestra un `console.log`.
   - Función que cambia el DOM del formulario con el animal seleccionado.
