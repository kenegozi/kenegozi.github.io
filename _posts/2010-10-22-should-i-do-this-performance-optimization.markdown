---
layout: post
title:  "Should I do this performance optimization?"
comments: true
tags: [miscellanea]
---


Writing software is all very much about tradeoffs.

Performance optimizations usually comes with a cost attached to them. First, improving the performance of a given piece of code can be difficult. It could require a lot of experience, deep algorithmic thinking, and then some. It would cost money to deliver it. And it would almost always result with more complex code, or at least complex to grasp by other developers. This will lead to bugs that costs more money both in terms of business loss, and time spent fixing them. And the ongoing price of maintaining a non-trivial piece of code.

&#160;

Even a bigger problem is to understand whether the “fix” you are about to create and apply to your “problem” is actually going to fix it. You would have to have a comprehensive and accurate performance monitoring tools, and spend some time experimenting before you go about fixing things. Just to be sure that the new code will actually perform better than the old one.

&#160;

Then there is even a bigger problem. Are you 100% sure that the problem you think you have, really is your problem? Did you measure (see comprehensive and accurate performance monitoring above)? is this really the bottleneck of the application?&#160; assuming you are to improve this bit by X percent, what would the global effect on the system be in terms of this X?

&#160;

After answering all these questions, you would be able to answer the toughest question of all. Is there a real benefit to the business in this? With the above questions answered, you will be in a good place to get this one answered also.

&#160;

What ticked me off into writing this is [a post on Ayende's blog](http://ayende.com/Blog/archive/2010/10/22/you-saved-5-cents-and-your-code-is-not-readable.aspx) about a certain perf optimization. The discussion listed there in the comments is way too shallow to my taste. In short, Ayende has pointed out to an article of a group doing *something*, and he analyzed their ROI coming to the conclusion that they were wrong. His calculations may be correct or not, but at least he looked at it from a business perspective. Then the comments just go on and on about how people are not thinking through, how they are doing stupid things, etc. etc.&#160; the funniest thing is that from the looks of it, many of the commenters never have read the said article, and/or they are definitely not very familiar with the technologies mentioned in the article, thus they should have very little option to judge the article writer's decisions.

&#160;

&#160;

So there are to morals here:

1. Doing perf optimizations is difficult, mostly on the business side of things. Consider carefully.

2. Bashing others' decisions without understanding their problem space (and solution space) is childish and borderline stupid. Grow up. 

