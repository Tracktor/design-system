import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{d as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as o}from"./jsx-runtime-prWBgBgC.js";import{n as s}from"./GlobalStyles-DXlWX7xR.js";import{t as c}from"./generateUtilityClass-DUL8zXGJ.js";import{t as l}from"./Box-DFvgjzeS.js";import{t as u}from"./generateUtilityClasses-DFWpRkIR.js";import{n as d,t as ee}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as f}from"./memoTheme-BGsJ-lK3.js";import{t as p}from"./composeClasses-CbmTWm-W.js";import{t as m}from"./capitalize-B_lFlclu.js";import{t as h}from"./SvgIcon-c7Jm5eCq.js";import{t as g}from"./createSvgIcon-CquBlS3H.js";import{t as _}from"./debounce-TYn9iBal.js";import{t as te}from"./ownerDocument-M4nUvloO.js";import{t as ne}from"./ownerWindow-Ctg7EoOY.js";import{t as v}from"./useEnhancedEffect-CUPJePf0.js";import{n as y,t as b}from"./ButtonBase-ai95Z7DO.js";import{t as x}from"./useSlot-BpysTuU-.js";import{t as S}from"./useSlotProps-CeHUwc0_.js";import{t as re}from"./getActiveElement-D1hOI_u3.js";import{l as ie}from"./iframe-Zi-9QKaB.js";function C(e){return c(`MuiTab`,e)}var w=u(`MuiTab`,[`root`,`labelIcon`,`textColorInherit`,`textColorPrimary`,`textColorSecondary`,`selected`,`disabled`,`fullWidth`,`wrapped`,`iconWrapper`,`icon`]),T=e(t()),E=e(o()),D=e=>{let{classes:t,textColor:n,fullWidth:r,wrapped:i,icon:a,label:o,selected:s,disabled:c}=e;return p({root:[`root`,a&&o&&`labelIcon`,`textColor${m(n)}`,r&&`fullWidth`,i&&`wrapped`,s&&`selected`,c&&`disabled`],icon:[`iconWrapper`,`icon`]},C,t)},ae=d(b,{name:`MuiTab`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${m(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped,{[`& .${w.iconWrapper}`]:t.iconWrapper},{[`& .${w.icon}`]:t.icon}]}})(f(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:`relative`,minHeight:48,flexShrink:0,padding:`12px 16px`,overflow:`hidden`,whiteSpace:`normal`,textAlign:`center`,lineHeight:1.25,variants:[{props:({ownerState:e})=>e.label&&(e.iconPosition===`top`||e.iconPosition===`bottom`),style:{flexDirection:`column`}},{props:({ownerState:e})=>e.label&&e.iconPosition!==`top`&&e.iconPosition!==`bottom`,style:{flexDirection:`row`}},{props:({ownerState:e})=>e.icon&&e.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t===`top`,style:{[`& > .${w.icon}`]:{marginBottom:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t===`bottom`,style:{[`& > .${w.icon}`]:{marginTop:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t===`start`,style:{[`& > .${w.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t===`end`,style:{[`& > .${w.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:`inherit`},style:{color:`inherit`,opacity:.6,[`&.${w.selected}`]:{opacity:1},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:`primary`},style:{color:(e.vars||e).palette.text.secondary,[`&.${w.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${w.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:`secondary`},style:{color:(e.vars||e).palette.text.secondary,[`&.${w.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${w.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:e})=>e.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:`none`}},{props:({ownerState:e})=>e.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),O=T.forwardRef(function(e,t){let r=ee({props:e,name:`MuiTab`}),{className:i,disabled:a=!1,disableFocusRipple:o=!1,fullWidth:s,icon:c,iconPosition:l=`top`,indicator:u,label:d,onChange:f,onClick:p,onFocus:m,selected:h,selectionFollowsFocus:g,textColor:_=`inherit`,value:te,wrapped:ne=!1,...v}=r,y={...r,disabled:a,disableFocusRipple:o,selected:h,icon:!!c,iconPosition:l,label:!!d,fullWidth:s,textColor:_,wrapped:ne},b=D(y),x=c&&d&&T.isValidElement(c)?T.cloneElement(c,{className:n(b.icon,c.props.className)}):c,S=e=>{!h&&f&&f(e,te),p&&p(e)},re=e=>{g&&!h&&f&&f(e,te),m&&m(e)};return(0,E.jsxs)(ae,{focusRipple:!o,className:n(b.root,i),ref:t,role:`tab`,"aria-selected":h,disabled:a,onClick:S,onFocus:re,ownerState:y,tabIndex:h?0:-1,...v,children:[l===`top`||l===`start`?(0,E.jsxs)(T.Fragment,{children:[x,d]}):(0,E.jsxs)(T.Fragment,{children:[d,x]}),u]})}),oe=g((0,E.jsx)(`path`,{d:`M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z`}),`KeyboardArrowLeft`),se=g((0,E.jsx)(`path`,{d:`M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z`}),`KeyboardArrowRight`);function k(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function ce(e,t,n,r={},i=()=>{}){let{ease:a=k,duration:o=300}=r,s=null,c=t[e],l=!1,u=()=>{l=!0},d=r=>{if(l){i(Error(`Animation cancelled`));return}s===null&&(s=r);let u=Math.min(1,(r-s)/o);if(t[e]=a(u)*(n-c)+c,u>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(d)};return c===n?(i(Error(`Element already at target position`)),u):(requestAnimationFrame(d),u)}var le={width:99,height:99,position:`absolute`,top:-9999,overflow:`scroll`};function ue(e){let{onChange:t,...n}=e,r=T.useRef(),i=T.useRef(null),a=()=>{r.current=i.current.offsetHeight-i.current.clientHeight};return v(()=>{let e=_(()=>{let e=r.current;a(),e!==r.current&&t(r.current)}),n=ne(i.current);return n.addEventListener(`resize`,e),()=>{e.clear(),n.removeEventListener(`resize`,e)}},[t]),T.useEffect(()=>{a(),t(r.current)},[t]),(0,E.jsx)(`div`,{style:le,...n,ref:i})}function de(e){return c(`MuiTabScrollButton`,e)}var A=u(`MuiTabScrollButton`,[`root`,`vertical`,`horizontal`,`disabled`]),j=e=>{let{classes:t,orientation:n,disabled:r}=e;return p({root:[`root`,n,r&&`disabled`]},de,t)},M=d(b,{name:`MuiTabScrollButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.orientation&&t[n.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${A.disabled}`]:{opacity:0},variants:[{props:{orientation:`vertical`},style:{width:`100%`,height:40,"& svg":{transform:`var(--TabScrollButton-svgRotate)`}}}]}),fe=T.forwardRef(function(e,t){let r=ee({props:e,name:`MuiTabScrollButton`}),{className:i,slots:a={},slotProps:o={},direction:s,orientation:c,disabled:l,...u}=r,d=ie(),f={isRtl:d,...r},p=j(f),m=a.StartScrollButtonIcon??oe,h=a.EndScrollButtonIcon??se,g=S({elementType:m,externalSlotProps:o.startScrollButtonIcon,additionalProps:{fontSize:`small`},ownerState:f}),_=S({elementType:h,externalSlotProps:o.endScrollButtonIcon,additionalProps:{fontSize:`small`},ownerState:f});return(0,E.jsx)(M,{component:`div`,className:n(p.root,i),ref:t,role:null,ownerState:f,tabIndex:null,...u,style:{...u.style,...c===`vertical`&&{"--TabScrollButton-svgRotate":`rotate(${d?-90:90}deg)`}},children:s===`left`?(0,E.jsx)(m,{...g}):(0,E.jsx)(h,{..._})})});function N(e){return c(`MuiTabs`,e)}var P=u(`MuiTabs`,[`root`,`vertical`,`list`,`flexContainer`,`flexContainerVertical`,`centered`,`scroller`,`fixed`,`scrollableX`,`scrollableY`,`hideScrollbar`,`scrollButtons`,`scrollButtonsHideMobile`,`indicator`]),pe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,me=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,he=(e,t,n)=>{let r=!1,i=n(e,t);for(;i;){if(i===e.firstChild){if(r)return;r=!0}let t=i.disabled||i.getAttribute(`aria-disabled`)===`true`;if(!i.hasAttribute(`tabindex`)||t)i=n(e,i);else{i.focus();return}}},ge=e=>{let{vertical:t,fixed:n,hideScrollbar:r,scrollableX:i,scrollableY:a,centered:o,scrollButtonsHideMobile:s,classes:c}=e;return p({root:[`root`,t&&`vertical`],scroller:[`scroller`,n&&`fixed`,r&&`hideScrollbar`,i&&`scrollableX`,a&&`scrollableY`],list:[`list`,`flexContainer`,t&&`flexContainerVertical`,t&&`vertical`,o&&`centered`],indicator:[`indicator`],scrollButtons:[`scrollButtons`,s&&`scrollButtonsHideMobile`],scrollableX:[i&&`scrollableX`],hideScrollbar:[r&&`hideScrollbar`]},N,c)},_e=d(`div`,{name:`MuiTabs`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${P.scrollButtons}`]:t.scrollButtons},{[`& .${P.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(f(({theme:e})=>({overflow:`hidden`,minHeight:48,WebkitOverflowScrolling:`touch`,display:`flex`,variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:`column`}},{props:({ownerState:e})=>e.scrollButtonsHideMobile,style:{[`& .${P.scrollButtons}`]:{[e.breakpoints.down(`sm`)]:{display:`none`}}}}]}))),ve=d(`div`,{name:`MuiTabs`,slot:`Scroller`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})({position:`relative`,display:`inline-block`,flex:`1 1 auto`,whiteSpace:`nowrap`,variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:`hidden`,width:`100%`}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:`none`,"&::-webkit-scrollbar":{display:`none`}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:`auto`,overflowY:`hidden`}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:`auto`,overflowX:`hidden`}}]}),ye=d(`div`,{name:`MuiTabs`,slot:`List`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.list,t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})({display:`flex`,variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:`column`}},{props:({ownerState:e})=>e.centered,style:{justifyContent:`center`}}]}),be=d(`span`,{name:`MuiTabs`,slot:`Indicator`})(f(({theme:e})=>({position:`absolute`,height:2,bottom:0,width:`100%`,transition:e.transitions.create(),variants:[{props:{indicatorColor:`primary`},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:`secondary`},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:e})=>e.vertical,style:{height:`100%`,width:2,right:0}}]}))),xe=d(ue)({overflowX:`auto`,overflowY:`hidden`,scrollbarWidth:`none`,"&::-webkit-scrollbar":{display:`none`}}),Se={},Ce=T.forwardRef(function(e,t){let r=ee({props:e,name:`MuiTabs`}),i=s(),a=ie(),{"aria-label":o,"aria-labelledby":c,action:l,centered:u=!1,children:d,className:f,component:p=`div`,allowScrollButtonsMobile:m=!1,indicatorColor:h=`primary`,onChange:g,orientation:v=`horizontal`,ScrollButtonComponent:b,scrollButtons:C=`auto`,selectionFollowsFocus:w,slots:D={},slotProps:ae={},TabIndicatorProps:O={},TabScrollButtonProps:oe={},textColor:se=`primary`,value:k,variant:le=`standard`,visibleScrollbar:ue=!1,...de}=r,A=le===`scrollable`,j=v===`vertical`,M=j?`scrollTop`:`scrollLeft`,N=j?`top`:`left`,P=j?`bottom`:`right`,Ce=j?`clientHeight`:`clientWidth`,F=j?`height`:`width`,I={...r,component:p,allowScrollButtonsMobile:m,indicatorColor:h,orientation:v,vertical:j,scrollButtons:C,textColor:se,variant:le,visibleScrollbar:ue,fixed:!A,hideScrollbar:A&&!ue,scrollableX:A&&!j,scrollableY:A&&j,centered:u&&!A,scrollButtonsHideMobile:!m},L=ge(I),R=S({elementType:D.StartScrollButtonIcon,externalSlotProps:ae.startScrollButtonIcon,ownerState:I}),z=S({elementType:D.EndScrollButtonIcon,externalSlotProps:ae.endScrollButtonIcon,ownerState:I}),[we,Te]=T.useState(!1),[B,Ee]=T.useState(Se),[V,H]=T.useState(!1),[U,W]=T.useState(!1),[G,K]=T.useState(!1),[q,J]=T.useState({overflow:`hidden`,scrollbarWidth:0}),Y=new Map,X=T.useRef(null),Z=T.useRef(null),Q={slots:D,slotProps:{indicator:O,scrollButtons:oe,...ae}},De=()=>{let e=X.current,t;if(e){let n=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let n;if(e&&k!==!1){let e=Z.current.children;if(e.length>0){let t=e[Y.get(k)];n=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:n}},$=y(()=>{let{tabsMeta:e,tabMeta:t}=De(),n=0,r;j?(r=`top`,t&&e&&(n=t.top-e.top+e.scrollTop)):(r=a?`right`:`left`,t&&e&&(n=(a?-1:1)*(t[r]-e[r]+e.scrollLeft)));let i={[r]:n,[F]:t?t[F]:0};if(typeof B[r]!=`number`||typeof B[F]!=`number`)Ee(i);else{let e=Math.abs(B[r]-i[r]),t=Math.abs(B[F]-i[F]);(e>=1||t>=1)&&Ee(i)}}),Oe=(e,{animation:t=!0}={})=>{t?ce(M,X.current,e,{duration:i.transitions.duration.standard}):X.current[M]=e},ke=e=>{let t=X.current[M];j?t+=e:t+=e*(a?-1:1),Oe(t)},Ae=()=>{let e=X.current[Ce],t=0,n=Array.from(Z.current.children);for(let r=0;r<n.length;r+=1){let i=n[r];if(t+i[Ce]>e){r===0&&(t=e);break}t+=i[Ce]}return t},je=()=>{ke(-1*Ae())},Me=()=>{ke(Ae())},[Ne,{onChange:Pe,...Fe}]=x(`scrollbar`,{className:n(L.scrollableX,L.hideScrollbar),elementType:xe,shouldForwardComponentProp:!0,externalForwardedProps:Q,ownerState:I}),Ie=T.useCallback(e=>{Pe?.(e),J({overflow:null,scrollbarWidth:e})},[Pe]),[Le,Re]=x(`scrollButtons`,{className:n(L.scrollButtons,oe.className),elementType:fe,externalForwardedProps:Q,ownerState:I,additionalProps:{orientation:v,slots:{StartScrollButtonIcon:D.startScrollButtonIcon||D.StartScrollButtonIcon,EndScrollButtonIcon:D.endScrollButtonIcon||D.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:R,endScrollButtonIcon:z}}}),ze=()=>{let e={};e.scrollbarSizeListener=A?(0,E.jsx)(Ne,{...Fe,onChange:Ie}):null;let t=A&&(C===`auto`&&(V||U)||C===!0);return e.scrollButtonStart=t?(0,E.jsx)(Le,{direction:a?`right`:`left`,onClick:je,disabled:!V,...Re}):null,e.scrollButtonEnd=t?(0,E.jsx)(Le,{direction:a?`left`:`right`,onClick:Me,disabled:!U,...Re}):null,e},Be=y(e=>{let{tabsMeta:t,tabMeta:n}=De();!n||!t||(n[N]<t[N]?Oe(t[M]+(n[N]-t[N]),{animation:e}):n[P]>t[P]&&Oe(t[M]+(n[P]-t[P]),{animation:e}))}),Ve=y(()=>{A&&C!==!1&&K(!G)});T.useEffect(()=>{let e=_(()=>{X.current&&$()}),t,n=n=>{n.forEach(e=>{e.removedNodes.forEach(e=>{t?.unobserve(e)}),e.addedNodes.forEach(e=>{t?.observe(e)})}),e(),Ve()},r=ne(X.current);r.addEventListener(`resize`,e);let i;return typeof ResizeObserver<`u`&&(t=new ResizeObserver(e),Array.from(Z.current.children).forEach(e=>{t.observe(e)})),typeof MutationObserver<`u`&&(i=new MutationObserver(n),i.observe(Z.current,{childList:!0})),()=>{e.clear(),r.removeEventListener(`resize`,e),i?.disconnect(),t?.disconnect()}},[$,Ve]),T.useEffect(()=>{let e=Array.from(Z.current.children),t=e.length;if(typeof IntersectionObserver<`u`&&t>0&&A&&C!==!1){let n=e[0],r=e[t-1],i={root:X.current,threshold:.99},a=new IntersectionObserver(e=>{H(!e[0].isIntersecting)},i);a.observe(n);let o=new IntersectionObserver(e=>{W(!e[0].isIntersecting)},i);return o.observe(r),()=>{a.disconnect(),o.disconnect()}}},[A,C,G,d?.length]),T.useEffect(()=>{Te(!0)},[]),T.useEffect(()=>{$()}),T.useEffect(()=>{Be(Se!==B)},[Be,B]),T.useImperativeHandle(l,()=>({updateIndicator:$,updateScrollButtons:Ve}),[$,Ve]);let[He,Ue]=x(`indicator`,{className:n(L.indicator,O.className),elementType:be,externalForwardedProps:Q,ownerState:I,additionalProps:{style:B}}),We=(0,E.jsx)(He,{...Ue}),Ge=0,Ke=T.Children.map(d,e=>{if(!T.isValidElement(e))return null;let t=e.props.value===void 0?Ge:e.props.value;Y.set(t,Ge);let n=t===k;return Ge+=1,T.cloneElement(e,{fullWidth:le===`fullWidth`,indicator:n&&!we&&We,selected:n,selectionFollowsFocus:w,onChange:g,textColor:se,value:t,...Ge===1&&k===!1&&!e.props.tabIndex?{tabIndex:0}:{}})}),qe=e=>{if(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)return;let t=Z.current,n=re(te(t));if(n?.getAttribute(`role`)!==`tab`)return;let r=v===`horizontal`?`ArrowLeft`:`ArrowUp`,i=v===`horizontal`?`ArrowRight`:`ArrowDown`;switch(v===`horizontal`&&a&&(r=`ArrowRight`,i=`ArrowLeft`),e.key){case r:e.preventDefault(),he(t,n,me);break;case i:e.preventDefault(),he(t,n,pe);break;case`Home`:e.preventDefault(),he(t,null,pe);break;case`End`:e.preventDefault(),he(t,null,me);break;default:break}},Je=ze(),[Ye,Xe]=x(`root`,{ref:t,className:n(L.root,f),elementType:_e,externalForwardedProps:{...Q,...de,component:p},ownerState:I}),[Ze,Qe]=x(`scroller`,{ref:X,className:L.scroller,elementType:ve,externalForwardedProps:Q,ownerState:I,additionalProps:{style:{overflow:q.overflow,[j?`margin${a?`Left`:`Right`}`:`marginBottom`]:ue?void 0:-q.scrollbarWidth}}}),[$e,et]=x(`list`,{ref:Z,className:n(L.list,L.flexContainer),elementType:ye,externalForwardedProps:Q,ownerState:I,getSlotProps:e=>({...e,onKeyDown:t=>{qe(t),e.onKeyDown?.(t)}})});return(0,E.jsxs)(Ye,{...Xe,children:[Je.scrollButtonStart,Je.scrollbarSizeListener,(0,E.jsxs)(Ze,{...Qe,children:[(0,E.jsx)($e,{"aria-label":o,"aria-labelledby":c,"aria-orientation":v===`vertical`?`vertical`:null,role:`tablist`,...et,children:Ke}),we&&We]}),Je.scrollButtonEnd]})}),F=(0,T.forwardRef)(({children:e,value:t,index:n,orientation:i,paddingY:a,paddingX:o,fullHeight:s,sx:c},u)=>{let d=a||3,ee=o||i===`vertical`?3:0;return t===n?r(l,{ref:u,role:`tabpanel`,hidden:t!==n,id:`tabpanel-${n}`,paddingY:d,paddingX:ee,height:s?`100%`:void 0,sx:c,children:e}):null}),I=({component:e=`a`,...t})=>r(O,{component:e,onClick:e=>e.preventDefault(),...t});try{I.displayName=`LinkTab`,I.__docgenInfo={description:``,displayName:`LinkTab`,props:{component:{defaultValue:{value:`a`},description:``,name:`component`,required:!1,type:{name:`ElementType`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)`}},label:{defaultValue:null,description:`The label element.`,name:`label`,required:!1,type:{name:`string`}},href:{defaultValue:null,description:``,name:`href`,required:!1,type:{name:`string`}}}}}catch{}var L=()=>{let[e,t]=(0,T.useState)(0);return{handleChange:(0,T.useCallback)((e,n)=>{t(n)},[]),value:e}},R=e=>r(Ce,{...e});try{R.displayName=`Tabs`,R.__docgenInfo={description:``,displayName:`Tabs`,props:{slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`(Partial<TabsSlots> & { StartScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; EndScrollButtonIcon?: ElementType<...>; }) | undefined`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<"div", TabsRootSlotPropsOverrides, TabsOwnerState>; scroller?: SlotProps<"div", TabsScrollerSlotPropsOverrides, TabsOwnerState>; ... 5 more ...; endScrollButtonIcon?: SlotProps<...> | undefined; } | undefined`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var z=(e,{name:t})=>{let n=t===`Disabled`,o=t===`Scrollable`,{value:s,handleChange:c}=L(),u=e=>({"aria-controls":`simple-tabpanel-${e}`,id:`simple-tab-${e}`});return r(l,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(l,{sx:{maxWidth:o?380:`auto`,width:`100%`},children:[r(l,{sx:{borderBottom:1,borderColor:`divider`},children:i(R,{...e,value:s,onChange:c,"aria-label":`basic tabs example`,children:[r(O,{label:`Item one`,...u(0)}),r(O,{label:`Item two`,...u(1)}),r(O,{label:n?`Disabled`:`Item three`,...u(2),disabled:n}),o&&i(a,{children:[r(O,{label:`Item four`}),r(O,{label:`Item five`}),r(O,{label:`Item six`}),r(O,{label:`Item seven`})]})]})}),r(F,{value:s,index:0,children:`Item one`}),r(F,{value:s,index:1,children:`Item two`}),r(F,{value:s,index:2,children:`Item three`})]})})},we=(e,{name:t})=>{let[n,a]=(0,T.useState)(`one`),o=(e,t)=>{a(t)};return r(l,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:r(l,{children:i(R,{...e,value:n,onChange:o,"aria-label":`wrapped label tabs example`,children:[r(O,{value:`one`,label:`New arrivals in the longest text of nonfiction that should appear in the next line`,wrapped:!0}),r(O,{value:`two`,label:`Item two`,disabled:t===`Disabled`}),r(O,{value:`three`,label:`Item three`})]})})})},Te=e=>{let[t,n]=(0,T.useState)(0),{palette:a}=s(),o=(e,t)=>{n(t)};return r(l,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:i(l,{sx:{backgroundColor:`background.paper`,display:`flex`,flexGrow:1,height:224},children:[i(R,{...e,orientation:`vertical`,variant:`scrollable`,value:t,onChange:o,"aria-label":`Vertical tabs example`,sx:{borderColor:`${a.divider} !important`,borderRight:1},children:[r(O,{label:`Item one`}),r(O,{label:`Item two`}),r(O,{label:`Item three`}),r(O,{label:`Item four`}),r(O,{label:`Item five`}),r(O,{label:`Item six`}),r(O,{label:`Item seven`})]}),r(F,{value:t,index:0,orientation:`vertical`,children:`Item one`}),r(F,{value:t,index:1,orientation:`vertical`,children:`Item two`}),r(F,{value:t,index:2,orientation:`vertical`,children:`Item three`}),r(F,{value:t,index:3,orientation:`vertical`,children:`Item four`}),r(F,{value:t,index:4,orientation:`vertical`,children:`Item five`}),r(F,{value:t,index:5,orientation:`vertical`,children:`Item six`}),r(F,{value:t,index:6,orientation:`vertical`,children:`Item seven`})]})})},B=(e,{name:t})=>{let n=t===`Icon With Label`,[a,o]=(0,T.useState)(0),s=(e,t)=>{o(t)};return r(l,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:r(l,{children:i(R,{...e,value:a,onChange:s,"aria-label":`icon tabs example`,children:[r(O,{icon:r(h,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PhoneIcon`,children:r(`path`,{d:`M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`})}),"aria-label":`phone`,label:n?`RECENTS`:``}),r(O,{icon:r(h,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`}),"aria-label":`favorite`,label:n?`FAVORITES`:``}),r(O,{icon:r(h,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PersonPinIcon`,children:r(`path`,{d:`M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z`})}),"aria-label":`person`,label:n?`NEARBY`:``})]})})})},Ee=e=>{let[t,n]=(0,T.useState)(0),a=(e,t)=>{n(t)};return r(l,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(l,{sx:{width:`100%`},children:r(l,{sx:{borderBottom:1,borderColor:`divider`},children:i(R,{...e,value:t,onChange:a,"aria-label":`Nav tabs example`,children:[r(I,{label:`Page One`,href:`/drafts`}),r(I,{label:`Page Two`,href:`/trash`}),r(I,{label:`Page Three`,href:`/spam`})]})})})})},V=z.bind({});V.args={};var H=z.bind({});H.args={indicatorColor:`secondary`,textColor:`primary`},H.argTypes={indicatorColor:{control:{type:`select`},options:[`primary`,`secondary`]},textColor:{control:{type:`select`},options:[`primary`,`secondary`]}};var U=we.bind({});U.args={};var W=z.bind({});W.args={};var G=z.bind({});G.args={variant:`fullWidth`};var K=z.bind({});K.args={centered:!0};var q=z.bind({});q.args={scrollButtons:`auto`,variant:`scrollable`};var J=Te.bind({});J.args={orientation:`vertical`,variant:`scrollable`};var Y=B.bind({});Y.args={};var X=B.bind({});X.args={};var Z=Ee.bind({});Z.args={};var Q={component:R,title:`Components/Navigation/Tabs`};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const [value, setValue] = useState("one");
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="New arrivals in the longest text of nonfiction that should appear in the next line" wrapped />
          <Tab value="two" label="Item two" disabled={name === "Disabled"} />
          <Tab value="three" label="Item three" />
        </Tabs>
      </Box>
    </Box>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(0);
  const {
    palette
  } = useTheme();
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box sx={{
      backgroundColor: "background.paper",
      display: "flex",
      flexGrow: 1,
      height: 224
    }}>
        <Tabs {...args} orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{
        borderColor: \`\${palette.divider} !important\`,
        borderRight: 1
      }}>
          <Tab label="Item one" />
          <Tab label="Item two" />
          <Tab label="Item three" />
          <Tab label="Item four" />
          <Tab label="Item five" />
          <Tab label="Item six" />
          <Tab label="Item seven" />
        </Tabs>
        <TabPanel value={value} index={0} orientation="vertical">
          Item one
        </TabPanel>
        <TabPanel value={value} index={1} orientation="vertical">
          Item two
        </TabPanel>
        <TabPanel value={value} index={2} orientation="vertical">
          Item three
        </TabPanel>
        <TabPanel value={value} index={3} orientation="vertical">
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} orientation="vertical">
          Item five
        </TabPanel>
        <TabPanel value={value} index={5} orientation="vertical">
          Item six
        </TabPanel>
        <TabPanel value={value} index={6} orientation="vertical">
          Item seven
        </TabPanel>
      </Box>
    </Box>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isIconWithLabelContext = name === "Icon With Label";
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </SvgIcon>} aria-label="phone" label={isIconWithLabelContext ? "RECENTS" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" />} aria-label="favorite" label={isIconWithLabelContext ? "FAVORITES" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonPinIcon">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </SvgIcon>} aria-label="person" label={isIconWithLabelContext ? "NEARBY" : ""} />
        </Tabs>
      </Box>
    </Box>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isIconWithLabelContext = name === "Icon With Label";
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </SvgIcon>} aria-label="phone" label={isIconWithLabelContext ? "RECENTS" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" />} aria-label="favorite" label={isIconWithLabelContext ? "FAVORITES" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonPinIcon">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </SvgIcon>} aria-label="person" label={isIconWithLabelContext ? "NEARBY" : ""} />
        </Tabs>
      </Box>
    </Box>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="Nav tabs example">
            <LinkTabComponent label="Page One" href="/drafts" />
            <LinkTabComponent label="Page Two" href="/trash" />
            <LinkTabComponent label="Page Three" href="/spam" />
          </Tabs>
        </Box>
      </Box>
    </Box>;
}`,...Z.parameters?.docs?.source}}};var De=[`Basic`,`Colored`,`WrappedLabels`,`Disabled`,`FullWidth`,`Centered`,`Scrollable`,`Verticale`,`Icon`,`IconWithLabel`,`LinkTab`];export{V as Basic,K as Centered,H as Colored,W as Disabled,G as FullWidth,Y as Icon,X as IconWithLabel,Z as LinkTab,q as Scrollable,J as Verticale,U as WrappedLabels,De as __namedExportsOrder,Q as default};