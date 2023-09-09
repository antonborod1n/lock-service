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

  function accardion(tiggerSelector) {
    const btns = document.querySelectorAll(tiggerSelector);

    btns.forEach((btn) => {
      btn.addEventListener('click', function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');

        if (this.classList.contains('active')) {
          this.nextElementSibling.style.maxHeight =
            this.nextElementSibling.scrollHeight + 80 + 'px';
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

  function modal() {
    const btns = document.querySelectorAll('.js-modal');
    const modal = document.querySelector('.popup1');
    const completedPopup = document.querySelector('.popup2');
    const close = document.querySelector('.popup__close');

    console.log(btns);

    btns.forEach((item) => {
      item.addEventListener('click', function () {
        modal.classList.add('active');
        /*  document.body.style.overflow = 'hidden'; */
      });
    });

    close.addEventListener('click', function () {
      modal.classList.remove('active');
      /* document.body.style.overflow = ''; */
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  modal();
});
