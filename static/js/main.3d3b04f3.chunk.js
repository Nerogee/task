(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/star_emtpy.6f373829.png"},40:function(e,t,a){e.exports=a.p+"static/media/star_fill.0178cc98.png"},45:function(e,t,a){e.exports=a(82)},54:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=a(12),c=a(25),p=a(6),l=a(7),u=a(10),h=a(8),m=a(19),d=a(9),g=a(4),f=a(13),v={UPDATE_LOADING_STATUS:"LOADING"},b={isLoading:!1},A={updateLoading:function(e){return{type:v.UPDATE_LOADING_STATUS,status:e}}};var S={UPDATE_APP_LIST:"update_app_list",UPDATE_PREVENT_LOADING:"update_prevent_loading"},E={appList:[],preventLoading:!1},O={updateAppList:function(e){return{type:S.UPDATE_APP_LIST,appList:e}},updatePreventLoading:function(e){return{type:S.UPDATE_PREVENT_LOADING,newStatus:e}}};var w={CHANGE_SEARCH_TERM:"CHANGE_SEARCH_TERM"},L={searchTerm:""},_={changeSearchTerm:function(e){return{type:w.CHANGE_SEARCH_TERM,searchTerm:e}}};var j=a(38),T=a.n(j),N=10,y=6e5;function k(e,t){var a=[];e.genres.constructor===Array&&e.genres.map(function(e){a.push(e.name)});for(var n,r,o=[e.name,e.artistName].concat(a),i=0;i<o.length;i++)if(n=o[i],r=t,void 0!==n&&n.constructor===String&&-1!==n.toLowerCase().indexOf(r.toLowerCase().trim()))return!0;return!1}a(54);var C=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleSearchChange=a.handleSearchChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSearchChange",value:function(e){window.clearTimeout(this.setTimeout),this.props.updatePreventLoading(!0),this.setTimeout=window.setTimeout(function(){this.props.updatePreventLoading(!1)}.bind(this),100),this.props.changeSearchTerm(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-search-wrapper"},r.a.createElement("div",{className:"app-search__search-box-wrapper"},r.a.createElement("input",{className:"app-search__search-box",value:this.props.search.searchTerm,onChange:this.handleSearchChange}),void 0===(e=this.props.search.searchTerm)||e.constructor!==String||e.trim().length<=0?r.a.createElement("div",{className:"app-search__placeholder"},r.a.createElement(T.a,{className:"search-icon"}),"\u641c\u5c0b"):null));var e}}]),t}(n.Component),P=Object(f.b)(function(e,t){return{search:e.search,recommendation:e.recommendation}},function(e){return Object(s.a)({},Object(g.a)(_,e),Object(g.a)(O,e))})(C),I=a(39),G=a.n(I),R=a(40),D=a.n(R),U=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(c.a)(Array(5).keys()).map(function(t){var a=t<e.props.rating?D.a:G.a,n=t<e.props.rating?"active":"inactive";return r.a.createElement("img",{key:t,className:"star "+n,src:a,alt:"star"})})}}]),t}(n.Component),x=a(32),M=a.n(x),H=a(43),F=a(41),W=(a(59),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).ref=r.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new IntersectionObserver(function(e){var t=Object(H.a)(e,1)[0];t.intersectionRatio>=.1&&-1===t.target.className.indexOf("fly-in")&&(t.target.className=t.target.className+" fly-in")},{root:this.props.rootScrollContainer,rootMargin:"80px",threshold:.1}),this.ref.current&&t.observe(this.ref.current);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"visibility-wrapper "+this.props.customClassName,ref:this.ref},this.props.children)}}]),t}(n.Component)),J=(a(60),function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-listing-wrapper"},r.a.createElement("div",{className:"listing-wrapper"},this.props.listing.appList.slice(0,10*(this.props.pageNumber-1)).map(function(t,a){return k(t,e.props.search.searchTerm)?r.a.createElement(W,{customClassName:"listing-app-row",key:t.id,rootScrollContainer:e.props.rootScrollContainer},r.a.createElement("div",{className:"listing-app-row__ranking"},a+1),r.a.createElement("div",{className:"listing-app-row__image-wrapper"},r.a.createElement("img",{className:"listing-app-row__image",src:t.artworkUrl100,alt:"app icon"})),r.a.createElement("div",{className:"listing-app-row__app-info"},r.a.createElement("div",null,t.name),r.a.createElement("div",{className:"listing-app-row__app-info-genre"},t.genres[0].name),r.a.createElement("div",{className:"listing-app-row__app-info-rating"},r.a.createElement(U,{rating:t.averageUserRating}),r.a.createElement("div",{className:"listing-app-row__app-info-rating-count"},"(",t.userRatingCount,")")))):null})))}}]),t}(n.Component)),V=Object(f.b)(function(e,t){return{app:e.app,listing:e.listing,search:e.search}},function(e){return Object(s.a)({},Object(g.a)(O,e),Object(g.a)(A,e))})(J),z={UPDATE_GROSS_LIST:"update_gross_list"},B={grossAppList:[]},$={updateGrossList:function(e){return{type:z.UPDATE_GROSS_LIST,grossAppList:e}}};var q={APP_LIST:"https://dev.dozenbird.com/frontend/applist",GROSS_APP_LIST:"https://dev.dozenbird.com/frontend/top10GrossApp"},K=a(42),Q=a.n(K),X=(a(76),a(77),a(78),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).fetchGrossAppList=function(){var e=function(){if(localStorage.getItem("grossAppListExpireAt")<Date.now())return localStorage.removeItem("cacheGrossAppList"),localStorage.removeItem("grossAppListExpireAt"),[];var e=JSON.parse(localStorage.getItem("cacheGrossAppList"));return null!=e&&e.constructor===Array?e:[]}();if(e.length>0)return a.props.updateGrossList(e),!1;fetch(q.GROSS_APP_LIST,{method:"GET",headers:{Accept:"application/json"}}).then(function(e){return e.json().then(function(t){return{header:e,json:t}})}).then(function(e){var t=e.header,n=e.json;t.ok?(a.props.updateGrossList(n.grossAppList),localStorage.setItem("cacheGrossAppList",JSON.stringify(n.grossAppList)),localStorage.setItem("grossAppListExpireAt",Date.now()+y)):alert("Fetch Gross App List Fail")}).catch(function(e){alert("Fetch Gross App List Fail")})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchGrossAppList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-recommendation-wrapper"},r.a.createElement("div",{className:"app-recommendation__title"},"\u63a8\u4ecb"),r.a.createElement("div",{className:"app-recommendation-row"},r.a.createElement(Q.a,{dots:!1,infinite:!1,speed:500,slidesToShow:10,slidesToScroll:1,swipeToSlide:!0,responsive:[{breakpoint:1280,settings:{slidesToShow:8,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:1}},{breakpoint:720,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:4,slidesToScroll:1}}]},this.props.recommendation.grossAppList.map(function(t,a){return k(t,e.props.search.searchTerm)?r.a.createElement("div",{key:t.id,className:"app-recommendation-row__app-item"},r.a.createElement("img",{className:"app-recommendation-row__app-item-image",src:t.artworkUrl100,alt:"app icon"}),r.a.createElement("div",{className:"app-recommendation-row__app-item-name"},t.name),r.a.createElement("div",{className:"app-recommendation-row__app-info-genre"},t.genres[0].name)):null}))))}}]),t}(n.Component)),Y=Object(f.b)(function(e,t){return{app:e.app,recommendation:e.recommendation,search:e.search}},function(e){return Object(s.a)({},Object(g.a)($,e))})(X),Z=(a(79),function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin__data-grid-loading-mask"},r.a.createElement("div",{className:"spinner"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))}}]),t}(r.a.Component)),ee=(a(80),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).rootScrollContainer=r.a.createRef(),a.state={pageNumber:1,haveMoreApp:!0},a.fetchAppList=a.fetchAppList.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchAppList(),this.rootScrollContainer.current.addEventListener("scroll",function(){e.rootScrollContainer.current.scrollTop+e.rootScrollContainer.current.clientHeight+100>=e.rootScrollContainer.current.scrollHeight&&e.state.haveMoreApp&&e.fetchAppList()})}},{key:"componentWillUnmount",value:function(){this.rootScrollContainer.current.removeAllListeners()}},{key:"fetchAppList",value:function(){var e=this;if(this.props.listing.preventLoading||this.props.app.isLoading||!this.state.haveMoreApp)return!1;this.props.updateLoading(!0);var t=function(e){if(localStorage.getItem("appListExpireAt")<Date.now())return localStorage.removeItem("cacheAppList"),localStorage.removeItem("totalRecord"),localStorage.removeItem("appListExpireAt"),[];var t=JSON.parse(localStorage.getItem("cacheAppList"));return null!=t&&t.constructor===Array?t.slice((e-1)*N,e*N):[]}(this.state.pageNumber);if(t.length>0){var a=Object.assign([],Object(c.a)(this.props.listing.appList)).concat(t);return this.props.updateAppList(a),this.setState({pageNumber:this.state.pageNumber+1,haveMoreApp:a.length<localStorage.getItem("totalRecord")}),this.props.updateLoading(!1),!1}fetch(q.APP_LIST,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({pageNumber:this.state.pageNumber})}).then(function(e){return e.json().then(function(t){return{header:e,json:t}})}).then(function(t){var a=t.header,n=t.json;if(a.ok){var r=Object.assign([],Object(c.a)(e.props.listing.appList)).concat(n.list);e.props.updateAppList(r),e.setState({pageNumber:e.state.pageNumber+1,haveMoreApp:n.haveMoreApp}),localStorage.setItem("cacheAppList",JSON.stringify(r)),localStorage.setItem("totalRecord",n.totalRecord),localStorage.setItem("appListExpireAt",Date.now()+6e5)}else alert("Fetch App List Fail");e.props.updateLoading(!1)}).catch(function(t){e.props.updateLoading(!1),alert("Fetch App List Fail")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(P,null),r.a.createElement("div",{className:"app-scroll-wrapper",ref:this.rootScrollContainer},r.a.createElement(Y,null),r.a.createElement(V,{pageNumber:this.state.pageNumber,rootScrollContainer:this.rootScrollContainer.current})),r.a.createElement("div",{className:"app-wrapper__loading-indicator"},this.props.app.isLoading?r.a.createElement(Z,null):null))}}]),t}(n.Component)),te=Object(f.b)(function(e,t){return{app:e.app,listing:e.listing,search:e.search}},function(e){return Object(s.a)({},Object(g.a)(A,e),Object(g.a)(O,e))})(ee),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=Object(g.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v.UPDATE_LOADING_STATUS:return{isLoading:t.status};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w.CHANGE_SEARCH_TERM:return{searchTerm:t.searchTerm};default:return e}},listing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S.UPDATE_APP_LIST:return Object(s.a)({},e,{appList:t.appList});case S.UPDATE_PREVENT_LOADING:return Object(s.a)({},e,{preventLoading:t.newStatus});default:return e}},recommendation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case z.UPDATE_GROSS_LIST:return{grossAppList:t.grossAppList};default:return e}}});var oe=Object(g.c)(re);i.a.render(r.a.createElement(f.a,{store:oe},r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/task",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/task","/service-worker.js");ae?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.3d3b04f3.chunk.js.map