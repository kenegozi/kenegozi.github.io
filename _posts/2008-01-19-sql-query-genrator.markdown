---
layout: post
title:  "SQL Query Generator"
comments: true
tags: [tools,sql]
---


Imagine you could write that in your IDE:

```
SQLQuery q = SQLQuery .Select(SQL.Blogs.Id, SQL.Blogs.Name) .From(SQL.Blogs) .Join(SQL.Posts, Join.On(SQL.Blogs.Id == SQL.Posts.BlogId)) .Where(SQL.Blogs.Name != "Ken's blog");
Console.WriteLine(q); 
```

and getting that output :

```
SELECT [Blogs].[Id], [Blogs].[Name]FROM ([Blogs] JOIN [Posts] ON ([Blogs].[Id]=[Posts].[BlogId]))WHERE ([Blogs].[Name]<>'Ken''s blog') 
```



Soon enough you would be able to to that.



After having fun creating the Static Sitemap Generator, today I've had a little free time (as my main machine is being reinstalled), so I came up with a SQL query generator.

It would be a tool to generate classes out of a database, that would make writing typed sql queries a breeze.



I have most of it working, except the part where I retrieve the metadata from the database ... No worries, my good friend and SQL guru Moran is about to send me the queries for that real soon.



First release would work with SQL Server 2005, and later on I'll add extension points to hook up other db engines.

