---
layout: post
title:  "Default value for value type parameter in AspView does not work"
comments: true
tags: [asp-net-2-0,monorail,aspview,blog-engine]
---


Today we tried to have this in a view's parameters section:



<%

 int id = default(int);

%>



It won't work. 

Internally, AspView looks for a parameter (in the PropertyBag, Flash, Form, QueryString etc.) with the name "id".

Now if it is not found, it should set to "default(int)". The problem is duw to a bug in AspViewBase (which is the base class for all views) that sets a null value if the property is not found, thus failing the cast to value type (you cannot (int)null).



I'll add a test, fix the bug, and commit it, hopefully by this weekend.



Meanwhile, we "solved" the problem by using:



<%

object id = default(int);

%>

