---
layout: post
title:  "AutoStubber to ease stub based unit tests"
comments: true
tags: [c-sharp,tools,testing]
---


Tired of setting up stubs for your class under test?

Tired of compile errors when you add one more dependency to a class?

The AutoStubber to the rescue.

Given

```
interface IServiceA
{
	string GetThis(long param);
}
interface IServiceB
{
	Do DoThat(string s);
}

class MyService
{
	public MyService(IServiceA a, IServiceB b) { ... }
	...
}

...
```

you can write;

```
var service = new AutoStubber.Create();
// Arrange
var theString = &quot;whatever&quot;;
service.Stubs().Get.Stub(x=>x.GetThis(0).IgnoreArguments().Return(theString);

// Act
service.Execute();

// Assert
service.Stubs().Get.AssertWasCalled(x=>x.DoThat(theString);
```

&#160;

The code for AutoStubber:

* Mind you – it's not the prettiest, but it gets the job done

```
public class AutoStubber&lt;T&gt; where T : class
{
	static readonly Type TypeofT;
	static readonly ConstructorInfo Constructor;
	static readonly Type[] ParameterTypes;
	static readonly Dictionary&lt;object, AutoStubber<T&gt;> Instances = new Dictionary&lt;object, AutoStubber<T&gt;>();
	static AutoStubber()
	{
		TypeofT = typeof(T);
		Constructor = TypeofT.GetConstructors().OrderByDescending(ci => ci.GetParameters().Length).First();
		ParameterTypes = Constructor.GetParameters().Select(pi => pi.ParameterType).ToArray();
	}

	public static AutoStubber&lt;T&gt; GetStubberFor(T obj)
	{
		return Instances[obj];
	}

	bool _created;
	public T Create()
	{
		if (_created)
			throw new InvalidOperationException(&quot;Create can only be called once per AutoStubber&quot;);
		_created = true;
		return Instance;
	}

	readonly Dictionary&lt;Type, object&gt; _dependencies = new Dictionary&lt;Type, object&gt;();
	private T Instance { get; set; }
	public AutoStubber()
	{
		var parameters = new List&lt;object&gt;(ParameterTypes.Length);
		foreach (var parameterType in ParameterTypes)
		{
			var parameter = MockRepository.GenerateStub(parameterType);
			parameters.Add(parameter);
			_dependencies[parameterType] = parameter;
		}
		Instance = (T)Constructor.Invoke(parameters.ToArray());
		Instances[Instance] = this;
	}
	public TDependency Get&lt;TDependency&gt;()
	{
		return (TDependency)_dependencies[typeof(TDependency)];
	}
}
public static class AutoStubberExtensions
{
	public static AutoStubber&lt;T&gt; Stubs&lt;T&gt;(this T obj)
		where T : class
	{
		return AutoStubber&lt;T&gt;.GetStubberFor(obj);
	}
}
```

&#160;

I know there is the AutoMockingContainer, and various other stuff out there, but this thing just was very natural to me, it uses a very simple API (do not need to keep reference to the Container), and took me less than an hour to knock off.

An enhancement I consider would be to allow setting pre-created values to some of the parameters. But meanwhile I did not happen to need it.

