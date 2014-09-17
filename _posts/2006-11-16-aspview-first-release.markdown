---
layout: post
title:  "AspView - first release"
comments: true
tags: [asp-net-2-0,visual-studio,visual-studio-2005,c-sharp,castle,monorail,aspview]
---


So I'm releasing [AspView](http://kenegozi.com/blog/2006/11/14/AspViewYetAnotherMonoRailViewEngine.aspx).

You can download the source from [here](http://kenegozi.com/blog/GetFile.ashx?FileName=AspView_rev20.zip).

It was written against the Castle 1.1 from the trunk, build no. 152.

Please note that in order to run the TestCases you'd have to make sure that the latest Castle.MonoRail.TestSupport is in the GAC.

The documentation is poor since I have a little time now. I am working on a website for my employer (that utilizes AspView and AR) and until the first beta release I won't have time to do anything but major bugfixes. This project isn't open sourced so I won't be able to share it's sources, however since this will be a public site, it would serve as a Proof Of Concept to the MonoRail and AspView.

The views MUST have the following structure: a. Page header - Must be present for intellisense to work:

```
   1:  <%@ Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime"%>
```

 b. Directives - Not mandatory:

```
   1:  <%@ Import Namespace="System.Text"%>   2:  <%@ Import Namespace="System.Drawing"%>
```

 c. Properties decleration - Currently it's mandatory. If you have no properties you mast have an empty block:

```
   1:  <%   2:  string[] strings;   3:      DateTime today;   4:  int index;   5:  %>
```

or just

```
   1:  <%   2:  %>
```

 d. View body

In a layout view you place the inner view using the ViewContents property, like this:

```
   1:  blah   2:  blah   3:  <%=ViewContents%>   4:  blah   5:  blah
```

