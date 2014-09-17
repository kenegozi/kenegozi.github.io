---
layout: post
title:  "What would make Razor really cool"
comments: true
tags: [asp-net-2-0,tools]
---


The new thing in MS web development is [Razor](http://weblogs.asp.net/scottgu/archive/2010/07/02/introducing-razor.aspx), which at its base a templating engine.

&#160;

It would be really cool if:
- It would expose programmatic API (with c#5 going to Compiler-As-Service it would be a real shame if Razor would not behave the same way)
- It would not enforce an over bloated base-class (like, erm, System.Web.UI.Page). I wouldn't go as far as an Interface (since looks like they do not believe in Design By Contract over there), but a super-simple abstract base class with minimal pre-set behaviour would be nice. It is doable with still supporting Webforms/MVC integration using wrappers (like the HttpContextBase approach)

These things would allow using it as a true templating engine, which then can be embedded as a view engine for other web frameworks (like Monorail and Fubu, and more), use it for off-line email templates processing, maybe even for emitting customised setting files for automated deployment scenarios.

&#160;

I need to try and explore into there and sniff around.

