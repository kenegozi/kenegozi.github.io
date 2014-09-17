---
layout: post
title:  "Beware of static session"
comments: true
tags: [asp-net-2-0,c-sharp,monorail]
---

The bug:
Weird behaviours regarding session management

&#160;
The blame:
(within session access wrapper static class):

```
private static IDictionary session;
...
if (session == null)&#160;&#160; session = new SessionAdapter(HttpContext.Current.Session);
...
```

so the first time the last line is called, the then-current-session is stored in a static variable, thus the first session is always referenced even for newer sessions.

&#160;

The reason for the above code being present in the first place is that:

```
public static void SetSessionTo(IDictionary newSession)
{
    session = newSession;
}
```

So that tests that a stubbed 'session' could have been injected into the session-wrapper-static-class thingie.

Clearly, the implementation was wrong.

&#160;
The fix:
now the code looks like this:

```
private static IDictionary stubbedSession;

static IDictionary Session
{
    get { return stubbedSession ?? MonoRailHttpHandler.CurrentContext.Session; }
}
```

And these were 60 seconds on careless coding.

&#160;

Ken, the careless coder

