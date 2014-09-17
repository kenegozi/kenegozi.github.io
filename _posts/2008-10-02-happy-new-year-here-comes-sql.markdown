---
layout: post
title:  "Happy new year, here comes SQL"
comments: true
tags: [nhibernate,hql,sql]
---


One of the things occupying me is my work on my last seminar for the university, so I'd finally get my Bachelor's degree.



The project is building an application for managing, uhm, a university. You reckon they figured out a way to prototype a new system for free ... ?



Anyway, the seminar name is "Database Management Systems Workshop", so one of the things I have to do is to present a full E/R-D even before I start coding. And UI design sheets. So no agile here :(



My aim is to be able to demonstrate some cool stuff though, like the usage of an advanced O/R mapper (NH), static and dynamic object-based querying (hql and Criteria API), some advanced T-SQL stuff ([recursive set-based queries using CTE](http://www.setfocus.com/TechnicalArticles/sql-server-2005-tsql-3.aspx), and some [fancy integrity enforcing triggers](http://kenegozi.com/Blog/2008/07/28/unique-when-not-null-or-not-empty-in-sql-server.aspx)), smart caching with [SqlCacheDependency](http://davidhayden.com/blog/dave/archive/2006/04/29/2929.aspx), and more.



To make things interesting I decided to create a large-ish mount of fake data. Well, at least in terms of a non-production university-demo app. My DB currently holds 600K students and over 500 possible modules.

I'll blog a bit on the ways I used to populate that data, and other data as well (such as the ModulePrerequisites table which is an adjacency table).



So, beware, some SQL might follow

