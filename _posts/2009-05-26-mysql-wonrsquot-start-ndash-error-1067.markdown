---
layout: post
title:  "MySql won&rsquo;t start &ndash; Error 1067"
comments: true
tags: [tools]
---


We're using MySql at work, and for that I installed 5.1 on my workstation (Windows 7 RC x64), with all the defaults (next, next, next, …, finish)

&#160;

Being environmentally friendly (or mentally instable – depends on who you're asking), I tend to shut down my workstation when I go home at the end of every day.

&#160;

So – today, when first navigating to a url served by my local working copy, I was greeted with a SystemException telling me that MySql is not responding.

&#160;

My first reaction was WTF

My following reaction was

Win-R   cmd    net start mysql

Surprisingly enough, instead of the laconic OK, I was greeted with:

The MySQL service could not be started. 

A system error has occurred. 

System error 1067 has occurred.

My next reaction was back to WTF.

&#160;

Goggling around I found no meaningful answer, so I went for uninstall/reinstall. 

So, Win+MySql (to look for an uninstaller in the Start Menu, lazy me) I stumbled upon “MySQL Server Instance Config Wizard”

This dude apparently can re-do the Instance Configuration thing, and running it (again with the next, …, next, finish ritual) appear to have fixed the problem.

&#160;

After all I do have something nice to say about MySql.&#160; when weird shit happen, there is a tool to make instance re-install rather painless.

All the rest about it is crap.

