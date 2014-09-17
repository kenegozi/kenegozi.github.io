---
layout: post
title:  "STT - Extra comma in collection initialisers and enums"
comments: true
tags: [c-sharp]
---


You all know what STL is (ok, not all of you, some have skipped C++ altogether and some have only created a few Carnivore/Herbivore classes for Uni).



But you don't know what STT is.

Well I'll tell you, just sit nicely and listen.



STT is "Silly Tip &amp; Trick".



This is one:


The Extra comma STT
You probably already know of the collection initialiser syntax introduced into C# 3.0:

![stt_comma 1](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/STTExtracommaincollectioninitialisersand_9A73/1a6d2ba2-b96c-44ed-92fb-2e005b609e85.png)

At times, you'd have a long list of items in the initialiser, and you find yourself doing copy&amp;pastes to add lines, or removing lines from the list. There's this little extra step you need to do, that is making sure that you have a comma between any two adjacent lines.

That makes the copy&amp;paste a bit annoying.

![stt_comma 2](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/STTExtracommaincollectioninitialisersand_9A73/595074d9-dc9c-4331-beba-cf1968fba699.png)

However, it appear that csc.exe would accept an extra trailing comma at the end of the list, so this code is 100% valid:

![stt_comma 3](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/STTExtracommaincollectioninitialisersand_9A73/5a800ad3-bbc0-4d9c-8f43-b46784fb8032.png)

Now it's easier to text-manipulate the list.





It also works for Enum declarations:

![stt_comma 4](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/STTExtracommaincollectioninitialisersand_9A73/650d3009-08f2-4014-a360-2901883245d6.png)



So, even though having three cats in the house is busy enough, as far as c# is concerned I can easily add more of these. Not sure what the existing cats would think of that.



Just to make sure it actually works:

![stt_comma 5](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/STTExtracommaincollectioninitialisersand_9A73/196e049d-f643-4587-b765-a85d4b21549a.png)







curiosities:
- Envy code R rock.  
- I use red background for my elevated CMD window  
- For the Visual Studio only dudes: csc.exe is the c# compiler bundled as part of the .NET runtime install.  
- yes, I sometimes use edit.exe  
- Envy code R rock.





