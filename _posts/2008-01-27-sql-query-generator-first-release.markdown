---
layout: post
title:  "SQL Query Generator - First Release"
comments: true
tags: [tools,sql]
---

What is it?
A tool that generates a strongly typed representation of a relational database, to be used for generating SQL queries in a type-safe fashion, with the aid of intellisense.


Where to get it?
- Current Binaries: [from here](http://kenegozi.com/Blog/Files/download.aspx?filename=Castle.Tools.SQLQueryGenerator-0.9.0.429-Debug.zip)
- Source code: http://svn.castleproject.org:8080/svn/castlecontrib/Castle.Tools.SQLQueryGenerator/trunk/

UPDATE (22/06/2008):The source has slightly moved (to a sub folder):[http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.SQLQueryGenerator/](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.SQLQueryGenerator/)




Limitations:
- Currently works only with SQL Server 2005. Patches for more DB types would be welcomed.  
- Currently only SELECT queries are implemented. Soon I'll add support for generating INSERT, UPDATE and DELETE, too.  
- GroupBy, Order By and Having clauses didn't make it to this initial release. I hope to add those this week.



How to use it?- Generating the classes:Run Castle.Tools.SQLQueryGenerator.exe.Parameters:The mandatory flag is /db:DBNAME where DBNAME is your database name. By default, the server being looked for is (local). you can select another using /server:SERVER.By default, Integrated Security is used. You can supply /userid:USER and /password:PASS to override it.You can alternatively supply a /connectionstring:CONSTR parameter.  
- Add the generated file, named "SQLQuery.Generated.cs" to your project.  
- Add a reference to Castle.Tools.SQLQueryGenerator.Runtime.dll  
- Use and Enjoy




Usage sample (from Examples.cs in the test project:

```
SQLQuery q = SQLQuery .Select(SQL.Blogs.Id, SQL.Blogs.Name) .From(SQL.Blogs);Console.WriteLine(q);
```

Would print out:

```
SELECT [dbo].[Blogs].[Id], [dbo].[Blogs].[Name]FROM [dbo].[Blogs]
```

 

Not impressed? Well,

```
dbo_ForumMessages Message = SQL.ForumMessages.As("Message");dbo_ForumMessages Parent = SQL.ForumMessages.As("Parent"); SQLQuery q = SQLQuery .Select(Message.Id, Message.ParentId, Message.Content) .From(Message) .Join(Parent, Message.ParentId == Parent.Id);Console.WriteLine(q);
```

Will spit out

```
SELECT [Message].[Id], [Message].[ParentId], [Message].[Content]FROM [dbo].[ForumMessages] AS [Message] JOIN [dbo].[ForumMessages] AS [Parent] ON ([Message].[ParentId] = [Parent].[Id])
```

 

Need parameters?

```
Parameter<int> blogId = new Parameter<int>("BlogId"); SQLQuery q = SQLQuery .Select(SQL.Blogs.Id, SQL.Blogs.Name) .From(SQL.Blogs) .Where(SQL.Blogs.Id == blogId);Console.WriteLine(q);
```

would echo

```
SELECT [dbo].[Blogs].[Id], [dbo].[Blogs].[Name]FROM [dbo].[Blogs]WHERE ([dbo].[Blogs].[Id] = @BlogId)
```


How can YOU help?- Use it. Praise it. Use Paypal. 

- Or you can suggest improvements, spot bugs, create patches and buy me beer.


