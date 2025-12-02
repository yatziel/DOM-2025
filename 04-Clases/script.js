/* 

  Acceder al primer elemento de la lista.  

*/

const botanas = document.getElementsByTagName("li");

console.log(botanas[0]);

/* 

  Propiedad classList

  Devuelve un DOM Token List o listado de Clases en el DOM. La lista de clases de un elemento html.

  sintaxis:

    elemento.classList

  Podemos acceder a las clases a través de su índice.

*/

console.log( botanas[0].classList ); // DOM Token List
console.log( botanas[0].classList[1]); //  semilla

/* 

  Podemos agregar clases usando el método add()

  sintaxis:

    elemento.classList.add("nombre-clase");

*/

botanas[2].classList.add("picante"); 

console.log( botanas[2].classList );

/* 

  Podemos verificar si existe una clase en un elemento con el método contains()

  Sintaxis:

    elemento.classList.contains("nombre-clase");

  - Devuelve true si existe la clase
  - Devuelve false si no existe la clase

*/

console.log( botanas[1].classList.contains("botana") ); // true
console.log( botanas[1].classList.contains("picante") ); // false

/* 

  Podemos eliminar una clase usando el método remove()

  sintaxis:

    elemento.classList.remove("nombre-clase");
*/

botanas[3].classList.remove("botana");

console.log( botanas[3].classList );
