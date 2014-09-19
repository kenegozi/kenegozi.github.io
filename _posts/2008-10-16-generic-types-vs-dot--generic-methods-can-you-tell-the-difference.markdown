---
layout: post
title:  "Generic types vs. Generic methods - can you tell the difference?"
comments: true
tags: [c-sharp]
---




```

classWrapper
{
    publicstaticintCounter{ get; privateset;}
    staticWrapper()
    {
        Counter=0;
    }
    publicTGet&lt;T&gt;()
    {
        ++Counter;
        returndefault(T);
    }
}

classWrapper&lt;T&gt;
{
    publicstaticintCounter{ get; privateset;}
    staticWrapper()
    {
        Counter=0;
    }
    publicTGet()
    {
        ++Counter;returndefault(T); 

    }

}   }

```



"The first uses generic methods while the second is a generic class" is true, but is not what I'm looking for here ...

