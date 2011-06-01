$(function(){

  // current page indicator
  var currentPage = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
  var navAnchor = $('nav a[href=/' + currentPage + ']');
  navAnchor.closest('li').html(navAnchor.html() + ' =').prependTo($('nav ol'));

  // min height determined by screen, not content
  $('body').css('min-height', screen.availHeight);

  // echoes
  if(currentPage == 'echoes'){
    $.getJSON('http://pipes.yahoo.com/ivana/echoes?_render=json&_callback=?', function(data){
      
      $.each(data.value.items, function(i, item){
        switch(item.src){
          
          // case 'delicious':
          //   var anchor = '<a href="' + item.link + '">' + item.title + '</a>';
          //   var time = '<time>' + DateUtil.myFormat(new Date(item.pubDate)) + '</time>';
          //   
          //   if(item.description) $('#delicious ol').append('<li>' + anchor + '<q>' + item.description + '</q>' + time + '</li>');
          //   else $('#delicious ol').append('<li>' + anchor + time + '</li>');
          //   
          //   break;
          
          case 'twitter':
            var anchor = '<a href="' + item.link + '"><q cite="' + item.link + '">' + item.title + '</q></a>';
            var time = '<time>' + DateUtil.myFormat(new Date(item.pubDate)) + ' ' + DateUtil.getHoursAndMinutes(new Date(item.pubDate)) +  '</time>';
            
            $('#twitter ol').append('<li>' + anchor + time + '</li>');
            
            break;
        
          case 'greader':
            var anchor = '<a href="' + item.link + '">' + item.title + '</a>';
            var time = '<time>' + DateUtil.myFormat(new Date(item.published)) + '</time>';
            
            if(typeof item['gr:annotation'] != 'undefined') {
              $('#greader ol').append('<li>' + anchor + '<q>' + item['gr:annotation'].content.content + '</q>' + time + '</li>');
            } else $('#greader ol').append('<li>' + anchor + time + '</li>');

            break;
        
          case 'flickr':
            var anchor = '<a href="' + item.link[0] + '"><img src="' + item.link[2] + '" alt="' + item.title + '" /></a>';

            $('#flickr ol').append('<li>' + anchor + '</li>');
            break;
        
          case 'lastfm':
            $('#lastfm p').append('<a href="' + item.url + '">' + item.name + ' </a>');
            break;
        }
      });
    });
  }
  
  DateUtil = {
    myFormat: function(date){
      return this.monthName[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    },
    
    getHoursAndMinutes: function(date){
      var time = date.toLocaleTimeString();
      return time.match(/^\d\d:\d\d/)[0];
    },
    
    monthName:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
});
