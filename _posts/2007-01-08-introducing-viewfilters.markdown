---
layout: post
title:  "Introducing ViewFilters"
comments: true
tags: [castle,monorail,aspview]
---


Here is the latest addition to AspView.

example: 

```
<%@PageLanguage="C#"Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime"%>  <%  %>  Outside the filter  <filter:LowerCase>Inside the LowerCaseViewFilter - this text should be viewed in lower case</filter:LowerCase>  Outside the filter AGain  <filter:UpperCase>  Inside the UpperCaseViewFilter - this text should be viewed in upper case  </filter:UpperCase>  Finally - outside the filter
```

As you can see, the syntax is simple. Given a viewFilter, named "MyViewFilter", you use the xml tag <filter:my> or <filter:myViewFilter>. The viewfilter itself has to be suffixed with "ViewFilter" (Just like Controllers are suffixed with "Controller", etc.), and it has to implement IViewFilter which is defined with:

```
using System;using System.Collections.Generic;  using System.Text;    namespace Castle.MonoRail.Views.AspView  {publicinterfaceIViewFilter     {string ApplyOn(string input);         }}  
```

The power of the ViewFilters is than they can apply to a whole SubView, while the subview is rendered as a black box, the filter does the work AFTER the subview was rendered.

Grab the [sources](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/), play, and have fun.

