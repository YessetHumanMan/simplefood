$(function() {

$(window).on('scroll', function(){
  $('.header').toggleClass('header--fixed', $(this).scrollTop() > 0);
});

$('.reviews__slider').slick({
  dots:true,
  infinite:false,
  prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg class="reviews__arrow-svg reviews__arrow-svg--prev" "images/sprite.svg#slider-prev-icon"></button>',
  nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg class="reviews__arrow-svg reviews__arrow-svg--next" "images/sprite.svg#slider-next-icon"></button>'
  

});

$('.burger, .burger-page__btn-close').on('click', function () {
  $('.burger-page').toggleClass('active');
  $('body').toggleClass('lock');
  
});

})

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
   

  },
});

const mixer = mixitup('.popular-categories__filter-content');