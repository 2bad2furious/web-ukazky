import{n as d,l as S,ai as e,A as k,as as A,t as h,f as M,h as T,j as B,at as y,au as v,ar as P,y as t,_ as H,av as j,aw as D,c as C,K as I,q,ax as F,ay as L,w as R,m as u,aj as E,al as w,az as $,aA as z,ap as O,af as G,aB as x,aC as K,F as U,d as N,aD as W,aE as Z,aF as J,aG as Q,aH as X,aI as Y,aq as V,aJ as ee,aK as te,aL as se,b as oe,an as ae,aM as ne,aN as le,aO as re,aP as ie}from"./nav-cc10a196.js";import{N as ce}from"./NoteViewer-cdbcd4f1.js";import ue from"./DrawingControls-bf061b77.js";import{u as de}from"./index-94a8ca11.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(a,l){return d(),S("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),we=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[ge,we];function ke(a,l){return d(),S("svg",fe,xe)}const ye={name:"carbon-time",render:ke},Se="/web-ukazky/js/assets/logo-title-horizontal-96c3c915.png";function be(){const a=k(Date.now()),l=A({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){a.value=l.value}return{timer:_,resetTimer:m}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;T(B);const _=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.notesHTML});return(s,n)=>(d(),v(ce,{class:P(l.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),$e=H(Ce,[["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),ze={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Me=f(()=>e("img",{src:Se,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Te=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Ae={class:"grid-section note overflow-auto"},je={class:"grid-section bottom"},De={class:"progress-bar"},Ie=M({__name:"Presenter",setup(a){T(B);const l=k();j(),D(l);const _=C.titleTemplate.replace("%s",C.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=be(),n=k([]),o=h(()=>N.value<W.value?{route:y.value,clicks:N.value+1}:Z.value?{route:J.value,clicks:0}:null);return I(()=>{const b=l.value.querySelector("#slide-content"),i=q(F()),g=L();R(()=>{if(!g.value||X.value||!Y.value)return;const c=b.getBoundingClientRect(),r=(i.x-c.left)/c.width*100,p=(i.y-c.top)/c.height*100;if(!(r<0||r>100||p<0||p>100))return{x:r,y:p}},c=>{Q.cursor=c})}),(b,i)=>{const g=ye,c=he;return d(),S(U,null,[e("div",ze,[e("div",Ne,[e("div",Ve,[Me,Te,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...r)=>t(s)&&t(s)(...r))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,E(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:w(t(V))},[u(z,{key:"main",class:"h-full w-full"},{default:$(()=>[u(ee,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:w(t(V))},[t(o)?(d(),v(z,{key:"next",class:"h-full w-full"},{default:$(()=>{var r;return[u(t(se),{is:(r=t(o).route)==null?void 0:r.component,"clicks-elements":n.value,"onUpdate:clicks-elements":i[1]||(i[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:P(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):O("v-if",!0),He],4),e("div",Ae,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",je,[u(re,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:w({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(ie),u(K,{modelValue:t(x),"onUpdate:modelValue":i[2]||(i[2]=r=>G(x)?x.value=r:null)},null,8,["modelValue"])],64)}}});const Ee=H(Ie,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Ee as default};