---
layout: post
title:  "Extracting text from a DOM element"
comments: true
tags: [client-side,javascript]
---


I've just been asked the following question by a friend:

in javascript - how do i get the text of an html-element, which doesn't include text of all the children? firefox only

&#160;

Every html DOM element has a collection of direct children, called childNodes. Each node has a type, and text nodes (those are text portions that are part of an element's inner content) have '3' for their type.

&#160;

So, the following code is the solution:

```
function extractFirstLevelTextFrom(elm) {
   var text = '';
   for (var i =0; i < elm.childNodes.length; ++i) {
      if (elm.childNodes[i].nodeType==3) 
          text += elm.childNodes[i].nodeValue;
   }
   return text;
}
```

