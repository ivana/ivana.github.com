---
layout: post
---

Recently I created a page here called [Echoes][] that aggregates my social activity from various sites such as Twitter, Flickr, Delicious bookmarks and more. Because this site is static, I needed a service that can:

1. Grab the feeds from multiple sources,
2. Aggregate, transform and filter content so the end result only contains recent activity,
3. Output the result as [JSON-P][jsonp] so I can pull it into my site with JavaScript.

[Yahoo Pipes][ypipes] is a service that can perform all of the above and, because of its graphical interface of connecting balloons with pipes, it's also tons of fun to play with for days.

My [Echoes pipe][pipe] is public, so feel free to view the source or clone it. You can also [view the JavaScript code](/js/site.js) that fetches the pipe output and merges it with the markup of the [Echoes][] page.


[echoes]: /echoes
[ypipes]: http://pipes.yahoo.com/pipes/
[pipe]: http://pipes.yahoo.com/ivana/echoes
[jsonp]: http://remysharp.com/2007/10/08/what-is-jsonp/