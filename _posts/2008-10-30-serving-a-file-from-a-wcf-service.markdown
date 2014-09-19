---
layout: post
title:  "Serving a file from a WCF service"
comments: true
tags: [c-sharp]
---


Following my [post on mini-web server with WCF](http://kenegozi.com/Blog/2008/10/23/mini-web-server-using-wcf.aspx), I've been asked about how to serve static files (images, stylesheets, scripts).



WCF services can return a Stream, so it's just a matter of calling File.OpenRead to get a the stream









```

publicStreamGetFile(stringfile)
        {

            // We forbid access to directories outside of the site root 

if (file.Contains(".."))
                thrownewSecurityException();

            varext=Path.GetExtension(file).ToLower().TrimStart('.');

 

            // Just a helper that will 

            //set WebOperationContext.Current.OutgoingResponse.ContentType 



            SetContentType(ContentInfo.For(ext));

            varfilePath=Path.Combine(this.siteRoot, file);
            returnFile.OpenRead(GetActualFilePath(filePath));
        }

```





ContentInfo.For() is a helper for mapping an extension to a mimetype, with a two-stage lookup:

```
///&lt;summary&gt;
/// Represents info on a given file
///&lt;/summary&gt;
publicstaticclassContentInfo
    {
        staticreadonlyKeyValuePair&lt;MimeTypes, string&gt;[] contentInfoFor=new[]
        {
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Js, "text/javascript"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Css, "text/css"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Html, "text/html"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Plain, "text/plain"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Gif, "image/gif"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Jpeg, "image/jpeg"),
            newKeyValuePair&lt;MimeTypes, string&gt;(MimeTypes.Tiff, "image/tiff"),
        };

        ///&lt;summary&gt;
/// Gets the mime type for a given &lt;see cref="MimeTypes"/&gt;
///&lt;/summary&gt;
///&lt;param name="mimeType"&gt;The file's &lt;see cref="MimeTypes"/&gt;&lt;/param&gt;
///&lt;returns&gt;The file's mime type&lt;/returns&gt;
publicstaticstringFor(MimeTypesmimeType)
        {
            return (frompincontentInfoFor
wherep.Key==mimeType
selectp.Value)
                   .First();
        }

        ///&lt;summary&gt;
/// Gets the mime type for a given extension
///&lt;/summary&gt;
///&lt;param name="extension"&gt;The file's extension&lt;/param&gt;
///&lt;returns&gt;The file's mime type&lt;/returns&gt;
publicstaticstringFor(stringextension)
        {
            returnFor(MimeType.For(extension));
        }
    }
```



and 

```
///&lt;summary&gt;
/// Helpers for &lt;see cref="MimeTypes"/&gt;///&lt;/summary&gt;
publicclassMimeType
    {
        staticreadonlyKeyValuePair&lt;string, MimeTypes&gt;[] mimeTypeForExtension=new[]
            {
                newKeyValuePair&lt;string, MimeTypes&gt;("js", MimeTypes.Js),
                newKeyValuePair&lt;string, MimeTypes&gt;("css", MimeTypes.Css),
                newKeyValuePair&lt;string, MimeTypes&gt;("htm", MimeTypes.Html),
                newKeyValuePair&lt;string, MimeTypes&gt;("html", MimeTypes.Html),
                newKeyValuePair&lt;string, MimeTypes&gt;("txt", MimeTypes.Plain),
                newKeyValuePair&lt;string, MimeTypes&gt;("gif", MimeTypes.Gif),
                newKeyValuePair&lt;string, MimeTypes&gt;("jpg", MimeTypes.Jpeg),
                newKeyValuePair&lt;string, MimeTypes&gt;("jpeg", MimeTypes.Jpeg),
                newKeyValuePair&lt;string, MimeTypes&gt;("tiff", MimeTypes.Tiff),
            };

        ///&lt;summary&gt;
/// Selects a &lt;see cref="MimeTypes"/&gt; for a given file extension 
///&lt;/summary&gt;
///&lt;param name="extension"&gt;The file's extension&lt;/param&gt;
///&lt;returns&gt;The file's mime type&lt;/returns&gt;
publicstaticMimeTypesFor(stringextension)
        {
            extension=extension.TrimStart('.');

            return (frompinmimeTypeForExtension
wherep.Key==extension
selectp.Value)
                .First();

        }
    }
```





When MimeTypes are:

```
publicenumMimeTypes
    {
        Js, Css, Html, Gif, Jpeg, Tiff, Plain
    }
```

