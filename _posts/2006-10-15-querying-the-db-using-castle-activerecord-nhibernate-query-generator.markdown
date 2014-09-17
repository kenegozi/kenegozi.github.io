---
layout: post
title:  "Querying the DB using Castle ActiveRecord - NHibernate Query Generator"
comments: true
tags: []
---


There are many methods to query your data when you're on Castle's ActiveRecord.

Thanks to [Ayende](http://www.ayende.com/Blog), we have a new cool way of doing that, namely [NHibernate Query Generator 1.5](http://www.ayende.com/Blog/NHibernateQueryGenerator15IsDoneTimeWithMagic.aspx).

1. You can skip querying, fetch everything and check it in the client:



```
   1:  Blog[] blogs = Blog.FindAll();
```

```
   2:  foreach (Blog blog in blogs)
```

```
   3:  {
```

```
   4:  if (blog.Name== "Cool Blog")
```

```
   5:      {
```

```
   6:          firstPostTitleName = blog.Posts[0];
```

```
   7:  break;
```

```
   8:      }
```

```
   9:  }
```

The Good: Type safety - can catch a lot of errors in compile timeThe Bad: One should let the DBMS handle queries. It's a total waste of resources.The Bottom line: AVOID

2. You can use direct SQL: 

```
   1:  string firstPostTitleName = (string)ActiveRecordMediator.ExecuteQuery(
```

```
   2:  new ScalarQuery(typeof(string), QueryLanguage.Sql, @"
```

```
   3:      SELECT TOP 1 Title 
```

```
   4:      FROM Post INNER JOIN Blog ON Post.BlogId=Blog.Id
```

```
   5:      WHERE Blog.Name= ""Cool Blog"""));
```

The Good: Well, it'd probably work.The Bad: Joins? Blog.Id? hey - I thought we are using an OR/M !! plus it'snot type safe, The Bottom line: AVOID AT AL COST

3. You can use HQL: 

```
   1:  string firstPostTitleName = (string)ActiveRecordMediator.ExecuteQuery(
```

```
   2:  new ScalarQuery(typeof(string), @"
```

```
   3:      select title
```

```
   4:      from Post p
```

```
   5:      where p.Blog.Name = ""Cool Blog"""));
```

```
   6:  
```

The Good: Working with objects, nice and readable query string.The Bad: not type safe, The Bottom line: Use only when 4 and 5 are not applicable.

4. You can use ICriteria: 

```
   1:  string firstPostTitleName = Post.FindOne(
```

```
   2:      Expression.Eq("Blog.Name", "Cool Blog"));
```

The Good: Working with objects, less strings means less error prone.The Bad: not type safe, and a little less readable than HQLThe Bottom line: Use only when 5 is not applicable.

5. And now you can use NQG:

```
   1:  string firstPostTitleName = Post.FindOne(
```

```
   2:      Where.Post.Blog.Name == "Cool Blog");
```

The Good: Readable, type safe.The Bad: I do not how to invoke sql server side functions with that. And it is a little premature, so you should have solid tests. But you should have them anyway.The Bottom line: Prefer using this method. If it fails, go to 4 or 3.



So IMHO it is a great tool, and I've went right away to test it and play a little with the source (I've even found and fixed a little bug !!).

Notice that I've tagged it under Linq, too, since it gives us a Linq-ish way to query the DB in a typesafe elegant manner. In VB.NET the query code looks even better.

