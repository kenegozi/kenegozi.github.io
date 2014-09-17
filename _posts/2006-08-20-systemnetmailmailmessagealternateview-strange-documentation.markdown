---
layout: post
title:  "System.Net.Mail.MailMessage.AlternateView - strange documentation"
comments: true
tags: [miscellanea,c-sharp]
---


Check this out.

I've wanted to send emails, and have messages with both plain text and html views. A quick look at MSDN have braught [this](http://msdn2.microsoft.com/en-us/library/system.net.mail.mailmessage.alternateviews.aspx) up, and it looked good. Waydago MSFT - good work.

However, a strange exception occured in runtime, and after a little check it was obvious that the constructor used in MSDN's doc is just NOT THERE.

[This](http://blogs.geekdojo.net/ryan/archive/2006/01/03/systemnetmail_doc_error.aspx) guy also had the same problem, and someone there pointer out the solution. There is a static method to create an instance of a AlternateView from a string that represents a message's body. It's called CreateAlternateViewFromStringand It's nice to have it.

Mistakes in docs are exceptable, however, the guy braught it up last January, and MSFT didn't fix the doc until now.

Strange it is.

