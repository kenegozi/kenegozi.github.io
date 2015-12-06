---
layout: post
title:  "On search experience"
comments: true
tags: [search, ux]
---

I always liked search. The only article I have ever [posted on CodeProject](http://www.codeproject.com/Articles/17296/A-cool-n-simple-search-page-using-Google-AJAX-Sear) was about Search (in that case, simply harnessing Google APIs to build a sweet autosuggest enabled, Google powered search page).

I later worked for a general purpose search-engine company, [Delver](https://www.crunchbase.com/organization/delver#/entity), which got acquired by Sears, ended up working on what would become [ShopYourWay](http://www.shopyourway.com/), in essence a product catalog and discovery service, with emphasis on socially enables search. My last stint for Microsoft was re-working the people search component for [Skype for Business](http://www.skype.com/en/business/skype-for-business/). For [ActiveGiver](https://www.activegiver.com/), multiple different features required some well thought of design for effective search and exploration, of politicians, political causes, political campaigns, and more.

Each one of those represent a very different kind of search. The business domains are different (e-commerce vs collaboration), the centrality of the search capability to the core product is different (a dedicated search service vs search capability supporting a totally different product). Even the corpus of indexed data differ radically (searching in rather structureless articles is very different from product catalog search, which in turn is very different from searching for persons by names).
The one thing in common to all of these is that there was never a generic, magical, plug and play, fire and forget solution.

A common misconception in search implementations is that you only need to choose the *tool*, then you plug it to your app and you are done. Discussions are reduced to ElasticSearch vs Solr, Lucene vs. full-text search in the DBMS
