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