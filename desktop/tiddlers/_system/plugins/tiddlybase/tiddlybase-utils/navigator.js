/*\
module-type: library
title: $:/plugins/tiddlybase/tiddlybase-utils/navigator.js
type: application/javascript
\*/

(()=>{"use strict";var e={};((e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.findNavigator=void 0;r.findNavigator=(e=$tw.rootWidget)=>{const t=e=>"navigator"===e?.parseTreeNode?.type;if(e)for(let o of e.children||[]){if(t(o))return o;const e=(0,r.findNavigator)(o);if(e)return e}}})(0,e);var r=exports;for(var t in e)r[t]=e[t];e.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/tiddlybase-utils/navigator.js.map