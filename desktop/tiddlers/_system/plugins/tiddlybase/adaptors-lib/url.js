/*\
module-type: library
title: $:/plugins/tiddlybase/adaptors-lib/url.js
type: application/javascript
\*/

(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{getParentURL:()=>i,makeAbsoluteURL:()=>s});const r="files",o=t=>$tw?.boot?.wikiInfo?.config[t]??$tw?.wiki?.getTiddler("$:/config/wikiInfoConfig")?.fields[t],i=()=>$tw?.tiddlybase?.parentLocation?.href,a=o("default-storage-prefix")??"",n=(()=>{if($tw?.desktop){let t=([...new URLSearchParams(window.location.search)].find((([t,e])=>"pathname"===t))??[])[1];const e=o("default-file-location");return t+=e?`/${e}`:"",t}})(),s=t=>{return(t=>{const e=t.toLowerCase().trim();return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")})(t)?t:t.startsWith(r)?(e=t,$tw?.tiddlybase?.inSandboxedIframe&&$tw?.tiddlybase?.parentClient?$tw.tiddlybase.parentClient("getDownloadURL",[`${a}${e.substring(r.length)}`]):$tw?.desktop?`file://${n}/${e}`:e):(i()??"")+t;var e};var d=exports;for(var l in e)d[l]=e[l];e.__esModule&&Object.defineProperty(d,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/url.js.map