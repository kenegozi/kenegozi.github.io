---
layout: post
title:  "Object Oriented Mess"
comments: true
tags: [design]
---


Following the “why I do not like (certain widely used paradigms in the ) Ruby (community), I would like to bring yet another specimen representing the same problem.


DISCLAIMER:
I'm writing this on a 10hour flight, that got extended by 3 more hours of waiting at the gate because apparently it take 3 hours to fix “a software problem with the passengers cabin lighting system”. I'm not joking you.I'm tired, pissed off, and terribly missing my family whom I did not see for almost three weeks. Hence – I might get distracted, digress here and there, and sound a bit impatient at times. Leave now if you possess a soft soul (but do click on the flashy ads on the sidebar before you do that).This is also going to be a much longer post than my usual ones I've had for the last two years +. I hope to make that happen more often, as I have some more free time now that I left Delver. More on this on a (near) future post. 


It's not you, it's all of you
Since I've been doing mostly rails and ruby lately, my examples would probably have a ruby color spread all over then. Don't get me wrong though, this is not going to be an anti-Ruby rant. People certainly are doing the exact same thing in the Java and .NET worlds, especially people who have “read” Evans book but never really groked it. They are 100% certain that OOP is about “making your objects smart” and forgetting what an object in that sense should actually represent (hint – encapsulate business goals and processes in well defined boundaries). Perhaps the way OOP is taught universities is to blame (Animal Kingdom? really?) as they concentrate on the technicalities of Is-A vs Has-A and not on how to approach modeling in the first place. In order to make things worse, I will use the terms 'class', 'object', 'instance' and 'whuuzaa' interchangeably. 



So, where was I? ah – another concrete example for bad design caused by oversimplified OOP implementations

.url

(or .family_name, whateva)


OOM – Object Oriented Mess
So you have your domain objects (or Models if you've never heard about other frameworks but Rails) and since you did not read Evans book you think that you should “encapsulate their logic” and by that you refer to the .url property. Cuz the User class (/object/model/entity/whuuzaa) *represents a real user* and *that is the model* for the user. So in your application (say a website) you'd want to include urls to the user's profile page, so you'd be giving your view engine (template, jsp, view script, xib, you-get-te-point) a bunch of Users, and then you'd call .url on each of them – and voila – the “generate user profile url” problem got completely abstracted !. You'd even have a IHaveUrl interface (or UrlContainer if you're from java, or a creepy act_as_urlifiable Module if you're from … enough with that) and then you can enjoy the fun of calling .url on *anything*.IT WOULD JUST WORK.

Until it doesn't.


One model to rule them all
Is there really a single way to represent a User in your system? I bet that a User instance used to populate the User Profile page is quite different and a lot richer than a User instance that would be used in a recurring list of the User Profile's friends list, which would require perhaps only name, image, and guess what – url ! 


What's that thing doing here?
Within a recommendation-engine service, that runs complex calculations on the users and their related activities on the site to get relevance scores, the url does not mean anything. If the User Entity is used there then the .url method is just hanging there meaning nothing, contributing nothing while perhaps adding complexity and confusion 


Oops, sorry, I didn't mean to say *that*
And to make it worse – on other parts of the site (think an admin back-end) a user's url can mean a completely different thing – like a url to the whereabout of the user's administration page, or whatnot.


Hey there are other people here
Put the url example aside, if you do a feature, which is relevant for a certain part of the application, yet you choose to expose your code to central part of the system (such as a central User class), then you end up stepping on other people's toes. And they most certainly will step on yours. At some point in the future some bugs in your feature will creep in, and you'd have hard time locking the problem down, before noticing that someone else used the code you exposed on that entity for the sole purpose of your feature, for a whole different thing, giving that code a different meaning, which inevitably clashed with yours. 


So what would YOU do Ken?
Encapsulating features in their own set of classes would be the way to go. The surface of the system that need to be aware of a feature should be kept to minimum. 

I think that it would be a safe bet to say that the process of generating a profile page url for a given user (or any other 'thing' in the system) should live within the boundary of the presentation code, probably as a helper or a static method (don't get me started on the never-ending testability argument – that's a whole different post. Just make your code work already and stop arguing about testability. already !) You might want to add some syntactic sugar there to get the .url thing working (like a c# extension method or a Ruby module) but I'd avoid even that. It is good avoid a code that might have dual meanings. I'd take &lt;%= Urls.ProfilePage(name, id)%&gt; (maybe with a couple of overloads) over &lt;%= user.url %&gt; any day of the week. Especially on Fridays when I don't have time for surprise-bugs-oh-crap-my-weekend-is-going-to-be-short-again.


You're the best reader in the world
Btw, if you got to this point without either getting bored or pissed at me, then hurray to you. You are either a good friend, totally drunk, or both. 

