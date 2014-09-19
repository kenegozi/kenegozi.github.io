---
layout: post
title:  "AspView - Yet another MonoRail ViewEngine"
comments: true
tags: [asp-net-2-0,visual-studio,visual-studio-2005,c-sharp,castle,monorail,aspview]
---

  .hlt { background-color:yellow;}  
So what is AspView?

It is a Visual Studio 2005 friendly ViewEngine implementation.

The scripting is done using VisualStudio languages (c# and VB.NET). The views are precompiled, (or can be compiled on-demand, but anyway not interpreted).

The project was inspired by the [Brail ViewEngine](http://www.castleproject.org/monorail/documentation/trunk/viewengines/brail/index.html), but since it doesn't use [Boo](http://boo.codehaus.org/) it is more Management-Friendly, since they need not worry about getting out of the "safe" microsoft world.

I tend to like Boo as a language very much, and [I like Brail](http://kenegozi.com/blog/2006/09/20/MyPresentationLayerOfChoiceBrailOverCastlesMonoRail.aspx) a lot, too (since it allows for less code in the view thanks to the Boo magic) but I lack the tight Visual Studio integration (opening .boo files in #Develop messes up my desktop), and the intellisense is quite important, at least for the developers I worl with.

So I will post in the next few days about it, and I'll make it available to be downloaded (source and binary) as soon as I'll test it a little more. I hope to have a public svn repository soon.

A little demo view:

```
   1:  &lt;%@ Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime"%&gt;   2:  &lt;%   3:  string[] strings;   4:  %&gt;   5:     6:     7:  hello from index&lt;br /&gt;   8:  This are the strings:&lt;br /&gt;   9:  &lt;%foreach (string s in strings) { %&gt;  10:  &lt;%=s %&gt;&lt;br /&gt;  11:  &lt;%  } %&gt;  12:    13:  &lt;br /&gt;  14:  End of normal view  15:  &lt;br /&gt;  16:  &lt;% OutputSubView("Home/SubViewSample"); %&gt;
```

