---
layout: post
title:  "HTML, Assembly, and in between"
comments: true
tags: [client-side,css,html]
---


Ok, so I've read [Scott McMaster's post where he made some comparison between HTML and Assembly](http://softwaredevscott.spaces.live.com/Blog/cns!1A9E939F7373F3B7!429.entry).

My first reaction had been: "Must be another of those HTML frightened guys". I knowI have been one in the past.

But then I've read the small [debate that evolved around that post, over at Ayende's blog](http://ayende.com/Blog/archive/2007/08/25/HTML-amp-Assembly.aspx#feedback), and I understand Scott's point better (even though I totally disagree, for the reason so beautifully written by Faisel).

Now I'd like to refer to the"Need of abstraction" for all those "I'm scared of HTML"guys. 

HTML is easy.

Really.

Ask any 12 year who've read a "Build your webpage" book.

Ask any decent web designer who can hack together flying menus and 3d buttons without knowing the difference between 'for' and 'while'.

Browser compatibility issues? You kid me? w3schools + quircksmode, and thanks to FF+Safari+IE7 it's becoming less of an issue by the day.

Css? that's really a bright idea. Very intuitive and meaningful. The ultimate DSL.

The only 'problem' is Javascript, that wasn't maturing fast enough in terms of a standard library, but thanks to prototype and the likes, and since Steve-Yegge announced that NBL is Javascript 2.0, hopefully the browsers soon would implement some stuff to make Javascript the great language it should be in a standardized way.

Building a html/css combination to comply with a crazy designer's psd is a child's play. Adding an advanced "sort the grid, and do some async web calls" is easier than writing your own Data Access code correctly. I saw a lot more of a bad data access code than bad DHTML code, and since most Data-Access code is private while most DHTML code is wide open in the wild, I must conclude that it must be easier to make a website's UI work than to have connections open-late and close-early.

Remember,I was a web-scared guy for a long time, and Asp.NET 1.0 with it's ViewState and int.TryParse(txtAge.Text, out age) was the entry point to the browser for me. It took a lot for me to understand that I must learn HTTP, HTML and Javascript, and shockingly enough I realized thatit's a far simpler model than the so-called "abstraction" of WebForms.

And in the future?

Silverlight/Flex/whatever could have been the future, but it surly ain't the near one. It's a matter of standards. xhtml 1.1, CSS 2, Javascript 1.2,those are standard. The differences between Safari, FF2 and IE7are minimal nowadays. It would take a lot of time (imho) until most web-sites would run purely on abrowser runtime thing. Not to mention that XHTML is cross platform down to almost any device these days. and that the textual nature of XHTML makes it very fast, and supportive of the "Let's index all knowledge over the WWW" thing that some small start-up companies (like Google) are pushing.





That was one of the strangest rants I've ever done.

