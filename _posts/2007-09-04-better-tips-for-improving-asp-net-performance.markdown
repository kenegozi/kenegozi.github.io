---
layout: post
title:  "Better Tips for Improving ASP.NET Performance"
comments: true
tags: [asp-net-2-0,client-side]
---


So you say "Hey Ken, that's not fair. Ranting about the bad performance tipsisn't good enough. We want GOOD tips".



I won't say that those are necessarily GOOD tips, however they are probably BETTER.



without further ado, I'll quickly pull out of my hat my somewhat better tips:



1. Learn to use caching, both for dynamic and static content.

2. **TURN OFF ViewState (and ControlState)**. Find better solutions. Really. You do not need the viewstate to get txtName.Text. Just use the damn Form["txtName"], or writeTypeSafe wrapper around the Form (or Request.Items) collection. 

3. Learn SQL. 

4. Use caching.

5. ADD Client-side validation to the Server side validation. DO NOT remove server side validation, as every javascript beginner can bypass client-side stuff.

6. Avoid SELECT+N. 

7. Cache responses where appropriate.

8. Have as least external files as you can. Join all .js to one file. join all .css to one file. It takes a LOT more time for the browser to open a connection to the server, that to actually get those lousy extra 5k. And out-of-the-box, browsers can have a maximum of 2 connections to the server at once.

9. Cache DB queries when appropriate

10. Enable GZip on IIS

11. Use the "COUNT" keyword in SQL, rather than the"Count" or "Length" .NET properties

12. Did I mention caching?

13. Avoid Page where it can be replaced with an IHttpHandler. That code is BAD:

```
public class SomePage : System.Web.UI.Page{    protected void Page_Load(object sender, EventArgs e)    {        Response.Clear();        Response.Write(something);    }}
```

