---
layout: post
title:  "Can you spot the bug?"
comments: true
tags: [tools,testing]
---


Can you spot what will cause the following NUnit test not to run on TeamCity 4.5?

```
[TestFixture(&quot;Testing some cool things&quot;)]
public class CoolThingsFixture
{
	[Test]
	public void When_Do_Expect()
	{
		Assert.That(2, Is.EqualTo(1+1));
	}
}
```

&#160;

hint: TeamCity list it with the ignored tests, yelling “No suitable constructor was found”

