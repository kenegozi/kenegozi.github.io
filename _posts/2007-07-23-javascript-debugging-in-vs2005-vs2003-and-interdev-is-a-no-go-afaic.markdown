---
layout: post
title:  "Javascript Debugging in VS2005, VS2003 and InterDev is a no go AFAIC"
comments: true
tags: [visual-studio,debugging,client-side]
---


Regarding [my last post on the matter](http://kenegozi.com/blog/2007/07/20/javascript-debugging-made-easy-even-in-internet-explorer.aspx), [Justin](http://www.justinangel.net/) has commented with:

Javascript debugging has been around since VS2003.It's not the most obvious or straight forward as in VS2008, but it's pretty easy.The "Script explorer" window in VS2005 lets you see all the files downloaded for a certain browser process Visual Studio is currently attached to. From those files you can set a break point. So yes, it wasn't easy, but it isn't ground breaking either.

[Josh](http://joshrobb.com/blog/) took it one step further mentioning Visual InterDev.

I consider myself a rather sophisticated user, especially when it comes to IDE of any kind.

However, I did not use Javascript Debugging in VS2005 and VS2003, for the simple reason that it was not easy enough, and did not give me enough knowledge of the runtime vars etc. while using it.

When I started .NET-ing, I've had no VisualStudio license, and no idea about SharpDevelop. So I used notepad + csc.exe + WinDbg.exe . It's workable, but it sucks. Just like JS debugging in VS.

Since javascript runs in the client, on the generated markup files, and not on the server's templates (aspx, whatever), it's not as useful as FireBug's ability to set a breakpoint on a proper client html file. 

Now, quoting from ScottGu's post:

f you add/remove/update the breakpoint locations in the running HTML document, VS 2008 is also now smart enough to perform the reverse mapping and update the breakpoint in the original .aspx or .master source file on the server. This makes it much easier to get into a nice edit/debug/edit/debug flow as you are iterating on your applications

As I said - my main reason to move to VS2008 is it's multi-target support, and js intellisense. Sure, I can get js intellisense with a lot of cool non-MS tools, but I want to have a single IDE window per solution.

The easier js debugging IS ground breaking for me, as it seams that I'll be able to use it for debugging js in IE, a thing I'm not currently doing with VS since I don't like it so much.

