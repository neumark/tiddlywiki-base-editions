/*\
module-type: library
title: $:/plugins/tiddlybase/tiddlybase-utils/base-widget.js
type: application/javascript
\*/

(()=>{"use strict";var e={783:e=>{e.exports=require("$:/core/modules/widgets/widget.js")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.BaseWidget=void 0;const{widget:t}=r(783),s=t;e.BaseWidget=class extends s{constructor(e,t){super(e,t)}getDOMNode(){const e=this.document.createElement("div");return e.innerHTML="please override BaseWidget.getDOMNode()",console.log("called BaseWidget.getDOMNode with props",this.props),e}render(e,t){this.parentDomNode=e,this.computeAttributes(),this.execute();const r=this.getDOMNode();e.insertBefore(r,t),this.domNodes=[r],this.onPostDomInsert()}onPostDomInsert(){}getPropAttribute(e){return super.getAttribute(String(e))}}})();var s=exports;for(var i in o)s[i]=o[i];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/plugins/tiddlybase/tiddlybase-utils/base-widget.js.map