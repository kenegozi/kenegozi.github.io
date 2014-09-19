---
layout: post
title:  "Merging with TortoiseSVN"
comments: true
tags: [tools]
---


Assuming you have a main "trunk" in your subversion repository, and that you are actually working on a different branch.

You'd need to merge your changes from your branch to the trunk so other team members would be able to use your code. You'd also want to be able to merge from the trunk to your branch, to be able to use your teammate's code.

The thing you should bear in mind while you merge, is that the actual merge process is actually working by generating a patch (using diff) and applying this patch on the target.

a quick note: It is very much recommended that you have committed all changes to the target of the merge, into the repository, so it would be easy to revert if something went wrong.

So:
Merging from a branch to the trunk
a. Go to the trunk folder on your filesystem, right-click->tortoise->merge.

b. You want the changes between the current trunk revision and your branch's current revision to be applied on the trunk, so you choose:From: your trunk, revision HEADTo: your branch, revision HEAD.

I know, the terminology is confusing, as you want to "update" from the trunk to the branch's state, but remember that you want the diff(erence), or in other words, the changes that will take the trunk FROM it's current state, TO your branch's state.

screenshot:

![branch to trunk](http://kenegozi.com/blog/uploaded/windowslivewriter/mergingintortoisesvn_d95f/6113704f-cbba-43b4-a328-05f9cd744045.png)

now you havea merged trunk on your workstation. Make sure that everything compiles and that tests are green, and commit.
Merging from the trunk to a branch
a) Go to your branch's folder, right-click->tortoise->merge;

Now, you want the changes between the last trunk revision that you have on your branch, to the newest revision of the trunk. To find out that last trunk revision that you have on your branch, go to your branch's folder, right-click->tortoise->show-log, and look for it. If you are a good reader you'd easily find it since you have mentioned the revision numbers of your merges in the commit remarks, as you are kindly recommended)A screenshot from the branch's log:

![Branch log](http://kenegozi.com/blog/uploaded/windowslivewriter/mergingintortoisesvn_d95f/63ee9bb6-0636-4d57-b664-2abb3e06a1d9.png)

I need to check if I have merged my branch to the trunk on a later point. I'll do that using the Trunk's log (trunk folder, right-click->tortoise->show-log):

![Trunk Log](http://kenegozi.com/blog/uploaded/windowslivewriter/mergingintortoisesvn_d95f/6c5edd77-055d-441e-987c-4d8c884c8bc7.png)

Indeed. It seams that my branch is in sync with the trunk at revision 918

b) Now you fill From: your trunk, revision "last revision you have"To: your trunk, revision "new, wantedstate" (usually HEAD).in my example, the last trunk version I have merged into my branch is 902, so that's the screenshot:

![trunk to branch](http://kenegozi.com/blog/uploaded/windowslivewriter/mergingintortoisesvn_d95f/9bc12b6f-764a-4284-878a-54b5e8754c6b.png)

I know, terminology sucks again. You probably thing "from trunk to trunk? Is he crazy?" well, again, you want to get the changes that was made TO THE TRUNK, and apply them to your branch. Remembering that this is actually a patch that will get applied make anything clear again.

now you havea merged branch on your workstation. Make sure that everything compiles and that tests are green, and commit. Recommendation: write down in the commit's remark, the revision number of the trunk (the current HEAD before the merge) for next time.

My thanks to [this page](http://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-merge.html), and to Lee Henson who have pointed it out for me, and helped my grasp the whole merge==diff'n'patch thing.

