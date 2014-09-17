---
layout: post
title:  "Duck Type in .NET"
comments: true
tags: [architecture,c-sharp,tools]
---


There is a [great article](http://www.codeproject.com/cs/library/nduck.asp) on CodeProject, by Guenter Prossliner.

A simple class in presented there, that makes Duck Typing possible for Generics enabledCLS languages (VB.NET 8 and C#2.0 for instance).

I'll present it here in short form:

let's say we have two classes:

```
   1:  class Foo1   2:  {   3:  publicstring Bar() { }   4:  }   5:  class Foo2   6:  {   7:  publicstring Bar() { }   8:  }
```

Now you have a method that can work with instances of eiether one, and invoke Bar on it:

```
   1:  void SimpleMethodOnFoo1(Foo1 foo)   2:  {   3:      foo.Bar();   4:  }   5:  void SimpleMethodOnFoo2(Foo2 foo)   6:  {   7:      foo.Bar();   8:  }
```

