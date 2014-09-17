---
layout: post
title:  "MonoRail vs. WebForms"
comments: true
tags: [asp-net-2-0,castle,activerecord,monorail]
---


Ayende [has posted about the matter](http://www.ayende.com/Blog/MonoRailVsASPNet.aspx), only he've used the title "MonoRail vs. ASP.NET" instead. I think that his title isn't accurate since MonoRail is actually a WebForms replacement that is built ontop of ASP.NET, exploiting all of the cool features found in ASP.NET and in the .NET framework alltogether. It's the Web development framework that Microsoft forgot. So it has the benefits of the Rails interpretaion for MVC, with the power of .NET.

Here is the comment I've posted to Ayende's post:

"My point of argue in favor of MR for people who are afraid of "non-microsoft" is, that actually MR is ASP.NET. It is just not WebForms. You get all the good stuff from ASP.NET: the .NET framework for start, compiled views (on Brail - kudos to you), the HttpModule stuff, seeamless integration with AR. This is what I say to the PMs, etc. To the developers themselves who are afraid, There's a more detailed approach. Developers (especially ones who didn't do web programming aside ASP.NET, and probably has a lot of VB experience but no PHP/JSP/ASP) like WebForms cuz they can get to the txtUsername.Text, txtPassword.Text, and txtAge.Text easily, not needing Request.Form["Password"] (hey - it's not typed !!!) . But then I reffer them to the fact that actually txtAge.Text isn't typed too. it's a string, and should be parsed, tried, validated etc. They should also manually create a User instance, and fill it's properties. Doing the same on MR with Dispatching and AR is there without any line of code. I show them an example aqnd then hold them as they almost fall off their chairs. Not'n like a good example. Maybe having a ViewEngine that's use c# or VB.NET instead of boo (not the WebForm ViewEngine which suck, but somthing similar to Brail) can make the move from WebForms to easier for developers, but frankly, as you've said, people who can't get it OJT with a few examples aren't the one's I'm likely to work with anyway."

