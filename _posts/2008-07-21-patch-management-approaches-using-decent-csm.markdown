---
layout: post
title:  "Patch management approaches using decent CSM"
comments: true
tags: [tools,scm]
---


Following Ayende's post on [Patch management approaches using centralized SCM](http://ayende.com/Blog/archive/2008/07/21/Patch management approaches using centralized SCM), here are how I would have dealt with the 4 issues that he brings up, using a Decentralised SCM.

&#160;

I use git, so I'll use git terms here. I guess it's quite similar for other DSCM systems.

&#160;

Note that I haven't used patches on git development as until now all of my git work was on repositories I had write access to, However the principals are the same (i.e. - all of the tree is local to my machine, thus I can reach any point in the history locally).

&#160;

First I'll clone the hosted repository to my local machine.

- #1     I'd have created a separate local feature branch for each feature, so separating the patches is easy
- #2     again, I can do this in two separate local branches, so I do not need to &quot;revert and apply&quot; when I move between the two. I also get to have a complete SCM experience, not only a single patch/step per feature.      I can also have a third branch, combining the work of the two feature branches, for my own use
- #3     the second feature's branch would be based on the first one. should the first need some rework that is important to the second, it'd be easy to apply changes on the first, then rebase the second ontop of the updated first
- #4     just two commits on the same branch. 


So, using a DSCM, I can work locally with the benefits of a SCM, have as many branches/features as I want. the whole tree is stored locally, and its blazing fast to switch branches, so I can easily work on every aspect I want, and easily create a patch from every node in the history tree, to send to the project owners.

