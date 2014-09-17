---
layout: post
title:  "Checkbox Grids in MonoRail"
comments: true
tags: [asp-net-2-0,castle,monorail,aspview]
---


Referring [Jon Galloway's post](http://weblogs.asp.net/jgalloway/archive/2007/07/07/checkbox-grids-in-asp-net.aspx), here is my 5-minute-scracth-up-somthing that includes no hacking at all:





The Controller:

```
publicclassGourmetController : SmartDispatcherController
    {
        [AccessibleThrough(Verb.Get)]
        publicvoid WineMatch()
        {
            PropertyBag["matches"] = FoodAndWineMatchRepository.FindAll();
        }
        [AccessibleThrough(Verb.Post)]
        publicvoid Update([DataBind("matches")]FoodAndWineMatch[] matches)
        {
            FoodAndWineMatchRepository.UpdateAll(matches);
            RedirectToAction("WineMatch");
        }
    }
```



The View:

```
<%@PageLanguage="C#"%>
<%@ImportNamespace="Gourmet"%>
<%
    FoodAndWineMatch[] matches;
%>
<%
    IDictionary @checked = DictHelper.CreateDict("checked='checked'");
%>
<formaction="Update.aspx"method="post">
<table>
<tr>
<th>Food Name</th>
<th>Cabarnet</th>
<th>Zinfandel</th>
<th>Pinot</th>
</tr>
<%int i = 0; %>
<%foreach (FoodAndWineMatch match in matches)  { %>
<tr>
<td>
<span><%=match.FoodName%></span>
<inputtype="hidden"name="matches[<%=i%>].FoodName"value="<%=matches[i].FoodName%>"/>
</td>
<td>
<%=FormHelper.CheckboxField("matches[" + i + "].MatchesCabarnet", matches[i].MatchesCabarnet?@checked:null)%>
</td>
<td>
<%=FormHelper.CheckboxField("matches[" + i + "].MatchesZinfandel", matches[i].MatchesZinfandel?@checked:null)%>
</td>
<td>
<%=FormHelper.CheckboxField("matches[" + i + "].MatchesPinot", matches[i].MatchesPinot?@checked:null)%>
</td>
</tr><%++i; } %>
<tr>
<tdcolspan="4">
<inputtype="submit"value="Save"/>
</td>
</tr>
</table>
</form>

```



And the mocked "domain objects":

```
publicclassFoodAndWineMatch
    {
        privatestring foodName;
        privatebool matchesCabarnet;
        privatebool matchesPinot;
        privatebool matchesZinfandel;

        public FoodAndWineMatch() { }
        public FoodAndWineMatch(string foodName)
            :
            this(foodName, false, false, false) { }
        public FoodAndWineMatch(string foodName,
                                bool matchesCabarnet,
                                bool matchesPinot,
                                bool matchesZinfandel)
        {
            this.foodName = foodName;
            this.matchesCabarnet = matchesCabarnet;
            this.matchesZinfandel = matchesZinfandel;
        }

        publicstring FoodName
        {
            get { return foodName; }
            set { foodName = value; }
        }

        publicbool MatchesCabarnet
        {
            get { return matchesCabarnet; }
            set { matchesCabarnet = value; }
        }

        publicbool MatchesPinot
        {
            get { return matchesPinot; }
            set { matchesPinot = value; }
        }

        publicbool MatchesZinfandel
        {
            get { return matchesZinfandel; }
            set { matchesZinfandel = value; }
        }
    }
    publicstaticclassFoodAndWineMatchRepository
    {
        privatestaticFoodAndWineMatch[] _matches = null;
        publicstaticFoodAndWineMatch[] FindAll()
        {
            if (_matches == null)
                _matches = newFoodAndWineMatch[] {
                newFoodAndWineMatch("Salmon"),
                newFoodAndWineMatch("Steak"),
                newFoodAndWineMatch("Chicken"),
                newFoodAndWineMatch("Chocolate")
            };
            return _matches;
        }
        publicstaticvoid UpdateAll(FoodAndWineMatch[] matches)
        {
            _matches = matches;
        }
    }

```



No hacking needed. Controller code is short and intuitive. 

Oh. No postback for every client click ...



I especiallyliked one of the comments on Jon's post:

I love ASP.NET because of tricks like this that the developer can use.

Well, Ido not likeWebForms **because** it makes me "do tricks" (or hack) instead of bringing business value.

So I do not mean that Jon's "hack" is bad. That's what you have to do when you're WebForm-ing. I just say that there are other web development frameworks (actually, all but WebForms) that are more suited for reasonable html generation and for dealing with the http protocol.

