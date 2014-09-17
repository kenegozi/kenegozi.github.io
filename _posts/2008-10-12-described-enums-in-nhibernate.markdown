---
layout: post
title:  "Described Enums in NHibernate"
comments: true
tags: [c-sharp,nhibernate,d9]
---


First feature in D9.NHibernate: DescribedEnumStringType



That's a generic IUserType for mapping enum columns using the descriptions of values instead of their names.



It depends on D9.Commons which contains the Described Enum helpers [described in an early post](http://kenegozi.com/Blog/2008/10/10/described-enums-2-dot-0.aspx)



Usage:

given the following enum:

```
usingSystem.ComponentModel;

namespaceOpenUni.Domain.Modules
{
    publicenumModuleTypes
    {
        [Description("ר")]
        Standard,

        [Description("מ")]
        Advanced,

        [Description("מס")]
        AdvancedSeminar,

        [Description("תש")]
        Masters
    }
}
```



mapping a field of type ModuleTypes will look like that:

```
<propertyname    = "ModuleType"column  = "ModuleType"type    = "D9.NHibernate.UserTypes.DescribedEnumStringType`1[[OpenUni.Domain.Modules.ModuleTypes, OpenUni.Domain]], 
              D9.NHibernate" />
```



or if you use Castle ActiveRecord attributes for mapping:

```
[Property(ColumnType = "D9.NHibernate.UserTypes.DescribedEnumStringType`1[[OpenUni.Domain.Modules.ModuleTypes, OpenUni.Domain]], D9.NHibernate")]
public virtual ModuleTypes ModuleType {get; set;}
```





Code is here:

[http://code.google.com/p/d-9/source/browse/#svn/trunk](http://code.google.com/p/d-9/source/browse/#svn/trunk)



I'll build and upload binaries once I get some time for that. meanwhile you should be able to just svn-co the code, then nant from the root. (assuming nant 0.86b2 and .net 3.5 on the machine) 

