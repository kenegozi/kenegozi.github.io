---
layout: post
title:  "OSS Licensing - terms and concepts"
comments: true
tags: [licensing,open-source-software]
---


This is the first post on open source software licensing series. you can find [the primer here](http://kenegozi.com/Blog/2008/10/12/on-open-source-software-licensing.aspx).



I'll start with covering the concepts that I'll use in the following posts:


OSI (Open_Source_Initiative)
A bunch of dudes who deal with the approval of open source licenses, according to their ...[http://en.wikipedia.org/wiki/Open_Source_Initiative](http://en.wikipedia.org/wiki/Open_Source_Initiative)

The use of OSI Approved licenses is advocated, in order to simplify the whole OSS licensing things.


OSD (Open Source Definition) 
Look at the linked wiki page. In short, any license that conforms to the principals in this definition is considered an open source license[http://en.wikipedia.org/wiki/Open_Source_Definition](http://en.wikipedia.org/wiki/Open_Source_Definition)


Copyleft
A license that requires any code that uses it's covered software, to also apply the same (or similar) license. Also known as "Viral licensing".

[http://en.wikipedia.org/wiki/Copyleft](http://en.wikipedia.org/wiki/Copyleft)There are different flavours of Copyleft:


Strong Copyleft
Every thing that's using the software, either in binary or source form, becomes infected. Say you write application A, and reference dll B which is licenses with a Strong Copyleft license, then your application A must retain the same license as B.The only way to avoid being infected is to use the library without linking, such as by calling it through a command line call and parsing the output, or calling the library as an external service through web etc.Example for a Strong Copyleft license: GPL
Weak Copyleft
Only derivative works must retain the same license. Normally you should be able to reference a binary of a Week Copyleft licensed library, and use your license of choice (as "Code that uses the library")Examples for Weak Copyleft licenses: LGPL, [MPL (Mozilla Public License)](http://en.wikipedia.org/wiki/Mozilla_Public_License), [Ms-PL (Microsoft Public License)](http://en.wikipedia.org/wiki/Microsoft_Public_License#Microsoft_Public_License_.28Ms-PL.29)


Non-Copyleft
licenses that are not viral, thus are not infecting a client code using them.Examples: [BSD (Berkeley Software Distribution)](http://en.wikipedia.org/wiki/BSD_License), [MIT](http://en.wikipedia.org/wiki/MIT_License) and [ASL (Apache Software License)](http://en.wikipedia.org/wiki/Apache_Software_License)


GPL compatibility
Since GPL is a Strong Copyleft license, it requires that every code which uses a GPL-ed library must become GPL. The obvious thing here is that a software without any open-source distribution cannot be used in a GPL-ed library. There are even some open source licenses that cannot be used with GPL due to restrictions in their licenses. Any open source license that allow licensed software to be used with GPL (that is - to be re-licensed as GPL) is said to be "GPL Compatible"

An example for a non GPL compatible OSS license is IBM's [CPL](http://en.wikipedia.org/wiki/Common_Public_License)

