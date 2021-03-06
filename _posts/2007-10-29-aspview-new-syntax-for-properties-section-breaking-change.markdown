---
layout: post
title:  "AspView - New Syntax for Properties Section (Breaking Change)"
comments: true
tags: [castle,monorail,aspview]
---


So, what is Properties Section?



View sources files used to look like this:

```
&lt;%Page Language= ... %&gt;&lt;% int someProperty;%&gt;... rest of view ...
```



The problem was that if you had no properties (or have used the DictionaryAdpater option [described here](http://kenegozi.com/Blog/2007/10/17/typed-view-properties-in-monorail-and-aspview.aspx)) then you had to have an empty section, like:

```
&lt;%Page Language= ... %&gt;&lt;%%&gt;... rest of view ...
```



Which is quite ugly.



So, following Lee Henson's suggestion,the properties section should now be wrapped in a special tag, and you can just omit that tag if you do not need to declare any properties.

The new syntax (new stuff in **Bold Italic Font**):

```
&lt;%Page Language= ... %&gt;**&lt;aspView:properties&gt;**&lt;% int someProperty;%&gt;**&lt;/aspView:properties&gt;**... rest of view ...
```



You can download the new binaries, and a utility to migrate your existing views to the new syntax, from [http://www.aspview.com](http://www.aspview.com)

