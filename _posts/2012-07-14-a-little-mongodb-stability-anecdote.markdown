---
layout: post
title:  "A little MongoDB stability anecdote"
comments: true
tags: [architecture]
---


## Once upon a time

So a while back I set up a system for a customer. They are not a tech company, but rather a more traditional business constructed around “buy stuff for cheap and sell for more”.

The system (which some aspect and the history and evolution of it are material for a few other blob posts) is automating a lot of the pre-processing for incoming buy and sell requests, filtering a real noisy stream of incoming data into relevant pieces of information that is handled to the sales persons quickly, making the business far more productive and competitive than without.

Given the importance, the system needs to be pretty robust. Given the amount of moving parts, it is not a very trivial task.

## Show me the money

The backend storage for the system's internal state (it also coordinates with several other data sources) was MongoDB. 

The setup – a single Mongod process, running version 1.8.something (the latest at the time) with journaling on, and all write ops from the client require full ack and flush-to-disk (fsync) to complete. It also is running on a machine that already runs many other things, and is not a very beefy machine to begin with.

Oh yeah, and nobody is watching over it (not a tech company – did I mention that?).

## What?

Single instance you say? but sir this is completely and utterly stupid!Sharing the machine you say? but it would eat up all memory and kill everything!No db admin? do IT person who know anything about it? it's doomed!

## The (not that) bad

In over a year, the system and it only suffered one-time breakdown, which is only attributed to my stupidity – I installed a 32bit version and once the system needed to allocate >2gb file it broke down. 

## The good

The fix was very simple and super fast – downloaded the 64bit package, replaced the binaries, restarted the service.no data loss, the system picked up jobs from the queue and quickly restored full capacity.

## State of affairs

The system have been running for well over a year now, completely unattended, and the only melt-down was avoidable, yet solved quickly and easily. MongoDB proved to be a robust piece of the puzzle. It also is showing a rather small memory footprint (most queries and updates are on the newest data, insertions are usually to the end of collections, so most of the files are kept paged to disk). 

So yeah it is not a “web-scale” system in terms of request/sec or data size, but it proved to be a fairly good solution for an internal system that is in charge of *tons* of money.

## So what's my point

Given the design I did for the system (another time, another post), I was not very afraid of possible problems with the data store, knowing that given a problem, once I solve it the system can quickly get back to work. Then I needed a solution that was cheap (low resources, run on existing hardware and OS), flexible to develop with, and with super easy install and upgrade story (xcopy deployment ftw). MongoDB was a perfect fit. 

## Bottom line - is MongoDB stable?

I've seen in my consulting years quite a few systems being very fragile, although they were relying on “proven stable” systems such as top-of-the-line RDBMS. Solid architecture and good design are *far* more crucial to system's stability than specific tech choices. The question you need to ask yourself when you need to build a complex system (be it on the amount-of-moving parts front, dataset volume, system stress, data sensitivity or a mix of the above), is not “Is tech X stable enough or good enough”, but rather “Do I (or my people) know enough about building complex systems to build a stable one”. If you lack the experience, bring a person in who can help.

