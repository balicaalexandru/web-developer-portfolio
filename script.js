// Burger Menu //
let menuBtn = document.querySelector("#menu-btn");
let menuBar = document.querySelector(".menu-bar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  menuBar.classList.toggle("active");
};
