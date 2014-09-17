---
layout: post
title:  "And the award for &quot;The Best SQL Where Clause&quot; goes to ..."
comments: true
tags: [miscellanea]
---


It's real. I took it from SQL profiler on a production database, ofa very popular HR software.The query should search for people withgiven name and surname.

```
WHERE(1=0OR ( Name= 'Ken Egozi' )OR ( Name= 'Egozi Ken' )OR ( Name= 'Ken Egozi' )OR ( NameLIKE'%Ken Egozi%' )OR ( NameLIKE'%Egozi Ken%' )OR ( NameLIKE'%Ken%' AND Name LIKE '%Egozi%' )OR ( NameLIKE'%Egozi%' AND Name LIKE '%Ken%' ))
```

A good laugh what I like for my birthday. (according to the Hebrew Calendar, it was yesterday)

