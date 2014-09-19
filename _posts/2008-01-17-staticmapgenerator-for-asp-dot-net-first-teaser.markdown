---
layout: post
title:  "StaticMapGenerator for ASP.NET, First Teaser"
comments: true
tags: [asp-net-2-0,tools,monorail]
---


Last night I got frustrated with the fact that I have no intellisense (nor compile time check) for locating static files like .js, .css and image files.

So I sat up and created a simple console application that can generate exactly that, out of the site's filesystem.



usage:

```
D:\MyTools\StaticMapGenerator /site:D:\Dev\MySite
```

it generates a file called Static.Site.Generated.cs within the site's root folder, and then I go and include that file in my web project.

No I can do stuff like:

```
&lt;script type="text/javascript" src="<%= Static.Site.Include.Scripts.myscript_js %&gt;"> &lt;/script&gt;&lt;link rel="stylesheet" href="<%= Static.Site.Include.CSS.master_css %&gt;" />&lt;img alt="Ken Egozi" title="My Logo" src="<%= Static.Site.Include.Images.Logos.my_logo_png" /&gt;
```



How cool is that?

It works in every ASP.NET compatible web framework (MonoRail, ASP.NET MVC, even WebForms ...)

The only prequisite is .NET 2.0 runtime.



Sorry for keeping it out of reach for the moment. I need a little bit of time to setup a svn repository to make the source public (it would of course be BSD/Apache2/MIT thing) and to upload a binary. No promises given, I'll try to make it in the coming weekend, or even tonight, so stay tuned.

The code is somewhat naive, and certainly does not cover any edge cases, however it's enough to work cleanly on the largest project I'm currently involved in (Music Glue). Patches to make it more configurable and able to handle more edge cases would be gladly accepted once it's out.



One cool spot - as part of this, [I have also implemented my tiny IoC container in 33 LoC](http://kenegozi.com/Blog/2008/01/17/its-my-turn-to-build-an-ioc-container-in-15-minutes-and-33-lines.aspx).

