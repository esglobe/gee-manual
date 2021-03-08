var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyter-leaflet"]=(()=>{"use strict";var e,t,r,a,l,n,f,o,i,u,d,s,c,h,p,b,m,v,g,y,w={4384:(e,t,r)=>{var a={"./index":()=>Promise.all([r.e(790),r.e(138)]).then((()=>()=>r(8138))),"./extension":()=>Promise.all([r.e(790),r.e(138),r.e(738)]).then((()=>()=>r(3738)))},l=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),n=(e,t)=>{if(r.S){var a=r.S.default,l="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[l]=e,r.I(l,t)}};r.d(t,{get:()=>l,init:()=>n})}},P={};function j(e){if(P[e])return P[e].exports;var t=P[e]={id:e,exports:{}};return w[e].call(t.exports,t,t.exports,j),t.exports}return j.m=w,j.d=(e,t)=>{for(var r in t)j.o(t,r)&&!j.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((t,r)=>(j.f[r](e,t),t)),[])),j.u=e=>e+"."+{35:"75d7ebb67cdd9a91223a",81:"a35f814f249c1b117514",138:"2479865fa90e50dc3e16",243:"d9d134ad2ffdfb9205b3",253:"0ef8f8ab2f24d167d88b",292:"abb15e393ff2062a9743",340:"06cd3bdbc92899d7cb95",366:"548c239572b0d4db46f3",408:"c77c0f86c82e98e327d2",665:"3328989849f89dbc115a",687:"c586825145a31920f3d8",732:"b1d9d728030835e29fb7",738:"12432ed2776b6b36ef53",751:"e7a5eee804906847cf86",787:"e25c58192b0a5dac5650",790:"e312fb278d8a321bec0d",791:"af9e062ad702416c1d52",795:"3a046e4856ac28bc2259",801:"706722a49a3baf058e8f",818:"212b33d3c22f5a0b7861",860:"9ffc3de6147c2f8f22e5",874:"a932c7b7475213690696",881:"f7e65404255680f1565e",961:"5f16b23b622442c73cd9",980:"77ca078a309d02743139"}[e]+".js",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="jupyter-leaflet:",j.l=(r,a,l)=>{if(e[r])e[r].push(a);else{var n,f;if(void 0!==l)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+l){n=u;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,j.nc&&n.setAttribute("nonce",j.nc),n.setAttribute("data-webpack",t+l),n.src=r),e[r]=[a];var d=(t,a)=>{n.onerror=n.onload=null,clearTimeout(s);var l=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),l&&l.forEach((e=>e(a))),t)return t(a)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),f&&document.head.appendChild(n)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{j.S={};var e={},t={};j.I=(r,a)=>{a||(a=[]);var l=t[r];if(l||(l=t[r]={}),!(a.indexOf(l)>=0)){if(a.push(l),e[r])return e[r];j.o(j.S,r)||(j.S[r]={});var n=j.S[r],f="jupyter-leaflet",o=(e,t,r)=>{var a=n[e]=n[e]||{},l=a[t];(!l||!l.loaded&&f>l.from)&&(a[t]={get:r,from:f})},i=[];switch(r){case"default":o("jupyter-leaflet","0.13.5",(()=>Promise.all([j.e(790),j.e(138)]).then((()=>()=>j(8138))))),o("leaflet-ant-path","1.3.0",(()=>Promise.all([j.e(874),j.e(253)]).then((()=>()=>j(1874))))),o("leaflet-defaulticon-compatibility","0.1.1",(()=>Promise.all([j.e(81),j.e(408)]).then((()=>()=>j(2408))))),o("leaflet-draw","1.0.4",(()=>j.e(787).then((()=>()=>j(1787))))),o("leaflet-fullscreen","1.0.2",(()=>j.e(292).then((()=>()=>j(8292))))),o("leaflet-measure","3.1.0",(()=>j.e(961).then((()=>()=>j(4961))))),o("leaflet-rotatedmarker","0.2.0",(()=>j.e(818).then((()=>()=>j(2818))))),o("leaflet-search","2.9.9",(()=>Promise.all([j.e(860),j.e(791)]).then((()=>()=>j(2860))))),o("leaflet-splitmap","1.0.1",(()=>Promise.all([j.e(881),j.e(665)]).then((()=>()=>j(665))))),o("leaflet-transform","1.0.3",(()=>Promise.all([j.e(795),j.e(881)]).then((()=>()=>j(8795))))),o("leaflet-velocity","1.7.0",(()=>j.e(687).then((()=>()=>j(8687))))),o("leaflet.awesome-markers","2.0.5",(()=>j.e(340).then((()=>()=>j(6408))))),o("leaflet.markercluster","1.4.1",(()=>j.e(732).then((()=>()=>j(5732))))),o("leaflet.vectorgrid","1.3.0",(()=>j.e(980).then((()=>()=>j(7980))))),o("leaflet","1.7.1",(()=>j.e(243).then((()=>()=>j(5243))))),o("proj4","2.6.3",(()=>j.e(801).then((()=>()=>j(7801))))),o("proj4leaflet","1.0.2",(()=>Promise.all([j.e(81),j.e(751)]).then((()=>()=>j(1751))))),o("spin.js","4.1.0",(()=>j.e(35).then((()=>()=>j(1035)))))}return e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),(()=>{var e;j.g.importScripts&&(e=j.g.location+"");var t=j.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var l=e[a],n=(typeof l)[0];if(a>=t.length)return"u"==n;var f=t[a],o=(typeof f)[0];if(n!=o)return"o"==n&&"n"==o||"s"==o||"u"==n;if("o"!=n&&"u"!=n&&l!=f)return l<f;a++}},l=e=>{if(1===e.length)return"*";if(0 in e){var t="",r=e[0];t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(o=e[n]))[0]?"-":(a>0?".":"")+(a=2,o);return t}var f=[];for(n=1;n<e.length;n++){var o=e[n];f.push(0===o?"not("+i()+")":1===o?"("+i()+" || "+i()+")":2===o?f.pop()+" "+f.pop():l(o))}return i();function i(){return f.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],l=a<0;l&&(a=-a-1);for(var f=0,o=1,i=!0;;o++,f++){var u,d,s=o<e.length?(typeof e[o])[0]:"";if(f>=t.length||"o"==(d=(typeof(u=t[f]))[0]))return!i||("u"==s?o>a&&!l:""==s!=l);if("u"==d){if(!i||"u"!=s)return!1}else if(i)if(s==d)if(o<=a){if(u!=e[o])return!1}else{if(l?u>e[o]:u<e[o])return!1;u!=e[o]&&(i=!1)}else if("s"!=s&&"n"!=s){if(l||o<=a)return!1;i=!1,o--}else{if(o<=a||d<s!=l)return!1;i=!1}else"s"!=s&&"n"!=s&&(i=!1,o--)}}var c=[],h=c.pop.bind(c);for(f=1;f<e.length;f++){var p=e[f];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},f=(e,t)=>{var r=j.S[e];if(!r||!j.o(r,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return r},o=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||a(e,t)?t:e),0))&&r[t]},i=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},u=(e,t,r)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+l(r)+")",d=(e,t,r,a)=>{var l=i(e,r);return n(a,l)||"undefined"!=typeof console&&console.warn&&console.warn(u(r,l,a)),c(e[r][l])},s=(e,t,r)=>{var l=e[t];return(t=Object.keys(l).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&l[t]},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(t,r,a,l){var n=j.I(t);return n&&n.then?n.then(e.bind(e,t,j.S[t],r,a,l)):e(t,j.S[t],r,a,l)})(((e,t,r,a)=>t&&j.o(t,r)?c(o(t,r)):a())),b=h(((e,t,r,a)=>(f(e,r),d(t,0,r,a)))),m=h(((e,t,r,a,l)=>{var n=t&&j.o(t,r)&&s(t,r,a);return n?c(n):l()})),v={},g={356:()=>m("default","leaflet.awesome-markers",[1,2,0,5],(()=>j.e(340).then((()=>()=>j(6408))))),445:()=>m("default","proj4",[1,2,6,0],(()=>j.e(801).then((()=>()=>j(7801))))),474:()=>m("default","leaflet-transform",[1,1,0,3],(()=>Promise.all([j.e(795),j.e(881)]).then((()=>()=>j(8795))))),1235:()=>m("default","spin.js",[1,4,1,0],(()=>j.e(35).then((()=>()=>j(1035))))),1509:()=>m("default","leaflet-rotatedmarker",[2,0,2,0],(()=>j.e(818).then((()=>()=>j(2818))))),1795:()=>m("default","leaflet",[1,1,7,1],(()=>j.e(243).then((()=>()=>j(5243))))),1834:()=>m("default","leaflet.markercluster",[1,1,2,0],(()=>j.e(732).then((()=>()=>j(5732))))),3211:()=>b("default","@lumino/messaging",[1,1,4,3]),3551:()=>m("default","leaflet-search",[1,2,9,8],(()=>Promise.all([j.e(860),j.e(791)]).then((()=>()=>j(2860))))),3950:()=>m("default","leaflet.vectorgrid",[1,1,3,0],(()=>j.e(980).then((()=>()=>j(7980))))),4519:()=>m("default","leaflet-draw",[1,1,0,4],(()=>j.e(787).then((()=>()=>j(1787))))),5335:()=>b("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2],1,1]),5432:()=>m("default","leaflet-ant-path",[1,1,3,0],(()=>Promise.all([j.e(874),j.e(253)]).then((()=>()=>j(1874))))),6336:()=>m("default","leaflet-measure",[1,3,1,0],(()=>j.e(961).then((()=>()=>j(4961))))),6510:()=>b("default","@lumino/widgets",[1,1,16,1]),6753:()=>m("default","leaflet-velocity",[1,1,2,4],(()=>j.e(687).then((()=>()=>j(8687))))),6843:()=>m("default","leaflet-fullscreen",[1,1,0,2],(()=>j.e(292).then((()=>()=>j(8292))))),7680:()=>m("default","leaflet-splitmap",[1,1,0,1],(()=>Promise.all([j.e(881),j.e(366)]).then((()=>()=>j(665))))),8249:()=>m("default","proj4leaflet",[1,1,0,1],(()=>Promise.all([j.e(81),j.e(751)]).then((()=>()=>j(1751))))),8808:()=>m("default","leaflet-defaulticon-compatibility",[2,0,1,1],(()=>Promise.all([j.e(81),j.e(408)]).then((()=>()=>j(2408))))),9253:()=>m("default","leaflet",[4,1,4,0],(()=>j.e(243).then((()=>()=>j(5243))))),2081:()=>p("default","leaflet",(()=>j.e(243).then((()=>()=>j(5243))))),1791:()=>m("default","leaflet",[0],(()=>j.e(243).then((()=>()=>j(5243))))),5881:()=>m("default","leaflet",[,[-1,2,0,0],[0,0,7,7],2],(()=>j.e(243).then((()=>()=>j(5243))))),1956:()=>m("default","proj4",[1,2,3,14],(()=>j.e(801).then((()=>()=>j(7801)))))},y={81:[2081],138:[356,445,474,1235,1509,1795,1834,3211,3551,3950,4519,5335,5432,6336,6510,6753,6843,7680,8249,8808],253:[9253],751:[1956],791:[1791],881:[5881]},j.f.consumes=(e,t)=>{j.o(y,e)&&y[e].forEach((e=>{if(j.o(v,e))return t.push(v[e]);var r=t=>{v[e]=0,w[e]=r=>{delete P[e],r.exports=t()}},a=t=>{delete v[e],w[e]=r=>{throw delete P[e],t}};try{var l=g[e]();l.then?t.push(v[e]=l.then(r).catch(a)):r(l)}catch(e){a(e)}}))},(()=>{var e={613:0};j.f.j=(t,r)=>{var a=j.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^((79|8|88)1|253)$/.test(t))e[t]=0;else{var l=new Promise(((r,l)=>{a=e[t]=[r,l]}));r.push(a[2]=l);var n=j.p+j.u(t),f=new Error;j.l(n,(r=>{if(j.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var l=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",f.name="ChunkLoadError",f.type=l,f.request=n,a[1](f)}}),"chunk-"+t)}};var t=(t,r)=>{for(var a,l,[n,f,o]=r,i=0,u=[];i<n.length;i++)l=n[i],j.o(e,l)&&e[l]&&u.push(e[l][0]),e[l]=0;for(a in f)j.o(f,a)&&(j.m[a]=f[a]);for(o&&o(j),t&&t(r);u.length;)u.shift()()},r=self.webpackChunkjupyter_leaflet=self.webpackChunkjupyter_leaflet||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),j(4384)})();