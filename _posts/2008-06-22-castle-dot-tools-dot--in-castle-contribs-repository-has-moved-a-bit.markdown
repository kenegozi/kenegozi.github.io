---
layout: post
title:  "Castle.Tools.* in Castle Contrib's repository has moved a bit"
comments: true
tags: [css,html,tools,castle,sql]
---


The tools (various small helper libraries) are now under [http://svn.castleproject.org:8080/svn/castlecontrib/Tools/](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/)



what's in there:
- [Castle.Tools.StaticMapGenerator](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.StaticMapGenerator/) - That one creates a typed tree representing js/css/image files on the site's filesystem. more here:[http://kenegozi.com/Blog/2008/01/17/staticmapgenerator-for-asp-dot-net-first-teaser.aspx](http://kenegozi.com/Blog/2008/01/17/staticmapgenerator-for-asp-dot-net-first-teaser.aspx)Which reminds me that I need to add .swf files to the mix ...
- [Castle.Tools.SQLQueryGenerator](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.SQLQueryGenerator/) - That one is for building plain old SQL strings in a typed and intellisense friendly way.more here:[http://kenegozi.com/Blog/2008/01/27/already-added-stuff-to-sql-query-generator.aspx](http://kenegozi.com/Blog/2008/01/27/already-added-stuff-to-sql-query-generator.aspx)
- [Castle.Tools.QuerySpecBuilder/](http://svn.castleproject.org:8080/svn/castlecontrib/Tools/Castle.Tools.QuerySpecBuilder/) - The new kid in the block. That's a tool that is used to build specs programmatically, which would later be translated to a SQL string for your flavour of DAL. The generated SQL is mostly ANSI compliant, apart from the Paging syntax which is TSQL only currently, but at some point I'll add an extension point to allow other syntaxes.I also have an external thing to make it extremely useful with NHibernate's ISQLQuery.I'll blog about all that when I'll have a little time.

