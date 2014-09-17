---
layout: post
title:  "Web development != Windows development"
comments: true
tags: [client-side,html]
---


Ok, I hope I'm not falling for a fruitless debate here, but after reading [Scott's post about the impending death of HTML](http://softwaredevscott.spaces.live.com/blog/cns!1A9E939F7373F3B7!429.entry), and [giving my notes on that](http://kenegozi.com/Blog/2007/08/27/html-assembly-and-in-between.aspx), I've read [his another post](http://softwaredevscott.spaces.live.com/blog/cns!1A9E939F7373F3B7!430.entry), now about "why you should only do windows development".

First of all - his blog is very good and interesting, and it's on my favorite feed reader now. Try and guess which one I use based on what you read here.

Regarding Scott's post, I'd like to mention two noticeable quotes:

It's amazing how much time and energy are put forth by people (yours truly included) trying to make the browser user experience more like what you could achieve with Visual Basic circa 1994, let alone Windows Forms or Swing circa 2007

and

Which begs the question of why folks are producing so many new browser-oriented applications in the first place. But that's another post for another day.

Well, I concur. You should not try to imitate VB apps in DHTML.I can't see a possible for a decent Visual Studio replacement purely in the browser. 

However, there are WEB applications, that a light-speed, no-install-needed, runs-on-every-machine-exactly-the-same website (gmail?) would beat any desktop app (Outlook? Thunderbird?) easily enough.

Let's think of another true WEB application. Blogging.Let's say you were using a blog-engine with no HTML front. you'd assume your readers are running SilverLight/Flash/whatever, or have ClickOnce enabled with the appropriate .NET framework installed, or rather enough user-rights to make it work, or mac? or Java? 

So, okay. Let's say you'd go with Flash - EVERYONE RUNS FLASH, right? well, almost everyone. But, come-on, tell all those c#/Java/Ruby guys that the need to switch to ActionScript? (or flex or any other flavour)? good luck with that.

Silverlight? promising, however in early Alpha.

ClickOnce - How many web sites using that do you know of? Even in Intranet environment you get IT people who are not willing to allow it.

Java? well it is on almost any machine today. Silver Bullet? Well, it doesn't take a Ruby developer to avoid Java. you can't get more static-typed than that, plus most java IDEs (but eclipse) suck big-time. I'd really rather use a text editor (even Edit.exe) over the OC4J bundle for example.

But, let's assume that VisualStudio for J2ME is out,(with R# 4), and everyone WANTS to write applets.

So you now have a "blog applet" and allmost some of your readers can actually read your blog. 

Wait a minute, you want to change the font facefont color layout of the blog. How do you do that in Java? and how would you have done it if your blog's layout was dependant on a simple CSS file (the ultimate DSL imho)?

My point is - Web development is web development. It's as widespread as it gets. everyone can easily embed a html rendering engine into an application to make plugin support easy (all those vista/google/yahoo kawagadgets? html within the media players? custom buttons in WindowsLiveWriter), so the HTML/CSS/Javascript stack is: a. Everywhere and b. Easy to customize. Sounds like Web to me.

Think that every10 year old geek who have wanted to customize his cool myspacefacebook whatever page should have learned swing/WinForms/Programming to do that?

In short:Writing desktop apps using DHTML is stupidWriting Web apps using java/winforms/etc. is stupid.

No silver bullet, they both have their ups and downs.

Photoshop? Win

Blog/Forum? Web

Any other? Contextual

Oh, and it's Google Reader, if you've had any doubt.

