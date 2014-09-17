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
<form method="post" action="Home/Search.rails"><label for="q">Search:</label><input type="text" name="q" /><input type="submit" value="Search" /></form>
Okay. So AjaxHelper is cool, and maybe FormHelper will have someAdded Value in it, but I cannot figure out yet the benefits of using HtmlHelper, especially for non-data elements, such as <label>

If you have a good reason to use HtmlHelper, please enlight my.





