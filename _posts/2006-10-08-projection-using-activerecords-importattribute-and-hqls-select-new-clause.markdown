---
layout: post
title:  "Projection using ActiveRecord's ImportAttribute and HQL's select new clause"
comments: true
tags: [castle,activerecord]
---




WARNING:I'm going to use some lousy examples in this post. Please bear with me, and stick to the Point rather than to the actual Classes being presented.

What is a projection?

Consider this genius ERD:

![](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/ProjectingtononActiveRecordclassesusingA_C76B/Post_Comment_Genius_ERD_thumb3.gif)

A sample projection could be a kind of a view:

![](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/ProjectingtononActiveRecordclassesusingA_C76B/CommentView_Genius_ERD_thumb1.gif)

The SQL is (surprise!)

```
   1:  SELECT
   2:      p.Title as PostTitle, c.Content
   3:  FROM 
   4:      Comments c INNER JOIN
   5:      Posts p ON c.PostId = p.Id
```

But we live in the Classes/Code/Compiler/Types/etc. domain, not the SQL domain, so I'd need a Post and a Comment classes that would derive from ActiveRecordBase<>. But what about the CommentsView? I can select into an array of objects using a simple HQL's select:

```
   1:  IActiveRecordQuery query = new HqlBasedQuery(typeof(Job),
```
   2:  "select c.Post.Title, c.Content from Comment as c");   3:     4:  ArrayList report = ActiveRecordMediator.ExecuteQuery(query) as ArrayList;
But I do not want to, since every item in the ArrayList is of type object[]. yuck.

No, I want to use a CommentView class, and this syntax:
   1:  IActiveRecordQuery query = new HqlBasedQuery(typeof(Job),
   2:  "select new CommentView(c.Post.Title, c.Content) from Comment as c");
   3:  
   4:  ArrayList report = ActiveRecordMediator.ExecuteQuery(query) as ArrayList;
and now the ArrayList contains CommentView objects.

In order to achieve that, we need to use the peculiar named attribute, [Import] like that:

```
   1:  [Import(typeof(CommentView), "CommentView")]
   2:  [ActiveRecord("Comments")]
   3:  publicclass Comment : ActiveRecordBase<Comment> { /* blah blah */ }
```

Now ActiveRecord (assuming Comment class was initialized using ActiveRecordStarter) knows that CommentView refers to a projection of the Comment ActiveRecord, using the class CommentView.

The use of [Import] is not documented too well, so I've included ImportAttribute in the post's title so It could be easily found. After a few refinements I hope to post it to the CastleProject wiki.

Note [Ayende's post](http://www.ayende.com/Blog/ActiveRecordAndASPNet20.aspx), with some better example for projection, but it lacks the demonstration of using Import attribute, so that's actually the reason for this post.

That's for the "how you do that".



now for the "How I think you should be able to do that":

well, INHO, the Import attribute is poorly named.

The name of the Attribute makes no sense to me.The lack of default name makes no sense to me. I should be able to 

```
   1:  [Import(typeof(CommentView))] 
```

And what if I need some different projections to the same AR type? Multiple Import attributes make no sense, too. 

Does the Import attribute serves a different purpose? If not – why not call it “Projects”? (since it projectsto some other classes)

like:

```
   1:  [Projects(typeof(CommentProjectionOrWhatever))] 
   2:  publicclass Comment : ActiveRecordBase<Comment> { /* blah blah*/ }
```

or even better yet: 

```
   1:  [Projects(
   2:  typeof(CommentProjectionOrWhatever), 
   3:  typeof(YetAnotherCommentProjectionNeededForDemonstrationPurposesOnly )]
```

