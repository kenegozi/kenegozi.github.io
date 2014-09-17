---
layout: post
title:  "Web testing using WATIR, and WatirRecorder++"
comments: true
tags: []
---


I've just read Scott Hanselman's [post about WatirRecorder](http://www.hanselman.com/blog/NewReleaseOfWatirMakerNowWatirRecorder.aspx).

Imagine you're developing a web application, and you want to see what happens if you enter some text in an inputbox, and then click a button.

It's quite simple. just browse to the page, enter the text, and click the buttun.

Now let's say that this page is a part ofa flow that demands that you're a) logged in, b) did some actions (started the flow), c) have made some selections, all that before you can try the input-text-button-click scenarion.

So on every change in the page's source you'd have to go through all that to try the change.

This is where WATIR comes in handy. This system is intended to automate form actions on IE (there is also a Firefox version in alpha stages). It's based on running Ruby scripts againts the browser, therefore giving a developer who knows a bit about common control blocks (if, for, etc.) to learn some basic Ruby syntax and create even complex integration tests that will run using WATIR.

The WatirRecorder is a nice addin that can actually record your typing and clicks in the browser, and generate the Ruby script, ready to be customized and enhanced.

While this is great, I'm still having some problems with the recorder. It records fine, but doesn't run the test when I hit playback. But since the script is valid Ruby, I am taking the output file, changing it's extention to rb and running the test from the console.

Saves a lot of time. I intend to start using this tool as part of our development lifecycle.

