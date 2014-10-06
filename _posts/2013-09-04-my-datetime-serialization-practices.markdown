---
layout: post
title:  "My DateTime serialization practices"
comments: true
tags: [c-sharp]
---

## Show me your date
When sending DateTimes as string across the wire, it is quite useful to use ISO 8601 date formatting. For one, it holds all required info (including timezone offset specified), it is easy to infer the Kind of the DateTime (UTC, Local or Unspecified), it is widely and commonly used across most (if not all) platforms, and if omitting milliseconds, is lexicographically ordered, which makes it useful for indexed storage as well (for example on the filesystem, or as keys in a string based Key Value stores such as Azure Table Storage)

During the many times I had to deal with serialization implementations, while working on one of the many web frameworks I've been involved with, or with serialization libraries, I keep getting back to be needing to remember what I did last time, so this post is to serve as a future reminder to self on how I want it to be done.

## Serializing a DateTime to a string:
<pre><code>string Serialize(DateTime value) {
    const string ISO8601Format = "o"; // this is a terrific little gem!
    return value.ToString(ISO8601Format);
}
</code></pre>

Did you notice the “o” format specifier? This is a much better than typing "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffK", which I've been doing until recently.

For lexicographically ordered version, we would only go so far to the seconds, and be sure to force the input datetime kind to UTC (otherwise order is difficult to maintain…):

```
string SerializeOrdered(DateTime value) {
    const string OrderedUniversalFormat = "u";
    return value.ToUniversalTime().ToString(OrderedUniversalFormat);
}
```



## What's the deal with Kind and Timezone offset?

The 'K' specifier will render the following:
- If the input datetime is of UTC kind, it will render the letter Z 

- If the input datetime is of Unspecified kind, it will render … nothing 

- If the input datetime is of Local kind, it will render + (or –) the offset



The interesting bit here is that there is a difference between 2013-09-03T10:00:00-00:00 and 2013-09-03T10:00:00Z. They refer to the same point in time, however the former refer to the Local time where the offset is 0 (e.g. London, UK at winter time – a lovely picture), while the latter refer to the UTC time. This knowledge allow us to infer the actual datetime kind when parsing the result. How do we do that you may rightfully ask?

## Deserializing DateTimes from a string:

```
DateTime DeserializeDateTime(string value) {
    return DateTime.Parse(value, null, DateTimeStyles.RoundtripKind);
}
```

That's it. The trick is in the DateTimeStyles.RoundtripKind bit. I keep forgetting that, and this (and the “o” specifier) is the reason for this post.

When Deserializing ordered DateTimes, the former deserialization code would end up with a DateTime of Unspeficied kind, so it would be better to do that:

```
DateTime DeserializeOrderedDateTime(string value) {
    return DateTime.Parse(value, null, DateTimeStyles.AssumeUniversal).ToUniversalTime();
}
```

