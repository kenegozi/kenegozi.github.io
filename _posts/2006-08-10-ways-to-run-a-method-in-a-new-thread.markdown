---
layout: post
title:  "Ways to run a method in a new Thread"
comments: true
tags: [c-sharp]
---



I'm going to explore a few ways to spawn new threads in c# 2.0.Let's say that we want to do a time consuming process, and that we do not need that the main program will wait for it to end.For the sake of the examples here, I'll assume that the long run process is sending an e-mail to "you", from "me" and the message's body is "the body of the message". the email will be processed by a thread-safe(1) static method, called SendMail(string, string, string) that resides in the Utilities class. How convenient.(1) A thread-safe method is an enchanted, voodoo-enabled method that behaves well under multithreading (2) environment.(2) Multithreading is a cool name for the ability to knit long sleeved shirts(3)(3) Disregard the last three comments. Really, you should.The non-multithreading code looked like this:{...Utilities.SendMail("from", "to", "body");...}In the good old .NET 1.1 way, Thread wasn't really able to run a method with arguments, so you should have built a wrapper for that. Something like:class Program{publicstaticvoid Main(){SendMailHelper sendMail =new SendMailHelper("from", "to", "body");}}class SendMailHelper{public SendMailHelper(string from, string to, string body){_from = from;_to = to;_body = body;Thread t =new Thread(Run);t.Start();}publicvoid Run(){Utilities.SendMail(_from, _to, _body);}}.NET 2.0 offers an overload for Thread's constructor: Thread(ParametrizedThreadStart), that should help with that.ParametrizedThreadStart is a delegate that accepts an object as it's argument. So the naive thing to do is to wrap the method in a method that accepts an object, and call the target method from within, unpacking the object during the process:class Program{publicstaticvoid Main(){Thread t =new Thread(RunSendMail);object[] parametersArray =newobject[] {"from", "to", "body" };t.Start(parametersArray);}void RunSendMail(object parameters){object[] parametersArray = (object[])parameters;Utilities.SendMail((string)parametersArray[0], (string)parametersArray[1], (string)parametersArray[2]);}}



Ugly.Luckily, .NET 2.0 comes with anonymous delegates, that simplifies things a lot:class Program{publicstaticvoid Main(){Thread t =new Thread(delegate() {Utilities.SendMail("from", "to", "body");});t.Start();}}But what if you want to be notified when the method completes? Well, you could try this:class Program{publicstaticvoid Main(){Thread t =new Thread(delegate() {SendMail("from", "to", "body", SendMailEnded);});t.Start();}publicdelegatevoid Callback();publicstaticvoid SendMailEnded(){Console.WriteLine("Do That ended");}publicstaticvoid SendMail(string from, string to, string body, Callback callback){Utilities.SendMail(from, to, body);if (callback !=null)callback();}}but, of course, now the code is less clean than before, because we have to declare the delegate Callback.



In the next few days I'll introduce a helper class (well, I think it helps) that encapsulate the things you need to do to spawn a new thread, pass parameters to it, and be notified on it's lifecycle.sources, etc. will be here soon, too


