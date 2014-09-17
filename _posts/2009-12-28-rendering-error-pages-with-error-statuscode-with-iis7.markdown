---
layout: post
title:  "Rendering error pages with error StatusCode with IIS7"
comments: true
tags: [miscellanea]
---


Took me a while to solve this, so I hope it will help some other sorry arse one day.

&#160;
Scenario
Wanting to render an error page programmatically in my web app (say a fancy 404 page that can't be served as a static content, as it might contain the current user's name, etc.)

I catch the error in the app (Monorail, so I use a Rescue, but do whatever feels good), render the markup, and set the ResponseCode to 401.

* Same trouble will occur with any 40x/50x response' status code

&#160;
Problem
IIS will render it's own static 401 ( or any other 40x/50x ) page

&#160;
I did check that
customErrors section is set to off, as it used to work in IIS6 just fine

&#160;
What I missed out
IIS7 introduced the httpErrors section (under system.webServer of course), which is used to tell it what to do with custom errors.

The sub-key I was looking for was <errorMode> with the value set to Detailed.

So, adding

```
<system.webserver>
   ...
   <httperrors errormode=&quot;Detailed&quot; />
   ...
</system.webserver>
```

made my problem go away.
Also notice that
you might need to allow setting that value in your web.config, by going to c:\Windows\System32\inetsrv\config\applicationHost.config, allocating the declaration of the section named “httpErrors” and set its overrideModeDefault attribute to &quot;Allow&quot;.&#160; 

