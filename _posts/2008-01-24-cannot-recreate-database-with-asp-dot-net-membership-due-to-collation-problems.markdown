---
layout: post
title:  "Cannot Recreate Database With ASP.NET Membership Due To Collation Problems"
comments: true
tags: [sql]
---


Situation:
- My SQL Server 2005 Express has a default collation of HEBREW_CI_AI
- I have a dev database with Latin_General_CI_AS

Problem:

Trying to rebuild the database from script fails due to collation errors.



Explanation:

A bit of lookup into those using my good pal google, have proved my suspicions. Somewhere along the script a StoredProc is being created, which joins to a temp table. It appear that temp tables are being created within the tempdb system database, which in turn has the collation of the server.

The answer usually is to create temp tables with explicit collation. However, those stored proces are generated by the ASP.NET membership thing, so it cannot be setup to use the proper collation on temp tables.



So, Solution 1 (if it's not happening on generated stored procs):

Explicitly set the collation on temp tables.



Solution 2 (for the other poor people with generated sprocs):

You'd need to rebuild the system databases, either by reinstalling SQL Server, or following [these instructions](http://msdn2.microsoft.com/en-us/library/ms144259.aspx)



The list of collation options can be found [here](http://msdn2.microsoft.com/en-us/library/ms143508.aspx)

