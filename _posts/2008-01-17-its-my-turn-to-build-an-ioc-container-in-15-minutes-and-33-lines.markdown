---
layout: post
title:  "It's My Turn To Build An IoC Container In 15 Minutes and 33 Lines"
comments: true
tags: [architecture,tools,castle]
---


Last night I've built a nice new tool called StaticMapGenerator which is used to generate a typed static resources site-map for ASP.NET sites (works for MonoRail, ASP.NET MVC and even WebForms).

I'll blog about it on a separate post in details.

Since I didn't want any dependency (but .NET 2.0 runtime) for the generator and the generated code, I couldn't use Windsor to IoC. That calls for a hand rolled simple IoC implementation

[Ayende has already done it in 15 lines](http://www.ayende.com/Blog/archive/2007/10/20/Building-an-IoC-container-in-15-lines-of-code.aspx), but I wanted also to automagically set dependencies and have a simpler registration model.

so I've quickly hacked together a configurable DI resolver (a.k.a. IoC container) in 15 Minutes and 33 Lines Of Code. Call me a sloppy-coder, call me whadever-ya-like. It just works.

```
static class IoC {  static readonly IDictionary<Type, Type> types = new Dictionary<Type, Type>();   public static void Register<TContract, TImplementation>()  { types[typeof(TContract)] = typeof(TImplementation);  }  public static T Resolve<T>()  { return (T)Resolve(typeof(T)); }  public static object Resolve(Type contract) { Type implementation = types[contract];  ConstructorInfo constructor = implementation.GetConstructors()[0];  ParameterInfo[] constructorParameters = constructor.GetParameters();   if (constructorParameters.Length == 0) return Activator.CreateInstance(implementation);  List<object> parameters = new List<object>(constructorParameters.Length);   foreach (ParameterInfo parameterInfo in constructorParameters)  parameters.Add(Resolve(parameterInfo.ParameterType));  return constructor.Invoke(parameters.ToArray()); }}
```

Ok, I've cheated. You'd need using statements too, but you can see that I was generous enough with newlines ...

Usage:

Given those:
```
public interface IFileSystemAdapter { }public class FileSystemAdapter : IFileSystemAdapter { }public interface IBuildDirectoryStructureService { }public class BuildDirectoryStructureService : IBuildDirectoryStructureService{ IFileSystemAdapter fileSystemAdapter; public BuildDirectoryStructureService(IFileSystemAdapter fileSystemAdapter) { this.fileSystemAdapter = fileSystemAdapter; }
}
```


You can do that:

```
IoC.Register<IFileSystemAdapter, FileSystemAdapter>();IoC.Register<IBuildDirectoryStructureService, BuildDirectoryStructureService>(); IBuildDirectoryStructureService service = IoC.Resolve<IBuildDirectoryStructureService>();
```
You need not worry about supplying the BuildDirectoryStructureService with an implementation for the service it depends on, but only to register an implementation for that service.
