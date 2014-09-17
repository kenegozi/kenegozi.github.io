---
layout: post
title:  "Embedded Script Blocks"
comments: true
tags: [castle,monorail,aspview]
---


Say you want to have the possibility to create a method to work in views.

for the sake of argument, let it be:

```
public string DoubleId(string s){ return s + s;}
```

your options:
- Create a Helper class and put it there 

- Create a base class and put it there


But what if it's simple enough (so you won't need a unit-test) and it's not supposed to be reused (so creating a Helper/Base class is an overkill)?

Now you can put it directly in your view template, and this is how:

```
<script runat="server">public string DoubleId(string s){ return s + s;}</script>Regular view code<%=DoubleIt(view.Name) %>
```



Now the devil advocates would say that "Logic In View Is Evil". And I would concur. But it's not actually logic. It's supposed to be used for view-related string manipulations and such. And anyway you can do Evil Deeds without it, too. And you don't HAVE to use it if you don't want to.



The idea (and 99% of implementation) is by Gauthier Segay. Thanks dude !

