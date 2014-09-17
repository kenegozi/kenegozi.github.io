---
layout: post
title:  "HashSet.UnionWith documentation FAIL &ndash; trust your instinct"
comments: true
tags: [c-sharp]
---


From the method's doc:

Modifies the current [HashSet&lt;T&gt;](#) object to contain all elements that are present in both itself **and** in the specified collection.

&#160;

![image](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/Has.UnionWithdocumentationFAILtrustyouri_14163/78672664-0773-411c-bc95-6513e613af5e.png)

&#160;

Now I know my way around (at least the basics of) set theory, and I *know* what union means. nonetheless I read the doc of the method and for some reason I thought that I'd get the intersection. 

&#160;

For those unsure about what Union means (or what it actually does), the following code:

{% highlight c# %}
var set = new HashSet<int>(new[] {1, 2});
var other = new[] {2, 3};
set.UnionWith(other);
Console.WriteLine(Serialize(set));{% endhighlight %}

&#160;

So, I ended up bumping my head on the wall keyboard for a couple of minutes trying to understand why a perfectly good test fail with no reason, until I figured it out. It is true that I wasn't showing a huge amount of smartness here, and it could be that my English skills are poor, but I believe replacing “and” with “or” will serve the method's doc better.

&#160;

If the BCL was open source I would have sent a patch with the doc fix …

