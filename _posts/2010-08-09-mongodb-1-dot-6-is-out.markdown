---
layout: post
title:  "MongoDB 1.6 is out"
comments: true
tags: [tools]
---


A bit late, but I was pre-occupied with a few things so it went under my radar.

&#160;

This release brings some exciting [features](http://www.mongodb.org/display/DOCS/1.6+Release+Notes), such as [automatic-sharding](http://www.mongodb.org/display/DOCS/Sharding) and [replica-sets](http://www.mongodb.org/display/DOCS/Replica+Set+Tutorial), which completes MangoDB's Horizontal Scalability and High Availability to a complete solution. A finer control over consistency is also available now, with the [w option](http://www.mongodb.org/display/DOCS/Verifying+Propagation+of+Writes+with+getLastError), with which you can assert update propagation to a certain amount of servers (so if you use replica sets of 3 machines, you might want to set w=2 or even 3, depending on your consistency needs).

&#160;

These features, along with the [fsync option](http://www.mongodb.org/display/DOCS/Last+Error+Commands#LastErrorCommands-fsyncoption), makes MongoDB a legitimate solution for both high-scale distributed data stores, as well as for small, single machine scenarios. Everyone can enjoy the simplicity of this DB engine.

&#160;

As for using MongoDB from .NET, I'm still undecided between mongo-csharp or NoRM. I also successfully used IronRuby with MongoMapper and Mongoid, so at least we have plenty of options at our disposal.

