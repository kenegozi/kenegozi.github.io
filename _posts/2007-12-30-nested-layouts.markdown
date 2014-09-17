---
layout: post
title:  "Nested Layouts"
comments: true
tags: [castle,monorail,aspview]
---


A cool feature, repeatedly asked for by users (of AspView, and of MonoRail in general).



When stating the layout name in the controller, you use a comma separated list of layouts to be applied, from the most general (outer) inward.



Example:

in the controller:

```
[Layout("Site, Admin")]public class UsersController : SmartDispatcherController{ public void Index() { }}
```

and given those schematic templates:

- (layouts\site.aspx):![SiteLayout](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/NestedLayouts_104EF/78a6d860-81fe-4660-af25-0e99db002a10.png)
- (layouts\admin.aspx)![AdminLayout](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/NestedLayouts_104EF/b49097cb-8d59-4cd2-a6cf-335efdc787d2.png)
- (users\index.aspx)![Index](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/NestedLayouts_104EF/c8f9a805-5caf-4448-82ad-1e30a5542230.png) 




We'd get:

![rendered view](http://kenegozi.com/Blog/uploaded/WindowsLiveWriter/NestedLayouts_104EF/684e8604-0bdd-46be-b9fe-b6433e527f3a.png)

