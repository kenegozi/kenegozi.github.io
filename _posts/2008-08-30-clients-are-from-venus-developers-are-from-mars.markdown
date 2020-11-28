---
layout: post
title:  "Clients are from Venus, developers are from Mars"
comments: true
tags: []
---


Things to keep in mind: 



Through my life as a software developer, usually my clients did not possess the same technical skills that I had.

They did not take "Systems Analysis and Design" course in collage, and they could make very little sense out of UML diagrams. 

Blueprints and such were waaaaay to abstract for them.



And guess what? I also lacked their knowledge. At best I had a vague idea about their field, and about the domain of their problem which the project I was working on should have addressed.





We spoke different languages.





You too, dear reader. Yup. 



See the "[How many points](http://gojko.net/2008/08/29/how-many-points-are-there-in-a-five-point-star/)" problem to understand the possible mismatches you can have when interpreting abstract models.



So if a developer (or a software company, whatever) provides a client with a thick "project analysis" paper, loaded with, ehm, blueprints, UML diagrams and such, then after wasting a lot of time on arguments, the client will sign on a spec they did not fully comprehend, and does not correlate with their needs and whishes. 

At the end of the development phase you'll get a product that do not incorporate the domain knowledge, and give a partial solution to the client's pain. The client's satisfaction will be "arrr, that's O.K." at best. Even it will have super-duper-shiny-ajax-powered-SOA-2.0-3D-effects-with-silverlight/wpf/air/flash-thingy

After the 'cool' effect is over, the client just have to learn to live with the not-perfect solution







The only a possible recipe for dealing with that:

- Specs should be stated in plain human readable language. Call it user stories, backlog, feature-list or whatever - as long as both clients and developers can SEE it and UNDERSTAND it
- Short release cycles with client acceptance tests. That will improve visibility of the project's status along it's progress, thus catching interpretation mismatches soon
- Embrace Domain Driven Design with it's focus on client-developer interaction, and emphasis on the Ubiquitous Language
- Allow easy route to fix or replace bits of the system with minimal impact of the whole system - using good engineering practices and comprehensive tests


