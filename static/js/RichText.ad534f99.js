(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["RichText"],{"17ec":function(t,e,i){},"32a6":function(t,e,i){var n=i("241e"),o=i("c3a1");i("ce7e")("keys",function(){return function(t){return o(n(t))}})},"60cf":function(t,e,i){},7718:function(t,e,i){"use strict";var n=i("9be7"),o=i.n(n);o.a},"8aae":function(t,e,i){i("32a6"),t.exports=i("584a").Object.keys},"9be7":function(t,e,i){},a17c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[i("code",[t._v("\n    "+t._s(t.$t("components.tinymceTips"))+"\n    "),i("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html"}},[t._v(" "+t._s(t.$t("components.documentation")))])]),i("div",[i("tinymce",{attrs:{height:300},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:t.fullscreen}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},s=[],c=(i("ac6a"),i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)}),r=[],l=i("795b"),u=i.n(l),d=i("a4bb"),h=i.n(d),m={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return h()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=h()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var i=e.uid,n=h()(this.listObj),o=0,a=n.length;o<a;o++)if(this.listObj[n[o]].uid===i)return this.listObj[n[o]].url=t.files.file,void(this.listObj[n[o]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=h()(this.listObj),n=0,o=i.length;n<o;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new u.a(function(o,a){var s=new Image;s.src=i.createObjectURL(t),s.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}},f=m,p=(i("c27d"),i("2877")),b=Object(p["a"])(f,c,r,!1,null,"39480e6e",null);b.options.__file="editorImage.vue";var g=b.exports,y=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],v=y,w=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],_=w,C={name:"Tinymce",components:{editorImage:g},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{BASE_UPLOAD_URL:"/api/imgupload",hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({language:"zh_CN",selector:"#".concat(this.tinymceId),height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:_,menubar:this.menubar,plugins:v,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})},images_dataimg_filter:function(t){return setTimeout(function(){var e=$(t);e.removeAttr("width"),e.removeAttr("height"),e[0].height&&e[0].width&&(e.attr("data-wscntype","image"),e.attr("data-wscnh",e[0].height),e.attr("data-wscnw",e[0].width),e.addClass("wscnph"))},0),t},images_upload_handler:function(t,e,i){var n,o;n=new XMLHttpRequest,n.withCredentials=!1,n.open("POST","https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1/upload"),n.onload=function(){if(n.status<200||n.status>=300)i(n.status);else{var t=JSON.parse(n.responseText);0==t.code?e(t.data[0].newFileName):i("HTTP Error: "+t.msg)}},o=new FormData,o.append("file",t.blob(),t.filename()),n.send(o)}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))})}}},k=C,O=(i("b3bc"),Object(p["a"])(k,a,s,!1,null,"15bc952d",null));O.options.__file="index.vue";var j=O.exports,T={name:"TinymceDemo",components:{Tinymce:j},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>\n        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n      </ul>'}}},x=T,S=(i("7718"),Object(p["a"])(x,n,o,!1,null,"4f7f65c4",null));S.options.__file="RichText.vue";e["default"]=S.exports},a4bb:function(t,e,i){t.exports=i("8aae")},b3bc:function(t,e,i){"use strict";var n=i("60cf"),o=i.n(n);o.a},c27d:function(t,e,i){"use strict";var n=i("17ec"),o=i.n(n);o.a},ce7e:function(t,e,i){var n=i("63b6"),o=i("584a"),a=i("294c");t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*a(function(){i(1)}),"Object",s)}}}]);