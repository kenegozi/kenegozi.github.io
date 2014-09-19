---
layout: post
title:  "ActiveRecord.Linq - naive but Working"
comments: true
tags: [c-sharp,linq,castle,activerecord,nhibernate]
---


I've spent some times lately with Linq To SQL and have played a bit with the Mapping namespace.

Why I do not like it very much is a matter for a different post. The matter at hand is that I want the power of Linq, and I want the power of NHibernate, and I want the easy road of ActiveRecord.



What do I mean by that? I'd like:
- query language == Linq  
- persistence engine == NHibernate  
- Mapping == ActiveRecord attributes 



the needed prequisites:
- Linq (framework => framework.Version >= 3.5)  
- [NHibernate.Linq](http://www.hookedonlinq.com/LINQToNHibernate.ashx) (source => source.getFrom(Rhino-Tools) )  
- Linq for ActiveRecord - Keep on Reading 



So, [Ayende](http://www.ayende.com) has kick-started it, and with some help from [Bobby Diaz](http://blogs.magiconsoftware.com/blogs/bdiaz/), we have a prototype level NHibernate provider for Linq.

To make it work with ActiveRecord, all you need is to add:

```
using System;using Castle.ActiveRecord;using Castle.ActiveRecord.Framework;using NHibernate;namespace NHibernate.Linq{    public class ActiveRecordContext : NHibernateContext { public ActiveRecordContext() : base(null) { session = GetSession(); }  private ISession GetSession() { ISessionScope scope = SessionScope.Current; if (scope == null) throw new InvalidOperationException("You should be in a SessionScope()"); ISessionFactoryHolder holder = ActiveRecordMediator.GetSessionFactoryHolder(); return holder.CreateSession(typeof(ActiveRecordBase)); } }}
```

and now you can do stuff like:

```
using (new SessionScope()){ ActiveRecordContext context = new ActiveRecordContext(); var q =  from c in context.Session.Linq&lt;Category&gt;() select c;  foreach (Category c in q) Console.WriteLine(c.Name); }
```

Assuming Category has [ActiveRecord] mapping.

