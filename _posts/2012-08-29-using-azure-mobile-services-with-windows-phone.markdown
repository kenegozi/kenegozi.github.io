---
layout: post
title:  "Using Azure Mobile Services with Windows Phone"
comments: true
tags: [azure,mobileservices]
---

Windows 8 app building is great
With the new awesomeness that is Azure Mobile Services, building a cloud-connected application became much easier.

Now you just probably say “I wish it would have worked with other client platforms as well as Windows 8”

Guess what?
HTTP 
The service is actually talking to the SDK via HTTP, and the Windows 8 SDK that is published along is a (very rich, awesomely done) wrapper around that HTTP API. Given that, I jumped ahead and implemented a (very poor, awfully done) SDKs for Windows Phone*. 
Disclaimer #1
What you see here in this post and other related ones is 99.999% guaranteed to fail for you. It is a hack job that I put together in a few late-night hours, and it is *not* endorsed by the Mobile Services team. It is likely that if and when we do come up with an official WP SDK, it would be looking different. Very different. Even the HTTP api that I'm using here is likely to change by the time the service gets out of Preview mode.
codez
You can peak at some of the usages for the API in the following gist:

In follow up posts, I will cover the API more, and I will also be adding xml comments to the SDK to make it easier to use.
How to get it?
Head over to [https://github.com/kenegozi/azure-mobile-csharp-sdk](https://github.com/kenegozi/azure-mobile-csharp-sdk).you could either clone the repo, or just navigate to [/src/MobileServiceClient.cs](https://github.com/kenegozi/azure-mobile-csharp-sdk/blob/master/src/MobileServiceClient.cs) , click on the 'Raw' button and save it in your project.You'd need to have the latest [Newtonsoft's Json.NET](http://james.newtonking.com/projects/json-net.aspx) referenced as well (if you don't have it already).A NuGet based delivery is in the works.



* I am also working on a similar SDK for Android. I'll get to work on a iOS one as well once I get around to install Mountain Lion on my MBP
Disclaimer #2
Although I do work on the Mobile Services feature in Azure, the opinions, code, and sub-par grammar I voice on this blog is completely my own, and does not reflect my employer's opinions, code, or grammar. This is *not* where you will get any official Azure announcements, you'd need to check out other places (I'd suggest [http://WindowsAzure.com](http://WindowsAzure.com) and [Scott Guthrie's blog](http://weblogs.asp.net/scottgu/) as good starting points)

