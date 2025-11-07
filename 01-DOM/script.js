/* 

  Nodo de Documento

  Este nodo represeta el documento completo de HTML. Incluye el contenido raiz > root hasta los elementos hijos.

  Para acceder a este nodo usamos 👉 document

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 

  Nodo Elemento

  Podemos seleccionar nodos de los elementos del HTML

  document.getElementByTagName("element");

*/

let title = document.getElementsByTagName("h1");

console.log(title)
console.log(title[0].id)
console.log(title[0].className)

/* 

  Nodos de Atributo

  Son los nodos que accedemos a través de su clase o de su id.

    document.getElementById("id");
    document.getElementByClassName("clase");

    document.querySelector("nombreSelector"); 👉 Selecciona la primera coincidencia.
    document.querySelectorAll("nombreSelector"); 👉 Selecciona todas las coincidencias.

    Para querySelector y querySelectorAll hay que especificar el tipo de selector.
    
      "nombreEtiqueta" 👉 Si no lleva caracteres especiales selecciona etiquetas.
      ".nombreClase" 👉 Con un punto selecciona clases
      "#nombreId" 👉 Con un numeral selecciona id
*/

let parrafo = document.getElementById("puchunguito");

console.log(parrafo);
console.log(parrafo.innerText);

let bullet = document.getElementsByClassName("bullet");

console.log(bullet);

for(i = 0; i < bullet.length; i++) {
  console.log(bullet[i].innerText);
}

let main = document.querySelector("#main");

console.log(main)

let section = document.querySelectorAll(".section")

console.log(section)


/* 

  Nodo de Texto

  Las propiedades que permiten acceder a el contenido de los elementos de html.

  nodo.innerText
  nodo.textContent

*/

let subtitulo = document.querySelector("#subtitulo");

console.log(subtitulo);
console.log(subtitulo.innerText);
console.log(subtitulo.textContent);
console.log(subtitulo.innerHTML);