---
layout: post
title:  "Conditional Rendering, or I Do Not Want Analytics Code On Dev Machine"
comments: true
tags: [tools,monorail,aspview]
---


From time to time you'd want some of your markup rendered only on 'real' scenarios. For example, you wouldn't want google analytics to track visits you do on your dev machine. Sometime you'd even develop while your machine is not even connected to the internet, and every page would try get the analytics script and will behave strangely.



In Monorail, the Request has a property named IsLocal, just for that. I've wrapped it in a nice ViewComponent.



```
public class GoogleAnalyticsComponent : ViewComponent{
 public override void Render() { if (Request.IsLocal) return; RenderView("AnalyticsCode"); }} 

```



Accompanied by the AnalyticsCode view template:

```
<%@ Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime" %><script src="https://ssl.google-analytics.com/urchin.js" type="text/javascript"></script><script type="text/javascript"> _uacct = "MY_URCHIN_CODE"; urchinTracker();</script>
```

, that can easily be extensible to set the urchin code with a parameter.

