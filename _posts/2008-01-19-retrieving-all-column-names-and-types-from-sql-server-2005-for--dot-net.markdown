---
layout: post
title:  "Retrieving All Column Names And Types From SQL Server 2005 For .NET"
comments: true
tags: [tools,sql]
---


Nothing fancy.

With a little help from Moran Benisty, here's the script I use to get the metadata I need for the [SQLQueryGenerator](http://kenegozi.com/Blog/2008/01/19/sql-query-genrator.aspx):



```
SELECT schemas.name AS [Schema], tables.name AS [Table], columns.name AS [Column], CASE  WHEN columns.system_type_id = 34 THEN 'byte[]' WHEN columns.system_type_id = 35 THEN 'string' WHEN columns.system_type_id = 36 THEN 'System.Guid' WHEN columns.system_type_id = 48 THEN 'byte' WHEN columns.system_type_id = 52 THEN 'short' WHEN columns.system_type_id = 56 THEN 'int' WHEN columns.system_type_id = 58 THEN 'System.DateTime' WHEN columns.system_type_id = 59 THEN 'float' WHEN columns.system_type_id = 60 THEN 'decimal' WHEN columns.system_type_id = 61 THEN 'System.DateTime' WHEN columns.system_type_id = 62 THEN 'double' WHEN columns.system_type_id = 98 THEN 'object' WHEN columns.system_type_id = 99 THEN 'string' WHEN columns.system_type_id = 104 THEN 'bool' WHEN columns.system_type_id = 106 THEN 'decimal' WHEN columns.system_type_id = 108 THEN 'decimal' WHEN columns.system_type_id = 122 THEN 'decimal' WHEN columns.system_type_id = 127 THEN 'long' WHEN columns.system_type_id = 165 THEN 'byte[]' WHEN columns.system_type_id = 167 THEN 'string' WHEN columns.system_type_id = 173 THEN 'byte[]' WHEN columns.system_type_id = 175 THEN 'string' WHEN columns.system_type_id = 189 THEN 'long' WHEN columns.system_type_id = 231 THEN 'string' WHEN columns.system_type_id = 239 THEN 'string' WHEN columns.system_type_id = 241 THEN 'string' WHEN columns.system_type_id = 241 THEN 'string' END AS [Type], columns.is_nullable AS [Nullable]FROM sys.tables tables INNER JOIN sys.schemas schemas ON (tables.schema_id = schemas.schema_id ) INNER JOIN sys.columns columns ON (columns.object_id = tables.object_id) WHERE tables.name <> 'sysdiagrams'  AND tables.name <> 'dtproperties' 
ORDER BY [Schema], [Table], [Column], [Type]
```



Quick, Dirty, Working.



Anyone up to contributing a similar thing for SQL 2000 / MySql / Oracle / Postgres / MS-ACCESS ?



it's going to be subversion-ed really soon.

