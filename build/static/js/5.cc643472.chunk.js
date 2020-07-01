(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[5],{110:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"theme",className:"btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"}),t,n.a.createElement("div",{className:"flex-1"}),n.a.createElement("div",{className:"p-3 sticky bottom-0 background-rich shadow-2xl"},n.a.createElement("label",{htmlFor:"openRight",className:"btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 rounded-full"},n.a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 24 24",height:"1.6rem",width:"1.6rem",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",null,n.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.a.createElement("path",{d:"M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}))))))}},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(4),n=a(0),l=a.n(n),o=(a(114),a(56)),c=(a(121),a(110));function s(e){var t=e.left,a=e.mid,c=e.right,s=e.header,m=Object(n.useRef)(),i=Object(n.useState)(),u=Object(r.a)(i,2),d=u[0],h=u[1],b=Object(n.useMemo)((function(){return{getScrollContainer:function(){return m.current},distanceToRefresh:50,indicator:{activate:"release",deactivate:"pull",release:"loading",finish:"finish"},damping:150,direction:"down"}}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{hidden:!0,id:"openRight",type:"checkbox"}),l.a.createElement("input",{hidden:!0,id:"openLeft",type:"checkbox"}),l.a.createElement("div",{className:"layout"},l.a.createElement("div",{onTouchStart:function(e){e.stopPropagation()}},l.a.createElement("label",{htmlFor:"openLeft",className:"flex items-center justify-center text-xl btn"},l.a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))),l.a.createElement("div",{className:"w-full overflow-x-hidden overflow-y-auto h-screen scrollable"},t)),l.a.createElement("div",{ref:m},l.a.createElement(o.a,Object.assign({},b,{refreshing:d,onRefresh:function(){h(!0),setTimeout((function(){h(!1)}),1e3)}}),l.a.createElement("div",{className:"min-h-screen"},a))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"openRight",className:"flex items-center justify-center text-xl btn"},l.a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))),c)),l.a.createElement("header",{className:"header scrollable small"},l.a.createElement("label",{htmlFor:"openLeft",className:"btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"}),s))}s.Header=c.a},114:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),l=a.n(n),o=a(43),c=a(57);var s=({namespace:e,children:t})=>{const a=Object(c.a)(e);return l.a.createElement(o.a,{value:a},t)},m=a(12),i=a(113);a(56),a(122),a(110);const u=a(0),d=u.useCallback,h=(u.useRef,u.useState),b=[];var f=({key:e="",deps:t=b,initialValue:a})=>{const n=h(()=>localStorage.getItem(e)||a);return[Object(r.a)(n,1)[0],d(t=>{try{localStorage.setItem(e,t)}catch(a){console.error(a)}},[e,...t])]};var g=a(40);const p="data",v="selectedCountry",E=()=>l.a.createElement(w,null),w=()=>{const e=Object(c.a)(p),t=Object(c.a)(v),a=Object(m.c)(t),o=Object(m.b)(e+"__async_loading",!1),s=Object(r.a)(o,2),i=s[0],u=s[1],d=f(e,[],{groubByDate:[],groupByCountry:[],groupByLegion:[]}),h=Object(r.a)(d,2),b=h[0],g=h[1],E=Object(m.b)(e,b&&null!==b?JSON.parse(b):{groubByDate:[],groupByCountry:[],groupByLegion:[]}),w=Object(r.a)(E,2),y=w[0],x=w[1],N=({keyword:e})=>{u(!0),fetch("https://cors-anywhere.herokuapp.com/https://dashboards-dev.sprinklr.com/data/9043/global-covid19-who-gis.json").then(e=>e.json()).then(e=>{setTimeout(()=>{const t=function(e,t=[]){return e.reduce((function(e,a){return t.forEach(t=>{e[t]=e[t]||{},e[t][a[t]]=e[t][a[t]]||[],e[t][a[t]].push(a)}),e}),{})}(e.rows,[0,1,2]),a=t[0],r=void 0===a?[]:a,n=t[1],l=void 0===n?[]:n,o=t[2],c=void 0===o?[]:o,s=Object.keys(r).sort((e,t)=>-(Number(e)-Number(t)));Object.keys(l).forEach(e=>{l[e].sort((e,t)=>-(Number(e[0])-Number(t[0])))});const m=Object.keys(l),i=Object.keys(c),d=s[0],h={update:Date.now(),groubByDate:r,groupByCountry:l,groupByLegion:c,days:s,countries:m,legions:i,lastDay:d};g(JSON.stringify(h)),x(h),u(!1)})})};Object(n.useEffect)(()=>{N({keyword:"react"})},[]);const j=y.groubByDate,k=void 0===j?[]:j,O=(y.groupByCountry,y.groupByLegion,y.lastDay);return console.log("data",y),l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{onKeyDown:e=>13!==e.which&&13!==e.keyCode&&"Enter"!==e.key||(N({keyword:e.target.value}),!1),className:"sticky background-rich top-0 z-10 block w-full px-2 py-3 border-b border-transparent border-b-4 focus:border-gray-300 outline-none",placeholder:"Search..."}),i&&l.a.createElement("div",{className:"text-gray-500 text-center font-bold"},"loading"),O&&k[O].sort((e,t)=>Number(t[6])-Number(e[6])).map(([e,t,r,n,o,c,s])=>l.a.createElement("div",{onClick:()=>{setTimeout(()=>a(t),300)},key:t,className:"btn cursor-pointer hover:shadow-lg m-2 ml-0 rounded p-2 flex flex-col justify-between leading-normal "},l.a.createElement("div",{className:"text-color font-bold flex items-center"},l.a.createElement("img",{className:"w-6 mr-2",src:"https://www.countryflags.io/".concat(t,"/flat/64.png")})," ",t),l.a.createElement("div",{className:" text-color-rich flex items-center flex-wrap"},[l.a.createElement("span",{className:"bg-red-100 text-red-700  font-bold text-xs mb-2 mr-2 px-1 rounded"},"\u26b0\ufe0f ".concat(o)),l.a.createElement("span",{className:"bg-gray-300 text-gray-700  font-bold text-xs mb-2 mr-2 px-1 rounded"},"\ud83e\udd22 ".concat(s))].map((e,t)=>l.a.createElement("div",{key:t,className:""},e))))))},y=()=>{const e=Object(n.useRef)(Date.now()),t=Object(c.a)(p),a=Object(c.a)(v),o=Object(m.b)(a),s=Object(r.a)(o,1)[0],i=Object(m.b)(t),u=Object(r.a)(i,2),d=u[0],h=(u[1],Object(n.useState)(0)),b=Object(r.a)(h,2),f=b[0],g=b[1];if(!d||!d.update)return null;const E=d.days.reverse(),w=E[f],y=s&&d.groupByCountry[s].find(e=>e[0]===Number(w))||[],x=Object(r.a)(y,7),N=(x[0],x[1],x[2],x[3],x[4]),j=x[5],k=x[6];return l.a.createElement("div",{className:"p-3"},l.a.createElement("div",null,s),l.a.createElement("select",{className:"rounded-tl-lg rounded-tr-lg ml-3 background-rich focus:outline-none focus:shadow-outline  bg-gray-300 px-2 appearance-none leading-normal",value:f,onChange:t=>{const a=t.target.value,r=Date.now();e.current=r,setTimeout(()=>{r===e.current&&g(a)},0)}},E.map((e,t)=>l.a.createElement("option",{value:t},new Date(Number(E[t])).toLocaleDateString()))),l.a.createElement("input",{style:{border:"4px solid var(--background-rich)"},className:"w-full bg-transparent focus:outline-none focus:shadow-outline rounded-lg block w-full appearance-none leading-normal",value:f,onChange:t=>{const a=t.target.value,r=Date.now();e.current=r,setTimeout(()=>{r===e.current&&g(a)},0)},type:"range",min:"0",max:E.length}),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"flex-1 text-right"},j),l.a.createElement("div",{className:"flex-1 text-right"},k),l.a.createElement("div",{className:"flex-1 text-right"},N)))},x=()=>l.a.createElement(i.a,{left:l.a.createElement(E,null),mid:l.a.createElement(y,null),right:l.a.createElement("div",null,l.a.createElement("div",{className:"w-full justify-center items-center overflow-hidden md:max-w-sm "},l.a.createElement("div",{className:"relative h-24"},l.a.createElement("img",{className:"absolute h-full w-full object-cover",src:"https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"})),l.a.createElement("div",{className:"relative shadow mx-auto h-24 w-24 -my-12 rounded-full overflow-hidden border-4"},l.a.createElement("img",{className:"object-cover w-full h-full",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"})),l.a.createElement("div",{className:"mt-16"},l.a.createElement("h1",{className:"text-lg text-center font-semibold"},"Cassie"),l.a.createElement("p",{className:"text-sm text-gray-600 text-center"},"13 connections in common")))),header:l.a.createElement(i.a.Header,null)});t.default=()=>{const e=Object(g.a)(),t=Object(r.a)(e,1)[0];return l.a.createElement(s,{namespace:t},l.a.createElement(x,null))}}}]);
//# sourceMappingURL=5.cc643472.chunk.js.map