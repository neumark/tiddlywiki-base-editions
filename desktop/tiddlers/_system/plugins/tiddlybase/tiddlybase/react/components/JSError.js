/*\
module-type: library
title: $:/plugins/tiddlybase/react/components/JSError.js
type: application/javascript
\*/

(()=>{"use strict";var r={30:r=>{r.exports=require("$:/plugins/tiddlybase/react/react-jsx-runtime.js")}},e={};function o(s){var t=e[s];if(void 0!==t)return t.exports;var d=e[s]={exports:{}};return r[s](d,d.exports,o),d.exports}var s={};(()=>{var r=s;Object.defineProperty(r,"__esModule",{value:!0}),r.JSError=void 0;const e=o(30);r.JSError=r=>{console.dir(r);const o=r.title||"Javascript error";return(0,e.jsxs)("div",{style:{border:"1px solid #eee",borderLeftColor:"#eb4747",backgroundColor:"rgb(220 59 59 / 51%)",padding:"20px",margin:"20px 0",borderLeftWidth:"5px",borderRadius:"3px"},children:[(0,e.jsx)("h3",{children:o}),(0,e.jsxs)("div",{children:[r.error.message," "]}),r.error.stack&&(0,e.jsx)("pre",{children:r.error.stack})]})}})();var t=exports;for(var d in s)t[d]=s[d];s.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/react/components/JSError.js.map