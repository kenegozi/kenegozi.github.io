---
layout: post
title:  "Code Proxies and why You should care"
comments: true
tags: [design]
---


## Head first 

Instead of going about what a proxy is, I'll first describe usage scenario or two to make the explanation more concrete.

## non functional aspects aka AOP

Consider any “service class” you might have written, lets assume it has a well defined public API – probably using an interface. Now lets say that you want to start logging the amount of time each of these methods of the public API take. A common solution would look like that:

This violates a few engineering principles (repeated code, magic strings, etc.), makes debugging annoying, clutter the view, and overall not-fun

## Meanwhile in Dynamicland

With the ability to replace a method in runtime, a developer in Ruby/Javascript/et-el can easily patch these methods and add the cross cutting concern in run-time.

## Back to c#

The concept of AOP is not unfamiliar to c# developers. While some solutions use compile-time code weaving (a-la [postsharp](http:///)) and other techniques, the more common one (which is in use with most IoC containers, as NHiberate and other frameworks) is to use a DynamicProxy. Meaning that in runtime, user code will ask a factory (or IoC) for an object of type X, and will get and object of type Y, where Y is subtype of X, and was dynamically generated in runtime to override X's public methods, and apply the aspect there. Not unlike any other Wrapper / Decorator class, except for the fact that no-one needs to manually writing code for the wrappers, but instead write the aspect once, and apply it for many types/methods

## 

## Examples

NHibernate, to allow lazy loading of properties, uses a dynamic proxy when creating instances of objects that were read from the DB, decorating public virtual mapped getters with a “Load the content when first accessed” concern. this is totally transparent to the user. The fact the NH uses (at least by default) runtime dynamic proxies, and that (at least by default) it works with class-based pocos for entities (and not interfaces) is why the docs tell you to use virtual properties if you want Lazy Loading.

And wouldn't it be nice when writing GUI apps to have PropertyChanged events be wired automatically?

## Proxying interfaces

Here is where it is getting even more interesting IMO

The proxying technique can be actually applied to interfaces, not only virtual classes. Meaning that you can actually generate code in runtime to implement certain contracts without having actual implementation of those interfaces in your user code at all!

A fine example of that approach is in Castle's DictionaryAdapterFactory (see [http://docs.castleproject.org/Default.aspx?Page=DictionaryAdapter-Introduction&amp;NS=Tools&amp;AspxAutoDetectCookieSupport=1](http://docs.castleproject.org/Default.aspx?Page=DictionaryAdapter-Introduction&amp;NS=Tools&amp;AspxAutoDetectCookieSupport=1))In essence, a dynamic proxy is created in runtime to implement a given interface's properties, allowing typed read/write access to untyped <string,object> datastores (Session, Cache, ViewBag, you name it)

Another example where I used that technique in the past – in a RPC client/server scenario, you need to keep a few things in sync: The server's endpoints (http in my scenario), the method signatures on both the server and client, and more.The system was using an interface (with a couple of attributes for metadata e.g. URL parts) to declare the servers' API. The server holds implementations for the interface and in runtime it reflects over the interface to build the endpoints (think MVC routes), while the client generates dynamic proxies from the interfaces that call out to the server in a transparent way. This way we avoided the need to constantly regenerate client proxies (lots of repetitive code and clutter in the codebase, tax on source control and process, and difficult to manipulate and extend), as well as being refactoring-friendly (because it is all code, and magic-strings such as url prefixes etc are defined in exactly one place).

## Where is the code?

Sorry, running out of time here. I will post an example implementation for a dynamic proxy in c# in a follow-up post.

