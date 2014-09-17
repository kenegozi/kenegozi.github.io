---
layout: post
title:  "Inheritence in Castle's ActiveRecord"
comments: true
tags: [c-sharp,castle,activerecord]
---


The reference I've used whilelearning to use Castl'e ActiveRecord implementation is the Blog/Post demos that can be found on Castle's site.

Let's look at the Type Hierarchy example, that can be found here.

It shows an implementation of a class diagram that look a little bit like this:![Class Diagram](http://kenegozi.com/blog/uploaded/Company_Entity_Person_Class_Diagram.GIF)

Let's look at the code :
[ActiveRecord("entity"), JoinedBase]publicclassEntity : ActiveRecordBase{privateint _id;[PrimaryKey]publicint Id{get { return id; }set { id = value; }}}[ActiveRecord("entitycompany")]publicclassCompanyEntity : Entity{privateint comp_id;[JoinedKey("comp_id")]publicint CompId{get { return comp_id; }set { comp_id = value; }}}[ActiveRecord("entityperson")]publicclassPersonEntity : Entity{privateint person_id;[JoinedKey("person_id")]publicint PersonId{get { return person_id; }set { person_id = value; }}}
But look what happens. since the Id property on entity is public and inherited to the subclasses, you get something like this:![Should I use .Id or .PersonId?](http://kenegozi.com/blog/uploaded/IdOrPersonId.GIF)

So there is a duplicate field here !!!. and it's not only a getter-setter thingie. It also have different private members.

My solution for this is to virtualize the base Id, and protectedize (hehe) the _id member, like this:

[ActiveRecord("entity"), JoinedBase]publicclassEntity : ActiveRecordBase{protectedint _id;[PrimaryKey]publicvirtualint Id{get { return id; }set { id = value; }}}[ActiveRecord("entitycompany")]publicclassCompanyEntity : Entity{[JoinedKey("comp_id")]publicoverrideint Id{get { return _id; }set { _id = value; }}}[ActiveRecord("entityperson")]publicclassPersonEntity : Entity{[JoinedKey("person_id")]publicoverrideint Id{get { return _id; }set { _id = value; }}}
Now it makes more sence:![I should use .Id](http://kenegozi.com/blog/uploaded/NowOnlyId.GIF)




And before you hit me with a big stick - I do know of ActiveRecordBase<T> . :) the above code is for demonstration purposes only, not to be Copy&amp;Pasted to your Brand-New-Best-Erp-Ever-Made-And-Will-Make-You-Rich

