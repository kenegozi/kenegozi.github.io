---
layout: post
title:  "The next big thing in software development"
comments: true
tags: [personal]
---


Take a look at the following piece of code

```

namespace Egozi
{
	class Baby
	{
		public static void Main()
		{
			var noam = new Baby(DateTime.Parse(&quot;2009/08/21 20:00 +3&quot;), 2.750, &quot;Noam&quot;);
			while (true) noam.RelaxOnDaddy();
		}
			
		public Baby(DateTime birthdate, double initialWeight, string name)
		{
			Birthdate = birthdate;
			InitialWeight = initialWeight;
			Name = name;
		}
	
		public ulong GetComputedCutenessLevel()
		{
			return Name == &quot;Noam&quot;
				? ulong.MaxValue
				: GetRandomNumber(1, ulong.MaxValue);
		}
	
		public DateTime Birthdate { get; private set; }

		public double InitialWeight { get; private set; }
	
		public string Name { get; private set; }	

		public void RelaxOnDaddy() { }
	
		public void Poo() { }
		
		public void Pee() { }

		public void Burp() { }

		public void Accept(IVisitorWithPresents visitorWithPresents)
		{
			visitorWithPresents.Apply(this);
		}
	}
}

```

&#160;

Not too exciting on it's own, right?

&#160;

Now take a look at on the binary format:

![IMG_0262_small](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/Thenextbigthinginsoftwaredevelopment_DF74/669e2a08-9aeb-420a-95b5-97b1c6c721c7.jpg)

&#160;

and here after call to RelaxOnDaddy():

![IMG_0268_small](http://kenegozi.com/blog/uploaded/WindowsLiveWriter/Thenextbigthinginsoftwaredevelopment_DF74/89961070-5601-475a-bc2f-88ac6afea136.jpg)

&#160;

&#160;

super sweet :)

&#160;

The little dude even acted as the resident super model during the “how to bathe your baby” session at the nursery, acting as if he was a Michael Phelps grade in Water Handling.

&#160;

So if you were wondering why my general availability was not at it's best lately, this tiny little miracle who crashed into our life just short of three days ago, is the reason. 

&#160;

Lots of experiences to have, lots of things to learn and explore. All very complicated. The amount of baby related *stuff* and *things* out there is mind blowing. And everything should be used just a wee bit differently then the next thing, and every nurse gives you a different advice with a 100% certainty. It is kind of like your regular OSS usergroup of choice actually.

So without any proper location to RTFM from, I guess it would come down to a mix of instincts, best judgement, and a good portion of trials and errors.

&#160;

&#160;

I'm popping back offline now to attend my amazing wife who took care of the whole thing, and our cute little wonder.

&#160;

UPDATE (25/08): fixed a copy&amp;paste type, added Main, added name

