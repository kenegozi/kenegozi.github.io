---
layout: post
title:  "Generating XML - Do We Really Another API?"
comments: true
tags: [architecture,c-sharp,aspview]
---


[There appear to be yet another XML API](http://codebetter.com/blogs/glenn.block/archive/2008/02/26/xml-and-fluent-interfaces.aspx).

So, when you want to generate:

```
<?xml version="1.0" encoding="utf-8"?>
<root>
    <result type="boolean">true</result>
</root>
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

<?xml version="1.0" encoding="utf-8"?>

<root>

    <result type="<%=view.Type%>"><%=view.Value%></result>

</root>

```



works great for the "complex" scenarios on [Mark S. Rasmussen](http://www.improve.dk/about)'s blog:

```

<?xml version="1.0" encoding="utf-8"?>
<root>
    <numbers>

        <% foreach (Number number in view.Numbers) { %>
        <number value="<%=number%>">This is the number: <%=number%></number>


        <% } %>
    </numbers>
</root>

```



and:

```

<?xml version="1.0" encoding="utf-8"?>
<root>
    <user>
        <username><%=view.User.Username%></username>
        <realname><%=view.User.RealName%></realname>
        <description><%#view.User.Username%></description>

        <articles>

            <% foreach (Article article in view.User.Articles) { %>
            <article id="<%=article.Id%>"><%#article.Title%></article>

            <% } %>
        </articles>
        <hobbies>
            <% foreach (Hobby hobby in view.User.Hobbies) { %> 

            <hobby><%#hobby.Name%></hobby>

            <% } %> 

        </hobbies>
    </user>
</root>

```



is Hobby and Article more complex? no probs. break it down to sub-views:

```

<?xml version="1.0" encoding="utf-8"?>
<root>
    <user>
        <username><%=view.User.Username%></username>
        <realname><%=view.User.RealName%></realname>
        <description><%#view.User.Username%></description>

        <articles>

            <% foreach (Article article in view.User.Articles) { %>

            <subview:Article article="<%=article%>"></subview:Article>


            <% } %>
        </articles>
        <hobbies>
            <% foreach (Hobby hobby in view.User.Hobbies) { %> 

            <subview:Hobby hobby="<%=hobby%>"></subview:Hobby> 

            <% } %> 

        </hobbies>
    </user>
</root>

```



Can you get more expressive that that?

Look how easy it is to visualize what we're rendering, and how easy it is to change.



I consider all those XML API (including ATOM/RSS writers) as a leaky and unneeded abstractions, just like WebForms. Do you?

