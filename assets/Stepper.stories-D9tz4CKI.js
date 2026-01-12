import{r as c,h as U,g as E,d as _,j as S,s as h,e as j,f as W,ac as pe,S as K,m as Q,a0 as ee,X as ce,a as o,b as f,F as se,P as be}from"./iframe-w4Lu0G06.js";import{T as z}from"./Typography-Ctp8nN4A.js";import{B as b}from"./Box-DBGB0BqK.js";import{B as T}from"./Button-BK0yHpjT.js";import{S as xe}from"./Stack-DoGI_sSH.js";import{C as de}from"./Collapse-DeH8VG5t.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-pt9tXKvq.js";const Z=c.createContext({}),te=c.createContext({});function ge(e){return U("MuiStep",e)}E("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const fe=e=>{const{classes:t,orientation:n,alternativeLabel:r,completed:i}=e;return W({root:["root",n,r&&"alternativeLabel",i&&"completed"]},ge,t)},ye=h("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),O=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStep"}),{active:i,children:l,className:s,component:p="div",completed:v,disabled:m,expanded:u=!1,index:a,last:d,...C}=r,{activeStep:x,connector:k,alternativeLabel:L,orientation:I,nonLinear:w}=c.useContext(Z);let[g=!1,P=!1,B=!1]=[i,v,m];x===a?g=i!==void 0?i:!0:!w&&x>a?P=v!==void 0?v:!0:!w&&x<a&&(B=m!==void 0?m:!0);const H=c.useMemo(()=>({index:a,last:d,expanded:u,icon:a+1,active:g,completed:P,disabled:B}),[a,d,u,g,P,B]),M={...r,active:g,orientation:I,alternativeLabel:L,completed:P,disabled:B,expanded:u,component:p},F=fe(M),D=S.jsxs(ye,{as:p,className:j(F.root,s),ref:n,ownerState:M,...C,children:[k&&L&&a!==0?k:null,l]});return S.jsx(te.Provider,{value:H,children:k&&!L&&a!==0?S.jsxs(c.Fragment,{children:[k,D]}):D})}),Ce=pe(S.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"})),ke=pe(S.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}));function Le(e){return U("MuiStepIcon",e)}const ne=E("MuiStepIcon",["root","active","completed","error","text"]);var le;const we=e=>{const{classes:t,active:n,completed:r,error:i}=e;return W({root:["root",n&&"active",r&&"completed",i&&"error"],text:["text"]},Le,t)},oe=h(K,{name:"MuiStepIcon",slot:"Root"})(Q(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${ne.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${ne.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${ne.error}`]:{color:(e.vars||e).palette.error.main}}))),Be=h("text",{name:"MuiStepIcon",slot:"Text"})(Q(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),Ie=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStepIcon"}),{active:i=!1,className:l,completed:s=!1,error:p=!1,icon:v,...m}=r,u={...r,active:i,completed:s,error:p},a=we(u);if(typeof v=="number"||typeof v=="string"){const d=j(l,a.root);return p?S.jsx(oe,{as:ke,className:d,ref:n,ownerState:u,...m}):s?S.jsx(oe,{as:Ce,className:d,ref:n,ownerState:u,...m}):S.jsxs(oe,{className:d,ref:n,ownerState:u,...m,children:[le||(le=S.jsx("circle",{cx:"12",cy:"12",r:"12"})),S.jsx(Be,{className:a.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:v})]})}return v});function Me(e){return U("MuiStepLabel",e)}const N=E("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Re=e=>{const{classes:t,orientation:n,active:r,completed:i,error:l,disabled:s,alternativeLabel:p}=e;return W({root:["root",n,l&&"error",s&&"disabled",p&&"alternativeLabel"],label:["label",r&&"active",i&&"completed",l&&"error",s&&"disabled",p&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",i&&"completed",l&&"error",s&&"disabled",p&&"alternativeLabel"],labelContainer:["labelContainer",p&&"alternativeLabel"]},Me,t)},Ae=h("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${N.alternativeLabel}`]:{flexDirection:"column"},[`&.${N.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),Pe=h("span",{name:"MuiStepLabel",slot:"Label"})(Q(({theme:e})=>({...e.typography.body2,display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${N.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${N.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${N.alternativeLabel}`]:{marginTop:16},[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}}))),Ne=h("span",{name:"MuiStepLabel",slot:"IconContainer"})({flexShrink:0,display:"flex",paddingRight:8,[`&.${N.alternativeLabel}`]:{paddingRight:0}}),Te=h("span",{name:"MuiStepLabel",slot:"LabelContainer"})(Q(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${N.alternativeLabel}`]:{textAlign:"center"}}))),$=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStepLabel"}),{children:i,className:l,componentsProps:s={},error:p=!1,icon:v,optional:m,slots:u={},slotProps:a={},StepIconComponent:d,StepIconProps:C,...x}=r,{alternativeLabel:k,orientation:L}=c.useContext(Z),{active:I,disabled:w,completed:g,icon:P}=c.useContext(te),B=v||P;let H=d;B&&!H&&(H=Ie);const M={...r,active:I,alternativeLabel:k,completed:g,disabled:w,error:p,orientation:L},F=Re(M),D={slots:u,slotProps:{stepIcon:C,...s,...a}},[ue,ve]=ee("root",{elementType:Ae,externalForwardedProps:{...D,...x},ownerState:M,ref:n,className:j(F.root,l)}),[me,re]=ee("label",{elementType:Pe,externalForwardedProps:D,ownerState:M}),[ie,he]=ee("stepIcon",{elementType:H,externalForwardedProps:D,ownerState:M});return S.jsxs(ue,{...ve,children:[B||ie?S.jsx(Ne,{className:F.iconContainer,ownerState:M,children:S.jsx(ie,{completed:g,active:I,error:p,icon:B,...he})}):null,S.jsxs(Te,{className:F.labelContainer,ownerState:M,children:[i?S.jsx(me,{...re,className:j(F.label,re?.className),children:i}):null,m]})]})});$.muiName="StepLabel";function ze(e){return U("MuiStepConnector",e)}const y=E("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),je=e=>{const{classes:t,orientation:n,alternativeLabel:r,active:i,completed:l,disabled:s}=e,p={root:["root",n,r&&"alternativeLabel",i&&"active",l&&"completed",s&&"disabled"],line:["line",`line${ce(n)}`]};return W(p,ze,t)},$e=h("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),Fe=h("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.line,t[`line${ce(n.orientation)}`]]}})(Q(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600];return{display:"block",borderColor:e.vars?e.vars.palette.StepConnector.border:t,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),ae=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStepConnector"}),{className:i,...l}=r,{alternativeLabel:s,orientation:p="horizontal"}=c.useContext(Z),{active:v,disabled:m,completed:u}=c.useContext(te),a={...r,alternativeLabel:s,orientation:p,active:v,completed:u,disabled:m},d=je(a);return S.jsx($e,{className:j(d.root,i),ref:n,ownerState:a,...l,children:S.jsx(Fe,{className:d.line,ownerState:a})})});function De(e){return U("MuiStepContent",e)}E("MuiStepContent",["root","last","transition"]);const Oe=e=>{const{classes:t,last:n}=e;return W({root:["root",n&&"last"],transition:["transition"]},De,t)},Ue=h("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.last&&t.last]}})(Q(({theme:e})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),Ee=h(de,{name:"MuiStepContent",slot:"Transition"})({}),_e=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStepContent"}),{children:i,className:l,TransitionComponent:s=de,transitionDuration:p="auto",TransitionProps:v,slots:m={},slotProps:u={},...a}=r,{orientation:d}=c.useContext(Z),{active:C,last:x,expanded:k}=c.useContext(te),L={...r,last:x},I=Oe(L);let w=p;p==="auto"&&!s.muiSupportAuto&&(w=void 0);const g={slots:m,slotProps:{transition:v,...u}},[P,B]=ee("transition",{elementType:Ee,externalForwardedProps:g,ownerState:L,className:I.transition,additionalProps:{in:C||k,timeout:w,unmountOnExit:!0}});return S.jsx(Ue,{className:j(I.root,l),ref:n,ownerState:L,...a,children:S.jsx(P,{as:s,...B,children:i})})});function We(e){return U("MuiStepper",e)}E("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const Qe=e=>{const{orientation:t,nonLinear:n,alternativeLabel:r,classes:i}=e;return W({root:["root",t,n&&"nonLinear",r&&"alternativeLabel"]},We,i)},He=h("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.nonLinear&&t.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),Ve=S.jsx(ae,{}),Ye=c.forwardRef(function(t,n){const r=_({props:t,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:l=!1,children:s,className:p,component:v="div",connector:m=Ve,nonLinear:u=!1,orientation:a="horizontal",...d}=r,C={...r,nonLinear:u,alternativeLabel:l,orientation:a,component:v},x=Qe(C),k=c.Children.toArray(s).filter(Boolean),L=k.map((w,g)=>c.cloneElement(w,{index:g,last:g+1===k.length,...w.props})),I=c.useMemo(()=>({activeStep:i,alternativeLabel:l,connector:m,nonLinear:u,orientation:a}),[i,l,m,u,a]);return S.jsx(Z.Provider,{value:I,children:S.jsx(He,{as:v,ownerState:C,className:j(x.root,p),ref:n,...d,children:L})})}),A=e=>o(Ye,{...e});try{A.displayName="Stepper",A.__docgenInfo={description:"",displayName:"Stepper",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const R=["Select campaign settings","Create an ad group","Create an ad"],qe=[{description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,label:"Select campaign settings"},{description:"An ad group contains one or more ads which target a shared set of keywords.",label:"Create an ad group"},{description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,label:"Create an ad"}],Xe=h(ae)(({theme:e})=>({[`&.${y.alternativeLabel}`]:{left:"calc(-50% + 16px)",right:"calc(50% + 16px)",top:10},[`&.${y.active}`]:{[`& .${y.line}`]:{borderColor:"#784af4"}},[`&.${y.completed}`]:{[`& .${y.line}`]:{borderColor:"#784af4"}},[`& .${y.line}`]:{borderColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderRadius:1,borderTopWidth:3}})),Ge=h("div")(({theme:e,ownerState:t})=>({alignItems:"center",color:e.palette.mode==="dark"?e.palette.grey[700]:"#eaeaf0",display:"flex",height:22,...t.active&&{color:"#784af4"},"& .QontoStepIcon-circle":{backgroundColor:"currentColor",borderRadius:"50%",height:8,width:8},"& .QontoStepIcon-completedIcon":{color:"#784af4",fontSize:18,zIndex:1}})),Je=h(ae)(({theme:e})=>({[`&.${y.alternativeLabel}`]:{top:22},[`&.${y.active}`]:{[`& .${y.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${y.completed}`]:{[`& .${y.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${y.line}`]:{backgroundColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",border:0,borderRadius:1,height:3}})),Ke=h("div")(({theme:e,ownerState:t})=>({alignItems:"center",backgroundColor:e.palette.mode==="dark"?e.palette.grey[700]:"#ccc",borderRadius:"50%",color:"#fff",display:"flex",height:50,justifyContent:"center",width:50,zIndex:1,...t.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...t.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}})),Ze=e=>{const{active:t,completed:n,className:r}=e;return o(Ge,{ownerState:{active:t},className:r,children:n?o(K,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium QontoStepIcon-completedIcon css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CheckIcon",children:o("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}):o("div",{className:"QontoStepIcon-circle"})})},et=e=>{const{active:t,completed:n,className:r,icon:i}=e;return o(Ke,{ownerState:{active:t,completed:n},className:r,children:{1:o(K,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"SettingsIcon",children:o("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),2:o(K,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"SettingsIcon",children:o("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),3:o(K,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"SettingsIcon",children:o("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}[String(i)]})},Se=e=>{const[t,n]=c.useState(0),[r,i]=c.useState(new Set),l=a=>a===1,s=a=>r.has(a),p=()=>{let a=r;s(t)&&(a=new Set(a.values()),a.delete(t)),n(d=>d+1),i(a)},v=()=>{n(a=>a-1)},m=()=>{if(!l(t))throw new Error("You can't skip a step that isn't optional.");n(a=>a+1),i(a=>{const d=new Set(a.values());return d.add(t),d})},u=()=>{n(0)};return o(b,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:f(b,{sx:{width:"100%"},children:[o(A,{activeStep:t,...e,children:R.map((a,d)=>{const C={},x={};return l(d)&&(x.optional=o(z,{variant:"caption",children:"Optional"})),s(d)&&(C.completed=!1),o(O,{...C,children:o($,{...x,children:a})},a)})}),t===R.length?f(se,{children:[o(z,{sx:{mb:1,mt:2},children:"All steps completed - you're finished"}),f(b,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o(b,{sx:{flex:"1 1 auto"}}),o(T,{onClick:u,variant:"outlined",children:"Reset"})]})]}):f(se,{children:[f(z,{sx:{mb:1,mt:2},children:["Step ",t+1]}),f(b,{sx:{display:"flex",flexDirection:"row",pt:2},children:[o(T,{color:"inherit",disabled:t===0,onClick:v,sx:{mr:1},variant:"outlined",children:"Back"}),o(b,{sx:{flex:"1 1 auto"}}),l(t)&&o(T,{color:"inherit",onClick:m,sx:{mr:1},variant:"outlined",children:"Skip"}),o(T,{onClick:p,variant:"outlined",children:t===R.length-1?"Finish":"Next"})]})]})]})})},tt=e=>o(b,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:o(b,{sx:{width:"100%"},children:o(A,{activeStep:1,...e,children:R.map(t=>o(O,{children:o($,{children:t})},t))})})}),nt=e=>{const t=n=>n===1;return o(b,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:o(b,{sx:{width:"100%"},children:o(A,{activeStep:1,...e,children:R.map((n,r)=>{const i={};return t(r)&&(i.optional=o(z,{variant:"caption",color:"error",children:"Alert message"}),i.error=!0),o(O,{children:o($,{...i,children:n})},n)})})})})},ot=e=>o(b,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:f(xe,{sx:{width:"100%"},spacing:4,children:[o(A,{alternativeLabel:!0,activeStep:1,connector:o(Xe,{}),...e,children:R.map(t=>o(O,{children:o($,{StepIconComponent:Ze,children:t})},t))}),o(A,{alternativeLabel:!0,activeStep:1,connector:o(Je,{}),...e,children:R.map(t=>o(O,{children:o($,{StepIconComponent:et,children:t})},t))})]})}),at=e=>{const[t,n]=c.useState(0),r=()=>{n(s=>s+1)},i=()=>{n(s=>s-1)},l=()=>{n(0)};return o(b,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:f(b,{sx:{maxWidth:400},children:[o(A,{activeStep:t,...e,children:qe.map((s,p)=>f(O,{children:[o($,{optional:p===2?o(z,{variant:"caption",children:"Last step"}):null,children:s.label}),f(_e,{children:[o(z,{children:s.description}),o(b,{sx:{mb:2},children:f("div",{children:[o(T,{variant:"outlined",onClick:r,sx:{mr:1,mt:1},children:p===R.length-1?"Finish":"Continue"}),o(T,{disabled:p===0,onClick:i,sx:{mr:1,mt:1},children:"Back"})]})})]})]},s.label))}),t===R.length&&f(be,{square:!0,elevation:0,sx:{p:3},children:[o(z,{children:"All steps completed - you're finished"}),o(T,{onClick:l,sx:{mr:1,mt:1},children:"Reset"})]})]})})},V=Se.bind({});V.args={};const Y=Se.bind({});Y.args={nonLinear:!0};const q=tt.bind({});q.args={alternativeLabel:!0};const X=nt.bind({});X.args={};const G=ot.bind({});G.args={};const J=at.bind({});J.args={orientation:"vertical"};const ut={component:A,title:"Components/Navigation/Stepper"};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepOptional = (step: number) => step === 1;
  const isStepSkipped = (step: number) => skipped.has(step);
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box sx={{
      width: "100%"
    }}>
        <Stepper activeStep={activeStep} {...args}>
          {steps.map((label, index) => {
          const stepProps: {
            completed?: boolean;
          } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>;
        })}
        </Stepper>
        {activeStep === steps.length ? <>
            <Typography sx={{
          mb: 1,
          mt: 2
        }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2
        }}>
              <Box sx={{
            flex: "1 1 auto"
          }} />
              <Button onClick={handleReset} variant="outlined">
                Reset
              </Button>
            </Box>
          </> : <>
            <Typography sx={{
          mb: 1,
          mt: 2
        }}>Step {activeStep + 1}</Typography>
            <Box sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2
        }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{
            mr: 1
          }} variant="outlined">
                Back
              </Button>
              <Box sx={{
            flex: "1 1 auto"
          }} />
              {isStepOptional(activeStep) && <Button color="inherit" onClick={handleSkip} sx={{
            mr: 1
          }} variant="outlined">
                  Skip
                </Button>}
              <Button onClick={handleNext} variant="outlined">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>}
      </Box>
    </Box>;
}`,...V.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepOptional = (step: number) => step === 1;
  const isStepSkipped = (step: number) => skipped.has(step);
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box sx={{
      width: "100%"
    }}>
        <Stepper activeStep={activeStep} {...args}>
          {steps.map((label, index) => {
          const stepProps: {
            completed?: boolean;
          } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>;
        })}
        </Stepper>
        {activeStep === steps.length ? <>
            <Typography sx={{
          mb: 1,
          mt: 2
        }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2
        }}>
              <Box sx={{
            flex: "1 1 auto"
          }} />
              <Button onClick={handleReset} variant="outlined">
                Reset
              </Button>
            </Box>
          </> : <>
            <Typography sx={{
          mb: 1,
          mt: 2
        }}>Step {activeStep + 1}</Typography>
            <Box sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2
        }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{
            mr: 1
          }} variant="outlined">
                Back
              </Button>
              <Box sx={{
            flex: "1 1 auto"
          }} />
              {isStepOptional(activeStep) && <Button color="inherit" onClick={handleSkip} sx={{
            mr: 1
          }} variant="outlined">
                  Skip
                </Button>}
              <Button onClick={handleNext} variant="outlined">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>}
      </Box>
    </Box>;
}`,...Y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Box sx={{
    width: "100%"
  }}>
      <Stepper activeStep={1} {...args}>
        {steps.map(label => <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>)}
      </Stepper>
    </Box>
  </Box>`,...q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const isStepFailed = (step: number) => step === 1;
  return <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box sx={{
      width: "100%"
    }}>
        <Stepper activeStep={1} {...args}>
          {steps.map((label, index) => {
          const labelProps: {
            optional?: ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = <Typography variant="caption" color="error">
                  Alert message
                </Typography>;
            labelProps.error = true;
          }
          return <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>;
        })}
        </Stepper>
      </Box>
    </Box>;
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Stack sx={{
    width: "100%"
  }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />} {...args}>
        {steps.map(label => <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>)}
      </Stepper>
      <Stepper alternativeLabel activeStep={1} connector={<ColorLibConnector />} {...args}>
        {steps.map(label => <Step key={label}>
            <StepLabel StepIconComponent={ColorLibStepIcon}>{label}</StepLabel>
          </Step>)}
      </Stepper>
    </Stack>
  </Box>`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box sx={{
      maxWidth: 400
    }}>
        <Stepper activeStep={activeStep} {...args}>
          {stepsWithDescription.map((step, index) => <Step key={step.label}>
              <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{
              mb: 2
            }}>
                  <div>
                    <Button variant="outlined" onClick={handleNext} sx={{
                  mr: 1,
                  mt: 1
                }}>
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button disabled={index === 0} onClick={handleBack} sx={{
                  mr: 1,
                  mt: 1
                }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>)}
        </Stepper>
        {activeStep === steps.length && <Paper square elevation={0} sx={{
        p: 3
      }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{
          mr: 1,
          mt: 1
        }}>
              Reset
            </Button>
          </Paper>}
      </Box>
    </Box>;
}`,...J.parameters?.docs?.source}}};const vt=["Horizontal","NonLinear","AlternativeLabel","ErrorStep","CustomizedHorizontal","Vertical"];export{q as AlternativeLabel,G as CustomizedHorizontal,X as ErrorStep,V as Horizontal,Y as NonLinear,J as Vertical,vt as __namedExportsOrder,ut as default};
