---
layout: post
title:  "C# 2.0 Nulleable Types and GetType()"
comments: true
tags: [c-sharp]
---


I'm developing some Two-Way Databound ASP.NET Server Controls lately, and I use some reflection in order to do the actual binding and unbinding.

During my work, I found out something strange.

Let's consider the next code segment:

bool? myNullableBool =true;Type t = myNullableBool.GetType();

You'd think that t == typeof(bool?),

but actually, t == typeof(bool)!!!

So it seams that the Nullable<> types in c# 2.0 aren't "real", in the sense that instances of those types, actually are of the corresponded "regular" type, but has some kind of an overload on the = operator, that allow null as a input value.

It's not the behavior that I've expected, and so it caused my a lot of headaches during the development of my binding/unbinding methods.

I guess it is documented on MSDN, but I got to excited about the nullable types feature, that I've started using it without fully understanding it. 

So my lesson for today is: study well, and stay out of hell.



