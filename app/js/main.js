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

function accardion(tiggerSelector) {
  const btns = document.querySelectorAll(tiggerSelector);

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');

      if (this.classList.contains('active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

  /*   blocks.forEach((block) => {
    block.classList.add('fadain');
  });

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        btns.forEach((item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  }); */
}

accardion('.faq__subtitle');
accardion('.service__title');

const topBtn = document.querySelector('.top__btn');
const orderPopup = document.querySelector('.popup1');
const completedPopup = document.querySelector('.popup2');
const closePopup = orderPopup.querySelector('.popup__close');

topBtn.addEventListener('click', function () {
  orderPopup.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', function () {
  orderPopup.classList.remove('active');
  document.body.style.overflow = '';
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
