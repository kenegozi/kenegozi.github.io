---
layout: post
title:  "Castle Windsor and the LoggingFacility"
comments: true
tags: [tools,castle]
---


So you want to be able to do some logging from your code.

&#160;

log4net for example, is a very common logging framework for .NET, and using it is pretty straight forward, and the net is full of log4net intros.

&#160;

Usage example:

```
namespace My.Application
{
	public class UsingLog4netDirectly
	{
		private static log4net.ILog logger = log4net.LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType.FullName);
		...
		...
		...
	}
}
```

&#160;

However, there are some caveats with using it directly.
- You get a hard dependency on log4net's dll 
- You need to manually setup the logger instance with logger name for each class – that's both annoying and error prone 
- And has bad impact on testing. 

Windsor, once again, can help a lot with making it much easier. e.g:

```
namespace My.Application
{
	public class UsingLogIntegration
	{
		readonly ILogger logger;
		public UsingLogIntegration(ILogger logger)
		{
			this.logger = logger;
		}
		...
		...
		...
	}
}
```

&#160;

Windsor will take care of injecting the correct logger instance, with the name set correctly (using the class name, not needing the wacky MethodBase… stuff)

&#160;

So, what do you set this up?

&#160;
Required assemblies:
Assuming you already use Windsor, you need 
- Castle.Facilities.Logging&#160; (the logging facility) 
- Castle.Services.Logging.Log4netIntegration (or any other built-in or custom made Integration) 
- log4net.dll&#160; (or any other actual logger implementation) 

You actually do not need to reference these assemblies, only make sure they are on the application's bin folder.&#160; If you use the programmatic configuration (like I do), you'd also need the first (the facility) referenced from your code.

&#160;
Registration:
```
container.AddFacility(&quot;LoggingFacility&quot;, new LoggingFacility(LoggerImplementation.Log4net));
```

&#160;

and …&#160; that's it !

&#160;

You still need to setup log4net's configuration, and tell the application where it is:

```
log4net.Config.XmlConfigurator.Configure();
```

&#160;
Get a different logger for tests
Easy. Instead of configuring the facility, you simply configure another implementation. 


container.Register(Component.For().Instance(new ConsoleLogger()));


If you'd explore the Castle.Core.Logging namespace you'd find few, very useful built-in implementations, such as a NullLogger (which you get by calling NullLogger.Instance), ConsoleLogger, StreamLogger (write to a file or memory stream), TraceLogger (writes to the diagnostic trace output) and WebLogger (writes to the HttpContext's Trace, visible at trace.axd).

