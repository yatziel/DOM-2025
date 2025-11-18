/* Seleccionar al elemento por su id */

const pokemones = document.getElementById("pokemones");

/* Mostramos por consola */

console.log(pokemones);

/* 

  innerText 

  Devuelve un "string" del contenido visible dentro de un elemento

  elemento.innerText

  - Excluye los elementos ocultos
  - Excluye los espacios en el documento 
  - Excluye las etiquetas de html 

*/

console.log(pokemones.innerText);

/* 

  textContent

  Devuelve un "string" del contenido visible dentro de un elemento. 

    elemento.textContent

  - Incluye los espacios
  - Incluye los elementos ocultos
  - Excluye las etiquetas html

*/

console.log(pokemones.textContent);

/* 

  innerHTML

  Devuelve un "string" con la estruccura interna de el elemento seleccionado.

    elemento.innerHTML

  - Incluye los espacios
  - Incluye los elementos ocultos
  - Incluye las etiquetas html

*/

console.log(pokemones.innerHTML);

/* 

  Modificar el contenido con innerText

  Asignar el valor al elemento selccionado.

  elemento.innerText = "contenido en string";

*/

// pokemones.innerText = "Snorlax yo te elijo! 😴";

const subtitulo = document.querySelector("h2");
const enlace = document.querySelector("a"); 

subtitulo.innerText = "Mis pokeamigos favoritos! ❤️";
enlace.innerText = "Pikapika! 💥";

/* 

  Modificar el contenido con textContent

  Asignamos un valor al elemento seleccionado

    elemento.textContent = "string";

*/

subtitulo.textContent = "Mis cuates! 🤗";
enlace.textContent = "Bola de fuego! 🔥";

/* 

  Modificar el contenido con innerHTML

  Asignamos el valor al elemento seleccionado incluyendo etiquetas html.

    elemento.innerHTML = "<etiqueta>...</etiqueta>";

*/

subtitulo.innerHTML = "¡Amigos <span class='resalte'>pokecitos</span>! 🏀"; 
enlace.innerHTML = "Aún más <span class='resalte'>pokemonstros</span>! 👹";


/* 

  getAttribute()

  Devuelve el valor del atributo del elemento.

  elemento.getAttribute(atributo);

  - El atributo pasa como string

*/

  console.log( enlace.getAttribute("href") );

/* 

  removeAttribute()

  Eliminamos el valor del atributo de un elemento.

    elemento.removeAttribute(atributo);

  - El atributo pasa como string

*/

  enlace.removeAttribute("href");

  console.log(enlace.getAttribute("href")); // Null

  /* 
  
    setAttribute()

    Asigna un atributo y un valor a un elemento.

      elemento.setAttribute(atributo, valor);

    - El atributo y valor pasan como string.
    - Sobreescribir un atributo ya declarado.
    - Crear un nuevo atributo y su valor.
  
  */

    enlace.setAttribute("href", "https://www.instagram.com");
    enlace.setAttribute("target" , "_blank");
    console.log(enlace.getAttribute("href")); // pagina de insta