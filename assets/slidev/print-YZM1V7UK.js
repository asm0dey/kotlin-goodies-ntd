import{d as p,$ as u,z as h,b as a,e as t,x as s,B as r,F as v,_ as f,o as n,a0 as g,l as x,g as b}from"../modules/vue-BWuIGUTA.js";import{e as k,h as N,c as d,b as y}from"../index-DX2-AcvK.js";import{N as w}from"./NoteDisplay-DEJ6CTju.js";import"../modules/shiki-CMcymDUP.js";const B={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},z={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=p({__name:"print",setup($){const{slides:m,total:_}=k();u(`
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
`),N({title:`Notes - ${d.title}`});const i=h(()=>m.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",B,[t("div",L,[t("div",T,[t("h1",V,s(r(d).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(v,null,f(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",z,s(e==null?void 0:e.no)+"/"+s(r(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),q=y(M,[["__file","/home/runner/work/kotlin-goodies-ntd/kotlin-goodies-ntd/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.23_vite@5.1.5/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{q as default};
