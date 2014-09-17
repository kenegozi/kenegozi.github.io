---
layout: post
title:  "ASP.NET MVC3 Model Validation using Interface Attributes"
comments: true
tags: [tools,asp-net-mvc]
---


After reading [Brad Wilson's post on that](http://bradwilson.typepad.com/blog/2011/08/interface-attributes-class-attributes.html), I thought to myself:

Brad is 100% correct regarding the way the CLR treat interface attributes, but this does not mean the users should not be able to use validation attributes on model interfaces

So I sat down to extend the model validation to do just that: (see [https://gist.github.com/1163635](https://gist.github.com/1163635) if it is broken here)



Now I know it is hacky – it should not go on a FilterAttributes() method. If I had access to the sources I'd have added a virtual “GetValidationAttribute” method on DataAnnotationsModelMetadataProvider… (hint hint hint)

