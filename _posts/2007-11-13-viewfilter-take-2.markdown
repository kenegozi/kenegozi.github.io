---
layout: post
title:  "ViewFilter - Take 2"
comments: true
tags: [castle,monorail,aspview]
---


I've been asked lately about the use of the ViewFilter mechanism in AspView.

I've once written about it briefly here on my blog, and you can see it at [http://kenegozi.com/Blog/2007/01/08/introducing-viewfilters.aspx](http://kenegozi.com/Blog/2007/01/08/introducing-viewfilters.aspx)



However, I'll post another (a bit more realistic) example here.



Scenario: some kind of a CMS thing. You want to present the user with some markup, in both "preview" mode and "Source" modes.



If the server had direct access to the markup in a string literal, things were easy. That usually happens when the markup is to be supplied by an end user, either directly or through a WYSIWYG Html editor. You'd end up with something like:

```
public interface IContentItem{ public string Markup { get; }}
```

your view would look like:

```
...
<h3>Preview:</h3><div><%=view.ContentItem.Markup %> </div><h3>Source:</h3><div><%=Helpers.Html.HtmlEncode(view.ContentItem.Markup) %> </div>...

```



easy enough.



However, what if the piece of markup that you want to show, has some view-logic, so you have a template generating the markup from an entity? For example, this blog has a view "Posts/One" that gets a Post entity, and fits it into a single post markup, putting the title in a <h4>, tags in <span> with theit title and href, etc.

How can you show the markup source for that?

ViewFilter to the rescue.

In short - A ViewFilter is a way to transform a chunk of a view, using simple manipulations. Do not look for that on other View Engines, as it's currently an AspView-only feature.



Let's code our needed filter: 



```
public class HtmlEncodeViewFilter : IViewFilter{ public string ApplyOn(string input) { return HttpUtility.HtmlEncode(input); }}
```

and in the view:

```
...<% foreach (Post post in view.Posts) { %><h3>Preview:</h3><subview:.Posts.One post="<%=post %>" > </subview:.Posts.One><h3>Source:</h3><filter:HtmlEncode> <subview:.Posts.One post="<%=post %>" > </subview:.Posts.One></filter:HtmlEncode><% } %>
```



Hey - you won't even need to create that filter. AspView is supplied with four basic (however useful) filters:

- HtmlDecodeViewFilter 

- HtmlEncodeViewFilter 

- LowerCaseViewFilter 

- LowerCaseViewFilter 





Can you think of more reusable view filters? why not post them here, or better yet, supply a patch to AspView with you filters?

