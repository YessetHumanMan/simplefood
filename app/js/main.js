$(function() {

$(window).on('scroll', function(){
  $('.header').toggleClass('fixed', $(this).scrollTop() > 0);
});

$('.reviews__slider').slick({
  dots:true,
  prevArrow: '<button type="button" style="width: 35px; height: 35px; border-radius: 50%;" class="slick-prev"><svg width="11" height="19" "images/sprite.svg#slider-prev-icon"></button>',
  nextArrow: '<button type="button" style="width: 35px; height: 35px; border-radius: 50%;" class="slick-next"><svg width="34" height="34" "images/sprite.svg#slider-next-icon"></button>'
  

});

});

const mixer = mixitup('.popular-categories__filter-content');








