---
layout: post
title:  "Fetching from many urls concurrently - the right way"
comments: true
tags: [c-sharp]
---


I've recently bumped into a post describing how to access a bunch of urls. The post was describing usage of Parallel.ForEach as a mean to parallelize such code.

It goes down to describe the the improvement over the iterative, single threaded version, was bounded to the number of cores.

Multithreading is definitely a way to increase performance of long running, independent jobs. However, there is a major difference between jobs that are CPU bound (such a complex computations) and jobs that are IO bounds (file-system, web services, DB calls, whatnot). First, there is no reason to keep all those threads waiting for the IO call to complete, and second - the number of available threads is limited, so the improvement is bound to the number of cores.



The way to achieve a better improvement for the said scenario and similar others, is to use non-blocking calls that are using IO-completion ports instead of threads.



I've ran three versions of the code - serial, parallel, and Async IO based. The results are stunning. For 300 files, the serial one took ~3.5 minutes, the parallel to ~30 seconds, and the Async IO base took just under a second!



Notice the ServicePointManager.DefaultConnectionLimit = 1000; part, which tells the application how many concurrent outgoing connections are allowed. A modern windows host allow up to ~64k file descriptors (the stuff that amongst other things allow this behaviour) so a 1000 is not a problem.



I also like CountdownEvent very much. Easier than ManualResetEvent with a counter and Interlocked.Decrement calls.

