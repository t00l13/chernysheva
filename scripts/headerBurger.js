$(document).ready(function() {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
    $('.header__link, .header__link-connect').click(function (event){
        $('.header__burger,.header__menu').removeClass('active');
    })
  });
  