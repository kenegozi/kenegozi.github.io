---
layout: post
title:  "What&rsquo;s new in Monorail 2.0"
comments: true
tags: [tools,castle,monorail,aspview,open-source-software]
---






During the long, long time it took to get from 1.0RC3 to 2.0, many things have changed, and many things were added. I probably won't cover it all in this post, and I'll probably forget a few things that I got so accustomed to use (I have always used trunk versions, even way before I became a committer).

&#160;

&#160;
Programmatic config
If (like me) you do not like putting stuff in config files that the operations team do not care about, you can now run a Monorail application without the Monorail section in the web.config file.

How?&#160; you'd need your Global class to implement IMonoRailConfigurationEvents.

e.g. from many of my websites: (I'm configuring AspView as view-engine)

```
public void Configure(IMonoRailConfiguration configuration)
{
	configuration.ControllersConfig.AddAssembly(Assembly.GetExecutingAssembly());
	configuration.ViewEngineConfig.ViewPathRoot = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, &quot;Views&quot;);
	configuration.ViewEngineConfig.ViewEngines.Add(new ViewEngineInfo(typeof(AspViewEngine), false));
}
```

you can setup many optional things that way. e.g.: 

```
// configue jquery as the validation engine
configuration.JSGeneratorConfiguration.AddLibrary(&quot;jquery-1.2.1&quot;, typeof (JQueryGenerator))
	.AddExtension(typeof (CommonJSExtension))
	.ElementGenerator
	.AddExtension(typeof (JQueryElementGenerator))
	.Done
	.BrowserValidatorIs(typeof (JQueryValidator))
	.SetAsDefault();
// configure url extensions
configuration.UrlConfig.UseExtensions = false;
```

delve into the intellisense on the IMonoRailConfiguration interface to find more

&#160;
Return binders
The example speaks for itself:

```
public class State
{
    public string Code { get; set; }
}

[return: JSONReturnBinder]
public State[] GetStates()
{
    // fake code for the sake of the demonstration
    return new[] { new State { Code=“CA” }, new State { Code=“WA” } };
}
```

will render the JSON representation of the given State array

&#160;
New routing engine
see [http://www.castleproject.org/monorail/documentation/trunk/advanced/routing.html](http://www.castleproject.org/monorail/documentation/trunk/advanced/routing.html)

and [http://kenegozi.com/blog/2009/02/10/monorail-routing-and-the-homepage-routing-rule.aspx](http://kenegozi.com/blog/2009/02/10/monorail-routing-and-the-homepage-routing-rule.aspx) for setting a homepage route

&#160;
RescueController
A rescue controller will take care of exceptions that have happened during an Action.

You'd create your rescue controller, implement IRescueController, inherit from SmartDispatcherController, and setup the rescue controller in the RescueAttribute on the regular controller.

see more here: [http://www.castleproject.org/monorail/documentation/trunk/usersguide/rescues.html](http://www.castleproject.org/monorail/documentation/trunk/usersguide/rescues.html)

&#160;
AspView
The C# based view engine became a first class citizen in Monorail. There has been many improvements there during the time, which deserve a separate post perhaps. meanwhile you can look at the aspview tag on this blog: [http://kenegozi.com/blog/Tag/aspview.aspx](http://kenegozi.com/blog/Tag/aspview.aspx)

&#160;

I can't think of more stuff right now, so ping me if I forgot anything.

