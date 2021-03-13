$(function(){
    $('#button').on('click',function(){
        $('.popup').addClass('show').fadeIn();
    });
      
    $('#close').on('click',function(){
        $('.popup').fadeOut();
    });
});