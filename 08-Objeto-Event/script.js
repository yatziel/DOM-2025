/* 

  Objeto Event

  El objeto evento (e) es la representación de un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse. Nos proporciona información sobre las propiedades y métodos para manipularlo.
  
  Para acceder al objeto event  se pasa como argumento de la función manejadora (handler)

  Sintaxis:

    function handler(e) {
      // Código que se ejecuta
      console.log(e)
    }

  Algunas propiedades del objeto evento:

  type 👉 devolver el tipo de evento
  target 👉 devolver el elemento donde ocurre el evento
  timeStamp 👉 devuelve la marca de tiempo en milisegundos desde  la carga de la página.
  
  code 👉 devuelve el código  de la tecla presionada
  key 👉 devuelve el valor de la tecla presionada

  clientX 👉 devuelve la posición horizontal del puntero del mouse en relación a la ventana del navegador.
  clientY 👉 devuelve la posición vertical del puntero del mouse en relación a la ventana del navegador.

*/

// Referencia

const apachurra = document.getElementById('apachurra');

// Evento

apachurra.addEventListener('click' , mostrarObjetoEvento );

// Función Declarada

function mostrarObjetoEvento(event) {
  // Código que se ejectuta
  console.log(event);
  // Para acceder a las propiedades con .
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);
}

// Evento de teclas

document.addEventListener('keydown' , function(e) {
  // Codigo que se ejecuta cuando el usuario presione una tecla.
  // console.log(e);
  // console.log(e.type);
  // console.log(e.code);
  console.log(e.key); 
})

// Evento de mouse

document.addEventListener('mousemove' , (e) => {
  // Código que se ejectuta
  // console.log(e);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  console.log(`Las coordenadas de mi mouse son X: ${e.clientX} y de Y: ${e.clientY} y pues eso! 🤗`);
});

