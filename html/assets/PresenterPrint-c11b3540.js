import{d,i as _,a as p,ba as u,c as m,bb as h,b as r,ad as t,ax as a,k as s,F as f,as as g,ag as v,o as n,az as b,e as x,ap as k,au as y,_ as w}from"./_plugin-vue_export-helper-aa74599a.js";import{s as N,t as P}from"./nav-a2e13cc3.js";import{N as V}from"./NoteViewer-127b2f69.js";import{u as z}from"./index-4c9f5a3c.js";import"./Modal-ffc8c339.js";import"./SelectList-afe67131.js";import"./MenuButton-86999019.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(A){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),z({title:`Notes - ${m.title}`});const l=h(()=>N.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,i)=>(n(),r("div",{id:"page-root",style:v(s(y))},[t("div",S,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",j,a(new Date().toLocaleString()),1)]),(n(!0),r(f,null,g(s(l),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(P)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),x(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(n(),r("hr",F)):k("v-if",!0)]))),128))])],4))}}),J=w(M,[["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{J as default};
