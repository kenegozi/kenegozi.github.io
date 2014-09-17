---
layout: post
title:  "Debug Driven Development"
comments: true
tags: [debugging,c-sharp]
---


Imagine you have something weird going on in an application.

Something is not behaving they way it should be, yet no exception is being thrown.

&#160;

Then drilling down you find this piece of magic:

```
try
{
    DoSomething();
}
catch (Exception exception)
{
    exception.ToString();
}
```

