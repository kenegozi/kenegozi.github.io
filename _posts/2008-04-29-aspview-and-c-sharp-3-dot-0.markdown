---
layout: post
title:  "AspView and C#3.0"
comments: true
tags: [c-sharp,aspview]
---


MonoRail runs on .NET 2.0. AspView is no different, and is compiled for .NET 2.0, so people who cannot run 3.5 (shared hosting, other limitations) can still enjoy every shining new feature.



However, if you DO want to use c#3 stuff in view templates (like extension methods), then you can. Thanks to Felix Gartsman, the AspView compiler would try to load the c# compiler based on the codedom section of the application .config file.



So, if you're using autorecompilation=true, the add this to your web.config:

```
&lt;system.codedom&gt; &lt;compilers&gt; &lt;compiler language="c#;cs;csharp" extension=".cs" type="Microsoft.CSharp.CSharpCodeProvider,System, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" warningLevel="4"&gt; &lt;provideroption value="v3.5" name="CompilerVersion" /&gt; &lt;provideroption value="false" name="WarnAsError" /&gt; &lt;/compiler&gt; &lt;/compilers&gt;
&lt;/system.codedom&gt;

```



If you want to precompile your views, then add the same to vcompile's app.config.

