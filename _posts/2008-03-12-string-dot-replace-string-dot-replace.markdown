---
layout: post
title:  "String.replace != String.Replace"
comments: true
tags: [client-side]
---


I have a html tag (image input) with id that looks like "delete-party-image".

On click, it should call XHR-ly to a server action, named DeletePartyImage.

Naively I did 

```
var action = btn.id.replace('-', '');
```

which of course returned "deleteparty-image", because, as opposed to .NET's String object's Replace() method, this one (javascript's String.replace) only replaces the first occurrence.

Yeah, I already knew that, but have forgot it just when I needed it.

So for next time's sake - the way to do it in javascript is using a regex with global modifier:

```
var action = btn.id.replace(/-/g, '');
```

