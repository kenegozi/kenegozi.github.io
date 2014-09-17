---
layout: post
title:  "Framework Design Guidelines - a presentation by Brad Abrams"
comments: true
tags: [architecture]
---


[Brad Abrams](http://blogs.msdn.com/brada) has [published on his blog](http://blogs.msdn.com/brada/archive/2006/10/09/Design-Guidelines-and-Patterns-and-Practices-Summit-.aspx) a short presentation about 5 rules for good framework design, a presentation he is giving at the [Pattern and Practices Summit event](http://www.pnpsummit.com/default.aspx). 

The stuff there is taken the "Framework Design Guidelines" book, written by Brad and [Krzysztof Cwalina](http://blogs.msdn.com/kcwalina/). I'd recommend to people who develop frameworks for the use of other developers, to get acquainted with the ideas, and also read the book (from constructor to destructor), possiblyleaving it on their shelf for future reference.

The presentation itself is very good in it's design - large and readable text (though slide 4 is of balance - maybe he's relying on a non-standard font). the pictures and examples are funny and to-the-point, and it has meaningful colors (as if Do Not needs a red X nearby ...). The story on slides 12 to 26 is cute, and you get the message simply enough.

I'd add to the StopWatch example from slide 7, the method .Restart(), if I'd want the user to have even a simpler way to reuse the object.

