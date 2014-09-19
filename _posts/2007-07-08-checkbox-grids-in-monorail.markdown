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
&lt;%@PageLanguage="C#"%&gt;
&lt;%@ImportNamespace="Gourmet"%&gt;
&lt;%
    FoodAndWineMatch[] matches;
%&gt;
&lt;%
    IDictionary @checked = DictHelper.CreateDict("checked='checked'");
%&gt;
&lt;formaction="Update.aspx"method="post"&gt;
&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Food Name&lt;/th&gt;
&lt;th&gt;Cabarnet&lt;/th&gt;
&lt;th&gt;Zinfandel&lt;/th&gt;
&lt;th&gt;Pinot&lt;/th&gt;
&lt;/tr&gt;
&lt;%int i = 0; %&gt;
&lt;%foreach (FoodAndWineMatch match in matches)  { %&gt;
&lt;tr&gt;
&lt;td&gt;
&lt;span&gt;&lt;%=match.FoodName%&gt;&lt;/span&gt;
&lt;inputtype="hidden"name="matches[<%=i%&gt;].FoodName"value="&lt;%=matches[i].FoodName%&gt;"/>
&lt;/td&gt;
&lt;td&gt;
&lt;%=FormHelper.CheckboxField("matches[" + i + "].MatchesCabarnet", matches[i].MatchesCabarnet?@checked:null)%&gt;
&lt;/td&gt;
&lt;td&gt;
&lt;%=FormHelper.CheckboxField("matches[" + i + "].MatchesZinfandel", matches[i].MatchesZinfandel?@checked:null)%&gt;
&lt;/td&gt;
&lt;td&gt;
&lt;%=FormHelper.CheckboxField("matches[" + i + "].MatchesPinot", matches[i].MatchesPinot?@checked:null)%&gt;
&lt;/td&gt;
&lt;/tr&gt;&lt;%++i; } %&gt;
&lt;tr&gt;
&lt;tdcolspan="4"&gt;
&lt;inputtype="submit"value="Save"/&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;/form&gt;

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

