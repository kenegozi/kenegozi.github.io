---
layout: post
title:  "Count number of times a file has been download via HTTP logs - IIS and powershell edition"
comments: true
tags: [tools]
---


Following [ben hall's post](http://blog.benhall.me.uk/2011/08/count-number-of-times-file-has-been.html) (great blog – subscribe!) on counting file access data from Apache logs using *nix commanline's grep, I thought to see how easy would it be to get the same with Powershell (I've been wanting to learn PS for ages – I have a few Windows servers I manage, and I love *nix commandline and miss it on these machines).


Smoking pipes
I also wanted to be more idiomatic – looks like shell scripting (both with bash and friends, as well as with Powershell) favor piping outputs to inputs.

for e.g. – the command that Ben is using – reading the file using grep's switch, 

```
grep –o url log_file | wc -l
```

would be rewritten as

```
cat log_file | grep url | wc -l
```

Not being a unix master myself, I cannot tell which is better, but personally I prefer the latter; instead of needing to remember grep's switch, I pipe cat into grep.

It becomes even better once going through multiple files – I have no idea what grep's syntax for that is, but I can pipe 'ls' into 'cat'

WRONGcat does not except input as a pipe. You need to resort to other syntaxes (see [http://stackoverflow.com/questions/864316/how-to-pipe-list-of-files-returned-by-find-command-to-cat-to-view-all-the-files](http://stackoverflow.com/questions/864316/how-to-pipe-list-of-files-returned-by-find-command-to-cat-to-view-all-the-files))



anyway, 
Powershell-ing
First – 'count strings' is done by Select-String (this is the one of two parts I needed googling for)

the equivalent for 'cat' is … (wait for it) … 'cat'

so, 

```
cat log_file | select-string url
```

will return all relevant lines

So how do you count lines (equivalent to 'wc –l') ? - there's a command called 'measure'

Now we are at 

```
cat log_file | select-string url | measure
```
IIS logs vs apache's
Not sure about how Apache does things, but with IIS, the access logs are split by default on a daily basis. All logs per a website are within a designated folder (, so one needs to iterate over all of them to count access to a given url.

That's where cat's piping impediment could have been bothering, however with powershell – things are a bit easier – you can actually pipe 'ls' into 'cat' !
show me the codez already
```
ls C:\inetpub\logs\LogFiles\W3SVC1 | cat | select-string "e.js" | measure
```

does the trick !

Actually – there's a little trick here to take this a step forward

As opposed to unix shells, powershell is object oriented, and has richer models over simple text lines.

meaning – the output of 'ls' in powershell is not simply the file-names, but rather FileInfo objects

So, what's so good about it you ask?

select-string, when fed with FileInfo instances, knows to look for the string within the file's content instead of its name!

so we can drop 'cat' for that purpose and the final version is:

```

ls C:\inetpub\logs\LogFiles\W3SVC1 | select-string "e.js" | measure

```

