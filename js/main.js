// funcion para modificar las imagenes
function parallax() {
  flowerOne.style.top = -(pageYOffset / 20) + "px";
  flowerTwo.style.top = -(pageYOffset / 5) + "px";
  flowerFour.style.top = -(pageYOffset / 1) + "px";
}

function start() {
  flowerOne = document.querySelector(".flowerOne");
  flowerTwo = document.querySelector(".flowerTwo");
  flowerFour = document.querySelector(".flowerFour");
}

// // listener que llama a la funcion parallax, donde se cambia el style
window.addEventListener("scroll", parallax);

// // listener a la pantlla al inicializar
window.addEventListener("load", start);
