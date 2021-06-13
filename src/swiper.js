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
  })
