---
layout: post
title:  "Is XAML and WPF are really that cool?"
comments: true
tags: [client-side,c-sharp]
---


I am considering WPF-ing a new component for one of are in-house projects. So I've done some reading, and to be sincere, I am not too excited.

Let's refine the last statement. I am very excited with the technology. However, I find the examples out there very annoying.

It all seams to be "Hey it's so cool !! I can do stuff IN THE MARKUP - woosh, god save XAML".

So I came across [this post](http://joshsmithonwpf.wordpress.com/2007/04/13/bindsdirectlytosource/).

It is just great!! it shows how I can easily use only 13 lines of XML to showa grind ONLY if the source is not null.

Sure a lot more expressive and easy than, say:

if (source != null) mySuperCoolGrid.DataBind();

