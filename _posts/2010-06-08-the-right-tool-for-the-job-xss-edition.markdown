---
layout: post
title:  "The right tool for the job, XSS edition"
comments: true
tags: [client-side,tools,javascript]
---


It is not very uncommon to see pages that include a “returnUrl” parameter, usually within authentication flows. At times, the browser will run some script (like a call to an analytics service) and then another script issuing a redirect (through setting location.href etc.)

&#160;

There are also other cases where UGC can find its way into JavaScript blocks. People might want to have their script do fancy stuff with the page's data.

&#160;

```
var url = '&lt;%=viewData.returnUrl%&gt;';
```

or

&#160;

```

var commenterName = '&lt;%=viewData.newComment.authorName%&gt;';

```

&#160;

for e.g.

&#160;

&#160;

Now for the “stating the obvious”:

Just like any other UGC, this type of content must be sanitized to prevent XSS attacks.

&#160;

Not to long ago I was called to do a security inspection on a web application's codebase. During which, some very few XSS holes were detected using JavaScript injection. This was quite surprising to me, as I knew that all content injected into JavaScript was being sanitized by the team.

Digging further I found out that they did call a sanitize function on UGC, just not the correct function. What they did was to run a JSON formatter over the UGC string, a thing that was solving JS errors occurring from string quoting problems, but it did not eliminate malicious scripts.

The weird thing was that the team was already using the AntiXss library (which is a very aggressive, white list based input sanitation library for .NET), for html fragments. The library also have a JavaScript Encode function. Switching the sanitation function of the team from calling the JSON library to calling the AntiXss library fixed the problem for good.

&#160;

e.g. code to demonstrate the difference between the methods:

{% highlight c# %}
static void Main()
{
    var ugc = &quot;';alert('xss');'&quot;;
    Render(JsonConvert.SerializeObject(ugc));
    Render(AntiXss.JavaScriptEncode(ugc));
}

static void Render(string encoded)
{
    Console.WriteLine(&quot;var returnUrl = '&quot;+encoded+&quot;';&quot;);
}{% endhighlight %}

The output from the above snippet is:

```
var returnUrl = '&quot;';alert('xss');'&quot;';
var returnUrl = ''\x27\x3balert\x28\x27xss\x27\x29\x3b\x27'';
```

&#160;

There are a couple of things to learn from that story:
- When you encounter a problem, look around for common solutions. for e.g., every language that is being used for web development today has a library that takes care of XSS, so use it instead of coming up with a partial solution using the wrong library, or even worse –try to re-invent the way of doing that. You are probably not in the business of Anti XSS, so don't spend time on solving the problem.
- Know your toolbox. If you are using a tool, be aware of its capabilities (and shortages). Exploring the AntiXss library a little bit would have shown the team that there is a perfectly good solution for their problem.

