webpackJsonp([20],{531:function(t,e,n){n(813);var o=n(342)(n(707),n(897),"data-v-d3bf0b7e",null);t.exports=o.exports},532:function(t,e,n){n(537);var o=n(342)(n(535),n(538),"data-v-79004f1a",null);t.exports=o.exports},533:function(t,e,n){"use strict";e.a={primary:"#01009A",darkPrimary:"#01004e",secondary:"#F3E4A7",warning:"#F1BF14",danger:"#FF0000"}},535:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["onClick","icon","text","styles","icon_position"]}},536:function(t,e,n){e=t.exports=n(499)(),e.push([t.i,".dialogueBTN[data-v-79004f1a]{outline:none!important;box-shadow:none!important;border:0;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/generic/roundedBtn.vue"],names:[],mappings:"AACA,8BAA8B,uBAAwB,0BAA2B,SAAW,mBAAmB,gBAAgB,YAAY,kBAAkB,mBAAmB,eAAe,CAC9L",file:"roundedBtn.vue",sourcesContent:["\n.dialogueBTN[data-v-79004f1a]{outline:none !important;box-shadow:none !important;border:0px;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px\n}\n"],sourceRoot:""}])},537:function(t,e,n){var o=n(536);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(500)("ed38191a",o,!0)},538:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn dialogueBTN",style:t.styles,on:{click:t.onClick}},["left"==t.icon_position?n("i",{class:t.icon,staticStyle:{"margin-right":"10px"}}):t._e(),t._v("\n  "+t._s(t.text)+" \n  "),"right"==t.icon_position?n("i",{class:t.icon,staticStyle:{"margin-left":"20px"}}):t._e()])},staticRenderFns:[]}},707:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(70),i=n(56),s=n(533),r=n(532),a=n.n(r);e.default={mounted:function(){},data:function(){return{user:o.a.user,colors:s.a}},components:{roundedBtn:a.a},methods:{redirect:function(t){i.a.go(t)}}}},756:function(t,e,n){e=t.exports=n(499)(),e.push([t.i,".container-fluid[data-v-d3bf0b7e]{min-height:70vh;margin-top:25px}","",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/subscriptions/thankYou.vue"],names:[],mappings:"AACA,kCAAkC,gBAAgB,eAAe,CAChE",file:"thankYou.vue",sourcesContent:["\n.container-fluid[data-v-d3bf0b7e]{min-height:70vh;margin-top:25px\n}\n"],sourceRoot:""}])},813:function(t,e,n){var o=n(756);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(500)("6ef8717c",o,!0)},897:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("h3",[t._v("Thank You!")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("\n    You have successfully subscribed to Managed Social Media Posting. You can now connect to your social media accounts and enjoy the benefits to automated social media posting.\n  ")]),t._v(" "),n("roundedBtn",{attrs:{onClick:function(e){return t.redirect("/channels")},text:"Connect Pages",styles:{backgroundColor:t.colors.primary,border:"1px solid #01004E",color:"#fff",height:"45px",width:"200px"}}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"margin-top":"25px"}},[n("b",{staticClass:"text-success"},[t._v("Congratulations!")])])}]}}});
//# sourceMappingURL=20.376d5201c6bf97539fe5.js.map