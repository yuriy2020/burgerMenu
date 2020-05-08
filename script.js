const header__body = document.querySelector(".header__body");
const menubar = document.querySelector(".header__menu");
const burger = document.querySelector(".header__burger");
header__body.addEventListener("click", () => {
  menubar.classList.toggle("active");
  burger.classList.toggle("active");
});
