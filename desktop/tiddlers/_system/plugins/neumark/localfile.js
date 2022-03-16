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
	{name: "relpath"},
	// optional parameter
	{name: "alt"},
	// optional parameter
	{name: "title"}
];

const imagePostfixes = ['.jpg', '.jpeg', '.png', '.gif', '.heic', '.svg'];
const videoPostfixes = ['.mp4', '.mov'];

let pathPrefix = undefined;

if (globalThis.window) { // if not running under headless node
    pathPrefix = ([ ...(new URLSearchParams(window.location.search))].find(([k, v]) => k === 'pathname') ?? [])[1];
    // add default file location from tiddlywiki.info
    // TODO: handle case when this is an absolute path!
    const fileLocation = $tw?.boot?.wikiInfo?.config['default-file-location']
    pathPrefix += fileLocation ? `/${fileLocation}` : '';
}

exports.run = function(relpath, alt, title) {
    // the argument naming is a little weird
    // alt and title are standard img attributes.
    // The markdown syntax is ![alt](url "title").
    // Since we don't actually use title for anything (the tooltip is alt), we can
    // indicate that it's a download link.
    const url = `file://${pathPrefix}/${relpath}`;
    const isImage = imagePostfixes.some(postfix => relpath.toLowerCase().endsWith(postfix))
    const isVideo = videoPostfixes.some(postfix => relpath.toLowerCase().endsWith(postfix))
    if (title === "download") {
        return `<a href="${url}" title="${alt}" download>${alt}</a>`;
    }
    if (isImage) {
        return `[img[${alt ? `${alt}|`: ''}${url}]]`;
    }
    if (isVideo) {
        return `
        <div class="tc-tiddler-body tc-reveal">
        <video controls>
            <source src="${url}" />
        </video>
        </div>`;
    }
    return `
        <div class="tc-tiddler-body tc-reveal">
            <embed src="${url}">
        </div>`;

};

})();
