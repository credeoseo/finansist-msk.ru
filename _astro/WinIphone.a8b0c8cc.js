import{B as h}from"./Button.d968a06d.js";import{_ as u}from"./Icon.6471b241.js";import{a as i,k as a,o as r,c as f,b as t,t as n,h as g}from"./runtime-core.esm-bundler.6b7ed402.js";const v={__name:"WinIphone",setup(p,{expose:d}){d();const s=new Date;s.setSeconds(s.getSeconds()+172800);const e=i(new Date),o=a(()=>{const _=s-e.value;return Math.floor(_/1e3)}),l=a(()=>Math.floor(o.value/60/60/24)),m=a(()=>Math.floor(o.value/60/60%24)),x=a(()=>Math.floor(o.value/60%60));r(()=>{setInterval(()=>{e.value=new Date},1e3)});const c={startTime:s,currentTime:e,timeLeftInSeconds:o,days:l,hours:m,minutes:x,Button:h,ref:i,computed:a,onMounted:r};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},b={class:"indent"},y={class:"px-3 md:px-9 lg:px-[52px] xl:px-20 sm:container mx-auto"},w={class:"bg-cod-gray relative md:pt-40 overflow-hidden px-3 py-8 lg:px-[78px] xl:px-[220px] rounded-3xl"},k={class:"grid gap-[200px] md:rounded-[28px] md:py-5 md:px-7 md:backdrop-blur-2xl md:bg-gradient-to-r md:from-cod-gray/60 md:to-mine-shaft-1/60 md:gap-6 md:grid-cols-2 relative z-10"},M=t("div",{class:"text-center md:text-left grid gap-2 relative z-10 -mx-1 md:mx-0 text-white"},[t("span",{class:"font-extrabold text-t-2.5xl md:text-t-3xl leading-9 md:tracking-t-2"},"Выиграйте Iphone 14 Pro Max"),t("span",{class:"opacity-50"},"Оставьте заявку до окончания акции и вы автоматически станете участником нашего розыгрыша!")],-1),S={class:"grid gap-2"},B={class:"grid gap-3"},I=t("a",{href:"#form",class:"shadow-button flex justify-center bg-gradient-to-b h-max from-buckthorn to-saffron w-full p-5 rounded-2.5xl text-white font-bold text-t-xl"},"Оставить заявку",-1),z={class:"mt-3 ml-3 md:mt-0 md:mx-auto flex space-x-3 text-white"},D=t("span",{class:"font-medium opacity-60"},"До конца акции",-1),W={class:"flex space-x-0.5 font-medium"},j=t("span",{class:"opacity-30"},":",-1),P=t("span",{class:"opacity-30"},":",-1),T=t("span",{class:"tracking-t-3 block mt-2 text-white/50 text-[10px] leading-[14px] text-center"},"Результат и информация о выигрыше придет победителю на WhatsApp. Выбор победителя состоится 28.02.2023. Победитель прошлого розыгрыша — Иван Петров.",-1),A=t("img",{class:"absolute inset-0 h-[80%] md:h-full w-full z-[5]",src:"/images/ellipse-1.png",alt:""},null,-1),E=t("img",{class:"absolute bottom-1/4 left-1/2 -translate-x-1/2 max-h-[224px] md:max-h-[none] md:-rotate-[26.36deg] md:-bottom-5 md:w-[580px] md:h-[450px] z-[8]",src:"/images/iphones.png",alt:""},null,-1);function L(p,d,s,e,o,l){return g(),f("section",b,[t("div",y,[t("div",w,[t("div",k,[M,t("div",S,[t("div",B,[I,t("div",z,[D,t("div",W,[t("span",null,n(e.days)+" д",1),j,t("span",null,n(e.hours)+" ч ",1),P,t("span",null,n(e.minutes)+" м",1)])])]),T])]),A,E])])])}const $=u(v,[["render",L]]);export{$ as default};
