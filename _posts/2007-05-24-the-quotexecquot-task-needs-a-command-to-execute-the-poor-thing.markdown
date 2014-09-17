---
layout: post
title:  "The &quot;Exec&quot; task needs a command to execute, the poor thing"
comments: true
tags: [visual-studio,visual-studio-2005]
---


Here's a strange error message.

I was trying to build a project in VS2005, and got this instead of a successful build:



The "Exec" task needs a command to execute. 



After pooling out a few hairs, I remembers that I recently have edited the pre-build actions for this project.

Looking this up, I found that I left a spare newline at the end of the pre-build script. So VS2005 sent msbuild an order to run an empty command.



Now I wonder,had the VS2005 guys have ever heard of StringSplitOptions.RemoveEmptyEntries?

They could've easily ignore empty lines, or better yet, issue a warning for that kinda stuff.

