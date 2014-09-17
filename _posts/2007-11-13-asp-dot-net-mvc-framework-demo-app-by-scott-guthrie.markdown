---
layout: post
title:  "ASP.NET MVC Framework - Demo App by Scott Guthrie"
comments: true
tags: [castle,monorail,aspview]
---


Scott Guthrie is going to present a demo application using the ASP.NET MVC Framework.

First episode is here: [http://weblogs.asp.net/scottgu/archive/2007/11/13/asp-net-mvc-framework-part-1.aspx](http://weblogs.asp.net/scottgu/archive/2007/11/13/asp-net-mvc-framework-part-1.aspx)



Very interesting. I can already see four things that my current VS2005/MonoRail/AspView/IIS5-6 stack lack.
- I do not have a project template, so setting up a new project take a bit longer than clicking "new MVC project".
- I do not have default rewrite rules. 
- I cannot use Server Controls.
- Web Designer support when doing views is not too good. Also, layouts are not treated as MasterPages by the IDE

Sounds bad?

Well:
- Since I am not at kinder garden, I do not "play" with setting up new projects. When I start a new project, it would probably last for quite some time. So the time it takes me to copy&amp;paste a minimal web.config, setup a few lines in global.asax.cs, add references and create Controllers and Views folders, costs me about 5 minutes of the global project costs.I can live with that.
- Shame. However, I can add them to my initial web.config/global.asax.cs files that I use as templates for new projects. Again - one-time cost, and not a price-i one.
- I do not want to use those. Didn't use them even when I was doing WebForms. I'm happy enough with ViewComponents, SubViews and ViewFilters, and I can easily use any cool 3rd party JS controllers (YUI/Dojo/jQuery/ExtJs/Moo/You-Name-It)
- Again - I do not trust WYSIWYG generated markup. It might be good enough for the texts on my personal blog (dear Windows Live Writer - can't you <br /> instead of <br>? what's the deal). It is definitely not good enough for any production level web site.

So - all the downsides are taken care of.



Plus, the stack I use is being used in production environment by gazillion people (ok, AspView is not that common, but the ViewEngine is just 5% of the whole stack, and it's the rock solid part anyway). It is working with .NET 2.0 so I need not convince clients to go for installing .NET 3/3.5 on their shared hosting solution, and since it's open-source, I can tweak stuff for my needs without the need to wait for a hotfix/ServicePack that might never appear, if not too late.



And if I'm not enough of a jerk for ranting like that, I'm going to try (if I'd have enough time) to put up a sample application using MonoRail/AspView similar to Scott's, but this time, you would actually be able get the bits and run it on your machines.



Stay tuned.

