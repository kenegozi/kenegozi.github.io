---
layout: post
title:  "HOWTO: Make Windows Live Writer Output XHTML Markup"
comments: true
tags: [miscellanea,tools]
---


Problem:

- The output you get from Windows Live Writer is not XHTML, i.e. unclosed br and img tags. 


&#160;

Possible causes:

- When you've setup your blog in Windows Live Writer, you have used a version older than Beta 3 
- Your blog's style couldn't have been detected by WLW 
- Your blog's style was been detected correctly, however you do not have a valid XHTML DOCTYPE declaration in your blog 


Setting XHTML output manually:

- Weblogs | Edit Weblog Settings | Advanced | Markup Type


&#160;

Thanks [Mr. Joe Chang](http://jcheng.wordpress.com), from the Windows Live Writer team, who have pointed that out for me.

