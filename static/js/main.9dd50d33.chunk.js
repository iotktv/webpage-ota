(this["webpackJsonptet-app"]=this["webpackJsonptet-app"]||[]).push([[0],{12:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o,a,r,c,i=n(0),u=n.n(i),l=n(6),s=n.n(l),f=(n(12),n(1)),d=n.n(f),h=(n(23),null),g=null,m=null,v=null,w="N/A",p="N/A",b="N/A";function E(){navigator.bluetooth.requestDevice({filters:[{services:["d804b643-6ce7-4e81-9f8a-ce0f699085eb"]}],optionalServices:["c8659210-af91-4ad3-a995-a58d6fd26145"]}).then((function(e){return e.gatt.connect()})).then((function(e){return e.getPrimaryService("c8659210-af91-4ad3-a995-a58d6fd26145")})).then((function(e){h=e})).then((function(e){return e})).then((function(e){return function(){if(!h)return;return h.getCharacteristic("c8659212-af91-4ad3-a995-a58d6fd26145").then((function(e){return e.readValue()})).then((function(e){w="v"+e.getUint8(0)+"."+e.getUint8(1),p="v"+e.getUint8(2)+"."+e.getUint8(3)+"."+e.getUint8(4),document.getElementById("hw_version").innerHTML="Hardware: "+w,document.getElementById("sw_version").innerHTML="Software: "+p})).then((function(e){return fetch("https://raw.githubusercontent.com/iotktv/digital-scale/master/build/version.json")})).then((function(e){return e.json()})).then((function(e){if(b===p);else{var t=0;b=e.firmware[t].software;e:for(;void 0!==b;){for(var n="N/A",i=0;void 0!==n;)if((n=e.firmware[t].hardware[i++])===w){(b=e.firmware[t].software)!==p&&(console.log(b),d.a.create({content:"Version "+p+" is out of date. Update to "+b+"?",buttons:{left:[{text:"Yes",action:function(){fetch("https://raw.githubusercontent.com/iotktv/digital-scale/"+b+"/build/koltivabaru.ino.bin").then((function(e){return e.arrayBuffer()})).then((function(e){return d.a.close(),v=e,function(){if(!h)return void console.log("No esp32 Service");o=v.byteLength,a=o,r=0,c=0,h.getCharacteristic("c8659211-af91-4ad3-a995-a58d6fd26145").then((function(e){return g=e,e.startNotifications().then((function(e){g.addEventListener("characteristicvaluechanged",N)}))})).catch((function(e){console.log(e)})),N()}()})).catch((function(e){console.warn("Something went wrong.",e)}))}}],right:[{text:"No",action:function(){d.a.close()}}]}}));break e}t++}}})).catch((function(e){console.log(e)}))}()})).catch((function(e){console.log(e)}))}function N(){a>0&&(r=a>=512?512:a,m=v.slice(c,c+r),c+=r,a-=r,console.log("remaining: "+a),console.log("OK sampai sini"),h.getCharacteristic("c8659211-af91-4ad3-a995-a58d6fd26145").then((function(e){return function e(t,n){return t.writeValue(n).catch((function(o){return e(t,n)}))}(e,m)})).then((function(e){return document.getElementById("completion").innerHTML=(c/o*100).toPrecision(3)+"%"})).catch((function(e){console.log(e)})))}var k=function(){return u.a.createElement("div",{className:"App",id:"top"},u.a.createElement("header",{className:"App-header",id:"mid"},u.a.createElement(d.a,null),u.a.createElement("p",{id:"hw_version"},"Hardware: Not Connected"),u.a.createElement("p",{id:"sw_version"},"Software: Not Connected"),u.a.createElement("p",{id:"completion"}),u.a.createElement("button",{id:"connect",onClick:E},"Connect to Bluetooth")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(24)}},[[7,1,2]]]);
//# sourceMappingURL=main.9dd50d33.chunk.js.map