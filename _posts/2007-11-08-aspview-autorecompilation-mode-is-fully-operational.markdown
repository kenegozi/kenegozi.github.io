---
layout: post
title:  "AspView - AutoRecompilation mode is fully operational"
comments: true
tags: [castle,monorail,aspview]
---


If you set autoRecompilation="true" in your aspview section on web.config, then you need not use the vcompile.exe on every build. The views would get compiled in memory from sources.

Benefits: Change a view source, refresh the browser - viola, you can see he change impact. No need to rebuild the web project, the application is not restarted so no session is lost, and no need for "double refresh".

Still, when you deploy it's strongly advised that you'd run VCompile manually, copy the compiledViews.dll to the server, and set autoRecompilation="false" on the server's web.config.



The [starter tutorial on using.castleproject.org](http://using.castleproject.org/display/Contrib/Castle.MonoRail.Views.AspView) is now updated, and you can download AspView binaries from [http://www.aspview.com](http://www.aspview.com)



Please use that (and other) new features and leave me some comments please ...

