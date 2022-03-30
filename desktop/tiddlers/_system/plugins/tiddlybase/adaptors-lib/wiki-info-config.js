/*\
module-type: library
title: $:/plugins/tiddlybase/adaptors-lib/wiki-info-config.js
type: application/javascript
\*/

(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{getWikiInfoConfigValue:()=>t});const t=e=>$tw?.boot?.wikiInfo?.config[e]??$tw?.wiki?.getTiddler("$:/config/wikiInfoConfig")?.fields[e];var r=exports;for(var i in o)r[i]=o[i];o.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/wiki-info-config.js.map