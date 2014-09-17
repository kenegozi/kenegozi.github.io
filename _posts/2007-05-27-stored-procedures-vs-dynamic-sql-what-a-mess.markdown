---
layout: post
title:  "Stored Procedures vs. Dynamic SQL - What a mess"
comments: true
tags: []
---


A few days ago I was wandering through the web, and I found myself catching up on [Joel Spolsky's blog](http://www.joelonsoftware.com/).

Being there, I went on to his .NET Questions Board to see if I can contribute anything.

So I see there an innocent looking question:

"Stored Procedures vs SQL queries" ... Recently, I changed jobs and at the new place, the buzz is to get rid of the stored procedures and use SQL queries instead. I was hoping to get some strong reasoning to move in that direction and so here I am ...



So I answered , in quite a naive fashion, that IMHO, one should have a really good reason in order to split his codebase into two, and using SP's, so for the CRUD it's definitely a no, while you might consider SP for places that it would open a crowded bottleneck, or for any other specially-needed-thing-that-might-come-up-but-usually-it-won't.

After that I forgot all about it. After all, I am in a vacation on Budapest, not in my study at home.



However, today I've had a little quality time with my laptop (while setting the hotel room for checkout) and I thought "let's see what the guy thoughof my answer".



It seams that I've accidentally started alittle war.

[I think You'd wanna read it](http://discuss.joelonsoftware.com/default.asp?dotnet.12.500091.12).

The players: On one side of the ring, Mark, Robert and Mike,who struck me as frustrated DBAs who'd like to make all OO developers to write only UI. (I guess that's what Java/C#/Ruby/etc. is only good for, anyway)

On the other side,JSmith, whom I do not know of personally, but I like his answers.



I'll quote the DBAs:



Me:What reasons do you have for using Stored Procs, splitting your codebase between two environments?Robert:For the same reason that fields in public classes are private.Me:Stored Procs are not faster, nor safer than "dynamic SQL". They are adding a strict dependency on the RDBMS, hard to version, non OR/M friendly, and most importantly, non developer friendly. Robert:In my experience, the above is untrue in nearly every respect.SP's are typically faster than dynamic SQL: In SQL Server at least, the first time a SP runs, the server builds and saves the execution plan for each query. This may or may not happen if you're generating SQL dynamically in the application. I've seen a lot of middle-tier code that executes multiple SELECTS and then processes the returned rowsets to generate multiple UPDATEs; a great deal of that code would run much faster if it lived in the database and none of the intermediate results ever got put on the network. SP's are typically safer than dynamic SQL: SQL injection attacks (to pick the obvious example) are impossible if the database doesn't let connections execute SQL from Mark:I do complex stuff by using multiple simple steps with their results stored in an intermediate table. It's great because I'm almost forced into doing stuff simply, and simple is the way to go when developing software. I now actually prefer my business logic in SQL than in a client-side language. Apart from the benefit of enforcing business logic on every app that accesses the database, my brain seems to prefer the set-based approach. from Mike:With SPs, I can update a table with a user id that doesn't have update privileges on the table! I just need a user id with execute privilege on the stored procedure. 





Really, you got to read that. I'll ping [Ayende](http://www.ayende.com/blog) about this now. He is so going to like this.

