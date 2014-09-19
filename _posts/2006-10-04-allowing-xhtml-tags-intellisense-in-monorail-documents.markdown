---
layout: post
title:  "Allowing XHTML tags intellisense in Monorail documents"
comments: true
tags: [visual-studio,castle,monorail]
---


PROBLEM:When editing Monorail views, you are losing the XHTML intellisense that normal webforms have in Visual Studio.

SOLUTION:Add a proper xmlns to the html tag.My layouts start with this:

```
   1:  &lt;?brail 
```

```
   2:      output '<'
```

```
   3:      output '?xml version="1.0" encoding="utf-8"?'
```

```
   4:      output '&gt;'
```

```
   5:  ?>
```

```
   6:  &lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
```

```
   7:  &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="he-il" lang="he" &gt;
```

This applies to brail, but can of course be used on any other view engine, with the needed adjustments.

Lines 1-5 is needed due to a bug(?) in some versions of brail. brail used to recognize a script by '&lt;? ?&gt;', '&lt;?brail ?&gt;' and '&lt;% %&gt;' signs. therefore, using a &lt;?xml ?&gt; declaration caused the boo compiler to say that he knows nothing about 'xml'. I think that Ayende has solved the problem now, by allowing only '&lt;?brail ?&gt;', but I think it's not yet on the main trunk, so I still use the listed method.

Line 6 is the DOCTYPE, I use XHTML 1.0 transitional.

Line 7 is the magic part. Visual Studio parses this line, reads the xmlns, and can hint you with intellisense forhtml tags and attributes. The xml:lang and lang attributes are of course changeable.

It works in layouts, or in views that are a full html document (with &lt;html&gt; tag) but not with VieComponents or views that uses layouts.

If someone has a way to do that, please share it.

