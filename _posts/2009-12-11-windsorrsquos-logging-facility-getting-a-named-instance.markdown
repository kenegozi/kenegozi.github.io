---
layout: post
title:  "Windsor&rsquo;s Logging Facility; getting a named instance"
comments: true
tags: [tools,castle]
---


When using Windsor's logging facility, you'd usually take a dependency of an ILogger in your component, and have Windsor create the logger instance. The logger's name will be of your component's full type name.

e.g. for the following component:

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
	}
}
```

The logger's name will be My.Application.UsingLogIntegration

&#160;

At times, you would need to get a logger in a different way, either because you'd want a special name, or you will be in a location where you cannot have Windsor resolve that for you as a dependency (say within an ASP.NET's Global.asax class, which gets instantiated by ASP.NET, not by Windsor).

&#160;

The naive approach would be to ask the container for an ILogger, however if you'd try this, you'll discover that Container.Resolve<ILogger>() will not fit your needs. So what will you do?

&#160;

Well, the facility also sets an ILoggerFactory, which is in charge of creating loggers. So, do that instead:

```
var loggerTypeOrName = GetTheTypeForTheLoggerOrAStringIfYouPrefer();
var logger = Container.Resolve().Create(loggerTypeOrName);
```

ILoggerFactory.Create() can live with a type (will use the full type name as name) or with a string.

