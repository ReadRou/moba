(function(e){function t(t){for(var n,i,l=t[0],o=t[1],c=t[2],m=0,p=[];m<l.length;m++)i=l[m],a[i]&&p.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,l=1;l<r.length;l++){var o=r[l];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("9e74"),a=r.n(n);a.a},"22de":function(e,t,r){"use strict";var n=r("ee69"),a=r.n(n);a.a},"38c8b":function(e,t,r){},5169:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("5c07"),r("53da"),r("2556"),r("d0f8");var n=r("6e6d"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("034f"),r("17cc")),l={},o=Object(i["a"])(l,a,s,!1,null,null,null),c=o.exports,u=r("bea0"),m=r.n(u);r("5b17");n["default"].use(m.a);var p=r("1e6f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},h=[],f=(r("4453"),r("a7ca")),v={data:function(){return{model:{}}},methods:{login:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("login",this.model);case 2:t=e.sent,localStorage.token=t.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},b=v,g=(r("d6db"),Object(i["a"])(b,d,h,!1,null,null,null)),x=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["1"],"unique-opened":"","default-active":e.$route.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理\n        ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理\n        ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置\n        ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",[e._v("新增")]),r("el-dropdown-item",[e._v("删除")])],1)],1),r("span",[e._v("王小虎")])],1),r("el-main",[r("router-view")],1)],1)],1)},_=[],y=(r("244e"),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),$=y,k=(r("22de"),Object(i["a"])($,w,_,!1,null,null,null)),R=k.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},j=[],C={props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/categories/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/categories",this.model);case 8:e.sent;case 9:this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories/".concat(this.id));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchParents:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.parents=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchParents(),this.id&&this.fetch()}},S=C,T=Object(i["a"])(S,O,j,!1,null,null,null),E=T.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},D=[],B=(r("3a23"),{data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/categories/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}}),I=B,U=Object(i["a"])(I,z,D,!1,null,null,null),P=U.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},A=[],M={props:{id:{}},data:function(){return{model:{}}},methods:{afterUpload:function(e){this.$set(this.model,"icon",e.url)},save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/items/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/items",this.model);case 8:e.sent;case 9:this.$router.push("/items/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/items/".concat(this.id));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.id&&this.fetch()}},J=M,V=Object(i["a"])(J,L,A,!1,null,null,null),q=V.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("物品列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},H=[],G={data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/items");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/items/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}},K=G,N=Object(i["a"])(K,F,H,!1,null,null,null),Q=N.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{value:"skills",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基础信息"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.afterUpload}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能\n        ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)}),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},X=[],Y={props:{id:{}},data:function(){return{categories:[],items:[],model:{name:"",avatar:"",scores:{difficult:0}}}},methods:{afterUpload:function(e){this.model.avatar=e.url},save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/heroes/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/heroes",this.model);case 8:e.sent;case 9:this.$router.push("/heroes/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/heroes/".concat(this.id));case 2:t=e.sent,this.model=Object.assign({},this.model,t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchCategories:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.categories=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchItems:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/items");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchItems(),this.fetchCategories(),this.id&&this.fetch()}},Z=Y,ee=Object(i["a"])(Z,W,X,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ne=[],ae={data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/heroes");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/heroes/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}},se=ae,ie=Object(i["a"])(se,re,ne,!1,null,null,null),le=ie.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{imageAdded:e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ce=[],ue=r("9009"),me={props:{id:{}},components:{VueEditor:ue["VueEditor"]},data:function(){return{model:{},categories:[]}},methods:{handleImageAdded:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t,r,n,a){var s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=new FormData,s.append("file",t),e.next=4,this.$http.post("upload",s);case 4:i=e.sent,r.insertEmbed(n,"image",i.data.url),a();case 7:case"end":return e.stop()}},e,this)}));function t(t,r,n,a){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/articles/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/articles",this.model);case 8:e.sent;case 9:this.$router.push("/articles/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/articles/".concat(this.id));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchCatgories:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.categories=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchCatgories(),this.id&&this.fetch()}},pe=me,de=Object(i["a"])(pe,oe,ce,!1,null,null,null),he=de.exports,fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ve=[],be={data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/articles");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除文章 "'.concat(e.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/articles/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}},ge=be,xe=Object(i["a"])(ge,fe,ve,!1,null,null,null),we=xe.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加广告\n      ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,function(t,n){return r("el-col",{key:n,attrs:{md:24}},[r("el-form-item",{attrs:{label:"跳转链接 (URL)"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)}),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ye=[],$e={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/ads/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/ads",this.model);case 8:e.sent;case 9:this.$router.push("/ads/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/ads/".concat(this.id));case 2:t=e.sent,this.model=Object.assign({},this.model,t.data);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.id&&this.fetch()}},ke=$e,Re=Object(i["a"])(ke,_e,ye,!1,null,null,null),Oe=Re.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Ce=[],Se={data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/ads");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/ads/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}},Te=Se,Ee=Object(i["a"])(Te,je,Ce,!1,null,null,null),ze=Ee.exports,De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"text"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Be=[],Ie={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/admin_users/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/admin_users",this.model);case 8:e.sent;case 9:this.$router.push("/admin_users/list"),this.$message({type:"success",message:"保存成功"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/admin_users/".concat(this.id));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.id&&this.fetch()}},Ue=Ie,Pe=Object(i["a"])(Ue,De,Be,!1,null,null,null),Le=Pe.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Me=[],Je={data:function(){return{items:[]}},methods:{fetch:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/admin_users");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$confirm('是否确定要删除 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/".concat(e._id));case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r)})))}},created:function(){this.fetch()}},Ve=Je,qe=Object(i["a"])(Ve,Ae,Me,!1,null,null,null),Fe=qe.exports;n["default"].use(p["a"]);var He=new p["a"]({routes:[{path:"/login",name:"login",component:x},{path:"/",name:"main",component:R,children:[{path:"/categories/create",component:E},{path:"/categories/edit/:id",component:E,props:!0},{path:"/categories/list",component:P},{path:"/items/create",component:q},{path:"/items/edit/:id",component:q,props:!0},{path:"/items/list",component:Q},{path:"/heroes/create",component:te},{path:"/heroes/edit/:id",component:te,props:!0},{path:"/heroes/list",component:le},{path:"/articles/create",component:he},{path:"/articles/edit/:id",component:he,props:!0},{path:"/articles/list",component:we},{path:"/ads/create",component:Oe},{path:"/ads/edit/:id",component:Oe,props:!0},{path:"/ads/list",component:ze},{path:"/admin_users/create",component:Le},{path:"/admin_users/edit/:id",component:Le,props:!0},{path:"/admin_users/list",component:Fe}]}]}),Ge=(r("38c8b"),r("7f43")),Ke=r.n(Ge),Ne=Ke.a.create({baseURL:"http://localhost:3000/admin/api"});Ne.interceptors.response.use(function(e){return e},function(e){return e.response.data.message&&n["default"].prototype.$message({type:"error",message:e.response.data.message}),Promise.reject(e)});var Qe=Ne;n["default"].config.productionTip=!1,n["default"].prototype.$http=Qe,new n["default"]({router:He,render:function(e){return e(c)}}).$mount("#app")},"9e74":function(e,t,r){},d6db:function(e,t,r){"use strict";var n=r("5169"),a=r.n(n);a.a},ee69:function(e,t,r){}});
//# sourceMappingURL=app.2a9d5165.js.map