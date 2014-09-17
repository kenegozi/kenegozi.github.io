---
layout: post
title:  "My presentation layer of choice: Brail over Castle's MonoRail"
comments: true
tags: [architecture,castle,monorail]
---


I've evaluated some methods to rail and to MVC in the .NET world, without using webforms.

The first method I tried was to treat aspx's kind'a like old ASP, no server controls, allowing multiple forms, no __VIEWSTATE __EVANTVALIDATION __UGLYHIDDENFIELD in the generated markup, and calling actions on the server, implemented as Controllers over ashx's, or directly linking to a new .aspx view (if no operation is required).It allowed me to create super clean html, but it has it's limits, since I've had to implement a mechanism for MasterPages and UserControls, and that suck.There is [BooWebness](http://www.boo-lang.org/BooWebbness/Home/Index.ashx). Seams like a great effort, and I like the natural .ashx approach, but I am not very into its whole framework there.

Then I've went after [MonoRail](http://www.castleproject.org/index.php/MonoRail).Cool.Has a lot out-of-the-box, including MasterPages(Layouts), UserControls(ViewComponents), Markup Helpers, AjaxHelpers, and a large community. Being part of Castle is a Big Bonus. I believe in Castle. I've been using Castle's ActiveRecord for a while and I find it almost too good to be true. So MonoRail fits well in Castle's world, so I'm into it. 

Now I needed to choose a view engine.[NVelovity](http://www.castleproject.org/index.php/MonoRail:NVelocity) was disqualified for its discontinuesness, and the need to learn something new and narrow. Not to mention the fact that it's interpreted.The WebForms hybrid just doesn't look too good.[Brail](http://www.ayende.com/projects/brail.aspx) from [Ayende](http://www.ayende.com/) is very nice. Learning Boo isn't like learning a new thing, since I've had a little taste of it in the past, and since it's .NET, and since it has a very readable syntax that any C#/VB.NET/Python/Perl/java/you-name-it developer can learn in minutes. Brail is a lovely name, and I can count on Ayende to keep developing it as much as it's needed.

So Brail over MonoRail it is.

Posts about the matter will come shortly.

