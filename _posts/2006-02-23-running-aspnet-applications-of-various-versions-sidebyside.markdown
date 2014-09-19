---
layout: post
title:  "Running ASP.NET applications of various versions side-by-side"
comments: true
tags: [asp-net-2-0]
---


Some annoying problem I've encountered lately.While developing on my XP machine, I have had some ASP.NET 1.1 applications and ASP.NET 2.0 applications running side-by-side, as virtual directories on the single website allowed by IIS5.1

When I've published an ASP.NET 2.0 application to a production server, running IIS6.0 (on Windows 2003 Server) with already installed ASP.NET 1.1 applications, I've found out that if the old applications are running, the new one returns "Server Application Unavailable", and vice versa.A quick search in the Event Viewer revealed that IIS isn't fond of running applications of different ,NET runtime version, in the same process. Quite reasonable that is, yet annoying.

That's when I remembered that I've always said to myself that I should look into the reason that IIS5.0 and IIS5.1 runs each ASP.NET application in a aspnet_wp.exe worker process, while IIS6.0 uses a single w3wp.exe worker process.

A little web search and I've found this: [http://technet2.microsoft.com/WindowsServer/en/Library/d0a61f24-942e-4379-adad-8232be03441c1033.mspx](http://technet2.microsoft.com/WindowsServer/en/Library/d0a61f24-942e-4379-adad-8232be03441c1033.mspx), and adjacent pages.

So this is a new feature of ASP.NET, that makes it possible to run a few applications in the same process. Every few applications (virtual directories) are assigned to an application pool, and each application pool runs in its own process.There are a few settings that can be done for each application pool. Those settings are overriding the defaults in the machine.config file.

Adding an application pool is done through inetmgr.msc, by just adding a new pool to the Application Pools section. Use the option to copy settings from the default application pool, so you'd have a decent place to start from:![](http://kenegozi.com/blog/uploaded/applicationpools.png)

Assigning a pool to an application is done through the main property page of the application's virtual directory:![](http://kenegozi.com/blog/uploaded/settingapplicationpools.png)

The solution to our problem is now obvious:When configuring a new IIS6.0 server, we will start with an application pool for each ASP.NET version we're using (1.0, 1.1, 2.0), and any virtual directory we setup in the server will be configured to be part of the corresponding application pool. Now the applications can coexist and run together.

Enough with server configuration stuff. Now go back to coding.

Ken.



