---
layout: post
title:  "JavaScript and .NET &ndash; meet jint"
comments: true
tags: [c-sharp,javascript]
---


I've been looking for JavaScript scripting possibilities for .NET for quite some time. I always know I could hack an IKVM (java-to-csharp compiler) over Rhino (Java implementation of JavaScript), but it always felt a bit too complex.

I had my hopes on Microsoft to implement a JavaScript over the DLR but the news on the subject where vague at best, and with the latest moves on shutting down support of IronPython and IronRuby, I'd think that IronJS won't really happen anytime soon. There is a project named IronJS over at github, but it is quite incomplete. (for e.g., the test suite include a single mostly-commented-out file).

&#160;

Reading one more [Rhino/IKVM article on CodeProject](http://www.codeproject.com/KB/cs/EmbeddingJSCS.aspx) this week, I stumbled on a comment pointing to a new JS interpreter implementation for .NET.&#160; yup – that's right. Interpreter. Not a compiler, nor a VM. The project is at [http://jint.codeplex.com/](http://jint.codeplex.com/).

&#160;

I Hg cloned the repo, ran MsBuild.exe on the Jint.sln file, and referenced output binaries (only two dll files - jint's and antlr's), and voila.

&#160;

the following stupid code, showing executing JS code (see the regex syntax in script1), executing .NET code from JS script (the DateTime class), and passing a .NET object as parameter to the script:

&#160;

```

class Person
{
    public string Name;
}
static void Main(string[] args)
{
    var script1 = @&quot;return 'hello'.replace(/l{2}/gi, 'LL');&quot;;
    var script2 = @&quot;var d = new System.DateTime(2010,3,1);
                    return d.Day;&quot;;
    var script3 = @&quot;return 'hello ' + p.Name;&quot;;

    var jint = new Jint.JintEngine();

    var result1 = jint.Run(script1);
    Console.WriteLine(result1);

    var result2 = jint.Run(script2);
    Console.WriteLine(result2);

    var p = new Person { Name = &quot;Ken&quot; };
    jint.SetParameter(&quot;p&quot;, p);
    var result3 = jint.Run(script3);
    Console.WriteLine(result3);

}

```

&#160;

The output is:

```
heLLo
1
hello Ken
```

&#160;

&#160;

so what the whole fuss is about?

&#160;

think about a view engine that can execute in the Server for generating initial http response, and then executing the same templates on the client-side. Not only that, it should be possible to share templates between Java and .NET servers in a heterogeneous environment

&#160;

I know that Spark view engine support both server and client side execution, but I remember hearing from the leaders of Spark that it was never a goal, and I also do not like the syntax of Spark anyway (brings back bad memories from nant)

&#160;

It also has a few more appealing features. For one, it does *not* generate bytecode, so you can hot-swap scripts without leaking memory.

&#160;

I'll be playing with this some more should time allow.

