var swiper = new Swiper(".inner", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.inner:nth-child(2)',
    prevEl: '.inner:nth-child(3)',
  },
});

var mySwiper = new Swiper(".inner", {
  pagination: {
    el: '.maintitle',
    clickable: true,
    dynamicBullets: true,
  },
});
