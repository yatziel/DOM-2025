// Referencia del emoji del cursor

const cursor = document.querySelector(".cursor");

// Detectamos el evento del movimiento del mouse

document.addEventListener("mousemove" , (e) => {
  //console.log(e.clientX);
  //console.log(e.clientY);

  // Guardamos los datos en unas variables
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

} )

// Detectar el evento de presionar una tecla

document.addEventListener("keydown" , (e) => {
  // console.log(e.key);
  /* Usar switch para asignar el emoji al mouse */

  switch (e.key) {
    case "1":
      cursor.innerText = "🪅";
      document.body.style.backgroundColor = "#13dd6e";
      break;
    case "2":
      cursor.innerText = "☃️";
      document.body.style.backgroundColor = "#ddb513";
      break;
    case "3":
      cursor.innerText = "🥳";
      document.body.style.backgroundColor = "#dd1313";
      break;
    case "4":
      cursor.innerText = "🦁";
      document.body.style.backgroundColor = "#5d13dd";
      break;
    default:
      cursor.innerText = "💩";
      document.body.style.backgroundColor = "#dd136e";
  }
})