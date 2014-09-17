---
layout: post
title:  "Lockers dictionary"
comments: true
tags: [architecture,c-sharp]
---

Situation:
- Your application aggregates data from external sources (say XML data returned via Http)  
- You want to cache such data locally, say up to an hour  
- You have some processing mechanism going over the cached data, using multiple threads





Problem:
A thread looking for an item in the cache to find that it's not there, would issue the http request to fill the cache. A second thread might want to initiate another call if it needs the data before the first thread has updated the cache.




Solution 1:
use locks on the cache object.

problem with that: you lock the whole cache, so other threads looking for a different type of data will be blocked, even though it's okay for them to get data from the cache, and even to insert data with a different key into the cache.


Solution 2:
Keep a key per requested entry. Now you only lock what needs locking.

You'd keep a dictionary of lockers ( new object() ), then the action of obtaining a locker will cause a full cache lock, however the lock duration will be short (the time it takes to retrieve an object from a Hashtable, or to new an object and put it in the Hashtable), and then the long out-of-process operation of loading the object will be with a lock on the specific key, while the rest of the Cache is accessible for reads and writes by other threads.



Note - this is notepad (or rather WindowsLiveWriter) code. You'd need to fix syntax errors, and inspect the usage. License is MIT - Use at your own risk, and don't forget to attribute it to the writer




```

class KeyLevelSafeCache

{

   IDictionary lockers = new Hashtable();



   IDictionary cache = new Hashtable();



   object ObtainLockerFor(string key)

   {

      return thread-safely-get-an-object-from-lockers-hashtable()

   }   



   public T Get<T>(string key, Func<T> load())

   {

      var locker = ObtainLockerFor(key);

      //now retrieve the object from the cache using 'locker'

   }

}



```


