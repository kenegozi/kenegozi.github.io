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
<component:VIEWCOMPONENTNAMEARGUMENTS><section:SECTIONNAME></section:SECTIONNAME>Some content  </component:VIEWCOMPONENTNAME>
```

where VIEWCOMPONENTNAME is the component's class name, SECTIONNAME is the section name, for components that uses sections, and the ARGUMENTS are xml-attributes, for example: id="capturedContent" myData="<%=items %>"

examples (from the test site):

for constant arguments:

```
<component:CaptureForid="capturedContent">   This content should be rendered in the captured-for place holder  </component:CaptureFor>
```

for variable arguments:

```
<component:GridComponentsource="<%=items%>">    <section:header><table><thead><th>Id</th><th>Word</th></thead></section:header><section:item><tr><td>1</td><td><%=item %> </td></tr></section:item><section:footer></table></section:footer></component:GridComponent>
```

As usual, source code is at [http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/](http://svn.castleproject.org:8080/svn/castlecontrib/viewengines/aspview/trunk/), 

Note that for a successful build you'd need to fix the siteRoot parameter in vcompils's app.config, to point to the actual physical path to the test site's root

