---
layout: post
title:  "Context aware service overrides - customising behaviour"
comments: true
tags: [architecture]
---


Assume you are building some kind of an information system. Say it's an issue tracker (yeah I know, I have a blank spot in the creative-part of my brain).



Now say you want some visual customisation based on the current context - like a different look'n'feel for each customer on a multi-tenant application, or a slightly different menu for an Admin.

Kinda easy - right? you'd stick some overriding CSS rules for the former (say on CUSTOMER_ID.css), and some kind of a simple view logic for the latter (say &lt;% if (isAdmin) { %&gt; ... &lt;%}%&gt;, or some type of CodeBehind crap if you're a WebForms lover).



But - what if you want to customise the behaviour according to context? say that for some actions, for a given customer, an email should be sent, or a webservice be called, or some default data should be set for a given form.



The first option would be to create an interface ICustomerActions, and a DefaultCustomerActions which will be in charge of the, well, default behaviour. then for each customer you'd derive from DefaultCustomerActions (or directly from the interface if it's completely different).

Then you'd use some kind of a Factory (or your container) to resolve the needed ICustomerActions instance according to the context (say a customerId in the Session).



There are two problems in this approach
- A possible and probable break of SRP. The ICustomerActions interface will grow to be in charge of lots of things, on different parts of the logic, some that belongs in view rendering, and you end up with a huge Mega-Class. That's bad.
- The inheritance will start to be annoying. Cuz a new customer#3 will behave like customer#2 in some of the situations, and like customer #1 in others, like the default on some cases, and have a specific implementation for ICustomerActions.SomeTypeOfThing. So you will probably end up with a bunch of template methods lying around, and logic scattered around the inheritance tree.



So how do you think I solved this problem? How would you do that?

