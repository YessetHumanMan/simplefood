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

});

const mixer = mixitup('.popular-categories__filter-content');








