---
layout: post
title:  "Google Reader bug leading to a glitch in my feed"
comments: true
tags: [blog-engine,tools]
---


I have recently change the blog engine, and as part of that move, the permalinks for posts changed a bit (removed the .aspx suffix, and also got rid of the www. prefix)



So, the atom feed now lists a different <id> tag for each entry (post). 

Google Reader cache data on posts based on the id tag, therefore subscribers to my blog who are using Google Reader will probably see 20 new messages.



The real glitch though is a bug in Google Reader. As far as reader is concerned, the <updated> and <created> tags does not mean a lot. It uses the time at which it discovered the entry as its date, for display (and sorting). This is arguable, and their argue is solid - since feeds are (at least historically) primarily made for news, they wanted to disallow publishers to twist scoop times.



So, I can understand why all my last 20 entries re-appear with the same date.

The annoying part is that Reader chooses a weird way to sort them. It could have at least use the publish date as a secondary sort order.



So, sorry for the glitch, and for those of you coming to my site, sorry for the poor UI design - a full redesign is in the make and will be pushed as soon as I can.

