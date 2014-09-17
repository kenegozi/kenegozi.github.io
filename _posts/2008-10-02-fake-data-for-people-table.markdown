---
layout: post
title:  "Fake data for People table"
comments: true
tags: [sql]
---

Task
Populate People table with fake data for demo purposes.

Assume the relevant tables look like that:

```
People (Id, LastName, FirstName, CityId)
Cities (Id, Name)
```


Step 1 - getting names
I created a database called Useful, with two tables: FirstNames and LastNames.

Filled each with first and last names, that I found off sites in the internet.

I managed to get 808 first names, and 742 last names.


Step 2 - generating the data
I wanted to fill the People table with the Cartesian Product of both name tables.

Out of 808 first names and 742 last names I'd get 599,536 rows using 

```
SELECT
    f.Name AS FirstName,
    l.Name AS LastName
FROM
    FirstNames f,
    LastNames l
```

But I'd also like to have the CityId populated, with a random city.

The naive approach is

```
SELECT
    f.Name AS FirstName,
    l.Name AS LastName,
    (SELECT TOP 1 Id FROM City ORDER BY NEWID()) AS CityId
FROM
    FirstNames f,
    LastNames l
```

But the ORDER BY NEWID() bit is happening once for the whole select, so you end up with the same CityId for all you rows.



My end solution was:

```

INSERT INTO People (FirstName, LastName, CityId)

SELECT
    FirstName,
    LastName,
    CityId
FROM
    (
        SELECT
            ROW_NUMBER() OVER (ORDER BY l.Name, f.Name) AS ROW,
            f.Name AS FirstName,
            l.Name AS LastName
        FROM
            Useful.dbo.LastNames l,
            Useful.dbo.FirstNames f
    ) AllNames,
    (
        SELECT
            Id AS CityId,
            ROW_NUMBER() OVER (ORDER BY NEWID()) AS ROW
        FROM
            Cities
    ) C
WHERE 
    AllNames.ROW % 66 = C.ROW % 66

```

Let's go over it:

1. I add a ROW column to the "all names" temp-table. Due to the ORDER BY NEWID()) I'll get a new sort on every select, so the ROW column is random enough.

2. I add a ROW column to the Cities table. Same kind of randomness as 1

Now I inner join the tables on the ROW column on both tables, mod the number of possible cities (which is less than the names count), getting a random CityId for each row in the "all names" table (which is the Cartesian Product of FirstNames and LastNames)

