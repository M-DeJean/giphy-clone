(this["webpackJsonpreact-prototype"]=this["webpackJsonpreact-prototype"]||[]).push([[4],{434:function(e,a,t){},437:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var r=t(54),n=t(1),i=t.n(n),l=(t(82),t(84),t(8));t(434),t(83);function s(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),s=t[0],c=t[1],m=Object(l.e)((function(e){return e.gifs})).data;return Object(n.useEffect)((function(){var a=e.match.params.id,t=m.filter((function(e){return e.id===a}));c(t)}),[m,e.match.params.id]),i.a.createElement("div",{className:"details"},s.length?i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"user"},i.a.createElement("img",{alt:"user avatar",src:s[0].user?s[0].user.avatar_url:""}),i.a.createElement("a",{href:s[0].user?s[0].user.profile_url:"",target:"_blank",rel:"noopener noreferrer"},s[0].user?s[0].user.display_name||s[0].user.username:"No User Data")),i.a.createElement("div",{className:"detailed-gif"},i.a.createElement("h2",null,i.a.createElement("a",{href:s[0].url,target:"_blank",rel:"noopener noreferrer"},s[0].title||"GIPHY")),i.a.createElement("img",{src:s[0].images.original.webp,alt:s[0].title}),i.a.createElement("p",{className:"copy",onClick:function(){navigator.clipboard.writeText(s[0].images.original.url)}},"Copy GIF Link")),i.a.createElement("div",{className:"gif-data"},i.a.createElement("p",null,"Dimensions: ",s[0].images.original.width," x ",s[0].images.original.height," px"),i.a.createElement("p",null,"Frames: ",s[0].images.original.frames))):i.a.createElement("p",null,"LOADING GIFS"))}}}]);
//# sourceMappingURL=4.1558880d.chunk.js.map