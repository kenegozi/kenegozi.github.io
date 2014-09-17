---
layout: post
title:  "Interlocked.Increment vs. lock &ndash; surprise surprise !"
comments: true
tags: [c-sharp]
---


&#160;

Problem at hand: an ID generator.

&#160;

Like many other things, developers can be categorized into three types : *
- Does not know anything about concurrency issues. Might try to put lock(this) on a couple of code blocks, and hope it will help. 
- Will throw lock(locker) statements where ever needed. Probably even use a ReaderWriteLock, or the Slim-er brother of his 
- Will use lock-free constructs. 

Now I am definitely not a concurrency guru like [my](http://www.lnbogen.com/)[teammates](http://ripper234.com/), however when I looked at a code for an ID generator that had

```
public int GetNextId() {
	lock(locker)
		return nextId++;
}
```

I immediately ran a git-checkout, changed that offending piece of code to

```
public int GetNextId() {
	return Interlocked.Increment(ref nextId) – 1;
}
```

And created a patch to send to the innocent owner of the code.

&#160;

Smart heh? **

&#160;

Then I thought that it won't hurt to throw in a little proof for this amazing improvement.

Running 1000 calls to a GetNextId that was using a lock, took longer than calling the method using Interlocked !&#160; Ah Ha – who's the man?

&#160;

Then I realised that a better test will be to run these 100 calls **in parallel**. That is after all the whole idea of a shared generator. Many threads might need to call it on the same time !

&#160;

To my surprise, when asking for IDs in parallel, the interlocked construct was almost always slower, taking about 150% of the time the lock construct took on most runs (I tried this again and again, every time averaging 100 repeats).

&#160;

Here's a screenshot of the test run

![interlocked vs lock](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/Interlocked.Increme.locksurprisesurprise_2D4/d163d725-f254-4820-8b6f-4ce0eaf37697.png)

&#160;

Code is here: [https://gist.github.com/24b9012a49392c4e458b](https://gist.github.com/24b9012a49392c4e458b)

&#160;

After thinking about this a little, I think that I have an idea why this is happening, assuming my SpawnAndWait call is not entirely stupid (is it?)

&#160;

So I call you my dear readers (most of which are way smarter than I am): what is your take on that? why did that happen? and would **you** have chosen lock or interlocked for an ID generator?

&#160;

&#160;

* apparently there's at least one more type – smartass, and I'm there

** probably not

