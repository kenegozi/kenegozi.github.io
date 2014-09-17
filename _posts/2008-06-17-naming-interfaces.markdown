---
layout: post
title:  "Naming Interfaces"
comments: true
tags: [architecture,c-sharp]
---


An innocent question [raised by Ayende](http://ayende.com/Blog/archive/2008/06/16/I-understand-that-naming-matters-so.aspx) has started an interesting debate on the comments.



In short (read it all there - don't be lazy)

Which interface name is better?

a. IRecognizeFilesThatNeedToBeIgnored

b. IIgnoreFilesSpecification

with a single method: ShouldBeIgnored(string file);



Some were in favour of a, some in favour of b. 

The interesting thing is that many has offered a third option:

c. IFileFilter



Let's group these things:
- Options a. and b. => Narrow and very specific interfaces. You can guess exactly what a class implementing them can do.
- Option c. => a general-purpose interface. You'd know that a class that implement this type of interface is doing stuff with files, but it's kinda vague. Can it filter a file out of a list of files? can it filter the content of a file? can it do other kinds of filtering on some kinds of files?

Personally I couldn't care less which one of the first type will be used. I slightly in favour of b., as I think funny names are good. The compiler cares nothing about names, but the human mind would remember the purpose well, and a newcomer would pick it up quickly.



The second group (IFileFilter) is not good. It might get filled with a lot of methods that do file filtering.and if it's not, I think it should reflect the intention of the implementing class.Since multiple interfaces per class are allowed, it's ok to have specialised ones. 

