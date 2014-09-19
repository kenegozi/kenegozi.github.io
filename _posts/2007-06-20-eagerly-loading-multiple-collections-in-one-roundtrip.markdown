---
layout: post
title:  "Eagerly loading multiple collections in one roundtrip"
comments: true
tags: [activerecord,nhibernate]
---


Today at work I did a session with my team, showing them several methods to query the DB in a NH/AR enviroment.

When we talked about eager fetching, I said that doing it for more than one collection in one query isn't good (as advised in hibernate's site), since it might build up a rather large cartesian product.

Why? If we have a type Entity, that looks a bit like that:

```
class Entity{ ... [HasMany ...] public IList&lt;Item&gt; Items ... [HasMany ...] public IList&lt;AnotherItem&gt; AnotherItems ... ...}
```

An eager fetch will do:

```
SELECT *FROM  Entities INNER JOIN Items ON Entities.Id = Items.EntityIdINNER JOIN AnotherItems ON Entities.Id = AnotherItems.EntityId
```

The result length will be e*i*a, where e is the number of rows in Entities table, i is the number of rows in Items table , and a .. (you fill the blank).

But, luckily for us, NH is keeping a single concrete copy of each entity in a session. [Ayende is abusing that in a way, that makes the above possible](http://ayende.com/Blog/archive/2007/06/20/Efficently-loading-deep-object-graphs.aspx), without the 3rd (or more) dimention in the cartesian product.

How it works? Using a MultiCriteria,he isgettinghis entities,eagerly fetching one collection at a time. So it would return e*i+e*arows. So for the first query, NH will populate the Entity instances, with the first collection (Items) populated. For the second query, NH will populate *another* Entity instances with the second collection (AnotherItems) populated. But, since it's in the same session, actually the first Entity instances (with Items already populated) will get their AnotherItems collection populated.

That's why at the end of the snippet, you see that he actually deals with list[0]. That's where the first set of references is placed, and the other items in that list (list[1] ... list[n]) are just copies of the references to the same Entity objects.

Quite a similar approach was seen when [Ayende has shown us how to eager fetch using SQL](http://www.ayende.com/Blog/archive/2006/11/22/7081.aspx) (at the end of the post). The query there returns an array of Message items and an array of User items, but the User instances actually are wired to their Message instances, so he is using only the first array.

