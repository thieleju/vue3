(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-e742308a":"82b2e479"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-e742308a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-e742308a":"438e33f1"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"086a":function(e,t,n){},"113b":function(e,t,n){"use strict";n("9494")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"appClass",attrs:{app:""}},[n("v-app-bar",{attrs:{app:"",dark:"",flat:""}},[n("v-tabs",{staticClass:"ml-n9",attrs:{centered:""},model:{value:e.active_tab,callback:function(t){e.active_tab=t},expression:"active_tab"}},e._l(e.topApps,(function(t,a){return n("v-tab",{key:a,on:{click:function(n){return e.routeTo(t.route)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),n("GithubCorner",{attrs:{url:"https://me.node5.de",flipOnHover:"",cornerColor:"#12161B",size:62}}),n("v-main",{attrs:{color:"primary"}},[n("particlesJS",{staticStyle:{position:"absolute",width:"100%",height:"100%"}}),n("v-container",{staticClass:"bringToFront",attrs:{fluid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"routerViewFill"})],1)],1)],1),n("v-footer",{staticClass:"py-1",attrs:{color:"grey darken-4"}},[n("span",{staticClass:"mr-auto overline"},[e._v("Node 5 ©2022")]),n("v-spacer"),n("a",{staticClass:"mr-auto overline",on:{click:e.showDSGVO}},[e._v("Datenschutzerklärung")]),e._v("   |   "),n("a",{staticClass:"mr-auto overline",on:{click:e.showImpressum}},[e._v("Impressum")])],1),n("v-overlay",{attrs:{value:e.showOverlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},o=[],i=(n("c740"),n("b0c0"),n("bc3a")),s=n.n(i),u=n("3d20"),c=n.n(u),l=n("074a"),d=n.n(l),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"particles-js"}})},f=[],h={name:"ParticlesJS",mounted:function(){var e=this;n("572f"),this.$nextTick((function(){e.initParticlesJS()}))},methods:{initParticlesJS:function(){particlesJS("particles-js",{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"connect",parallax:{enable:!0,force:1,smooth:10}},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},m=h,v=(n("113b"),n("2877")),g=Object(v["a"])(m,p,f,!1,null,null,null),b=g.exports,y={name:"App",components:{GithubCorner:d.a,particlesJS:b},data:function(){return{showOverlay:null,impressum:null,dsgvo:null,active_tab:0,topApps:[{name:"Home",route:"home"},{name:"About",route:"about"}],apiUnavailableText:"Sorry, the API is currently unavailable"}},mounted:function(){var e=this;this.active_tab=this.topApps.findIndex((function(t){return t.route===e.$route.name}))},methods:{routeTo:function(e){this.$router.push({name:e}).catch((function(){}))},showImpressum:function(){var e=this;this.impressum?this.showSwal(this.impressum):s.a.get("/v1/impressum").then((function(t){e.impressum=t.data,e.showSwal(t.data)})).catch((function(){return e.showSwal(e.apiUnavailableText)}))},showDSGVO:function(){var e=this;this.dsgvo?this.showSwal(this.dsgvo):s.a.get("/v1/dsgvo").then((function(t){e.dsgvo=t.data,e.showSwal(t.data)})).catch((function(){return e.showSwal(e.apiUnavailableText)}))},showSwal:function(e){c.a.fire({width:800,html:e,showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,showClass:{popup:"impressum"},confirmButtonText:"Close"})}}},w=y,k=(n("5c0b"),n("6544")),x=n.n(k),C=n("7496"),_=n("40dc"),S=n("a523"),P=n("553a"),A=n("f6c4"),T=n("a797"),O=n("490a"),F=n("2fa4"),E=n("71a3"),j=n("fe57"),B=Object(v["a"])(w,r,o,!1,null,null,null),V=B.exports;x()(B,{VApp:C["a"],VAppBar:_["a"],VContainer:S["a"],VFooter:P["a"],VMain:A["a"],VOverlay:T["a"],VProgressCircular:O["a"],VSpacer:F["a"],VTab:E["a"],VTabs:j["a"]});n("d3b7"),n("3ca3"),n("ddb0");var $=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.showCanvas?n("gameCanvas"):n("vue-typer",{staticClass:"text-center",attrs:{text:e.textArray,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":100,"type-delay":200,"pre-erase-delay":1e3,"erase-delay":1e3,"erase-style":"clear","erase-on-complete":!0,"caret-animation":"blink"}})],1)},I=[],L=n("e956"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-stage",{ref:"stage",attrs:{config:e.stageSize}},[n("v-layer",{ref:"layer"},[n("v-text",{attrs:{config:e.fpsText}}),n("v-line",{attrs:{config:e.border}}),n("v-circle",{ref:"player",attrs:{config:e.player}}),n("v-circle",{ref:"enemy",attrs:{config:e.enemy}})],1)],1)},N=[],z=Math.round(window.innerWidth/3*2),J=Math.round(window.innerHeight/3*2),X=60,Y=15,q=20,H=0,U=1e3/X,G=0,R=0,W=0,K={data:function(){return{stageSize:{width:z,height:J},player:{x:z/2,y:J/2,radius:Y,fill:"#38A3A5",stroke:"black",strokeWidth:3},enemy:{x:z/2,y:J/2,radius:q,fill:"#FF5252",stroke:"black",strokeWidth:3},border:{x:0,y:0,points:[0,0,z,0,z,J,0,J,0,0],stroke:"#2D2D2D",strokeWidth:4},fpsText:{x:10,y:10,text:"",fontSize:15,fill:"white"},mousePos:{x:0,y:0},currentFPS:0}},mounted:function(){window.addEventListener("mousemove",this.mouseCallback),requestAnimationFrame(this.mainLoop)},methods:{update:function(e){var t,n,a=null===(t=this.$refs.enemy)||void 0===t?void 0:t.getNode(),r=null===(n=this.$refs.player)||void 0===n?void 0:n.getNode();null===r||void 0===r||r.setX(this.getXInBounds(this.mousePos.x,Y)),null===r||void 0===r||r.setY(this.getYInBounds(this.mousePos.y,Y));var o=this.mousePos.x-a.x(),i=this.mousePos.y-a.y(),s=Math.round(Math.sqrt(o*o+i*i));if(0!=s){var u=s/.2,c=o/u*e,l=i/u*e,d=a.x()+c,p=a.y()+l;null===a||void 0===a||a.setX(this.getXInBounds(d,q)),null===a||void 0===a||a.setY(this.getYInBounds(p,q))}},getXInBounds:function(e,t){var n,a=null===(n=this.$refs.stage)||void 0===n?void 0:n.getNode().container().getBoundingClientRect();return e<t?t:e>a.width-t?a.width-t:e},getYInBounds:function(e,t){var n,a=null===(n=this.$refs.stage)||void 0===n?void 0:n.getNode().container().getBoundingClientRect();return e<t?t:e>a.height-t?a.height-t:e},mainLoop:function(e){if(e<H+1e3/X)requestAnimationFrame(this.mainLoop);else{G+=e-H,H=e,e>W+1e3&&(this.currentFPS=.25*R+.75*this.currentFPS,this.fpsText.text="FPS: "+Math.round(this.currentFPS),W=e,R=0),R++;var t=0;while(G>=U)if(this.update(U),G-=U,++t>=240){this.panic();break}window.requestAnimationFrame(this.mainLoop)}},panic:function(){G=0},mouseCallback:function(e){var t,n=(null===(t=this.$refs.stage)||void 0===t?void 0:t.getNode().container().getBoundingClientRect())||{x:0,y:0};this.mousePos={x:e.pageX-Math.round(n.x),y:e.pageY-Math.round(n.y)}}}},Q=K,Z=Object(v["a"])(Q,M,N,!1,null,null,null),ee=Z.exports,te={components:{VueTyper:L["VueTyper"],gameCanvas:ee},data:function(){return{textArray:["Hello!","Press SPACE to start!"],showCanvas:!1}},created:function(){var e=this;window.addEventListener("keydown",(function(t){"Space"==t.code&&(e.showCanvas=!0)}))}},ne=te,ae=(n("e927"),Object(v["a"])(ne,D,I,!1,null,"1ee02d8a",null)),re=ae.exports;a["default"].use($["a"]);var oe=[{path:"/",name:"home",component:re,meta:{title:"Home"}},{path:"/about",name:"about",component:function(){return n.e("chunk-e742308a").then(n.bind(null,"f820"))},meta:{title:"About"}},{path:"*",redirect:"/"}],ie=new $["a"]({mode:"history",base:"/",routes:oe});ie.afterEach((function(e){a["default"].nextTick((function(){document.title=e.meta.title+" - node5"}))}));var se=ie,ue=n("2f62");a["default"].use(ue["a"]);var ce=new ue["a"].Store({state:{},mutations:{},actions:{},modules:{}}),le=n("f309");a["default"].use(le["a"]);var de=new le["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#38A3A5",secondary:"#0A1013",background:"#161618",background2:"#2D2D2D",accent:"#80ED99",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),pe=n("130e"),fe=n("7591"),he=n.n(fe);s.a.defaults.baseURL="https://api.node5.de/api",a["default"].use(he.a),a["default"].use(pe["a"],s.a),a["default"].config.productionTip=!1,new a["default"]({router:se,store:ce,vuetify:de,render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},9494:function(e,t,n){},"9c0c":function(e,t,n){},e927:function(e,t,n){"use strict";n("086a")}});
//# sourceMappingURL=app.e3017bd9.js.map