---
layout: post
title:  "Cloning a DetachedCriteria"
comments: true
tags: [activerecord,nhibernate]
---


I always need to look it up, so I might as well put it here for future reference:



What is a DetachedCriteria?

This is an ICriteria object, that is detached from any ISession, therefore is suitable to be passed around as a specification that is being built up dynamically.



Why would I want to clone it?

Well, say I want to run two similar queries (same WHERE part) but with a different projection or aggregation. For example - when fetching a paged collection, you'd want to create the spec criteria, then add Count projection on A to get the 'total number of records' ,and add the paging restrictions (sort, then from row 101 take 10 records). Now if you'd try to add the restrictions to the criteria to which you have already applied Count on, and error would occur.





Solution:

There's CriteriaTransformer class, which holds a few useful static methods, amongst them, Clone(DetachedCritetia):

```

DetachedCriteria spec = DetachedCriteria.For&lt;Whadever&gt;() ...; &lt;= setup criterionsDetachedCriteria countCriteria = CriteriaTransformer.Clone(spec)    ...; <= setup the count projectionDetachedCriteria pagedCriteria = CriteriaTransformer.Clone(spec)    ...; <= setup the pagingICollection<Whadever&gt; stuff = whadeverRepository.FindAll(pagedCriteria);
int total = whadeverRepository.Count(countCriteria);
```

