window.Etsy=window.Etsy||{},function(t){var e=function(t,e){for(var n in e)t[n]=e[n];return t},n=function(t){var e=typeof t;return"undefined"===e||null===t||"string"===e&&0===t.length};t.Url={getParameters:function(t){t=t||document.URL;var e,n,s,o,i,r,a,l=t.indexOf("?"),u={};if(l)for(e=t.substring(l+1),n=e.split("&"),o=0;o<n.length;o++)r=n[o],s=r.split("="),s.length>1&&(i=s[0],a=s[1],u[decodeURIComponent(i)]=decodeURIComponent(a.replace(/\+/g,"%20")));return u},appendOrReplaceParameters:function(n,s){var o=e(t.Url.getParameters(n),s);return t.Url.removeQueryString(n)+"?"+t.Url.constructQueryString(o)},updateParameters:function(e,n){var s={},o=t.Url.getParameters(e);for(var i in n)s[i]=n[i](o[i]);return t.Url.appendOrReplaceParameters(e,s)},removeParameters:function(e,n){var s,o=t.Url.getParameters(e);for(s=0;s<n.length;s++)delete o[n[s]];return t.Url.removeQueryString(e)+"?"+t.Url.constructQueryString(o)},getPath:function(t){if(!t)return window.location.pathname;var e=document.createElement("a");return e.href=t,e.pathname},getFullPath:function(t){var e=document.createElement("a");return e.href=t,e.pathname+e.search+e.hash},getDomain:function(t){var e=null;return t?(e=document.createElement("a"),e.href=t):e=window.location,e.protocol+"//"+e.host},removeQueryString:function(t){var e=t.indexOf("?");return-1!==e?t.substring(0,e):t},constructQueryString:function(t){var e,s,o=[];for(e in t)t.hasOwnProperty(e)&&(s=t[e],n(s)||o.push(encodeURIComponent(e)+"="+encodeURIComponent(s).replace(/%20/g,"+")));return o.join("&")}}}(window.Etsy),"function"==typeof define&&define.amd&&define("common/etsy.url",[],window.Etsy.Url),require({paths:{"common/etsy.url":"common/etsy.url.20160212170532"}},["jquery","common/etsy.url"],function(t,e){var n="ABCDEFHIJKLMNOPQRSTUVWXYZ 1234567890 abcdefghijklmnopqrstuvwxyz",s=t("<div id='new-font-loader'></div>").css({position:"absolute",top:"-500px"}).appendTo("body"),o=function(){var t=window.console&&window.console.log&&e.getParameters().fontdebug;this.log=function(e){t&&console.log("[font-loader] "+e)}},i=new o,r={insertCss:function(e){t('<style type="text/css">'+e+"</style>").appendTo("head")},log:function(t){i.log(t)}},a=function(t,e,n,s){this.font_name=t,this.loading_font_name="loading-"+t,this.font_style=e,this.font_weight=n,this.asset_base_url=s,this.initial_width=0,this.$text_el=void 0,this.is_loading_done=!1,this.aborted=!1};a.prototype=t.extend({},r,{load:function(){this.log("Starting single font load:"+this.summarize()),this.$text_el=t("<span></span>").css("font-family","arial").css("font-style",this.font_style).css("font-weight",this.font_weight).html(n).appendTo(s),this.initial_width=this.$text_el.width(),this.$text_el.css("font-family",this.loading_font_name+", arial"),this.insertLoadingCss()},abort:function(){this.$text_el&&this.$text_el.remove()},getCss:function(t){var e=t?this.loading_font_name:this.font_name;return["@font-face {",'    font-family: "'+e+'";','    src: url("'+this.asset_base_url+'.eot?#iefix") format("embedded-opentype"),','         url("'+this.asset_base_url+'.woff2") format("woff2"),','         url("'+this.asset_base_url+'.woff") format("woff"),','         url("'+this.asset_base_url+'.svg") format("svg"),','         url("'+this.asset_base_url+'.ttf") format("opentype");',"    font-style: "+this.font_style+";","    font-weight: "+this.font_weight+";","    font-stretch: normal;","}"].join("\n")},getLoadedCss:function(){return this.getCss(!1)},isLoadingDone:function(){return this.is_loading_done||this.aborted||(this.is_loading_done=this.checkIfWeAreDone()),this.is_loading_done||this.aborted},checkIfWeAreDone:function(){if(!this.$text_el)return!1;var t=this.$text_el.width();return t!=this.initial_width},summarize:function(){return[this.font_name,this.font_style,this.font_weight].join(", ")},insertLoadingCss:function(){this.log("Inserting loading css"),this.insertCss(this.getCss(!0))}});var l=function(t){this.font_loaders=t,this.num_fonts=t.length,this.num_loaded=0,this.checks_ran=0,this.start_time_ms=0,this.end_time_ms=0};l.prototype=t.extend({},r,{load:function(){this.log("Starting master load."),this.start_time_ms=(new Date).getTime();for(var t in this.font_loaders)this.font_loaders[t].load();this.awaitCompletion()},insertLoadedCss:function(){this.log("Inserting loaded css");var t=_.chain(this.font_loaders).map(function(t){return t.getLoadedCss()}).value().join("");this.insertCss(t)},abort:function(){this.log("Aborting multi load");for(var t in this.font_loaders)this.font_loaders[t].abort();this.recordAbort()},checkForCompletion:function(){return this.checks_ran++,this.num_loaded=_.chain(this.font_loaders).filter(function(t){return t.isLoadingDone()}).value().length,this.num_fonts==this.num_loaded?(this.recordCompletion(),!0):!1},awaitCompletion:function(){var t=this,e=setInterval(function(){t.checkForCompletion()&&(clearTimeout(e),clearTimeout(n),t.insertLoadedCss())},100),n=setTimeout(function(){clearTimeout(e),t.abort()},1e4)},recordAbort:function(){this.end_time_ms=(new Date).getTime(),this.recordEvent("abort")},recordCompletion:function(){this.log("Logging completion"),this.end_time_ms=(new Date).getTime(),document.cookie="perf=wf:1; path=/",this.recordEvent("done")},recordEvent:function(t){var e={php_event_name:"font_loader_"+t,duration_ms:this.end_time_ms-this.start_time_ms,num_fonts:this.num_fonts,num_loaded:this.num_loaded,checks_ran:this.checks_ran,unloaded_fonts:_.map(this.font_loaders,function(t){t.summarize()})};Etsy.EventLogger.logEvent(e)}});var u={"Guardian-EgypTT-Regular":{italic:{400:{asset_base_url:"/assets/type/Guardian-EgypTT-Regular-It"}}},"Guardian-EgypTT-Light":{italic:{300:{asset_base_url:"/assets/type/Guardian-EgypTT-Light-It"}}},"Guardian-EgypTT":{normal:{300:{asset_base_url:"/assets/type/Guardian-EgypTT-Light"},400:{asset_base_url:"/assets/type/Guardian-EgypTT-Regular"},500:{asset_base_url:"/assets/type/Guardian-EgypTT-Medium"},600:{asset_base_url:"/assets/type/Guardian-EgypTT-Semibold"}}},"Guardian-EgypTT-Text":{normal:{400:{asset_base_url:"/assets/type/Guardian-EgypTT-Text-Regular"},500:{asset_base_url:"/assets/type/Guardian-EgypTT-Text-Medium"}},italic:{400:{asset_base_url:"/assets/type/Guardian-EgypTT-Text-Regular-It"}}}},d={"Guardian-EgypTT":{normal:{500:{asset_base_url:"/assets/type/Guardian-EgypTT-Medium"}}}},h=[],f=t(document.body).hasClass("reduced-webfonts")?d:u;for(var c in f)for(var m in f[c])for(var g in f[c][m])h.push(new a(c,m,g,f[c][m][g].asset_base_url));h.length>0&&t(window).load(function(){setTimeout(function(){new l(h).load()},100)})});