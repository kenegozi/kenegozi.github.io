---
layout: post
title:  "Typed View Properties in MonoRail and AspView"
comments: true
tags: [asp-net-2-0,c-sharp,castle,monorail,aspview]
---


Following my last post on the DictionaryAdapter, I'll demonstrate here how you can get typed access to your views' properties.



What it requires from you:

1. Declare an interface for each of your views. That is a Good Thing anyway, as designing to a contract is a good best practice, and it allows for easy testing.

2. Have a base class for your controller that would define TypedFlash and TypedPropertyBag. Not mandatory, but very convenient.

3. Use the newest build of AspView. Again - not mandatory, but helpful.



Now for the showtime.

First we would create a base class for our controllers, with a TypedPropertyBag and TypedFlash properties:

```
public abstract class Controller&lt;IView&gt; : SmartDispatcherControllerController    where IView : class{    IDictionaryAdapterFactory dictionaryAdapterFactory; IView typedPropertyBag; IView typedFlash; protected IView TypedPropertyBag { get         {             if (typedPropertyBag == null)         typedPropertyBag = dictionaryAdapterFactory.GetAdapter&lt;IView&gt;(PropertyBag);            return typedPropertyBag;         } }  protected IView TypedFlash { get         {             if (typedFlash == null)         typedFlash = dictionaryAdapterFactory.GetAdapter&lt;IView&gt;(Flash);            return typedFlash;         } }  protected override void Initialize() { base.Initialize();        IDictionaryAdapterFactory dictionaryAdapterFactory = new DictionaryAdapterFactory(); }}
```



tip:

You can look at a [more complete version of that base-class](http://using.castleproject.org/display/Contrib/Castle.Tools.CodeGenerator), written by Lee Henson (who have made some improvements to the original DictionaryAdapter, and also have introduced me to [Peroni Beer](http://www.peroniitaly.com/)).The base controller also declares a type parameter for a Session DictionaryAdapter, hooks into the Castle.Tools.CodeGenerator, and uses IoC for DI.Talking about those issues is a separate subject, for other posts.



Now let's create the view contract. A rather stupid example would be:

```
public interface IStupidView{ Guid Id { get; set; }    string Name { get; set; }}
```



controller:

```
public class StupidController : Controller&lt;IStupidView&gt;{    public void Index()    {    }    public void DoStuff(string name, string password)    {        if (password != "AspView Rocks")        {            TypedFlash.Name = name;            TypedFlash.Message = "Wrong Password";            RedirectToAction("Index");            return;        }        TypedPropertyBag.Id = Guid.NewGuid();        TypedPropertyBag.Name = name;    }}
```



view (Index.aspx):

```
&lt;%@ Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime<IStupidView&gt;" %>&lt;%%&gt;&lt;p&gt;&lt;%=view.Message %&gt;&lt;/p&gt;&lt;form action="DoStuff.rails"&gt;Name: &lt;input type="text" name="name" value="<%= view.Name %&gt;" /> &lt;br /&gt;password: &lt;input type="password" name="password" /&gt; &lt;br /&gt;&lt;input type="submit" /&gt;&lt;/form&gt;
```



view (DoStuff.aspx):

```
&lt;%@ Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime<IStupidView&gt;" %>&lt;%%&gt;The data was: &lt;br /&gt;Id: &lt;%= view.Id %&gt;, Name: &lt;%= view.Name %&gt;
```



Look at the intellisense (and at my ultra-cool black color scheme):

![TypedView intellisense](http://kenegozi.com/blog/uploaded/windowslivewriter/typedviewpropertiesinmonorailandaspview_11288/8d0b77d0-63d6-4e46-b355-c87ae31e5ca4.png)





Things to notice:

1. Do not forget to reference the Assembly that has the view interface declaration. On the test site within aspview's source repository the interface is declared in the Web project (AspViewTestSite), so the web.config has this:

view (Index.aspx):

```
&lt;aspview ... &gt;... &lt;reference assembly="AspViewTestSite.dll"/&gt;...&lt;/aspview&gt;
```



2. you can use the DictionaryAdapter directly, on older versions of AspView (and on WebForms aspx/ascx files) by simply grabbing an adapter manually. sample:

```
...&lt;% IMyViewContract view = new Castle.Components.DictionaryAdapter.DictionaryAdapterFactory()       .GetAdapter<IMyViewContract&gt;(Properties); %>...blah blah &lt;%=view.UsefulProperty %&gt;...
```

Ok, cut the crap. where can I get it?

here ([release](http://kenegozi.com/Blog/Files/download.aspx?filename=AspView_1.0.3.324_Release.zip), [debug](http://kenegozi.com/Blog/Files/download.aspx?filename=AspView_1.0.3.324_Debug.zip), [source](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/))



UPDATE:

The DictionaryAdapter was initially written by the guys from Eleutian as part of Castle.Tools.CodeGenerator. 

