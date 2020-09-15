(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"0ef3":function(t,e,s){},"2d82":function(t,e,s){},"2fa3":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("ac1f"),s("5319"),s("498a");var a=function(t){return t.toLowerCase().trim().replace(/[\s_]/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/-$/g,"")}},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},"50bc":function(t,e,s){"use strict";s("ac1f"),s("5319");var a=function(t){return t=t.replace(/^\s*\n\*\./gm,"<ul>\n*."),t=t.replace(/^(\*..+)\s*\n([^\*\.])/gm,"$1\n</ul>\n\n$2"),t=t.replace(/^\*\.(.+)/gm,"<li>$1</li>"),t=t.replace(/^\s*\n\d\./gm,"<ol>\n1."),t=t.replace(/^(\d\..+)\s*\n([^\d\.])/gm,"$1\n</ol>\n\n$2"),t=t.replace(/^\d\.(.+)/gm,"<li>$1</li>"),t=t.replace(/^\>(.+)/gm,'<div class="divider pl-4"><p class="blockquote">$1</p></div>'),t=t.replace(/^\&gt;(.+)/gm,'<div class="divider pl-4"><p class="blockquote">$1</p></div>'),t=t.replace(/[\#]{6}(.+)/g,'<h6 class="mt-5 mb-4">$1</h6>'),t=t.replace(/[\#]{5}(.+)/g,'<h5 class="mt-5 mb-4">$1</h5>'),t=t.replace(/[\#]{4}(.+)/g,'<h4 class="mt-5 mb-4">$1</h4>'),t=t.replace(/[\#]{3}(.+)/g,'<h3 class="mt-5 mb-4">$1</h3>'),t=t.replace(/[\#]{2}(.+)/g,'<h2 class="mt-5 mb-4">$1</h2>'),t=t.replace(/[\#]{1}(.+)/g,'<h1 class="mt-5 mb-4">$1</h1>'),t=t.replace(/^(===+)/gm,"<hr>"),t=t.replace(/^(---+)/gm,"<br>"),t=t.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g,'<img class="img-fluid" src="$2" alt="$1" />'),t=t.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,'<a href="$2" class="font-weight-bold text-primary" title="$4" rel="noopener" target="_blank">$1</a>'),t=t.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g,"<b>$1</b>"),t=t.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g,"<i>$1</i>"),t=t.replace(/[\~]{2}([^\~]+)[\~]{2}/g,"<del>$1</del>"),t=t.replace(/^\s*\n\`\`\`(([^\s]+))?/gm,'<pre class="$2">'),t=t.replace(/^\`\`\`\s*\n/gm,"</pre>\n\n"),t=t.replace(/[\`]{1}([^\`]+)[\`]{1}/g,"<code>$1</code>"),t=t.replace(/^\s*(\n)?(.+)/gm,(function(t){return/\<(\/)?(h\d|ul|ol|li|div|blockquote|&gt;|pre|img)/.test(t)?t:"<p>"+t+"</p>"})),t=t.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm,"$1$2"),t};e["a"]=a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),n=s("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},"6c88":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h4",{staticClass:"hmi__header font-weight-bold"},[t._v(t._s(t.postSlug?"Update post":"Create new post"))]),t.isError?s("div",{staticClass:"badge-danger mb-3 p-2 rounded text-center"},[t._v("Error: "+t._s(t.isError))]):t._e(),s("ValidationObserver",{ref:"observer",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[s("form",[s("div",{staticClass:"form-group mb-5 mt-4"},[s("Input",{attrs:{name:"title",label:"Title",rules:"max:70|required",type:"text",disabled:t.isLoading},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title","string"===typeof e?e.trim():e)},expression:"post.title"}}),s("small",{staticClass:"form-text text-muted"},[t._v("The main title of the blog post")])],1),s("div",{staticClass:"form-group mb-5"},[s("Input",{attrs:{name:"subtitle",label:"Subtitle",type:"text",disabled:t.isLoading},model:{value:t.post.subtitle,callback:function(e){t.$set(t.post,"subtitle","string"===typeof e?e.trim():e)},expression:"post.subtitle"}}),s("small",{staticClass:"form-text text-muted mt-2"},[t._v("Subtitle will appear under the title, an optional field")])],1),s("div",{staticClass:"form-group mb-5"},[s("label",{attrs:{for:"adminPhotoPost"}},[t._v("Image")]),s("input",{ref:"photo",staticClass:"form-control border-0 ml-n2",attrs:{type:"file",id:"adminPhotoPost",accept:"image/png, image/jpeg, image/jpg",name:"photo",disabled:t.isLoading},on:{change:t.savePhoto}}),s("small",{staticClass:"form-text text-muted"},[t._v("Choose the main image of the blog post, for better experience choose landscape format. Max file size: 1.2MB.")]),t.post&&t.post.photo?s("div",[s("p",{staticClass:"mt-3"},[t._v("Current Image")]),s("img",{staticClass:"form-group",attrs:{src:t.post.photo,alt:t.post.title,width:"200"}})]):t._e()]),s("div",{staticClass:"form-group mb-5"},[s("label",{attrs:{for:"descrition"}},[t._v("Short Description")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.description,expression:"post.description"}],staticClass:"form-control",attrs:{name:"description",id:"description",rows:"2",disabled:t.isLoading},domProps:{value:t.post.description},on:{input:function(e){e.target.composing||t.$set(t.post,"description",e.target.value)}}}),s("span",{staticClass:"text-danger position-absolute"},[t._v(t._s(a[0]))])]}}],null,!0)}),s("small",{staticClass:"form-text text-muted mt-4"},[t._v("A short summary which will appear on the main Blog page under the image you provided above.")])],1),s("div",{staticClass:"form-group mb-5"},[s("label",{attrs:{for:"content"}},[t._v("Content")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.post.content,expression:"post.content",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"content",rows:"20",id:"content",disabled:t.isLoading},domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("span",{staticClass:"text-danger position-absolute"},[t._v(t._s(a[0]))])]}}],null,!0)}),s("small",{staticClass:"form-text text-muted mt-4"},[t._v("The main body of the blog post")])],1),s("div",{staticClass:"form-group mb-5"},[s("label",[t._v("Resources")]),t._l(t.post.resources,(function(e,a){return s("div",{key:a,staticClass:"d-flex mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.resources[a],expression:"post.resources[index]"}],staticClass:"form-control",attrs:{type:"text",id:a},domProps:{value:t.post.resources[a]},on:{input:function(e){e.target.composing||t.$set(t.post.resources,a,e.target.value)}}}),""!==e||0===a?s("button",{staticClass:"btn btn-info ml-2",attrs:{disabled:t.isLoading,type:"button"},on:{click:function(e){return t.post.resources.push("")}}},[s("Icon",{attrs:{icon:"plus"}})],1):s("button",{staticClass:"btn btn-info ml-2",attrs:{type:"button"},on:{click:function(e){return t.post.resources.splice(a,1)}}},[s("Icon",{attrs:{icon:"minus"}})],1)])})),s("small",{staticClass:"form-text text-muted"},[t._v('Add as many resources as you need and include an "http" or an "https" prefix, an optional field')])],2),s("div",{staticClass:"form-group"},[s("p",[t._v("Tags")]),t._l(t.tags,(function(e,a){return s("div",{key:a,staticClass:"form-check form-check-inline p-2 badge-info rounded"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:e,name:"tags",disabled:t.isLoading},domProps:{value:e,checked:t.post.tags&&t.post.tags.includes(e)},on:{change:function(s){return t.addTags(s,e)}}}),s("label",{staticClass:"form-check-label ml-2",attrs:{for:e}},[t._v(t._s(e))])])})),s("small",{staticClass:"form-text text-muted"},[t._v("Choose one or several topics this blog post belongs to")])],2),s("button",{staticClass:"btn btn-info mr-3 mt-5 mb-3",attrs:{id:"blogPreviewButton",type:"button","data-toggle":"modal","data-target":"#blogPreview"}},[t._v(" Preview ")]),s("button",{staticClass:"btn btn-primary mt-5 mb-3 position-relative",attrs:{type:"submit",disabled:t.isLoading}},[s("span",{class:{"mr-2":t.isLoading}},[t._v("Publish")]),t.isLoading?s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t._e()],1)])]}}])}),s("PreviewModal",{attrs:{post:t.post}})],1)},n=[],i=(s("a4d3"),s("e01a"),s("99af"),s("4de4"),s("c975"),s("a434"),s("96cf"),s("1da1")),r=s("5530"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"blogPreview",tabindex:"-1",role:"dialog","aria-labelledby":"Preview","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.post.title))]),t._m(0)]),s("div",{staticClass:"container py-2"},[s("h4",{staticClass:"mb-4 blogpost__header text-muted"},[t._v(t._s(t.post.subtitle))]),s("div",{staticClass:"blogpost__content",domProps:{innerHTML:t._s(t.formatToMarkdown)}}),t.post.resources&&t.post.resources!==[]?s("Resources",{attrs:{resources:t.post.resources}}):t._e(),t.post.selectedTags?s("Tags",{attrs:{tags:t.post.selectedTags}}):t._e()],1)])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v(" ×")])])}],c=s("9f59"),u=s("e5d4"),m=s("50bc"),d={props:["post"],components:{Resources:c["a"],Tags:u["a"]},computed:{formatToMarkdown:function(){if(this.post.content)return Object(m["a"])(this.post.content)}}},p=d,f=s("2877"),g=Object(f["a"])(p,o,l,!1,null,null,null),b=g.exports,v=s("2fa3"),h=s("7bb1"),_=s("4c93");Object(h["c"])("required",Object(r["a"])(Object(r["a"])({},_["f"]),{},{message:"The field is required"}));var C="".concat(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_BASE_URL,"/blog/posts2"),y={"Content-Type":"multipart/form-data"},x={components:{PreviewModal:b,ValidationObserver:h["a"],ValidationProvider:h["b"]},computed:{titleToSlug:function(){return Object(v["a"])(this.post.title)}},data:function(){return{isLoading:!1,isError:!1,post:{title:null,subtitle:null,description:null,content:"",photo:null,tags:[],resources:[""]},postSlug:null,tags:["nutrition","exercise","unwind","restore","optimize","lifestyle"]}},methods:{submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.observer.validate();case 2:s=e.sent,s&&t.submitPost();case 4:case"end":return e.stop()}}),e)})))()},submitPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,s=new FormData,a=t.postSlug||t.titleToSlug,n=t.post.resources?t.post.resources.filter((function(t){return""!==t})):[],s.append("title",t.post.title),s.append("subtitle",t.post.subtitle),s.append("description",t.post.description),s.append("content",Object(m["a"])(t.post.content)),s.append("resources",n),s.append("tags",t.post.tags),s.append("photo",t.post.photo),e.prev=11,e.next=14,t.$axios.put("".concat(C,"/").concat(a),s,y);case 14:t.$router.push({name:"admin-blog"}),e.next=19;break;case 17:e.prev=17,e.t0=e["catch"](11);case 19:return e.prev=19,t.isLoading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[11,17,19,22]])})))()},savePhoto:function(){this.post.photo=this.$refs.photo.files[0]},addTags:function(t,e){if(t.target.checked)this.post.tags.push(e);else{var s=this.post.selectedTags.indexOf(e);this.post.tags.splice(s,1)}},getBlogPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.$axios.get("".concat(C,"/").concat(t.postSlug));case 4:s=e.sent,a=s.data,t.post=a,t.post.photo="".concat(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_BASE_URL_ASSETS,"/").concat(a.photo),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](1);case 12:return e.prev=12,t.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])})))()}},mounted:function(){this.$route.params.slug&&(this.postSlug=this.$route.params.slug,this.getBlogPost())}},w=x,O=Object(f["a"])(w,a,n,!1,null,null,null);e["default"]=O.exports},"7db0":function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").find,i=s("44d2"),r=s("ae40"),o="find",l=!0,c=r(o);o in[]&&Array(1)[o]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"9f59":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-5"},[s("h5",{staticClass:"blogpost__header mt-4"},[t._v("Resources")]),s("ol",{staticClass:"list-unstyled"},t._l(t.resources,(function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.trim(),target:"_blank",rel:"noopener"}},[t._v(t._s(a+1)+". "+t._s(e.trim())+" ")])])})),0)])},n=[],i={props:["resources"]},r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},a434:function(t,e,s){"use strict";var a=s("23e7"),n=s("23cb"),i=s("a691"),r=s("50c4"),o=s("7b0b"),l=s("65f0"),c=s("8418"),u=s("1dde"),m=s("ae40"),d=u("splice"),p=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var s,a,u,m,d,p,h=o(this),_=r(h.length),C=n(t,_),y=arguments.length;if(0===y?s=a=0:1===y?(s=0,a=_-C):(s=y-2,a=g(f(i(e),0),_-C)),_+s-a>b)throw TypeError(v);for(u=l(h,a),m=0;m<a;m++)d=C+m,d in h&&c(u,m,h[d]);if(u.length=a,s<a){for(m=C;m<_-a;m++)d=m+a,p=m+s,d in h?h[p]=h[d]:delete h[p];for(m=_;m>_-a+s;m--)delete h[m-1]}else if(s>a)for(m=_-a;m>C;m--)d=m+a-1,p=m+s-1,d in h?h[p]=h[d]:delete h[p];for(m=0;m<s;m++)h[m+C]=arguments[m+2];return h.length=_-a+s,u}})},a623:function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").every,i=s("a640"),r=s("ae40"),o=i("every"),l=r("every");a({target:"Array",proto:!0,forced:!o||!l},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},b2de:function(t,e,s){"use strict";var a=s("0ef3"),n=s.n(a);n.a},c6db:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("h4",{staticClass:"hmi__header font-weight-bold"},[t._v("Blog Dashboard")]),s("div",{staticClass:"container mt-4"},[s("router-link",{staticClass:"btn btn-outline-primary ml-n3",attrs:{to:{name:"blog-add"}}},[t._v("Create new Blog post")])],1),t.isLoading?s("div",{staticClass:"d-flex justify-content-center mt-4"},[s("Icon",{staticClass:"fa-spin fa-2x text-primary",attrs:{icon:"spinner"}})],1):t._e(),s("div",{staticClass:"container mt-4"},[s("div",{staticClass:"row d-flex"},t._l(t.posts,(function(t,e){return s("div",{key:e,staticClass:"col-12 col-sm-6 col-lg-4 mb-4 mt-4 mx-n3"},[s("BlogCard",{attrs:{post:t}})],1)})),0)])])])},n=[],i=(s("96cf"),s("1da1")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card blogcard__img",style:{"background-image":"url('"+t.photoUrl+"')"}},[s("div",{staticClass:"blogcard__body p-3 d-flex flex-column justify-content-between"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.post.title.substring(0,25))+"...")]),s("p",{staticClass:"small"},[t._v(t._s(t.post.description?t.post.description.substring(0,150):"")+"...")]),s("h6",[t._v("Tags")]),t.post.tags?s("p",{staticClass:"small"},t._l(t.post.tags,(function(e,a){return s("span",{key:a,staticClass:"mr-2"},[t._v(t._s(e))])})),0):s("p",{staticClass:"small"},[s("span",{staticClass:"mr-2 font-italic"},[t._v("No tags selected")])]),s("div",{staticClass:"d-flex flex-wrap flex-md-row flex-column mt-4"},[s("router-link",{staticClass:"btn btn-sm btn-outline-secondary mr-md-2 mt-2",attrs:{to:{path:"/blog/article/"+t.post.slug}}},[t._v("View")]),s("router-link",{staticClass:"btn btn-sm btn-outline-info mr-md-2 mt-2",attrs:{to:{path:"/admin/blog/edit/"+t.post.slug,params:{post:t.post}}}},[t._v("Edit")]),s("button",{staticClass:"btn btn-sm btn-outline-danger ml-md-auto mt-2",attrs:{type:"button","data-toggle":"modal","data-target":"#deleteBlogPostModal-"+t.post.slug}},[t._v(" Delete ")])],1)]),s("ConfirmModal",{attrs:{confirmDelete:t.deletePost,title:t.post.title,slug:t.post.slug,isLoading:t.isLoading,closeModal:t.closeModal}})],1)},o=[],l=(s("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"deleteBlogPostModal-"+t.slug,tabindex:"-1",role:"dialog","aria-labelledby":"deletePostModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[t.closeModal?s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body text-center pt-4"},[s("Icon",{staticClass:"fa-4x text-primary mb-4",attrs:{icon:"check-circle"}}),s("h5",{staticClass:"mr-2"},[t._v(" Blog post was successfully deleted! ")])],1)]):s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body text-center pt-4"},[s("h5",{staticClass:"mr-2"},[t._v(" Are you sure you want to delete "),s("br"),s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.title))]),t._v(" ? ")]),t.isLoading?s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t._e()],1),s("div",{staticClass:"modal-footer d-flex"},[s("button",{staticClass:"btn btn-outline-primary col",attrs:{type:"button","data-dismiss":"modal",disabled:t.isLoading}},[t._v(" Cancel ")]),s("button",{staticClass:"btn btn-outline-danger mr-2 col",attrs:{type:"button",disabled:t.isLoading},on:{click:t.confirmDelete}},[t._v(" Delete ")])])])])])}),c=[],u={props:["title","slug","confirmDelete","isLoading","closeModal"]},m=u,d=s("2877"),p=Object(d["a"])(m,l,c,!1,null,null,null),f=p.exports,g="".concat(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_BASE_URL,"/blog/posts"),b={"Content-Type":"application/json"},v={props:["post"],components:{ConfirmModal:f},computed:{photoUrl:function(){return"".concat(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_BASE_URL_ASSETS,"/").concat(this.post.photo)}},data:function(){return{closeModal:!1,isLoading:!1}},methods:{deletePost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.$axios.delete("".concat(g,"/").concat(t.post.slug),b);case 4:return e.prev=4,t.isLoading=!1,t.closeModal=!0,e.finish(4);case 8:case"end":return e.stop()}}),e,null,[[1,,4,8]])})))()}}},h=v,_=(s("b2de"),Object(d["a"])(h,r,o,!1,null,"6aaa7b7c",null)),C=_.exports,y={components:{BlogCard:C},data:function(){return{isLoading:!1,posts:[]}},methods:{getPosts:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.$axios.get("".concat(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_BASE_URL,"/blog/posts"));case 4:s=e.sent,a=s.data,t.posts=a.sort((function(t,e){return e.updatedAt-t.updatedAt})),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.posts=[];case 12:return e.prev=12,t.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()}},mounted:function(){this.getPosts()}},x=y,w=Object(d["a"])(x,a,n,!1,null,null,null);e["default"]=w.exports},c8d2:function(t,e,s){var a=s("d039"),n=s("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}},c975:function(t,e,s){"use strict";var a=s("23e7"),n=s("4d64").indexOf,i=s("a640"),r=s("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},cbcf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pb-4"},[t._m(0),s("div",[s("h4",{staticClass:"hmi__header font-weight-bold"},[t._v("Users")]),s("div",{staticClass:"container mt-4 mb-5"},[s("h6",{staticClass:"text-black-50 my-3"},[t._v("Assign a community owner")]),s("Users",{attrs:{users:t.users,communities:t.communities}})],1)]),s("div",[s("h4",{staticClass:"hmi__header font-weight-bold"},[t._v("Communities")]),s("div",{staticClass:"container my-4"},[s("h6",{staticClass:"text-black-50 my-3"},[t._v("Add community")]),s("AddCommunity",{attrs:{communities:t.communities}})],1),s("div",{staticClass:"container my-4"},[s("h6",{staticClass:"text-black-50 my-3"},[t._v("Communities overview")]),s("Communities",{attrs:{communities:t.communities}})],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title mb-5"},[s("h4",{staticClass:"hmi__header font-weight-bold"},[t._v("Dashboard")]),s("p",{staticClass:"text-center"},[t._v("Welcome! This is the admin zone")])])}],i=s("5530"),r=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isError?s("div",{staticClass:"badge-danger mb-3 p-2 rounded text-center"},[t._v("Error: "+t._s(t.isError))]):t._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control mb-2",attrs:{placeholder:"Search by email"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),s("transition-group",{attrs:{name:"fade"}},[t.resultQuery.length>0?s("table",{key:"transition-group-0",staticClass:"table border table-hover table-responsive-sm mb-5"},[s("thead",[s("tr",t._l(t.columns,(function(e,a){return s("th",{key:a,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),t.resultQuery.length>0?s("tbody",t._l(t.resultQuery,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),s("td",[t._v(t._s(e.email))]),s("td",{staticClass:"d-flex justify-content-between"},[s("select",{staticClass:"custom-select custom-select-sm mr-3",on:{change:function(s){return t.assignCommunity(e.userId,s)}}},[s("option",{attrs:{disabled:""},domProps:{selected:!e.ownerOf}},[t._v("Select a community")]),t._l(t.communities,(function(a,n){return s("option",{key:n,domProps:{value:a.slug,selected:e.ownerOf&&e.ownerOf.includes(a.slug)?"selected":""}},[t._v(t._s(a.name))])}))],2),s("button",{staticClass:"btn btn-outline-primary rounded-circle",class:{"btn-light":e.ownerOf&&e.ownerOf[0]===t.communityOwners[e.userId],"button--disabled":e.ownerOf&&e.ownerOf[0]===t.communityOwners[e.userId]},attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Make user a community admin",disabled:e.ownerOf&&e.ownerOf[0]===t.communityOwners[e.userId]},on:{click:function(s){return t.addCommunityOwner(e.userId)}}},[t.isLoading&&t.currentUser===e.userId?s("span",[s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}})],1):s("span",[s("Icon",{class:{"text-light":e.ownerOf&&e.ownerOf[0]===t.communityOwners[e.userId]},attrs:{icon:"plus"}})],1)])])])})),0):t._e()]):t._e()])],1)},l=[],c=(s("a623"),s("4de4"),s("4160"),s("caad"),s("b64b"),s("ac1f"),s("2532"),s("1276"),s("159b"),s("96cf"),s("1da1")),u={props:["users","communities"],computed:{resultQuery:function(){var t=this;return this.searchQuery?this.users.filter((function(e){return t.searchQuery.toLowerCase().split(" ").every((function(t){return e.email.toLowerCase().includes(t)}))})):[]}},data:function(){return{isError:!1,isLoading:!1,columns:["#","Name","Email","Community"],currentUser:null,searchQuery:null,communityOwners:{}}},methods:{addCommunityOwner:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.communityOwners[t],e.currentUser=t,s.prev=2,e.isLoading=!0,s.next=6,e.$store.dispatch("DASHBOARD/ADD_COMMUNITY_OWNER",{userId:t,community:a});case 6:s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](2),e.isError=s.t0;case 11:return s.prev=11,e.isLoading=!1,e.currentUser=null,s.finish(11);case 15:case"end":return s.stop()}}),s,null,[[2,8,11,15]])})))()},assignCommunity:function(t,e){var s=e.target.value;this.communityOwners[t]=s}},watch:{users:{handler:function(){var t=this;this.users.forEach((function(e){Object.keys(e).forEach((function(s){"userId"===s&&t.$set(t.communityOwners,e.userId,e.ownerOf?e.ownerOf[0]:null)}))}))}}}},m=u,d=(s("e731"),s("2877")),p=Object(d["a"])(m,o,l,!1,null,null,null),f=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isError?s("div",{staticClass:"badge-danger mb-3 p-2 rounded text-center"},[t._v("Error: "+t._s(t.isError))]):t._e(),s("table",{staticClass:"table border table-responsive-md mb-5"},[s("thead",[s("tr",t._l(t.columns,(function(e,a){return s("th",{key:a,attrs:{scope:"col"}},[t._v(t._s(e))])})),0)]),s("tbody",[s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.communityName,expression:"communityName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"community-name"},domProps:{value:t.communityName},on:{input:function(e){e.target.composing||(t.communityName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.communitySlug,expression:"communitySlug",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"community-slug","aria-describedby":"url-prefix"},domProps:{value:t.communitySlug},on:{input:function(e){e.target.composing||(t.communitySlug=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("p",{staticClass:"small text-black-50 mt-2"},[t._v(" healthymindsinitiative.org/"),t.communitySlug?s("span",{staticClass:"font-italic"},[t._v(t._s(t._f("slugify")(t.communitySlug)))]):t._e()])]),s("td",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-outline-primary rounded-circle",class:{"btn-light":t.isButtonDisabled,"button--disabled":t.isButtonDisabled},attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Add community",disabled:t.isButtonDisabled},on:{click:t.addCommunity}},[t.isLoading?t._e():s("span",[s("Icon",{class:{"text-light":t.isButtonDisabled},attrs:{icon:"plus"}})],1),t.isLoading?s("span",[s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}})],1):t._e()])])])])])])},b=[],v=(s("7db0"),s("b0c0"),s("2fa3")),h={props:["communities"],filters:{slugify:function(t){return Object(v["a"])(t)}},computed:{isButtonDisabled:function(){return!this.communityName||!this.communitySlug}},data:function(){return{isLoading:!1,isError:!1,communityName:null,communitySlug:null,columns:["Community Name","Community URL",""]}},methods:{checkDuplicates:function(t){var e=this.communities.find((function(e){return e.name===t.name})),s=this.communities.find((function(e){return e.slug===t.slug}));return!(!e&&!s)},addCommunity:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isError=!1,t.communityName&&t.communitySlug){e.next=3;break}return e.abrupt("return");case 3:if(s={name:t.communityName,slug:Object(v["a"])(t.communitySlug)},!t.checkDuplicates(s)){e.next=7;break}return t.isError="Looks like these names are already taken!",e.abrupt("return");case 7:return t.isLoading=!0,e.prev=8,e.next=11,t.$store.dispatch("DASHBOARD/ADD_COMMUNITY",Object(i["a"])({},s));case 11:t.communityName=null,t.communitySlug=null,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](8),t.isError=e.t0;case 18:return e.prev=18,t.isLoading=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[8,15,18,21]])})))()}}},_=h,C=Object(d["a"])(_,g,b,!1,null,null,null),y=C.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.communities.length?s("table",{staticClass:"table border table-hover table-responsive-sm mb-5"},[s("thead",[s("tr",t._l(t.columns,(function(e,a){return s("th",{key:a,class:{"text-right pr-4":3===a},attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),s("tbody",t._l(t.communities,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.name))]),s("td",[t._v(" healthymindsinitiative.org/"),s("span",{staticClass:"font-italic"},[t._v(t._s(e.slug))])]),s("td",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-outline-primary mr-md-2 rounded-circle button--edit",attrs:{type:"button","data-toggle":"modal","data-target":"#editCommunity-"+e.slug}},[s("Icon",{attrs:{icon:"edit"}})],1)]),s("EditCommunityModal",{attrs:{slug:e.slug,name:e.name}})],1)})),0)]):s("div",{staticClass:"d-flex justify-content-center mt-4"},[s("Icon",{staticClass:"fa-spin fa-2x text-primary",attrs:{icon:"spinner"}})],1)])},w=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"editCommunity-"+t.slug,tabindex:"-1",role:"dialog","aria-labelledby":"Preview","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"pt-2 pl-2"},[t._v(" Viewing "),s("span",{staticClass:"text-primary font-italic"},[t._v(t._s(t.name))])])]),s("div",{staticClass:"container p-4"},[s("h5",{staticClass:"mb-4"},[t._v("Community")]),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-12 col-md-5"},[s("label",[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.communityName,expression:"communityName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.communityName},on:{input:function(e){e.target.composing||(t.communityName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col-12 col-md-5"},[s("label",[t._v("Slug")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.communitySlug,expression:"communitySlug",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"url-prefix"},domProps:{value:t.communitySlug},on:{input:function(e){e.target.composing||(t.communitySlug=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("p",{staticClass:"small text-black-50 mt-2"},[t._v(" healthymindsinitiative.org/"),t.communitySlug?s("span",{staticClass:"font-italic"},[t._v(t._s(t._f("slugify")(t.communitySlug)))]):t._e()])]),s("div",{staticClass:"form-group col-md-1 mt-4 pt-2"},[s("button",{staticClass:"btn btn-outline-primary rounded-circle",class:{"btn-light":t.isButtonDisabled,"button--disabled":t.isButtonDisabled},attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Add project",disabled:t.isButtonDisabled},on:{click:t.addProject}},[t.isLoading?t._e():s("span",[s("Icon",{class:{"text-light":t.isButtonDisabled},attrs:{icon:"plus"}})],1),t.isLoading?s("span",[s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}})],1):t._e()])])])]),s("div",{staticClass:"container p-4"},[s("h5",{staticClass:"mb-4"},[t._v("Projects")]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row d-flex align-items-end"},[s("div",{staticClass:"form-group col-12 col-md-5"},[s("label",[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.projectName,expression:"projectName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.projectName},on:{input:function(e){e.target.composing||(t.projectName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col-12 col-md-5"},[s("label",[t._v("Slug")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.projectSlug,expression:"projectSlug",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.projectSlug},on:{input:function(e){e.target.composing||(t.projectSlug=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col-md-1"},[s("button",{staticClass:"btn btn-outline-primary rounded-circle",class:{"btn-light":t.isButtonDisabled,"button--disabled":t.isButtonDisabled},attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Add project",disabled:t.isButtonDisabled},on:{click:t.addProject}},[t.isLoading?t._e():s("span",[s("Icon",{class:{"text-light":t.isButtonDisabled},attrs:{icon:"plus"}})],1),t.isLoading?s("span",[s("Icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}})],1):t._e()])])])]),s("p",{staticClass:"mb-2 text-black-50"},[t._v("Existing")])]),s("div",{staticClass:"container p-4 text-right mt-2 d-flex justify-content-between"},[s("div",[s("router-link",{staticClass:"btn btn-sm btn-outline-primary mr-sm-2",attrs:{to:{path:""+t.slug},"data-dismiss":"modal"}},[t._v("View Public Page")]),s("router-link",{staticClass:"btn btn-sm btn-outline-primary",attrs:{to:{path:"/community-edit/"+t.slug},"data-dismiss":"modal"}},[t._v("Edit Public Page")])],1),s("div",[t.isCommunityLive?t._e():s("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return t.toggleLiveStatus(!0)}}},[t._v(" Go Live ")]),t.isCommunityLive?s("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.toggleLiveStatus(!1)}}},[t._v(" Go Offline ")]):t._e()])])])])])])},k=[],S={props:["name","slug"],filters:{slugify:function(t){return Object(v["a"])(t)}},computed:Object(i["a"])(Object(i["a"])({},Object(r["b"])("DASHBOARD",["communityOwners"])),{},{isButtonDisabled:function(){return!this.communityName||!this.communitySlug}}),data:function(){return{isLoading:!1,isError:!1,isCommunityLive:!1,communitySlug:null,communityName:null,projectName:null,projectSlug:null}},methods:{toggleLiveStatus:function(t){this.isCommunityLive=t},addProject:function(){}},watch:{slug:{handler:function(t){this.communitySlug=t},immediate:!0},name:{handler:function(t){this.communityName=t},immediate:!0}}},E=S,$=Object(d["a"])(E,O,k,!1,null,null,null),L=$.exports,j={props:["communities"],components:{EditCommunityModal:L},data:function(){return{columns:["#","Community","Community URL","Manage"]}},methods:{editCommunity:function(t){this.communities[t]}}},P=j,N=(s("f8b4"),Object(d["a"])(P,x,w,!1,null,null,null)),A=N.exports,D={components:{Users:f,AddCommunity:y,Communities:A},computed:Object(i["a"])({},Object(r["b"])("DASHBOARD",["communities","users","communityOwners"])),mounted:function(){this.$store.dispatch("DASHBOARD/GET_USERS"),this.$store.dispatch("DASHBOARD/GET_COMMUNITIES")}},B=D,R=Object(d["a"])(B,a,n,!1,null,null,null);e["default"]=R.exports},d7c9:function(t,e,s){},e5d4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row ml-0 mb-4"},t._l(t.tags,(function(e,a){return s("router-link",{key:a,staticClass:"mr-2 p-2 mb-2 text-center badge-info rounded col-3 col-md-2 col-lg-1",attrs:{to:{path:"/blog/"+e}}},[t._v(t._s(e))])})),1)},n=[],i={props:["tags"]},r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},e731:function(t,e,s){"use strict";var a=s("d7c9"),n=s.n(a);n.a},f8b4:function(t,e,s){"use strict";var a=s("2d82"),n=s.n(a);n.a}}]);
//# sourceMappingURL=admin.82b3a8bd.js.map