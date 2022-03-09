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

exports.run = function(relpath, title) {
    if ($tw.desktop) {
        // tiddlydesktop case
        const url = `file://${pathPrefix}/${relpath}`;
        const isImage = imagePostfixes.some(postfix => relpath.toLowerCase().endsWith(postfix))
        const isVideo = videoPostfixes.some(postfix => relpath.toLowerCase().endsWith(postfix))
        if (isImage) {
            return `[img[${title ? `${title}|`: ''}${url}]]`;
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

    }
    // else: static rendering and in-browser firebase modes
    // TODO: read prefix from config
    return `<$storageFile src="csaladwiki/files/${relpath}" title=${title}/>`;
};

})();
