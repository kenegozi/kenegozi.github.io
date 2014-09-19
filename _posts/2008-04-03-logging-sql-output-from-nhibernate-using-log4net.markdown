---
layout: post
title:  "Logging SQL output from NHibernate, using Log4Net"
comments: true
tags: [tools,nhibernate]
---


Following a question from NHibernate's users list:

```

&lt;configSections&gt; &lt;section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler,log4net" /&gt;&lt;/configSections&gt;&lt;log4net&gt; &lt;appender name="rollingFile" type="log4net.Appender.RollingFileAppender,log4net" &gt; &lt;param name="File" value="log.txt" /&gt; &lt;param name="AppendToFile" value="true" /&gt; &lt;param name="DatePattern" value="yyyy.MM.dd" /&gt; &lt;layout type="log4net.Layout.PatternLayout,log4net"&gt; &lt;conversionPattern value="%d %p %m%n" /&gt; &lt;/layout&gt; &lt;/appender&gt; &lt;logger name="NHibernate.SQL"&gt; &lt;level value="ALL" /&gt;    &lt;appender-ref ref="rollingFile" /&gt;  &lt;/logger&gt;&lt;/log4net&gt;

```

and configuring your application to use Log4Net (if you hadn't done that anyway):



```
log4net.Config.XmlConfigurator.Configure();
```



If you wan't to know more about log4net and it's configuration options - look [here](http://www.ondotnet.com/pub/a/dotnet/2003/06/16/log4net.html?page=2) or use your favorite search engine.

