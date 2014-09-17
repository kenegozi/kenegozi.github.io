---
layout: post
title:  "Using gists in your blog? Embed them into your feed"
comments: true
tags: [blog-engine,tools,open-source-software]
---


I love using github gists for code snippets on my blog. It has many pros, especially how easy it becomes for people to comment and suggest improvements, via the github mechanisms we all love.

There are however two drawbacks that people commonly refer to with regards to using gists that way:
- Since the content of the code is no longer part of the post, it is not being indexed by search engines, and  
- Since the content of the code is not part of the post, and since the embedding mechanism is JS based, people who consume the blog via the feed and use feed aggregators that does not run javascript (most of them don't), will not get the contents.


My answer to the first one is simple. I don't really care. Not that I do not care about SEO, just that I do not need to have my post indexed and tagged under a bunch of irrelevant reserved words and common code. If the snippet is about using an interesting component ABC, I will mention that said ABC in the post content outside of the snippet, problem solved.

The latter is more interesting. I used to manually add a link to the gist page whenever embedding one, but it is not a very fun thing to do.

So, in order to overcome this, I wrote a small code snippet (yey) that upon saving a post (or updating it), will look for gists embeds, grab the gist source from github, stick in into the post as a “ContentForFeed” and serve with a link to the gist page, just for the fun of it.

And the code for it (it's a hacky c#, but easily translatable to other languages, and/or to a cleaner form)

Have fun reading snippets

