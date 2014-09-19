---
layout: post
title:  "Error &ndash; the current website&rsquo;s developer is a complete moron"
comments: true
tags: [client-side,javascript]
---


How lame can you get?

&#160;

![image](http://kenegozi.com/blog/uploaded/windowslivewriter/errorthecurrentwebsitesdeveloperisacompl_12e27/eb1345ee-9ea0-4d03-8cc1-95b53a5e3c2e.png)

&#160;

It is even misspelled.

&#160;

The funniestsaddest thing is the source of this page:

```
&lt;script language=&quot;JavaScript&quot;&gt; 
if (document.all) {
 document.writeln(...);}
else {
 document.writeln(&quot;&lt;p&gt;&lt;font color=\&quot;#999999\&quot;&gt;&lt;b&gt;Error ! The current browser is either too old or too modern (usind DOM document structure).&lt;/b&gt;&lt;/font&gt;&lt;/p&gt;&quot;);}
&lt;/script&gt; 
```

&#160;

So many bad practices in a such a small snippet. And the stuff in the (…) part was too painful to paste.

