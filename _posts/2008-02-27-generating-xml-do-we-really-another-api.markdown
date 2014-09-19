---
layout: post
title:  "Generating XML - Do We Really Another API?"
comments: true
tags: [architecture,c-sharp,aspview]
---


[There appear to be yet another XML API](http://codebetter.com/blogs/glenn.block/archive/2008/02/26/xml-and-fluent-interfaces.aspx).

So, when you want to generate:

```
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;root&gt;
    &lt;result type="boolean"&gt;true&lt;/result&gt;
&lt;/root&gt;
```



instead of (using System.XML):

```
XmlDocument xd = new XmlDocument();
xd.AppendChild(xd.CreateXmlDeclaration("1.0", "utf-8", ""));

XmlNode root = xd.CreateElement("root");
xd.AppendChild(root);

XmlNode result = xd.CreateElement("result");
result.InnerText = "true";

XmlAttribute type = xd.CreateAttribute("type");
type.Value = "boolean";

result.Attributes.Append(type);
root.AppendChild(result);
```



one can (using the new API):

```
XmlOutput xo = new XmlOutput()
    .XmlDeclaration()
    .Node("root").Within()
        .Node("result").Attribute("type", "boolean").InnerText("true");
```



Exciting.

Or is it?



Why not just (using your template-engine of choice):

```

&lt;?xml version="1.0" encoding="utf-8"?&gt;

&lt;root&gt;

    &lt;result type="<%=view.Type%&gt;">&lt;%=view.Value%&gt;&lt;/result&gt;

&lt;/root&gt;

```



works great for the "complex" scenarios on [Mark S. Rasmussen](http://www.improve.dk/about)'s blog:

```

&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;root&gt;
    &lt;numbers&gt;

        &lt;% foreach (Number number in view.Numbers) { %&gt;
        &lt;number value="<%=number%&gt;">This is the number: &lt;%=number%&gt;&lt;/number&gt;


        &lt;% } %&gt;
    &lt;/numbers&gt;
&lt;/root&gt;

```



and:

```

&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;root&gt;
    &lt;user&gt;
        &lt;username&gt;&lt;%=view.User.Username%&gt;&lt;/username&gt;
        &lt;realname&gt;&lt;%=view.User.RealName%&gt;&lt;/realname&gt;
        &lt;description&gt;&lt;%#view.User.Username%&gt;&lt;/description&gt;

        &lt;articles&gt;

            &lt;% foreach (Article article in view.User.Articles) { %&gt;
            &lt;article id="<%=article.Id%&gt;">&lt;%#article.Title%&gt;&lt;/article&gt;

            &lt;% } %&gt;
        &lt;/articles&gt;
        &lt;hobbies&gt;
            &lt;% foreach (Hobby hobby in view.User.Hobbies) { %&gt; 

            &lt;hobby&gt;&lt;%#hobby.Name%&gt;&lt;/hobby&gt;

            &lt;% } %&gt; 

        &lt;/hobbies&gt;
    &lt;/user&gt;
&lt;/root&gt;

```



is Hobby and Article more complex? no probs. break it down to sub-views:

```

&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;root&gt;
    &lt;user&gt;
        &lt;username&gt;&lt;%=view.User.Username%&gt;&lt;/username&gt;
        &lt;realname&gt;&lt;%=view.User.RealName%&gt;&lt;/realname&gt;
        &lt;description&gt;&lt;%#view.User.Username%&gt;&lt;/description&gt;

        &lt;articles&gt;

            &lt;% foreach (Article article in view.User.Articles) { %&gt;

            &lt;subview:Article article="<%=article%&gt;">&lt;/subview:Article&gt;


            &lt;% } %&gt;
        &lt;/articles&gt;
        &lt;hobbies&gt;
            &lt;% foreach (Hobby hobby in view.User.Hobbies) { %&gt; 

            &lt;subview:Hobby hobby="<%=hobby%&gt;">&lt;/subview:Hobby&gt; 

            &lt;% } %&gt; 

        &lt;/hobbies&gt;
    &lt;/user&gt;
&lt;/root&gt;

```



Can you get more expressive that that?

Look how easy it is to visualize what we're rendering, and how easy it is to change.



I consider all those XML API (including ATOM/RSS writers) as a leaky and unneeded abstractions, just like WebForms. Do you?

