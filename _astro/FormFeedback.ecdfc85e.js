import{d as y,T as S,w as V}from"./runtime-dom.esm-bundler.03bfd58d.js";import{a as h,s as _,I as B}from"./Input.6ad3a006.js";import{_ as w,I as v}from"./Icon.6471b241.js";import{B as C}from"./Button.d968a06d.js";import{k as x,h as d,c as m,l as I,b as t,e as i,n as u,t as T,a as f,r as b,o as k,w as g,f as j,i as n}from"./runtime-core.esm-bundler.6b7ed402.js";/* empty css                       */const F={__name:"Checkbox",props:{title:{type:String,default:()=>""},dark:{type:Boolean,default:()=>!1},small:{type:Boolean,default:()=>!1},id:{type:String,default:()=>""},value:{type:[Boolean,Object,Number,String]},modelValue:{type:[Boolean,Array],default:()=>null}},emits:["update:modelValue","click"],setup(c,{expose:a,emit:o}){a();const e=c,s=x({get(){return e.modelValue},set(l){o("update:modelValue",l)}}),r={props:e,emit:o,model:s,Icon:v,computed:x};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},M={class:"flex items-center space-x-1.5"},N=["id","value"],O={class:"text-white text-sm"};function z(c,a,o,e,s,r){return d(),m("label",M,[I(t("input",{onClick:a[0]||(a[0]=l=>e.emit("click")),id:o.id,value:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model=l),type:"checkbox",class:"sr-only peer"},null,8,N),[[y,e.model]]),t("span",{class:u(["block text-transparent cursor-pointer ring-1 rounded-sm transition-all",{"peer-checked:text-white ring-emerald peer-checked:bg-emerald":!o.dark},{"p-2":!o.small},{"peer-checked:text-credeo ring-credeo-gray peer-checked:ring-credeo-black peer-checked:bg-credeo-black":o.dark},{"p-1":o.small}])},[i(e.Icon,{name:"checkmark",size:"w-2 h-2"})],2),t("span",O,T(o.title),1)])}const A=w(F,[["render",z]]),E={__name:"FormFeedback",setup(c,{expose:a}){a();const o=f(!1),e=f(!1),s=b({phone:"+7"}),r=async()=>{e.value=await _(s),setTimeout(()=>{e.value=!1},5e3),Object.keys(s).forEach(p=>{delete s[p]}),s.phone="+7"};k(async()=>{const p=()=>{o.value=scrollY+window.innerHeight>document.body.scrollHeight-100};window.addEventListener("scroll",h(p,0))});const l={isShow:o,sended:e,feedback:s,send:r,ref:f,onMounted:k,reactive:b,watch:j,get debounce(){return h},get sendToApi(){return _},Input:B,Icon:v,Button:C,Checkbox:A};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},U={class:"fixed z-50 w-full top-full"},D={class:"relative px-4 pt-8 md:px-9 lg:px-[52px] xl:px-20 pb-10 sm:pb-8 sm:container mx-auto"},H={class:"grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr,0.85fr] items-center"},P=t("div",{class:"max-w-xl text-white"},[t("p",{class:"mb-3 text-2xl"},"Нужно быстрее?"),t("p",null,"Оставьте сотовый номер телефона, чтобы получить бесплатную консультацию и персональное предложение через 5 минут!")],-1),q=["onSubmit"],L=t("span",{class:"flex text-xs text-white lg:col-span-2 before:min-w-[20px] before:w-5 before:mr-2 icon-rkn text-left"},[t("span",null,[n("Персональные данные защищены "),t("br"),t("a",{rel:"nofollow, noopener",href:"https://pd.rkn.gov.ru/operators-registry/operators-list/?id=77-22-022120",target:"_blank"},"Официальный оператор по обработке Персональных данных")])],-1),Y=t("div",{class:"flex lg:col-span-2"},[t("p",{class:"text-white text-2xs"},[n("Нажимая на кнопку «Отправить», я соглашаюсь на обработку персональных данных и согласен с "),t("a",{class:"underline",target:"_blank",href:"/privacy"},"политикой конфиденциальности"),n(" и "),t("a",{class:"underline",target:"_blank",href:"/license"},"лицензией")])],-1),G={key:1,class:"text-center text-white text-lg"},J=t("br",null,null,-1),K=t("div",{class:"flex ml-2"},[n(" Быстрая заявка"),t("span",{class:"hidden ml-1 mr-2 md:block"}," на консультацию")],-1);function Q(c,a,o,e,s,r){return d(),m("div",U,[t("div",{class:u(["transition-transform bg-emerald",{"-translate-y-full":e.isShow}])},[t("div",D,[t("div",H,[P,i(S,{"enter-active-class":"animate-opacity-enter-active","leave-active-class":"animate-opacity-leave-active",mode:"out-in"},{default:g(()=>[e.sended?(d(),m("p",G,[n("Заявка успешно принята! "),J,n(" Наш менеджер свяжется с вами в ближайшее время")])):(d(),m("form",{key:0,onSubmit:V(e.send,["prevent"]),class:"active-form grid gap-5 md:h-full lg:grid-cols-[1fr,0.58fr]"},[i(e.Input,{placeholder:"Номер телефона",autocomplete:"",white:"",type:"tel",id:"phone",name:"phone",modelValue:e.feedback.phone,"onUpdate:modelValue":a[0]||(a[0]=l=>e.feedback.phone=l),required:""},null,8,["modelValue"]),i(e.Button,{class:"!p-3",type:"submit",light:""},{default:g(()=>[n("Отправить")]),_:1}),i(e.Checkbox,{title:"Я являюсь гражданином РФ",dark:"",small:"",modelValue:e.feedback.russian_national,"onUpdate:modelValue":a[1]||(a[1]=l=>e.feedback.russian_national=l)},null,8,["modelValue"]),L,Y],40,q))]),_:1})]),t("div",{class:u(["absolute transition-transform -top-11 h-11 italic text-white text-base font-normal py-1 px-3.5 w-max flex items-center rounded-full icon-orange-arrow bg-gradient-to-br from-spectra to-gable-green",{"translate-y-3.5":e.isShow}]),onClick:a[2]||(a[2]=l=>e.isShow=!e.isShow),onMouseenter:a[3]||(a[3]=l=>e.isShow=!0)},[K,i(e.Icon,{name:"close",class:u(["transition-all text-white cursor-pointer",{"w-6":e.isShow,"w-0":!e.isShow}])},null,8,["class"])],34)])],2)])}const te=w(E,[["render",Q]]);export{te as default};