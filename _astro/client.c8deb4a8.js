import{e as l,f as d}from"./runtime-dom.esm-bundler.03bfd58d.js";import{a3 as p,v as n}from"./runtime-core.esm-bundler.6b7ed402.js";const o=()=>{},m=p({props:{value:String,name:String},setup({name:a,value:t}){return t?()=>n("astro-slot",{name:a,innerHTML:t}):()=>null}}),A=a=>async(t,s,c,{client:u})=>{if(delete s.class,!a.hasAttribute("ssr"))return;const i=t.name?`${t.name} Host`:void 0,r={};for(const[e,f]of Object.entries(c))r[e]=()=>n(m,{value:f,name:e==="default"?void 0:e});if(u==="only"){const e=l({name:i,render:()=>n(t,s,r)});await o(),e.mount(a,!1)}else{const e=d({name:i,render:()=>n(t,s,r)});await o(),e.mount(a,!0)}};export{A as default};