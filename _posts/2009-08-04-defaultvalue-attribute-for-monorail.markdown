---
layout: post
title:  "DefaultValue attribute for MonoRail"
comments: true
tags: [architecture,monorail]
---


Another gem from [Daniel Hölbling](http://www.tigraine.at/).

&#160;

In short – it will allow you to write code like:

```

public void Browse([DefaultValue(&quot;beer&quot;)] string category, [DefaultValue(1)] int page)&#160; {&#160; 

   ...
}

```

&#160;

grab it [here](http://www.tigraine.at/2009/08/04/defaultvalue-attribute-for-castle-monorail/)

&#160;

&#160;

&#160;

The cool thing is that because MonoRail is so extremely flexible, one can really easily add this type of functionality without touching the code-base, but rather implementing a straightforward interface. That's what I call [extensibility](http://en.wikipedia.org/wiki/Extensibility).

One more super kudos to [Hammett](http://blogs.msdn.com/hammett/) for the overall architecture of MonoRail.

