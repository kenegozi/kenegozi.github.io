---
layout: post
title:  "MSDN Killed my using directive"
comments: true
tags: [miscellanea,c-sharp]
---


I'm now sitting in a certain lecture by a well known MS speaker.

The title is "ASP.NET Hidden Gems", but that's not the point.



During the presentation the dude is showing nice things like Custom Build Providers, Custom Expression Builders, Virtual Path Provider (that's a nice one), Session State Partitioning (nice), and other stuff.



This is all great and cool and nice and blah blah blah.



However, now he's just showed how he's using a CustomBuildProvider to "make data access more efficient", by setting a custom build provider for data-set xsd files, creating cleaner Data objects instead of TypedDataSets.



That's a very nice thing.



However, his demo code, splashed over two 100" mega screens, included a use of SqlConnection and DataReaders, without using "using".

heck, he didn't even dispose the objects on "finally".



I mean - WTF?



That's the reason I hate DEMO codes. People in the crowd is looking at that, and then they go ahead and write the same code in their day job. And then I get called in to fix it.



Was it so difficult for the guy to write better code? heck, the "using" keyword would have eliminated at least 4 lines from the demo, so it would even be more presentable.



I simply don't get it.

