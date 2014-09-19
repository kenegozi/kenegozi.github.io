---
layout: post
title:  "How do you pass values from Controller to View with MVC3"
comments: true
tags: [design,asp-net-mvc]
---

The scenario:
Given a blog application, with the following layout![image](http://kenegozi.com/blog/uploaded/windows-live-writer/how-do-you-pass-values-from-controller-t_c1d4/image_thumb_2.png)

with two possible usages – a post page: ![image](http://kenegozi.com/blog/uploaded/windows-live-writer/how-do-you-pass-values-from-controller-t_c1d4/image_thumb.png)and a homepage:![image](http://kenegozi.com/blog/uploaded/windows-live-writer/how-do-you-pass-values-from-controller-t_c1d4/image_thumb_1.png)

Let's define the view model:

```
PostData:
  string Title
  string Body

PostView
  PostData Post; 

HomepageView
  PostData[] Posts

LayoutView
  Tuple&lt;string, int&gt;[] Archive
  Tuple&lt;string, int&gt;[] TagCloud
  string[] Similar
```



The views:
- _Layout.cshtml – obvious 

- Post.cshtml – given a PostData instance will render Title and Body 

- PostPage.cshtml – given a PostData, will call Post.cshtml and then render “add comment” form 

- Homepage.cshtml – given PostData array, will iterate and call Post.cshtml for each post




How data moves around:

- Controller is passing PostView (or HomepageView) *along with* LayoutView to the views 

- Post.cshtml should only see its parameters, not the layout's (which are passed but are not interesting within the post template). 

- same goes for the other views 

- All views should be able to “see” a shared parameter named “IsCurrentUserAdmin” 

- 






Given that I want typed access to the view parameters in the view (for the sake of intellisense and refactorings), how would I model and pass the data around?

I've pseudo-code-grade written two options: the first is to use inheritence in the view model to achieve type-ness, on the expense of flexibility (composition is difficult with class hierarchy, and you need to be aware of and grab the viewModel instance in various places). The second is flexible (use the ViewData dictionary) but getting type-ness is cumbersome and partial (strings scattered around, casting needed etc.)

see [https://gist.github.com/1272269](https://gist.github.com/1272269) if the gist widget does not load in-place
I do have a solution that works for me
With the many years that I've been writing complex web apps using various ASP.NET frameworks and almost always with c# based, static-typed view engines, I have a solution that works very nicely for me. 
But I want to be aware of the MVC3 canonical / textbox way
So for all you MVC3 ninja's out there – please describe your way of doing it. 



I will describe my approach in an upcoming post and I'd appreciate any input on it

