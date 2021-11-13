(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(16),s=r.n(c),i=r(3),o=r.n(i),l=r(7),d=r(5),h=r(4),x=r(15),j=r.n(x);j.a.defaults.baseURL="https://crypto-325819.appspot.com/api";var u=function(){var e=Object(d.a)(o.a.mark((function e(){var t,r,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,j.a.get("/".concat(t));case 3:if(r=e.sent,n=r.data,1!==t){e.next=7;break}return e.abrupt("return",n[0]);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/ethEarnings");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=r(9),p=r(10),v=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;Object(b.a)(this,e),this.pairRate=void 0,this.reward24H=void 0,this.hashrate=void 0,this.period=void 0,this.pairRate=t,this.reward24H=r,this.hashrate=n,this.period=a}return Object(p.a)(e,[{key:"USDTEarning",get:function(){return this.pairRate?this.reward24H?(this.pairRate/100*this.reward24H*this.hashrate*this.period).toFixed(2):"Incorrect Reward info":"Incorrect Pair Rate"}},{key:"cryptoEarning",get:function(){return this.reward24H?(this.reward24H/100*this.hashrate*this.period).toFixed(5):"Incorrect Reward info"}}]),e}(),f=function(){function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;Object(b.a)(this,e),this.earningsInfo=void 0,this.pairRate=void 0,this.reward24H=void 0,this.period=void 0,this.earningsInfo=t,this.pairRate=r,this.reward24H=n,this.period=a}return Object(p.a)(e,[{key:"summedHashrate",get:function(){return this.earningsInfo.reduce((function(e,t){return e+ +t.hashrate}),0)}},{key:"USDTEarning",get:function(){return this.pairRate?this.reward24H?(this.pairRate/100*this.reward24H*this.summedHashrate*this.period).toFixed(2):"Incorrect Reward Info":"Incorrect Pair Rate"}},{key:"cryptoEarning",get:function(){return this.reward24H?(this.reward24H/100*this.summedHashrate*this.period).toFixed(5):"Incorrect Reward Info"}}]),e}(),O=[{name:"daily",value:1},{name:"weekly",value:7},{name:"monthly",value:30},{name:"yearly",value:360}],g=O[0],w=["NVIDIA","AMD"],y=[{vendor:w[0],name:"RTX 3060",hashrate:50,isLHR:!1},{vendor:w[0],name:"RTX 3060",hashrate:32,isLHR:!0},{vendor:w[0],name:"RTX 3060TI",hashrate:60,isLHR:!1},{vendor:w[0],name:"RTX 3060TI",hashrate:42,isLHR:!0},{vendor:w[0],name:"RTX 3070",hashrate:64,isLHR:!1},{vendor:w[0],name:"RTX 3070",hashrate:42,isLHR:!0},{vendor:w[0],name:"RTX 3070TI",hashrate:58,isLHR:!0},{vendor:w[0],name:"RTX 3080",hashrate:100,isLHR:!1},{vendor:w[0],name:"RTX 3080",hashrate:65,isLHR:!0},{vendor:w[0],name:"RTX 3080TI",hashrate:90,isLHR:!0},{vendor:w[0],name:"RTX 3090",hashrate:115,isLHR:!1},{vendor:w[1],name:"RX 5500XT",hashrate:26,isLHR:!1},{vendor:w[1],name:"RX 5600XT",hashrate:40,isLHR:!1},{vendor:w[1],name:"RX 5700/XT",hashrate:55,isLHR:!1},{vendor:w[1],name:"RX 6600/XT",hashrate:33,isLHR:!1},{vendor:w[1],name:"RX 6700XT",hashrate:48,isLHR:!1},{vendor:w[1],name:"RX 6800/XT",hashrate:64,isLHR:!1},{vendor:w[1],name:"RX 6900XT",hashrate:64,isLHR:!1}];var N=r(0),k=document.querySelector("#modal-root"),R=function(e){var t=e.children,r=e.isShowing;return Object(n.useEffect)((function(){return document.body.style.overflow=r?"hidden":"unset",function(){document.body.style.overflow="unset"}}),[r]),k&&s.a.createPortal(r&&Object(N.jsx)("div",{className:"modal bg-gray-700 bg-opacity-95",children:Object(N.jsxs)("div",{className:"flex justify-center items-center",children:[Object(N.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(N.jsx)("div",{className:"inline-block align-bottom py-8 px-12 text-gray-700 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:t})]})}),k)},H=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("svg",{className:"fill-current text-gray-200",width:"32",height:"32",viewBox:"0 0 784.37 1277.39",children:Object(N.jsxs)("g",{id:"Layer_x0020_1",children:[Object(N.jsx)("metadata",{id:"CorelCorpID_0Corel-Layer"}),Object(N.jsx)("g",{id:"_1421394342400",children:Object(N.jsxs)("g",{children:[Object(N.jsx)("polygon",{points:"392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "}),Object(N.jsx)("polygon",{points:"392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "}),Object(N.jsx)("polygon",{points:"392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "}),Object(N.jsx)("polygon",{points:"392.07,1277.38 392.07,956.52 -0,724.89 "}),Object(N.jsx)("polygon",{points:"392.07,882.29 784.13,650.54 392.07,472.33 "}),Object(N.jsx)("polygon",{points:"0,650.54 392.07,882.29 392.07,472.33 "})]})})]})})})},C=r(13),L=function(e){var t=e.hintText;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"cursor-pointer","data-tip":!0,"data-for":"hint",children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 opacity-50 transition-opacity hover:opacity-75",viewBox:"0 0 20 20",fill:"currentColor",children:Object(N.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),Object(N.jsx)(C.a,{id:"hint",type:"light",effect:"solid",children:Object(N.jsx)("span",{className:"text-gray-800 text-center",children:t})})]})},S=function(e){var t=e.micro;return Object(N.jsxs)("div",{className:"flex items-center justify-center px-2",children:[Object(N.jsxs)("svg",{className:t?"animate-spin mr-2 h-4 w-4 text-white":"animate-spin mr-2 h-7 w-7 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(N.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(N.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading..."]})},E=function(e){var t=e.onClickSwitchPeriodField,r=e.currentPeriod;return Object(N.jsxs)("button",{className:"mx-auto flex items-center focus:outline-none relative transition-colors hover:text-gray-300",onClick:t,children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute -left-7 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})}),Object(N.jsx)("p",{className:"ml-1 capitalize transition-colors hover:text-gray-300",children:r.name})]})},M=function(e){var t=e.onClickSwitchPeriodField,r=Object(n.useContext)(re).dashboardState;return Object(N.jsxs)("div",{className:"flex-1 rounded-2xl pb-8 md:pb-16 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:bg-opacity-90",children:[Object(N.jsxs)("div",{className:"flex justify-between items-start md:mb-6",children:[Object(N.jsxs)("div",{className:"flex items-center opacity-50 select-none",children:[Object(N.jsx)(H,{}),"Ethereum"]}),Object(N.jsx)(L,{hintText:"Information provided by HiveOn Pool"})]}),Object(N.jsxs)("div",{className:"text-xl md:text-3xl block md:flex items-center justify-around md:space-x-4",children:[Object(N.jsxs)("div",{className:"text-center gap-4",children:[Object(N.jsx)(E,{onClickSwitchPeriodField:t,currentPeriod:r.period}),"earnings per",Object(N.jsxs)("div",{className:"text-gray-300",children:[100," MH/s"]})]}),Object(N.jsx)("div",{className:"mt-2 md:m-0 text-center",children:r.isLoading?Object(N.jsx)(S,{}):Object(N.jsxs)("div",{children:[r.cryptoPair&&Object(N.jsxs)("div",{className:"text-4xl md:text-7xl",children:["$",r.cryptoPair.USDTEarning]}),r.earningsInfo&&Object(N.jsxs)("div",{className:"text-base md:text-lg text-gray-300",children:[r.cryptoPair.cryptoEarning," ETH"]})]})})]})]})},T=r(62),z=r(29),I=r(17),B=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),D=function(){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-14 w-14 text-red-500",viewBox:"0 0 192.756 192.756",fill:"currentColor",children:Object(N.jsx)("g",{fillRule:"evenodd",clipRule:"evenodd",children:Object(N.jsx)("path",{d:"M72.194 173.336H61.725l-3.203-7.723H41.075l-2.917 7.723H27.86l15.731-39.014h11.27l17.333 39.014zm-22.824-29.69l-5.721 15.158h12.013l-6.292-15.158zm60.851-9.324h8.467v39.014h-9.725v-24.371l-10.525 12.244H96.95l-10.526-12.244v24.371H76.7v-39.014h8.466l12.527 14.473 12.528-14.473zm33.109 0c14.244 0 21.566 8.867 21.566 19.564 0 11.211-7.094 19.449-22.652 19.449h-16.133v-39.014h17.219v.001zm-7.494 31.864h6.35c9.783 0 12.699-6.637 12.699-12.355 0-6.693-3.604-12.357-12.812-12.357h-6.236v24.712h-.001zm-19.381-120.76H74.063l-26.1-25.887 94.853-.118v94.64L116.455 87.58V45.426zM74.396 88.411l-.214-38.236-26.836 26.836v37.762h38.829l26.362-26.362H74.396z"})})})},P=function(){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-14 w-14 text-green-500",viewBox:"-29.998 -38.707 259.981 232.24",fill:"currentColor",children:Object(N.jsxs)("g",{fillRule:"evenodd",fill:"none",children:[Object(N.jsx)("path",{fill:"currentColor",d:"M83.166 117.393l.004 37.434h10.57v-37.433H83.166zM0 117.343v37.484h10.666v-28.463l8.263.003c2.737 0 4.686.681 6.005 2.088 1.673 1.782 2.355 4.655 2.355 9.912v16.46h10.334v-20.71c0-14.781-9.422-16.775-18.64-16.775H0zm100.188.051v37.433h17.148c9.136 0 12.117-1.52 15.342-4.926 2.28-2.392 3.753-7.642 3.753-13.379 0-5.261-1.247-9.956-3.422-12.879-3.917-5.227-9.56-6.249-17.983-6.249zm10.487 8.15h4.546c6.594 0 10.86 2.962 10.86 10.646 0 7.686-4.266 10.647-10.86 10.647h-4.546v-21.292zm-42.752-8.15L59.1 147.062l-8.455-29.666-11.412-.002 12.074 37.433h15.238l12.169-37.433h-10.79zm73.427 37.433h10.574v-37.43l-10.576-.003zm29.637-37.42l-14.763 37.407h10.425l2.336-6.612h17.47l2.21 6.612h11.32l-14.876-37.41-14.122.004zm6.863 6.825l6.404 17.524h-13.01z"}),Object(N.jsx)("path",{fill:"currentColor",d:"M69.189 29.708v-8.993a67.728 67.728 0 012.653-.136c24.596-.773 40.733 21.134 40.733 21.134S95.147 65.919 76.46 65.919c-2.692 0-5.1-.433-7.271-1.162v-27.27c9.575 1.156 11.5 5.386 17.258 14.982L99.25 41.674s-9.345-12.258-25.1-12.258c-1.715 0-3.353.12-4.961.292zm0-29.707v13.433c.882-.07 1.766-.126 2.653-.158 34.205-1.152 56.489 28.052 56.489 28.052s-25.597 31.124-52.262 31.124c-2.443 0-4.73-.225-6.88-.606v8.303c1.838.234 3.742.372 5.73.372 24.815 0 42.76-12.672 60.138-27.671 2.879 2.307 14.675 7.919 17.1 10.378-16.523 13.832-55.028 24.98-76.857 24.98a63.43 63.43 0 01-6.111-.318v11.67h94.316V0H69.19zm0 64.756v7.09c-22.952-4.093-29.322-27.95-29.322-27.95s11.02-12.21 29.322-14.189v7.779c-.014 0-.024-.004-.036-.004-9.604-1.154-17.108 7.82-17.108 7.82s4.204 15.106 17.144 19.454zM28.425 42.862s13.602-20.073 40.764-22.148v-7.28c-30.084 2.414-56.136 27.893-56.136 27.893S27.807 83.985 69.19 87.89v-7.74c-30.368-3.822-40.765-37.288-40.765-37.288z"})]})})},X=function(e){return"NVIDIA"===e.children?Object(N.jsx)(P,{}):Object(N.jsx)(D,{})},F=function(e){var t=e.deviceList,r=e.onClickSelectorItem;return Object(N.jsx)("div",{className:"absolute rounded bg-gray-600 max-h-72 -mx-5 py-5 inset-x-0 -bottom-13 z-10 text-base overflow-auto",children:t.map((function(e){return Object(N.jsxs)("button",{className:"flex items-center w-full px-5 transition-colors hover:bg-gray-500",onClick:function(){return r(e)},children:[Object(N.jsx)(X,{children:e.vendor}),Object(N.jsxs)("div",{className:"flex items-center w-44",children:[Object(N.jsx)("div",{className:"ml-2",children:e.name}),e.isLHR&&Object(N.jsx)("div",{className:"text-black text-xs bg-gray-300 px-1 ml-1",children:"LHR"})]}),Object(N.jsxs)("div",{className:"ml-2",children:[e.hashrate," MH/s"]})]},e.name+Number(e.isLHR))}))})},V=function(e){var t,r,a=e.changeView,c=e.onAddNewRecord,s=Object(n.useState)(!1),i=Object(h.a)(s,2),o=i[0],d=i[1],x=Object(n.useState)(y),j=Object(h.a)(x,2),u=j[0],m=j[1],b=Object(I.a)({mode:"onSubmit"}),p=b.register,v=b.handleSubmit,f=b.watch,O=b.setValue,g=b.setFocus,w=b.formState.errors,k=f().name,R=Object(n.useRef)(null),H=p("name",{maxLength:17}),C=H.ref,L=Object(z.a)(H,["ref"]);t=R,r=function(){return d(!1)},Object(n.useEffect)((function(){var e=function(e){var n=null===t||void 0===t?void 0:t.current;n&&!n.contains(e.target)&&r(e)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[t,r]),Object(n.useEffect)((function(){g("name")}),[g]),Object(n.useEffect)((function(){m(function(e){return y.filter((function(t){return new RegExp(e,"i").test(t.name.toLowerCase())}))}(k))}),[k]);var S=function(e){c(e),a()},E=function(){var e;B&&(null===(e=R.current)||void 0===e||e.scrollIntoView())};return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"flex justify-end",children:Object(N.jsxs)("button",{className:"cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75",onClick:function(){return a()},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:Object(N.jsx)("path",{fillRule:"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),"Back"]})}),Object(N.jsxs)("form",{onSubmit:v(S),children:[Object(N.jsxs)("div",{className:"relative",children:[Object(N.jsx)("input",Object(l.a)(Object(l.a)({className:(null===w||void 0===w?void 0:w.name)?"w-full mb-3 py-2 input-warn":"w-full mb-3 py-2",type:"text",placeholder:"Name"},L),{},{name:"name",ref:function(e){C(e),R.current=e},onClick:function(){return E()},onFocus:function(){d(!0),E()}})),o&&u.length>0&&Object(N.jsx)(F,{deviceList:u,onClickSelectorItem:function(e){O("hashrate",e.hashrate),O("name",e.name),d(!1)}})]}),Object(N.jsxs)("div",{className:"relative items-center",children:[Object(N.jsx)("input",Object(l.a)(Object(l.a)({className:(null===w||void 0===w?void 0:w.hashrate)?"w-full mb-3 py-2 input-warn":"w-full mb-3 py-2"},p("hashrate",{validate:function(e){return/^[0-9]+$/.test(String(e))}})),{},{onFocus:function(){return d(!1)},type:"number",defaultValue:"100",placeholder:"Hashrate"})),Object(N.jsx)("span",{className:"absolute top-2 right-0",children:"MH/s"})]}),Object(N.jsx)("div",{className:"flex justify-end",children:Object(N.jsx)("button",{className:"opacity-50 transition-opacity hover:opacity-75",disabled:!Boolean(w),onClick:v(S),children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})})]})]})},U=function(){var e,t=Object(n.useContext)(re),r=t.dashboardState,a=t.userData,c=t.setUserData,s=Object(n.useState)(!1),i=Object(h.a)(s,2),o=i[0],l=i[1],d=function(){l(!o)},x=new f(a,r.currentEthRate,null===(e=r.earningsInfo)||void 0===e?void 0:e.expectedReward24H,r.period.value);return Object(N.jsx)("div",{className:"flex-1 rounded-2xl text-xl pb-8 md:pb-12 lg:pb-4 pt-6 md:pt-10 px-8 bg-gray-700 transition hover:bg-opacity-90",children:o?Object(N.jsx)(T.a,{show:o,appear:!0,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(N.jsx)(V,{changeView:d,onAddNewRecord:function(e){var t,r=a,n={name:""!==e.name?e.name:"Rig #".concat(r.length),hashrate:null!==(t=e.hashrate)&&void 0!==t?t:1,quantity:1,uuid:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))};r.push(n),c(r)}})}):Object(N.jsx)("div",{children:a.length>0?Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"flex justify-between",children:[Object(N.jsx)("p",{className:"text-center opacity-50 select-none",children:"Summary"}),Object(N.jsxs)("button",{className:"cursor-pointer text-lg flex items-center opacity-50 transition-opacity hover:opacity-75",onClick:function(){return d()},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:Object(N.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})}),"Add"]})]}),r.isLoading?Object(N.jsx)("div",{className:"text-xl md:text-3xl py-8 md:py-14",children:Object(N.jsx)(S,{})}):x&&Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsxs)("p",{className:"text-gray-300 mb-2",children:[x.summedHashrate.toFixed(2).replace(/\.00$/,"")," ","MH/s"]}),Object(N.jsxs)("p",{className:"text-4xl md:text-7xl",children:["$",x.USDTEarning]}),Object(N.jsxs)("p",{className:"text-base md:text-lg text-gray-300",children:[x.cryptoEarning," ETH"]})]})]}):Object(N.jsxs)("button",{className:"flex flex-col mx-auto items-center text-center",onClick:function(){return d()},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-1/4 w-1/4 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Add your equipment for tracking earnings"]})})})},A=r(14),Y=r.n(A),$=function(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 67.671 67.671",fill:"currentColor",children:[Object(N.jsx)("path",{d:"M52.946 23.348H42.834v6h10.112c3.007 0 5.34 1.536 5.34 2.858v26.606c0 1.322-2.333 2.858-5.34 2.858H14.724c-3.007 0-5.34-1.536-5.34-2.858V32.207c0-1.322 2.333-2.858 5.34-2.858h10.11v-6h-10.11c-6.359 0-11.34 3.891-11.34 8.858v26.606c0 4.968 4.981 8.858 11.34 8.858h38.223c6.358 0 11.34-3.891 11.34-8.858V32.207c-.001-4.968-4.982-8.859-11.341-8.859z"}),Object(N.jsx)("path",{d:"M24.957 14.955a2.99 2.99 0 002.121-.879l3.756-3.756v30.522a3 3 0 106 0V10.117l3.959 3.959c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L36.078.877A2.987 2.987 0 0033.958 0h-.046c-.767 0-1.534.291-2.12.877l-8.957 8.957a2.998 2.998 0 002.122 5.121z"})]})},W=function(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 60.903 60.903",fill:"currentColor",children:[Object(N.jsx)("path",{d:"M49.561 16.464H39.45v6h10.111c3.008 0 5.341 1.535 5.341 2.857v26.607c0 1.321-2.333 2.858-5.341 2.858H11.34c-3.007 0-5.34-1.537-5.34-2.858V25.324c0-1.322 2.333-2.858 5.34-2.858h10.11v-6H11.34C4.981 16.466 0 20.357 0 25.324v26.605c0 4.968 4.981 8.857 11.34 8.857h38.223c6.357 0 11.34-3.891 11.34-8.857V25.324c-.001-4.969-4.982-8.86-11.342-8.86z"}),Object(N.jsx)("path",{d:"M39.529 29.004a2.99 2.99 0 00-2.121.88l-3.756 3.755V3.117a3 3 0 00-6 0v30.724l-3.959-3.958a2.992 2.992 0 00-4.242 0 2.997 2.997 0 000 4.241l8.957 8.957a2.988 2.988 0 002.12.877h.045c.768 0 1.534-.291 2.12-.877l8.957-8.957a2.997 2.997 0 00-2.121-5.12z"})]})},J=function(e){var t,r,a=e.onClickLastUpdateLabel,c=e.onClickImportButton,s=e.onClickExportButton,i=Object(n.useContext)(re),o=i.dashboardState,l=i.userData;return Object(N.jsxs)("section",{className:"flex mt-8 mb-12 h-8 items-center justify-between",children:[Object(N.jsxs)("div",{className:"flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0",children:[Object(N.jsxs)("div",{onClick:function(){return a()},className:"flex items-center text-gray-400 hover:underline cursor-pointer",children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Last update:",o.isLoading?Object(N.jsx)("div",{className:"ml-1 bg-gray-500 rounded animate-pulse w-10 h-4"}):Object(N.jsx)("span",{className:"ml-1 text-white",children:Y()().format("HH:mm")})]}),Object(N.jsxs)("div",{className:"flex items-center text-gray-400",children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),"ETH/USDT Rate:",o.isLoading?Object(N.jsx)("div",{className:"ml-1 bg-gray-500 rounded animate-pulse w-16 h-4"}):Object(N.jsxs)("span",{className:"ml-1 text-white",children:["$",null!==(t=null===(r=o.currentEthRate)||void 0===r?void 0:r.toFixed(2))&&void 0!==t?t:"Fetch error"]})]})]}),Object(N.jsxs)("div",{className:"flex space-x-2",children:[Object(N.jsxs)(T.a,{as:"button","aria-label":"Export data",className:"transition-colors text-gray-500 hover:text-gray-300 focus:outline-none",show:l.length>0,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0","data-tip":!0,"data-for":"export-icon",onClick:s,children:[Object(N.jsx)($,{}),Object(N.jsx)(C.a,{disable:B,id:"export-icon",type:"light",effect:"solid",children:Object(N.jsx)("span",{className:"text-gray-800 text-center",children:"Export"})})]}),Object(N.jsxs)("button",{className:"cursor-pointer transition-colors text-gray-500 hover:text-gray-300 focus:outline-none","aria-label":"Import data","data-tip":!0,"data-for":"import-icon",onClick:c,children:[Object(N.jsx)(W,{}),Object(N.jsx)(C.a,{disable:B,id:"import-icon",type:"light",effect:"solid",children:Object(N.jsx)("span",{className:"text-gray-800 text-center",children:"Import"})})]})]})]})},_=function(){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})})},q=function(){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(N.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})},G=function(e){var t=e.onClickCloseModalButton,r=Object(n.useContext)(re).userData,a=Object(n.useRef)(null);return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"flex justify-end mb-2 text-gray-500 hover:text-black transition-colors",children:Object(N.jsx)("button",{onClick:t,title:"Close",children:Object(N.jsx)(q,{})})}),Object(N.jsx)("p",{className:"text-black text-xl text-center my-2",children:"Export data"}),Object(N.jsx)("p",{className:"text-black text-sm text-center my-2",children:"Click the copy button below to save your data and use it to import to another device"}),Object(N.jsxs)("div",{className:"relative items-center",children:[Object(N.jsx)("input",{ref:a,className:"bg-white text-black w-full border rounded pr-10 py-2 pl-2",type:"text",readOnly:!0,defaultValue:JSON.stringify(r)}),Object(N.jsx)("button",{className:"absolute z-10 top-2 right-2 text-gray-500 hover:text-black transition-colors",onClick:function(){var e;a&&(navigator.clipboard.writeText((null===(e=a.current)||void 0===e?void 0:e.value)||"[]"),t())},"aria-label":"Copy to clipboard",title:"Copy",children:Object(N.jsx)(_,{})})]})]})},K=function(e){var t=e.onClickCloseModalButton,r=Object(n.useContext)(re).setUserData,a=Object(I.a)({mode:"onSubmit"}),c=a.register,s=a.handleSubmit,i=a.setError,o=a.formState.errors;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"flex justify-end mb-2 text-gray-500 hover:text-black transition-colors",children:Object(N.jsx)("button",{onClick:t,title:"Close",children:Object(N.jsx)(q,{})})}),Object(N.jsx)("p",{className:"text-black text-xl text-center my-2",children:"Import data"}),Object(N.jsx)("p",{className:"text-black text-sm text-center my-2",children:"Paste saved string into the text field below to import your data"}),Object(N.jsxs)("form",{className:"items-center",onSubmit:s((function(e){try{var n=JSON.parse(e.exportPhrase);r(n),t()}catch(a){i("exportPhrase",{type:"manual",message:"Incorrect export phrase"})}})),children:[Object(N.jsx)("input",Object(l.a)({className:"bg-white text-black w-full border rounded p-2",type:"text"},c("exportPhrase"))),(null===o||void 0===o?void 0:o.exportPhrase)&&Object(N.jsx)("p",{className:"text-red-600",children:o.exportPhrase.message}),Object(N.jsx)("button",{className:"w-full rounded text-center mt-2 py-2 px-4 text-black hover:bg-gray-600 hover:text-white transition-colors","aria-label":"Import data",children:"Import"})]})]})},Q=function(){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(N.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})},Z=function(e){var t,r=e.device,a=e.onClickDeleteButton,c=Object(n.useContext)(re).dashboardState,s=new v(c.currentEthRate,null===(t=c.earningsInfo)||void 0===t?void 0:t.expectedReward24H,r.hashrate,c.period.value);return Object(N.jsxs)("div",{className:"py-3 px-4 bg-gray-700 rounded hover:opacity-90",children:[Object(N.jsxs)("div",{className:"flex justify-between items-center opacity-50",children:[r.name," - ",r.hashrate," MH/s",Object(N.jsx)("button",{onClick:function(){return a(r.uuid)},"aria-label":"Delete record",children:Object(N.jsx)(Q,{})})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("p",{children:["$",s.USDTEarning]}),Object(N.jsxs)("p",{children:[s.cryptoEarning," ETH"]})]})]})},ee=function(){var e=Object(n.useContext)(re),t=e.dashboardState,r=e.userData,a=e.setUserData;return Object(N.jsx)("div",{className:"mt-8 mb-6",children:!t.isLoading&&r.length>0?Object(N.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-4 md:gap-6",children:r.sort((function(e,t){return+e.hashrate<+t.hashrate?1:+e.hashrate>+t.hashrate?-1:0})).map((function(e){return Object(N.jsx)(Z,{device:e,onClickDeleteButton:function(){return t=e.uuid,void a(r.filter((function(e){return e.uuid!==t})));var t}},e.uuid)}))}):null})},te={isLoading:!0,period:g,currentEthRate:void 0,earningsInfo:void 0,cryptoPair:v},re=Object(n.createContext)({}),ne=function(){var e=function(e,t){var r=function(){if("undefined"===typeof window)return t;try{var r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(n){return console.warn('Error reading localStorage key "'.concat(e,'":'),n),t}},a=Object(n.useState)(r),c=Object(h.a)(a,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(r())}),[]),Object(n.useEffect)((function(){var e=function(){i(r())};return window.addEventListener("storage",e),window.addEventListener("local-storage",e),function(){window.removeEventListener("storage",e),window.removeEventListener("local-storage",e)}}),[]),[s,function(t){"undefined"==typeof window&&console.warn('Tried setting localStorage key "'.concat(e,'" even though environment is not a client'));try{var r=t instanceof Function?t(s):t;window.localStorage.setItem(e,JSON.stringify(r)),i(r),window.dispatchEvent(new Event("local-storage"))}catch(n){console.warn("Error setting localStorage key \u201c".concat(e,"\u201d:"),n)}}]}("crypto",[]),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(te),s=Object(h.a)(c,2),i=s[0],x=s[1],j=Object(n.useState)({isShowing:!1,mode:"import"}),u=Object(h.a)(j,2),b=u[0],p=u[1],f=Object(n.useCallback)(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0})})),e.next=3,m();case 3:t=e.sent,x((function(e){return{isLoading:!1,currentEthRate:t.exchangeRate,earningsInfo:t,period:e.period,cryptoPair:new v(t.exchangeRate,t.expectedReward24H,100,e.period.value)}}));case 5:case"end":return e.stop()}}),e)}))),[]),g=function(){p({isShowing:!1,mode:b.mode})};return Object(n.useEffect)((function(){f()}),[f]),Object(N.jsxs)(re.Provider,{value:{dashboardState:i,userData:r,setUserData:a},children:[Object(N.jsx)(J,{onClickLastUpdateLabel:f,onClickImportButton:function(){p({isShowing:!0,mode:"import"})},onClickExportButton:function(){p({isShowing:!0,mode:"export"})}}),Object(N.jsxs)("div",{className:"block lg:flex max-w-7xl space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 justify-around mx-auto",children:[Object(N.jsx)(M,{onClickSwitchPeriodField:function(){var e=O.findIndex((function(e){return e.name===i.period.name})),t=e>=O.length-1?0:e+1;x((function(e){var r;return Object(l.a)(Object(l.a)({},e),{},{period:O[t],cryptoPair:new v(e.currentEthRate,null===(r=e.earningsInfo)||void 0===r?void 0:r.expectedReward24H,100,O[t].value)})}))}}),Object(N.jsx)(U,{})]}),Object(N.jsx)(ee,{}),Object(N.jsxs)(R,{isShowing:b.isShowing,children:["export"===b.mode&&Object(N.jsx)(G,{onClickCloseModalButton:g}),"import"===b.mode&&Object(N.jsx)(K,{onClickCloseModalButton:g})]})]})},ae=function(e){var t=e.reward,r=new v(t.expectedReward24H,t.exchangeRate,100);return Object(N.jsxs)(T.a.Child,{as:"tr",className:"bg-gray-700 hover:bg-gray-600 transition-colors odd:bg-gray-800",enter:"transition-opacity ease-linear duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:[Object(N.jsxs)("td",{className:"border border-gray-300 p-2",children:["$",t.exchangeRate]}),Object(N.jsxs)("td",{className:"border border-gray-300 p-2",children:[t.expectedReward24H.toFixed(5)," ETH"]}),Object(N.jsxs)("td",{className:"border border-gray-300 p-2",children:["$",r.USDTEarning]}),Object(N.jsx)("td",{className:"border border-gray-300 p-2",title:Y()(t.timestamp).format("HH:mm DD/MM/YYYY"),children:Y()(t.timestamp).format("DD/MM/YYYY")})]})},ce=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!0),s=Object(h.a)(c,2),i=s[0],l=s[1],x=Object(n.useState)(10),j=Object(h.a)(x,2),m=j[0],b=j[1],p=Object(n.useState)(),v=Object(h.a)(p,2),f=v[0],O=v[1],g=Object(n.useCallback)(Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,u(m);case 3:e.t1=e.sent,(0,e.t0)(e.t1),a(!1);case 6:case"end":return e.stop()}}),e)}))),[m]);Object(n.useEffect)((function(){g()}),[g]);return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h1",{className:"flex justify-center items-center text-4xl font-bold group cursor-pointer",onClick:function(){return l(!i)},role:"button",children:["Rewards History",Object(N.jsx)("div",{className:"text-gray-600 group-hover:text-gray-300 transition-colors ml-2",children:i?Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(N.jsx)("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),Object(N.jsx)("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(N.jsx)("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),Object(N.jsx)("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]})})]}),i&&Object(N.jsxs)("p",{className:"text-center text-gray-300",children:["per ",100," MH/s"]}),Object(N.jsx)(T.a,{show:i,appear:!0,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r?Object(N.jsx)("div",{className:"text-2xl mt-6",children:Object(N.jsx)(S,{})}):f&&Object(N.jsxs)("div",{children:[Object(N.jsxs)("table",{className:"table-auto text-xs md:text-xl w-full max-w-7xl my-4 mx-auto overflow-x-auto",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:" bg-gray-800",children:[Object(N.jsx)("th",{className:"px-1 sm:px-2 md:px-12 py-2",children:"ETH/USDT Rate"}),Object(N.jsx)("th",{className:"px-1 sm:px-2 md:px-12 py-2",children:"ETH Expected Reward"}),Object(N.jsx)("th",{className:"px-1 sm:px-2 md:px-12 py-2",children:"USD Expected Reward"}),Object(N.jsx)("th",{className:"px-1 sm:px-2 md:px-12 py-2",children:"Date"})]})}),Object(N.jsx)("tbody",{children:f.map((function(e,t){return Object(N.jsx)(ae,{reward:e},e.timestamp)}))})]}),m<=200&&Object(N.jsx)("div",{className:"flex justify-center",children:Object(N.jsx)("button",{className:"text-center rounded py-2 px-4 hover:bg-gray-600 transition-colors",onClick:function(){m<=200&&b(m+10)},children:"Show More"})})]})})]})},se=function(){return Object(N.jsx)("div",{className:"bg-gray-800 min-h-screen",children:Object(N.jsxs)("div",{className:"md:container mx-auto p-4 top-8 md:top-20",children:[Object(N.jsx)(ne,{}),Object(N.jsx)(ce,{})]})})};r(58);s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(se,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4846f5a7.chunk.js.map