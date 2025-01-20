import Splide from '@splidejs/splide';

new Splide('.splide').mount();

var splide = new Splide('.splide', {
  perPage: 3,
  focus: 0,
  omitEnd: true,
});

splide.mount();

new Splide('.splide', {
  classes: {
    arrows: 'splide__arrows your-class-arrows',
    arrow: 'splide__arrow your-class-arrow',
    prev: 'splide__arrow--prev your-class-prev',
    next: 'splide__arrow--next your-class-next',
  },
});

new Splide('.splide', {
  classes: {
    pagination: 'splide__pagination your-class-pagination',
    page: 'splide__pagination__page your-class-page',
  },
});

pagination: boolean = false;

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});
