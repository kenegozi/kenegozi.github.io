---
layout: post
title:  "No More Null Ref (almost)"
comments: true
tags: [castle,monorail,aspview]
---


I found out that on many occasions I use stuff like:

```
<aspview:properties>string message = "";</aspview:properties>
```

To avoid the need of:

```
<% = message ?? "" %>
```



That's it.

From now on, null values would just be ignored.



Notice that it won't help you on

<%=post.Blog.Title %> if post.Blog is null ...

