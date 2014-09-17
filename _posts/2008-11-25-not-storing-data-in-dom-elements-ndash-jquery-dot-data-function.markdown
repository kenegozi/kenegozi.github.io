---
layout: post
title:  "[not] storing data in DOM elements - jQuery.data function"
comments: true
tags: [client-side,tools,javascript]
---


At time you'd want to store data, related to a DOM element.

&#160;

storing it directly into the element (either by elm.someArbitraryName = value, or with setAttribute) is wacky. Some browsers might not like you using non standard attributes, so you start using things like 'alt' and 'rel'. Then again, these things has meaning, and storing arbitrary data is ... well, uncool to say the least.

&#160;

&#160;

jQuery.data() to the rescue. As jQuery objects are wrappers that HasA DOM elements, and not the DOM elements themselves (as in prototype), storing data on them is like storing data on POJSO (Plain Old JavaScript Objects), and the data() functions allows for an easy way of doing that.

&#160;

Read on that (and of a few other jQuery tips) at [http://marcgrabanski.com/article/5-tips-for-better-jquery-code](http://marcgrabanski.com/article/5-tips-for-better-jquery-code)

