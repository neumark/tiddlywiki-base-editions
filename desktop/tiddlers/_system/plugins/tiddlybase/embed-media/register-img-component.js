/*\
module-type: startup
title: $:/plugins/tiddlybase/embed-media/register-img-component.js
type: application/javascript
\*/

(()=>{"use strict";var e={347:e=>{e.exports=require("$:/plugins/tiddlybase/embed-media/embed-media.js")},700:e=>{e.exports=require("$:/plugins/tiddlybase/mdx/mdx.js")},30:e=>{e.exports=require("$:/plugins/tiddlybase/react/react-jsx-runtime.js")}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var a=r[s]={exports:{}};return e[s](a,a.exports,t),a.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.startup=e.synchronous=e.before=e.after=e.platforms=e.name=void 0;const r=t(30),o=t(700),a=t(347);e.name="register-img-component",e.platforms=["browser","node"],e.after=["load-modules"],e.before=["startup"],e.synchronous=!0;e.startup=()=>(0,o.registerComponent)("img",(e=>{const{alt:t,src:s,title:o}=e;return s?(0,r.jsx)(a.EmbedMedia,{src:s,description:t,attributes:o}):null}))})();var o=exports;for(var a in s)o[a]=s[a];s.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/embed-media/register-img-component.js.map