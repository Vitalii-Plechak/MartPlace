$(function(){

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "12px",
  });
  
  $('.list__slider-inner').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

});