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
///<summary>
/// Represents info on a given file
///</summary>
publicstaticclassContentInfo
    {
        staticreadonlyKeyValuePair<MimeTypes, string>[] contentInfoFor=new[]
        {
            newKeyValuePair<MimeTypes, string>(MimeTypes.Js, "text/javascript"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Css, "text/css"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Html, "text/html"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Plain, "text/plain"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Gif, "image/gif"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Jpeg, "image/jpeg"),
            newKeyValuePair<MimeTypes, string>(MimeTypes.Tiff, "image/tiff"),
        };

        ///<summary>
/// Gets the mime type for a given <see cref="MimeTypes"/>
///</summary>
///<param name="mimeType">The file's <see cref="MimeTypes"/></param>
///<returns>The file's mime type</returns>
publicstaticstringFor(MimeTypesmimeType)
        {
            return (frompincontentInfoFor
wherep.Key==mimeType
selectp.Value)
                   .First();
        }

        ///<summary>
/// Gets the mime type for a given extension
///</summary>
///<param name="extension">The file's extension</param>
///<returns>The file's mime type</returns>
publicstaticstringFor(stringextension)
        {
            returnFor(MimeType.For(extension));
        }
    }
```



and 

```
///<summary>
/// Helpers for <see cref="MimeTypes"/>///</summary>
publicclassMimeType
    {
        staticreadonlyKeyValuePair<string, MimeTypes>[] mimeTypeForExtension=new[]
            {
                newKeyValuePair<string, MimeTypes>("js", MimeTypes.Js),
                newKeyValuePair<string, MimeTypes>("css", MimeTypes.Css),
                newKeyValuePair<string, MimeTypes>("htm", MimeTypes.Html),
                newKeyValuePair<string, MimeTypes>("html", MimeTypes.Html),
                newKeyValuePair<string, MimeTypes>("txt", MimeTypes.Plain),
                newKeyValuePair<string, MimeTypes>("gif", MimeTypes.Gif),
                newKeyValuePair<string, MimeTypes>("jpg", MimeTypes.Jpeg),
                newKeyValuePair<string, MimeTypes>("jpeg", MimeTypes.Jpeg),
                newKeyValuePair<string, MimeTypes>("tiff", MimeTypes.Tiff),
            };

        ///<summary>
/// Selects a <see cref="MimeTypes"/> for a given file extension 
///</summary>
///<param name="extension">The file's extension</param>
///<returns>The file's mime type</returns>
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

