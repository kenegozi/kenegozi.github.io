---
layout: post
title:  "Html Encoded Output In View Templates"
comments: true
tags: [castle,monorail,aspview]
---


The existing <%= %> syntax would keep output the raw strings, so it can be used to output properties that has markup inside, like CMS data, the ViewContents in layouts, CaptureFor data, etc.



If you want http encoded output, use <%# %> or ${} instead.



Example:

Given the following view template:

```
<%string markup = "<span>";%><%=markup%><%#markup%>${markup}
```



The rendered output would be:

```
<span>&amp;lt;span&amp;gt;&amp;lt;span&amp;gt;
```



Have fun.

