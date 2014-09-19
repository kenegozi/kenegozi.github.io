---
layout: post
title:  "Redirecting syndication link from dasBlog's one to the new one"
comments: true
tags: [asp-net-2-0,c-sharp,monorail,blog-engine]
---


TodayI was informed by [Dror](http://blogs.microsoft.co.il/blogs/drorengel/) that although I managed to redirect all requests to html/aspx url's on my blog (the ones that dagBlog was using) to the new pemalink format, I forgot to do the same for the old syndication link.

So that link was [http://kenegozi.com/blog/SyndicationService.asmx/GetRss](http://kenegozi.com/blog/SyndicationService.asmx/GetRss)and now it's [http://kenegozi.com/Blog/Syndication/Atom.aspx](http://kenegozi.com/Blog/Syndication/Atom.aspx)

I could've used the monorai redirection module that is already in use on my blog, but I chose to do it differently, with a dedicated handler, just to show how easy it is do to such stuff, even without a full blown redirection engine.

So, I've added this:

```
publicclassSyndicationRedirectionHandler : IHttpHandler 
{
    #region IHttpHandler Members
    publicbool IsReusable
    {
        get { returntrue;}
    }

    publicvoid ProcessRequest(HttpContext context)
    {
        context.Response.StatusCode = 301;
        context.Response.Redirect("http://kenegozi.com/Blog/Syndication/Atom.aspx");
    }

    #endregion
}
```

and that line into web.config:


&lt;addverb="*"path="SyndicationService.asmx"type="KenEgozi.Com.Weblog.SyndicationRedirectionHandler, KenEgozi.Com.Weblog"/&gt;


Voila.

