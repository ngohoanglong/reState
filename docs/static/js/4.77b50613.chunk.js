(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[4],{108:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return n}))},120:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.d(t,"a",(function(){return a}))},215:function(e,t,r){e.exports={Home:"Home_Home__1A_3Y",child:"Home_child__2kRSz",pointer:"Home_pointer__25cji",cta:"Home_cta__coL00"}},219:function(e,t,r){"use strict";r.r(t);var a=r(108),c=r(0),n=r.n(c),l=r(120),o=r(4),s=r(40),i=function(){return window.history},m=function(){var e=i(),t=Object(s.a)(),r=Object(o.a)(t,2),a=(r[0],r[1]);return Object(c.useCallback)((function(t){a(t),e.pushState({},"",t)}),[])},u=(window.history,function(){var e=i();return Object(c.useCallback)((function(){e.go(-1),e.pushState.apply(e,arguments),e.pushState.apply(e,arguments),e.go(-1)}),[])});const f=e=>e;const d=Object(c.forwardRef)((e,t)=>{let r=e.innerRef,o=e.navigate,s=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]);const m=i.target;let u=Object(a.a)(Object(a.a)({},i),{},{onClick:e=>{try{s&&s(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||m&&"_self"!==m||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),o())}});return f!==c.forwardRef?u.ref=t||r:u.ref=r,n.a.createElement("a",u)});var p=Object(c.forwardRef)((e,t)=>{let r=e.component,o=void 0===r?d:r,s=e.replace,i=e.to,p=e.innerRef,h=Object(l.a)(e,["component","replace","to","innerRef"]);const b=m(),g=u(),w=Object(a.a)(Object(a.a)({},h),{},{href:i,navigate(){(s?g:b)(i)}});return f!==c.forwardRef?w.ref=t||p:w.innerRef=p,n.a.createElement(o,w)}),h=r(215),b=r.n(h);const g=()=>n.a.createElement("div",{className:b.a.Home+" fixed bg-white w-full min-h-full h-64 grid grid-cols-2 grid-rows-7 md:grid-cols-4 md:grid-rows-3 grid-flow-row"},[n.a.createElement(p,{to:"/github",className:"background-rich"}),n.a.createElement(p,{to:"/covid",className:"background-rich"}),n.a.createElement(p,{to:"/periodic-table",className:"background-rich"}),n.a.createElement(p,{to:"/portfolio",className:"background-rich"}),n.a.createElement("div",{className:"background-rich"}),n.a.createElement("div",{className:"background col-span-2 sm:col-span-1 order-first md:order-none flex justify-center items-center"},n.a.createElement("div",{className:"flex flex-col justify-center items-center px-6"},n.a.createElement("img",{className:"w-24 h-24 rounded-full object-cover",src:"https://i.imgflip.com/1124um.jpg"}),n.a.createElement("h1",{className:"font-bold text-xl mt-3"},"Ngo Hoang Long"),n.a.createElement("div",{className:"text-gray-600 uppercase tsha"},"UI/UX DEVELOPER"))),n.a.createElement("div",{className:"background col-span-2 sm:col-span-1 order-first md:order-none flex justify-center items-center"},n.a.createElement("div",{className:"px-6 flex flex-col justify-center "},n.a.createElement("div",{className:"uppercase font-bold"},"About"),n.a.createElement("p",{className:"mt-3 whitespace-pre-wrap"},"Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt."),n.a.createElement("div",{className:"flex items-center mt-4"},[n.a.createElement("a",{className:" background mr-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-700",href:"#"},n.a.createElement("svg",{fill:"currentColor",width:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"}))),n.a.createElement("a",{className:" background mr-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-700",href:"#"},n.a.createElement("svg",{fill:"currentColor",width:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.a.createElement("path",{d:"M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"}))),n.a.createElement("a",{className:" background mr-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-700",href:"#"},n.a.createElement("svg",{fill:"currentColor",width:"1em",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"}),n.a.createElement("path",{d:"M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"}),n.a.createElement("path",{d:"M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"}))),n.a.createElement("a",{className:" background mr-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-700",href:"#"},n.a.createElement("svg",{fill:"currentColor",width:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"})))].map((e,t)=>n.a.cloneElement(e,Object(a.a)(Object(a.a)({},e.props),{},{className:"".concat(b.a.cta," ").concat(e.props.className)})))))),n.a.createElement("div",{className:"background-rich"}),n.a.createElement("div",{className:"background-rich"}),n.a.createElement("div",{className:"background-rich"}),n.a.createElement("div",{className:"background-rich"}),n.a.createElement("div",{className:"background-rich"})].map((e,t)=>n.a.cloneElement(e,Object(a.a)(Object(a.a)({},e.props),{},{className:"".concat(b.a.child," ").concat(e.props.className),children:e.props.children||t}))),n.a.createElement("div",{className:"".concat(b.a.pointer," hidden md:block")}));g.defaultProps={};t.default=g}}]);
//# sourceMappingURL=4.77b50613.chunk.js.map