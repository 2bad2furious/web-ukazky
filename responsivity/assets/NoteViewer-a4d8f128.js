import{d as a,i as c,a as u,o as i,b as s,ah as l,ax as m,_ as k}from"./_plugin-vue_export-helper-bbddf827.js";const d=["innerHTML"],f=["textContent"],p=a({__name:"NoteViewer",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1}},emits:["click"],setup(e){const n=e;return c(u),(o,t)=>e.noteHtml?(i(),s("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=r=>o.$emit("click")),innerHTML:e.noteHtml},null,10,d)):(i(),s("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=r=>o.$emit("click")),textContent:m(e.note)},null,10,f))}}),w=k(p,[["__file","/home/runner/work/web-ukazky/web-ukazky/node_modules/@slidev/client/internals/NoteViewer.vue"]]);export{w as N};
