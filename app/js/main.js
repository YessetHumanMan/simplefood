$(function() {

$(window).on('scroll', function(){
  $('.header').toggleClass('fixed', $(this).scrollTop() > 0);
});

$('.reviews__slider').slick({
  dots:true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/sprite.svg#prev-arrow"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next-arrow.svg"></button>'
  

});

});

const mixer = mixitup('.popular-categories__filter-content');








