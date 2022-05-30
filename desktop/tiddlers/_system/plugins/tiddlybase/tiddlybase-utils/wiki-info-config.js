/*\
module-type: library
title: $:/plugins/tiddlybase/tiddlybase-utils/wiki-info-config.js
type: application/javascript
\*/

(()=>{"use strict";var e={525:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.DEFAULT_CONFIG=void 0,i.DEFAULT_CONFIG={"display-link-icons":!0,"default-file-location":"files","external-url-path-prefix":"files/","default-storage-prefix":""}},842:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.$tw=void 0,i.$tw=globalThis.$tw}},i={};function o(t){var r=i[t];if(void 0!==r)return r.exports;var f=i[t]={exports:{}};return e[t](f,f.exports,o),f.exports}var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.getWikiInfoConfigValue=void 0;const i=o(842),r=o(525);e.getWikiInfoConfigValue=e=>i.$tw?.boot?.wikiInfo?.config[e]??(e=>{const o=i.$tw?.wiki?.getTiddler("$:/config/wikiInfoConfig")?.fields[e];if("string"==typeof o)return JSON.parse(o)})(e)??r.DEFAULT_CONFIG[e]})();var r=exports;for(var f in t)r[f]=t[f];t.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/tiddlybase-utils/wiki-info-config.js.map