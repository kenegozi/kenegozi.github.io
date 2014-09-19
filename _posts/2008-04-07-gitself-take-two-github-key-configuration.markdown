---
layout: post
title:  "git-self take two: git-hub key configuration"
comments: true
tags: [scm]
---


After [failing to setup git access to my newly created repository on git-hub](http://kenegozi.com/Blog/2008/04/01/gitself-take-one.aspx), I managed to nail the problem, thanks to Lee Henson's good advice (and by re-reading the hint text)

After generating the public key (with puttygen) I copied to git-hub only the key itself (the HEX part), while I was also supposed to copy the text surrounding it, as can be seen in the image below:



![public rsa key](http://kenegozi.com/blog/uploaded/windowslivewriter/gitselftaketwogithubkeyconfiguration_10a4f/69e80d06-4f9d-478d-a970-f7c88acd53ae.png)




Copy + Paste => now it works
