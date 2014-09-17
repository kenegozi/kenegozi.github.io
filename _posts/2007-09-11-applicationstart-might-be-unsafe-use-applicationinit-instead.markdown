---
layout: post
title:  "Application_Start Might Be Unsafe - Use Application_Init Instead"
comments: true
tags: [asp-net-2-0]
---


Following [that thread from Castle Project's user group](http://groups.google.com/group/castle-project-users/browse_thread/thread/1a52c649f7418ed9?hl=en#), I'm writing that down as to remember that.



Notice that an ASP.NET application mat spawn more than one HttpApplication object. That is, to keep HttpApplication thread safe, thus providing each thread it's own instance. Now the Start event may fire only during the (logical) application start, rather than on each instance start. Therefore, if you want to hook events, you'd want to do that on the application's Init event, that would get called for each HttpApplication instance. 

