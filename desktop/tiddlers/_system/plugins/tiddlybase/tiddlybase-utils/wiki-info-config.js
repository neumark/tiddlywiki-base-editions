/*\
module-type: library
title: $:/plugins/tiddlybase/tiddlybase-utils/wiki-info-config.js
type: application/javascript
\*/

(()=>{"use strict";var e={525:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.DEFAULT_CONFIG=void 0,i.DEFAULT_CONFIG={"display-link-icons":!0,"parse-markdown-as-mdx":!1,"default-file-location":"files","external-url-path-prefix":"files/","default-storage-prefix":""}},842:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.$tw=void 0,i.$tw=globalThis.$tw}},i={};function o(r){var t=i[r];if(void 0!==t)return t.exports;var n=i[r]={exports:{}};return e[r](n,n.exports,o),n.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.getWikiInfoConfigValue=void 0;const i=o(842),t=o(525);e.getWikiInfoConfigValue=e=>i.$tw?.boot?.wikiInfo?.config[e]??(e=>{const o=i.$tw?.wiki?.getTiddler("$:/config/wikiInfoConfig")?.fields[e];if("string"==typeof o)return JSON.parse(o)})(e)??t.DEFAULT_CONFIG[e]})();var t=exports;for(var n in r)t[n]=r[n];r.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/wiki-info-config.js.map