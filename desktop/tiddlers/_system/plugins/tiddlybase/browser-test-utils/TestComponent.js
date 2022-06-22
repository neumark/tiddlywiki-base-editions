/*\
module-type: library
title: $:/plugins/tiddlybase/browser-test-utils/TestComponent.js
type: application/javascript
\*/

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!*******************************************************************!*\
  !*** external "$:/plugins/tiddlybase/react/react-jsx-runtime.js" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("$:/plugins/tiddlybase/react/react-jsx-runtime.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/TestComponent.tsx ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addCallback = exports.clearCallbacks = exports.TestComponent = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
let renderCallbacks = [];
const TestComponent = (props) => {
    const { parentWidget, ...extraProps } = props;
    renderCallbacks.forEach((cb) => cb(props));
    return ((0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(extraProps, Object.keys(extraProps).sort()) }));
};
exports.TestComponent = TestComponent;
const clearCallbacks = () => {
    renderCallbacks = [];
};
exports.clearCallbacks = clearCallbacks;
const addCallback = (cb) => {
    renderCallbacks.push(cb);
};
exports.addCallback = addCallback;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/browser-test-utils/TestComponent.js.map