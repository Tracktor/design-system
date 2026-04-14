import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{d as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as o}from"./jsx-runtime-prWBgBgC.js";import{t as s}from"./generateUtilityClass-DUL8zXGJ.js";import{t as c}from"./Box-DFvgjzeS.js";import{t as l}from"./generateUtilityClasses-DFWpRkIR.js";import{n as u,t as d}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as f}from"./memoTheme-BGsJ-lK3.js";import{t as p}from"./composeClasses-CbmTWm-W.js";import{t as m}from"./Stack-BIr57r_j.js";import{t as h}from"./capitalize-B_lFlclu.js";import{t as g}from"./SvgIcon-c7Jm5eCq.js";import{t as _}from"./createSvgIcon-CquBlS3H.js";import{t as v}from"./useSlot-BpysTuU-.js";import{t as y}from"./Collapse-DPLi2b3B.js";import{t as b}from"./Paper-Apd769t-.js";import{t as x}from"./Typography-BNYwlYGw.js";import{t as S}from"./Button-C-NK_Lvb.js";var C=e(t()),w=C.createContext({}),T=C.createContext({});function E(e){return s(`MuiStep`,e)}l(`MuiStep`,[`root`,`horizontal`,`vertical`,`alternativeLabel`,`completed`]);var D=e(o()),O=e=>{let{classes:t,orientation:n,alternativeLabel:r,completed:i}=e;return p({root:[`root`,n,r&&`alternativeLabel`,i&&`completed`]},E,t)},k=u(`div`,{name:`MuiStep`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})({variants:[{props:{orientation:`horizontal`},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:`relative`}}]}),A=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStep`}),{active:i,children:a,className:o,component:s=`div`,completed:c,disabled:l,expanded:u=!1,index:f,last:p,...m}=r,{activeStep:h,connector:g,alternativeLabel:_,orientation:v,nonLinear:y}=C.useContext(w),[b=!1,x=!1,S=!1]=[i,c,l];h===f?b=i===void 0?!0:i:!y&&h>f?x=c===void 0?!0:c:!y&&h<f&&(S=l===void 0?!0:l);let E=C.useMemo(()=>({index:f,last:p,expanded:u,icon:f+1,active:b,completed:x,disabled:S}),[f,p,u,b,x,S]),A={...r,active:b,orientation:v,alternativeLabel:_,completed:x,disabled:S,expanded:u,component:s},j=(0,D.jsxs)(k,{as:s,className:n(O(A).root,o),ref:t,ownerState:A,...m,children:[g&&_&&f!==0?g:null,a]});return(0,D.jsx)(T.Provider,{value:E,children:g&&!_&&f!==0?(0,D.jsxs)(C.Fragment,{children:[g,j]}):j})}),j=_((0,D.jsx)(`path`,{d:`M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z`}),`CheckCircle`),M=_((0,D.jsx)(`path`,{d:`M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z`}),`Warning`);function N(e){return s(`MuiStepIcon`,e)}var P=l(`MuiStepIcon`,[`root`,`active`,`completed`,`error`,`text`]),F,I=e=>{let{classes:t,active:n,completed:r,error:i}=e;return p({root:[`root`,n&&`active`,r&&`completed`,i&&`error`],text:[`text`]},N,t)},L=u(g,{name:`MuiStepIcon`,slot:`Root`})(f(({theme:e})=>({display:`block`,transition:e.transitions.create(`color`,{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${P.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${P.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${P.error}`]:{color:(e.vars||e).palette.error.main}}))),R=u(`text`,{name:`MuiStepIcon`,slot:`Text`})(f(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),ee=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStepIcon`}),{active:i=!1,className:a,completed:o=!1,error:s=!1,icon:c,...l}=r,u={...r,active:i,completed:o,error:s},f=I(u);if(typeof c==`number`||typeof c==`string`){let e=n(a,f.root);return s?(0,D.jsx)(L,{as:M,className:e,ref:t,ownerState:u,...l}):o?(0,D.jsx)(L,{as:j,className:e,ref:t,ownerState:u,...l}):(0,D.jsxs)(L,{className:e,ref:t,ownerState:u,...l,children:[F||=(0,D.jsx)(`circle`,{cx:`12`,cy:`12`,r:`12`}),(0,D.jsx)(R,{className:f.text,x:`12`,y:`12`,textAnchor:`middle`,dominantBaseline:`central`,ownerState:u,children:c})]})}return c});function te(e){return s(`MuiStepLabel`,e)}var z=l(`MuiStepLabel`,[`root`,`horizontal`,`vertical`,`label`,`active`,`completed`,`error`,`disabled`,`iconContainer`,`alternativeLabel`,`labelContainer`]),ne=e=>{let{classes:t,orientation:n,active:r,completed:i,error:a,disabled:o,alternativeLabel:s}=e;return p({root:[`root`,n,a&&`error`,o&&`disabled`,s&&`alternativeLabel`],label:[`label`,r&&`active`,i&&`completed`,a&&`error`,o&&`disabled`,s&&`alternativeLabel`],iconContainer:[`iconContainer`,r&&`active`,i&&`completed`,a&&`error`,o&&`disabled`,s&&`alternativeLabel`],labelContainer:[`labelContainer`,s&&`alternativeLabel`]},te,t)},re=u(`span`,{name:`MuiStepLabel`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation]]}})({display:`flex`,alignItems:`center`,[`&.${z.alternativeLabel}`]:{flexDirection:`column`},[`&.${z.disabled}`]:{cursor:`default`},variants:[{props:{orientation:`vertical`},style:{textAlign:`left`,padding:`8px 0`}}]}),ie=u(`span`,{name:`MuiStepLabel`,slot:`Label`})(f(({theme:e})=>({...e.typography.body2,display:`block`,transition:e.transitions.create(`color`,{duration:e.transitions.duration.shortest}),[`&.${z.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.alternativeLabel}`]:{marginTop:16},[`&.${z.error}`]:{color:(e.vars||e).palette.error.main}}))),ae=u(`span`,{name:`MuiStepLabel`,slot:`IconContainer`})({flexShrink:0,display:`flex`,paddingRight:8,[`&.${z.alternativeLabel}`]:{paddingRight:0}}),oe=u(`span`,{name:`MuiStepLabel`,slot:`LabelContainer`})(f(({theme:e})=>({width:`100%`,color:(e.vars||e).palette.text.secondary,[`&.${z.alternativeLabel}`]:{textAlign:`center`}}))),B=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStepLabel`}),{children:i,className:a,componentsProps:o={},error:s=!1,icon:c,optional:l,slots:u={},slotProps:f={},StepIconComponent:p,StepIconProps:m,...h}=r,{alternativeLabel:g,orientation:_}=C.useContext(w),{active:y,disabled:b,completed:x,icon:S}=C.useContext(T),E=c||S,O=p;E&&!O&&(O=ee);let k={...r,active:y,alternativeLabel:g,completed:x,disabled:b,error:s,orientation:_},A=ne(k),j={slots:u,slotProps:{stepIcon:m,...o,...f}},[M,N]=v(`root`,{elementType:re,externalForwardedProps:{...j,...h},ownerState:k,ref:t,className:n(A.root,a)}),[P,F]=v(`label`,{elementType:ie,externalForwardedProps:j,ownerState:k}),[I,L]=v(`stepIcon`,{elementType:O,externalForwardedProps:j,ownerState:k});return(0,D.jsxs)(M,{...N,children:[E||I?(0,D.jsx)(ae,{className:A.iconContainer,ownerState:k,children:(0,D.jsx)(I,{completed:x,active:y,error:s,icon:E,...L})}):null,(0,D.jsxs)(oe,{className:A.labelContainer,ownerState:k,children:[i?(0,D.jsx)(P,{...F,className:n(A.label,F?.className),children:i}):null,l]})]})});B.muiName=`StepLabel`;function se(e){return s(`MuiStepConnector`,e)}var V=l(`MuiStepConnector`,[`root`,`horizontal`,`vertical`,`alternativeLabel`,`active`,`completed`,`disabled`,`line`,`lineHorizontal`,`lineVertical`]),ce=e=>{let{classes:t,orientation:n,alternativeLabel:r,active:i,completed:a,disabled:o}=e;return p({root:[`root`,n,r&&`alternativeLabel`,i&&`active`,a&&`completed`,o&&`disabled`],line:[`line`,`line${h(n)}`]},se,t)},le=u(`div`,{name:`MuiStepConnector`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})({flex:`1 1 auto`,variants:[{props:{orientation:`vertical`},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:`absolute`,top:12,left:`calc(-50% + 20px)`,right:`calc(50% + 20px)`}}]}),ue=u(`span`,{name:`MuiStepConnector`,slot:`Line`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.line,t[`line${h(n.orientation)}`]]}})(f(({theme:e})=>{let t=e.palette.mode===`light`?e.palette.grey[400]:e.palette.grey[600];return{display:`block`,borderColor:e.vars?e.vars.palette.StepConnector.border:t,variants:[{props:{orientation:`horizontal`},style:{borderTopStyle:`solid`,borderTopWidth:1}},{props:{orientation:`vertical`},style:{borderLeftStyle:`solid`,borderLeftWidth:1,minHeight:24}}]}})),H=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStepConnector`}),{className:i,...a}=r,{alternativeLabel:o,orientation:s=`horizontal`}=C.useContext(w),{active:c,disabled:l,completed:u}=C.useContext(T),f={...r,alternativeLabel:o,orientation:s,active:c,completed:u,disabled:l},p=ce(f);return(0,D.jsx)(le,{className:n(p.root,i),ref:t,ownerState:f,...a,children:(0,D.jsx)(ue,{className:p.line,ownerState:f})})});function U(e){return s(`MuiStepContent`,e)}l(`MuiStepContent`,[`root`,`last`,`transition`]);var de=e=>{let{classes:t,last:n}=e;return p({root:[`root`,n&&`last`],transition:[`transition`]},U,t)},fe=u(`div`,{name:`MuiStepContent`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.last&&t.last]}})(f(({theme:e})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode===`light`?e.palette.grey[400]:e.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:`none`}}]}))),pe=u(y,{name:`MuiStepContent`,slot:`Transition`})({}),me=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStepContent`}),{children:i,className:a,TransitionComponent:o=y,transitionDuration:s=`auto`,TransitionProps:c,slots:l={},slotProps:u={},...f}=r,{orientation:p}=C.useContext(w),{active:m,last:h,expanded:g}=C.useContext(T),_={...r,last:h},b=de(_),x=s;s===`auto`&&!o.muiSupportAuto&&(x=void 0);let[S,E]=v(`transition`,{elementType:pe,externalForwardedProps:{slots:l,slotProps:{transition:c,...u}},ownerState:_,className:b.transition,additionalProps:{in:m||g,timeout:x,unmountOnExit:!0}});return(0,D.jsx)(fe,{className:n(b.root,a),ref:t,ownerState:_,...f,children:(0,D.jsx)(S,{as:o,...E,children:i})})});function he(e){return s(`MuiStepper`,e)}l(`MuiStepper`,[`root`,`horizontal`,`vertical`,`nonLinear`,`alternativeLabel`]);var ge=e=>{let{orientation:t,nonLinear:n,alternativeLabel:r,classes:i}=e;return p({root:[`root`,t,n&&`nonLinear`,r&&`alternativeLabel`]},he,i)},_e=u(`div`,{name:`MuiStepper`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.nonLinear&&t.nonLinear]}})({display:`flex`,variants:[{props:{orientation:`horizontal`},style:{flexDirection:`row`,alignItems:`center`}},{props:{orientation:`vertical`},style:{flexDirection:`column`}},{props:{alternativeLabel:!0},style:{alignItems:`flex-start`}}]}),ve=(0,D.jsx)(H,{}),ye=C.forwardRef(function(e,t){let r=d({props:e,name:`MuiStepper`}),{activeStep:i=0,alternativeLabel:a=!1,children:o,className:s,component:c=`div`,connector:l=ve,nonLinear:u=!1,orientation:f=`horizontal`,...p}=r,m={...r,nonLinear:u,alternativeLabel:a,orientation:f,component:c},h=ge(m),g=C.Children.toArray(o).filter(Boolean),_=g.map((e,t)=>C.cloneElement(e,{index:t,last:t+1===g.length,...e.props})),v=C.useMemo(()=>({activeStep:i,alternativeLabel:a,connector:l,nonLinear:u,orientation:f}),[i,a,l,u,f]);return(0,D.jsx)(w.Provider,{value:v,children:(0,D.jsx)(_e,{as:c,ownerState:m,className:n(h.root,s),ref:t,...p,children:_})})}),W=e=>r(ye,{...e});try{W.displayName=`Stepper`,W.__docgenInfo={description:``,displayName:`Stepper`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var G=[`Select campaign settings`,`Create an ad group`,`Create an ad`],be=[{description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,label:`Select campaign settings`},{description:`An ad group contains one or more ads which target a shared set of keywords.`,label:`Create an ad group`},{description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,label:`Create an ad`}],xe=u(H)(({theme:e})=>({[`&.${V.alternativeLabel}`]:{left:`calc(-50% + 16px)`,right:`calc(50% + 16px)`,top:10},[`&.${V.active}`]:{[`& .${V.line}`]:{borderColor:`#784af4`}},[`&.${V.completed}`]:{[`& .${V.line}`]:{borderColor:`#784af4`}},[`& .${V.line}`]:{borderColor:e.palette.mode===`dark`?e.palette.grey[800]:`#eaeaf0`,borderRadius:1,borderTopWidth:3}})),Se=u(`div`)(({theme:e,ownerState:t})=>({alignItems:`center`,color:e.palette.mode===`dark`?e.palette.grey[700]:`#eaeaf0`,display:`flex`,height:22,...t.active&&{color:`#784af4`},"& .QontoStepIcon-circle":{backgroundColor:`currentColor`,borderRadius:`50%`,height:8,width:8},"& .QontoStepIcon-completedIcon":{color:`#784af4`,fontSize:18,zIndex:1}})),Ce=u(H)(({theme:e})=>({[`&.${V.alternativeLabel}`]:{top:22},[`&.${V.active}`]:{[`& .${V.line}`]:{backgroundImage:`linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)`}},[`&.${V.completed}`]:{[`& .${V.line}`]:{backgroundImage:`linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)`}},[`& .${V.line}`]:{backgroundColor:e.palette.mode===`dark`?e.palette.grey[800]:`#eaeaf0`,border:0,borderRadius:1,height:3}})),we=u(`div`)(({theme:e,ownerState:t})=>({alignItems:`center`,backgroundColor:e.palette.mode===`dark`?e.palette.grey[700]:`#ccc`,borderRadius:`50%`,color:`#fff`,display:`flex`,height:50,justifyContent:`center`,width:50,zIndex:1,...t.active&&{backgroundImage:`linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)`,boxShadow:`0 4px 10px 0 rgba(0,0,0,.25)`},...t.completed&&{backgroundImage:`linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)`}})),Te=e=>{let{active:t,completed:n,className:i}=e;return r(Se,{ownerState:{active:t},className:i,children:n?r(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium QontoStepIcon-completedIcon css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`CheckIcon`,children:r(`path`,{d:`M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`})}):r(`div`,{className:`QontoStepIcon-circle`})})},Ee=e=>{let{active:t,completed:n,className:i,icon:a}=e;return r(we,{ownerState:{active:t,completed:n},className:i,children:{1:r(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`SettingsIcon`,children:r(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z`})}),2:r(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`SettingsIcon`,children:r(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z`})}),3:r(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`SettingsIcon`,children:r(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z`})})}[String(a)]})},K=e=>{let[t,n]=(0,C.useState)(0),[o,s]=(0,C.useState)(new Set),l=e=>e===1,u=e=>o.has(e),d=()=>{let e=o;u(t)&&(e=new Set(e.values()),e.delete(t)),n(e=>e+1),s(e)},f=()=>{n(e=>e-1)},p=()=>{if(!l(t))throw Error(`You can't skip a step that isn't optional.`);n(e=>e+1),s(e=>{let n=new Set(e.values());return n.add(t),n})},m=()=>{n(0)};return r(c,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:i(c,{sx:{width:`100%`},children:[r(W,{activeStep:t,...e,children:G.map((e,t)=>{let n={},i={};return l(t)&&(i.optional=r(x,{variant:`caption`,children:`Optional`})),u(t)&&(n.completed=!1),r(A,{...n,children:r(B,{...i,children:e})},e)})}),t===G.length?i(a,{children:[r(x,{sx:{mb:1,mt:2},children:`All steps completed - you're finished`}),i(c,{sx:{display:`flex`,flexDirection:`row`,pt:2},children:[r(c,{sx:{flex:`1 1 auto`}}),r(S,{onClick:m,variant:`outlined`,children:`Reset`})]})]}):i(a,{children:[i(x,{sx:{mb:1,mt:2},children:[`Step `,t+1]}),i(c,{sx:{display:`flex`,flexDirection:`row`,pt:2},children:[r(S,{color:`inherit`,disabled:t===0,onClick:f,sx:{mr:1},variant:`outlined`,children:`Back`}),r(c,{sx:{flex:`1 1 auto`}}),l(t)&&r(S,{color:`inherit`,onClick:p,sx:{mr:1},variant:`outlined`,children:`Skip`}),r(S,{onClick:d,variant:`outlined`,children:t===G.length-1?`Finish`:`Next`})]})]})]})})},q=e=>r(c,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:r(c,{sx:{width:`100%`},children:r(W,{activeStep:1,...e,children:G.map(e=>r(A,{children:r(B,{children:e})},e))})})}),De=e=>{let t=e=>e===1;return r(c,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:r(c,{sx:{width:`100%`},children:r(W,{activeStep:1,...e,children:G.map((e,n)=>{let i={};return t(n)&&(i.optional=r(x,{variant:`caption`,color:`error`,children:`Alert message`}),i.error=!0),r(A,{children:r(B,{...i,children:e})},e)})})})})},Oe=e=>r(c,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:i(m,{sx:{width:`100%`},spacing:4,children:[r(W,{alternativeLabel:!0,activeStep:1,connector:r(xe,{}),...e,children:G.map(e=>r(A,{children:r(B,{StepIconComponent:Te,children:e})},e))}),r(W,{alternativeLabel:!0,activeStep:1,connector:r(Ce,{}),...e,children:G.map(e=>r(A,{children:r(B,{StepIconComponent:Ee,children:e})},e))})]})}),ke=e=>{let[t,n]=(0,C.useState)(0),a=()=>{n(e=>e+1)},o=()=>{n(e=>e-1)},s=()=>{n(0)};return r(c,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:i(c,{sx:{maxWidth:400},children:[r(W,{activeStep:t,...e,children:be.map((e,t)=>i(A,{children:[r(B,{optional:t===2?r(x,{variant:`caption`,children:`Last step`}):null,children:e.label}),i(me,{children:[r(x,{children:e.description}),r(c,{sx:{mb:2},children:i(`div`,{children:[r(S,{variant:`outlined`,onClick:a,sx:{mr:1,mt:1},children:t===G.length-1?`Finish`:`Continue`}),r(S,{disabled:t===0,onClick:o,sx:{mr:1,mt:1},children:`Back`})]})})]})]},e.label))}),t===G.length&&i(b,{square:!0,elevation:0,sx:{p:3},children:[r(x,{children:`All steps completed - you're finished`}),r(S,{onClick:s,sx:{mr:1,mt:1},children:`Reset`})]})]})})},J=K.bind({});J.args={};var Y=K.bind({});Y.args={nonLinear:!0};var X=q.bind({});X.args={alternativeLabel:!0};var Z=De.bind({});Z.args={};var Q=Oe.bind({});Q.args={};var $=ke.bind({});$.args={orientation:`vertical`};var Ae={component:W,title:`Components/Navigation/Stepper`};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Box sx={{
    width: "100%"
  }}>
      <Stepper activeStep={1} {...args}>
        {steps.map(label => <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>)}
      </Stepper>
    </Box>
  </Box>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
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
  </Box>`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}};var je=[`Horizontal`,`NonLinear`,`AlternativeLabel`,`ErrorStep`,`CustomizedHorizontal`,`Vertical`];export{X as AlternativeLabel,Q as CustomizedHorizontal,Z as ErrorStep,J as Horizontal,Y as NonLinear,$ as Vertical,je as __namedExportsOrder,Ae as default};