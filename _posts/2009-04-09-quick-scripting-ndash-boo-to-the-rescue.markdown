---
layout: post
title:  "Quick scripting &ndash; Boo to the rescue"
comments: true
tags: [open-source-software]
---


Today I needed to run a SQL script that sat in a 1.4Gb text file.

It includes the schema creation, plus a massive amount of INSERTs, all for a project I need to complete in order to get my Bachelour's degree from uni. The amount of data is due to the fact the it's an Advanced DB seminar, and I'm demo-ing DB related stuff, so size matter.

&#160;

Anyway, the script was lacking the “use DBNAME” at it's top. and since the file was too large to open up in the Management Studio, I wanted to OSQL it. I just needed a way to add the “use” statement at it's top.

&#160;

Quick and dirty boo script to the rescue (add.boo):

```
import System.IO
import System.Text

r = StreamReader('openu.sql')
w = StreamWriter('new_unicode.sql', false, Encoding.Unicode)
w.WriteLine('use openuni')
l = r.ReadLine()
while (l != null):
	w.WriteLine(l)
	l = r.ReadLine()
w.Flush()
w.Dispose()
```

&#160;

Running it with

```
booi add.boo
```

&#160;

And executing with

```
OSQL -E -i new_unicode.sql
```

&#160;

Who needs powershell ...? 

