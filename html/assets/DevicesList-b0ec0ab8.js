import{o as r,b as v,ad as f,d as y,i as h,a as k,g as c,e as p,k as s,bi as l,ay as o,bl as n,av as b,ap as x,_ as C}from"./_plugin-vue_export-helper-aa74599a.js";import{c as L,d as M,s as g,e as w,f as B,m as i}from"./recording-8d89cdf2.js";import{S as m}from"./SelectList-afe67131.js";const D={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I=f("path",{fill:"currentColor",d:"M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2ZM4 8v16h17v-6a1 1 0 0 1 1.58-.81L28 21.06V10.94l-5.42 3.87A1 1 0 0 1 21 14V8Z"},null,-1),N=[I];function T(_,u){return r(),v("svg",D,N)}const E={name:"carbon-video",render:T},U={class:"text-sm"},S=y({__name:"DevicesList",setup(_){h(k);const u=c(()=>[{value:"none",display:"None"},...L.value.map(e=>({value:e.deviceId,display:e.label}))]),V=c(()=>[{value:"none",display:"None"},...M.value.map(e=>({value:e.deviceId,display:e.label}))]),d=g.map(e=>({value:e,display:w[e].toUpperCase()}));return B(),(e,a)=>(r(),v("div",U,[p(m,{modelValue:s(l),"onUpdate:modelValue":a[0]||(a[0]=t=>o(l)?l.value=t:null),title:"Camera",items:s(u)},null,8,["modelValue","items"]),p(m,{modelValue:s(n),"onUpdate:modelValue":a[1]||(a[1]=t=>o(n)?n.value=t:null),title:"Microphone",items:s(V)},null,8,["modelValue","items"]),s(d).length?(r(),b(m,{key:0,modelValue:s(i),"onUpdate:modelValue":a[2]||(a[2]=t=>o(i)?i.value=t:null),title:"mimeType",items:s(d)},null,8,["modelValue","items"])):x("v-if",!0)]))}}),Z=C(S,[["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/DevicesList.vue"]]);export{Z as D,E as _};
