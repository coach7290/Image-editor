(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,a,t){e.exports=t(43)},22:function(e,a,t){},24:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},25:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),c=t.n(i),l=(t(22),t(5)),o=t(4),s=t.n(o),u=t(16),m=t(2),p=(t(24),t(25),function(e){var a=e.min,t=e.max,n=e.value,i=e.handleChange;return r.a.createElement("div",{className:"slider-container"},r.a.createElement("input",{min:a,max:t,value:n,onChange:i,type:"range",className:"slider"}))}),d=function(e){var a=e.name,t=e.active,n=e.handleClick;return r.a.createElement("button",{onClick:n,className:"sidebar-item ".concat(t?"active":"")},a)},f=function(e){var a=e.percentage;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%"),transition:"width 1s ease-in-out"}},a,"%"))},v=t(3),g=t.n(v),h=function(e){var a=e.onSubmit,t=(e.file,e.uploadPercentage),i=(e.message,e.uploadedFile,e.onChange),c=e.filename;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:i}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},c)),r.a.createElement(f,{percentage:t}),r.a.createElement("input",{type:"submit",value:"Upload",className:"custom-file-label"})))},b=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var E=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(b),o=Object(m.a)(c,2),f=o[0],v=o[1],E=f[t],y=Object(n.useState)({}),j=Object(m.a)(y,2),x=j[0],O=j[1],w=Object(n.useState)(""),N=Object(m.a)(w,2),S=N[0],C=N[1],k=Object(n.useState)(0),F=Object(m.a)(k,2),P=F[0],B=F[1],I=Object(n.useState)(""),T=Object(m.a)(I,2),U=T[0],D=T[1],J=Object(n.useState)("Choose File"),M=Object(m.a)(J,2),W=M[0],G=M[1],H=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(t=new FormData).append("file",U),e.prev=3,e.next=6,g.a.post("/upload",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){B(parseInt(Math.round(100*e.loaded/e.total))),setTimeout((function(){return B(0)}),1e4)}});case 6:n=e.sent,r=n.data,i=r.fileName,c=r.filePath,O({fileName:i,filePath:c}),C("File Uploaded"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),500===e.t0.response.status?C("There was a problem with the server"):C(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"file-upload"},r.a.createElement(h,{onSubmit:H,file:U,uploadPercentage:P,message:S,filename:W,uploadedFile:x,onChange:function(e){D(e.target.files[0]),G(e.target.files[0].name)}})),r.a.createElement("div",{style:{filter:f.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join(" "),backgroundImage:"url(".concat(x.filePath,")")},className:"main-image"}),r.a.createElement("div",{className:"sidebar"},f.map((function(e,a){return r.a.createElement(d,{key:a,name:e.name,active:a===t,handleClick:function(){return i(a)}})}))),r.a.createElement(p,{min:E.range.min,max:E.range.max,value:E.value,handleChange:function(e){var a=e.target;v((function(e){return e.map((function(e,n){return n!==t?e:Object(l.a)(Object(l.a)({},e),{},{value:a.value})}))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.3c0b2b41.chunk.js.map