---
layout: post
title:  "AspView for Castle RC3 - new release"
comments: true
tags: [tools,castle,monorail,aspview]
---


Although about three weeks too late, I present thee:

AspView, builtfor Castle RC3 ([release](http://kenegozi.com/Blog/Files/download.aspx?filename=AspView_for_Castle_RC3_Release.zip), [debug](http://kenegozi.com/Blog/Files/download.aspx?filename=AspView_for_Castle_RC3_Debug.zip), [source](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/))

I've also introduced a well due improvement to the engine. Now it supports the use of a 404 rescue view, that would get rendered in case of the url mapping to a non-existent controller.



the commit comment (for revision 314) says it all:

Handling view creation for EmptyController, specifically when a controller is not found and a 404 rescue exists

Next improvement will include an option for doing AutoRecompilation in memory, as sometimes the IIS process gets hold on the CompiledViews assembly files (dll and pdb) and failing the automatic recompilation process. 

I certainly need that as it happens on my machine too much, and building the Web project takes a solid 10-15 seconds, while running vcompile is a milliseconds thing only.



Soon ...

