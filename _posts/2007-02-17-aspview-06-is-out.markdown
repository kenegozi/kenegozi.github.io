---
layout: post
title:  "AspView 0.6 is out"
comments: true
tags: [castle,monorail,aspview]
---


What's new?

1. Support for ViewComponents, including those with Sections. It is tested against CaptureFor, and GridComponent.

2. You can now specify saveFiles="true" in the config, and the compiler will leave the .cs files generated from the views to the disk, so you can match compilation errors from Visual Studio directly to the view's concrete class source.

The syntax for the ViewComponents is xml-like: just add

```
&lt;component:VIEWCOMPONENTNAMEARGUMENTS&gt;&lt;section:SECTIONNAME&gt;&lt;/section:SECTIONNAME&gt;Some content  &lt;/component:VIEWCOMPONENTNAME&gt;
```

where VIEWCOMPONENTNAME is the component's class name, SECTIONNAME is the section name, for components that uses sections, and the ARGUMENTS are xml-attributes, for example: id="capturedContent" myData="&lt;%=items %&gt;"

examples (from the test site):

for constant arguments:

```
&lt;component:CaptureForid="capturedContent"&gt;   This content should be rendered in the captured-for place holder  &lt;/component:CaptureFor&gt;
```

for variable arguments:

```
&lt;component:GridComponentsource="<%=items%&gt;">    &lt;section:header&gt;&lt;table&gt;&lt;thead&gt;&lt;th&gt;Id&lt;/th&gt;&lt;th&gt;Word&lt;/th&gt;&lt;/thead&gt;&lt;/section:header&gt;&lt;section:item&gt;&lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;&lt;%=item %&gt; &lt;/td&gt;&lt;/tr&gt;&lt;/section:item&gt;&lt;section:footer&gt;&lt;/table&gt;&lt;/section:footer&gt;&lt;/component:GridComponent&gt;
```

As usual, source code is at [http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/), 

Note that for a successful build you'd need to fix the siteRoot parameter in vcompils's app.config, to point to the actual physical path to the test site's root

