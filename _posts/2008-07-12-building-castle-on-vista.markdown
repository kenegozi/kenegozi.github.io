---
layout: post
title:  "Building Castle on Vista"
comments: true
tags: [castle]
---


So after moving to Vista last week, I've tried a full castle build with tests.

&#160;

Things I had to take care for it to run properly (from easy to not-as):
- Make sure Nant is in the path
- Make sure that NUnit 2.2.x is in the path     explanation: for some reason, the remoting tests fail when being run from NUnit 2.4.x&#160;&#160; As I'd rather not to gac any specific NUnit version, I have on my C:\Program Files two separate directories, one called &quot;NUnit 2.2.8&quot; and one called &quot;NUnit 2.4.7&quot;, and the shortcut I use for firing a Command Prompt for Castle is making sure that NUnit 2.2.8 is in the path.
- Setup the test databases for DB related integration tests (as explained in &quot;How To Build.txt&quot;)
- Make sure that you use an elevated command prompt - the shortcut I've mentioned on 2. is set as &quot;Run As Administrator&quot;
- To make the WcfIntegration facility tests run correctly, you need to run this thing once:     sc.exe config NetTcpPortSharing start= demand
- some config files are missing from the build folder (Castle\build). until we fix it in the nant script, you have to manually run     copy ..\Facilities\Wcf\Castle.Facilities.WcfIntegration.Tests\Configure*.xml ..\Build

&#160;

Now that I have a way to run the build and make sure all tests pass, I can start working on my next Castle assignment - bringing AspView into the core project, but that's a whole other post so keep your RSS reader open ...

