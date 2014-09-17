---
layout: post
title:  "AbstractBaseClass vs. Interfaces"
comments: true
tags: [asp-net-2-0,architecture]
---


Reading [this post from Phil Haack](http://haacked.com/archive/2008/02/21/versioning-issues-with-abstract-base-classes-and-interfaces.aspx) made me jump a little. Oh no, I said, Please don't let the clean IMvcFramework become clumsy.

[Ayende has ranted about it better than I would](http://www.ayende.com/Blog/archive/2008/02/21/Re-Versioning-Issues-With-Abstract-Base-Classes-and-Interfaces.aspx).



Now I see that [Phil has issues with ABC as well](http://haacked.com/archive/2008/02/21/abstract-base-classes-have-versioning-problems-too.aspx).



The answers for the ABC problems he shows there are cumbersome. In order to gain "flexibility", you end up polluting your API with "CanSupportCrap" methods, etc.



So, to recap:
- Phil, (probably inspired by Framework Design Guidelines) claim that using ABC over Interfaces is better as it won't cause breaking changes.
- Ayende points out that the breaking change won't be to the end user (as in - developers who uses the framework) but rather to the framework maintainer (who works hard anyway and should know his way around), and to framework extenders (again, should not whine about those 'breaking changes'). As an aside, Ayende also brings up the sealed/internal/non-virtual rant.
- Phil admits to the weaknesses of ABC, just by showing an even weaker way of overcoming them.
- I recap all that.

Please Please Please keep IHttpContext in place ...

