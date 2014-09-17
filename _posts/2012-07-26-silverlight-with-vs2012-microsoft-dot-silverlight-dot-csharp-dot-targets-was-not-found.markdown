---
layout: post
title:  "Silverlight with VS2012 - Microsoft.Silverlight.CSharp.targets was not found"
comments: true
tags: [visual-studio]
---


I tried opening a solution with silverlight project in it, and the silverlight project was not loading, complaining that the said targets file is missing. Now this is a machine without VS2010, only VS2012. The usual fix for this is “install the Silverlight tools for VS2010” alas since vs2010 is not present, it tried to install Visual Web Developer 2010 first. 

Instead, I downloaded and installed the “Silverlight 5 SDK”, (from [here](http://www.silverlight.net/downloads), scroll down a bit)which apparently is not dependent on VS, hence installed correctly and problem is gone.

