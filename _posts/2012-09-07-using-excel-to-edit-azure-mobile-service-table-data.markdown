---
layout: post
title:  "Using Excel to edit Azure Mobile Service table data"
comments: true
tags: [azure,mobileservices]
---


When building apps for Mobile Services, you often need to manipulate the data stored in your table from an admin point of view.

The management portal of Azure does let you browse your data, but not edit it.

A few days back, [Amit showed on his blog](http://blog.amitapple.com/post/30386974705/azure-mobile-services-admin-table-viewer-sample) a way to create a simple data manager as a Windows 8 Application, using the official SDK.

I however like the UI of Excel for data editing, so I wanted to create a simple editor that taps to Excel mechanisms, and uses the unofficial SDK to communicate with the mobile service.

The results can be seen [in the following recording](http://www.youtube.com/watch?v=c5F2G9-vIYE) (you'd want to watch it in HD):



How?

First, I created an Excel AddIn project in VS2012. Then I grabbed the [latest SDK file from github](https://github.com/kenegozi/azure-mobile-csharp-sdk/blob/master/src/MobileServiceClient.cs), and added it to the project. Lastly, I changed the AddIn code to look [like that gist](https://gist.github.com/3664011) (you'd need to set your app url and key), and ran the project.



Current limitations:
- I am a very poor VSTO developer. There are probably million ways to do the Excel bits better. I'd appreciate constructive comments on the gist.  
- The current implementation does not support row inserts and deletes. UPDATE [9/11/2012] Insert and Delete works now! 
- Dates will lose millisecond precision.  
- And it will not work with “Authenticated only” tables.I will be adding a support for the Admin Key that Amit showed on his blog to solve this




