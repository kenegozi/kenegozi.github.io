---
layout: post
title:  "Cannot explicitly convert System.Boolean to bool VS2008 WTF"
comments: true
tags: [visual-studio]
---


I've just opened up a VS2005 solution in VS2008.

The conversion wizard popup up, with some bad UI (empty window with "Next", "Finish", "Cancel" buttons), but it worked ok, and at the end suggested that no errors occured.



Then I went to the project's properties and changed the target to .NET 3.5



VS told me that he had to reload the project, so I let him.



then I started to get weird errors in the IDE:
- Cannot explicitly convert System.Boolean to bool VS2008 
- Cannot apply operator ++ to identifier of type int



huh?



anyway, closing the solution and re-opening made this weird happening go away.



And I thought I'm about to go back to vs2005 ... 

