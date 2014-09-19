---
layout: post
title:  "A Generic Execute Callback for ActiveRecord - Execute&lt;T&gt;"
comments: true
tags: [c-sharp,castle,activerecord]
---


I am working with AR for a few month now, ignorantly ignoring the [Castle Project's wiki](http://wiki.castleproject.org).

Stupid I am. I could have learned a lot and save a bunch of wandering around the net and the intellisense to learn obvious stuff.

Thanks to [hammett](http://hammett.castleproject.org/) who [pointed me there](http://kenegozi.com/blog/CommentView,guid,BCCBB3BE-CB4B-4859-A675-0C4918C0900D.aspx).

Anyway - now I read it from &lt;html&gt; to &lt;/html&gt;, and I saw the part [about running HQL using the Execute Callback](http://wiki.castleproject.org/activerecord/documentation/trunk/usersguide/hql.html#ExecCallback)

There are examples, each one with two flavors: "not using generics", and "using generics". Well, the one about the Execute Callback is misleading. It should have been "not using anonymous method" and "using anonymous methods", since the second one does not use generics.

So I thought - let's make the API simpler.

We would have like to allow the user execute her hql like that:

```
   1:  publicstatic Post[] GetPostsByAuthorName(string authorName)
```

```
   2:  {
```

```
   3:  return (Post[])Execute(typeof(Post), "from Post p where p.Author = ?", authorName);
```

```
   4:  }
```

Or even better, by using generics (this time for real):

```
   1:  publicstatic Post[] GetPostsByAuthorName(string authorName)
```

```
   2:  {
```

```
   3:  return Execute&lt;Post&gt;("from Post p where p.Author = ?", authorName);
```

```
   4:  }
```

Here is the magic:

```
   1:  publicstatic T[] Execute&lt;T&gt;(string hql, paramsobject[] parameters)
```

```
   2:  {
```

```
   3:      IList untypedResults = (IList)Execute(delegate(ISession session, object data)
```

```
   4:      {
```

```
   5:  object[] queryParams = (object[])data;
```

```
   6:          IQuery query = session.CreateQuery(hql);
```

```
   7:  for (int position = 0; position &lt; queryParams.Length; ++position)
```

```
   8:              query.SetParameter(position, queryParams[position]);
```

```
   9:  return query.List();
```

```
  10:      }, parameters);
```

```
  11:      T[] results = new T[untypedResults.Count];
```

```
  12:      untypedResults.CopyTo(results, 0);
```

```
  13:  return results;
```

```
  14:  }
```

I'll add an overload that will accept named parameters. I am not sure about the right way to do that, though.

My options are:

```
   1:  Execute<T&gt;(string hql, 
```

```
   2:  string[] paramNames, 
```

```
   3:      Type[] paramTypes, 
```

```
   4:  object[] parameters)
```

Or:

```
   1:  Execute&lt;T&gt;(string hql, IParameter[] parameters)
```

where IParameter definition is something like:

```
   1:  publicinterface IParameter&lt;T&gt;
```

```
   2:  where T: Type
```

```
   3:  {
```

```
   4:  publicstring Name { get; set;}
```

```
   5:  public T Value { get; set;}
```

```
   6:  }
```

Maybe both?

And maybe I haven't read the wiki thoroughly enough and there are already implementations for all that?

