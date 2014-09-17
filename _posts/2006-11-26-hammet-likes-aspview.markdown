---
layout: post
title:  "Hammet likes AspView"
comments: true
tags: [castle,monorail,aspview]
---


Just [read it](http://hammett.castleproject.org/?p=88).

I started commenting to that post, but I figured that the people who've downloaded AspView up to now (I have about 30 or so downloads last week) will want to read it, so I'm posting it here.

So, as Hammet said, the extension is determined on the web.config. The .aspx is used for the view source files so VSNET will color and intellisense them. however, the actions are mapped to an extension that is mapped in the web.config.Still, AspView have some .aspx hard-coded in it, simply cuz I needed to get something working, and working fast. This is why I've left non-crucial features out for the moment, such as:1. Dynamic compilation (It is non crucial. IMHO real applications should be pre-compiled, while the dynamic thingie is for design time only)2. Nicer code (more maintainable, less typos such as "extention", refactoring for testability).3. View Components (subviews are doing the trick for me for now, but in order to mature there must be implementation for it) 4. using the .config. 5. A lot more

btw, helpers ARE supported, You just need to add the declaration in the place, like 

<% Post[] posts;AjaxHelper AjaxHelper;AjaxHelper AjaxHelper;%>

In the trunk there is some improvements, such as refactored AspViewCompiler, so it uses a PreProcessor that has subtypes. Currently it has a working CSharpPreProcessor, and a non-working VbPreProcessor. I intend to try adding a BrailPreProcessor ... I hope to be able to mix view languages in the same site. each language group will be compiled to a module, and linked to the CompiledViews.dll assembly. 

Since I haven't set any public repository yet, and since I do not have much time for uploading bits manually, you cannot see the work in progress, and it's my bad. I'll upload the latest stuff soon, and I'm working on setting up a repo somewhere. btw - do you have recommendation? (CodePlex? Sf? ) 

