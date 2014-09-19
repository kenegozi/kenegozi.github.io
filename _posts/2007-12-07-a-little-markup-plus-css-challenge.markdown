---
layout: post
title:  "A little markup+css challenge"
comments: true
tags: [client-side,css,html]
---


After reading [the challenge on Dror's blog (Hebrew)](http://blogs.microsoft.co.il/blogs/drorengel/archive/2007/12/06/css-div.aspx) I decided to post my answer here.

In short, for non hebrew readers, Dror is asking for a markup+css solution for the next layout:

![css layout](http://kenegozi.com/blog/uploaded/windowslivewriter/alittlemarkupcsschallenge_a30e/e02b26e1-f40f-40fc-9d27-e1ca0083549a.png)

no javascript allowed for layout purposes.



Oh, and the center column can be long, so the left and right columns should stretch with it.



I have added another prequisite: the center content must come before the side contents (for accessibility).



That's my simplistic answer:

```
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional-dtd"&gt; &lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;&lt;head&gt; &lt;title&gt;Dror Engel's blog rocks&lt;/title&gt; &lt;style type='text/css'&gt; div, body {padding:0, margin:0} #right-column { background-color:#FFA } 


 #left-column { float:left; width: 500px; background-color:#FAF } 


 #center-column { float:right; width:400px; background-color:#AFF } div.break { clear:left; } 


 &lt;/style&gt; &lt;script type='text/javascript'&gt; function stretchCenter() { var center = document.getElementById('center-column'); center.innerHTML += '&lt;br /&gt; Blah blah blah'; } &lt;/script&gt;&lt;/head&gt;&lt;body&gt; &lt;div id='right-column'&gt; &lt;div id='left-column'&gt; &lt;div id='center-column'&gt; &lt;button onclick='stretchCenter();'&gt;Streach Center&lt;/button&gt; &lt;br /&gt; Center &lt;br /&gt; Center &lt;br /&gt; Center &lt;br /&gt; &lt;/div&gt; Left &lt;/div&gt; right &lt;br /&gt; &lt;div class='break'&gt;&lt;/div&gt; &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;



```



demo is [here](http://kenegozi.com/blog/content/static/dror-css-challenge.html).

