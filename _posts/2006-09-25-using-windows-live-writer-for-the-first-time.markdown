---
layout: post
title:  "Using Windows Live Writer for the first time"
comments: true
tags: [miscellanea]
---




on dasBlog 1.8 it didn't work for me for some reason, so now I'm tetsing it on 1.9.

The features are cool. It's nice to work offline on my desktop, but have all of the css as I'm writing directly to the blog's page. 

I've downloaded a few Code Highlight Formatters plugins. The one that seams less buggy is [Highlight4Writer](http://www.codeplex.com/Wiki/View.aspx?ProjectName=Highlight4Writer). It's Nice, and I could easily edit the template it's generating, to add a div with class=Code so it'l get the nice CSS I've applied for code blocks.

This is a test:

```
class Test { void JustASimple(string test) { to = test; ThePlugin(); } }
```

EDITED: It's buggy, too. all of the line brakes and spaces was removed when I moved to Html View and back. I'll have to find another one.

Now I'm testing CodeFormat from [ThinkStar.de](http://deedee.brainstream.net/CodeFormatPluginFuerWindowsLiveWriter.aspx)



```
   1:  class ThisIs
```

```
   2:  {
```

```
   3:  void JustAnother(string test)
```

```
   4:      {
```

```
   5:      }
```

```
   6:  }
```

A lot better. I've added some stuff to my theme's style.css file, like removing padding and marging from &lt;pre&gt; tags, and applying all of Code class attributes to the generated CodeFormatContainer class. I like the line numbering option, too.

Trying some aspx stuff:

```
   1:  &lt;asp:TextBox runat="Server"&gt;&lt;/asp:TextBox&gt;
```

less cool, but still works.

I'd like to teach it Boo and brail. Hope to have a little time for that.



Now I'll add an image and test the upload ability:

![Ken Egozi - That's me !](http://kenegozi.com/blog/uploaded/windowslivewriter/usingwindowslivewriterforthefirsttime_bfbd/kenegozi_small_thumb3.jpg)

Like a charm, and note the nice drop shadow.

tags: [Windows Live Writer](http://technorati.com/tag/Windows+Live+Writer), [WLW](http://technorati.com/tag/WLW)

