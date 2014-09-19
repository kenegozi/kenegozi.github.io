---
layout: post
title:  "Html Encoded Output In View Templates"
comments: true
tags: [castle,monorail,aspview]
---


The existing &lt;%= %&gt; syntax would keep output the raw strings, so it can be used to output properties that has markup inside, like CMS data, the ViewContents in layouts, CaptureFor data, etc.



If you want http encoded output, use &lt;%# %&gt; or ${} instead.



Example:

Given the following view template:

```
&lt;%string markup = "<span&gt;";%>&lt;%=markup%&gt;&lt;%#markup%&gt;${markup}
```



The rendered output would be:

```
&lt;span&gt;&amp;lt;span&amp;gt;&amp;lt;span&amp;gt;
```



Have fun.

