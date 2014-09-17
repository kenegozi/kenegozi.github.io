---
layout: post
title:  "Linq Cast extension method and InvalidCastException"
comments: true
tags: [c-sharp]
---


For times when one wants the average of a collection of numbers, Linq's Average() extension method is an easy win.



The problem is that it won't work on a collection of byte elements.

The initial attempt would be:

```
var numbers = new byte[] {1, 2, 3, 4};
var avg = numbers.Cast<int>().Average();
Console.WriteLine(avg);
```

&#160;

However this will fail with 

```
Unhandled Exception: System.InvalidCastException: Specified cast is not valid.
   at System.Linq.Enumerable.d__aa`1.MoveNext()
   at System.Linq.Enumerable.Average(IEnumerable`1 source)
```

&#160;

The workaround is to cast using the Select operator, and manually cast to int:

```
var numbers = new byte[] {1, 2, 3, 4};
var avg = numbers.Select(b=>(int)b).Average();
Console.WriteLine(avg);
```

&#160;

&#160;

The author of the best explanation that will be posted as a comment to this post will get a huge prize (in other words – might get a mention in a follow up post …)

&#160;

&#160;

&#160;

&#160;
This was a short reminder-post. I do have some more interesting things awaiting in the pipe, and I promise to re-attend my blog now that the pressure of the new baby and of setting up the IDCC conference is out of the way. Good things comes to those who wait blah blah blah.
