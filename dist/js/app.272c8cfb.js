(function(t){function a(a){for(var o,r,s=a[0],l=a[1],c=a[2],u=0,v=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(a);while(v.length)v.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],o=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(o=!1)}o&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var o={},n={app:0},i=[];function r(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)r.d(e,o,function(a){return t[a]}.bind(null,o));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/bartender/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Header"),e("router-view")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"header"}},[e("v-app-bar",{attrs:{app:""}},[e("v-toolbar",{attrs:{color:"indigo",dark:"","fixed-header":""}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Ladokutu Info "+t._s(t.$route.meta.title))]),e("v-spacer")],1)],1),e("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:"https://core.ladokutu.info/include/images/ladokutu_info.png"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Ladokutu Info")])],1)],1),e("v-divider"),t._l(t.master,(function(a){return e("v-list-item",{key:a.id,attrs:{to:a.route}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.nama_menu))])],1)],1)}))],2)],1),e("v-footer",{attrs:{app:""}},[e("v-bottom-navigation",{attrs:{absolute:"",color:"red",grow:""}},t._l(t.master,(function(a){return e("v-btn",{key:a.id,attrs:{to:a.route}},[e("span",{domProps:{textContent:t._s(a.nama_menu)}}),e("v-icon",{domProps:{textContent:t._s(a.icon)}})],1)})),1)],1),e("v-overlay",{attrs:{value:t.loading}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},s=[],l=e("bc3a"),c=e.n(l),d={data:function(){return{loading:!1,drawer:!1,master:[]}},mounted:function(){this.getItems()},methods:{getItems:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/menu_web").then((function(a){t.master=a.data})).catch((function(t){console.log(t)})),this.loading=!1}}},u=d,v=e("2877"),p=e("6544"),h=e.n(p),m=e("40dc"),g=e("5bc1"),f=e("b81c"),b=e("8336"),_=e("ce7e"),V=e("553a"),w=e("132d"),x=e("adda"),k=e("8860"),C=e("da13"),y=e("8270"),I=e("5d23"),j=e("34c3"),T=e("f774"),P=e("a797"),O=e("490a"),S=e("2fa4"),B=e("71d9"),A=e("2a7f"),M=Object(v["a"])(u,r,s,!1,null,null,null),L=M.exports;h()(M,{VAppBar:m["a"],VAppBarNavIcon:g["a"],VBottomNavigation:f["a"],VBtn:b["a"],VDivider:_["a"],VFooter:V["a"],VIcon:w["a"],VImg:x["a"],VList:k["a"],VListItem:C["a"],VListItemAvatar:y["a"],VListItemContent:I["a"],VListItemIcon:j["a"],VListItemTitle:I["b"],VNavigationDrawer:T["a"],VOverlay:P["a"],VProgressCircular:O["a"],VSpacer:S["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var $={name:"App",components:{Header:L},data:function(){return{}}},D=$,E=e("7496"),W=Object(v["a"])(D,n,i,!1,null,null,null),U=W.exports;h()(W,{VApp:E["a"]});var N=e("8c4f"),R=e("f309");o["a"].use(R["a"]);var z=new R["a"]({}),G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-main",[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.berita,(function(a){return e("v-col",{key:a.title,attrs:{cols:6}},[e("v-card",{attrs:{loading:t.loading},on:{click:function(e){return t.bukamodal(a)}}},[e("v-img",{staticClass:"white--text align-end",attrs:{src:a.image.small,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"150px"}}),e("v-card-title",{domProps:{textContent:t._s(a.title)}}),e("v-card-text",[t._v(t._s(a.description))]),e("v-card-actions",[e("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[t._v(t._s(a.creator))]),e("v-chip",{attrs:{color:"cyan"}},[t._v(t._s(a.isoDate))])],1)],1)],1)})),1)],1),e("v-container",{attrs:{fluid:""}},[e("v-col",[e("v-card-text",[e("v-spacer")],1)],1)],1),e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),e("v-toolbar-title",[t._v(t._s(t.title))]),e("v-spacer")],1),e("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",border:"none"},attrs:{id:"ifrm",src:t.url}})],1)],1)],1)},H=[],J=(e("9911"),{data:function(){return{dialog:!1,loading:!1,drawer:!1,master:[],berita:[],search:null,title:"",url:""}},mounted:function(){this.getItems(),this.getBerita()},methods:{getItems:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/menu_web").then((function(a){t.master=a.data})).catch((function(t){console.log(t)})),this.loading=!1},getBerita:function(){var t=this;this.loading=!0,c.a.get("https://berita-indo-api.vercel.app/v1/kumparan-news").then((function(a){t.berita=a.data.data})).catch((function(t){console.log(t)})),this.loading=!1},bukamodal:function(t){this.dialog=!0,this.loading=!0,this.title=t.title,this.url=t.link,this.loading=!1}}}),q=J,F=e("b0af"),K=e("99d9"),X=e("cc20"),Q=e("62ad"),Y=e("a523"),Z=e("169a"),tt=e("f6c4"),at=e("0fd9"),et=Object(v["a"])(q,G,H,!1,null,null,null),ot=et.exports;h()(et,{VBtn:b["a"],VCard:F["a"],VCardActions:K["a"],VCardText:K["c"],VCardTitle:K["d"],VChip:X["a"],VCol:Q["a"],VContainer:Y["a"],VDialog:Z["a"],VIcon:w["a"],VImg:x["a"],VMain:tt["a"],VRow:at["a"],VSpacer:S["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-main",[e("v-container",{attrs:{fluid:""}},[e("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"5","max-width":"100%"}},[e("v-slide-group",{staticClass:"pa-4",attrs:{"active-class":"success","show-arrows":""},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},t._l(t.box,(function(a,o){return e("v-slide-item",{key:o,scopedSlots:t._u([{key:"default",fn:function(o){var n=o.active;return[e("v-card",{attrs:{color:n?void 0:"grey lighten-1",loading:t.loading},on:{click:function(e){return t.bukamodal(a)}}},[e("v-img",{attrs:{src:a.thumbnail,contain:"",width:"300"}}),e("v-card-subtitle",{domProps:{textContent:t._s(a.title)}})],1)]}}],null,!0)})})),1)],1)],1),e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.movie,(function(a){return e("v-col",{key:a.title,attrs:{cols:3}},[e("v-card",{attrs:{loading:t.loading},on:{click:function(e){return t.bukamodal(a)}}},[e("v-img",{attrs:{src:a.thumbnail,contain:""}}),e("v-card-subtitle",{domProps:{textContent:t._s(a.title)}}),e("v-card-text",[e("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[e("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[t._v(" "+t._s(a.rating)+" "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-star ")])],1),e("v-chip",{attrs:{color:"cyan"}},[t._v(t._s(a.quality))]),e("v-chip",[t._v(t._s(a.duration))])],1)],1)],1)],1)})),1)],1),e("v-container",{attrs:{fluid:""}},[e("v-col",[e("v-pagination",{attrs:{length:t.pagination.length,"total-visible":t.pagination.visible},on:{next:t.changepage,previous:t.changepage,input:t.changepage},model:{value:t.pagination.page,callback:function(a){t.$set(t.pagination,"page",a)},expression:"pagination.page"}})],1)],1),e("v-container",{attrs:{fluid:""}},[e("v-col",[e("v-card-text",[e("v-spacer")],1)],1)],1),e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),e("v-toolbar-title",[t._v(t._s(t.watch.title))]),e("v-spacer")],1),e("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",border:"none"},attrs:{id:"ifrm",src:t.watch.src}})],1)],1)],1)},it=[],rt=(e("ac1f"),e("841c"),{data:function(){return{dialog:!1,judul:null,model:null,pagination:{page:1,visible:5,length:483},loading:!1,drawer:!1,master:[],movie:[],box:[],search:null,watch:[],url:null}},mounted:function(){this.getItems(),this.getMovie(),this.getBox()},methods:{getItems:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/menu_web").then((function(a){t.master=a.data})).catch((function(t){console.log(t)})),this.loading=!1},getMovie:function(){var t=this;this.loading=!0,c.a.get("https://api-ladokutu-movie.herokuapp.com/movie?page="+this.pagination.page).then((function(a){t.movie=a.data.result})).catch((function(t){console.log(t)})),this.loading=!1},getMovieSearch:function(){var t=this;this.loading=!0,c.a.get("https://api-ladokutu-movie.herokuapp.com/search/"+this.search).then((function(a){t.movie=a.data.result})).catch((function(t){console.log(t)})),this.loading=!1},getBox:function(){var t=this;this.loading=!0,c.a.get("https://api-ladokutu-movie.herokuapp.com/box_office").then((function(a){t.box=a.data.result})).catch((function(t){console.log(t)})),this.loading=!1},changepage:function(){this.getMovie()},bukamodal:function(t){var a=this;this.dialog=!0,this.loading=!0,c.a.get("https://api-ladokutu-movie.herokuapp.com/watch?url="+t.watch).then((function(t){a.watch=t.data})).catch((function(t){console.log(t)})),this.loading=!1}}}),st=rt,lt=e("891e"),ct=e("8dd9"),dt=e("7efd"),ut=e("9dbe"),vt=Object(v["a"])(st,nt,it,!1,null,null,null),pt=vt.exports;h()(vt,{VBtn:b["a"],VCard:F["a"],VCardSubtitle:K["b"],VCardText:K["c"],VChip:X["a"],VCol:Q["a"],VContainer:Y["a"],VDialog:Z["a"],VIcon:w["a"],VImg:x["a"],VMain:tt["a"],VPagination:lt["a"],VRow:at["a"],VSheet:ct["a"],VSlideGroup:dt["a"],VSlideItem:ut["a"],VSpacer:S["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-main",[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.projects,(function(a){return e("v-col",{key:a.id_aplikasi,attrs:{cols:6}},[e("v-card",{attrs:{loading:t.loading}},[e("v-avatar",{staticClass:"ma-3",attrs:{size:"100"}},[e("v-img",{staticClass:"white--text align-end",attrs:{src:a.url_image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",contain:"",width:"300"}})],1),e("v-card-title",{domProps:{textContent:t._s(a.nama_aplikasi)}}),e("v-card-subtitle",{domProps:{textContent:t._s(a.description)}}),e("v-card-actions",[e("v-btn",{attrs:{outlined:"",rounded:"",text:"",href:a.url_download}},[t._v(" Download ")])],1)],1)],1)})),1)],1),e("v-container",{attrs:{fluid:""}},[e("v-col",[e("v-card-text",[e("v-spacer")],1)],1)],1)],1)},mt=[],gt={data:function(){return{loading:!1,drawer:!1,master:[],projects:[],show:!1}},mounted:function(){this.getItems(),this.getProjects()},methods:{getItems:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/menu_web").then((function(a){t.master=a.data})).catch((function(t){console.log(t)})),this.loading=!1},getProjects:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/content_projects").then((function(a){t.projects=a.data})).catch((function(t){console.log(t)})),this.loading=!1}}},ft=gt,bt=e("8212"),_t=Object(v["a"])(ft,ht,mt,!1,null,null,null),Vt=_t.exports;h()(_t,{VAvatar:bt["a"],VBtn:b["a"],VCard:F["a"],VCardActions:K["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCardTitle:K["d"],VCol:Q["a"],VContainer:Y["a"],VImg:x["a"],VMain:tt["a"],VRow:at["a"],VSpacer:S["a"]});var wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-main",[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:12}},[e("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading}},[e("template",{slot:"progress"},[e("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e("v-img",{attrs:{height:"300",contain:"",src:"https://lh3.googleusercontent.com/06B5dK0owtjT3UGVT4icmVU1OwwnsTdN8EnaHU17sWehlRAibrIHzVGb_oGc7sgrlNnn"}}),e("v-card-title",[t._v("Ladokutu Informasi Solusi")]),e("v-card-text",[e("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[e("v-rating",{attrs:{value:10,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e("div",{staticClass:"grey--text ms-4"},[t._v(" 5 ")])],1),e("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" Indonesian Website ")]),e("div",[t._v("A website that provides information about news, movies and projects that have been carried out by Ladokutu Info.")]),e("div",[t._v("if you want to make web applications or mobile apps")]),e("div",[t._v("Contact : "),e("a",{attrs:{href:"mailto:support@ladokutu.info"}},[t._v("support@ladokutu.info")])]),e("div",[e("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey",href:"https://www.buymeacoffee.com/ladokutu",target:"_blank"}},[e("v-img",{attrs:{"max-height":"32","max-width":"16",src:"https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png"}}),t._v(" Buy me a Coffe ")],1),e("v-btn",{attrs:{href:"bitcoin:1BaADxL8fXjn1bxak96oUTnEc5u8wAUc4U",target:"_blank"}},[e("v-img",{attrs:{"max-height":"32","max-width":"32",src:"https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"}}),t._v(" Bitcoin ")],1)],1)],1),e("v-divider",{staticClass:"mx-4"}),e("v-card-title",[e("a",{attrs:{href:"privacy.html"}},[t._v("Privacy Policies")])]),e("v-card-title",[e("a",{attrs:{href:"term.html"}},[t._v("Term Of Use")])])],2)],1)],1)],1)],1)},xt=[],kt={data:function(){return{loading:!1,drawer:!1,master:[],projects:[],show:!1,value:1}},mounted:function(){this.getItems()},methods:{getItems:function(){var t=this;this.loading=!0,c.a.get("https://core.ladokutu.info/index.php/Web/menu_web").then((function(a){t.master=a.data})).catch((function(t){console.log(t)})),this.loading=!1}}},Ct=kt,yt=e("8e36"),It=e("1d4d"),jt=Object(v["a"])(Ct,wt,xt,!1,null,null,null),Tt=jt.exports;h()(jt,{VBtn:b["a"],VCard:F["a"],VCardText:K["c"],VCardTitle:K["d"],VCol:Q["a"],VContainer:Y["a"],VDivider:_["a"],VImg:x["a"],VMain:tt["a"],VProgressLinear:yt["a"],VRating:It["a"],VRow:at["a"]}),o["a"].use(N["a"]),o["a"].config.productionTip=!1;var Pt=[{name:"Index",path:"/",component:ot,meta:{title:"News"}},{name:"Movie",path:"/movie",component:pt,meta:{title:"Movie"}},{name:"Project",path:"/project",component:Vt,meta:{title:"Project"}},{name:"About",path:"/about",component:Tt,meta:{title:"About"}}],Ot=new N["a"]({mode:"history",base:"/bartender/",routes:Pt});new o["a"]({vuetify:z,router:Ot,render:function(t){return t(U)}}).$mount("#app")}});
//# sourceMappingURL=app.272c8cfb.js.map