$(function(){

  $(window).load(function(){

    var currentPage = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
    $('nav a[href=/' + currentPage + ']').parent().html($('nav a[href=/' + currentPage + ']').html() + ' =');

    $('body').css('min-height', screen.availHeight);

  });

});
