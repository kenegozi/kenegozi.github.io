---
layout: post
title:  "From MongoDB to Azure Storage"
comments: true
tags: [azure,blog-engine,design]
---


My blog has been running happily for some time on a MongoDB storage. It used to be hosted on a VM in a really awesome company, where I had both the application and the DB sharing a 2GB VPS, and it worked pretty well.

At some point I moved the app to AppHarbor (which runs in AWS) and I moved the data to MongoLab (which is also on AWS). Both are really great services.

Before it was running on MongoDB, it used to be running on RDBMS (via NHibernate OR/M) and I remember the exercise of translating the Data Access calls from RDMBS to a Document store as fun. Sure, a blog is a very simplistic specimen but even at that level you get to think about modeling approaches (would comments go on separate collection or as subdocuments? how to deal with comment-count? and what about tag clouds? what about pending comments that are suspected to be spam?)

I am now going to repeat that exercise with Azure Storage.

The interesting data API requirements are:
- Add Comment to Post – atomically adds a comment to a post, and updates the post's CommentsCount field.  
- View-By-Tag (e.g. all posts tagged with 'design', order by publish-date DESC)  
- view latest N posts (for atom feed, and for the homepage)  
- view Monthly archive (e.g. all posts from July 2012)  
- Get a single post by its permalink (for a post's page)  
- Tag Cloud – get posts count per tag  
- Archive summary – how many posts were published on each month?  
- Get total comments count (overall across all posts)  
- Store images, while using a hash of the content to generate etags for controlling duplications.









Given the rich featureset of MongoDB, I was able to use secondary indexes, sub-documents, atomic document updates and (for 4, 6 and 8) simple mapReduce calls. The only de-normalization was done with CommentsCount field on post, which is atomically updated every time a comment is added or removed from the post, so the system stayed fully consistent all the time. The queries that required mapReduce (which could get pricy on larger data-sets, and annoying even on small ones) where actually prone to aggressive caching, so no big pain there. 

I will be exploring (in upcoming posts, its 2am now and the baby just woke up) what it takes to get the same spec implemented using Azure Storage options – mostly Table Storage and Blog Storage.*



* yeah there is SQL Azure which is full fledged RDBMS, which can easily sport all of the requirements, but where's the fun in that?

