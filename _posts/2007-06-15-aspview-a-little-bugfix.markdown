---
layout: post
title:  "AspView - a little bugfix"
comments: true
tags: [tools,castle,monorail,aspview]
---


If you are an AspView user you might have noticed a problem.

If you setup a nullable-value-type parameter with a default value other than null, then you'd get a casting error.



example:

```
&lt;%
 int? someInt = default(int);%&gt;
```

```
some markup 
```

```
&lt;% if (someInt == default(int)) DoSomething();%&gt;
```



it happened because of the way GetParameter worked 

GetParameter is a method that gets a view parameter value from the view's properties collection (PropertyBag, Flash, Request.Params, etc.). It's located inthe AspViewBase class (the base class for each and every view in the AspView world).



So, now it's fixed, and a test was added to make sure it'll stay that way.



As soon as google.com will be accesible again, you'd be able to check out and build.

UPDATE:

I'm too tired (3am here). The sources are on castle contrib and not on google, so you'd find them [here](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/)

