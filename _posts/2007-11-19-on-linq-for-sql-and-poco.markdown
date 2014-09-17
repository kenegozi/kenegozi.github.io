---
layout: post
title:  "On Linq for SQL and POCO"
comments: true
tags: [linq,activerecord,nhibernate]
---


I'm looking at the option of using Linq To SQL for persistence.



Basic assumptions:
- Entities should be POCOs
- I like Linq as query language
- I hate visible generated code
- Would rather avoid xml configurations

Today I'm using NHibernate (so 1 and 3 are set), and AR Attributes (so 4 is set). As for querying, I resort to hql (nice, yet too stringy), ICriteria (still stringy) and NHQG (cool, super cool, yet coupled with NH, while Linq is a "query everything" language)



I tried Linq for SQL (on a VS C# 2008 Express Beta2). No designer. Hand coded the entity, and have used the attributes for mapping.



First problem encountered: in order to make a column lazy, I need to change the underlying type to Link<MyOriginalType>, and then I can tell the context (using a LoadingOptions) about whether to load the lazy properties.



Couldn't yet find a way to actually lazy load that property once the instance has already been loaded.



I much better like the way NH is handling things, with a runtime-generated proxy that takes care of lazy loading (among other stuff), so I get it without hassling my entities code.



Didn't even mention First and Second Level Caches.



I guess I'd have to try and hop into NHibernate.Linq, and try to help Ayende with bringing it forward. That would mean diving into NH code, something I haven't done for quite some time now ...

