/*\
module-type: macro
tags:
title: $:/plugins/neumark/localfile.js
type: application/javascript

\*/

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
	{name: "src"},
	// optional parameter
	{name: "alt"},
	// optional parameter
	{name: "title"}
];

exports.run = function(src, alt, title) {
    return `<$EmbedURL src="${src}" description="${alt}" type="${title}" />`;
};

})();
