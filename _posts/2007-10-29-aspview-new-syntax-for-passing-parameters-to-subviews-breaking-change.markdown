---
layout: post
title:  "AspView - New Syntax for Passing Parameters to SubViews (Breaking Change)"
comments: true
tags: [castle,monorail,aspview]
---


The old syntax for passing parameters to subviews was:



View sources files used to look like this:

```
<%Page Language= ... %>... blah blah ...<subview:whatever name="value"></subview:whatever>
```



The problem was thatyou could only have passed variables (byname), so if you needed to pass a string literal you had to declare a string object with the literal:

```
<%Page Language= ... %>... blah blah ...<%string value="literal";  %><subview:whatever name="value"></subview:whatever>
```



The new syntax follows the syntax for view components, and also the expected scripting syntax.

so now:

```
<%Page Language= ... %><%%><subview:whatever name="mike" age="<%=30%>" currentItem="<%=item%>"></subview:whatever>
```

would pass the string literal **"mike"** to **name**, the int constant **30** to **age**, and the object **item** to **currentItem**.



You can download the new binaries, and a utility to migrate your existing views to the new syntax, from [http://www.aspview.com](http://www.aspview.com)

