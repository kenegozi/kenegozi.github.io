---
layout: post
title:  "Nesting View Components in AspView"
comments: true
tags: [castle,monorail,aspview]
---


Following a request from Gauthier Segay, AspView now supports nested view components.



scenarion: you are using CaptureFor to inject markup from a view to a layout, and you want the injected markup to include a view component output.



in the layout:

```
...&lt;%=CapturedContent %&gt;...
```



in the view:

```
...&lt;component:CaptureFor id="CapturedContent"&gt; Some markup &lt;component:SomeFancyStuff&gt;Fancy component content&lt;/component:SomeFancyStuff&gt;&lt;/component:CaptureFor&gt;
```



While working on that, I found out yet another problem. nested components of same type would brake

so:

```
&lt;component:Bold&gt;&lt;component:Bold&gt;stuff&lt;/component:Bold&gt;&lt;/component:Bold&gt;
```

would brake.

As you probably might know, the whole preprocessing of view, from AspView syntax to standard C# is done with Regular Expressions. For quickly doing the above, I helped myself to [http://puzzleware.net/blogs/archive/2005/08/13/22.aspx](http://puzzleware.net/blogs/archive/2005/08/13/22.aspx) in order to build the balanced tags aware regular expression, and now it works like a charm. [Roy Osherove](http://weblogs.asp.net/rosherove/)'s [Regulator](http://tools.osherove.com/CoolTools/Regulator/tabid/185/Default.aspx) was helpful, too.



So, as of revision 360 in Castle Contrib repository, nesting view components works (for both the trunk and the RC3 compatible branch)



As usual - go to [http://www.aspview.com](http://www.aspview.com) to get the binaries, or to [http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/) for the sources.



Cheers.

