(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var JsContextWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
JsContextWidget.prototype = Object.create(Widget.prototype);

/*
Render this widget into the DOM
*/
JsContextWidget.prototype.render = function(parent,nextSibling) {
	Widget.call(this);
	this.parentDomNode = parent;
	this.computeAttributes();
	this.execute();
	this.renderChildren(parent,nextSibling);
};

/*
Compute the internal state of the widget
*/
JsContextWidget.prototype.execute = function() {
    const filename = this.getAttribute("filename","anonymous.js");
    const outputVar = this.getAttribute("output","result");
    const context = this;
    const exports = {};
    const code = `${this.getAttribute("prelude", "")};\nexports.result = ${this.getAttribute("code", "null")};`
    $tw.utils.evalGlobal(code, {context, exports}, filename);
    this.setVariable(outputVar, exports.result);
	// Construct the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
JsContextWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(Object.keys(changedAttributes).length) {
		this.refreshSelf();
		return true;
	}
	return this.refreshChildren(changedTiddlers);
};

exports["js"] = JsContextWidget;

})();
