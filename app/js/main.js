window.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.querySelector('.menu__burger');
  const menuBox = document.querySelector('.menu__box');

  console.log(menuBurger);

  menuBurger.addEventListener('click', function () {
    menuBox.classList.toggle('active');
  });
});
