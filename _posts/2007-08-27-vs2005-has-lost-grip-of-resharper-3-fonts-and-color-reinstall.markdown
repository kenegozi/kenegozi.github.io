---
layout: post
title:  "VS2005 has lost grip of Resharper 3 Fonts and Color? re-install"
comments: true
tags: [visual-studio,tools]
---


I'm using VS2005 (with SP1, like duhh) and have had R# 3.0.1

Now, I'm not a fan of the default font and color scheme, as I like better the slicker mono-fonts, like [Consolas](http://www.microsoft.com/downloads/details.aspx?familyid=22e69ae4-7e40-4807-8a86-b3d36fab68d3&amp;displaylang=en). I am also becoming a Black-Background type, not for the WouldSaveTheRainForests==true reason (in LCD the light is static no matter what color it shows) but for the implements IDLikeToKeepMyEyeSightForALongTime reason.

So, started with importing a color scheme from some internet-found-place, don't remember where, and then tried to change those Resharper coloring options (like, a variable name that is being used an odd amount of times, by internal classes, however not in an explicit-interface implemented method, that returns a struct), just to find out the the Fonts-And-Colors menu miss those lovely Resharper entries).

Okay, so what should I do? Export the settings, edit the xml, and re-import. Not much fun there.

Hmm. Googled it (I may use the term, as I actually use Google as a search engine), and found [a post on jetbrains support&nbsp;site](http://support.jetbrains.com/kb/entry!default.jspa?categoryID=28&amp;externalID=104&amp;fromSearchPage=true), with the same problem.no solution though.

However - this is how I solved it eventually:

1. Export the current settings toa file

2. Reset all settings

3. Re-install R# (hey - now it's 3.0.2 !!)

4. Import back my settings.

