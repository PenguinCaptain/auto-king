import{bg as y,r as v,o as c,b as r,bt as k,bu as V,l as m,Z as b,a3 as t,bv as f,bw as x,bx as I,K as S,br as C,N as p,bk as w,bi as j,bq as T,bn as O,bo as B}from"./index-SoqotssI.js";import{m as W,a as $,s as R,i as U}from"./inspection-DmoT0QCA.js";const D=["data-bs-theme","onClick"],N=["src","alt"],q={class:"card-body"},A={class:"card-title"},M={key:0,class:"card-text"},L=["value","id"],z={__name:"RadioCards",props:{options:Array,modelValue:String},emits:["update:modelValue"],setup(n,{emit:d}){const u=n,o=d,s=v(u.modelValue),_=a=>{s.value=a,o("update:modelValue",a)};return(a,i)=>(c(!0),r(C,null,k(n.options,(e,l)=>(c(),r("div",{key:l,class:V(["card",{active:m(s)===e.value}]),"data-bs-theme":m(s)===e.value?"light":"dark",onClick:h=>_(e.value)},[e.img?(c(),r("img",{key:0,src:e.img,class:"card-img-top",alt:e.label},null,8,N)):b("",!0),t("div",q,[t("h5",A,f(e.label),1),e.text?(c(),r("p",M,f(e.text),1)):b("",!0),x(t("input",{type:"radio",value:e.value,"onUpdate:modelValue":i[0]||(i[0]=h=>S(s)?s.value=h:null),id:e.value,class:"d-none"},null,8,L),[[I,m(s)]])])],10,D))),128))}},E=y(z,[["__scopeId","data-v-3f541efc"]]),F="/autoking/assets/car-B58aPHWx.jpg",G="/autoking/assets/truck-Cuyp2OI4.jpg",H="/autoking/assets/4WD-qVIwWcCI.jpg",K="/autoking/assets/SUV-LUTR2Wof.jpg",g=n=>(O("data-v-5d03af29"),n=n(),B(),n),P={class:"container-xl py-3 px-4"},Z={class:"panel"},J=g(()=>t("h1",{class:"fw-bold display-3 mb-3 mb-md-5"},"Our Services",-1)),Q=g(()=>t("h3",{class:"fw-semibold display-6 mb-3"},"By Service Type",-1)),X={class:"cards-container mb-3 mb-md-5 justify-content-center justify-content-md-start"},Y=g(()=>t("h3",{class:"fw-semibold display-6 mb-3"},"By Vehicle Type",-1)),ee={class:"cards-container justify-content-center justify-content-md-start mb-3 mb-md-5"},se={class:"d-grid mb-5 d-md-flex justify-content-md-start"},te={__name:"Services",setup(n){const d=[{label:"Car Maintainance",value:"maintainance",img:W,text:"Our comprehensive services include oil changes, filter replacements, tire rotations, and brake inspections, ensuring your vehicle's top performance."},{label:"Mechanical Repairs",value:"repair",img:$,text:"Trust us for quick, safe mechanical repairs, ranging from minor leaks to major engine component replacements, with expert diagnostics."},{label:"Car Servicing",value:"servicing",img:R,text:"We provide thorough car check-ups, covering all components, fluids, and systems, ensuring your vehicle's smooth, safe operation for confident driving."},{label:"Security Inspection",value:"inspection",img:U,text:"Our AIS conducts roadworthy inspections for light vehicles and hire cars, checking brakes, steering, suspension, tires, and lights for Australian legal compliance."}],u=[{label:"General Car",value:"car",img:F},{label:"Truck",value:"truck",img:G},{label:"4WD",value:"4WD",img:H},{label:"SUV",value:"SUV",img:K}],o=v(""),s=v("");return(_,a)=>{const i=E,e=j("router-link");return c(),r("div",P,[t("div",Z,[J,Q,t("div",X,[p(i,{options:d,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l)},null,8,["modelValue"])]),Y,t("div",ee,[p(i,{options:u,modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l)},null,8,["modelValue"])]),t("div",se,[p(e,{to:{name:"Book",query:{serviceType:o.value,vehicleType:s.value}},class:"btn btn-primary btn-lg"},{default:w(()=>[T(" Book Now ")]),_:1},8,["to"])])])])}}},oe=y(te,[["__scopeId","data-v-5d03af29"]]);export{oe as default};