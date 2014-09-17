---
layout: post
title:  "How would you test that?"
comments: true
tags: [architecture,testing,altnetuk]
---


Given the following code:

```
public void UpdatePerson(int id, string name){ Person p = peopleRepository.Get(id); p.name = name; peopleRepository.Update(p);}
```



One answer would be (using a pseudo mocking framework):

```
Person p = new Person();
Expect.Call(peopleRepository.Get(0)) .Returns(p);
Expect.Call(peopleRepository.Update(p)); 
... 
service.UpdatePerson(0, "MyName");
```



Other approach would be (using pseudo coding again):



```
Person p = CreateAndInsertToDB();service.UpdatePerson(p.id, "New Name");FlushAndRecreateTheSession();Person updated = GetFromDB(p.Id);Assert.Equal("New Name", updated.Name);
```

What would you do, and why?



(I'm tagging that also under altnetuk as it has been inspired by a session around test-granularity, mocking frameworks, etc.)

