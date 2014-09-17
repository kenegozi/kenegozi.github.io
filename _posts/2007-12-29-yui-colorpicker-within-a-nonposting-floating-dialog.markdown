---
layout: post
title:  "YUI ColorPicker Within a non-posting Floating Dialog"
comments: true
tags: [client-side]
---


My personal preference in javascript framework is prototype + YUI.

I take the language enhancements of prototype (enumerable/array, extend, $/$$), and the richness of widgets and event handling of YUI. One might say that prototype is my Javascript2, and YUI is the BCL.



These days I'm with YUI 2.4.1 and prototype 1.6.0



This week I needed to put floating color pickers on a few screens in a system.

Usually, the easiest thing would be to copy a pre-existing demo fro YUI docs. However, the color picker in dialog demo there was about the dialog posting to the server it's results, while I needed just to save the value into form fields.



The sample also uses a preexisting markup, which was not good in this scenario. 



Plus, since the said system have a very complicated (and fragile) styling and scripts happening on many pages, strange things have happened to the dialog if ran more than once on the same page, so I've added a "destroy" method that would cause the dialog to be rebuilt each time. It's lightning fast, and has no visible effects on the user experience.



Another major change I've made to the sample, is the use of methods on a 'global' static object (CP) instead creating an instance of a function() and add the methods there (like the guys at YUI likes). The latter is nice in it's increased encapsulation, however the need to deal with the scoping issues is making event registration and event handlers too awkward imo.



Anyway - that's the code, you can use it as you will. Just remember it's "as-is", "no-warrenty" BSD thing.



```

YAHOO.ColorPicker = {};

// aliasvar CP = YAHOO.ColorPicker;CP.dialog = null; 



// creates the dialog with a color picker insideCP.createPicker = function() { CP.dialog = new YAHOO.widget.Dialog("yui-picker-panel", { width : '500px', close : false, fixedcenter : true, visible : false,  draggable : false,  modal : true, constraintoviewport : true, effect : { effect : YAHOO.widget.ContainerEffect.FADE,  duration : 0.2 }, buttons : [  { text:"Done", handler:this.handleOk, isDefault:true }, { text:"Cancel", handler:this.handleCancel }  ] });



    // dialog markup: CP.dialog.setHeader('Pick a color:');

    // placeholder for the color picker CP.dialog.setBody('<div id="yui-picker" class="yui-picker"></div>'); CP.dialog.render(document.body); $(CP.dialog.element).addClassName('yui-picker-panel'); 



    // create the picker CP.picker = new YAHOO.widget.ColorPicker("yui-picker", { showhexcontrols : true, showhexsummary : false, images : { PICKER_THUMB : "/common/javascript/yui/colorpicker/assets/picker_thumb.png",  HUE_THUMB : "/common/javascript/yui/colorpicker/assets/hue_thumb.png"  } });} 



// in here I have used prototype to get the hex data. you can of course use

// YUI's getElementsByClassName, jQuery, or your own method.CP.handleOk = function() { var hexField = $(CP.dialog.element).down('.yui-picker-hex'); var hex = hexField.value; $(CP.targetId).value = '#' + hex; CP.dialog.hide(); setTimeout(CP.destroy, 300);} 



// removes the dialog completelyCP.destroy = function() { CP.dialog.destroy(); CP.dialog = null;} 



CP.handleCancel = function() {
 CP.dialog.cancel(); setTimeout(CP.destroy, 300);
} 



// create the picker if needed, set it's value, and show





CP.showPicker = function(ev) {  if (CP.dialog === null) { CP.createPicker(); }  var target = ev.target || ev.srcElement; CP.targetId = target.id; var val = target.value; if (val.match(/#?[a-fA-F0-9]{6}/)) { if (val.indexOf('#') === 0 &amp;&amp; val.length > 1) val = val.substring(1); CP.picker.setValue(YAHOO.util.Color.hex2rgb(val)); } CP.dialog.show();} 



// registering the pickers on our color fieldsYAHOO.util.Event.onDOMReady(function() { var fields = YAHOO.util.Dom.getElementsByClassName('color-picked'); YAHOO.util.Event.on(fields, "click", CP.showPicker);});

```



You can try to clean the CP.destroy method and see if it works for your scenario. 



hmm, ofcourse, needed YUI files are:

- utilities/utilities.js
- container/container-min.js
- slider/slider-min.js
- yui/colorpicker/colorpicker-beta.js
- fonts/fonts-min.css
- container/assets/container.css
- container/assets/skins/sam/container.css
- colorpicker/assets/skins/sam/colorpicker.css


