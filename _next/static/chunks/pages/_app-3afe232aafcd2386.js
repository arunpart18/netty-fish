(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3830)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,a){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,n=r(2648).Z,l=r(1598).Z,o=r(7273).Z,i=l(r(7294)),s=n(r(3121)),c=r(2675),d=r(139),h=r(8730);r(7238);var u=n(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,n,l,o,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;n.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let x=i.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:l,qualityInt:s,className:c,imgStyle:d,blurStyle:h,isLazy:u,fill:f,placeholder:p,loading:m,srcString:x,config:j,unoptimized:v,loader:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:N,onLoad:k,onError:E}=e,S=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},S,r,{width:l,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,loading:m,style:a({},d,h),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,x,p,y,w,_,v))},[x,p,y,w,_,E,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,x,p,y,w,_,v)},onError:e=>{N(!0),"blur"===p&&_(!0),E&&E(e)}})))}),j=i.forwardRef((e,t)=>{let r,n;var l,{src:g,sizes:j,unoptimized:v=!1,priority:b=!1,loading:y,className:w,quality:_,width:N,height:k,fill:E,style:S,onLoad:C,onLoadingComplete:B,placeholder:O="empty",blurDataURL:M,layout:P,objectFit:D,objectPosition:R,lazyBoundary:z,lazyRoot:I}=e,L=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=i.useContext(h.ImageConfigContext),F=i.useMemo(()=>{let e=f||A||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[A]),T=L,$=T.loader||u.default;delete T.loader;let H="__next_img_default"in $;if(H){if("custom"===F.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=$;$=e=>{let{config:t}=e,r=o(e,["config"]);return W(r)}}if(P){"fill"===P&&(E=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];Z&&(S=a({},S,Z));let G={responsive:"100vw",fill:"100vw"}[P];G&&!j&&(j=G)}let U="",V=m(N),Y=m(k);if("object"==typeof(l=g)&&(p(l)||void 0!==l.src)){let q=p(g)?g.default:g;if(!q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(!q.height||!q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)));if(r=q.blurWidth,n=q.blurHeight,M=M||q.blurDataURL,U=q.src,!E){if(V||Y){if(V&&!Y){let J=V/q.width;Y=Math.round(q.height*J)}else if(!V&&Y){let K=Y/q.height;V=Math.round(q.width*K)}}else V=q.width,Y=q.height}}let Q=!b&&("lazy"===y||void 0===y);((g="string"==typeof g?g:U).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,Q=!1),F.unoptimized&&(v=!0),H&&g.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(v=!0);let[X,ee]=i.useState(!1),[et,er]=i.useState(!1),ea=m(_),en=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:R}:{},et?{}:{color:"transparent"},S),el="blur"===O&&M&&!X?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:Y,blurWidth:r,blurHeight:n,blurDataURL:M}),'")')}:{},eo=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:l,sizes:o,loader:i}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let l=/(^|\s)(1?\d?\d)vw/g,o=[];for(let i;i=l.exec(r);i)o.push(parseInt(i[2]));if(o.length){let s=.01*Math.min(...o);return{widths:n.filter(e=>e>=a[0]*s),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,a)=>"".concat(i({config:t,src:r,quality:l,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:i({config:t,src:r,quality:l,width:s[d]})}}({config:F,src:g,unoptimized:v,width:V,quality:ea,sizes:j,loader:$}),ei=g,es={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:T.crossOrigin},ec=i.useRef(C);i.useEffect(()=>{ec.current=C},[C]);let ed=i.useRef(B);i.useEffect(()=>{ed.current=B},[B]);let eh=a({isLazy:Q,imgAttributes:eo,heightInt:Y,widthInt:V,qualityInt:ea,className:w,imgStyle:en,blurStyle:el,loading:y,config:F,fill:E,unoptimized:v,placeholder:O,loader:$,srcString:ei,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:er},T);return i.default.createElement(i.default.Fragment,null,i.default.createElement(x,Object.assign({},eh,{ref:t})),b?i.default.createElement(s.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},es))):null)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2648).Z,n=r(7273).Z,l=a(r(7294)),o=r(1003),i=r(7795),s=r(4465),c=r(2692),d=r(8245),h=r(9246),u=r(227),f=r(3468);let p=new Set;function m(e,t,r,a){if(o.isLocalURL(t)){if(!a.bypassPrefetchedCheck){let n=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(p.has(l))return;p.add(l)}Promise.resolve(e.prefetch(t,r,a)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let x=l.default.forwardRef(function(e,t){let r,a;let{href:i,as:p,children:x,prefetch:j,passHref:v,replace:b,shallow:y,scroll:w,locale:_,onClick:N,onMouseEnter:k,onTouchStart:E,legacyBehavior:S=!1}=e,C=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=x,S&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let B=!1!==j,O=l.default.useContext(c.RouterContext),M=l.default.useContext(d.AppRouterContext),P=null!=O?O:M,D=!O,{href:R,as:z}=l.default.useMemo(()=>{if(!O){let e=g(i);return{href:e,as:p?g(p):e}}let[t,r]=o.resolveHref(O,i,!0);return{href:t,as:p?o.resolveHref(O,p):r||t}},[O,i,p]),I=l.default.useRef(R),L=l.default.useRef(z);S&&(a=l.default.Children.only(r));let A=S?a&&"object"==typeof a&&a.ref:t,[F,T,$]=h.useIntersection({rootMargin:"200px"}),H=l.default.useCallback(e=>{(L.current!==z||I.current!==R)&&($(),L.current=z,I.current=R),F(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[z,A,R,$,F]);l.default.useEffect(()=>{P&&T&&B&&m(P,R,z,{locale:_})},[z,R,T,_,B,null==O?void 0:O.locale,P]);let W={ref:H,onClick(e){S||"function"!=typeof N||N(e),S&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,r,a,n,i,s,c,d,h){let{nodeName:u}=e.currentTarget,f="A"===u.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[n?"replace":"push"](r,a,{shallow:i,locale:c,scroll:s}):t[n?"replace":"push"](a||r,{forceOptimisticNavigation:!h})};d?l.default.startTransition(p):p()}(e,P,R,z,b,y,w,_,D,B)},onMouseEnter(e){S||"function"!=typeof k||k(e),S&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),P&&(B||!D)&&m(P,R,z,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof E||E(e),S&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),P&&(B||!D)&&m(P,R,z,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||v||"a"===a.type&&!("href"in a.props)){let Z=void 0!==_?_:null==O?void 0:O.locale,G=(null==O?void 0:O.isLocaleDomain)&&u.getDomainLocale(z,Z,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);W.href=G||f.addBasePath(s.addLocale(z,Z,null==O?void 0:O.defaultLocale))}return S?l.default.cloneElement(a,W):l.default.createElement("a",Object.assign({},C,W),r)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!l,[d,h]=a.useState(!1),[u,f]=a.useState(null);a.useEffect(()=>{if(l){if(!c&&!d&&u&&u.tagName){let e=function(e,t,r){let{id:a,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},a=i.find(e=>e.root===r.root&&e.margin===r.margin);if(a&&(t=o.get(a)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},i.push(r),o.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),o.delete(a);let t=i.findIndex(e=>e.root===a.root&&e.margin===a.margin);t>-1&&i.splice(t,1)}}}(u,e=>e&&h(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!d){let a=n.requestIdleCallback(()=>h(!0));return()=>n.cancelIdleCallback(a)}},[u,c,r,t,d]);let p=a.useCallback(()=>{h(!1)},[]);return[f,d,p]};var a=r(7294),n=r(4686);let l="function"==typeof IntersectionObserver,o=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:l}=e,o=a||t,i=n||r,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3830:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var a=r(5893);r(4744);var n=r(4184),l=r.n(n),o=r(7294);let i=["as","disabled"];function s({tagName:e,disabled:t,href:r,target:a,rel:n,role:l,onClick:o,tabIndex:i=0,type:s}){e||(e=null!=r||null!=a||null!=n?"a":"button");let c={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},c];let d=a=>{var n;if(!t&&("a"!==e||(n=r)&&"#"!==n.trim())||a.preventDefault(),t){a.stopPropagation();return}null==o||o(a)},h=e=>{" "===e.key&&(e.preventDefault(),d(e))};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:d,onKeyDown:h},c]}let c=o.forwardRef((e,t)=>{let{as:r,disabled:n}=e,l=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i),[o,{tagName:c}]=s(Object.assign({tagName:r,disabled:n},l));return(0,a.jsx)(c,Object.assign({},l,o,{ref:t}))});c.displayName="Button";let d=o.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:h,Provider:u}=d;function f(e,t){let{prefixes:r}=(0,o.useContext)(d);return e||r[t]||t}function p(){let{breakpoints:e}=(0,o.useContext)(d);return e}function m(){let{minBreakpoint:e}=(0,o.useContext)(d);return e}let g=o.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:o,className:i,...c},d)=>{let h=f(t,"btn"),[u,{tagName:p}]=s({tagName:e,...c});return(0,a.jsx)(p,{...u,...c,ref:d,className:l()(i,h,o&&"active",r&&`${h}-${r}`,n&&`${h}-${n}`,c.href&&c.disabled&&"disabled")})});g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var x=r(8357);function j(e){return(0,x.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"}}]}]})(e)}var v=r(1664),b=r.n(v),y=r(4048),w=r.n(y),_=r(9008),N=r.n(_),k=r(4298),E=r.n(k),S=r(5675),C=r.n(S);r(5312);let B=e=>{let{src:t,width:r,quality:a}=e;return"http://localhost:3000/".concat(t,"?w=").concat(r,"&q=").concat(a||100)},O=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N(),{children:(0,a.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",crossOrigin:"anonymous"})}),(0,a.jsx)(E(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",crossOrigin:"anonymous"}),(0,a.jsx)("div",{className:"".concat(w()["is-sticky"]," ").concat(w()["header-all"]," header-all"),children:(0,a.jsx)("div",{className:"".concat(w().container," container"),children:(0,a.jsxs)("nav",{className:"".concat(w().navbar,"  ").concat(w()["navbar-light"]," ").concat(w()["navbar-expand-lg"]," navbar navbar-expand-lg navbar-light"),children:[(0,a.jsx)(b(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{className:"navbar-brand",children:(0,a.jsx)(C(),{className:w().logoimg,loader:B,src:"assets/headerLogo.png",alt:"Picture of the author",width:150,height:100})})}),(0,a.jsx)(g,{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"".concat(w()["navbar-nav"]," navbar-nav me-auto mb-2 mb-lg-0"),children:[(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Products ",(0,a.jsx)("span",{className:w().arrowz,children:(0,a.jsx)(j,{})})]}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/enterprise_sms",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Enterprise SMS"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/smart_url_tracking",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Smart URL Tracking"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/cloud-telephony-ai-autodialer",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Cloud-telephony-ai-autodialer"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/missed_call_service",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Missed call Service"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/virtual_mobile_number",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Virtual Mobile Number"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/obd_calls",children:(0,a.jsx)("a",{className:"dropdown-item",children:"OBD Calls"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/voice_key_input",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Voice Key Input"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/ivr_service",children:(0,a.jsx)("a",{className:"dropdown-item",children:"IVR Service"})})})]})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Solutions ",(0,a.jsx)("span",{className:w().arrowz,children:(0,a.jsx)(j,{})})]}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/advertising_agencies",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Advertising Agencies"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/automobiles_solutions",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Automobiles"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/bfsi_solutions",children:(0,a.jsx)("a",{className:"dropdown-item",children:"BFSI"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/community",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Community"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/consultancy",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Consultancy"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/E-commerce",children:(0,a.jsx)("a",{className:"dropdown-item",children:"E-commerce Solutions"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/education",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Education"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/electrical_electronics",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Electrical & Electronics"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/food_beverages",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Food & Beverages"})})})]})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Digital Marketing ",(0,a.jsx)("span",{className:w().arrowz,children:(0,a.jsx)(j,{})})]}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/sms_marketing",children:(0,a.jsx)("a",{className:"dropdown-item",children:"SMS Marketing"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/voice_broadcast",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Voice Broadcast"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/whatsapp_broadcast",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Whatsapp Broadcast"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/email_marketing",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Email Marketing"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/seo",children:(0,a.jsx)("a",{className:"dropdown-item",children:"SEO"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/facebook_smm",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Facebook (SMM)"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/instagram_smm",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Instagram (SMM)"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/linked_in_smm",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Linked-in (SMM)"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/youtube_smm",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Youtube (SMM)"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/google_sem",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Google Ads (SEM)"})})})]})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Become a partner ",(0,a.jsx)("span",{className:w().arrowz,children:(0,a.jsx)(j,{})})]}),(0,a.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:(0,a.jsx)("li",{children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"/partner",children:(0,a.jsx)("a",{className:"dropdown-item",children:"Partner with Us"})})})})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Resources ",(0,a.jsx)("span",{className:w().arrowz,children:(0,a.jsx)(j,{})})]}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown-item",children:"Action"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown-item",children:"Another action"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown-item",children:"Something else here"})})]})]}),(0,a.jsx)("li",{className:"nav-item dropdown",children:(0,a.jsx)(b(),{legacyBehavior:!0,href:"pages/enterprise_sms",children:(0,a.jsxs)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Contact Us ",(0,a.jsx)("span",{className:w().arrowz})]})})})]}),(0,a.jsx)(g,{className:w().freedemo,variant:"primary",children:"Free Demo"})," ",(0,a.jsxs)("div",{className:"nav-item dropdown color_btn",style:{paddingLeft:" 10px"},children:[(0,a.jsx)("a",{className:"".concat(w()["nav-link"]," ").concat(w()["dropdown-toggle"]," nav-link dropdown-toggle"),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,a.jsx)(C(),{loader:B,src:"assets/button group.png",alt:"Picture of the author",width:40,height:40})}),(0,a.jsx)("ul",{className:"".concat(w().logout," dropdown-menu "),"aria-labelledby":"navbarDropdown",children:(0,a.jsx)("li",{style:{width:"100%"},children:(0,a.jsx)("a",{className:"dropdown-item",children:"Logout"})})})]})]})]})})})]}),M=o.forwardRef(({bsPrefix:e,fluid:t,as:r="div",className:n,...o},i)=>{let s=f(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,a.jsx)(r,{ref:i,...o,className:l()(n,t?`${s}${c}`:s)})});M.displayName="Container",M.defaultProps={fluid:!1};let P=o.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{let i=f(e,"row"),s=p(),c=m(),d=`${i}-cols`,h=[];return s.forEach(e=>{let t;let r=n[e];delete n[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let a=e!==c?`-${e}`:"";null!=t&&h.push(`${d}${a}-${t}`)}),(0,a.jsx)(r,{ref:o,...n,className:l()(t,i,...h)})});P.displayName="Row";let D=o.forwardRef((e,t)=>{let[{className:r,...n},{as:o="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:r,...a}){t=f(t,"col");let n=p(),o=m(),i=[],s=[];return n.forEach(e=>{let r,n,l;let c=a[e];delete a[e],"object"==typeof c&&null!=c?{span:r,offset:n,order:l}=c:r=c;let d=e!==o?`-${e}`:"";r&&i.push(!0===r?`${t}${d}`:`${t}${d}-${r}`),null!=l&&s.push(`order${d}-${l}`),null!=n&&s.push(`offset${d}-${n}`)}),[{...a,className:l()(r,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,a.jsx)(o,{...n,ref:t,className:l()(r,!s.length&&i)})});D.displayName="Col";var R=r(3794),z=r.n(R);function I(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N(),{children:(0,a.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",crossOrigin:"anonymous"})}),(0,a.jsx)("div",{className:"".concat(z()["footer-all"]),children:(0,a.jsx)("div",{className:"".concat(z().footer),children:(0,a.jsxs)(M,{children:[(0,a.jsx)("div",{className:"".concat(z()["bor-bot"]),children:(0,a.jsxs)(P,{children:[(0,a.jsxs)(D,{md:3,children:[(0,a.jsx)("h4",{children:"Products"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Enterprise sms"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Smart url tracking"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Cloud telephony-ai-autodialer"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Missed call"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Virtual mobile number"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Obd calls"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Voice key input"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Ivr"})})]})]}),(0,a.jsxs)(D,{md:3,children:[(0,a.jsx)("h4",{children:"Solutions"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Advertising agencies"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Automobiles"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Bfsi"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Community"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Consultancy"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"E-commerce"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Education"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Electrical & electronics"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Food & beverages"})})]})]}),(0,a.jsxs)(D,{md:3,children:[(0,a.jsx)("h4",{children:"Digital Marketing"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"We sms marketing"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"WhatsApp broadcast"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Email marketing"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"SEO"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Instagram  "})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Linked-in"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"YouTube "})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Google ads "})})]})]}),(0,a.jsxs)(D,{md:3,children:[(0,a.jsx)("h4",{children:"Become a Partner"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Partner with Us"})})})]})]})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(z().footercopy," col-md-12 text-center"),children:(0,a.jsxs)("p",{className:"".concat(z().menu),children:[(0,a.jsx)("a",{href:"#",children:"Legal"}),(0,a.jsx)("a",{href:"#",children:"Privacy"}),(0,a.jsx)("a",{href:"#",children:"Press & Media"}),(0,a.jsx)("a",{href:"#",children:"Signal"}),(0,a.jsx)("a",{href:"#",children:"Investors"}),(0,a.jsx)("a",{href:"#",children:"Jobs"})]})}),(0,a.jsx)("p",{className:"".concat(z().copyright),children:"2022@NettyfishSolutions"})]})]})})})]})}let L=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)(O,{}),t,(0,a.jsx)(I,{})]})};var A=function(e){let{Component:t,pageProps:r}=e;return(0,a.jsx)(L,{children:(0,a.jsx)(t,{...r})})}},4744:function(){},3794:function(e){e.exports={home:"Footer_home__U79zp","footer-all":"Footer_footer-all___W7_Z",footer:"Footer_footer__Tl1eP","bor-bot":"Footer_bor-bot__qdH9_","text-center":"Footer_text-center__aJ1wp",footercopy:"Footer_footercopy__8ASxd",menu:"Footer_menu__JX64D",copyright:"Footer_copyright__0_Me0"}},4048:function(e){e.exports={"dropdown-toggle":"Header_dropdown-toggle__UuBxY",arrowz:"Header_arrowz__fsr6S","header-all":"Header_header-all__Dvr_r","navbar-light":"Header_navbar-light__EYRxW","navbar-nav":"Header_navbar-nav__LpQem","nav-link":"Header_nav-link__e25Po",freedemo:"Header_freedemo__IeXgU",logoimg:"Header_logoimg__7KR_a","navbar-expand-lg":"Header_navbar-expand-lg__IVMma",header:"Header_header__VYZ3G","is-sticky":"Header_is-sticky___u2vE",fadeInDown:"Header_fadeInDown__2EYdW",logout:"Header_logout__W5r9w",navbar:"Header_navbar__Qt0Y4",active:"Header_active__EB8lX",container_fluid:"Header_container_fluid__9kYRC"}},5312:function(){},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)},4298:function(e,t,r){e.exports=r(3573)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function s(e){return function(t){return a.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,o({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,n=e.attr,l=e.size,s=e.title,c=i(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);