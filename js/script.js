$(document).ready(function () {
  $(".infographics").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });

  $('.header__menu').click(function() {
    $('.menu').toggleClass('is-open');
  });

  $('.menu__close-bar').click(function() {
    $('.menu').toggleClass('is-open');
  });
});
