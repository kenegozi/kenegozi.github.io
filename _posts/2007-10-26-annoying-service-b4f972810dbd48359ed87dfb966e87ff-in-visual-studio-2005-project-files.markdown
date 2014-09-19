---
layout: post
title:  "Annoying Service (B4F97281-0DBD-4835-9ED8-7DFB966E87FF) in Visual Studio 2005 project files"
comments: true
tags: [visual-studio,visual-studio-2005]
---


**Problem**:

Your projects in Visual Studio 2005 are behaving strangely, sometimes not building with funny errors, and tend to marked as modified in your source control



**When trying to isolate the problem**:

you diff your *proj file against a previous version and find this entry:

&lt;Service Include="{B4F97281-0DBD-4835-9ED8-7DFB966E87FF}" /&gt;



**Why is it happening**?

You probably have installed VS 2005 SDK, with the DSL tools.

It has a bug in the Text Templating service.

Should have been fixed in VS SDK RTM 4.0, but it hadn't (apparently, as it happened on my machine after installing RTM 4.0)

I saw a promise that the on Orcas SDK it's fixed. I guess that mean that in VS 2005 SDK it won't get fixed.



**How to solve (dirty - but working)**:

using your favorite registry editor, locateHKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\8.0\Packages\{a9696de6-e209-414d-bbec-a0506fb0e924} andHKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\8.0Exp\Packages\{a9696de6-e209-414d-bbec-a0506fb0e924}remove (or rename) them, and the Text Templating service won't start, and your *proj files would stay intact.



**However**:

If you do need the Text Templating service, then I can't help ya.



**Read also at**:

[http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=954064&amp;SiteID=1](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=954064&amp;SiteID=1)

