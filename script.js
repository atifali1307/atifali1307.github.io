function github(){
    window.open(
        "https://github.com/atifali1307","_blank");
}
function twitter(){
    window.open(
        "https://twitter.com/atifali13072000","_blank");
}
function instagram(){
    window.open(
        "https://instagram.com/atifali1307/","_blank");
}
function lkdin(){
    window.open(
        "https://www.linkedid.com/in/atif-ali-033839203/","_blank");
}

$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
