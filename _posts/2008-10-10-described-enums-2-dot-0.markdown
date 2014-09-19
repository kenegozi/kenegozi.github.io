---
layout: post
title:  "Described Enums 2.0"
comments: true
tags: [c-sharp]
---


As part of my university seminar, I found myself writing this little enum: 



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



If you can't read Hebrew then for the sake of this post, the following is applicable:



```
usingSystem.ComponentModel;

namespaceOpenUni.Domain.Modules
{
    publicenumModuleTypes
    {
        [Description("A standard module")]
        Standard,

        [Description("An advanced module")]
        Advanced,

        [Description("An advanced seminar")]
        AdvancedSeminar,

        [Description("Module in a Masters course")]
        Masters
    }
}
```



You want the description of a given value, or to parse a given description string (say from the DB) to get the value it represents.

Many code bases I've seen contains an EnumHelper class or a variation of one, which allow just the same. Many of these use un-cached reflection to achieve that. As in my scenario this mapping will happen many (I mean *many*) times, I thought about making it a bit more agile.



Here's what I got:



```

usingSystem;
usingSystem.Collections;
usingSystem.Collections.Specialized;
usingSystem.Collections.Generic;
usingSystem.ComponentModel;
usingSystem.Linq;
usingSystem.Reflection;

namespace NHibernate.Type

{
    ///&lt;summary&gt;
/// Allow access to enum values with 
///&lt;see cref="DescriptionAttribute"&gt;DescriptionAttribute&lt;/see&gt;
/// set on them
///&lt;/summary&gt;
publicstaticclassDescribedEnumHandlers
    {
        privatestaticreadonlyIDictionaryhandlers=newListDictionary();

        ///&lt;summary&gt;
/// Initialises enum types to be used with the &lt;see cref="DescribedEnumHandlers"&gt;&lt;/see&gt;
///&lt;/summary&gt;
///&lt;param name="assemblies"&gt;The assemblies to grab described enums from&lt;/param&gt;
publicstaticvoidInitialise(paramsAssembly[] assemblies)
        {
            Initialise((IEnumerable&lt;Assembly&gt;)assemblies);
        }

        ///&lt;summary&gt;
/// Initialises enum types to be used with the &lt;see cref="DescribedEnumHandlers"&gt;&lt;/see&gt;
///&lt;/summary&gt;
///&lt;param name="assemblies"&gt;The assemblies to grab described enums from&lt;/param&gt;
publicstaticvoidInitialise(IEnumerable&lt;Assembly&gt;assemblies)
        {
            vartitledEnums=fromassemblyinassemblies
selectassembly
intoa
fromtypeina.GetTypes()

                                  wheretype.IsEnum&amp;&amp;
                                        (fromfintype.GetFields()
                                         wheref.GetCustomAttributes(typeof (DescriptionAttribute), false).Length==1
selectf
                                        ).Count() >0
orderbytype.FullName
selecttype;

            foreach (vartypeintitledEnums)
            {
                handlers.Add(type, newDescribedEnumHandler(type));
            }
        }

        ///&lt;summary&gt;
/// Extract the description for a given enum value
///&lt;/summary&gt;
///&lt;param name="value"&gt;An enum value&lt;/param&gt;
///&lt;returns&gt;It's description, or it's name if there's no registered description for the given value&lt;/returns&gt;
publicstaticstringEnumToDescription(objectvalue)
        {
            varhandler=handlers[value.GetType()] asDescribedEnumHandler;
            
            returnhandler!=null?handler.GetDescriptionFrom((Enum)value) 
                : value.ToString();
        }

        ///&lt;summary&gt;
/// Gets the enum value for a given description or value
///&lt;/summary&gt;
///&lt;typeparam name="T"&gt;The enum type&lt;/typeparam&gt;
///&lt;param name="stringValue"&gt;The enum value or description&lt;/param&gt;
///&lt;returns&gt;An enum value matching the given string value, as description (using &lt;see cref="DescriptionAttribute"&gt;DescriptionAttribute&lt;/see&gt;) or as value&lt;/returns&gt;
publicstaticEnumToEnumValue&lt;T&gt;(thisstringstringValue)
            whereT :struct
        {
            vartype=typeof (T);
            varhandler=handlers[type] asDescribedEnumHandler;

            returnhandler!=null
?handler.GetValueFrom(stringValue)
                : (Enum)Enum.Parse(type, stringValue, false);
        }
        
        ///&lt;summary&gt;
/// Used to cache enum values descriptions mapper
///&lt;/summary&gt;
privateclassDescribedEnumHandler
        {
            privatereadonlyIDictionary&lt;Enum, string&gt;toDescription=newDictionary&lt;Enum, string&gt;();
            privatereadonlyIDictionary&lt;string, Enum&gt;fromDescription=newDictionary&lt;string, Enum&gt;();
            publicDescribedEnumHandler(Typetype)
            {
                varenumEntrys=fromfintype.GetFields()
                                 letattributes=f.GetCustomAttributes(typeof(DescriptionAttribute), false)
                                 whereattributes.Length==1
letattribute= (DescriptionAttribute)attributes[0]
                                 selectnew
                                 {
                                     Value= (Enum)Enum.Parse(type, f.Name),
                                     attribute.Description
                                 };

                foreach (varenumEntryinenumEntrys)
                {
                    toDescription[enumEntry.Value] =enumEntry.Description;
                    fromDescription[enumEntry.Description] =enumEntry.Value;
                }
            }

            publicstringGetDescriptionFrom(Enumvalue)
            {
                returntoDescription[value];
            }

            publicEnumGetValueFrom(stringtitle)
            {
                returnfromDescription[title];
            }

        }

    }
}

```



Usage:

```
DescribedEnumHandlers.Initialise(typeof(ModuleTypes).Assembly);

Console.WriteLine(DescribedEnumHandlers.EnumToDescription(ModuleTypes.Standard));
Console.WriteLine("ר".ToEnumValue&lt;ModuleTypes&gt;());
```



Next time I'll show you how I made it play nicely with NHibernate





* code is licensed as BSD if you wish to use it

