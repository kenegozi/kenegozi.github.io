---
layout: post
title:  "XSS, HttpEncode, AspView and being Secure By Default"
comments: true
tags: [architecture,castle,monorail,aspview]
---


If you know not what XSS is or how easily you can expose your application to XSS, take a short read at the next posts:

- [http://damieng.com/blog/2007/12/10/how-dangerous-is-html-injection](http://damieng.com/blog/2007/12/10/how-dangerous-is-html-injection)
- [http://damieng.com/blog/2007/12/18/5-signs-your-aspnet-application-may-be-vulnerable-to-html-injection](http://damieng.com/blog/2007/12/18/5-signs-your-aspnet-application-may-be-vulnerable-to-html-injection)
- [http://blog.wekeroad.com/2007/12/19/in-which-we-discuss-html-encoding/](http://blog.wekeroad.com/2007/12/19/in-which-we-discuss-html-encoding/)




AspView was written by me, for my (and my employer at the time) use. Therefore, I did not make it 'secure by default' in terms of HttpEncode.



However, seeing now that the convention lean toward outputing HtmlEncode-ed by default, I'm adapting AspView to that.



The usage would be similar to the one suggested for Asp.NET MVC at [http://blog.codeville.net/2007/12/19/aspnet-mvc-prevent-xss-with-automatic-html-encoding/](http://blog.codeville.net/2007/12/19/aspnet-mvc-prevent-xss-with-automatic-html-encoding/)



So, 

```
&lt;%="<tag&gt;" %> 
```

would output 

```
&amp;lt;tag&amp;gt;
```



While

```
&lt;%=RawHtml("<tag&gt;") %>
```

would output 

```
&lt;tag&gt;
```



The only exception here is ViewContents on layouts. since the view contents is 99% of the times made of markup, so in the layout would still write:

```
&lt;%=ViewContents %&gt; 
```



All of that stuff is being implemented with AspView trunk (versions 1.0.4.x) that works with Castle trunk.

If anyone wishes me to bubble it down to the 1.0.3.x branch (for Castle RC3), please leave your comments here. Unless I'll see that people actually want that I would probably not make the effort.

