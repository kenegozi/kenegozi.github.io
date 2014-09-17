---
layout: post
title:  "Spot the bug &hellip; dynamic language slap-on-forehead moment"
comments: true
tags: [debugging,tools,javascript]
---


This is a view template rendering html. When running it, it caused the page to freeze (i.e. the page keeps loading).

&#160;

```

<h3>Services</h3>

<% for (var ix=0; ix < view.services.length; ++i) { %>

   <% var service = view.services[ix]; %>

   <p> <%=service.name %> </p>
<% } %>	

```

&#160;

Took me a while to grasp it. I tried various things, thought that the templating-engine code was bad, blamed every line of code in the application, until I actually re-read the template code carefully 

&#160;

You see, the indexer is “ix” while the ++ is working on “i”.

&#160;

Since it is Javascript, no “I do not know what i is” exception was thrown. Instead, the first time it was encountered, JS decided it equals zero, and then the poor thing just kept increasing, probably until it would have overflowed.

&#160;

&#160;

&#160;

&#160;

In case you have missed it, it was javascript. Not AspView, nor Jsp. I am using a new, super-simple javascript base templating engine, for places where embedding something like AspView would be an overkill, and using NVelocity would be as annoying as using NVelocity.

&#160;

I hope to have it released as open source soon. Basically it is a simple transformer into simple JS code, and I'm using the supercool [Jint](http://kenegozi.com/blog/2010/09/09/javascript-and--dot-net-ndash-meet-jint.aspx) libraryfor running it within .NET. I am also planning on making it available for Java at some point using [Mozilla Rhino](http://www.mozilla.org/rhino/)

