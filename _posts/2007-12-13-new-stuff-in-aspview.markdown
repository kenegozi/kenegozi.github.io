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
&lt;aspview:parameters&gt;&lt;%SuperCoolHelper SuperCoolHelper;%&gt;&lt;/aspview:parameters&gt;&lt;%=MyCoolHelper.CoolStuff() %&gt;
```

You can also use the DictionaryAdapter and add the helper to the base view interface:

```

public interface IView{ SuperCoolHelper SuperCoolHelper { get; set; }}

...&lt;% Page Language="C#" Inherits="Castle.MonoRail.Views.AspView.ViewAtDesignTime<IView&gt;" %>

...&lt;%=view.MyCoolHelper.CoolStuff() %&gt;

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
&lt;% Page Language="C#" Inherits="MyViewAtDesignTime" %&gt;...&lt;%=MyCoolHelper.CoolStuff() %&gt;
```

You can mix that with the DictionaryAdapter integration:

```
&lt;% Page Language="C#" Inherits="MyViewAtDesignTime<IPostView&gt;" %>...
&lt;%=MyCoolHelper.CoolStuff(view.Post.Title) %&gt;

```

As usual: [http://www.aspview.com](http://www.aspview.com)

