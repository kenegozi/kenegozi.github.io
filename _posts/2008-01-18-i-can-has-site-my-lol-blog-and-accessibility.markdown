---
layout: post
title:  "I CAN HAS SITE - My LOL Blog, And Accessibility"
comments: true
tags: [client-side,css,html]
---


There's this cool little site that LOL-ify any web page.

[This is how my blog would've looked like had I been a kitten](http://lolinator.com/lol/kenegozi.com/blog). It would also most probably be written in [LOLCODE.NET](http://www.iunknown.com/2007/11/lolcode-on-dlr.html)



Now, the interesting part.



I got that through [Roy Osherove's blog](http://weblogs.asp.net/rosherove/archive/2008/01/17/very-off-topic-i-can-haz-a-site.aspx). [That's how his blog looks like when LOL-fied](http://lolinator.com/lol/weblogs.asp.net/rosherove).



Can you see the difference?



When designing my blog's markup, I paid good attention to the fact that the actual content (posts) should come before the side-bar with links, archive, blogroll, ads or whatever.



The more 'legacy' kind of web design (usually with tables, but can also be "achieved" with div/css) is to box everything around the content, and having the ViewContents (or ContentPlaceholder) as the last thing on the Layout (or MasterPage).



So when my blog is being read by a machine (that parses html), the important things is first.

You might say - I don't give a crap about LOL sites, and my site is for humans, not machines.

But what about the blind who 'reads' helped by a machine that reads the page and say it out loud? must they get the whole links part on every page before they get to the content?

What about search index bots? we should help them get to the content.

