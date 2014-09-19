---
layout: post
title:  "Build Succeeded - A happy red screen"
comments: true
tags: [castle,monorail,aspview]
---


can you guess why this makes me happy?

![Build_Succeded](http://kenegozi.com/blog/uploaded/windowslivewriter/buildsucceededahappyredscreen_c613/b7f64277-21b7-46e7-a831-112db41ae514.png)

This is the output of building Castle's trunk, both for .NET 3.5 and .NET 2.0, after inserting AspView into the core project. Took me a while as I had to:
- Change the Xunit tests into NUnit - to match the runner     wasn't too complicated, though I has to manually add [SetUp] and [TestFixture] everywhere, as they're not needed in Xunit
- Setting the correct Castle license snippet on every file
- Making the build pass and run all the tests correctly.     now that was a royal PITA, as part of the tests include compiling view templates from source files, and copying files to the build folder using NANT is not simple, as the <copy> task flattens the source directory structure. For now I settled on specifying each views folder in the build file but Im looking at improving that bit.

So, soon enough (hopefully by the end of this day) you'd be able to see AspView on the build server.

&#160;

Thx again for all of the users and patch-contributors for your faith in this library.

