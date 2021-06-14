var menu = [' ', ' ', ' ', ' ', ' ', ' ']

var mySwiper = new Swiper ('.swiper-container', {
  speed: 300,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },

  });

/* ---------------------------------------------------------------------------------------------------------------------- */
/*--------- This function changes the color of the pseudo-element in the background depending on the selected slide ---------*/
/* ---------------------------------------------------------------------------------------------------------------------- */

  mySwiper.on('slideChangeTransitionEnd', function () {
    let bgElement = document.querySelector('.swiper-slide-active .swiper__img');
    bgElement = ('url(' + (bgElement.src.substring(21, 100)) + ') center / cover no-repeat');
    document.documentElement.style.setProperty("--bgMainScreen", bgElement);

  });

