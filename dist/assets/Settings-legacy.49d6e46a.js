!function(){var t=document.createElement("style");t.innerHTML=".shadow-box[data-v-d584a8c4]{padding:20px;min-height:calc(100vh - 155px)}footer[data-v-d584a8c4]{color:#aaa;font-size:13px;margin-top:20px;padding-bottom:30px;text-align:center}.settings-menu a[data-v-d584a8c4]{text-decoration:none!important}.settings-menu .menu-item[data-v-d584a8c4]{border-radius:10px;margin:.5em;padding:.7em 1em;cursor:pointer;transition:all ease-in-out .1s}[dir=ltr] .settings-menu .menu-item[data-v-d584a8c4]{border-left-width:0}[dir=rtl] .settings-menu .menu-item[data-v-d584a8c4]{border-right-width:0}.settings-menu .menu-item[data-v-d584a8c4]:hover{background:#e7faec}.dark .settings-menu .menu-item[data-v-d584a8c4]:hover{background:#161b22}.settings-menu .active .menu-item[data-v-d584a8c4]{background:#e7faec}[dir=ltr] .settings-menu .active .menu-item[data-v-d584a8c4]{border-left:4px solid #5cdd8b;border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl] .settings-menu .active .menu-item[data-v-d584a8c4]{border-right:4px solid #5cdd8b;border-top-right-radius:0;border-bottom-right-radius:0}.dark .settings-menu .active .menu-item[data-v-d584a8c4]{background:#161b22}.settings-content .settings-content-header[data-v-d584a8c4]{width:calc(100% + 20px);border-bottom:1px solid #dee2e6;margin-top:-20px;padding:12.5px 1em;font-size:26px}[dir=ltr] .settings-content .settings-content-header[data-v-d584a8c4]{border-radius:0 10px 0 0;margin-right:-20px}[dir=rtl] .settings-content .settings-content-header[data-v-d584a8c4]{border-radius:10px 0 0;margin-left:-20px}.dark .settings-content .settings-content-header[data-v-d584a8c4]{background:#161b22;border-bottom:0}.mobile .settings-content .settings-content-header[data-v-d584a8c4]{padding:15px 0 0}.dark .mobile .settings-content .settings-content-header[data-v-d584a8c4]{background-color:transparent}\n",document.head.appendChild(t),System.register(["./vendor-legacy.bb36673b.js","./index-legacy.5e2e3998.js"],(function(t){"use strict";var e,n,a,i,s,r,o,d,c,u,g,l,m,h,b,p,v;return{setters:[function(t){e=t.ax,n=t.r,a=t.o,i=t.V,s=t.Y,r=t.ac,o=t.W,d=t.$,c=t.a9,u=t.aa,g=t.c,l=t.a7,m=t.a0,h=t.a6,b=t.ae,p=t.al},function(t){v=t._}],execute:function(){var f={class:"shadow-box"},x={class:"row"},k={key:0,class:"settings-menu col-lg-3 col-md-5"},$={class:"menu-item"},y={class:"settings-content col-lg-9 col-md-7"},S={key:0,class:"settings-content-header"},w={class:"mx-3"};t("default",v({data:function(){return{show:!0,settings:{},settingsLoaded:!1}},computed:{currentPage:function(){var t=e().path.split("/"),n=t[t.length-1];return n&&"settings"!==n?n:null},showSubMenu:function(){return!this.$root.isMobile||!this.currentPage},subMenus:function(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"monitor-history":{title:this.$t("Monitor History")},security:{title:this.$t("Security")},backup:{title:this.$t("Backup")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile":function(){this.loadGeneralPage()}},mounted:function(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage:function(){this.currentPage||this.$root.isMobile||this.$router.push("/settings/general")},loadSettings:function(){var t=this;this.$root.getSocket().emit("getSettings",(function(e){t.settings=e.data,void 0===t.settings.searchEngineIndex&&(t.settings.searchEngineIndex=!1),void 0===t.settings.entryPage&&(t.settings.entryPage="dashboard"),void 0===t.settings.keepDataPeriodDays&&(t.settings.keepDataPeriodDays=180),t.settingsLoaded=!0}))},saveSettings:function(){var t=this;this.$root.getSocket().emit("setSettings",this.settings,(function(e){t.$root.toastRes(e),t.loadSettings()}))}}},[["render",function(t,e,v,P,M,_){var D=n("router-link"),G=n("router-view");return a(),i("div",null,[s(o("h1",{class:"mb-3"},d(t.$t("Settings")),513),[[r,M.show]]),o("div",f,[o("div",x,[_.showSubMenu?(a(),i("div",k,[(a(!0),i(c,null,u(_.subMenus,(function(t,e){return a(),g(D,{key:e,to:"/settings/".concat(e)},{default:l((function(){return[o("div",$,d(t.title),1)]})),_:2},1032,["to"])})),128))])):m("",!0),o("div",y,[_.currentPage?(a(),i("div",S,d(_.subMenus[_.currentPage].title),1)):m("",!0),o("div",w,[h(G,null,{default:l((function(t){var e=t.Component;return[h(b,{name:"slide-fade",appear:""},{default:l((function(){return[(a(),g(p(e)))]})),_:2},1024)]})),_:1})])])])])])}],["__scopeId","data-v-d584a8c4"]]))}}}))}();