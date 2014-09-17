---
layout: post
title:  "Code Templating: Advanced use of Delegates and Generics in c# 2.0 - A lecture by Oren Ellenbogen"
comments: true
tags: [architecture]
---


I've been yesterday to a lecture, given by my colleague Oren Ellenbogen, on the subject: "Code Templating – Advanced use of Delegates and Generics in c# 2.0".The lecture took place at Raanana's Microsoft offices, as part of the C++/C# User Group.He presented us with a way to refactor our recurring code blocks, by "separating the recurrent from the unique". This technique gives us the ability to have the recurrent logic (let's say, open a db connection, apply logging and transaction management, etc.) only on one place, aka – the code template, and then apply unique logic (actual select clause, or population of a Business Object from the database, etc.) where you need, using the template as a wrapper.The technique can be achieved using Interfaces, but thanks to the anonymous delegates and methods presented by C# 2.0, the process can be more "code viewer friendly".All that (and a more technical explanation) would probably be published on Oren's [blog](http://www.lnbogen.com/), during the next few days, so I'd advise on keeping an eye (or rss reader) on that one.One note about the lecturing technique he took – well, he did let the audience ask question anytime during the lecture, and actually answered their questions immedietly. This caused some flaws in the flow of the lecture, so I'd advice to be firm with the audience and postpone any question to a predetermined point (or points) in the lecture. The accompanying powerpoint presentation was lovely made, with large and readable fonts, nice images to emphasize important points, and the Visual Studio demos where pre-written, well documented, and presented well, using some nice add-ons ,such as "demo font" and Windows Magnifier.I hope too, that I'll be able to give a lecture to the group during the next months, if I'll have time to compose one …

