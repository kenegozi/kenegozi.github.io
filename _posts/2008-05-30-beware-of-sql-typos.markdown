---
layout: post
title:  "Beware of SQL typos"
comments: true
tags: [sql]
---


I feel so stupid.



Just spent almost two hours trying to figure out why a SQL query wasn't running.



I kept getting "Incorrect syntax near 'RowNumber'" error message.



I was under the impression that my SQL syntax was ok, and tried various changes to the way I was invoking the query, but alas, nothing worked.



Then I just copied the raw query into SQL Manager, just to see the next snippet (the colouring, or lack of, was pointing this out for me):

```
WEHRE RowNumber BETWEEN @First AND @Last
```



WEHRE the hell was my head?

