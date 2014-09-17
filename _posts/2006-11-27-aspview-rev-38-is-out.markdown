---
layout: post
title:  "AspView rev 38 is out"
comments: true
tags: [asp-net-2-0,visual-studio,visual-studio-2005,c-sharp,castle,monorail,aspview]
---


What we have:

1. Default Helpers are now declared in the AspViewBase. It means that you can use <%=FormHelper.LabelFor(...) %> without the need to declare the helper at the begining of the view.

2. the compiler was refactored to allow for better testing, and for implementation of further view languages. vurrently I've started with VB.NET but it is not working yet, since I have no time to make sure the VB syntax is correct. The tests of the compiler are missing due to some stupidity on my side, of not commiting the TestCase ...

I've wanted to let svn access but I have some trouble with that. I've started a sourceforge project but I cannot upload the repo to the site. I did all they've asked on the site but the import process reporting failure no matter what I do. I guess that the best way will be if the Castle team would allow AspView into it's codebase, maybe on the Contrib repo to begin with ...

So meanwhile you can download the current bits from [here](http://kenegozi.com/blog/GetFile.ashx?FileName=AspView_rev38.zip).

Keep me posted,

Ken.

