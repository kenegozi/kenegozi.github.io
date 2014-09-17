---
layout: post
title:  "Javascript and the extended Array prototype"
comments: true
tags: [client-side,javascript]
---


I do quite a bit of javascript stuff lately, and I wanted to enjoy the easier syntax of array methods such as forEach, find etc.

As the current project is not using prototype.js, but rather a different js stack (jquery, various jquery plugins, EJS, and a bit more) I did not have the extended Array stuff that comes with prototype.js

&#160;

But before I ran off to add the needed methods to Array's prototype, I had an annoying voice in the back of my head, whispering “extending Array's prototype is evil, extending Array's prototype is evil”, so I looked at alternatives.

&#160;
Alternative 1 – subclassing Array.
I went ahead to implement a MyArray (or Array2) type of solution.

using one method of JS subclassing I thought of

```

var MyArray = function() {
};

MyArray.prototype = new Array;

MyArray.prototype.forEach = function(action) {
  for (var i = 0, l=this.length; i < l, ++i)
    action(this[i]);
};
...

```

the problem with that approach is that IE does not like Array subclassing, thus the .length property becomes unreliable, rendering the whole idea of subclassing Array useless.

&#160;
Alternative 2 – using a different object alltogether
It would work, however things like 

```
if (anArrayInstance instanceof Array)
```

will naturally break.

&#160;
Alternative 3 – extend any 'interesting' instances
```
function extendArray(arr) {
    if (arr.__wasExtended) return;
    arr.forEach = function(action) {
      for (var i = 0, l=this.length; i < l, ++i)
        action(this[i]);
    };
    arr.__wasExtended = true;
}
```

which is wrong as any instance will get a copy of all the functions, so too much memory will be used for non-core functionality

&#160;
Alternative 4 – use the separated scoped Array trick
just read [http://dean.edwards.name/weblog/2006/11/hooray/](http://dean.edwards.name/weblog/2006/11/hooray/)

the idea is to use an Array object from a separate iframe, thus enjoy the Array (instanceof), but not interfere with existing Array object on the main window

&#160;

On top of all that. all three alternatives are problematic, as a regular

```
var a = [];
```

will not be extended. which is not such a big problem if you're disciplined enough, but it's terribly annoying to need to extend every array you want. think about JSON data you get from a service. you'd first have to iterate over the object graph and extend all of the arrays. yuck.

&#160;

&#160;

Now, do you remember that annoying voice from the back of my head? I decided to stand up to him !

Why actually not extend the Array prototype and be done with it?

It will solve the “instanceof” problem, it will solve the need to apply the functions manually on all arrays (as any [] will natively have the new functions), and it wouldn't cost much memory as it will only be added to the single prototype of all array instances.

&#160;

The usual reason for not wanting to do so, is that it would break the associative array 'feature' of javascript, and you won't be able to

for (var i in myArray)

anymore.

&#160;

You know what? that reason is a total bullshit.

Why? cuz there's not such thing as an associative array in javascript !

If anything, the Object object is similar enough. However the Array object should be used with 0-based integer index, just like any native java/c#/c/whatever array.

&#160;

Removing that 'problem' from the equation, and we can resort back to stuff like

```
Array.prototype.numSort = function() {
    this.sort(function(a, b) { return a - b; });
    return this;
};
Array.prototype.forEach = function(action, index) {
    for (var i = 0, l = this.length; i < l; ++i)
        action(this[i], index);
};
Array.prototype.find = function(func) {
	for (var i = 0, l = this.length; i < l; ++i) {
		var item = this[i];
		if (func(item))
			return item;
	}
	return null;
};
Array.prototype.where = function(func) {
	var found = [];
	for (var i = 0, l = this.length; i < l; ++i) {
		var item = this[i];
		if (func(item))
			found.push(item);
	}
	return found;
};
```

&#160;

You just have to *love* dynamic languages :)

