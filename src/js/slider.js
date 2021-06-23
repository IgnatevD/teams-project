$(document).ready(function(){
  console.log($('.review__container'))
  $('.desc__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.review__box'
  });
  $('.review__box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.desc__box',
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplay:true,
  autoplaySpeed:1500,
    focusOnSelect: true,
    responsive: [
     
      {
        breakpoint: 767,
          settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});