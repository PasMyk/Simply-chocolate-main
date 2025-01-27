new Swiper('.food-swiper');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

      clickable: true,

      swiperTop: 32,
    },

    slidesPerView: 4,

    spaceBetween: 18,

    direction: 'horizontal',

    simulateTouch: false,

  });