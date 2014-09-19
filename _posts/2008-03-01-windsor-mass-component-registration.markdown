---
layout: post
title:  "Windsor - Mass Component Registration"
comments: true
tags: [castle]
---


It's so awesome.

I have about 1 minute for that, and the code is very self explanatory, so Im just doing a Copy&amp;Paste from the Castle dev list:



Craig Neuwirt:


The recent changes to the kernel registration interface allows for custom registration strategies. I just added an AllTypesOf strategy to allow for the most common scenarios. Here are some examples:  
- Registering all controllers in the current assembly 
```
kernel.Register( AllTypesOf&lt;IController&gt; .FromAssembly( Assembly.GetExecutingAssembly() ) );
```

- selecting the first interface as the service
```
kernel.Register( AllTypesOf&lt;ICommon&gt; .FromAssembly(Assembly.GetExecutingAssembly() ) .WithService.FirstInterface() );
```

- Using custom configuration 
```
kernel.Register( AllTypesOf&lt;ICommon&gt; .FromAssembly( Assembly.GetExecutingAssembly() ) .Configure( component => component.LifeStyle.Transient .Named( component.Implementation.FullName + "XYZ" ) ) );
```

- Choosing types if they have a specific attribute (courtesy of LINQ) 
```
kernel.Register( AllTypesOf&lt;CustomerChain1&gt; .Pick( from type in Assembly.GetExecutingAssembly().GetExportedTypes() where type.IsDefined(typeof(SerializableAttribute), true) select type ));
```






Ayende:

You are taking all the fun out of Binsor :-)

