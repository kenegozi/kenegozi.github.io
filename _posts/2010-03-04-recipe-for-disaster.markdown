---
layout: post
title:  "Recipe for disaster"
comments: true
tags: [debugging]
---


take:

- 1 Late night
- 2 Cryptic, long and super complex batch files
- 480 LoC of the above
- 1 data-entry-for-tests utility that grew way to big and wacky
- 1 project on CI that either do not build, or fail all tests
- ~12 minutes is the time taking the above project to fail
- 0 lines of error output (until I figured out where to tweak the batch file)
- 2 development environments
- 1 crying baby
- 1 sleeping wife
- 5 hours
- and then finding out that some QA guys do not believe in code reuse.


The end result is:

&#160;
![image](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/Recipefordisaster_102A/742a40d2-17c1-4f2a-a557-c467219c65b5.png)
