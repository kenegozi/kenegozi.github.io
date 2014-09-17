---
layout: post
title:  "DTD PUBLIC strings are case sensitive"
comments: true
tags: [client-side,html]
---


I have just tried to do a xhtml validation on a site I'm working on (@ [http://validator.w3.org](http://validator.w3.org)), and I got some pretty wierd errors. It turned out the the DTD was not accurate, since the PUBLIC section contained lowercase characters.

So the right DTD for XHTML 1.1 is:
```
<!--    Code highlighting produced by Actipro CodeHighlighter (freeware)  http://www.CodeHighlighter.com/    --><!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.1//EN&quot; &quot;http://www.w3.org/tr/xhtml11/Dtd/xhtml11.dtd&quot;>
```


Now it passes the validation.

