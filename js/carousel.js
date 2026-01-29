const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 2,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  800: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 2,
  },
},
});