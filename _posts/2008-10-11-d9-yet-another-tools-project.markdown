---
layout: post
title:  "D9 - Yet another tools project"
comments: true
tags: [tools]
---


I've started a new oss project under the name "D9".



the project is hosted at [http://code.google.com/p/d-9/](http://code.google.com/p/d-9/)



I'm adding all kinds of useful stuff I've written during my years doing .NET, that I didn't have any better place for.



It's fairly empty now, but during the following days I hope to add more stuff in there.



Currently you can find:

- D9.Commons - well, common stuff. Things that need no reference outside the BCL.Currently the only thing there is a helper for using the DescriptionAttribute on enum values. more to come
- D9.NHibernate - helpers for NHibernate development. The only thing there currently is a UserType that allow persisting enums using their DescriptionAttribute instead of their name
- D9.StaticMapGenerator - I've written about this before. It's a command-line tools that generates a strongly type sitemap for a website's static files (css, js and image files)


What I'm gonna add shortly:

- D9.QuerySpecBuilder - a library for generating SQL code in a structured Criteria-like manner




I generally am doing this so I'll have a place for all my recurring stuff (instead of copy&amp;pasting from project to project every now and then). If people will find it useful it'd be great. If people will want to contribute to it it'd be even greater.



License is "new BSD" so feel free to use it if you like



comments, endorsements and insults are welcome as always.

