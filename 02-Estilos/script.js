/* 

  Seleccionar el h1 a través de su clase

*/

const titulo = document.querySelector(".titulo");

/* 

  Mostrar el nodo seleccionado

*/

console.log(titulo);

/* 

  Objeto Style

  Acceder a este objeto usando la notación de punto. 

    nodo.style

  Resultado es CSS Style Declaration. Es decir una lista que representa todas las propiedades de estilo de un elemento.

  Las propiedades cambian del formato kebab-case a camelCase. 

  Unicamente muestra el valor de los estilos en línea declarados directamente en el elemento html.

*/

console.log(titulo.style);

/* 

  Para acceder a las propiedades de estilo usamos la notación de (.)

    nodo.style.nombrePropiedad


*/

console.log("El color del titulo es: " +  titulo.style.color);


/* 

  Asignar un valor a la propiedad de estilo del nodo seleccionado.

    node.style.color = valor
*/

titulo.style.color = "green";
titulo.style.backgroundColor = "yellow";
titulo.style.fontSize = "120px";


/* 

  Método setProperty()

  Asignamos una propiedad de estilo a un elemento seleccionado.

  Sintaxis:

  elemento.style.setProperty(nombrePropiedad, valor, important);

  - Más flexible, y por lo tanto más usado.
  - Las propiedades se escribe en kebab-kase
  - El parametro "important" es opcional.

*/

titulo.style.setProperty('color', 'darkblue');
titulo.style.setProperty('background-color', 'green', 'important')


/* 

  Eliminar valores de propiedades del nodo seleccionado

  nodo.style.nombrePropiedad = "" // Asignamos una cadena vacía

  En esta sintaxis, la propiedad de CSS va en formato camelCase.

*/

// titulo.style.color= "";
// titulo.style.backgroundColor = "";

/* 

  Metodo removeProperty()

  Esto elimina la propiedad de estilo.

  Sintaxis:

  elemento.style.removeProperty(nombre-propiedad)

  El nombre de la propiedad es en formato kebab-case

*/

titulo.style.removeProperty('color');
titulo.style.removeProperty('background-color');
titulo.style.removeProperty('font-size');


