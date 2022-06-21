$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() > 2000) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0}, 800);
     
    });
     
    });