---
layout: post
title:  "ActiveRecordBase vs ActiveRecordMediator"
comments: true
tags: [architecture,castle,activerecord]
---


So after a lot of talking about the matter, I'm starting a little (but real) project with [Castle's ActiveRecord](http://www.castleproject.org/index.php/ActiveRecord) as an ORM service.

What I'm still not sure about, is weather I should inherit everything from [ActiveRecordBase](http://castleproject.org/API/Castle.ActiveRecord.ActiveRecordBase.html), or have my own base class and use [ActiveRecordMediator](http://castleproject.org/API/Castle.ActiveRecord.ActiveRecordMediator.html)?

Sure, I can derive my base class from ActiveRecordBase and have common behaviour for my model, but I am still not sure that I'm fully into the ActiveRecord pattern as a whole. It's tempting to exploit Castle's implementation but to keep the methods in a seperate class rather than in the model itself.

I also have some problem with the need to do FindAll, Find, etc. on each class so to expose the static methods in a typed way.

Well, I take back the last paragraph, since Icould use ActiveRecordBase<> and it solves this problem.

To conclude: I tend to go with subclassing ActiveRecordBase<> as a base class for my model, and I'm starting to code (and test) that way,but I could still use the knowledge gained by people with real experience withthis implementation...

I've looked for insights on the matter on the web, and have found nothing.If anyone reading this has an insight about the matter, please comment here, so people who do their first steps in Castle's ActiveRecord implementation would have a better kick start regarding this issue.

