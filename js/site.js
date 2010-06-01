$(function(){

  $(window).load(function(){

    var currentPage = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
    $('nav a[href=/' + currentPage + ']').parent().html($('nav a[href=/' + currentPage + ']').html() + ' =');

    $('body').css('min-height', screen.availHeight);

    // echoes
    if(currentPage == 'echoes'){

      $.getJSON('http://pipes.yahoo.com/ivana/echoes?_render=json&_callback=?', function(data){
        $.each(data.value.items, function(i, item){
          switch(item.src){
            case 'delicious':
              if(item.description){
                $('#delicious ol').append('<li><a href="' + item.link + '">' + item.title + '</a><p>' + item.description + '</p></li>');
              } else $('#delicious ol').append('<li><a href="' + item.link + '">' + item.title + '</a></li>');
              break;
            case 'twitter':
              $('#twitter ol').append('<li><a href="' + item.link + '"><q>' + item.title + '</q></a></li>');
              break;
            case 'greader':
              if(typeof item['gr:annotation'] != 'undefined'){
                $('#greader ol').append('<li><a href="' + item.link + '">' + item.title + '</a><q>' + item['gr:annotation'].content.content + '</q></li>');
              } else $('#greader ol').append('<li><a href="' + item.link + '">' + item.title + '</a></li>');
              break;
            case 'flickr':
              $('#flickr ol').append('<li><a href="' + item.link[0] + '"><img src="' + item.link[2] + '" alt="' + item.title + '" /></a></li>');
              break;
          }
        });
      });
    }

  });

});
