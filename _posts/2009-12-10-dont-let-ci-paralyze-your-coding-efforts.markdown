---
layout: post
title:  "Don't let CI paralyze your coding efforts"
comments: true
tags: [scm]
---


Anyone who have ever seen something like that might relate to this post:

![image](http://kenegozi.com/blog/uploaded/windowslivewriter/dontletciparalyzeyourcodingefforts_fe4a/143eb433-6060-496d-b9a7-c37e595651e5.png)

&#160;



&#160;

Breaking the CI is not nice, however it does happen at times. When it happen, someone (myself this time) is appointed responsible, and will fix the build asap.

&#160;

However, sometimes people do break the CI ***and then go home without fixing it***

&#160;

There are a few ways to deal with that. Usually you'd call the person who did the commit that made the build fail, and will consult with him about the best way to fix it quickly until he gets back. But sometimes it would prove complex to fix for someone that try to come in without having good knowledge on the full context.

&#160;

So would you keep the CI red? that's really bad, as you won't get good feedback if someone else commits bad work, as it won't *turn* to red, it would rather simply *stay* red.

&#160;

At these times you'd simply wish that the person who broke the build wouldn't have committed his change in the first place.

&#160;

STOP WHISHING

&#160;

That's what source control is for.

&#160;

Just fire up your Subversion Log, gitk, whatever (I guess that even TFS has that ability ;) ), figure out the offending commit id, and revert these changes.

&#160;

Then you get your CI in a good shape again, and you are free to break it in the regular day-to-day manner.

&#160;

The CI breaker will then come back in tomorrow and will examine his change, then re-apply it correctly.

