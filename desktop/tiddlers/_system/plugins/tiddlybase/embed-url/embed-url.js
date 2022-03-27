/*\
module-type: widget
title: $:/plugins/tiddlybase/embed-url/embed-url.js
type: application/javascript
\*/

(()=>{"use strict";var e={783:e=>{e.exports=require("$:/core/modules/widgets/widget.js")}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{r.r(s),r.d(s,{EmbedURL:()=>b});const e=require("$:/plugins/tiddlybase/adaptors-lib/url.js"),t={img:["jpg","jpeg","png","gif","heic","svg"],video:["mp4","mov","mkv"],embed:["pdf"],a:[]},i=['target="_blank"','rel="noopener"',"noreferrer"],o=(e,t,r)=>t[e]?`${r??e}="${t[e]}" `:"",n=(e,t=[],r="")=>`<a href="${e}" ${t.join(" ")}>${r}</a>`,d={img:(e,t)=>{const r=`<img src="${e}" ${o("height",t)} ${o("width",t)} ${o("description",t,"title")} />`;return"open-in-new-tab-on-click"==t.type?n(e,i,r):r},video:(e,t)=>`\n      <video controls ${o("height",t)} ${o("width",t)}>\n        <source src="${e}" />\n      </video>`,embed:(e,t)=>`<embed src="${e}" ${o("height",t)} ${o("width",t)} />`,a:(e,t)=>{t.cssClasses?.push("embed-inline-link-container");let r=[];return"download"===t.type&&(r=[`download="${t.src.split("/").slice(-1)[0]}"`]),"open-in-new-tab-on-click"===t.type&&(r=i),n(e,r,t.description)}},c=["tc-tiddler-body","tc-reveal"],l=e=>{let r;if("download"===e.type)r="a";else{r=(e=>{let r,s;for([r,s]of Object.entries(t))if(s.includes(e))return r;return"embed"})(e.src.toLowerCase().trim().split(".").slice(-1)[0]),$tw?.tiddlybase?.inSandboxedIframe&&"embed"===r&&(r="a",e.description=e.description||e.src,e.type="open-in-new-tab-on-click")}return d[r]},p=(e,t)=>{t?.forEach((t=>e.classList.add(t)))},a=e=>"loading...",{widget:u}=r(783),h=u;class b extends h{constructor(e,t){super(e,t)}render(t,r){this.parentDomNode=t,this.computeAttributes(),this.execute();const s=((t,r)=>{const s=l(r),i=t.createElement("div");r.cssClasses=r.cssClasses??c.slice();const o=(0,e.makeAbsoluteURL)(r.src);return"string"==typeof o?(i.innerHTML=s(o,r),p(i,r.cssClasses)):(i.innerHTML=a(r),o.then((e=>{i.innerHTML=s(e,r),p(i,r.cssClasses)}))),i})(this.document,this.props);t.insertBefore(s,r),this.domNodes.push(s)}execute(){this.props={src:this.getAttribute("src"),width:this.getAttribute("width"),height:this.getAttribute("height"),description:this.getAttribute("description"),type:this.getAttribute("type")}}refresh(){var e=this.computeAttributes();return!!(e.src||e.width||e.height||e.description||e.type)&&(this.refreshSelf(),!0)}}})();var i=exports;for(var o in s)i[o]=s[o];s.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=/sourcemaps/embed-url.js.map