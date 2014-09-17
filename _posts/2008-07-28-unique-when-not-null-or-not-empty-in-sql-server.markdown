---
layout: post
title:  "Unique when not null (or not empty) in SQL Server"
comments: true
tags: [sql]
---


In SQL Server, you have two main types of Indexes, one that allow duplications, and one that does not.

However, if you want a rule like "I want to forbid duplications, except for null values" you do not have a built in feature for that, as the unique index will treat the NULL value as a real value, thus allowing up to a single row with that NULL.



Apart from refactoring the DB schema, the solution I usually was doing has been to create a trigger to deal with that:



```
CREATE TRIGGER dbo.People_Unique_NonNull_Email ON dbo.People AFTER INSERTAS BEGIN SET NOCOUNT ON DECLARE @Count INT SELECT @Count=COUNT(p.Id) FROM People p JOIN INSERTED i On i.Email = p.Email WHERE i.Email IS NOT NULL 
 IF @Count > 0  BEGIN RAISERROR ('Cannot put a duplicate email on People table', 16, 1) ROLLBACK TRANSACTION END 
ENDGO
```



However, Moran Benisty, my T-SQL Ninja pal, has pointed out that the SELECT and IF might bit a wee bit apart, and revised this to

```
CREATE TRIGGER dbo.People_Unique_NonNull_Email ON dbo.People AFTER INSERTAS BEGIN SET NOCOUNT ON

 IF EXISTS(SELECT 1 FROM People p JOIN INSERTED i On i.Email = p.Email WHERE i.Email IS NOT NULL  )  BEGIN RAISERROR ('Cannot put a duplicate email on People table', 16, 1) ROLLBACK TRANSACTION END 

ENDGO
```



I'll leave adding the UPDATE case to the readers

