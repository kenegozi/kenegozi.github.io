---
layout: post
title:  "Some improvements in AspView - revision 47 is out"
comments: true
tags: [asp-net-2-0,castle,monorail,aspview]
---


What's new?

1. siteRoot has been added to AspViewBase, so you can ditch the "string siteRoot" from the declerations area.

2. Some permormance improvements. Instead of using "Activator.CreateInstance" everytime a view is to be rendered, a hashtable with ConstructorInfo objects is generated upon reading CompiledViews.dll. This was taken from the c# version of Brail

3. A new syntax for subviews:

you can use 

```
   1:  <subView:MyMenu item="menuItem"></subView:MyMenu>
```

instead of 

```
   1:  <% OutputSubView("MyMenu", Helper.Dict("item", "menuItem")); %>
```

take note the <subView:Blah /> is not currently allowed. I'll fix it shortly.

the link is [here](http://kenegozi.com/blog/GetFile.ashx?FileName=AspView_rev47.zip)

