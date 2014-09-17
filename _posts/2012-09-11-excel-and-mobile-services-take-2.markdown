---
layout: post
title:  "Excel and Mobile Services take 2"
comments: true
tags: [azure,mobileservices]
---


I have updated the code from my recent post, [Using Excel to edit Azure Mobile Service table data](http://kenegozi.com/blog/2012/09/07/using-excel-to-edit-azure-mobile-service-table-data), to support Insert and Update.

In order to delete a record, you'd need to have a cell from that record selected, then click on the Delete icon on the Add-Ins ribbon menu. The only requirement is to actually have a value in the first cell of that line.

In order to Insert a record, you'd need to set the fields, and keep the id empty, then click on the Add (plus) icon on the Add-Ins ribbon menu when a cell in that new record's row is selected.

