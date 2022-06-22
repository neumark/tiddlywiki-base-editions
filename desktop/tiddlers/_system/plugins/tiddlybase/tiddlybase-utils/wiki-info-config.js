/*\
module-type: library
title: $:/plugins/tiddlybase/tiddlybase-utils/wiki-info-config.js
type: application/javascript
\*/

(()=>{"use strict";var e={525:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.DEFAULT_CONFIG=void 0,i.DEFAULT_CONFIG={"display-link-icons":!0,"default-file-location":"files","external-url-path-prefix":"files/","default-storage-prefix":"","default-tiddler-location":"tiddlers","retain-original-tiddler-path":!1}}},i={};function t(r){var o=i[r];if(void 0!==o)return o.exports;var n=i[r]={exports:{}};return e[r](n,n.exports,t),n.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.getWikiInfoConfigValue=void 0;const i=t(525);e.getWikiInfoConfigValue=e=>$tw?.boot?.wikiInfo?.config[e]??(e=>{const i=$tw?.wiki?.getTiddler("$:/config/wikiInfoConfig")?.fields[e];if("string"==typeof i)return JSON.parse(i)})(e)??i.DEFAULT_CONFIG[e]})();var o=exports;for(var n in r)o[n]=r[n];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/tiddlybase-utils/wiki-info-config.js.map