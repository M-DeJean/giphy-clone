(this["webpackJsonpreact-prototype"]=this["webpackJsonpreact-prototype"]||[]).push([[4],{41:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(13);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));var a=r(41),n=r(0),i=r.n(n),l=r(12);r(46);function o(e){var t=Object(n.useState)([]),r=Object(a.a)(t,2),o=r[0],c=r[1],s=Object(l.c)((function(e){return e.gifs})).data;return Object(n.useEffect)((function(){var t=e.match.params.id,r=s.filter((function(e){return e.id===t}));c(r)}),[s,e.match.params.id]),i.a.createElement("div",{className:"details"},o.length?i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"user"},i.a.createElement("img",{alt:"user avatar",src:o[0].user?o[0].user.avatar_url:""}),i.a.createElement("a",{href:o[0].user?o[0].user.profile_url:"",target:"_blank",rel:"noopener noreferrer"},o[0].user?o[0].user.display_name||o[0].user.username:"No User Data")),i.a.createElement("div",{className:"detailed-gif"},i.a.createElement("h2",null,i.a.createElement("a",{href:o[0].url,target:"_blank",rel:"noopener noreferrer"},o[0].title||"GIPHY")),i.a.createElement("img",{src:o[0].images.original.webp,alt:o[0].title}),i.a.createElement("p",{className:"copy",onClick:function(){navigator.clipboard.writeText(o[0].images.original.url)}},"Copy GIF Link")),i.a.createElement("div",{className:"gif-data"},i.a.createElement("p",null,"Dimensions: ",o[0].images.original.width," x ",o[0].images.original.height," px"),i.a.createElement("p",null,"Frames: ",o[0].images.original.frames))):i.a.createElement("p",null,"LOADING GIFS"))}}}]);
//# sourceMappingURL=4.e3ba1813.chunk.js.map