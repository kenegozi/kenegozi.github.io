---
layout: post
title:  "Monorail 2.0 &ndash; why the hell did it take so long"
comments: true
tags: [tools,castle,monorail,aspview,open-source-software]
---




Being an Open Source project, with very good test coverage and a very active development, most users that actually run Castle bits in production were running off of trunk anyway.

&#160;

The trunk is very stable, and the act of “release” should have simply been tagging any single commit to trunk as the 2.0 RTM.

&#160;

However, we felt that we wanted some more stuff to justify a release – like updating the documentation, re-doing samples and Visual Studio integration packages, etc.

That lead us to a halt, as active committers did not use neither integrations nor samples, and same for the documentation. My personal stand was (and still is) that if someone wanted an official release so badly, then that one should contribute toward this, either with time and work, or with sponsorship money to buy this time and work.

&#160;

No one did.

&#160;

A few attempts at these parts was taken, but none concluded.

&#160;

Meanwhile the project grew more and more, and parts of it became mandatory dependencies to various mainstream projects (such as NHibernate), while Windsor became more and more adopted as an IoC container of choice for many people.

Getting to a single point of approval across the board for the whole castle stack, without breaking third-party projects that depends on parts of Castle, became very difficult.

&#160;
Breaking apart
In order to allow a manageable release process, the project was broken down to its parts. Now we have the four main projects, released on their on, with depending projects using compiled releases of the others.

The main projects are:

- Core (de-facto including Dynamic Proxy) which is used on many other OSS projects 
- ActiveRecord 
- IoC stack (MicroKernel + Windsor) 
- Monorail 


More details can be found on the [projects page of castle's website](http://www.castleproject.org/castle/projects.html)

&#160;

An all-trunk builds can be retrieved [with the aid of the horn-get project](http://www.hornget.net/packages/web/castle.monorail/castle.monorail-trunk).

&#160;
So why is Monorail last?
The reason is rather simple. Monorail depends on almost any other part of the stack. It even has subprojects such as ActiveRecord's DataBinder (ARDataBind) which depends on ActiveRecord, and a WindsorIntegration project which depends on the IoC stack.

As a result we had to wait to get releases for all other projects.

&#160;
What's next?
I still have no idea. There are a few discussions going on about that (such as [this one on the new roadmap](http://groups.google.com/group/castle-project-devel/browse_thread/thread/2c77d17327488889#)), and you are all welcome to join the debates.

