---
layout: post
title:  "int.Parse != parseInt"
comments: true
tags: [client-side,javascript]
---


Serving as a mental note, and as a service to dear readers who hadn't been bitten by this yet.

&#160;

javascript's parseInt method is not the same as .NET's int.Parse.

&#160;

there's this 'radix' argument which is meant to tell the parseInt method whether we want to treat the string we parse as binary, octal, decimal, hexadecimal or whatever.

Now the naive programmer (a.k.a. myself) would think that the default is always base 10, so parseInt(x) === parseInt(x, 10) for every x.

&#160;

Apparently parseInt tries to outsmart us, and it's actually guessing the radix if not set. so if x begins with 0x, it would guess hexadecimal, and if x begins with 0 it would guess it's octal.

so, parseInt('010') === parseInt('010', 8) === 8

ok, I can live with that maybe.

however it would also 'guess' that 09 is octal (even though 9 is not an octal digit !) thus parseInt('09') === 0

&#160;

I found this by chance, when a Date.parse method I have was parsing &quot;09/07/2008&quot; into a date-info object with day==0, causing it to fall back into today's date

&#160;

So, the lessons we've learned today:
- javascript is not c#
- always set the radix when using parseInt - parseInt(x, 10)
- don't let your cat spill a glass of soda on your desk as it would ruin your earphones, and unless the laptop was on an elevated stand it would have ruin it also     

