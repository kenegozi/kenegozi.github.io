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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional-dtd"> <html xmlns="http://www.w3.org/1999/xhtml"><head> <title>Dror Engel's blog rocks</title> <style type='text/css'> div, body {padding:0, margin:0} #right-column { background-color:#FFA } 


 #left-column { float:left; width: 500px; background-color:#FAF } 


 #center-column { float:right; width:400px; background-color:#AFF } div.break { clear:left; } 


 </style> <script type='text/javascript'> function stretchCenter() { var center = document.getElementById('center-column'); center.innerHTML += '<br /> Blah blah blah'; } </script></head><body> <div id='right-column'> <div id='left-column'> <div id='center-column'> <button onclick='stretchCenter();'>Streach Center</button> <br /> Center <br /> Center <br /> Center <br /> </div> Left </div> right <br /> <div class='break'></div> </div></body></html>



```



demo is [here](http://kenegozi.com/blog/content/static/dror-css-challenge.html).

