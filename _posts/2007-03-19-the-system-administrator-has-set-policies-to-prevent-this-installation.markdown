---
layout: post
title:  "The system administrator has set policies to prevent this installation"
comments: true
tags: [miscellanea,tools]
---


Another dumb error message.

While installing [ActiveWriter](http://altinoren.com/activewriter/), it asked me to install DslToolsRedist. Trying to do so raised the said error message. I was on my way to shot the admin, but then googled a bit, and found out on [http://www.appdeploy.com/messageboards/tm.asp?m=8872&amp;mpage=1](http://www.appdeploy.com/messageboards/tm.asp?m=8872&amp;mpage=1)that it is caused by prior installations of he same product that was not fully removed from the registry while uninstalled. Searching "DSL" in HKEY_CLASSES_ROOT\Installer\Products\ showed me that a previous CTP left some dirt in my registry. Removed that key, reinstalled DslToolsand the ActiveWriter magic could finally started.

