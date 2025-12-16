/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detecamos el evento movimiento del mouse */

document.addEventListener("mousemove", (e) => {
  /* console.log(e.clientX);
  console.log(e.clientY); */

  /* Guardamos las coordenadas en variables */
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  /* Aplicar las coordenadas al elemento emojiCursor */

  emojiCursor.style.left = `${mouseX}px`;
  emojiCursor.style.top = `${mouseY}px`;
});

/* Cambiar el emoji al presionar una tecla */

document.addEventListener("keydown", (e) => {
  /* Utilizamos Switch para asignar emoji y color de fondo */

  switch (e.key) {
    case "1":
      emojiCursor.textContent = "📦";
      document.body.style.backgroundColor = "#2E8B57"; // sea green
      break;
    case "2":
      emojiCursor.textContent = "😈";
      document.body.style.backgroundColor = "#8B0000"; // dark red
      break;
    case "3":
      emojiCursor.textContent = "💫";
      document.body.style.backgroundColor = "#1E90FF"; // dodger blue
      break;
    case "4":
      emojiCursor.textContent = "😵‍💫";
      document.body.style.backgroundColor = "#6A5ACD"; // slate blue
      break;
    default:
      emojiCursor.textContent = "🏹";
      document.body.style.backgroundColor = "#483D8B"; // dark slate blue
  }
});

/* Commit: "Ejercicio Event" */