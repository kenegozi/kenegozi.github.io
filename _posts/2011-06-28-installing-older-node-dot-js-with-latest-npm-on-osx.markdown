---
layout: post
title:  "Installing older node.js with latest npm on osx"
comments: true
tags: [tools,javascript]
---


At the time I write this, Heroku support Node 0.4.7, however the latest release is 0.4.8

Installing in the usual way (brew install node) will bring 0.4.8 in, so instead I opted to download the .pkg for 0.4.7

Node.js was installed correctly, however, it came with an old version on npm (the package manager for node.js). 

Searching around for npm installation brought up downloading the sh script and executing it. The snippet is curl http://npmjs.org/install.sh | sh

For *nix noobs – this mean that the content of the file at http://npmjs.org/install.sh will be pushed as input for sh which is the runner for .sh scripts. 

The problem is that the script tries to delete old npm versions, but it fails to do so for lack of permissions. Usually one prefixes with `sudo` to make this work, however it still did not work for me. What I ended up doing is breaking the process in two – first download the script into a local file (curl http://npmjs.org/install.sh > install.sh) and then `sudo sh install.sh`



I should be starting a “tips” section on the blog.

