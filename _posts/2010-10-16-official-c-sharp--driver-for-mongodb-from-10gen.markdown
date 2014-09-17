---
layout: post
title:  "Official c# driver for MongoDB from 10gen"
comments: true
tags: [c-sharp,tools,open-source-software]
---


The announcement is on the users list - [http://groups.google.com/group/mongodb-user/browse_thread/thread/62b071549a95dd4a?hl=en](http://groups.google.com/group/mongodb-user/browse_thread/thread/62b071549a95dd4a?hl=en)

&#160;

Until now the two offerings were [Norm](http://github.com/atheken/NoRM) and [mongo-csharp](http://github.com/samus/mongodb-csharp), both are excellent OSS projects with lots of contributions and very nice velocity. My concern there was always that although there is definitely a place for more than one flavour, as usage patterns and even personal taste differ and pleasing everyone in a single product is impossible (see on rubyland for e.g., – there are [MongoMapper](http://github.com/jnunemaker/mongomapper/tree/master), and [Mongoid](http://mongoid.org/), and there are even some more, less-widespread ones). The major difference is that since the core of the ruby driver is maintained in a single location (and backed by paid-developers thx to [10gen](http://www.10gen.com/index)), the things that are the same across (mainly BSON, client-server setup, connection management) are not duplicated, so we get a fully featured, very robust, tested by many core, and it gets out very fast. 

On the c# side of things, the implementation of replica-sets in the client took some time to emerge after the official support on the server side was out. 

&#160;

So, it is an exciting announcement for the .NET community. I hope that the current drivers will know to adapt the drivers to use the official core.

