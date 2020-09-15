(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23f8ab16"],{5995:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[e.isLoading?a("div",[a("div",{staticClass:"hmi__loader",attrs:{id:"main-loader"}},[a("Icon",{staticClass:"fa-spin fa-3x text-primary",attrs:{icon:"spinner"}}),a("span",{staticClass:"sr-only"},[e._v("Loading...")])],1)]):e._e(),a("div",{staticClass:"container hmi__payment__container p-5 rounded"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e.isError?a("div",{staticClass:"row d-flex justify-content-center flex-column-lg"},[a("div",{staticClass:"p-2 text-center rounded badge-danger form-group row col-10 col-md-7 col-xl-5"},[e._v(" "+e._s(e.isError)+" ")])]):e._e(),a("div",{staticClass:"row d-flex justify-content-center flex-column-lg"},[a("div",{staticClass:"form-group row col-10 col-md-7 col-xl-5"},[a("label",{staticClass:"col-form-label",attrs:{type:"email",for:"cardholder-email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control StripeElement",attrs:{type:"text",id:"cardholder-email",name:"cardholder-email",placeholder:"jenny@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),a("div",{staticClass:"row d-flex justify-content-center flex-column-lg"},[a("div",{staticClass:"form-group row col-10 col-md-7 col-xl-5"},[a("label",{staticClass:"col-form-label",attrs:{for:"cardholder-name"}},[e._v("Cardholder Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control StripeElement",attrs:{type:"text",id:"cardholder-name",name:"cardholder-name",placeholder:"Jenny Rosen",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._m(0),a("div",{staticClass:"text-danger text-center mb-3",attrs:{id:"card-errors",role:"alert"}}),a("div",{staticClass:"row d-flex justify-content-center flex-column-lg"},[a("button",{staticClass:"form-group col-6 col-md-3 col-xl-3 btn btn-primary btn-lg",attrs:{id:"card-button","data-secret":"donation.customerKey",disabled:e.isLoading},on:{click:e.submit}},[e._v(" Donate "+e._s(e.amount)+"$ ")])]),a("div",{staticClass:"row d-flex justify-content-center text-center"},[a("div",{staticClass:"form-check col-10 col-lg-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mandateAcceptance,expression:"mandateAcceptance"}],staticClass:"form-check-input",attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(e.mandateAcceptance)?e._i(e.mandateAcceptance,null)>-1:e.mandateAcceptance},on:{change:function(t){var a=e.mandateAcceptance,n=t.target,r=!!n.checked;if(Array.isArray(a)){var c=null,s=e._i(a,c);n.checked?s<0&&(e.mandateAcceptance=a.concat([c])):s>-1&&(e.mandateAcceptance=a.slice(0,s).concat(a.slice(s+1)))}else e.mandateAcceptance=r}}}),a("small",[e._v("I authorise "),a("span",{staticClass:"text-bold"},[e._v("Healthy Minds Initiative ")]),e._v(" to send instructions to the financial institution that issued my card to take a payment of "+e._s(e.amount)+" USD from my card account. ")])])])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row d-flex justify-content-center flex-column-lg"},[a("div",{staticClass:"form-group row col-10 col-md-7 col-xl-5"},[a("label",{staticClass:"col-form-label",attrs:{for:"card-details"}},[e._v("Card Details")]),a("div",{staticClass:"form-control StripeElement",attrs:{id:"card-element"}})])])}],c=(a("b0c0"),a("96cf"),a("1da1")),s=a("5530"),o=function(e){var t=document.createElement("script");t.src="https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t),t.addEventListener("load",e)},i=a("2f62"),l={data:function(){return{isLoading:!1,isError:!1,stripe:null,elements:null,card:null,name:null,email:null,mandateAcceptance:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])("DONATION",["clientSecret","amount"])),{},{form:function(){return document.getElementById("payment-form")},style:function(){return{base:{fontFamily:"Montserrat"}}}}),methods:{submit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:if(e.name&&e.email){t.next=5;break}return e.isError="You must fill out the form.",t.abrupt("return");case 5:return e.isLoading=!0,t.prev=6,t.next=9,e.stripe.confirmCardPayment(e.clientSecret,{payment_method:{card:e.elements.getElement("card"),billing_details:{name:e.name,email:e.email}}});case 9:a=t.sent,"succeeded"===a.paymentIntent.status&&e.$router.push({name:"donate-thank-you"}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](6),e.isError=t.t0;case 16:return t.prev=16,e.isLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[6,13,16,19]])})))()}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.amount&&e.clientSecret){t.next=3;break}return e.$router.push({name:"donate"}),t.abrupt("return");case 3:o((function(){e.stripe=window.Stripe(Object({NODE_ENV:"production",BASE_URL:"/client-app/"}).VUE_APP_STRIPE_KEY),e.elements=e.stripe.elements({fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Montserrat:300"}]}),e.card=e.elements.create("card",{style:e.style}),e.card.mount("#card-element"),e.card.addEventListener("change",(function(e){var t=e.error,a=document.getElementById("card-errors");a.textContent=t?t.message:""}))}));case 4:case"end":return t.stop()}}),t)})))()}},d=l,m=(a("85af"),a("2877")),u=Object(m["a"])(d,n,r,!1,null,"67d17369",null);t["default"]=u.exports},"66d2":function(e,t,a){},"85af":function(e,t,a){"use strict";var n=a("66d2"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-23f8ab16.e27a2016.js.map