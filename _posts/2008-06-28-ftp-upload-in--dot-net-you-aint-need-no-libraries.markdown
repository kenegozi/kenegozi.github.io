---
layout: post
title:  "FTP Upload in .NET - You ain't need no libraries"
comments: true
tags: [c-sharp]
---


Lately I've been asked about doing FTP related stuff in .NET .

There appear to be many "Ftp Clients" out there on CodeProject and other sites.

I really don't get 'em.

They are simple a leaky abstraction on top of straightforward BCL classes.



So what my solution is?
<!-- code formatted by http://manoli.net/csharpformat/ -->
{% highlight c# %}
   1:  publicvoid Upload(string server, int port, string targetFolder, string fileName, string username, string password, bool isActive)   2:  {   3:  var url = string.Format(   4:  "ftp://{0}:{1}{2}/{3}", server, port, targetFolder, fileName)   5:  using (var ftp = (FtpWebRequest)WebRequest.Create(url))   6:      {   7:          ftp.Credentials = new NetworkCredential(username, password);   8:          ftp.KeepAlive = false;   9:          ftp.UseBinary = true;  10:          ftp.Method = WebRequestMethods.Ftp.UploadFile;  11:  if (isActive)  12:              ftp.UsePassive = false;  13:    14:  using (var writer = new BinaryWriter(ftp.GetRequestStream()))  15:              writer.Write(File.ReadAllBytes(fileName));  16:      }  17:  }{% endhighlight %}



This basic notepad code covers most of the functionality in FtpWebRequest. You can easily set Binary/ASCII, Active/Passive, Credentials and whatnot. 



Alternatively, in some cases you can just spawn a ftp.exe process with a simple ftp script. Anyway you can rid yourself from unneeded leaky abstractions.

