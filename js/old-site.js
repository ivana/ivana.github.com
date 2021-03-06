$(function(){

  var currentPage = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2]

  // current page indicator
  var navAnchor = $('.top a[href="/' + currentPage + '"]')
  navAnchor.closest('li').addClass('current').html('<span>' + navAnchor.text() + '</span>')

  // echoes
  if(currentPage == 'echoes'){
    $.getJSON('http://pipes.yahoo.com/ivasilj/echoes?_render=json&_callback=?', function(data){

      $.each(data.value.items, function(i, item){
        switch(item.src){

          case 'pinboard':
            var anchor = '<a href="' + item.link + '">' + item.title + '</a>'
            var time = '<time>' + DateUtil.myDateFormat(new Date(item.pubDate)) + '</time>'

            if(item.description) $('#pinboard').append('<li>' + anchor + '<q>' + item.description + '</q>' + time + '</li>')
            else $('#pinboard').append('<li>' + anchor + time + '</li>')
            break

          case 'twitter':
            // datetime string format from twitter (item.pubDate): Sat, 16 Jul 2011 13:57:44 +0000
            var time = '<time>' + DateUtil.myDateFormat(new Date(item.pubDate)) + ' ' + DateUtil.getHoursAndMinutes(new Date(item.pubDate)) +  '</time>'
            var anchor = '<a href="' + item.link + '"><q cite="' + item.link + '">' + item.title + '</q></a>'

            $('#twitter').append('<li>' + anchor + time + '</li>')
            break

          case 'flickr':
          /* find something like http://farm3.static.flickr.com/2182/5785913956_007e54dc7c_m.jpg,
            turn it to http:\/\/farm3.static.flickr.com\/2182\/5785913956_007e54dc7c_z_d.jpg
            because I want the Medium 640 size of the photo from Flickr */
            var imgsrc = item.content.content.match(/http:\/\/farm.+.jpg/)[0].replace('_m.jpg', '_z_d.jpg')
            var anchor = '<a href="' + item.link + '"><img class="bordered fit" src="' + imgsrc + '" alt="' + item.title + '"></a>'

            $('#flickr').append('<li>' + anchor + '</li>')
            break
        }
      })
    })
  }

  // photography
  if(currentPage == 'photography'){
    $.getJSON('http://pipes.yahoo.com/ivasilj/flickr_publish?_render=json&_callback=?', function(data){

      $.each(data.value.items, function(i, item) {
        var title = '<h1>' + item.title + '</h1>'
        var link = item.link + 'lightbox'
        var imgsrc = item.content.content.match(/http:\/\/farm.+.jpg/)[0].replace('_m.jpg', '_z_d.jpg')
        var photo = '<a href="' + link + '" target="_blank"><img class="fit" src="' + imgsrc + '" alt="' + item.title + '"></a>'

        $('#photography').append('<article>' + photo + title + '</article>')
      })

    })
  }

  DateUtil = {
    myDateFormat: function(date){
      return this.monthName[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
    },

    getHoursAndMinutes: function(date){
      return date.toUTCString().match(/\d\d:\d\d/)[0] + ' GMT'
    },

    monthName:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
})
