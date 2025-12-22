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
});