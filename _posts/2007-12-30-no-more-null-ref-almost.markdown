---
layout: post
title:  "No More Null Ref (almost)"
comments: true
tags: [castle,monorail,aspview]
---


I found out that on many occasions I use stuff like:

```
&lt;aspview:properties&gt;string message = "";&lt;/aspview:properties&gt;
```

To avoid the need of:

```
&lt;% = message ?? "" %&gt;
```



That's it.

From now on, null values would just be ignored.



Notice that it won't help you on

&lt;%=post.Blog.Title %&gt; if post.Blog is null ...

