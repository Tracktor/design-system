import{r as m,k as X,l as Y,d as Z,K as S,e as _,j as d,f as oo,s as b,P as uo,m as w,B as mo,a as n,b as I,u as go}from"./iframe-C-kofbB0.js";import{u as yo}from"./useControlled-Dcwo09_0.js";import{C as ho}from"./Collapse-C0wT1NuF.js";import{T as s}from"./Typography-CNHfhalf.js";import{S as no}from"./Stack-BKu2AZBE.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CGaPnW5A.js";const eo=m.createContext({});function Ao(o){return X("MuiAccordion",o)}const V=Y("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),xo=o=>{const{classes:e,square:r,expanded:a,disabled:t,disableGutters:p}=o;return oo({root:["root",!r&&"rounded",a&&"expanded",t&&"disabled",!p&&"gutters"],heading:["heading"],region:["region"]},Ao,e)},So=b(uo,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${V.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(w(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${V.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${V.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),w(({theme:o})=>({variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${V.expanded}`]:{margin:"16px 0"}}}]}))),bo=b("h3",{name:"MuiAccordion",slot:"Heading"})({all:"unset"}),To=b("div",{name:"MuiAccordion",slot:"Region"})({}),fo=m.forwardRef(function(e,r){const a=Z({props:e,name:"MuiAccordion"}),{children:t,className:p,defaultExpanded:u=!1,disabled:g=!1,disableGutters:T=!1,expanded:F,onChange:v,slots:O={},slotProps:q={},TransitionComponent:H,TransitionProps:W,...$}=a,[c,y]=yo({controlled:F,default:u,name:"Accordion",state:"expanded"}),h=m.useCallback(po=>{y(!c),v&&v(po,!c)},[c,v,y]),[A,...z]=m.Children.toArray(t),K=m.useMemo(()=>({expanded:c,disabled:g,disableGutters:T,toggle:h}),[c,g,T,h]),x={...a,disabled:g,disableGutters:T,expanded:c},R=xo(x),J={transition:H,...O},Q={transition:W,...q},i={slots:J,slotProps:Q},[B,ro]=S("root",{elementType:So,externalForwardedProps:{...i,...$},className:_(R.root,p),shouldForwardComponentProp:!0,ownerState:x,ref:r}),[ao,to]=S("heading",{elementType:bo,externalForwardedProps:i,className:R.heading,ownerState:x}),[io,so]=S("transition",{elementType:ho,externalForwardedProps:i,ownerState:x}),[co,lo]=S("region",{elementType:To,externalForwardedProps:i,ownerState:x,className:R.region,additionalProps:{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region"}});return d.jsxs(B,{...ro,children:[d.jsx(ao,{...to,children:d.jsx(eo.Provider,{value:K,children:A})}),d.jsx(io,{in:c,timeout:"auto",...so,children:d.jsx(co,{...lo,children:z})})]})});function Io(o){return X("MuiAccordionDetails",o)}Y("MuiAccordionDetails",["root"]);const Do=o=>{const{classes:e}=o;return oo({root:["root"]},Io,e)},Co=b("div",{name:"MuiAccordionDetails",slot:"Root"})(w(({theme:o})=>({padding:o.spacing(1,2,2)}))),U=m.forwardRef(function(e,r){const a=Z({props:e,name:"MuiAccordionDetails"}),{className:t,...p}=a,u=a,g=Do(u);return d.jsx(Co,{className:_(g.root,t),ref:r,ownerState:u,...p})});function wo(o){return X("MuiAccordionSummary",o)}const f=Y("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Po=o=>{const{classes:e,expanded:r,disabled:a,disableGutters:t}=o;return oo({root:["root",r&&"expanded",a&&"disabled",!t&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!t&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},wo,e)},vo=b(mo,{name:"MuiAccordionSummary",slot:"Root"})(w(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${f.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${f.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${f.expanded}`]:{minHeight:64}}}]}})),Ro=b("span",{name:"MuiAccordionSummary",slot:"Content"})(w(({theme:o})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}}]}))),ko=b("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper"})(w(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}}))),D=m.forwardRef(function(e,r){const a=Z({props:e,name:"MuiAccordionSummary"}),{children:t,className:p,expandIcon:u,focusVisibleClassName:g,onClick:T,slots:F,slotProps:v,...O}=a,{disabled:q=!1,disableGutters:H,expanded:W,toggle:$}=m.useContext(eo),c=i=>{$&&$(i),T&&T(i)},y={...a,expanded:W,disabled:q,disableGutters:H},h=Po(y),A={slots:F,slotProps:v},[z,K]=S("root",{ref:r,shouldForwardComponentProp:!0,className:_(h.root,p),elementType:vo,externalForwardedProps:{...A,...O},ownerState:y,additionalProps:{focusRipple:!1,disableRipple:!0,disabled:q,"aria-expanded":W,focusVisibleClassName:_(h.focusVisible,g)},getSlotProps:i=>({...i,onClick:B=>{i.onClick?.(B),c(B)}})}),[x,R]=S("content",{className:h.content,elementType:Ro,externalForwardedProps:A,ownerState:y}),[J,Q]=S("expandIconWrapper",{className:h.expandIconWrapper,elementType:ko,externalForwardedProps:A,ownerState:y});return d.jsxs(z,{...K,children:[d.jsx(x,{...R,children:t}),u&&d.jsx(J,{...Q,children:u})]})}),l=({children:o,...e})=>n(fo,{...e,children:o});try{l.displayName="Accordion",l.__docgenInfo={description:"",displayName:"Accordion",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AccordionSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<PaperProps, keyof IntrinsicElements>, AccordionRootSlotPropsOverrides, AccordionOwnerState>; heading?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; region?: SlotProps<...> | undefined; } | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const C=()=>{const{palette:o}=go();return n("svg",{width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 128 128",children:n("g",{children:n("path",{d:"m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z",fill:o.text.primary})})})},P=o=>I(no,{spacing:0,alignItems:"stretch",justifyContent:"center",height:"100%",children:[I(l,{...o,children:[n(D,{expandIcon:n(C,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:n(s,{children:"Accordion 1"})}),n(U,{children:n(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),I(l,{...o,children:[n(D,{expandIcon:n(C,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:n(s,{children:"Accordion 2"})}),n(U,{children:n(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(l,{disabled:!0,...o,children:n(D,{expandIcon:n(C,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:n(s,{children:"Disabled Accordion"})})})]}),jo=o=>I(no,{spacing:0,alignItems:"stretch",justifyContent:"center",height:"100%",children:[I(l,{...o,children:[n(D,{expandIcon:n(C,{}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{textAlign:"right"},children:n(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Accordion 1"})}),n(U,{children:n(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),I(l,{...o,children:[n(D,{expandIcon:n(C,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:n(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Accordion 2"})}),n(U,{children:n(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(l,{disabled:!0,...o,children:n(D,{expandIcon:n(C,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:n(s,{variant:"h6",width:"100%",align:"right",sx:{textDecoration:"underline"},children:"Disabled Accordion"})})})]}),k=P.bind({});k.args={};const j=P.bind({});j.args={variant:"outlined"};const L=P.bind({});L.args={square:!0};const M=P.bind({});M.args={elevation:0,square:!0};const N=P.bind({});N.args={disableGutters:!0};const G=P.bind({});G.args={disableGutters:!0,elevation:0,square:!0,sx:{"&:before":{display:"none"}}};const E=jo.bind({});E.args={};const $o={component:l,title:"Components/Surface/Accordion"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...G.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...E.parameters?.docs?.source}}};const Bo=["Basic","Outlined","Square","SquareWithNoElevation","DisableGutters","WithoutDivider","AlignRight"];export{E as AlignRight,k as Basic,N as DisableGutters,j as Outlined,L as Square,M as SquareWithNoElevation,G as WithoutDivider,Bo as __namedExportsOrder,$o as default};
