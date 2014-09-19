---
layout: post
title:  "dotTrace 3.1 64bit would not integrate with Visual Studio and Resharper"
comments: true
tags: [visual-studio,tools]
---


Installed dotTrace 3.1

Since I run windows 7 64bit on my laptop, I chose to install the 64bit version of dotTrace. After the the installation, the standalone profiler worked great. It was also showing up in the Visual Studio AddIns menu. However, the purple button (next to the Debug “Play” button”) was greyed out, and the one within the Resharper Unit Testing sessions window was also disabled.

&#160;

After re-installing, re-booting, and re-filling my cuppa' coffee, I suddenly remembered that Visual Studio is actually a 32bit application, and that I'd probably want to install the 32bit version of dotTrace if I want them both to play nicely.

&#160;

Did it.

&#160;

Problem solved.

&#160;

![image](http://kenegozi.com/blog/uploaded/windowslivewriter/dot.164bitwouldnotintegratewithvisualstu_11bec/ba809117-d5aa-4d54-a3cc-b18565e0cb6c.png)

&#160;

FYI

