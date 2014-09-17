---
layout: post
title:  "Monorail Routing and the Homepage routing rule"
comments: true
tags: [castle,monorail]
---

Scenario: 
You are building a Monorail web site, and want to setup a route from the application's path to a given action (usually home/index)


The problem:
The pattern "/" does not work, so

```
RoutingModuleEx.Engine.Add(
    new PatternRoute("Home", "/")
        .DefaultForArea().IsEmpty
        .DefaultForController().Is("Home")
        .DefaultForAction().Is("Index")
    );

```

will fail to serve [http://yoursite/](http://yoursite/)

Same will happen if you're using the Code Generator for setting up rules.

```
[PatternRoute("Homepage", "/")]
public void Index() { ... }
```

will fail just the same


The fix:
Use the pattern "/[controller]", like that:

```
RoutingModuleEx.Engine.Add(
    new PatternRoute("Home", "/[controller]")
        .DefaultForArea().IsEmpty
        .DefaultForController().Is("Home")
        .DefaultForAction().Is("Index")
    );
```

or if you're using the Code Generator:

```
[PatternRoute("Homepage", "/[controller]")]
public void Index() { ... }
```


Future fix:
I'm considering adding a useful HomepageRoute that will derive from PatternRoute and will have all the needed conventions for easily setting up the homepage rule. Hopefully will be in trunk by this weekend. This will allow a simpler default syntax:

```
RoutingModuleEx.Engine.Add(
    new HomepageRoute()
    );

```

or (using the code generator):

```
[HomepageRoute]
public void Index() { ... }
```

Convention over Configuration.

