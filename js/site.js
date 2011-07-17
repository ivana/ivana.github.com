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
          //   var time = '<time>' + DateUtil.myDateFormat(item.pubDate) + '</time>';
          //   
          //   if(item.description) $('#delicious ol').append('<li>' + anchor + '<q>' + item.description + '</q>' + time + '</li>');
          //   else $('#delicious ol').append('<li>' + anchor + time + '</li>');
          //   
          //   break;
          
          case 'twitter':
            var anchor = '<a href="' + item.link + '"><q cite="' + item.link + '">' + item.title + '</q></a>';

            // datetime string format from twitter (item.pubDate): Sat, 16 Jul 2011 13:57:44 +0000
            var time = '<time>' + DateUtil.myDateFormat(new Date(item.pubDate)) + ' ' + DateUtil.getHoursAndMinutes(new Date(item.pubDate)) +  '</time>';

            $('#twitter ol').append('<li>' + anchor + time + '</li>');

            break;
        
          case 'greader':
            var anchor = '<a href="' + item.link + '">' + item.title + '</a>';

            // datetime string format from greader (item.published): 2011-07-09T11:04:42Z
            // new Date('2011-07-09T11:04:42Z') reports invalid date in Safari => haven't come up with better solution than this
            var year = item.published.match(/\d{4}/)[0];
            var month = item.published.match(/-\d\d-/)[0].match(/\d\d/)[0];
            var day = item.published.match(/-\d\dT/)[0].match(/\d\d/)[0];
            var time = '<time>' + DateUtil.myDateFormat(new Date(year * 1, month * 1 - 1, day * 1)) + '</time>';
            
            if(typeof item['gr:annotation'] != 'undefined') {
              $('#greader ol').append('<li>' + anchor + '<q>' + item['gr:annotation'].content.content + '</q>' + time + '</li>');
            } else $('#greader ol').append('<li>' + anchor + time + '</li>');

            break;
        
          case 'flickr':
          /* find something like http://farm3.static.flickr.com/2182/5785913956_007e54dc7c_m.jpg,
            turn it to http:\/\/farm3.static.flickr.com\/2182\/5785913956_007e54dc7c_m_d.jpg
            because we want the Medium 500 size of the photo from Flickr */
            var imgsrc = item.content.content.match(/http:\/\/farm.+.jpg/)[0].replace('_m.jpg', '_d.jpg');
            var anchor = '<a href="' + item.link + '"><img src="' + imgsrc + '" alt="' + item.title + '" /></a>';

            $('#flickr ol').append('<li>' + anchor + '</li>');
            break;
        
          // case 'lastfm':
          //   $('#lastfm p').append('<a href="' + item.url + '">' + item.name + ' </a>');
          //   break;
        }
      });
    });
  }
  
  DateUtil = {
    myDateFormat: function(date){
      return this.monthName[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    },
    
    getHoursAndMinutes: function(date){
      return date.toUTCString().match(/\d\d:\d\d/)[0] + ' GMT';
    },
    
    monthName:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
});
