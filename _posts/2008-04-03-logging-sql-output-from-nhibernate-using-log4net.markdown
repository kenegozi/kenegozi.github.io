---
layout: post
title:  "Logging SQL output from NHibernate, using Log4Net"
comments: true
tags: [tools,nhibernate]
---


Following a question from NHibernate's users list:

```

<configSections> <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler,log4net" /></configSections><log4net> <appender name="rollingFile" type="log4net.Appender.RollingFileAppender,log4net" > <param name="File" value="log.txt" /> <param name="AppendToFile" value="true" /> <param name="DatePattern" value="yyyy.MM.dd" /> <layout type="log4net.Layout.PatternLayout,log4net"> <conversionPattern value="%d %p %m%n" /> </layout> </appender> <logger name="NHibernate.SQL"> <level value="ALL" />    <appender-ref ref="rollingFile" />  </logger></log4net>

```

and configuring your application to use Log4Net (if you hadn't done that anyway):



```
log4net.Config.XmlConfigurator.Configure();
```



If you wan't to know more about log4net and it's configuration options - look [here](http://www.ondotnet.com/pub/a/dotnet/2003/06/16/log4net.html?page=2) or use your favorite search engine.

