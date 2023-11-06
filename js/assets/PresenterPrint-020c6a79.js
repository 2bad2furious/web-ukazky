import{f as _,h as d,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as k,m as b,ap as w,aq as N,_ as P}from"./nav-cc10a196.js";import{N as V}from"./NoteViewer-cdbcd4f1.js";import{u as j}from"./index-94a8ca11.js";const S={class:"m-4"},z={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(h),p(`
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
`),j({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:v(s(N))},[t("div",S,[t("div",z,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),k(" "+o(e==null?void 0:e.title)+" ",1),D])]),b(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
