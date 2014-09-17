---
layout: post
title:  "Agile Architecture talk by Johanna Rothman"
comments: true
tags: [architecture]
---


Last week I went to IASA Israel meeting, where we got to listen to [Johanna Rothman](http://www.jrothman.com) of the Pragmatic Programmer fame, talking about the role of architects in the Agile projects world.



I've been taking notes during. Consider them a transcript + stream-of-thoughts.

here we begin:



so, is an architect role on an agile team should be considered as an
Oxymoron?
A common mistake is to think that architecture is about doing frameworks and designs up-front !

Some people think that the fact that in agile-style managed projects the architecture evolves with time, means that there is no place for an architect on such projects.

This will cause the evolvement to be scattered, and a guiding hand is needed to make all of the small changes drive the overall design towards a meaningful direction which will support the growth of business value.


Feature-itis
Pushing more and more features in expense of sparing time for determining long-term architecture goals will lead to a hole filled with technical and architectural debt, causing future features and adjustments be more complicated than needed, and hurdling the project in the long term. 

My observation – feature-itis is even worse because of it usually comes with the lack of proper user-testing. A feature imo is a hypothesis, that has to be proved, so a proper ground (a/b testing, explicit and auditable metrics etc.) has to be in place, and developed alongside the features being cranked out .
Concurrent projects
A product (and at a higher level – a program) is often made out of a few projects, each lead by a different person/division/etc. A project is made of many features and feature-sets. Just like in software, you need to lower coupling between projects, and make feature-sets cohesive. This needs to happen both on the product level (the Principal PM's responsibility), but also on technology level, which is the architect's responsibility. Developers usually concentrate on a feature, sometimes on a feature-set. Testers have broader sight, but they would usually be working too details, thus not seeing the overall picture also. It is the responsibility of the architect(s) to see that the project is making sense technically across the whole product .


Some Scrum Master observations:- Scrum is not the only agile FW  
- A Scrum Master is not a project manager  
- He does not manage technical risks  
- He is not the architect



Communication Paths
equals (N*N-N)/2

hence with 10 people there are 45 communication paths!


Architect on an agile team?
So what does the architect has to do, which no one else on a Scrum team usually do?
- Wayfinding (what is waiting ahead), roadmap exploration  
- Scouting (potential risks and paths)  
- Architectual spike / vertical prototype – with bigger scopes than a 'traditional' XP design spike, and would not fit in the regular sprint/release cycles




Timing
Often managers ask: “what is the latest responsible moment for making architectural decisions”?

Johanna's view is that the correct question is : “what is the ***most*** responsible moment for making architectural decisions”?

You should not try to postpone important decisions, but instead make them at the most critical times.

My observation – for any project of non-trivial scope, the proper time for architectural decisions is always. That is, there should always be at least one person who stops and think about larger picture, about future paths, etc. (the things listed a few paragraphs back) and it has to happen all the time as the project evolves, not at some predefined spots.

