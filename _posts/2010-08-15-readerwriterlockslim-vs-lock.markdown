---
layout: post
title:  "ReaderWriterLockSlim vs lock"
comments: true
tags: [c-sharp,d9]
---


So you've got this boring old lock keyword, with its “only one at a time” semantics, and you think “hey, lets use the ReaderWriterLock, since its cooler, and it now has a Slim version so it MUST be great !”

&#160;

That is wrong on many levels.

&#160;

Lets start with exploring what the RWLS is about, in contrast to the lock keyword (which is a syntactic sugar for Monitor).

Both are used to synchronise access to a shared resource that might get read and written by different threads at the same time.

the general pattern is (pseudo-code, please do not Copy And Paste to your favourite IDE :) ):

```

variable aResource

lock aLock

&#160;

// when reading from the shared resource

lock_for_read(aLock):

   foo = aResource.get_value

   do_something_with foo

&#160;

// when writing to the shared resource

lock_for_write(aLock):

   aResource.set_value something

```

&#160;

The Monitor construct only allow a single thread to access the synchronised block at a time, whether it is for reading or writing, so actually the isn't a distinction between lock_for_read and lock_for_write, instead there is a single `lock` keyword.

&#160;

The meaning is that if you have many threads coming in and trying to read from the shared resource, they would have to queue and enter the block one by one.

&#160;

The ReaderWriterLock allow multiple threads to access a read block at the same time, so they will only need to wait once a thread is asking for a write lock. Then the writing thread will wait for all other threads within synchronised blocks to complete, then do its thing.

&#160;

Sounds great, isn't it?

&#160;

Well, actually the benefit of a ReaderWriterLock will only be in place when these two conditions are in place:
- There is a low write contention – i.e. most of the times when a thread asks for a lock, it is for a read access only 
- The synchronised read block is not very quick anyway 

why? because if the block executes very fast, then the waiting read threads will not need to actually queue up.

And if writes are not very sparse, an exclusive lock (because of the writes) will be taken many times, causing reading threads to queue anyway.

&#160;

Adhering to the “no free gifts” rule, the usage of a ReaderWriterLock has more overhead than that of a Monitor, thus it would not be advisable to consider using the ReaderWriterLock unless you know for sure that the two aforementioned conditions will take place in the scenario.

&#160;

And even then, you one should beware of a problem that might happen since there isn't a syntactic sugar for the ReaderWriterLock. Since you have to release the lock yourself, the common usage pattern is:

```

ReaderWriterLockSlim locker = new ReaderWriterLockSlim();
...
// read block
locker.EnterReadLock();
try
{&#160;&#160;&#160;&#160; //readAction
}
finally
{&#160;&#160;&#160;&#160; locker.ExitReadLock();
}


// write block
locker.EnterWriteLock();
try
{&#160;&#160;&#160;&#160; //write Action
}
finally
{&#160;&#160;&#160;&#160; locker.ExitWriteLock();
}

```

&#160;

Since I know that the usage is not 100% trivial, and that I might forget to exit the lock in a finally block (I've seen code examples around the interweb that forget to do so), I am usually looking up previous code of mine, and then copy-and-paste it.

Since like many other developers I tend to be lazy and sloppy when copy-pasting boring pieces of code around, I end up doing some mistakes such as entering a read lock, however exiting a write lock. I then get weird runtime exceptions that it takes a good few minutes to figure out. annoying.

This is without taking UpgradeableReadLock into account, which (imo) does not have a trivial API.&#160; I will put a separate post explaining UpgradeableReadLock btw.

&#160;

Summary:
- The good old simple lock construct is always more readable and maintainable, than ReaderWriterLock. Sometimes most of the times it even performs better.
- When the two conditions are met (low write contention, non-trivial read block), it is wise to consider a ReaderWriterLock
- When using ReaderWriterLock, one should beware (more than the usual) from blind copy-and-paste operations.

&#160;

Now since I found myself needing to use a ReaderWriterLock more than once lately, and since I did repeat the stupid copy-and-paste mistakes more than once, I created a little helper for that, included in my old-ish D9.Commons project, which is where I through reusable pieces of code at. Which reminds me that I need to move it to github some when soon.

Meanwhile it is at [http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Locks/Lock.cs](http://code.google.com/p/d-9/source/browse/trunk/src/D9.Commons/D9.Commons/Locks/Lock.cs), and it contains shortcut methods for executing code within Read, Write and UpgradeableRead blocks.

I'll run a different post with a couple of usage snippets later. 

