---
layout: post
title:  "Where's that &quot;feed&quot; link on live spaces?"
comments: true
tags: [client-side,html]
---


Today I wanted to subscribe to the feed of Scott McMaster's blog (an excellent one, and a must read for WebForms developers).

Crappily enough, I found no visible feed/rss/whatever link on the page.

Luckily enough I'm using FF2 and I get the tiny feed icon on the address bar, soI could click it. Not lucky to all the poor fellows that still use IE6 and the likes (hey - get a valid copy of windows, or sack the IT guy who is afraid of upgrade, whatever's keeping you in the evil grip of the quircky browser)

So what should you do if you are that poor fellow?

view the page's source (that's "right-click + View Source), and look for a link tag within the <head> that sais

```
<link rel="alternate" type="application/rss+xml" title="THE SPACE'S TITLE" href="THE FEED LINK" />
```

now, if you've looked for the exact string written here you're hopeless, and should read a html book / w3schools sitebefore you start 'hacking' html. 

