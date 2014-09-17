---
layout: post
title:  "Creating a custom parameter binder for MonoRail actions - IParameterBinder"
comments: true
tags: [castle,monorail]
---

Background
When using SmartDispatcherController as a base class for a MonoRail's Controller, there are built-in smarts for binding values from the client (Form, QueryString, Request.Params) into .NET data types.So, assuming the request holds "age=30", and there's an action 

```
public void SomeAction(int age) ...
```
then the integer variable 'age' will get populated with the value 30. 



This will work for every .NET primitive (int, string, bool) and even DateTime and Guid. If the value is missing from the request, a default value will be set, for example - 0 for integers, or null of nullable types.

There's also DataBindAttribute that allow you to bind values to a non-primitive DTO object.Say you have 

```
public class User
{
    string Name {get;set;}
    int Age {get;set;}
}
```
and that your request is holding "User.Name=Ken&amp;User.Age=30", then the following action
```
public void SomeAction([DataBind("User")] User user) ...
```
will bind the age and name into a new instance of User. 




Problem
Yesterday, on Castle devs mailing list Andre Loker was asking about a way to bind a value to an action argument, but with the value having a name that cannot match a c# variable name.For example, let's say that the request is holding "User.Age=30", but you do not want to bind to a User instance (through DataBind) but you want only the Age part, into an integer variable.You certainly cannot have your action signature look like 

```
public void SomeAction(int User.Age) ...
```


Solution:
Luckily for us, MonoRail was built with extensibility in mind (and whenever a user feels something more is required in the field of extensibility, a patch is always welcome :) ).The extension point here is the IParameterBinder interface, which is being used in DataBindAttribute to let the framework know that the attribute is to be used for data binding.

IParameterBinder:

```
/// <summary>
/// Implemented by attributes that wants to perform 
/// some conversion to populate a smart dispatcher 
/// action argument.
/// </summary>
public interface IParameterBinder
{
    /// <summary>
    /// Calculates the param points. Implementers should return value equals or greater than
    /// zero indicating whether the parameter can be bound successfully. The greater the value (points)
    /// the more successful the implementation indicates to the framework
    /// </summary>
    /// <param name="context">The context.</param>
    /// <param name="controller">The controller.</param>
    /// <param name="controllerContext">The controller context.</param>
    /// <param name="parameterInfo">The parameter info.</param>
    /// <returns></returns>
    int CalculateParamPoints(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo);

    /// <summary>
    /// Binds the specified parameters for the action.
    /// </summary>
    /// <param name="context">The context.</param>
    /// <param name="controller">The controller.</param>
    /// <param name="controllerContext">The controller context.</param>
    /// <param name="parameterInfo">The parameter info.</param>
    /// <returns></returns>
    object Bind(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo);
}
```



The CalculateParamPoints function is used by the framework to help SmartDispatcherController decide with overload of a given action should be used.

the Bind function, well, binds the request data into the given parameter.



Here is a naive BindFrom attribute, which is to be used like that:

```
public void SomeAction([BindFrom("User.Age")] int age) ...
```

The code:

```

[AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false, Inherited = false)]
public class BindFromAttribute : Attribute, IParameterBinder
{
    private readonly string parameterName;
    private readonly IDataBinder binder = new DataBinder();

    public BindFromAttribute(string parameterName)
    {
        if (string.IsNullOrEmpty(parameterName))
        {

            throw new ArgumentException("parameterName must not be null or empty", "parameterName");
        }
        this.parameterName = parameterName;
    }

    public string ParameterName
    {
        get { return parameterName; }
    }

    public int CalculateParamPoints(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)
    {
        var token = context.Request[parameterName];
        if (CanConvert(parameterInfo.ParameterType, token))
            return 10;
        return 0;
    }

    static bool CanConvert(Type targetType, string token)
    {
        if (token == null)
            return false;



        try

        {
            Convert.ChangeType(token, targetType);
            return true;
        }
        catch(FormatException)
        {
            return false;
        }
    }

    public object Bind(IEngineContext context, IController controller, IControllerContext controllerContext, ParameterInfo parameterInfo)
    {
        var token = context.Request[parameterName];
        if (CanConvert(parameterInfo.ParameterType, token) == false)
            return null;

        return Convert.ChangeType(token, parameterInfo.ParameterType);
    }
}

```


Conclusion
The IParameterBinder interface is very important as it allow a user to extend MonoRail to his exact needs. If you want to learn more about that interface and it's uses, the best places to look are DataBindAttribute.cs in Castle.MonoRail.Framework/Attributes, and ARDataBindAttribute.cs in Castle.MonoRail.ActiveRecordSupport



As a side note, I'm thinking about adding the discussed behaviour into the default DataBindAttribute, so one would be able to bind into primitives, say from "User.Age=30&amp;User.Name=Ken" using 

```
public void SomeAction([DataBind("User")] int age, [DataBind("User")] string name) ...
```

