---
layout: post
title:  "System.DateTime.Date, or why a code review is definitely a good thing"
comments: true
tags: [c-sharp]
---


So today a new dev has joined the team. Not too soon after he got his hands on one of our solutions I got an IM from him with the following snippet:

```
public static DateTime GetDateOnly(this DateTime dateTime)
{
   return new DateTime(dateTime.Year, dateTime.Month, dateTime.Day);
}
```

My code. My blame.

It apparently skipped the [DateTime.Date](http://msdn.microsoft.com/en-us/library/system.datetime.date.aspx) property of System.DateTime. After over 5 years in C# world.

