---
layout: post
title:  "HtmlHelper vs. html tags"
comments: true
tags: [castle,monorail]
---


Should I use HtmlHelper?

take a look at this:
${HtmlHelper.Form('/Home/Search.rails')} ${HtmlHelper.LabelFor('q','search:')} ${HtmlHelper.InputText('q', '', 50, 50)} ${HtmlHelper.SubmitButton('Search')} ${HtmlHelper.EndForm()} 
and that:
&lt;form method="post" action="Home/Search.rails"&gt;&lt;label for="q"&gt;Search:&lt;/label&gt;&lt;input type="text" name="q" /&gt;&lt;input type="submit" value="Search" /&gt;&lt;/form&gt;
Okay. So AjaxHelper is cool, and maybe FormHelper will have someAdded Value in it, but I cannot figure out yet the benefits of using HtmlHelper, especially for non-data elements, such as &lt;label&gt;

If you have a good reason to use HtmlHelper, please enlight my.





