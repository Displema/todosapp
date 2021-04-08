/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={734:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},601:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(2,arguments);var n=(0,r.default)(e),o=(0,r.default)(t);return n.getTime()>o.getTime()};var r=o(n(171)),a=o(n(734));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},171:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,a=(r=n(734))&&r.__esModule?r:{default:r};e.exports=t.default},856:function(e){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor,o=Object.freeze,i=Object.seal,s=Object.create,l="undefined"!=typeof Reflect&&Reflect,d=l.apply,c=l.construct;d||(d=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u,m=S(Array.prototype.forEach),p=S(Array.prototype.pop),f=S(Array.prototype.push),h=S(String.prototype.toLowerCase),g=S(String.prototype.match),y=S(String.prototype.replace),v=S(String.prototype.indexOf),T=S(String.prototype.trim),b=S(RegExp.prototype.test),k=(u=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(u,t)});function S(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return d(e,t,r)}}function A(e,r){t&&t(e,null);for(var a=r.length;a--;){var o=r[a];if("string"==typeof o){var i=h(o);i!==o&&(n(r)||(r[a]=i),o=i)}e[o]=!0}return e}function x(t){var n=s(null),r=void 0;for(r in t)d(e,t,[r])&&(n[r]=t[r]);return n}function E(e,t){for(;null!==e;){var n=a(e,t);if(n){if(n.get)return S(n.get);if("function"==typeof n.value)return S(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var w=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_=o(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),C=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),N=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=o(["#text"]),j=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),O=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),R=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=i(/<%[\s\S]*|[\s\S]*%>/gm),F=i(/^data-[\-\w.\u00B7-\uFFFF]/),P=i(/^aria-[\-\w]+$/),z=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),U=i(/^(?:\w+script|data):/i),B=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function W(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var G=function(){return"undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":$(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),n=function(t){return e(t)};if(n.version="2.2.7",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,d=t.Element,c=t.NodeFilter,u=t.NamedNodeMap,S=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,V=t.Text,Y=t.Comment,J=t.DOMParser,X=t.trustedTypes,Z=d.prototype,Q=E(Z,"cloneNode"),ee=E(Z,"nextSibling"),te=E(Z,"childNodes"),ne=E(Z,"parentNode");if("function"==typeof s){var re=a.createElement("template");re.content&&re.content.ownerDocument&&(a=re.content.ownerDocument)}var ae=K(X,r),oe=ae&&qe?ae.createHTML(""):"",ie=a,se=ie.implementation,le=ie.createNodeIterator,de=ie.getElementsByTagName,ce=ie.createDocumentFragment,ue=r.importNode,me={};try{me=x(a).documentMode?a.documentMode:{}}catch(e){}var pe={};n.isSupported="function"==typeof ne&&se&&void 0!==se.createHTMLDocument&&9!==me;var fe=q,he=H,ge=F,ye=P,ve=U,Te=B,be=z,ke=null,Se=A({},[].concat(W(w),W(L),W(D),W(C),W(M))),Ae=null,xe=A({},[].concat(W(j),W(O),W(R),W(I))),Ee=null,we=null,Le=!0,De=!0,_e=!1,Ce=!1,Ne=!1,Me=!1,je=!1,Oe=!1,Re=!1,Ie=!0,qe=!1,He=!0,Fe=!0,Pe=!1,ze={},Ue=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Be=null,$e=A({},["audio","video","img","source","image","track"]),We=null,Ge=A({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ke=null,Ve=a.createElement("form"),Ye=function(e){Ke&&Ke===e||(e&&"object"===(void 0===e?"undefined":$(e))||(e={}),e=x(e),ke="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS):Se,Ae="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR):xe,We="ADD_URI_SAFE_ATTR"in e?A(x(Ge),e.ADD_URI_SAFE_ATTR):Ge,Be="ADD_DATA_URI_TAGS"in e?A(x($e),e.ADD_DATA_URI_TAGS):$e,Ee="FORBID_TAGS"in e?A({},e.FORBID_TAGS):{},we="FORBID_ATTR"in e?A({},e.FORBID_ATTR):{},ze="USE_PROFILES"in e&&e.USE_PROFILES,Le=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ce=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,Oe=e.RETURN_DOM||!1,Re=e.RETURN_DOM_FRAGMENT||!1,Ie=!1!==e.RETURN_DOM_IMPORT,qe=e.RETURN_TRUSTED_TYPE||!1,je=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Fe=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,Ce&&(De=!1),Re&&(Oe=!0),ze&&(ke=A({},[].concat(W(M))),Ae=[],!0===ze.html&&(A(ke,w),A(Ae,j)),!0===ze.svg&&(A(ke,L),A(Ae,O),A(Ae,I)),!0===ze.svgFilters&&(A(ke,D),A(Ae,O),A(Ae,I)),!0===ze.mathMl&&(A(ke,C),A(Ae,R),A(Ae,I))),e.ADD_TAGS&&(ke===Se&&(ke=x(ke)),A(ke,e.ADD_TAGS)),e.ADD_ATTR&&(Ae===xe&&(Ae=x(Ae)),A(Ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&A(We,e.ADD_URI_SAFE_ATTR),Fe&&(ke["#text"]=!0),Ne&&A(ke,["html","head","body"]),ke.table&&(A(ke,["tbody"]),delete Ee.tbody),o&&o(e),Ke=e)},Je=A({},["mi","mo","mn","ms","mtext"]),Xe=A({},["foreignobject","desc","title","annotation-xml"]),Ze=A({},L);A(Ze,D),A(Ze,_);var Qe=A({},C);A(Qe,N);var et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:nt,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===tt)return t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||Je[r]):Boolean(Ze[n]);if(e.namespaceURI===et)return t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&Xe[r]:Boolean(Qe[n]);if(e.namespaceURI===nt){if(t.namespaceURI===tt&&!Xe[r])return!1;if(t.namespaceURI===et&&!Je[r])return!1;var a=A({},["title","style","font","a","script"]);return!Qe[n]&&(a[n]||!Ze[n])}return!1},at=function(e){f(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=oe}catch(t){e.remove()}}},ot=function(e,t){try{f(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ae[e])if(Oe||Re)try{at(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},it=function(e){var t=void 0,n=void 0;if(je)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=ae?ae.createHTML(e):e;try{t=(new J).parseFromString(o,"text/html")}catch(e){}if(!t||!t.documentElement){var i=(t=se.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&n&&t.body.insertBefore(a.createTextNode(n),t.body.childNodes[0]||null),de.call(t,Ne?"html":"body")[0]},st=function(e){return le.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,(function(){return c.FILTER_ACCEPT}),!1)},lt=function(e){return!(e instanceof V||e instanceof Y||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof S&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},dt=function(e){return"object"===(void 0===l?"undefined":$(l))?e instanceof l:e&&"object"===(void 0===e?"undefined":$(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ct=function(e,t,r){pe[e]&&m(pe[e],(function(e){e.call(n,t,r,Ke)}))},ut=function(e){var t=void 0;if(ct("beforeSanitizeElements",e,null),lt(e))return at(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return at(e),!0;var r=h(e.nodeName);if(ct("uponSanitizeElement",e,{tagName:r,allowedTags:ke}),!dt(e.firstElementChild)&&(!dt(e.content)||!dt(e.content.firstElementChild))&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return at(e),!0;if(!ke[r]||Ee[r]){if(Fe&&!Ue[r]){var a=ne(e),o=te(e);if(o&&a)for(var i=o.length-1;i>=0;--i)a.insertBefore(Q(o[i],!0),ee(e))}return at(e),!0}return e instanceof d&&!rt(e)?(at(e),!0):"noscript"!==r&&"noembed"!==r||!b(/<\/no(script|embed)/i,e.innerHTML)?(Ce&&3===e.nodeType&&(t=e.textContent,t=y(t,fe," "),t=y(t,he," "),e.textContent!==t&&(f(n.removed,{element:e.cloneNode()}),e.textContent=t)),ct("afterSanitizeElements",e,null),!1):(at(e),!0)},mt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in a||n in Ve))return!1;if(De&&b(ge,t));else if(Le&&b(ye,t));else{if(!Ae[t]||we[t])return!1;if(We[t]);else if(b(be,y(n,Te,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Be[e])if(_e&&!b(ve,y(n,Te,"")));else if(n)return!1}return!0},pt=function(e){var t=void 0,r=void 0,a=void 0,o=void 0;ct("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(o=i.length;o--;){var l=t=i[o],d=l.name,c=l.namespaceURI;if(r=T(t.value),a=h(d),s.attrName=a,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,ct("uponSanitizeAttribute",e,s),r=s.attrValue,!s.forceKeepAttr&&(ot(d,e),s.keepAttr))if(b(/\/>/i,r))ot(d,e);else{Ce&&(r=y(r,fe," "),r=y(r,he," "));var u=e.nodeName.toLowerCase();if(mt(u,a,r))try{c?e.setAttributeNS(c,d,r):e.setAttribute(d,r),p(n.removed)}catch(e){}}}ct("afterSanitizeAttributes",e,null)}},ft=function e(t){var n=void 0,r=st(t);for(ct("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ct("uponSanitizeShadowNode",n,null),ut(n)||(n.content instanceof i&&e(n.content),pt(n));ct("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,a){var o=void 0,s=void 0,d=void 0,c=void 0,u=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!dt(e)){if("function"!=typeof e.toString)throw k("toString is not a function");if("string"!=typeof(e=e.toString()))throw k("dirty is not a string, aborting")}if(!n.isSupported){if("object"===$(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(dt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||Ye(a),n.removed=[],"string"==typeof e&&(Pe=!1),Pe);else if(e instanceof l)1===(s=(o=it("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Oe&&!Ce&&!Ne&&-1===e.indexOf("<"))return ae&&qe?ae.createHTML(e):e;if(!(o=it(e)))return Oe?null:oe}o&&je&&at(o.firstChild);for(var m=st(Pe?e:o);d=m.nextNode();)3===d.nodeType&&d===c||ut(d)||(d.content instanceof i&&ft(d.content),pt(d),c=d);if(c=null,Pe)return e;if(Oe){if(Re)for(u=ce.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return Ie&&(u=ue.call(r,u,!0)),u}var p=Ne?o.outerHTML:o.innerHTML;return Ce&&(p=y(p,fe," "),p=y(p,he," ")),ae&&qe?ae.createHTML(p):p},n.setConfig=function(e){Ye(e),Me=!0},n.clearConfig=function(){Ke=null,Me=!1},n.isValidAttribute=function(e,t,n){Ke||Ye({});var r=h(e),a=h(t);return mt(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],f(pe[e],t))},n.removeHook=function(e){pe[e]&&p(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}()}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(856),t=n.n(e);const r=e=>{if(!e.includes("-"))return t=e.split("/"),new Date(t[2],t[1]-1,t[0]);var t=e.split("-");return new Date(t[0],t[1]-1,t[2])},a=[];class o{constructor(e){this.name=e,this.task=[],this.init=(()=>{a.push(this)})()}get name(){return this._name}set name(e){e&&(this._name=e)}addTaskToProject(e){this.task.push(e)}editTaskName(e,t){let n=this.task.findIndex((function(t){if(t.name===e)return!0}));this.task[n].name=t}editTaskStatus(e,t){let n=this.task.findIndex((function(t){if(t.name===e)return!0}));this.task[n].status=t}editTaskDate(e,t){let n=this.task.findIndex((function(t){if(t.name===e)return!0}));this.task[n].dueTo=t}removeTaskFromProject(e){let t=this.task.findIndex((function(t){if(t.name===e)return!0}));this.task.splice(t,1)}}const i=e=>a.find((function(t){if(t.name===e)return!0}));var s=n(601),l=n.n(s);let d=[];const c=()=>{a.forEach((e=>{if(0!==e.task.length)e.task.forEach((e=>{d.push(e)}));else{let e=S.editContainer.getTitle();S.editContainer.addTitle(e)}})),0!==d.length&&(S.editContainer.showAllTodos(d),d=[])},u=()=>{let e=new Date;e.setDate(e.getDate()-1),a.forEach((t=>{0!==t.task.length&&t.task.forEach((t=>{let n=t.dueTo;if("No date"===n)return;let a=r(n);l()(e,a)&&d.push(t)}))})),S.editContainer.showAllTodos(d),d=[]},m=()=>{let e=new Date;e.setDate(e.getDate()+7);let t=new Date;a.forEach((n=>{0!==n.task.length&&n.task.forEach((n=>{let a=n.dueTo;if("No date"===a)return;let o=r(a);console.log(e),console.log(o),l()(e,o)&&l()(o,t)&&d.push(n)}))})),S.editContainer.showAllTodos(d),d=[]},p=()=>{let e=new Date;a.forEach((e=>{0!==e.task.length&&e.task.forEach((e=>{"expired"===e.status&&(e.status="uncompleted")}))})),a.forEach((t=>{0!==t.task.length&&t.task.forEach((t=>{let n=t.dueTo;if("No date"===n)return;let a=r(n);l()(e,a)&&(t.status="expired")}))}))},f=class{constructor(e,t){this.name=e,this.project=t||"Default",this.status="uncompleted",this.dueTo="No date"}set name(e){this._name=e}get name(){return this._name}set project(e){this._project=e}get project(){return this._project}set dueTo(e){this._dueTo=e}get dueTo(){return this._dueTo}set status(e){this._status=e}get status(){return this._status}},h=()=>{0!==localStorage.length&&Object.keys(localStorage).forEach((e=>{a.splice(1);let t=localStorage.getItem(e),n=JSON.parse(t).task;S.editSideBar.addProject(e);const r=new o(e);n.forEach((t=>{const n=new f(t._name,e);n.status=t._status,n.dueTo=t._dueTo,r.addTaskToProject(n)}))}))},g=e=>{const t=e.name,n=JSON.stringify(e);localStorage.setItem(t,n)},y=e=>{localStorage.removeItem(e)},v=(document.querySelector(".ToDoDate"),document.querySelector(".ToDoContainer")),T=document.querySelector(".projects"),b=(document.querySelector(".projects h2"),document.querySelector(".addProject")),k={editSideBar:(()=>{const e=e=>{e.remove()},n=e=>{if("Default"===e)return;let n=document.createElement("button"),a=t().sanitize(e);n.innerHTML=`<i class="material-icons">folder</i><div style="pointer-events: none">${a}</div><i class="material-icons">delete</i>`,n.classList.add("singleProject"),T.appendChild(n),n.addEventListener("click",(e=>{if("I"===e.target.nodeName)return;let t=e.target.children[1].textContent;r(e.target),k.editContainer.addTitle(t);let n=i(t);k.editContainer.showAllTodos(n.task),k.editContainer.showTodoAdder()})),L()},r=e=>{let t=document.querySelector(".selected");t&&t.classList.remove("selected"),e&&e.classList.add("selected")};return{addProjectText:()=>{let t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("projectButton"),t.setAttribute("placeholder","Project name"),t.setAttribute("data-button","project"),T.insertBefore(t,b),t.focus(),t.addEventListener("blur",(i=>{let s=i.target.value?i.target.value:"Default";if((e=>{let t=!1;return a.forEach((n=>{n.name===e&&(t=!0)})),t})(s))return e(t),void r();n(s),e(t);let l=new o(s);g(l),r()})),r(b)},removeProjectText:e,addProject:n,removeProject:e=>{e.remove()},toggleSelected:r}})(),editContainer:(()=>{const e=document.querySelector(".ToDoContainer"),t=()=>document.querySelector(".containerTitle").textContent,n=()=>{let e=document.querySelector(".addTask"),t=document.querySelector(".inputTask")?document.querySelector(".inputTask"):void 0;if(e||t)return;const n=document.createElement("button"),r=document.querySelector(".ToDoContainer h1");n.innerHTML='<i class="material-icons" style="padding-right: 0.2em">add_task</i><p>Add task</p>',n.classList.add("addTask"),r.after(n),D()};return{showAllTodos:t=>{const n=document.querySelector("body > div.ToDoContainer > h1.containerTitle").outerHTML;e.innerHTML=n;let r='<i title="Edit task status"class="material-icons">panorama_fish_eye</i>';t.forEach((e=>{let t=e.name,n=e.project,a=e.dueTo||"No date",o=e.status,i=document.createElement("button");i.setAttribute("data-value",`${t}`),i.setAttribute("data-project",`${n}`),i.classList.add("singleTask"),"expired"===o?i.classList.add("expired"):"completed"===o&&(i.classList.add("completed"),r='<i title="Edit task status"class="material-icons">done</i>'),i.innerHTML=`${r}<p>${t}</p><p>${a}</p><i title="Delete task" class="material-icons">clear</i>`,v.appendChild(i),i.addEventListener("click",(e=>C(e))),document.querySelector(`[data-value="${t}"] p`).addEventListener("click",(e=>N(e))),document.querySelector(`[data-value="${t}"] p:nth-child(3)`).addEventListener("click",(e=>M(e)))}))},addSingleTodo:e=>{const t=document.querySelector(".ToDoContainer");let n=e.name,r=e.project,a=e.dueTo||"No date",o=document.createElement("button");o.classList.add("singleTask"),o.setAttribute("data-value",`${n}`),o.setAttribute("data-project",`${r}`),o.innerHTML+=`<i title="Edit task status" class="material-icons">panorama_fish_eye</i><p>${n}</p><p>${a}</p><i title="Delete task" class="material-icons">clear</i>`,t.innerHTML+=o.outerHTML,document.querySelector(`[data-value="${n}"]`).addEventListener("click",(e=>C(e))),document.querySelector(`[data-value="${n}"] p`).addEventListener("click",(e=>N(e))),document.querySelector(`[data-value="${n}"] p:nth-child(3)`).addEventListener("click",(e=>M(e)))},removeTodo:e=>{v.remove(e)},editNameContext:(e,r)=>{let a=t(),o=e.parentElement.dataset.project;const s=i(o);let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder",r),e.after(l),e.remove(),l.focus(),l.addEventListener("blur",(()=>{let e=l.value&&""!==l.value&&l.value!==r?l.value:r;switch(s.editTaskName(r,e),g(s),"Inbox"!==a&&"This week"!==a&&"Today"!==a&&(k.editContainer.showAllTodos(s.task),n()),a){case"Inbox":c(),n();break;case"Today":u();break;case"This week":m()}}))},editDateContext:(e,a)=>{let o=t(),s=e.parentElement.dataset.project,l=e.parentElement.dataset.value;const d=i(s);let f=document.createElement("input");f.setAttribute("type","date"),f.setAttribute("value",a),e.after(f),e.remove(),f.focus(),f.addEventListener("blur",(()=>{let e=f.value&&""!==f.value&&f.value!==a?f.value:a;if(e){let t=(e=>{let t=e.getDate(),n=e.getMonth()+1;return t<10&&(t=`0${t}`),n<10&&(n=`0${n}`),`${t}/${n}/${e.getFullYear()}`})(r(e));d.editTaskDate(l,t),g(d)}if("Inbox"!==o&&"This week"!==o&&"Today"!==o)return k.editContainer.showAllTodos(d.task),n(),void p();switch(p(),o){case"Inbox":c(),n();break;case"Today":u();break;case"This week":m()}}))},showTodoAdder:n,addTaskContext:()=>{let e=document.querySelector("body > div.ToDoContainer > button.addTask");if(document.querySelector("body > div.ToDoContainer > div")?document.querySelector("body > div.ToDoContainer > div"):void 0)return;let t=document.createElement("div");t.classList.add("inputTask"),t.innerHTML='<input type="text" name="taskName" id="" placeholder="Task name">\n        <button id="confirmAddTask"><i class="material-icons">add</i>Add</button> <button id="cancelAddTask">Cancel</button>',e.after(t)},disableTaskAdder:()=>{let e=document.querySelector(".addTask");e.setAttribute("disabled",""),e.style.animation="taskFadeOut 0.2s linear forwards"},enableTaskAdder:()=>{let e=document.querySelector(".addTask"),t=document.querySelector("body > div.ToDoContainer > div")?document.querySelector("body > div.ToDoContainer > div"):void 0;t&&(e.removeAttribute("disabled"),e.style.animation="taskFadeIn 0.2s linear forwards",t.remove())},addTitle:t=>{e.innerHTML=`<h1 class="containerTitle">${t}</h1>`},getTitle:t,editTaskStatus:(e,t)=>{switch(t){case"uncompleted":e.parentElement.classList.remove("completed"),e.parentElement.classList.remove("expired"),e.innerHTML="panorama_fish_eye";break;case"completed":e.parentElement.classList.remove("uncompleted"),e.parentElement.classList.remove("expired"),e.parentElement.classList.add("completed"),e.innerHTML="done";break;case"expired":e.parentElement.classList.remove("uncompleted"),e.parentElement.classList.remove("completed"),e.parentElement.classList.add("expired"),e.innerHTML="hourglass_empty"}}}})()},S=k,A=document.querySelector(".inbox"),x=document.querySelector(".today"),E=document.querySelector(".thisWeek"),w=document.querySelector(".addProject"),L=()=>{document.querySelectorAll(".singleProject").forEach((e=>{e.addEventListener("mouseover",(e=>{(e.target.children[2]?e.target.children[2]:e.target).style.opacity=1})),e.addEventListener("mouseout",(e=>{e.target&&"I"!==e.target.nodeName&&((e.target.children[2]?e.target.children[2]:e.target).style.opacity=0)})),e.addEventListener("click",(e=>{if("I"===e.target.nodeName){let t=e.target.parentElement,n=S.editContainer.getTitle(),r=t.children[1].textContent;(e=>{let t=a.findIndex((function(t){if(t.name===e)return!0}));-1!==t&&a.splice(t,1)})(t),t.children[1].textContent===n&&A.click(),y(r),S.editSideBar.removeProject(t)}}))}))},D=()=>{document.querySelector(".addTask").addEventListener("click",(()=>{S.editContainer.addTaskContext(),S.editContainer.disableTaskAdder(),_()}))},_=()=>{const e=document.querySelector("#confirmAddTask"),t=document.querySelector("#cancelAddTask"),n=document.querySelector("body > div.ToDoContainer > div > input[type=text]");e.addEventListener("click",(()=>{let e,t=n.value&&""!==n.value?n.value:void 0;if(!t)return S.editContainer.enableTaskAdder(),void D();let r=S.editContainer.getTitle();e="Inbox"===r?"Default":r;let a=i(e);a||(a=new o("Default"));let s=new f(t,e);S.editContainer.addSingleTodo(s),a.addTaskToProject(s),g(a),S.editContainer.enableTaskAdder(),D()})),t.addEventListener("click",(()=>{S.editContainer.enableTaskAdder(),D()}))},C=e=>{if("I"===e.target.nodeName){const t=e.target.parentElement.dataset.project,n=e.target.parentElement.dataset.value,r=i(t),a=S.editContainer.getTitle();switch(e.target.innerHTML){case"panorama_fish_eye":S.editContainer.editTaskStatus(e.target,"completed"),r.editTaskStatus(n,"completed"),g(r);break;case"clear":if(r.removeTaskFromProject(n),g(r),"Inbox"!==a&&"This week"!==a&&"Today"!==a)return S.editContainer.showAllTodos(r.task),void S.editContainer.showTodoAdder();c(),S.editContainer.showTodoAdder();break;case"done":S.editContainer.editTaskStatus(e.target,"uncompleted"),r.editTaskStatus(n,"uncompleted"),g(r)}}},N=e=>{let t=e.target.textContent;S.editContainer.editNameContext(e.target,t)},M=e=>{let t="No date"!==e.target.textContent?e.target.textContent:"";S.editContainer.editDateContext(e.target,t)};h(),p(),A.addEventListener("click",(e=>{e.target.classList.contains("selected")||(S.editSideBar.toggleSelected(e.target),S.editContainer.addTitle("Inbox"),c(),S.editContainer.showTodoAdder())})),A.click(),x.addEventListener("click",(e=>{e.target.classList.contains("selected")||(S.editSideBar.toggleSelected(e.target),S.editContainer.addTitle("Today"),u())})),E.addEventListener("click",(e=>{e.target.classList.contains("selected")||(S.editSideBar.toggleSelected(e.target),S.editContainer.addTitle("This week"),m())})),w.addEventListener("click",(e=>{e.target.classList.contains("selected")||(S.editSideBar.toggleSelected(e.target),S.editSideBar.addProjectText())}))})()})();