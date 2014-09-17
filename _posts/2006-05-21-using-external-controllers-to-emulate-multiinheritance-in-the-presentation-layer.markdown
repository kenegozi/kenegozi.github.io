---
layout: post
title:  "Using external controllers to emulate multi-inheritance in the presentation layer"
comments: true
tags: [asp-net-2-0,architecture]
---


The web application that we're working on now, uses ASP.NET 2.0's ObjectDataSource model, to bind to GridView and FormView in the front-end.Starting off, I've made a hierarchy of base classes to manage the data-binding and visual behaviors for Entity Pages (used to view, edit or insert a single entity) and Master-Details Pages (used to manage Master-Details scenarios).The base classes looked like:

```
class BasePage : Page { /* ... */ }class BaseEntityPage<T> : BasePagewhere T: Entity{public BaseEntityPage(){/// hook ObjectDataSource and FromView databind events}//... }class BaseMasterDetailsPage<T> : BaseEntityPage<T>where T: Entity{public BaseMasterDetailsPage() : base(){/// hook GridView databind events}//... }
```

Somewhere along the road, we've decided to change the first module being developed, to use ascx controls in a single page, instead of multiple pages in a master page (due to the fact that it became a nested master page, and vs2005 doesn't like it).So, a developer working on the change from Pages to UserControls, changed the base class to something like that:

```
class BaseUserControl : UserControl { /*...*/ }class BaseEntityUserControl<T> : BaseUserControlwhere T: Entity{public BaseEntityUserControl(){/// hook ObjectDataSource and FromView databind events}//... }class BaseMasterDetailsUserControl<T> : BaseEntityUserControl<T>where T: Entity{public BaseMasterDetailsUserControl() : base(){/// hook GridView databind events}//... }
```

Later on, we needed some standalone pages (not "mastered") to have data capabilities.We already had the databinding for UserControls, but now we would need to create empty "dummy" pages and host UserControls in them, which means that instead of aspx + aspx.cs files per page, we'll have aspx + aspx.cs + ascx + ascx.cs files !!!We could always keep the BasePage hierarchy next to the BaseControl hierarchy, but it will create an ugly duplication.If Multi-Inheritance was possible, we would have used something like:

```
class EntityController { /* ... */ }class BaseEntityPage<T> : BasePage, EntityController { /* ... */ }class BaseEntityUserControl<T> : BaseUserControl, EntityController { /* ... */ }
```

The solution is to use an external controller, we'll call the Manager, to do all the recurrent login that applies to both the Pages an the UserControls.We'll use an EntityManager that will manage both BaseEntityPages and BaseEntitycontrols, and a MasterDetailsManager that will manage BaseMasterDetailsPages and BaseMasterDetailsControls. Each and every page and UserControl will register itself with a manager.Now the base class look like that:

```
class EntityManager<T> {}class MasterDetailsManager<T> : EntityManager<T> { }class BaseEntityPage<T> : BasePagewhere T: Entity{private EntityManager<T> manager;public BaseEntityPage(){manager =new EntityManager<T>(this);}//... }class BaseMasterDetailsPage<T> : BaseEntityPage<T>where T: Entity{public BaseMasterDetailsPage() // not calling base() cuz we need a different manager{manager =new MasterDetailsManager<T>(this);}//... }class BaseEntityUserControl<T> : BaseUserControlwhere T: Entity{private EntityManager manager;public BaseEntityUserControl (){manager =new EntityManager<T>(this);}//... }class BaseMasterDetailsUserControl<T> : BaseEntityUserControl<T>where T: Entity{public BaseMasterDetailsUserControl () // not calling base() cuz we need a different manager{manager =new MasterDetailsManager<T>(this);}//... }
```

All the databinding logic and visual behavior control, is now placed in the managers classes, and the page or control itself, is only dealing with the things that are specifically needed by it.The developers on the team, when creating a new page or UserControl, only need to register their page or control to the appropriate manager, and not to mind all the databinding and behavior stuff.

