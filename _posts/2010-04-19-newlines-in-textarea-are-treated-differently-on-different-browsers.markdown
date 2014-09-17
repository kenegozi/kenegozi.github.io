---
layout: post
title:  "Newlines in textarea are treated differently on different browsers"
comments: true
tags: [client-side,html,javascript]
---


And guess who is the craziest one.

&#160;
scenario
Client side validation is good right? so you have this field of User Generated Content, which is exposed via a textarea element on your page. For e.g. – comment on blog post.

Now you have a limit of N characters on the field, maybe enforced within a DB constraint or whatever.

&#160;
First attempt:
```
function validateMaxLength(elmId) {
	var element = document.getElementById(elmId);
	var elementContent = element.value;
	var elementContentLength = elementContent.length;
	
	return elementContentLength <= N;
}
```

or something like that.

&#160;

BUT

think again.

Assuming the element's content was something like

```
the element contains at least
one newline
```

&#160;

how would you count newlines? would you count two characters per newline (for \r\n)? or only one?

&#160;

When I faced that problem I checked how the browser is counting the newlines. I ran a quick test as saw that it counts newlines as a single character. Since the content was needed to be presented within a web element anyway, and newlines were to be changed to <br/> tags at render time anyway, I decided to have the server code make sure that incoming strings will use only \n for newlines, then validate the length, then store in the DB. 

Now the client side JS matched the server criteria. 

&#160;

Case closed.

&#160;

Or was it?

&#160;
QA kicks in
After a little while I got a bug opened by the QA team about inconsistency between client and server validation regarding lengths of string. 

Checked it, and was about to close the bug with a “works for me” message, but then it hit me. 

&#160;
You have to be so special
On IE, newlines are \r\n, so it reports too many characters, and the validation might fails wrongfully. Since I mostly use Chrome for day-to-day, and since I did not suspect *that* to be a cross-browser issue, I never tested it on IE during development.

&#160;
Solution
Good old string.replace

```
elementContent = elementContent.replace('\r\n','\n');
```

&#160;

&#160;

&#160;

Ken, 

the cross-browserer
