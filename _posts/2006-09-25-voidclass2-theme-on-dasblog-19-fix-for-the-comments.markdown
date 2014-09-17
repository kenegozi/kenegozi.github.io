---
layout: post
title:  "Voidclass2 theme on dasBlog 1.9 - fix for the comments"
comments: true
tags: [miscellanea]
---


I'll describe here the fix I've applied to the VoidClass2 theme, that was supplied with dasBlog 1.9, and that I use here.

The problem: When viewing a post with it's comments, the comments and the comments box (where you can add new comments) are hidden way down the scroll. You click on "view comments" and you see only the post, until you'll scroll a bit downward.

The reason: The theme uses css positioning instead of table positioning, and the sidebar (the one with the blogroll, categories view, etc.) is floating *over* the main content area. The good thing is that when the sidebar has ended, there is a lot more room for the content, but since the comments are taking a 100% width of the content area, and there is no room (since the sidebar takes some room), the comments are pushed down below the point where the sidebar ends.

The solution:

Edit the CommentViewBox.ascx file (on the blog's root):1. Fixing the "add comment" area width - note the new width value (highlighted):
<TABLEclass="commentViewTableStyle"  id="commentViewTable"  cellSpacing="1"  cellPadding="1" border="0"  runat="server"  width="70%">2. Adding a class to the comment area's div - the new stuff is highlighted: <div runat="server" id="commentViewContent" class="commentViewContent">


Edit the style.css file from the theme's folder, and add the following text:
/* Fix by ken egozi - comments view didn't fit in the content area *//* needs a fix in CommentsViewBox.ascx too, for the "add comment" section */.commentViewContent {width: 70%;}Now it should be fine.  


lemme know if it didn't work out for you.

