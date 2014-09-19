---
layout: post
title:  "OR-ing type constraints on generic declerations in C#"
comments: true
tags: [c-sharp]
---


Consider the next scenario:

You want to have a generic class, to handle different types of primitive data, but also strings.

So you'd like to have something like this:

```
publicclass Manager&lt;T&gt;where T: struct OR string{...}
```

or maybe you'd like to handle objects and strings:

```
where T: (ISomeInterface, new()) OR struct
```

or even specify some specific available types:

```
where T: long OR int
```

or two possible base classes:

```
where T: MyGreatUserControlBase OR MyGreatWebControlBase 
```

et cetera.

I'd like to hear comments about that (and suggestions to the OR sign - |, ||, ; or whatever). If the feedback will be positive, I might suggests it to MS guys as a ladybug or such, and we might see it as part of C# 3.0, or maybe 4.0?

