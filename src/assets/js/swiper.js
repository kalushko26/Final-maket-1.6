import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const slider = document.querySelector('.swiper');

let mySwiper;

function enableSwiper() {

  if (window.innerWidth < 768) {

    if (document.querySelector('.swiper').dataset.mobile == 'false') {

      mySwiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: ('.swiper-pagination'),
          type: 'bullets',
        },
      });

    }

    document.querySelector('.swiper').dataset.mobile = 'true';

  } else {

    document.querySelector('.swiper').dataset.mobile = 'false';

    if (document.querySelector('.swiper').classList.contains('swiper-initialized')) {

      mySwiper.forEach(element => {
        element.destroy();
      });

    }

  }

}

enableSwiper();

window.addEventListener('resize', () => {
  enableSwiper();
});


