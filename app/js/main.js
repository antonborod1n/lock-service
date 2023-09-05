import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.querySelector('.menu__burger');
  const menuBox = document.querySelector('.menu__box');

  console.log(menuBurger);

  menuBurger.addEventListener('click', function () {
    menuBox.classList.toggle('active');
  });
});

const swiper = new Swiper('.swiper', {
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
});
