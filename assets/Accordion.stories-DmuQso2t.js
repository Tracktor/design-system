import{r as u,g as Q,h as Y,d as Z,a0 as b,e as U,s as x,j as c,f as ee,P as ue,m as v,B as me,a as o,b as I,u as ge}from"./iframe-Bx5tGTIY.js";import{u as ye}from"./useControlled-D5zFkG5g.js";import{C as he}from"./Collapse-D6TWh4GK.js";import{T as s}from"./Typography-CH6CDhmO.js";import{S as oe}from"./Stack-D18HZ03X.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-D1FIerEx.js";const ne=u.createContext({});function Ae(e){return Y("MuiAccordion",e)}const _=Q("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),be=e=>{const{classes:n,square:a,expanded:r,disabled:i,disableGutters:l}=e;return ee({root:["root",!a&&"rounded",r&&"expanded",i&&"disabled",!l&&"gutters"],heading:["heading"],region:["region"]},Ae,n)},xe=x(ue,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[{[`& .${_.region}`]:n.region},n.root,!a.square&&n.rounded,!a.disableGutters&&n.gutters]}})(v(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${_.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${_.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),v(({theme:e})=>({variants:[{props:n=>!n.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:n=>!n.disableGutters,style:{[`&.${_.expanded}`]:{margin:"16px 0"}}}]}))),fe=x("h3",{name:"MuiAccordion",slot:"Heading"})({all:"unset"}),Se=x("div",{name:"MuiAccordion",slot:"Region"})({}),Te=u.forwardRef(function(n,a){const r=Z({props:n,name:"MuiAccordion"}),{children:i,className:l,defaultExpanded:p=!1,disabled:m=!1,disableGutters:f=!1,expanded:O,onChange:P,square:G=!1,slots:W={},slotProps:H={},TransitionComponent:B,TransitionProps:$,...z}=r,[t,g]=ye({controlled:O,default:p,name:"Accordion",state:"expanded"}),S=u.useCallback(pe=>{g(!t),P&&P(pe,!t)},[t,P,g]),[R,...J]=u.Children.toArray(i),X=u.useMemo(()=>({expanded:t,disabled:m,disableGutters:f,toggle:S}),[t,m,f,S]),y={...r,square:G,disabled:m,disableGutters:f,expanded:t},k=be(y),K={transition:B,...W},h={transition:$,...H},A={slots:K,slotProps:h},[ae,re]=b("root",{elementType:xe,externalForwardedProps:{...A,...z},className:U(k.root,l),shouldForwardComponentProp:!0,ownerState:y,ref:a,additionalProps:{square:G}}),[te,ie]=b("heading",{elementType:fe,externalForwardedProps:A,className:k.heading,ownerState:y}),[se,ce]=b("transition",{elementType:he,externalForwardedProps:A,ownerState:y}),[de,le]=b("region",{elementType:Se,externalForwardedProps:A,ownerState:y,className:k.region,additionalProps:{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region"}});return c.jsxs(ae,{...re,children:[c.jsx(te,{...ie,children:c.jsx(ne.Provider,{value:X,children:R})}),c.jsx(se,{in:t,timeout:"auto",...ce,children:c.jsx(de,{...le,children:J})})]})});function Ie(e){return Y("MuiAccordionDetails",e)}Q("MuiAccordionDetails",["root"]);const we=e=>{const{classes:n}=e;return ee({root:["root"]},Ie,n)},Ce=x("div",{name:"MuiAccordionDetails",slot:"Root"})(v(({theme:e})=>({padding:e.spacing(1,2,2)}))),F=u.forwardRef(function(n,a){const r=Z({props:n,name:"MuiAccordionDetails"}),{className:i,...l}=r,p=r,m=we(p);return c.jsx(Ce,{className:U(m.root,i),ref:a,ownerState:p,...l})});function ve(e){return Y("MuiAccordionSummary",e)}const T=Q("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),De=e=>{const{classes:n,expanded:a,disabled:r,disableGutters:i}=e;return ee({root:["root",a&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]},ve,n)},Pe=x(me,{name:"MuiAccordionSummary",slot:"Root"})(v(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${T.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${T.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${T.disabled})`]:{cursor:"pointer"},variants:[{props:a=>!a.disableGutters,style:{[`&.${T.expanded}`]:{minHeight:64}}}]}})),Re=x("span",{name:"MuiAccordionSummary",slot:"Content"})(v(({theme:e})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:n=>!n.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{margin:"20px 0"}}}]}))),ke=x("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper"})(v(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{transform:"rotate(180deg)"}}))),w=u.forwardRef(function(n,a){const r=Z({props:n,name:"MuiAccordionSummary"}),{children:i,className:l,expandIcon:p,focusVisibleClassName:m,onClick:f,slots:O,slotProps:P,...G}=r,{disabled:W=!1,disableGutters:H,expanded:B,toggle:$}=u.useContext(ne),z=h=>{$&&$(h),f&&f(h)},t={...r,expanded:B,disabled:W,disableGutters:H},g=De(t),S={slots:O,slotProps:P},[R,J]=b("root",{ref:a,shouldForwardComponentProp:!0,className:U(g.root,l),elementType:Pe,externalForwardedProps:{...S,...G},ownerState:t,additionalProps:{focusRipple:!1,disableRipple:!0,disabled:W,"aria-expanded":B,focusVisibleClassName:U(g.focusVisible,m)},getSlotProps:h=>({...h,onClick:A=>{h.onClick?.(A),z(A)}})}),[X,y]=b("content",{className:g.content,elementType:Re,externalForwardedProps:S,ownerState:t}),[k,K]=b("expandIconWrapper",{className:g.expandIconWrapper,elementType:ke,externalForwardedProps:S,ownerState:t});return c.jsxs(R,{...J,children:[c.jsx(X,{...y,children:i}),p&&c.jsx(k,{...K,children:p})]})}),d=({children:e,...n})=>o(Te,{...n,children:e});try{d.displayName="Accordion",d.__docgenInfo={description:"",displayName:"Accordion",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"NonNullable<ReactNode> & ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AccordionClasses> & Partial<ClassNameMap<never>>)"}},defaultExpanded:{defaultValue:{value:"false"},description:"If `true`, expands the accordion by default.",name:"defaultExpanded",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, it removes the margin between two expanded accordion items and the increase of height.",name:"disableGutters",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"If `true`, expands the accordion, otherwise collapse it.\nSetting this prop enables control over the accordion.",name:"expanded",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback fired when the expand/collapse state is changed.\n@param event The event source of the callback. **Warning**: This is a generic event not a change event.\n@param expanded The `expanded` state of the accordion.",name:"onChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, expanded: boolean) => void)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},TransitionComponent:{defaultValue:null,description:"The component used for the transition.\n[Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.\n@deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionComponent",required:!1,type:{name:"JSXElementConstructor<TransitionProps & { children?: ReactElement<unknown, any>; }>"}},TransitionProps:{defaultValue:null,description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AccordionSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<PaperProps, keyof IntrinsicElements>, AccordionRootSlotPropsOverrides, AccordionOwnerState>; heading?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; region?: SlotProps<...> | undefined; } | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const C=()=>{const{palette:e}=ge();return o("svg",{width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 128 128",children:o("g",{children:o("path",{d:"m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z",fill:e.text.primary})})})},D=e=>I(oe,{spacing:0,alignItems:"stretch",justifyContent:"center",height:"100%",children:[I(d,{...e,children:[o(w,{expandIcon:o(C,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:o(s,{children:"Accordion 1"})}),o(F,{children:o(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),I(d,{...e,children:[o(w,{expandIcon:o(C,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:o(s,{children:"Accordion 2"})}),o(F,{children:o(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),o(d,{disabled:!0,...e,children:o(w,{expandIcon:o(C,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:o(s,{children:"Disabled Accordion"})})})]}),qe=e=>I(oe,{spacing:0,alignItems:"stretch",justifyContent:"center",height:"100%",children:[I(d,{...e,children:[o(w,{expandIcon:o(C,{}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{textAlign:"right"},children:o(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Accordion 1"})}),o(F,{children:o(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),I(d,{...e,children:[o(w,{expandIcon:o(C,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:o(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Accordion 2"})}),o(F,{children:o(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),o(d,{disabled:!0,...e,children:o(w,{expandIcon:o(C,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:o(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Disabled Accordion"})})})]}),q=D.bind({});q.args={};const j=D.bind({});j.args={variant:"outlined"};const E=D.bind({});E.args={square:!0};const L=D.bind({});L.args={elevation:0,square:!0};const N=D.bind({});N.args={disableGutters:!0};const V=D.bind({});V.args={disableGutters:!0,elevation:0,square:!0,sx:{"&:before":{display:"none"}}};const M=qe.bind({});M.args={};const We={component:d,title:"Components/Surface/Accordion"};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...q.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{
      textAlign: "right"
    }}>
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Accordion 1
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Accordion 2
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Disabled Accordion
        </Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...M.parameters?.docs?.source}}};const Be=["Basic","Outlined","Square","SquareWithNoElevation","DisableGutters","WithoutDivider","AlignRight"];export{M as AlignRight,q as Basic,N as DisableGutters,j as Outlined,E as Square,L as SquareWithNoElevation,V as WithoutDivider,Be as __namedExportsOrder,We as default};
