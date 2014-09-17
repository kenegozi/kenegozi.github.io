---
layout: post
title:  "Typed Session using Castle.Components.DictionaryAdapter"
comments: true
tags: [asp-net-2-0,castle]
---


The castle project has a little gem hidden within.

Well, it has many of those, but I'll refer to one of them here.

[Castle.Components.DictionaryAdapter](http://api.castleproject.org/html/N_Castle_Components_DictionaryAdapter.htm)



This is a tool that can generate typed wrapper around any IDictionary, using a POCI (Plain Old CLR Interface) as a contract. The generation occur on runtime, using Reflection.Emit magic.



Ok, assume you have an information system written in ASP.NET ( warning - WebForms code ahead).

You might keep the current username and a user preferences object in the session.

Somewhere along your application, you'd probably have a pieces of code like that:

```
public static class TypedSession{    private static HttpSessionState session = HttpContext.Current.Session;    public static string Username     {         get { return (string)session["Username"]; }     }    public static Preferences Preferences     {         get { return (Preferences)session["Preferences"]; }     }}
```

and in your code you'd be able to do:

```
...    if (TypedSession.Preferences.Color == Color.Red)        helloLabel.Text = "Hello " + TypedSession.Username;...
```



Now, I won't get into those arguments, but generally speaking it would be great if you had an interface to encapsulate your session data (for example - it's good for testing as you can easily mock session data).

So:

```
public interface ISession{    string Username { get; set; }    Preferences Preferences { get; set; }}
```



And use it like that:

```
...    ISession TypedSession = new DictionaryAdapterFactory().GetAdapter<ISession>(Session);...    if (TypedSession.Preferences.Color == Color.Red)        helloLabel.Text = "Hello " + TypedSession.Username;...
```



You probably want to put the creation of the TypedSession in a base class.



And you've probably noticed that the adapter itself is being acquired through an interfacedFactory, so you can easily use your IoC container of choice to plug in specialized implementations on rare edge cases, and also use your Mock framework of choice for easy testing.



On the next post I'll show you how well that fit into the world of MonoRail and AspView, as the use of dictionaries is wide (PropertyBag and Flash), and using that library + the newest addition to AspView can grant you with a simple, type safe and intellisense friendly view development experience.

