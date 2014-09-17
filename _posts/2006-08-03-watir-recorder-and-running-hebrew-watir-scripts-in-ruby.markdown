---
layout: post
title:  "WATIR Recorder and running Hebrew watir scripts in Ruby"
comments: true
tags: [tools]
---


Just in case that Scott Hanselman's blog isn't accessible, I'll post here the steps to use watir and WatirRecorder.

1. Install Ruby using the [Ruby One-Click Installer](http://rubyforge.org/frs/download.php/11926/ruby184-20.exe), or search [http://www.ruby-lang.org/en/](http://www.ruby-lang.org/en/)for a newer version to download.


2. Install watir:A.By opening cmd.exe and typing "gem install watir" (will install the latest available gem version, which is a kind of a "live update" and "live download" feature of ruby, OrB. By installing [watir-1.4.1.exe (792.19 KB)](http://kenegozi.com/blog/uploaded/watir-1.4.1.exe), OrC. By downloading from here


3. Install [WatirRecorder++](http://kenegozi.com/blog/uploaded/WatirRecorder_Setup_Lite.msi)

Some problems I've faces during the use of Watir:

1. The WatirRecorder couldn't run my recorded tests. So I've saved the script to afile, changed it's extension to .rb and let Ruby run the test.

2. This led to another problem. For some reason, Ruby doesn't handle hebrew characters sowell when they're saved in UTF8 format, and that's the format WatirRecorder saves the scripts, So if you are recording hebrew characters toyour script, then after saving the script to a file and changing it's extension to .rb, open it in notepad and resave it in ANSI encoding, and Ruby will run the test flawlessly.

Thumbs up for the makers of Ruby, Watir and WatirRecorder++, as well as to Scott Hanselman who've pointed this tool out for us

