---
layout: post
title:  "TeamCity 5.1 + git + fix here + fix there"
comments: true
tags: [tools,testing,scm]
---


Finally.

![green](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/TeamCity5.1Git_EC2C/d1d672b3-4786-4d4c-a491-5160e2a6cf41.png)

&#160;

I have a tiny project that need updating – the idcc.co.il website (*).

&#160;
Source control
I setup a new git repository on my home machine (using smart-http from git-dot-aspx, a different story for a different post) and now I got to setup a build server.

&#160;
Team city
Downloaded TeamCity 5.1.4 (the free, Professional version). Installation was mostly painless, except that the build-agent properties setter got stuck and I had to manually edit the build-agent conf file. No biggie – just RTFM: [http://confluence.jetbrains.net/display/TCD5/Setting+up+and+Running+Additional+Build+Agents#SettingupandRunningAdditionalBuildAgents-InstallingviaZIPFile](http://confluence.jetbrains.net/display/TCD5/Setting+up+and+Running+Additional+Build+Agents#SettingupandRunningAdditionalBuildAgents-InstallingviaZIPFile).

&#160;
git integration
Git is supported out of the box. I did have a minor glitch – the git-dot-aspx thing is *very* immature, and it simply did not work. Luckily the repository is located on the same machine as the build server and build agent so I simply directed the VCS root to the location on the filesystem.

&#160;
building
I had a few glitches with MSBuild complaining about missing project types (the webapplication targets file) – that's the first three failures you see in the snapshot. I then copied the targets from somewhere else and I got the bulid running

&#160;
Fixing the tests
only to find that I have a broken test. Since when I created the initial website, I never set a build server, thus some changes I later introduced caused a minor regression. Now that I have a proper build server it (hopefully) won't happen again.

&#160;

&#160;

&#160;

&#160;

* yes, [Ohad](http://blogs.microsoft.co.il/blogs/ohad/) and myself are setting up a second idcc conference. It is still in stealth mode, but keep you tabs of this. An announcement is planned for early October.

