(function(e){function t(t){for(var a,s,r=t[0],o=t[1],l=t[2],c=0,m=[];c<r.length;c++)s=r[c],n[s]&&m.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);p&&p(t);while(m.length)m.shift()();return u.push.apply(u,l||[]),i()}function i(){for(var e,t=0;t<u.length;t++){for(var i=u[t],a=!0,s=1;s<i.length;s++){var r=i[s];0!==n[r]&&(a=!1)}a&&(u.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},s={app:0},n={app:0},u=[];function r(e){return o.p+"js/"+({"post-viewer":"post-viewer"}[e]||e)+"."+{"post-viewer":"6efdd117"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i={"post-viewer":1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise(function(t,i){for(var a="css/"+({"post-viewer":"post-viewer"}[e]||e)+"."+{"post-viewer":"1aac3930"}[e]+".css",n=o.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var l=u[r],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===n))return t()}var m=document.getElementsByTagName("style");for(r=0;r<m.length;r++){l=m[r],c=l.getAttribute("data-href");if(c===a||c===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.request=a,delete s[e],p.parentNode.removeChild(p),i(u)},p.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){s[e]=0}));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise(function(t,i){a=n[e]=[t,i]});t.push(a[2]=u);var l,c=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,o.nc&&m.setAttribute("nonce",o.nc),m.src=r(e),l=function(t){m.onerror=m.onload=null,clearTimeout(p);var i=n[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");u.type=a,u.request=s,i[1](u)}n[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:m})},12e4);m.onerror=m.onload=l,c.appendChild(m)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var p=c;u.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"00fa":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app"},[i("navigation",{staticClass:"header"}),i("router-view"),i("page-footer")],1)},n=[],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"nav"},[i("div",{staticClass:"nav-body"},[i("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v(e._s(e.title))])],1)])},r=[],o={name:"Navigation",data:function(){return{title:this.$store.state.title}}},l=o,c=(i("bd64"),i("2877")),m=Object(c["a"])(l,u,r,!1,null,"7bbf4e3c",null);m.options.__file="Navigation.vue";var p=m.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"page-footer"},[i("div",{staticClass:"footer-title"},[e._v("richard zg")]),i("div",{staticClass:"footer-message"},[e._v("Powered by Vue.js")])])}],v={name:"PageFooter"},g=v,b=(i("fdba"),Object(c["a"])(g,d,f,!1,null,"14bc2c6e",null));b.options.__file="PageFooter.vue";var h=b.exports,q={name:"app",components:{Navigation:p,PageFooter:h}},y=q,_=(i("5c0b"),Object(c["a"])(y,s,n,!1,null,null,null));_.options.__file="App.vue";var w=_.exports,P=(i("c5f6"),i("8c4f")),E=i("2f62"),C=(i("28a5"),i("2ef0")),T="Dapibus euismod conubia lorem aliquet vivamus dictum. Proin convallis leo et vehicula pretium suspendisse. Sodales fringilla hymenaeos pellentesque, sagittis est cubilia porttitor eleifend conubia quam inceptos gravida. Praesent posuere pellentesque nec mauris aenean ac vel quam. Ut inceptos. Ipsum vivamus et quisque mus massa tempus vel magna vestibulum donec lacus odio pharetra porttitor massa phasellus. Cubilia malesuada. Porttitor Nec lacus rutrum ad tempus. Aliquam dapibus feugiat vivamus habitasse vestibulum consectetuer id. Penatibus consectetuer. Commodo torquent praesent justo neque vehicula felis, dui turpis nunc leo ut Tellus curabitur porttitor Etiam. Arcu dictum ac suspendisse parturient. Odio potenti. Ornare, consectetuer pede curae; cubilia quam nec. Diam Ultrices tempus. Eget Varius tempus auctor Ultrices gravida convallis suspendisse inceptos eu quis aenean inceptos varius, ullamcorper tristique litora eros ad, ac. In phasellus phasellus vel ad potenti pulvinar nec nisl, tempor leo penatibus dolor inceptos in sodales scelerisque taciti litora Sapien vulputate, tellus netus porttitor hendrerit. Praesent netus lobortis. Placerat natoque nec odio vestibulum ligula et morbi mauris orci conubia gravida massa felis donec scelerisque enim Habitasse aliquam auctor eu massa torquent laoreet. Est egestas. Placerat cum. Tortor morbi est ultricies. Auctor nostra iaculis nam arcu id per id egestas gravida hendrerit porta integer et senectus consectetuer amet amet magna eros varius consequat est tincidunt. Mattis condimentum gravida volutpat torquent luctus. Nisl. Neque pulvinar ultricies nisl vel elementum justo ullamcorper tellus pharetra pellentesque accumsan enim. Lacus pede potenti et orci enim lacinia in natoque volutpat nunc mollis. Proin lacus porta ligula sem feugiat consequat. Litora cras. Imperdiet volutpat porttitor quis nam. Quis habitasse praesent. Nascetur nostra ultrices metus mus id mus dolor nec. Tempor turpis amet rhoncus parturient aptent quisque porta vehicula ut netus facilisis habitasse nunc augue nam vivamus parturient risus porttitor ultrices ridiculus nonummy amet pharetra massa facilisi maecenas dis phasellus, tincidunt taciti rhoncus viverra hymenaeos viverra cum, hendrerit natoque ornare molestie rhoncus, ac montes tortor diam potenti nisi fermentum natoque turpis lacinia primis duis pretium feugiat laoreet cursus cras ullamcorper gravida orci potenti dignissim leo felis purus scelerisque litora consectetuer. Faucibus habitant ligula semper inceptos vitae lobortis diam cursus primis parturient a augue massa. Amet elementum mollis potenti feugiat accumsan cubilia mattis quisque tellus blandit ultrices. Litora. Sociis bibendum non metus, praesent ridiculus tortor sem nostra. Vestibulum pulvinar justo posuere sit parturient tellus fermentum tempus placerat ultricies aptent arcu dolor suscipit gravida aptent nisi ad erat. Cubilia non dui fames id eu facilisis iaculis sociosqu massa morbi, conubia sociis blandit enim bibendum sit pulvinar conubia potenti. Porttitor nascetur dapibus, porttitor, aliquet, laoreet magnis erat suspendisse per sed neque augue sapien gravida quis fringilla arcu aliquam tincidunt leo euismod montes dis. Purus bibendum id mattis nulla, facilisis consequat natoque tincidunt consequat mauris, sollicitudin massa gravida netus nibh id, viverra enim malesuada nisi varius varius, aliquet sodales id duis class netus. Ultrices Dolor ullamcorper, nunc fermentum. Dictumst non. Ornare cras blandit fringilla quam. Feugiat, proin ridiculus sit viverra. Senectus porttitor Eget massa. Commodo class. Natoque, luctus iaculis. Netus diam integer faucibus Laoreet porttitor felis ullamcorper porta arcu viverra et dictum nunc dui eu luctus nam volutpat nec libero nulla. Vestibulum Tellus porttitor. Sodales. Sodales ligula augue proin netus bibendum, praesent senectus blandit. Euismod pretium tortor elementum consequat imperdiet hac penatibus eget. Lacinia elit augue gravida arcu rhoncus nonummy massa litora nam cum accumsan mollis cubilia purus interdum platea fermentum tempus est quam pulvinar in augue ridiculus. Amet vestibulum dignissim aptent Malesuada per ante risus eu Parturient euismod lectus potenti ipsum torquent bibendum sapien ullamcorper est nibh vehicula accumsan ligula neque, sociis in bibendum porta morbi egestas diam potenti ut est vulputate dictum maecenas potenti fames aliquet ornare elit arcu. Laoreet risus, odio litora erat leo rhoncus primis venenatis hac nonummy aptent varius donec. Consectetuer donec. Fringilla eros netus netus porttitor primis viverra a. Dis sed mus. Enim dui iaculis fermentum eget Nisl dolor tellus rhoncus mollis nunc velit diam amet gravida. Feugiat phasellus accumsan cum porta interdum. Ullamcorper ad sociis sociosqu leo molestie justo nam diam purus augue tempor netus scelerisque fringilla purus orci rhoncus massa nibh urna natoque sagittis neque lorem ornare tempor eleifend scelerisque, accumsan id metus. Neque nam eget tempor, donec pulvinar commodo etiam urna congue morbi proin libero mollis tempor nulla lectus felis iaculis fusce. Rutrum felis interdum potenti nonummy dictum. Bibendum. Maecenas, facilisi diam hac ad litora elit montes eleifend id morbi feugiat curae; nulla porta pellentesque dignissim tellus at. Tempor dignissim condimentum. Urna leo iaculis. Auctor mi nec nonummy malesuada nunc. Elementum mi sodales turpis nisl facilisi vivamus sociosqu. Molestie pharetra lorem Tellus curae; ornare sodales at ipsum auctor morbi nisl augue nisi phasellus sapien. Nulla ut sagittis orci nunc hendrerit nec nunc ad lobortis mi. Quam nulla hac dui mi tristique quam quam. Hac class leo lacus diam torquent nam nulla nascetur duis. Ac natoque amet semper suspendisse. Enim sed ipsum ullamcorper congue auctor magnis velit hendrerit platea duis pellentesque vulputate interdum cum erat platea sem interdum netus posuere posuere. Facilisi venenatis litora taciti ut. Montes turpis. Id morbi nec netus platea integer class senectus ornare dolor tempor fringilla aenean ante vehicula senectus vivamus eleifend enim nonummy magnis elementum potenti torquent ridiculus ullamcorper aliquet gravida habitasse non pellentesque sit sollicitudin, dapibus aenean fringilla dictumst. Platea laoreet. Nisl suspendisse dolor mollis adipiscing maecenas fames tortor pharetra est dapibus Feugiat viverra ad metus eleifend hac commodo. Purus gravida litora fermentum proin porttitor litora nulla. Elementum dapibus vehicula. Feugiat cum accumsan ullamcorper, egestas. Ad elementum mus nisi vivamus congue, quam ullamcorper diam pellentesque porttitor. Nam interdum Tristique. Cubilia netus platea aptent iaculis, a id tempor congue magna sem litora habitant Lectus sapien sociosqu aptent convallis justo. Sed nostra phasellus sem tristique. Erat mattis feugiat suspendisse ante pharetra dictum per proin parturient nascetur facilisis praesent turpis malesuada, luctus hendrerit cubilia senectus purus integer turpis fusce nisl. Fames ut fringilla. Vel ipsum. Massa. Metus pharetra habitasse odio erat duis. Libero phasellus netus maecenas nam metus.",j=T.split("."),N=15,O="\n  # This is a Test Title\n\n  And this is a test sentence.\n\n  ## For something here as a 2nd titile\n\n  More text here for test.\n\n  Sodales fringilla hymenaeos pellentesque, sagittis est cubilia porttitor eleifend conubia quam inceptos gravida.\n\n  Commodo torquent praesent justo neque vehicula felis, dui turpis nunc leo ut Tellus curabitur porttitor Etiam.\n\n  Aliquam dapibus feugiat vivamus habitasse vestibulum consectetuer id.\n\n  Test something like `this`, *this*, and **this**.\n\n  ```js\n  const text = 'Hellow World.'\n  console.log(text)\n  throw new Error('the end')\n  ```\n\n  A fake todo list.\n\n  - [x] reading\n  - [x] eating\n  - [ ] playing\n\n  Even a table.\n\n  Table | Just | For | Test\n  ----- | ---- | --- | ----\n  1 | 2 | 3 | 4\n  A | B | C | D\n  one | two | three | four\n\n  Some quotes.\n\n  > Life is just hight low low low low and low.\n  > By me.\n\n  Okay, the end.\n\n",S=1e9,x=Object(C["range"])(N).map(function(e){return{title:j[e],lastUpdatedTime:Math.round((Object(C["now"])()-864e6*(e+1))/S)*S,tags:"post".concat(e%2==0?",test":"").concat(e%3==0?",end":"").split(","),body:O}}),k={list:x,title:"Richard Zg"};a["a"].use(E["a"]);var A=new E["a"].Store({state:{list:k.list,title:k.title},getters:{listIds:function(e){return e.list.map(function(e){return e.lastUpdatedTime})}},mutations:{},actions:{}}),F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-not-found body"},[i("div",[e._v("Page Not Found.")])])}],L=(i("f268"),{}),D=Object(c["a"])(L,F,M,!1,null,"4f16e638",null);D.options.__file="PageNotFound.vue";var U=D.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"post-list body"},[e.hasPosts?i("div",{staticClass:"list-body"},e._l(e.list,function(t){return i("div",{key:t.title,staticClass:"list-item"},[i("div",{staticClass:"list-item-timestamp"},[i("div",[e._v(e._s(e.getDate(t.lastUpdatedTime)))]),i("div",[e._v(e._s(e.getYear(t.lastUpdatedTime)))])]),i("div",{staticClass:"list-item-body"},[i("div",{staticClass:"list-item-title",on:{click:function(i){e.clickHandler(t.lastUpdatedTime)}}},[e._v(e._s(t.title))]),i("div",{staticClass:"list-item-tags"},[i("span",[e._v("#")]),e._l(t.tags,function(t){return i("router-link",{key:t,attrs:{to:"/tags/"+t}},[e._v(e._s(t))])})],2)])])})):e._e()])},B=[],I=(i("f576"),i("6b54"),{name:"PostList",data:function(){return{list:this.$store.state.list}},computed:{hasPosts:function(){return 0!==this.list.length}},methods:{getDate:function(e){if("number"===typeof e){var t=new Date(e),i=t.getDate().toString(),a=(t.getMonth()+1).toString();return"".concat(i.padStart(2,"0"),"/").concat(a.padStart(2,"0"))}},getYear:function(e){if("number"===typeof e)return new Date(e).getFullYear()},clickHandler:function(e){this.$router.push("/article/".concat(e))}}}),H=I,V=(i("621a"),Object(c["a"])(H,$,B,!1,null,"6a9892fb",null));V.options.__file="PostList.vue";var J=V.exports;a["a"].use(P["a"]);var Y=new P["a"]({routes:[{path:"/",component:J},{path:"/article/:id",component:function(){return i.e("post-viewer").then(i.bind(null,"1773"))},props:!0,beforeEnter:function(e,t,i){var a=Number(e.params.id),s=A.getters.listIds;-1===s.indexOf(a)?i("/404"):i()}},{path:"/404",component:U},{path:"*",redirect:"/404"}],scrollBehavior:function(e,t,i){return i||{x:0,y:0}}});a["a"].config.productionTip=!1,new a["a"]({router:Y,store:A,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var a=i("5e27"),s=i.n(a);s.a},"5e27":function(e,t,i){},"621a":function(e,t,i){"use strict";var a=i("f941"),s=i.n(a);s.a},"9e80":function(e,t,i){},bd64:function(e,t,i){"use strict";var a=i("cd8c"),s=i.n(a);s.a},cd8c:function(e,t,i){},f268:function(e,t,i){"use strict";var a=i("9e80"),s=i.n(a);s.a},f941:function(e,t,i){},fdba:function(e,t,i){"use strict";var a=i("00fa"),s=i.n(a);s.a}});
//# sourceMappingURL=app.5db11108.js.map