---
layout: post
title:  "Some notes from MonoRail/AspView talk"
comments: true
tags: [castle,monorail,aspview]
---


Regarding my MonoRail/AspView talk from last week, [Oren Ellenbogen](http://www.lnbogen.com) has compiled a list of "things to remember". 

His list **(with my notes)**:


These are my notes about the lecture (as someone who wants to use it in our project at Semingo): 

1. DataBind of fields - nice migration from string into classes and vice versa.  

2. Need vcompile.exe in order to compile views.  

3. Cannot use [asp.net](http://asp.net)controls. Actually we don't need it in our project. **(Actually you can use 'em in MonoRail, if you are using the WebFormsViewEngine, but it hurts the simplicity of MonoRail too much)**

4. Routing is a must (think about url structure in our project). **(RoutingHttpModule will do the job)**

5. Learn about the mapping process between controllers, views &amp; parameters.  

6. Can use Castle.Validation in order to validate our business objects. **(Sweet)**

7. Ask Egozi about client side validation .vs. server side validation in MonoRail. **(Castle.Component.Validation integrates well into prototype's Real-Easy-Field-Validation, as well as some more js validation libraries)**

8. The controller can be injected with outside components (database, services etc) via Windsor, it's integrated easily. **(Another sweet spot)**

9. TDD is easy (controller and view(should we?)), we can mock everything! Don't forget to call PrepareController method (inside the base class). **(Actually PrepareController is Per Controller, so usually it will be called in [SetUp] of each Fixture)**

10. FormHelper &amp; DictHelper should make our life easier. **(and you can build your own Helpers easily)**

11. Controller fills PropertyBag(view use it) &amp; Flash (customer messages) – need to define a property in the view (make it string.Empty as default, if Flash["property_name"] wasn't filled).  

12. Use Flash property (dictionary) and RedirectToReferrer method to "refresh" page.  

13. Layout["X"] – like master page! **(I wouldn't say "like MasterPage" as it's just a simple ol' view, but it gives you a common markup frame for your views, in a similar way of a WebForms' MasterPage)**

14. ViewComponent – like a custom control (without the dark magic of [asp.net](http://asp.net)) but contains only UI rendering logic. 

15. component:CaptureFor -> we can use it to add javascripts, css files into the html header in the "master page". **(dude - It's a Layout, not a MasterPage ;) )**

16. We can override the "default" render of the controls via sections in the markup (define sections will override it). **(dude - It's a component, not a control;) )**

17. Egozi uses prototype (pasha as well?) as ajax framework. For Ajax – call CancelLayout method and RenderView("name_of_view"). This is called SubView and we use it in the markup with <subView:name_of_view />. **(Actually I tend to use prototype as a Javascript enhancement, where needed. If only 'ajax' calls are needed, jQuery or YAHOO.connection would be a better lightweight solution)**

18. We can use the Cache attribute (MonoRail) over the controller method (aka "Action") in order to avoid cacheability of urls (like Response.Exired = DateTime.Now.AddDays(-1) or something like this). **(You can also use Response.Cache as before, the attribute makes our code nicer)**

19. We can use Filter for authentication – read about it a little. Each action on the controller will trigger this before running (or after).  

20. PropertyBag uses string, eleutian solved it with a smart code generator (pre-build). Create typed Flash and PropertyBag if implementing interfaces. Read about it (ask Egozi for link). **(it's in **[Castle.Tools.CodeGenerator on CastleContrib](http://svn.castleproject.org:8080/svn/castlecontrib/codegenerator/trunk/)**, and also look at **[their blog](http://blog.eleutian.com/)**. The tool actually is being used for typing of your site's Controllers, Actions, and Views. As a side effect, they have created [DictionaryAdapter](http://svn.castleproject.org:8080/svn/castle/trunk/Components/General/DictionaryAdapter/) than can do the IDictionary<->TypedObject thing.And yuu can also hand-type PropertyBag and Flash.)**

 
Thanks Oren.

