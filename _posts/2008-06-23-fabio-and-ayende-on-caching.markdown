---
layout: post
title:  "Fabio and Ayende On Caching"
comments: true
tags: [architecture,nhibernate]
---


A quick ripoff from NHibernate's users group:



Fabio Maulo:

The base concepts to understand are (my opinion):- *The Cache is not the panacea of performance.*- Don't use the Cache like the base of your app; add the management of Cache at the end of your development process to increase the performance only where you really need do it.- Implementing a method named GetAll is, in most cases, a bad idea; an acceptable mediation is PaginateAll(pageSize).- InMemoryFilter can have less performance than filter trough RDBMS (especially when you intent to do it trough Cache with a large amount of entities).- Take care on what happen to the memory usage of your app when you are using Cache.



Ayende:

The cache is not magic, and should not be treated in such a fashion. I refuse to use the 2nd level cache in my applications until I have a perf problem that can't be solved by creating smarter queries.Think about the cache as band aid, and good design as avoiding the need for that.


 

And I say Hallelujahs 
