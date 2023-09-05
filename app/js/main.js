/* import Swiper from 'swiper'; */

window.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.querySelector('.menu__burger');
  const menuClose = document.querySelector('.menu__close');
  const menuBox = document.querySelector('.menu__box');

  menuBurger.addEventListener('click', function () {
    menuBox.classList.add('active');
    menuBurger.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });

  menuClose.addEventListener('click', function () {
    menuBox.classList.remove('active');
    menuBurger.style.display = '';
    document.body.style.overflow = '';
  });
});

/* const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); */
