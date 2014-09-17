---
layout: post
title:  "Backing up a hosted SQL Server DB"
comments: true
tags: [miscellanea,tools,sql]
---


As you already have probably noticed by now, I did some renovation on my blog.

Among other things, it is now being served froma SQL Server database, rather than form the daBlog xml files.

One caveat of this, is the fact that backuping the blog's content became much harder. Since I have no access to db backups, I neede to find a way to generate the INSERT scripts that will enable me recreationg the content if it would be needed.

My first try-out was [the Microsoft SQL Server Database Publishing Wizard](http://www.microsoft.com/downloads/details.aspx?FamilyId=56E5B1C5-BF17-42E0-A410-371A838E570A&amp;displaylang=en), [that I saw at Scott Gu's blog](http://weblogs.asp.net/scottgu/archive/2006/12/22/recipe-deploying-a-sql-database-to-a-remote-hosting-environment-part-1.aspx)

This tool is meant to create the script form a local dev db, in order to make it run on the remote one. Actually you can make it run on the remote one, nd save the generated sql file locally, for backup purposes.

I tried it up, but it send some nasty .NET break dialogs.It however managed to create A script, that I'm yet to check for it's usability.



Nice tool. But I'll look for something that is pure t-sql so it'd be easier to run (maybe automated every once in a while)

