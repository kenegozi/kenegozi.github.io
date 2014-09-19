---
layout: post
title:  "FactorySupportFacility gotcha"
comments: true
tags: [tools,castle]
---


The FactorySupportFacility in Windsor is very useful but there's a little something to be aware of when using it.


What is it?
This facility allows you to tell the container that when a given service is to be resolved, instead of new-ing it, it should call a factory method to obtain an instance.

This is very useful for context objects (like DbContext, HttpContext etc.) , which are usually being supplied by a framework thus you can't have the container instantiate them directly. So, assuming you want to inject a ISomeContext object into a service, you need to create a factory that can obtain it for you:

```

public class SomeContextFactory

{

   ISomeContext ObtainFromFramework()

   {

      return SomeFrameworkContext.Current; //or whatever

   }

}

```



then you can setup the container to use that factory when injecting the context


The usage:
Online examples:
- [http://www.jroller.com/hammett/entry/castle_s_factory_facility](http://www.jroller.com/hammett/entry/castle_s_factory_facility)(using XML config, and it's somewhat old - that's the first announcment of this facility from Hammet back in the mesosoican era).
- [http://mawi.org/ProgrammaticCastleMicrokernelWindsorAmpTheFactoryFacility.aspx](http://mawi.org/ProgrammaticCastleMicrokernelWindsorAmpTheFactoryFacility.aspx)(using programmatic container initialisation).


And, the gotcha:
When taking the programmatic road, you must follow this order of doing things:
- Create the facility instance:

```
var facility = new FactorySupportFacility();
```
- Add it to the container

```
container.Kernel.AddFacility("factory.support", facility);
```
- Register your factories in the facility:

```
facility.AddFactory&lt;ISomeContext, SomeContextFactory&gt;("some.context", "ObtainFromFramework");
```

If you mix 2 and 3, it would break.

There reason of course is that registering the factory into the facility, mean that the facility needs no know about the current container and kernel. This is being done in step 2 so you simply can't do step 3 before that.

