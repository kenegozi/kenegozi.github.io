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

No. he must have the optional <?xml version="1.0" ?>.

So I've added it to my Layout.boo file.

Boo? Boom. Boo marks macros (such as <?brail ?>) with <? ?> blocks, and Boo doesn't recognize a macro with the name xml.

My current solution is to write:
<?brail output '<' output '?xml version="1.0" ?'output '>' ?>
I guess that adding a dummy xml macro would make the boo templates look nicer, but it is an ugly solution, and since (ugly &amp; nice != nice), we need a better solution.

Maybe a change in Brail (on BrailPreProcessor.boo), to transform <?xml ... ?> stuff to it's "output" equiv, can be done. 

