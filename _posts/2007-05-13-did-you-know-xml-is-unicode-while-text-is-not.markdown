---
layout: post
title:  "Did you know? XML is Unicode, while Text is not"
comments: true
tags: []
---


One of the developers on my team (Ofir, not yet blogging) was requested to create a simple desktop widget that will work as a notification service for some critical events on our corporate DB.

After some research we have decided to use Yahoo Widgets (formerly Konfabulator) for the client. 

He did the client side code very quick, and we've had a working widget in no time. The client sent requests to a simple webservice, that answered with a comma-delimited string with the data to be presented to the users. The text was being grabbed from request.responseText and then parsed and shown.

However, it turned that the response, being in Hebrew, was displayed in Gibberish. 

Now, the Yahoo Widgets framework definitely supports UTF-8, and the static text in Hebrew was displayed well. 

So we tried to manipulate the server response, adding and removing headers and playing with the encoding options.

Only after a lot of googeling, Ofir found out that it's a known limitation in the way XMLHttpRequest is treating the response in Yahoo Widgets. The responseText property is failing in UTF-8 if the response is just a normal text.

However, if the respone is well formatted xml (with the <?xml version='1.0' encoding='utf-8' ?> thing), it works as expected.

So now the server responses "<?xml ve... ?><xml>comma-demilitarized-text</xml>" and the client is reading the responseText, trimming the <?xml ?> and <xml> and </xml> and continues with the parsing and displaying the response.

Bizarre, don't you think?

