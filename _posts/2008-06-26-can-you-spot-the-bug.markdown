---
layout: post
title:  "Can you spot the bug?"
comments: true
tags: [c-sharp]
---




DISCLAIMER:

If you are a potential client of mine, or rather a current one, please stop reading NOW, as it's one of these embarrassing "I am sometimes too stupid" posts.







Oh my.



That's how my 3am code can look like:



{% highlight c# %}
   1:  var page = filter.Page.GetValueOrDefault(1);   2:  var pageSize = filter.PageSize.GetValueOrDefault(30);   3:  var firstResult = (page - 1) + pageSize;{% endhighlight %}



It's for NHibernate style paging (i.e. firstResult is for a 0 based index)



Spotted (thanks to DbAwareIntegrationTests) and fixed at 6pm

