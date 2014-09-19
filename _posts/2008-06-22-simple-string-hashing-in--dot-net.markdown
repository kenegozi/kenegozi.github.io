---
layout: post
title:  "Simple String Hashing in .NET"
comments: true
tags: [c-sharp,tools]
---


I've been asked about it several times lately, so I'll just put here an oldie that I've been using for a few years now untouched:


{% highlight c# %}
   1:  // MIT license   2:  // Copyright 2005-2008 Ken Egozi   3:  //    4:  // Permission is hereby granted, free of charge, to any person obtaining a copy   5:  // of this software and associated documentation files (the "Software"), to deal   6:  // in the Software without restriction, including without limitation the rights   7:  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell   8:  // copies of the Software, and to permit persons to whom the Software is   9:  // furnished to do so, subject to the following conditions:  10:  //   11:  // The above copyright notice and this permission notice shall be included in  12:  // all copies or substantial portions of the Software.  13:  //   14:  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  15:  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  16:  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  17:  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  18:  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  19:  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  20:  // THE SOFTWARE.  21:    22:  using System;  23:  using System.Collections.Generic;  24:  using System.Text;  25:  using System.Security.Cryptography;  26:  using System.Collections;  27:    28:  namespace KenEgozi.CryptographicServices  29:  {  30:  publicstaticclass Hashing  31:      {  32:  privatestatic Hashtable hashAlgorithms = Hashtable.Synchronized(new Hashtable());  33:    34:  /// &lt;summary&gt;  35:  /// Hashing a given string with SHA2.  36:  /// &lt;/summary&gt;  37:  /// &lt;param name="data"&gt;Data to hash&lt;/param&gt;  38:  /// &lt;returns&gt;Hashed data&lt;/returns&gt;  39:  publicstaticstring HashData(string data)  40:          {  41:  return HashData(data, HashType.SHA256);  42:          }  43:    44:  /// &lt;summary&gt;  45:  /// Hashing a given string with any of the supported hash algorithms.  46:  /// &lt;/summary&gt;  47:  /// &lt;param name="data"&gt;Data to hash&lt;/param&gt;  48:  /// &lt;param name="hashType"&gt;Hashing algorithm to use&lt;/param&gt;  49:  /// &lt;returns&gt;Hashed data&lt;/returns&gt;  50:  publicstaticstring HashData(string data, HashType hashType)  51:          {  52:              HashAlgorithm hash = GetHash(hashType);  53:  byte[] bytes = (new UnicodeEncoding()).GetBytes(data);  54:  byte[] hashed = hash.ComputeHash(bytes);  55:              StringBuilder sb = new StringBuilder(64);  56:  foreach (byte b in hashed)  57:                  sb.AppendFormat("{0:x2}", b);  58:  return sb.ToString();  59:          }  60:    61:  privatestatic HashAlgorithm GetHash(HashType hashType)  62:          {  63:  if (!hashAlgorithms.ContainsKey(hashType))  64:                  hashAlgorithms.Add(hashType, CreateaHashAlgorithm(hashType));  65:  return hashAlgorithms[hashType] as HashAlgorithm;  66:          }  67:    68:  privatestatic HashAlgorithm CreateaHashAlgorithm(HashType hashType)  69:          {  70:  switch (hashType)  71:              {  72:  case HashType.MD5:  73:  returnnew MD5CryptoServiceProvider();  74:  case HashType.SHA1:  75:  returnnew SHA1Managed();  76:  case HashType.SHA256:  77:  returnnew SHA256Managed();  78:  case HashType.SHA384:  79:  returnnew SHA384Managed();  80:  case HashType.SHA512:  81:  returnnew SHA512Managed();  82:  default:  83:  thrownew NotImplementedException();  84:              }  85:          }  86:      }  87:    88:  publicenum HashType  89:      {  90:          MD5,  91:          SHA1,  92:          SHA256,  93:          SHA384,  94:          SHA512  95:      }  96:  }{% endhighlight %}



Not beautiful, however useful.



You can download this file from [here](http://kenegozi.com/blog/uploaded/hashing.cs.txt) (just remove the .txt - the server doesn't serve .cs files directly) 



btw, the colouring of the source was made with the help of [http://www.manoli.net/csharpformat/](http://www.manoli.net/csharpformat/), even though I had to do some manual tweaking to make it work with this blog. If colours of reserved words, comments etc. do not appear, then please refresh your browser's cache to get the updated css

