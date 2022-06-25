/*\
module-type: library
title: $:/plugins/tiddlybase/browser-test-utils/test-utils.js
type: application/javascript
\*/

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test-utils.ts":
/*!***************************!*\
  !*** ./src/test-utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTiddlerDiv = exports.getCurrentTiddler = exports.closeAllTiddlers = exports.closeTiddler = exports.openTiddler = exports.initSpy = exports.sleep = exports.toJSON = void 0;
const navigator_1 = __webpack_require__(/*! @tiddlybase/plugin-tiddlybase-utils/src/navigator */ "@tiddlybase/plugin-tiddlybase-utils/src/navigator");
var tojson_1 = __webpack_require__(/*! ./tojson */ "./src/tojson.ts");
Object.defineProperty(exports, "toJSON", ({ enumerable: true, get: function () { return tojson_1.toJSON; } }));
const sleep = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));
exports.sleep = sleep;
const initSpy = (obj, method, options) => {
    let waitingResolves = [];
    const calls = [];
    const spy = spyOn(obj, method).and.callFake(function (...args) {
        let p;
        const resolutionData = { args, target: this, method, spy };
        const resolveWaitingPromises = options?.qualifier ? options.qualifier(resolutionData) : true;
        if (resolveWaitingPromises) {
            calls.push(resolutionData);
            // console.log(`[spy:${method}] invoked function, waitingResolves`, waitingResolves)
            for (p of waitingResolves) {
                p(resolutionData);
            }
            waitingResolves = [];
        }
        // console.log(`[spy:${method}] calling original function ${method}`)
        return spy.and.originalFn.apply(this, args);
    });
    const waitFor = ({ label, timeout = 1000 }) => new Promise((resolve, reject) => {
        waitingResolves.push((waitingResolveArgs) => resolve({ label, timeout, ...waitingResolveArgs }));
        // console.log(`[waitFor:${method}] registering new wait for promise ${label}`, waitingResolves);
        (0, exports.sleep)(timeout).then(() => reject(new Error(`timeout after waiting ${timeout} waiting ${label}`)));
    });
    return { spy, waitFor, calls };
};
exports.initSpy = initSpy;
let tw5Navigator = undefined;
const openTiddler = async (navigateTo) => {
    tw5Navigator = tw5Navigator ?? (0, navigator_1.findNavigator)();
    tw5Navigator?.dispatchEvent({ type: "tm-navigate", navigateTo });
    // force interruption of this function so that tiddlywiki events can be dispatched and acted upon.
    return await (0, exports.sleep)(0);
};
exports.openTiddler = openTiddler;
const closeTiddler = async (tiddlerTitle) => {
    tw5Navigator = tw5Navigator ?? (0, navigator_1.findNavigator)();
    tw5Navigator?.dispatchEvent({ type: "tm-close-tiddler", tiddlerTitle });
    // force interruption of this function so that tiddlywiki events can be dispatched and acted upon.
    return await (0, exports.sleep)(0);
};
exports.closeTiddler = closeTiddler;
const closeAllTiddlers = async () => {
    tw5Navigator = tw5Navigator ?? (0, navigator_1.findNavigator)();
    tw5Navigator?.dispatchEvent({ type: "tm-close-all-tiddlers" });
    return await (0, exports.sleep)(0);
};
exports.closeAllTiddlers = closeAllTiddlers;
const getCurrentTiddler = () => $tw.wiki.getTiddler('$:/HistoryList')?.fields['current-tiddler'];
exports.getCurrentTiddler = getCurrentTiddler;
const getTiddlerDiv = (title) => document.querySelectorAll(`div[data-tiddler-title="${title}"]`)?.[0];
exports.getTiddlerDiv = getTiddlerDiv;


/***/ }),

/***/ "./src/tojson.ts":
/*!***********************!*\
  !*** ./src/tojson.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {


// based on: https://github.com/sumn2u/dom-to-json
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toJSON = void 0;
const toJSON = (node) => {
    node = node || this;
    let obj = {
        nodeType: node.nodeType
    };
    if (node instanceof HTMLElement) {
        if (node.tagName) {
            obj.tagName = node.tagName.toLowerCase();
        }
        if (node.attributes) {
            obj.attributes = Object.fromEntries([...node.attributes].map((attr) => [attr.name, attr.value]));
        }
    }
    else {
        if (node.nodeName) {
            obj.nodeName = node.nodeName;
        }
    }
    if (node.nodeValue) {
        obj.nodeValue = node.nodeValue;
    }
    if (node.childNodes) {
        obj.childNodes = [...node.childNodes].map((child) => (0, exports.toJSON)(child));
    }
    return obj;
};
exports.toJSON = toJSON;


/***/ }),

/***/ "@tiddlybase/plugin-tiddlybase-utils/src/navigator":
/*!**********************************************************************!*\
  !*** external "$:/plugins/tiddlybase/tiddlybase-utils/navigator.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("$:/plugins/tiddlybase/tiddlybase-utils/navigator.js");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test-utils.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/browser-test-utils/test-utils.js.map