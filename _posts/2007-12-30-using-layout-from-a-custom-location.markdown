---
layout: post
title:  "Using Layout From a Custom Location"
comments: true
tags: [castle,monorail,aspview]
---


It's been asked on the Castle mailing list, and was implemented for NVelocity (and for Brail too, I think), so now it works on AspView, too.



So, doing:

```
[Layout("\custom\layout")] public class MyController ...
```

Would use the template from Views\Custom\Layout.aspx

