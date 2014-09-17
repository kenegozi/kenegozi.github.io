---
layout: post
title:  "FileBinderAttribute to ease FileUpload in MonoRail"
comments: true
tags: [asp-net-2-0,c-sharp,castle,monorail]
---


Following [Scott Hanselman's post](http://www.hanselman.com/blog/ABackToBasicsCaseStudyImplementingHTTPFileUploadWithASPNETMVCIncludingTestsAndMocks.aspx) on FileUpload in ASP.NET MVC, I'll add here a few bits on doing that in MonoRail.



First, as MonoRail is an extension on top of plain ol' ASP.NET, just as ASP.NET MVC is, you can do the exact same thing - i.e iterate over Request.Files, and use a mocked Files collection for test or something.



But as the action parameters binder is very smart, and easily extensible, it's even nicer to just bind the posted data to a HttpPostedFile, using a FileBinder:


<!-- code formatted by http://manoli.net/csharpformat/ -->
{% highlight c# %}
   1:  [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false, Inherited = false)]   2:  publicclass FileBinderAttribute: Attribute, **IParameterBinder**   3:  {   4:  publicint CalculateParamPoints(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)   5:      {   6:  var key = parameterInfo.Name;   7:  return context.Request.Files[key] != null ? 10 : 0;   8:      }   9:    10:  publicobject Bind(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)  11:      {  12:  var key = parameterInfo.Name;  13:  return context.Request.Files[key] as HttpPostedFile;  14:      }  15:  }{% endhighlight %}



So a custom binder is an attribute, that implements IParameterBinder, a two methods interface:
- CalculateParamPoints() - is for helping the framework correctly guess the best candidate of the action overloads. If the file exists in the request then it makes an action with a HttpPostedFile parameter with the name of the file upload name, a better candidate than an overload with a String parameter with the same name. 

- Bind() - well, kinda' self explanatory.




so now you're action can look like this:

{% highlight c# %}
   1:  publicvoid Save([FileBinder] HttpPostedFile myfile)   2:  {   3:  if (myFile != null)   4:      {   5:  // do stuff with the file   6:      }   7:  }{% endhighlight %}



Cool? well actually what really is cool is that binding to HttpPostedFile is baked into MonoRail to begin with - so you don't even need this FileBinderAttribute at all ! you can simply

{% highlight c# %}
   1:  publicvoid Save(HttpPostedFile myfile)   2:  {   3:  if (myFile != null)   4:      {   5:  // do stuff with the file   6:      }   7:  }{% endhighlight %}



So why did I show you that?

Testablility.

Since HttpPostedFile is not easily mockable* (cuz it's bloody sealed and not new-able), you should do what you always do when in need to bypass one of these un-testable hard-to-test* sealed classes: Adapter pattern. Introduce IHttpPostedFile, and supply your own HttpPostedFile encapsulating the built in one.



so:



{% highlight c# %}

   1:  [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false, Inherited = false)]   2:  publicclass FileBinderAttribute: Attribute, **IParameterBinder**   3:  {   4:  publicint CalculateParamPoints(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)   5:      {   6:  var key = parameterInfo.Name;   7:  return context.Request.Files[key] != null ? 10 : 0;   8:      }   9:    10:  publicobject Bind(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)  11:      {  12:  var key = parameterInfo.Name;

  13:          var file = context.Request.Files[key] as HttpPostedFile;    14:  return file == null ? null : HttpPostedFileAdapter(file);  15:      }  16:  }
{% endhighlight %}



and

{% highlight c# %}
   1:  publicvoid Save([FileBinder] IHttpPostedFile myfile)   2:  {   3:  if (myFile != null)   4:      {   5:  // do stuff with the file   6:      }   7:  }{% endhighlight %}













* Yes Roy, I know you can throw some TypeMock magic at it

