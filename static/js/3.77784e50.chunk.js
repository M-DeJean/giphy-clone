(this["webpackJsonpreact-prototype"]=this["webpackJsonpreact-prototype"]||[]).push([[3],{431:function(e,t,r){},432:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(3),c=r.n(o),i=r(45),p=r.n(i),s=r(86),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var y=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var r,n;l(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return r=n=f(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!y(e)){e.preventDefault();var t=n.context.router.history,r=n.props,a=r.replace,o=r.to;a?t.replace(o):t.push(o)}},f(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);p()(this.context.router,"You should not use <Link> outside a <Router>"),p()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(s.b)(t,null,null,o.location):t,i=o.createHref(c);return a.a.createElement("a",u({},n,{onClick:this.handleClick,href:i,ref:r}))},t}(a.a.Component);h.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=h},433:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,r,l){if("string"!==typeof r){if(u){var f=s(r);f&&f!==u&&e(t,f,l)}var y=c(r);i&&(y=y.concat(i(r)));for(var h=0;h<y.length;++h){var b=y[h];if(!n[b]&&!a[b]&&(!l||!l[b])){var d=p(r,b);try{o(t,b,d)}catch(O){}}}return t}return t}},438:function(e,t,r){"use strict";r.r(t);var n=r(54),a=r(1),o=r.n(a),c=r(432),i=r(3),p=r.n(i),s=r(433),u=r.n(s),l=r(131),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var y=function(e){var t=function(t){var r=t.wrappedComponentRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["wrappedComponentRef"]);return o.a.createElement(l.a,{children:function(t){return o.a.createElement(e,f({},n,t,{ref:r}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:p.a.func},u()(t,e)},h=(r(42),r(82),r(83),r(8)),b=r(85);r(84),r(431);t.default=y((function(e){var t=Object(h.d)(),r=Object(h.e)((function(e){return e.gifs})),i=r.data,p=(r.history,Object(a.useState)("")),s=Object(n.a)(p,2),u=s[0],l=s[1],f=Object(a.useState)(""),y=Object(n.a)(f,2);return y[0],y[1],o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"inner-header"},o.a.createElement(c.a,{to:"/"},o.a.createElement("h1",{className:"title"},"GIPHY")),o.a.createElement("form",{onSubmit:function(r){r.preventDefault(),t(Object(b.c)(u)),t(Object(b.d)(u)),console.log(i),l(""),e.history.push("/search")}},o.a.createElement("input",{className:"search-bar",placeholder:"Redux",type:"text",value:u,onChange:function(e){l(e.target.value)},required:!0}),o.a.createElement("button",{type:"submit"},"Search")),o.a.createElement(c.a,{onClick:function(){t(Object(b.b)())},to:"/trending"},"Trending")))}))}}]);
//# sourceMappingURL=3.77784e50.chunk.js.map