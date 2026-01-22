import{g as Le,h as Re,r as i,d as We,e as N,j as x,s as H,a0 as nn,f as ze,B as tn,m as Ve,af as an,w as zn,a2 as on,u as ln,y as Me,a5 as q,v as Vn,a as l,b as $,F as kn,S as Ee}from"./iframe-CMyqxxtJ.js";import{B as S}from"./Box-Yy-CNduB.js";import{d as rn}from"./debounce-Be36O1Ab.js";import{o as sn}from"./ownerWindow-D9jy_rGR.js";import{u as Te}from"./useSlotProps-CF5h7I0m.js";import"./preload-helper-PPVm8Dsz.js";function Nn(n){return Re("MuiTab",n)}const C=Le("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),$n=n=>{const{classes:e,textColor:t,fullWidth:s,wrapped:r,icon:c,label:u,selected:p,disabled:m}=n,g={root:["root",c&&u&&"labelIcon",`textColor${nn(t)}`,s&&"fullWidth",r&&"wrapped",p&&"selected",m&&"disabled"],icon:["iconWrapper","icon"]};return ze(g,Nn,e)},jn=H(tn,{name:"MuiTab",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.label&&t.icon&&e.labelIcon,e[`textColor${nn(t.textColor)}`],t.fullWidth&&e.fullWidth,t.wrapped&&e.wrapped,{[`& .${C.iconWrapper}`]:e.iconWrapper},{[`& .${C.icon}`]:e.icon}]}})(Ve(({theme:n})=>({...n.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:e})=>e.label&&(e.iconPosition==="top"||e.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:e})=>e.label&&e.iconPosition!=="top"&&e.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:e})=>e.icon&&e.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="top",style:{[`& > .${C.icon}`]:{marginBottom:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="bottom",style:{[`& > .${C.icon}`]:{marginTop:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="start",style:{[`& > .${C.icon}`]:{marginRight:n.spacing(1)}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&t==="end",style:{[`& > .${C.icon}`]:{marginLeft:n.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${C.selected}`]:{opacity:1},[`&.${C.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(n.vars||n).palette.text.secondary,[`&.${C.selected}`]:{color:(n.vars||n).palette.primary.main},[`&.${C.disabled}`]:{color:(n.vars||n).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(n.vars||n).palette.text.secondary,[`&.${C.selected}`]:{color:(n.vars||n).palette.secondary.main},[`&.${C.disabled}`]:{color:(n.vars||n).palette.text.disabled}}},{props:({ownerState:e})=>e.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:e})=>e.wrapped,style:{fontSize:n.typography.pxToRem(12)}}]}))),h=i.forwardRef(function(e,t){const s=We({props:e,name:"MuiTab"}),{className:r,disabled:c=!1,disableFocusRipple:u=!1,fullWidth:p,icon:m,iconPosition:g="top",indicator:T,label:I,onChange:f,onClick:w,onFocus:F,selected:P,selectionFollowsFocus:y,textColor:me="inherit",value:L,wrapped:Ie=!1,...R}=s,X={...s,disabled:c,disableFocusRipple:u,selected:P,icon:!!m,iconPosition:g,label:!!I,fullWidth:p,textColor:me,wrapped:Ie},J=$n(X),Q=m&&I&&i.isValidElement(m)?i.cloneElement(m,{className:N(J.icon,m.props.className)}):m,he=W=>{!P&&f&&f(W,L),w&&w(W)},Y=W=>{y&&!P&&f&&f(W,L),F&&F(W)};return x.jsxs(jn,{focusRipple:!u,className:N(J.root,r),ref:t,role:"tab","aria-selected":P,disabled:c,onClick:he,onFocus:Y,ownerState:X,tabIndex:P?0:-1,...R,children:[g==="top"||g==="start"?x.jsxs(i.Fragment,{children:[Q,I]}):x.jsxs(i.Fragment,{children:[I,Q]}),T]})}),Fn=an(x.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),On=an(x.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function _n(n){return(1+Math.sin(Math.PI*n-Math.PI/2))/2}function An(n,e,t,s={},r=()=>{}){const{ease:c=_n,duration:u=300}=s;let p=null;const m=e[n];let g=!1;const T=()=>{g=!0},I=f=>{if(g){r(new Error("Animation cancelled"));return}p===null&&(p=f);const w=Math.min(1,(f-p)/u);if(e[n]=c(w)*(t-m)+m,w>=1){requestAnimationFrame(()=>{r(null)});return}requestAnimationFrame(I)};return m===t?(r(new Error("Element already at target position")),T):(requestAnimationFrame(I),T)}const Hn={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Xn(n){const{onChange:e,...t}=n,s=i.useRef(),r=i.useRef(null),c=()=>{s.current=r.current.offsetHeight-r.current.clientHeight};return zn(()=>{const u=rn(()=>{const m=s.current;c(),m!==s.current&&e(s.current)}),p=sn(r.current);return p.addEventListener("resize",u),()=>{u.clear(),p.removeEventListener("resize",u)}},[e]),i.useEffect(()=>{c(),e(s.current)},[e]),x.jsx("div",{style:Hn,...t,ref:r})}function Yn(n){return Re("MuiTabScrollButton",n)}const Kn=Le("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),qn=n=>{const{classes:e,orientation:t,disabled:s}=n;return ze({root:["root",t,s&&"disabled"]},Yn,e)},Un=H(tn,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.orientation&&e[t.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${Kn.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),Gn=i.forwardRef(function(e,t){const s=We({props:e,name:"MuiTabScrollButton"}),{className:r,slots:c={},slotProps:u={},direction:p,orientation:m,disabled:g,...T}=s,I=on(),f={isRtl:I,...s},w=qn(f),F=c.StartScrollButtonIcon??Fn,P=c.EndScrollButtonIcon??On,y=Te({elementType:F,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:f}),me=Te({elementType:P,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:f});return x.jsx(Un,{component:"div",className:N(w.root,r),ref:t,role:null,ownerState:f,tabIndex:null,...T,style:{...T.style,...m==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${I?-90:90}deg)`}},children:p==="left"?x.jsx(F,{...y}):x.jsx(P,{...me})})});function Jn(n){return Re("MuiTabs",n)}const De=Le("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Qe=(n,e)=>n===e?n.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n.firstChild,Ze=(n,e)=>n===e?n.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n.lastChild,Se=(n,e,t)=>{let s=!1,r=t(n,e);for(;r;){if(r===n.firstChild){if(s)return;s=!0}const c=r.disabled||r.getAttribute("aria-disabled")==="true";if(!r.hasAttribute("tabindex")||c)r=t(n,r);else{r.focus();return}}},Qn=n=>{const{vertical:e,fixed:t,hideScrollbar:s,scrollableX:r,scrollableY:c,centered:u,scrollButtonsHideMobile:p,classes:m}=n;return ze({root:["root",e&&"vertical"],scroller:["scroller",t&&"fixed",s&&"hideScrollbar",r&&"scrollableX",c&&"scrollableY"],list:["list","flexContainer",e&&"flexContainerVertical",e&&"vertical",u&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Jn,m)},Zn=H("div",{name:"MuiTabs",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${De.scrollButtons}`]:e.scrollButtons},{[`& .${De.scrollButtons}`]:t.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,t.vertical&&e.vertical]}})(Ve(({theme:n})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.scrollButtonsHideMobile,style:{[`& .${De.scrollButtons}`]:{[n.breakpoints.down("sm")]:{display:"none"}}}}]}))),et=H("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.scroller,t.fixed&&e.fixed,t.hideScrollbar&&e.hideScrollbar,t.scrollableX&&e.scrollableX,t.scrollableY&&e.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:n})=>n.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:n})=>n.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:n})=>n.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:n})=>n.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),nt=H("div",{name:"MuiTabs",slot:"List",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.list,e.flexContainer,t.vertical&&e.flexContainerVertical,t.centered&&e.centered]}})({display:"flex",variants:[{props:({ownerState:n})=>n.vertical,style:{flexDirection:"column"}},{props:({ownerState:n})=>n.centered,style:{justifyContent:"center"}}]}),tt=H("span",{name:"MuiTabs",slot:"Indicator"})(Ve(({theme:n})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:n.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(n.vars||n).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(n.vars||n).palette.secondary.main}},{props:({ownerState:e})=>e.vertical,style:{height:"100%",width:2,right:0}}]}))),at=H(Xn)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),en={},ot=i.forwardRef(function(e,t){const s=We({props:e,name:"MuiTabs"}),r=ln(),c=on(),{"aria-label":u,"aria-labelledby":p,action:m,centered:g=!1,children:T,className:I,component:f="div",allowScrollButtonsMobile:w=!1,indicatorColor:F="primary",onChange:P,orientation:y="horizontal",ScrollButtonComponent:me,scrollButtons:L="auto",selectionFollowsFocus:Ie,slots:R={},slotProps:X={},TabIndicatorProps:J={},TabScrollButtonProps:Q={},textColor:he="primary",value:Y,variant:W="standard",visibleScrollbar:Ce=!1,...dn}=s,M=W==="scrollable",B=y==="vertical",Z=B?"scrollTop":"scrollLeft",ve=B?"top":"left",xe=B?"bottom":"right",ye=B?"clientHeight":"clientWidth",ee=B?"height":"width",z={...s,component:f,allowScrollButtonsMobile:w,indicatorColor:F,orientation:y,vertical:B,scrollButtons:L,textColor:he,variant:W,visibleScrollbar:Ce,fixed:!M,hideScrollbar:M&&!Ce,scrollableX:M&&!B,scrollableY:M&&B,centered:g&&!M,scrollButtonsHideMobile:!w},k=Qn(z),bn=Te({elementType:R.StartScrollButtonIcon,externalSlotProps:X.startScrollButtonIcon,ownerState:z}),un=Te({elementType:R.EndScrollButtonIcon,externalSlotProps:X.endScrollButtonIcon,ownerState:z}),[ke,pn]=i.useState(!1),[O,Ne]=i.useState(en),[$e,mn]=i.useState(!1),[je,hn]=i.useState(!1),[Fe,vn]=i.useState(!1),[Oe,xn]=i.useState({overflow:"hidden",scrollbarWidth:0}),_e=new Map,V=i.useRef(null),_=i.useRef(null),K={slots:R,slotProps:{indicator:J,scrollButton:Q,...X}},Ae=()=>{const a=V.current;let o;if(a){const d=a.getBoundingClientRect();o={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollWidth:a.scrollWidth,top:d.top,bottom:d.bottom,left:d.left,right:d.right}}let b;if(a&&Y!==!1){const d=_.current.children;if(d.length>0){const v=d[_e.get(Y)];b=v?v.getBoundingClientRect():null}}return{tabsMeta:o,tabMeta:b}},ne=Me(()=>{const{tabsMeta:a,tabMeta:o}=Ae();let b=0,d;B?(d="top",o&&a&&(b=o.top-a.top+a.scrollTop)):(d=c?"right":"left",o&&a&&(b=(c?-1:1)*(o[d]-a[d]+a.scrollLeft)));const v={[d]:b,[ee]:o?o[ee]:0};if(typeof O[d]!="number"||typeof O[ee]!="number")Ne(v);else{const E=Math.abs(O[d]-v[d]),A=Math.abs(O[ee]-v[ee]);(E>=1||A>=1)&&Ne(v)}}),Be=(a,{animation:o=!0}={})=>{o?An(Z,V.current,a,{duration:r.transitions.duration.standard}):V.current[Z]=a},He=a=>{let o=V.current[Z];B?o+=a:o+=a*(c?-1:1),Be(o)},Xe=()=>{const a=V.current[ye];let o=0;const b=Array.from(_.current.children);for(let d=0;d<b.length;d+=1){const v=b[d];if(o+v[ye]>a){d===0&&(o=a);break}o+=v[ye]}return o},fn=()=>{He(-1*Xe())},gn=()=>{He(Xe())},[Sn,{onChange:Ye,...Tn}]=q("scrollbar",{className:N(k.scrollableX,k.hideScrollbar),elementType:at,shouldForwardComponentProp:!0,externalForwardedProps:K,ownerState:z}),In=i.useCallback(a=>{Ye?.(a),xn({overflow:null,scrollbarWidth:a})},[Ye]),[Ke,qe]=q("scrollButtons",{className:N(k.scrollButtons,Q.className),elementType:Gn,externalForwardedProps:K,ownerState:z,additionalProps:{orientation:y,slots:{StartScrollButtonIcon:R.startScrollButtonIcon||R.StartScrollButtonIcon,EndScrollButtonIcon:R.endScrollButtonIcon||R.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:bn,endScrollButtonIcon:un}}}),Cn=()=>{const a={};a.scrollbarSizeListener=M?x.jsx(Sn,{...Tn,onChange:In}):null;const b=M&&(L==="auto"&&($e||je)||L===!0);return a.scrollButtonStart=b?x.jsx(Ke,{direction:c?"right":"left",onClick:fn,disabled:!$e,...qe}):null,a.scrollButtonEnd=b?x.jsx(Ke,{direction:c?"left":"right",onClick:gn,disabled:!je,...qe}):null,a},Ue=Me(a=>{const{tabsMeta:o,tabMeta:b}=Ae();if(!(!b||!o)){if(b[ve]<o[ve]){const d=o[Z]+(b[ve]-o[ve]);Be(d,{animation:a})}else if(b[xe]>o[xe]){const d=o[Z]+(b[xe]-o[xe]);Be(d,{animation:a})}}}),fe=Me(()=>{M&&L!==!1&&vn(!Fe)});i.useEffect(()=>{const a=rn(()=>{V.current&&ne()});let o;const b=E=>{E.forEach(A=>{A.removedNodes.forEach(te=>{o?.unobserve(te)}),A.addedNodes.forEach(te=>{o?.observe(te)})}),a(),fe()},d=sn(V.current);d.addEventListener("resize",a);let v;return typeof ResizeObserver<"u"&&(o=new ResizeObserver(a),Array.from(_.current.children).forEach(E=>{o.observe(E)})),typeof MutationObserver<"u"&&(v=new MutationObserver(b),v.observe(_.current,{childList:!0})),()=>{a.clear(),d.removeEventListener("resize",a),v?.disconnect(),o?.disconnect()}},[ne,fe]),i.useEffect(()=>{const a=Array.from(_.current.children),o=a.length;if(typeof IntersectionObserver<"u"&&o>0&&M&&L!==!1){const b=a[0],d=a[o-1],v={root:V.current,threshold:.99},E=Pe=>{mn(!Pe[0].isIntersecting)},A=new IntersectionObserver(E,v);A.observe(b);const te=Pe=>{hn(!Pe[0].isIntersecting)},Je=new IntersectionObserver(te,v);return Je.observe(d),()=>{A.disconnect(),Je.disconnect()}}},[M,L,Fe,T?.length]),i.useEffect(()=>{pn(!0)},[]),i.useEffect(()=>{ne()}),i.useEffect(()=>{Ue(en!==O)},[Ue,O]),i.useImperativeHandle(m,()=>({updateIndicator:ne,updateScrollButtons:fe}),[ne,fe]);const[yn,Bn]=q("indicator",{className:N(k.indicator,J.className),elementType:tt,externalForwardedProps:K,ownerState:z,additionalProps:{style:O}}),Ge=x.jsx(yn,{...Bn});let ge=0;const wn=i.Children.map(T,a=>{if(!i.isValidElement(a))return null;const o=a.props.value===void 0?ge:a.props.value;_e.set(o,ge);const b=o===Y;return ge+=1,i.cloneElement(a,{fullWidth:W==="fullWidth",indicator:b&&!ke&&Ge,selected:b,selectionFollowsFocus:Ie,onChange:P,textColor:he,value:o,...ge===1&&Y===!1&&!a.props.tabIndex?{tabIndex:0}:{}})}),Pn=a=>{if(a.altKey||a.shiftKey||a.ctrlKey||a.metaKey)return;const o=_.current,b=Vn(o).activeElement;if(b.getAttribute("role")!=="tab")return;let v=y==="horizontal"?"ArrowLeft":"ArrowUp",E=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&c&&(v="ArrowRight",E="ArrowLeft"),a.key){case v:a.preventDefault(),Se(o,b,Ze);break;case E:a.preventDefault(),Se(o,b,Qe);break;case"Home":a.preventDefault(),Se(o,null,Qe);break;case"End":a.preventDefault(),Se(o,null,Ze);break}},we=Cn(),[Mn,En]=q("root",{ref:t,className:N(k.root,I),elementType:Zn,externalForwardedProps:{...K,...dn,component:f},ownerState:z}),[Dn,Ln]=q("scroller",{ref:V,className:k.scroller,elementType:et,externalForwardedProps:K,ownerState:z,additionalProps:{style:{overflow:Oe.overflow,[B?`margin${c?"Left":"Right"}`:"marginBottom"]:Ce?void 0:-Oe.scrollbarWidth}}}),[Rn,Wn]=q("list",{ref:_,className:N(k.list,k.flexContainer),elementType:nt,externalForwardedProps:K,ownerState:z,getSlotProps:a=>({...a,onKeyDown:o=>{Pn(o),a.onKeyDown?.(o)}})});return x.jsxs(Mn,{...En,children:[we.scrollButtonStart,we.scrollbarSizeListener,x.jsxs(Dn,{...Ln,children:[x.jsx(Rn,{"aria-label":u,"aria-labelledby":p,"aria-orientation":y==="vertical"?"vertical":null,role:"tablist",...Wn,children:wn}),ke&&Ge]}),we.scrollButtonEnd]})}),lt=({children:n,value:e,index:t,orientation:s,paddingY:r,paddingX:c,fullHeight:u,sx:p},m)=>{const g=r||3,T=c||s==="vertical"?3:0;return e===t?l(S,{ref:m,role:"tabpanel",hidden:e!==t,id:`tabpanel-${t}`,paddingY:g,paddingX:T,height:u?"100%":void 0,sx:p,children:n}):null},D=i.forwardRef(lt),pe=({component:n="a",...e})=>l(h,{component:n,onClick:t=>t.preventDefault(),...e});try{pe.displayName="LinkTab",pe.__docgenInfo={description:"",displayName:"LinkTab",props:{component:{defaultValue:{value:"a"},description:"",name:"component",required:!1,type:{name:"ElementType"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const rt=()=>{const[n,e]=i.useState(0);return{handleChange:i.useCallback((s,r)=>{e(r)},[]),value:n}},j=n=>l(ot,{...n});try{j.displayName="Tabs",j.__docgenInfo={description:"",displayName:"Tabs",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"(Partial<TabsSlots> & { StartScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; EndScrollButtonIcon?: ElementType<...>; }) | undefined"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", TabsRootSlotPropsOverrides, TabsOwnerState>; scroller?: SlotProps<"div", TabsScrollerSlotPropsOverrides, TabsOwnerState>; ... 5 more ...; endScrollButtonIcon?: SlotProps<...> | undefined; } | undefined'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const G=(n,{name:e})=>{const t=e==="Disabled",s=e==="Scrollable",{value:r,handleChange:c}=rt(),u=p=>({"aria-controls":`simple-tabpanel-${p}`,id:`simple-tab-${p}`});return l(S,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:$(S,{sx:{maxWidth:s?380:"auto",width:"100%"},children:[l(S,{sx:{borderBottom:1,borderColor:"divider"},children:$(j,{...n,value:r,onChange:c,"aria-label":"basic tabs example",children:[l(h,{label:"Item one",...u(0)}),l(h,{label:"Item two",...u(1)}),l(h,{label:t?"Disabled":"Item three",...u(2),disabled:t}),s&&$(kn,{children:[l(h,{label:"Item four"}),l(h,{label:"Item five"}),l(h,{label:"Item six"}),l(h,{label:"Item seven"})]})]})}),l(D,{value:r,index:0,children:"Item one"}),l(D,{value:r,index:1,children:"Item two"}),l(D,{value:r,index:2,children:"Item three"})]})})},st=(n,{name:e})=>{const[t,s]=i.useState("one");return l(S,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:l(S,{children:$(j,{...n,value:t,onChange:(c,u)=>{s(u)},"aria-label":"wrapped label tabs example",children:[l(h,{value:"one",label:"New arrivals in the longest text of nonfiction that should appear in the next line",wrapped:!0}),l(h,{value:"two",label:"Item two",disabled:e==="Disabled"}),l(h,{value:"three",label:"Item three"})]})})})},it=n=>{const[e,t]=i.useState(0),{palette:s}=ln();return l(S,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:$(S,{sx:{backgroundColor:"background.paper",display:"flex",flexGrow:1,height:224},children:[$(j,{...n,orientation:"vertical",variant:"scrollable",value:e,onChange:(c,u)=>{t(u)},"aria-label":"Vertical tabs example",sx:{borderColor:`${s.divider} !important`,borderRight:1},children:[l(h,{label:"Item one"}),l(h,{label:"Item two"}),l(h,{label:"Item three"}),l(h,{label:"Item four"}),l(h,{label:"Item five"}),l(h,{label:"Item six"}),l(h,{label:"Item seven"})]}),l(D,{value:e,index:0,orientation:"vertical",children:"Item one"}),l(D,{value:e,index:1,orientation:"vertical",children:"Item two"}),l(D,{value:e,index:2,orientation:"vertical",children:"Item three"}),l(D,{value:e,index:3,orientation:"vertical",children:"Item four"}),l(D,{value:e,index:4,orientation:"vertical",children:"Item five"}),l(D,{value:e,index:5,orientation:"vertical",children:"Item six"}),l(D,{value:e,index:6,orientation:"vertical",children:"Item seven"})]})})},cn=(n,{name:e})=>{const t=e==="Icon With Label",[s,r]=i.useState(0);return l(S,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:l(S,{children:$(j,{...n,value:s,onChange:(u,p)=>{r(p)},"aria-label":"icon tabs example",children:[l(h,{icon:l(Ee,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"PhoneIcon",children:l("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})}),"aria-label":"phone",label:t?"RECENTS":""}),l(h,{icon:l(Ee,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"FavoriteIcon"}),"aria-label":"favorite",label:t?"FAVORITES":""}),l(h,{icon:l(Ee,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"PersonPinIcon",children:l("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})}),"aria-label":"person",label:t?"NEARBY":""})]})})})},ct=n=>{const[e,t]=i.useState(0);return l(S,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:l(S,{sx:{width:"100%"},children:l(S,{sx:{borderBottom:1,borderColor:"divider"},children:$(j,{...n,value:e,onChange:(r,c)=>{t(c)},"aria-label":"Nav tabs example",children:[l(pe,{label:"Page One",href:"/drafts"}),l(pe,{label:"Page Two",href:"/trash"}),l(pe,{label:"Page Three",href:"/spam"})]})})})})},ae=G.bind({});ae.args={};const U=G.bind({});U.args={indicatorColor:"secondary",textColor:"primary"};U.argTypes={indicatorColor:{control:{type:"select"},options:["primary","secondary"]},textColor:{control:{type:"select"},options:["primary","secondary"]}};const oe=st.bind({});oe.args={};const le=G.bind({});le.args={};const re=G.bind({});re.args={variant:"fullWidth"};const se=G.bind({});se.args={centered:!0};const ie=G.bind({});ie.args={scrollButtons:"auto",variant:"scrollable"};const ce=it.bind({});ce.args={orientation:"vertical",variant:"scrollable"};const de=cn.bind({});de.args={};const be=cn.bind({});be.args={};const ue=ct.bind({});ue.args={};const vt={component:j,title:"Components/Navigation/Tabs"};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`(args, {
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
}`,...ae.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args, {
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
}`,...U.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`(args, {
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
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`(args, {
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
}`,...le.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`(args, {
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
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`(args, {
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
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`(args, {
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
}`,...ie.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`args => {
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
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`(args, {
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
}`,...de.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`(args, {
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
}`,...be.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`args => {
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
}`,...ue.parameters?.docs?.source}}};const xt=["Basic","Colored","WrappedLabels","Disabled","FullWidth","Centered","Scrollable","Verticale","Icon","IconWithLabel","LinkTab"];export{ae as Basic,se as Centered,U as Colored,le as Disabled,re as FullWidth,de as Icon,be as IconWithLabel,ue as LinkTab,ie as Scrollable,ce as Verticale,oe as WrappedLabels,xt as __namedExportsOrder,vt as default};
