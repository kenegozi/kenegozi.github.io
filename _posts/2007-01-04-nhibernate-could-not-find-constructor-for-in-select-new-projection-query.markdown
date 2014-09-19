---
layout: post
title:  "NHibernate ' Could not find constructor for: ' in ' select new ' projection query"
comments: true
tags: [castle,activerecord,nhibernate,hql]
---


There are two facts here:1. I love NHibernate.2. I hate NHibernate's exception messages.

And here's my story.

On a project I'm working on, I need to show a projection of "top 10" from the database. let's show this on the good old Blog scenario:![](http://kenegozi.com/blog/uploaded/windowslivewriter/nhibernatecouldnotfindconstructorforinse_a7e6/post-comment-stupid_erd_thumb%5b2%5d.gif)

So I want to show the posts with the longest comments measured by the comment's length. Stupid, huh? but it's a demo only (I cannot expose the actual ERD). Let's say I want the top 5.

I am using Castle ActiveRecord. There is a Post and a Comment classes. However, I do not wish to load Posts objects, since It will load the Comments, too, and maybe other stuff that the Post class is related to. So I have defined a PostProjection class: 

```
   1:  publicclass PostProjection
```

```
   2:  {
```

```
   3:  publicstring Title;
```

```
   4:  publicint Length;
```

```
   5:  public PostProjection(string title, int length)
```

```
   6:      {
```

```
   7:          Title = title;
```

```
   8:          Length = length;
```

```
   9:      }
```

```
  10:  }
```

I have also added an [Import] attribute on the Post. The actual querying is done using the next hql:

```
   1:  publicstatic PostProjection[] GetTopPosts(int postsToGet)
```

```
   2:  {
```

```
   3:      SimpleQuery&lt;PostProjection&gt; q =
```

```
   4:  new SimpleQuery&lt;PostProjection&gt;(typeof(Post), @"
```

```
   5:          select new PostProjection(p.Title, sum(c.LineCount)) 
```

```
   6:          from 
```

```
   7:              Post p inner join 
```

```
   8:              p.Comments c 
```

```
   9:          order by sum(o.LineCount) desc
```

```
  10:          group by p.Title");
```

```
  11:      q.SetQueryRange(postsToGet);
```

```
  12:  return q.Execute();
```

```
  13:  }
```

It worked great.

Yesterday I've upgraded my Castle dll's to the ones from build 229. It includes NHibernate 1.2.0.2002

Now the "select new" started to fail, and NHibernate started to claim than "Could not find constructor for: PostProjection".

I've been scratching my head, trying various approaches, and even was keen to skip the "new" and use an object[ ] and populate the Projection Array by hand, but then I tried changing the "length" parameter of the constructor from "int" to "long". Magically it solved the problem.

Now, if only NHibernate would have said :

Could not find constructor for: PostProjection.Looking for: PostProjection(string, long)

I would've known what the problem was, and what should I change.

So what have we learned today?

1. NHibernate expects sum() to return "long" rather than "int"2. NHibernate's error messages suck.

I've svn-ed the NHibernate trunk, added some code so this message would be more developer friendly, and I'm going to send the patch to NHibernate's JIRA.

