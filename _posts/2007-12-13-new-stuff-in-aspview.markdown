---
layout: post
title:  "New stuff in AspView"
comments: true
tags: [castle,monorail,aspview]
---


I'm pleased to announce that the first step of AspView refactoring is over. The pre-compilation process is now way more coherent and easy to follow and to test. Soon enough, as I'll complete adding a service locator to the mix, it would also be easily extensible.



What can you do now that you couldn't have done before? Use a custom base class for views.

For example: let's say that you have created a supercool helper. You'd probably name it SuperCoolHelper. Now you register that helper on the controller:

```
[Helper(typeof(SuperCoolHelper))]public class MyController ...

```



You can, ofcourse declare it on every view:

```
<aspview:parameters><%SuperCoolHelper SuperCoolHelper;%></aspview:parameters><%=MyCoolHelper.CoolStuff() %>
```

You can also use the DictionaryAdapter and add the helper to the base view interface:

```

public interface IView{ SuperCoolHelper SuperCoolHelper { get; set; }}

...<% Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime<IView>" %>

...<%=view.MyCoolHelper.CoolStuff() %>

```

But now you can create a base class for the view:

The base class:

```
public class MyView : AspViewBase{ SuperCoolHelper SuperCoolHelper { get { return (SuperCoolHelper)Properties["SuperCoolHelper"]; } }}
```

A mocked class that inherit from Web.UI.Page to make intellisense play nicely:

```
public class MyViewAtDesignTime : ViewAtDesignTime{ SuperCoolHelper SuperCoolHelper { get { throw new NotImplementedException("useless"); } }}
```

and in the view:

```
<% Page Language="C#" Inherits="MyViewAtDesignTime" %>...<%=MyCoolHelper.CoolStuff() %>
```

You can mix that with the DictionaryAdapter integration:

```
<% Page Language="C#" Inherits="MyViewAtDesignTime<IPostView>" %>...
<%=MyCoolHelper.CoolStuff(view.Post.Title) %>

```

As usual: [http://www.aspview.com](http://www.aspview.com)

