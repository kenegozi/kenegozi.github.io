---
layout: post
title:  "SQL Server 2005 - Cannot create Database Diagrams - Database does not have a valid owner"
comments: true
tags: [sql]
---


Using SQL Server Management Studio (be it the 'full' version or the express one), you can sometime encounter the error:

![Database has no valid owner](http://kenegozi.com/blog/uploaded/windowslivewriter/sqlserver2005cannotcreatedatabasediagram_123dc/c20f45d1-6118-4b12-845d-1a78e619c256.png)

in words:

Database diagram support objects cannot be installed because this database does not have a valid owner. To continue, first use the Files page of the Database Properties dialog box or the ALTER AUTHORIZATION statement to set the database owner to a valid login, then add the database diagram support objects. 

It usually happens when you've created that DB by a script (which was a bit incomplete) or by restoring a DB created on another machine, with some different settings.



Instead of going to the bottom of it, I'll just write down the simple solution, for future reference.

open a new Query, and run the next stored procedure:

```
EXEC sp_changedbowner 'sa'
```

If you have another default owner on your machine, use it's login instead of 'sa'.

That's it.

