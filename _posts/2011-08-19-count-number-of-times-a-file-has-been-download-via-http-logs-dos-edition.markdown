---
layout: post
title:  "Count number of times a file has been download via HTTP logs - DOS edition"
comments: true
tags: [tools]
---


Apparently you can also do this with DOS, but it is not nearly as easy as it is with [Unix shells](http://blog.benhall.me.uk/2011/08/count-number-of-times-file-has-been.html) or [Poweshell](http://kenegozi.com/blog/2011/08/18/count-number-of-times-a-file-has-been-download-via-http-logs-iis-and-powershell-edition).


DOS corner:
Good old DOS have FINDSTR which is quite similar to 'grep' but does not have anything to resemble 'wc –l'. However, the FIND command can count occurrences so

```
type log_file | find /c url
```

would work – for a single file.

in order to do that for all files, an on-disk concatenated version would need to be created and removed. Here's a batch file to accomplish this:

```

@Echo offpushd C:\inetpub\logs\LogFiles\W3SVC1if exist all.log del all.logcopy /a *.log all.log > nultype all.log | find /c %1del all.log > nulpopd



```

yuck? indeed

