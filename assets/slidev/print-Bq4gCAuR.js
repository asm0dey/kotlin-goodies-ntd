function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-CfmZXd9B.js","assets/modules/vue-BWuIGUTA.js","assets/index-DX2-AcvK.js","assets/modules/shiki-CMcymDUP.js","assets/modules/shiki-BSchMNmt.css","assets/index-GBHufPtQ.css","assets/slidev/bottom-aS5xALTY.js","assets/bottom-7-WH_FOa.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,z as i,N as F,Z as $,K as V,o as s,b as d,l as u,B as e,i as B,c as m,g as S,h as q,F as p,_ as L,e as R,f as j,D as A}from"../modules/vue-BWuIGUTA.js";import{G as D,g as G,S as O,a as T,w as W}from"./bottom-aS5xALTY.js";import{s as H,a as h,_ as I,c as k,i as K,b as g,d as b,u as x,e as z,f,p as M,g as Z}from"../index-DX2-AcvK.js";import{P as J}from"./PrintStyle-C0Gn_2KZ.js";import"../modules/shiki-CMcymDUP.js";const Q=["id"],U=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(c){const{nav:n}=c,t=i(()=>n.currentSlideRoute.value),o=i(()=>({height:`${H.value}px`,width:`${h.value}px`})),l=F();I(()=>import("./DrawingPreview-CfmZXd9B.js").then(r=>r.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(r=>l.value=r.default);const a=i(()=>`${t.value.no.toString().padStart(3,"0")}-${(n.clicks.value+1).toString().padStart(2,"0")}`);return $(K,V({nav:n,configs:k,themeConfigs:i(()=>k.themeConfig)})),(r,w)=>(s(),d("div",{id:a.value,class:"print-slide-container",style:q(o.value)},[u(e(D)),u(O,{is:t.value.component,"clicks-context":r.nav.clicksContext.value,class:B(e(G)(t.value)),route:t.value},null,8,["is","clicks-context","class","route"]),l.value?(s(),m(e(l),{key:0,page:t.value.no},null,8,["page"])):S("v-if",!0),u(e(T))],12,Q))}}),N=g(U,[["__file","/home/runner/work/kotlin-goodies-ntd/kotlin-goodies-ntd/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.23_vite@5.1.5/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),X=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(c){const{route:n}=c,t=b(n,0);return(o,l)=>(s(),d(p,null,[u(N,{"clicks-context":e(t),nav:e(x)(o.route,e(t))},null,8,["clicks-context","nav"]),e(t).disabled?S("v-if",!0):(s(!0),d(p,{key:0},L(e(t).total,a=>(s(),m(N,{key:a,nav:e(x)(o.route,e(b)(o.route,a))},null,8,["nav"]))),128))],64))}}),Y=g(X,[["__file","/home/runner/work/kotlin-goodies-ntd/kotlin-goodies-ntd/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.23_vite@5.1.5/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ee={id:"print-content"},te=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const n=c,{slides:t,currentRoute:o}=z(),l=i(()=>n.width),a=i(()=>n.width/f.value),r=i(()=>l.value/a.value),w=i(()=>r.value<f.value?l.value/h.value:a.value*f.value/h.value);let v=t.value;o.value.query.range&&(v=M(v.length,o.value.query.range).map(C=>v[C-1]));const E=i(()=>({"select-none":!k.selectable}));return $(Z,w),(y,C)=>(s(),d("div",{id:"print-container",class:B(E.value)},[R("div",ee,[(s(!0),d(p,null,L(e(v),P=>(s(),m(Y,{key:P.no,route:P},null,8,["route"]))),128))]),j(y.$slots,"controls")],2))}}),ne=g(te,[["__file","/home/runner/work/kotlin-goodies-ntd/kotlin-goodies-ntd/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.23_vite@5.1.5/node_modules/@slidev/client/internals/PrintContainer.vue"]]),se={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},oe=_({__name:"print",setup(c){const{isPrintMode:n}=z();return A(()=>{n?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,o)=>(s(),d(p,null,[e(n)?(s(),m(J,{key:0})):S("v-if",!0),R("div",se,[u(ne,{class:"w-full h-full",style:q({background:"var(--slidev-slide-container-background, black)"}),width:e(W).width.value},null,8,["style","width"])])],64))}}),de=g(oe,[["__file","/home/runner/work/kotlin-goodies-ntd/kotlin-goodies-ntd/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.23_vite@5.1.5/node_modules/@slidev/client/pages/print.vue"]]);export{de as default};
