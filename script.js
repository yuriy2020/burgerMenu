const header__body = document.querySelector(".header__body");
header__body.addEventListener("click", () => {
  document.querySelector(".header__menu").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("active");
  // запрет скроллинга
  document.querySelector('body').classList.toggle('lock')
});
 