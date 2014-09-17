---
layout: post
title:  "On Scheduling (and More)"
comments: true
tags: [miscellanea]
---


Just read [Joel Spolsy's interview at ACM Queue](http://www.acmqueue.org/modules.php?name=Content&amp;pa=showpage&amp;pid=497) ([through his blog](http://www.joelonsoftware.com/items/2007/08/28.html)).

I especially liked part 3 where he explains about Evidence Based Scheduling.

For example - why overestimated tasks won't cover for underestimated tasks:

But when you think about software tasks, when things go wrong, they take three or four times longer than expected. If I told you I've got an eight-hour feature, it's about eight hours of work. Now, could it take eight hours? Yes. Could it take six hours? Sure. Could it take two days? Definitely. Could it take a week? Yes, probably with a 10 percent probability because you've discovered some huge problem, and it's a new thing you have to write code for, and you just completely forgot about it and it's going to take you a week. Now, could it take zero? No, that's impossible. Could it take negative 32 hours? It could never take negative 32 hours. You can go over 32 hours; you just can't go under by 32 hours because that would cause you to go backwards in time. 

Well said and written down, I'm going to show that to the next manager who'd insist on a months long schedule, based on hours long tasks.

