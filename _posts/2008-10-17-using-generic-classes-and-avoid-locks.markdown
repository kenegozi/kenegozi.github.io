---
layout: post
title:  "Using generic classes and avoid locks"
comments: true
tags: [c-sharp,d9]
---


In D9.Commons, there's a class responsible for mapping from enum values to their respective description, and vice versa - [DescribedEnumHandler.cs](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Internal/DescribedEnumHandler.cs)



The initial API I had in mind was

```

var enumValue = Enums.From&lt;MyEnum&gt;("The description");

var enumDescription = Enums.ToDescription(MyEnum.Something);

```



The Enums class would hold an IDictionary to map from the given Enum type, to it's [DescribedEnumHandler](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Internal/DescribedEnumHandler.cs)

Then came the question: when should I initialise that map, and how should I allow access to it?


Solution 1:
Synchronise access to the map.

Cons: every access to the Enums methods will require synchronisation code.


Solution 2:
Allow only one point of initialisation, through a static Initialise(...) method, accepting enum types, or assemblies with enums. This method will be called when the application loads, and after all of the enums are initialised, all the following usages will be lock free.

Cons:

a. It's ugly.

b. You end up creating way too many handlers, even if you won't use most or even any of them.

c. It really is ugly. You don't believe me? look [here](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Enums.cs?r=3).


Solution 3:
Instead of using Generic methods (From&lt;T&gt; and ToDescription&lt;T&gt;), I changed the Enums class to a generic Enum&lt;T&gt; class.

within the class, there's a **single** static member, [DescribedEnumHandler](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Internal/DescribedEnumHandler.cs) of T.

Every call to Enum&lt;T&gt; for a new T will instantiate the needed handler, Just In Time. 

That's because with generic types, every concrete type is a new type, so List&lt;int&gt; and List&lt;long&gt; are two separate types, without any inheritance relationship between them, so their static members are not shared.



That's the class I ended up with: [Enums.cs](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Enum.cs?r=25)

