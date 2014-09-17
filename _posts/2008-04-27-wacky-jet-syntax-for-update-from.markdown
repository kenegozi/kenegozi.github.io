---
layout: post
title:  "Wacky JET syntax for UPDATE FROM"
comments: true
tags: [sql]
---




Today I've given a little help to a friend, with a JET 4.0 (Ms-ACCESS) thing.


Situation
Given an existing schema:

 Customers (Id, Name, ..., Email) Ads (CustomerId, ...)

the client wanted to add a field name TargetEmail to Ads table.

Adding the field was simple enough:

```
ALTER TABLE Ads ADD COLUMN TargetEmail TEXT(255)
```

Now the client wanted to initialise the TargetEmail field for existing ads, based on the Customer's email.

A Naive and SQL Server jockey as I am, I gave him that little snippet:

```
UPDATE   Ads SET      Ads.TargetEmail = Customers.EmailFROM     Ads     JOIN Customers ON Ads.CustomerId = Customers.IdWHERE   Ads.TargetEmail IS NULL
```
Problem
JET had refused that syntax.

Or rather, Jet is weird.




Solution
Google to the rescue. answer was [here](http://www.cryer.co.uk/brian/sql/sql_crib_sheet.htm).

```
UPDATE  Ads,         Customers SET     Ads.TargetEmail = Customers.EmailWHERE	Ads.CustomerId = Customers.Id  AND   Ads.TargetEmail IS NULL
```

