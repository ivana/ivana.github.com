$(function(){

  $(window).load(function(){

    var currentPage = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];

    switch(currentPage) {
      case "about":
        $('nav a[href=/about]').parent().html($('nav a[href=/about]').html() + ' =');
        break;
    }

    $('body').css('min-height', screen.availHeight);

  });
  
});
