---
layout: post
title:  "git-self take one"
comments: true
tags: [scm]
---


Now that I'm getting old, I need to keep up with the cool kids, so I'm taking git for a spin.



Downloaded [MSys Git](http://code.google.com/p/msysgit/downloads/list).

Upon install I went for the git-bash option. Running the bash shell has reminded my some of the old unix memories, however I am much more comfy with the windows shell these days, so I have manually added the the path things needed for running in cmd.exe/f



Now it was time to test remote. Luckily enough I got a [git-hub](http://github.com/) invitation. 



Step 1 - signup to git-hub.

downloaded the newest [putty](http://www.putty.org/), then used puttygen to generate public and private key.



Step 2 - create a private repository - went smoothly.



Step 3 - trying to push to the remote repo.

I ran the PAGEANT.EXE tool, loaded it with the private key, and set the GIT_SSH environment variable to point to PLINK.EXE.

Then tried to "git push origin master" and got a message like "The server's key signature is not in the registry, press 'y' for storing in the registry, 'n' for skipping, 'return' to exit". the problem is - it got stuck, no input allowed except ctrl-C. 



Then I tried to putty directly to the server, and now it did let me press the y, hoora - server's public key's signature is stored.

You'd think could push to the repository? think again. I then started getting other weird errors like "No supported authentication methods available".



grrrrr.



Maybe Ill try again tomorrow.



UPDATE (07/04/2008 - I guess tomorrow is a flexible term these days ...):It was me being silly. [Now it works perfectly](http://kenegozi.com/Blog/2008/04/07/gitself-take-two-github-key-configuration.aspx)

