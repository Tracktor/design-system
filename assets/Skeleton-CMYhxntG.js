import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{A as n,M as r,d as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./jsx-runtime-prWBgBgC.js";import{t as o}from"./generateUtilityClass-DUL8zXGJ.js";import{t as s}from"./generateUtilityClasses-DFWpRkIR.js";import{n as c,t as l}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as u}from"./memoTheme-BGsJ-lK3.js";import{t as d}from"./composeClasses-CbmTWm-W.js";import{c as f,s as p}from"./iframe-7ZbU6LzZ.js";function m(e){return o(`MuiSkeleton`,e)}s(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var h=e(t()),g=e(a()),_=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return d({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},m,t)},v=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,y=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,b=typeof v==`string`?null:n`
        animation: ${v} 2s ease-in-out 0.5s infinite;
      `,x=typeof y==`string`?null:n`
        &::after {
          animation: ${y} 2s linear 0.5s infinite;
        }
      `,S=c(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(u(({theme:e})=>{let t=p(e.shape.borderRadius)||`px`,n=f(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:b||{animation:`${v} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:x||{"&::after":{animation:`${y} 2s linear 0.5s infinite`}}}]}})),C=h.forwardRef(function(e,t){let n=l({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:a,component:o=`span`,height:s,style:c,variant:u=`text`,width:d,...f}=n,p={...n,animation:r,component:o,variant:u,hasChildren:!!f.children};return(0,g.jsx)(S,{as:o,ref:t,className:i(_(p).root,a),ownerState:p,...f,style:{width:d,height:s,...c}})});export{C as t};