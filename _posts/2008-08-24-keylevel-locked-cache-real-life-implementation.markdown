---
layout: post
title:  "Key-level locked cache - real life implementation"
comments: true
tags: [asp-net-2-0,c-sharp]
---


Following [my post on key-level locked cache](http://kenegozi.com/Blog/2008/08/23/lockers-dictionary.aspx), I got the following piece of code from my friend Moran Benisty, implementing the same idea over XmlDocuments which is being loaded over the Internet, and ASP.NET's Cache.



This is a real life code. He's using it on a very large-scale website in production.



As usual - use at your own risk, and be kind enough to share thoughts and improvement ideas here for his use.





```
public static class XmlService
{
    private static Dictionary _locks = new Dictionary();

    public static XmlDocument GetXml(string url)
    {
        return GetXml(url, new TimeSpan(1, 0, 0), false);
    }

    public static XmlDocument GetXml(string url, TimeSpan timeToHold, bool autoRefresh)
    {
        if (HttpRuntime.Cache[url] as string == "Failed")
            return null;

        XmlDocument xml = HttpRuntime.Cache[url] as XmlDocument;
        if (xml != null)
            return xml;

        if (!_locks.ContainsKey(url))
            lock (_locks)
                if (!_locks.ContainsKey(url))
                    _locks.Add(url, new object());

        if (HttpRuntime.Cache[url] == null)
            lock (_locks[url])
                if (HttpRuntime.Cache[url] == null)
                {
                    xml = LoadXml(url);
                    if (xml != null)
                        HttpRuntime.Cache.Insert(url, xml, null,
                            DateTime.Now.Add(timeToHold),
                            System.Web.Caching.Cache.NoSlidingExpiration,
                            System.Web.Caching.CacheItemPriority.NotRemovable,
                            delegate(string dataKey, object value, CacheItemRemovedReason reason)
                            {
                                if (autoRefresh)
                                    GetXml(url, timeToHold, autoRefresh);
                            }
                    );
                    else
                        HttpRuntime.Cache.Insert(url, "Failed", null, DateTime.Now.AddMinutes(5), System.Web.Caching.Cache.NoSlidingExpiration);
                }

        xml = HttpRuntime.Cache[url] as XmlDocument;
        return xml;
    }

    private static readonly ILog _errorlog = LogManager.GetLogger("ErrorLogger");
    private static XmlDocument LoadXml(string url)
    {
        try
        {
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(url);
            request.Timeout = 3000;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            XmlDocument xml = new XmlDocument();
            xml.Load(response.GetResponseStream());
            return xml;
        }
        catch (Exception ex)
        {
            _errorlog.Error(ex.Message, ex);
            return null;
        }
    }
}
```



I'd have switched XmlService with KeyLevelCacheService, XmlDocument with T, and LoadXml with Func&lt;T&gt;, then have a separate XmlService use KeyLevelCacheService internally.

