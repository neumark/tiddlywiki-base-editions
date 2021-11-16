(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "localfile";

exports.params = [
	// (mandatory) path param
	{name: "relpath"},
	// optional parameter
	{name: "title"}
];

const imagePostfixes = ['.jpg', '.jpeg', '.png', '.gif', '.heic', '.svg'];	

const pathPrefix = [ ...(new URLSearchParams(window.location.search))].find(([k, v]) => k === 'pathname')[1];	

exports.run = function(relpath, title) {
	const url = `file://${pathPrefix}/files/${relpath}`;
	const isImage = imagePostfixes.some(postfix => relpath.toLowerCase().endsWith(postfix))
	if (isImage) {
		return `[img[${title ? `${title}|`: ''}${url}]]`;
	}
	return `
		<div class="tc-tiddler-body tc-reveal">
			<embed src="${url}">
		</div>`;
};

})();