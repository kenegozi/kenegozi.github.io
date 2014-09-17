---
layout: post
title:  "Copy and Paste == Bad Habit"
comments: true
tags: []
---


Who can guess what's wrong with that code?

```
publicvoid Disapprove([ARFetch("id", Create = false)]Post post)
{
   if (post != null)
   {
      post.IsBlocked = true;
      post.Update();
   }
   RedirectToReferer();
}
```

Ignore design, architecture, etc. Is there anything wrong? is it possible that this Action won't do what is supposed to do?

Ok, I'll give you a clue.

"Disapprove" should disapprove a COMMENT, not a POST.



Nasty Copy&amp;Paste bug ;)

