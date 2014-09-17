---
layout: post
title:  "A new version of AspView - 0.7"
comments: true
tags: [asp-net-2-0,tools,castle,monorail,aspview]
---


I've just commited to the repository a new version of AspView.

The main addition is "Auto Recompilation" feature.

This means that when you change one of the view sources, the application will automatically recompile the views upon the following request.



You enable the feature by adding the next attribure to the aspview config section in web.config:



```
<aspview .... autoRecompilation="true" ... > ...</aspview>
```



Breaking change:

If you happen to reference an assembly from the GAC (using the aspview configuration in the web.config) you need to add a hint for the engine, like this:

```
<reference assembly="MyAssemblyFromGAC.dll" isFromGac="true" />
```



Known issues:

1. You need to let ASPNET user (or the Application Pool user) a modify access on the bin folder.Note that if you use the inner WebServer of Visual Studio this should not be a problem, since in that case the web application runs with your user, that has the needed peremissions on the bin folder.

2. For a strange reason, after you change a view and do the F5 in the browser, you still see the old version, and only on second F5 will the views be actually recompiled and refreshed. I hope to fix it soon ...



Download from [here](http://kenegozi.com/blog/uploaded/AspView_0_7_178.zip).

Sources are [here](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/).

