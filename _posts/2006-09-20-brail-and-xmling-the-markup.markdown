---
layout: post
title:  "Brail and xml-ing the markup"
comments: true
tags: [castle,monorail]
---


I like XHTML more than I like HTML.

But IE doesn't think so.

He needs the markup to be *very* explicit about the web page being xhtml.

.xhtml isn't enough, and even not Doctype-ing.

No. he must have the optional &lt;?xml version="1.0" ?&gt;.

So I've added it to my Layout.boo file.

Boo? Boom. Boo marks macros (such as &lt;?brail ?&gt;) with &lt;? ?&gt; blocks, and Boo doesn't recognize a macro with the name xml.

My current solution is to write:
&lt;?brail output '<' output '?xml version="1.0" ?'output '&gt;' ?>
I guess that adding a dummy xml macro would make the boo templates look nicer, but it is an ugly solution, and since (ugly &amp; nice != nice), we need a better solution.

Maybe a change in Brail (on BrailPreProcessor.boo), to transform &lt;?xml ... ?&gt; stuff to it's "output" equiv, can be done. 

