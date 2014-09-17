---
layout: post
title:  "Determining SQL Server edition"
comments: true
tags: [tools,sql]
---


Thanks to [http://support.microsoft.com/kb/321185](http://support.microsoft.com/kb/321185) and to Ariel ([@Q](https://twitter.com/#!/q)) who have read it more carefully than I did, I learnt that there is a SERVERPROPERTY that you can query:

```
SELECT SERVERPROPERTY ('edition')
```



I expected to find Developer, but found Express instead.

