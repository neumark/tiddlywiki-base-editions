/*\
module-type: library
title: $:/plugins/tiddlybase/react/dom-removal-detector.js
type: application/javascript
\*/

(()=>{"use strict";var e={};((e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.uninstall=o.install=o.isInstalled=o.unmonitorRemoval=o.monitorRemoval=void 0;let t,n=new Map;const r=(e,o)=>!e?.parentNode||e?.parentNode===o||"HTMLBodyElement"!==e.parentNode.constructor.name&&r(e.parentNode,o);o.monitorRemoval=(e,o)=>{n.set(e,o)};o.unmonitorRemoval=e=>{n.delete(e)};o.isInstalled=()=>!!t;o.install=e=>{if((0,o.isInstalled)())return void console.log("already installed, doing nothing");t=new MutationObserver(((e,t)=>{for(const t of e)t.removedNodes&&t.removedNodes.forEach((e=>{var t;"HTMLDivElement"===e.constructor.name&&(t=e,n.forEach(((e,n)=>{r(n,t)&&(e(t),(0,o.unmonitorRemoval)(n))})))}))})),t.observe(e.body,{attributes:!1,childList:!0,subtree:!0,characterData:!1})};o.uninstall=()=>{t?(t.disconnect(),n.clear(),t=void 0):console.log("not installed, doing nothing")}})(0,e);var o=exports;for(var t in e)o[t]=e[t];e.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/react/dom-removal-detector.js.map