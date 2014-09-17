---
layout: post
title:  "On Flying, Driving and Programming"
comments: true
tags: [miscellanea]
---


Let's talk about these three activities, or rather on aspects of them.



Assuming one want to get from London to Cambridge, by car. The directions would be something like "Take the M11 to north, leave at Junction 12 toward Cambridge and you're there".

One might require slightly more explicit instruction, such as "To get to the M11, you'd need to leave the M25 on junction 27", or "On junction 12 you'd want to turn to the right toward Cambridge".

At no point would someone need to be told to "Turn the steering wheel to the right" or "Do not forget to use the clutch when changing gears".



When driving, there are:

- **intention**: either implicit ("Leave ... toward Cambridge") or explicit ("you'd want to turn to the right toward Cambridge")
- **mechanics**:Turn the steering wheel, use the clutch
- **infrastructure**:The steering wheel's movement is transferred to the front wheels, which turn to the desired side, then the various physic powers are causing the car to make the turn




When flying a small aircraft, there are several things that affect it's movement:

There's the Elevator which affects horizontal shifts, controlled by the moving the stick backwards and forwards. 

There are the Ailerons which generates rolling motion, and controlled my moving the stick sideways.

There is the Rudder which controls the nose position, and controlled by kicking pedals with the pilot's feet.

And on single motored aircraft, even changing the engine's speed affects the "steering" as the radial movement of the propeller is inflicting different airflow on the wings, causing a slight difference in the elevation.

However, flight directions include things like "Fly to point A, use bearing X, keep altitude Y". At most, a flying student would be told to keep the aircraft's Nose at a specific position in the Horizon. 

I remember that in flight school, when we were being taught about simple manoeuvres, the language used by the instructors was of the **implicit intention** kind. However, there was a guy that kept asking "so what am I supposed to do with the stick now?". He of course was one of the first to be kicked out of there.



All of the above apply to programmers, too.



In forums and mailing lists, sometimes someone asks a question, that gets answered with the needed **intention**, but that someone keeps asking for the exact **mechanics**. For example:

Q: How can disable the controls on a web page after a certain button click?A (implicit intention): Hide the whole page with another, transparent element.

Q: How do I do that?A (explicit intention): Use DOM manipulation and DHTML to add a div with the size of the entire page, positioned over the page.

Q: How do I do that?

A (more explicit): some pseudo code.

Q: I tried to run this code you've sent but it throws errors. Can you please send me the correct code?A (mechanics): function disableControls() { ... }



You get the point, right?



If not?

a. When asking for help, expect to get the intention. That usually should be enough.

b. If you really can't figure out the code (at least to create an 'almost working' implementation) out of intention, then you probably are in the wrong business. 



As for infrastructure - a driver does not have to know anything about Newton's Laws of Motion. However a **professional** racing driver has to understand the basics of that in order to be as good as he needs to. And definitely not being troubles by the angle of the steering wheel. That should become naturally. Just as transferring intentions into working code should come naturally for a programmer.

