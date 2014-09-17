---
layout: post
title:  "Already Added Stuff To SQL Query Generator"
comments: true
tags: [tools,sql]
---


the new stuff:

- Reusing clauses  
- Operators (||, &amp;&amp;, !) on where clause  
- OrderBy clause




Examples:

Reusing clauses:

```
FromClause from = new FromClause(SQL.Blogs);WhereClause where = new WhereClause(SQL.Blogs.Id == 2); SQLQuery q1 = SQLQuery .Select(SQL.Blogs.Id) .From(from) .Where(where); SQLQuery q2 = SQLQuery .Select(SQL.Blogs.Name) .From(from) .Where(where); Console.WriteLine(q1);Console.WriteLine(q2);
```

makes

```
SELECT [dbo].[Blogs].[Id]FROM [dbo].[Blogs]WHERE ([dbo].[Blogs].[Id] = 2)SELECT [dbo].[Blogs].[Name]FROM [dbo].[Blogs]WHERE ([dbo].[Blogs].[Id] = 2)
```





Operators:

```
SQLQuery q1 = SQLQuery .Select(SQL.Blogs.Id) .From(SQL.Blogs) .Where(SQL.Blogs.Id > 2 || SQL.Blogs.Name == "Ken");Console.WriteLine(q1);
```

makes

```
SELECT [dbo].[Blogs].[Id]FROM [dbo].[Blogs]WHERE (([dbo].[Blogs].[Id] > 2) OR ([dbo].[Blogs].[Name] = N'Ken'))
```





OrderBy Clause:

```
SQLQuery q = SQLQuery .Select(SQL.Blogs.Id) .From(SQL.Blogs) .Where(SQL.Blogs.Id > 2) .OrderBy(Order.By(SQL.Blogs.Id), Order.By(SQL.Blogs.Name).Desc);Console.WriteLine(q);
```



makes

```
SELECT [dbo].[Blogs].[Id]FROM [dbo].[Blogs]WHERE ([dbo].[Blogs].[Id] > 2)ORDER BY [dbo].[Blogs].[Id], [dbo].[Blogs].[Name] DESC
```



Didn't have time to upload a binary, but you can simply grab the source and build yourself. it has absolutely no dependencies but .NET 2.0

Where from?

http://svn.castleproject.org:8080/svn/castlecontrib/Castle.Tools.SQLQueryGenerator/trunk/

UPDATE (22/06/2008):The source has slightly moved (to a sub folder):[http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.SQLQueryGenerator/](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.SQLQueryGenerator/)

