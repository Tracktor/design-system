import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{d as n,n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./jsx-runtime-prWBgBgC.js";import{n as o}from"./GlobalStyles-DXlWX7xR.js";import{t as s}from"./generateUtilityClass-DUL8zXGJ.js";import{t as c}from"./generateUtilityClasses-DFWpRkIR.js";import{n as l,t as u}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as d}from"./memoTheme-BGsJ-lK3.js";import{t as f}from"./composeClasses-CbmTWm-W.js";import{t as p}from"./Stack-BIr57r_j.js";import{t as m}from"./useControlled--5IPBmmp.js";import{t as h}from"./ButtonBase-ai95Z7DO.js";import{t as g}from"./useSlot-BpysTuU-.js";import{t as _}from"./Collapse-DPLi2b3B.js";import{t as v}from"./Paper-Apd769t-.js";import{t as y}from"./Typography-BNYwlYGw.js";var b=e(t()),x=b.createContext({});function S(e){return s(`MuiAccordion`,e)}var C=c(`MuiAccordion`,[`root`,`heading`,`rounded`,`expanded`,`disabled`,`gutters`,`region`]),w=e(a()),T=e=>{let{classes:t,square:n,expanded:r,disabled:i,disableGutters:a}=e;return f({root:[`root`,!n&&`rounded`,r&&`expanded`,i&&`disabled`,!a&&`gutters`],heading:[`heading`],region:[`region`]},S,t)},E=l(v,{name:`MuiAccordion`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${C.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})(d(({theme:e})=>{let t={duration:e.transitions.duration.shortest};return{position:`relative`,transition:e.transitions.create([`margin`],t),overflowAnchor:`none`,"&::before":{position:`absolute`,left:0,top:-1,right:0,height:1,content:`""`,opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create([`opacity`,`background-color`],t)},"&:first-of-type":{"&::before":{display:`none`}},[`&.${C.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:`none`}}},[`&.${C.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),d(({theme:e})=>({variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${C.expanded}`]:{margin:`16px 0`}}}]}))),D=l(`h3`,{name:`MuiAccordion`,slot:`Heading`})({all:`unset`}),O=l(`div`,{name:`MuiAccordion`,slot:`Region`})({}),k=b.forwardRef(function(e,t){let r=u({props:e,name:`MuiAccordion`}),{children:i,className:a,defaultExpanded:o=!1,disabled:s=!1,disableGutters:c=!1,expanded:l,onChange:d,slots:f={},slotProps:p={},TransitionComponent:h,TransitionProps:v,...y}=r,[S,C]=m({controlled:l,default:o,name:`Accordion`,state:`expanded`}),k=b.useCallback(e=>{C(!S),d&&d(e,!S)},[S,d,C]),[A,...j]=b.Children.toArray(i),M=b.useMemo(()=>({expanded:S,disabled:s,disableGutters:c,toggle:k}),[S,s,c,k]),N={...r,disabled:s,disableGutters:c,expanded:S},P=T(N),F={slots:{transition:h,...f},slotProps:{transition:v,...p}},[I,L]=g(`root`,{elementType:E,externalForwardedProps:{...F,...y},className:n(P.root,a),shouldForwardComponentProp:!0,ownerState:N,ref:t}),[R,z]=g(`heading`,{elementType:D,externalForwardedProps:F,className:P.heading,ownerState:N}),[B,V]=g(`transition`,{elementType:_,externalForwardedProps:F,ownerState:N}),[H,U]=g(`region`,{elementType:O,externalForwardedProps:F,ownerState:N,className:P.region,additionalProps:{"aria-labelledby":A.props.id,id:A.props[`aria-controls`],role:`region`}});return(0,w.jsxs)(I,{...L,children:[(0,w.jsx)(R,{...z,children:(0,w.jsx)(x.Provider,{value:M,children:A})}),(0,w.jsx)(B,{in:S,timeout:`auto`,...V,children:(0,w.jsx)(H,{...U,children:j})})]})});function A(e){return s(`MuiAccordionDetails`,e)}c(`MuiAccordionDetails`,[`root`]);var j=e=>{let{classes:t}=e;return f({root:[`root`]},A,t)},M=l(`div`,{name:`MuiAccordionDetails`,slot:`Root`})(d(({theme:e})=>({padding:e.spacing(1,2,2)}))),N=b.forwardRef(function(e,t){let r=u({props:e,name:`MuiAccordionDetails`}),{className:i,...a}=r,o=r;return(0,w.jsx)(M,{className:n(j(o).root,i),ref:t,ownerState:o,...a})});function P(e){return s(`MuiAccordionSummary`,e)}var F=c(`MuiAccordionSummary`,[`root`,`expanded`,`focusVisible`,`disabled`,`gutters`,`contentGutters`,`content`,`expandIconWrapper`]),I=e=>{let{classes:t,expanded:n,disabled:r,disableGutters:i}=e;return f({root:[`root`,n&&`expanded`,r&&`disabled`,!i&&`gutters`],focusVisible:[`focusVisible`],content:[`content`,n&&`expanded`,!i&&`contentGutters`],expandIconWrapper:[`expandIconWrapper`,n&&`expanded`]},P,t)},L=l(h,{name:`MuiAccordionSummary`,slot:`Root`})(d(({theme:e})=>{let t={duration:e.transitions.duration.shortest};return{display:`flex`,width:`100%`,minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create([`min-height`,`background-color`],t),[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${F.disabled})`]:{cursor:`pointer`},variants:[{props:e=>!e.disableGutters,style:{[`&.${F.expanded}`]:{minHeight:64}}}]}})),R=l(`span`,{name:`MuiAccordionSummary`,slot:`Content`})(d(({theme:e})=>({display:`flex`,textAlign:`start`,flexGrow:1,margin:`12px 0`,variants:[{props:e=>!e.disableGutters,style:{transition:e.transitions.create([`margin`],{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{margin:`20px 0`}}}]}))),z=l(`span`,{name:`MuiAccordionSummary`,slot:`ExpandIconWrapper`})(d(({theme:e})=>({display:`flex`,color:(e.vars||e).palette.action.active,transform:`rotate(0deg)`,transition:e.transitions.create(`transform`,{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{transform:`rotate(180deg)`}}))),B=b.forwardRef(function(e,t){let r=u({props:e,name:`MuiAccordionSummary`}),{children:i,className:a,expandIcon:o,focusVisibleClassName:s,onClick:c,slots:l,slotProps:d,...f}=r,{disabled:p=!1,disableGutters:m,expanded:h,toggle:_}=b.useContext(x),v=e=>{_&&_(e),c&&c(e)},y={...r,expanded:h,disabled:p,disableGutters:m},S=I(y),C={slots:l,slotProps:d},[T,E]=g(`root`,{ref:t,shouldForwardComponentProp:!0,className:n(S.root,a),elementType:L,externalForwardedProps:{...C,...f},ownerState:y,additionalProps:{focusRipple:!1,disableRipple:!0,disabled:p,"aria-expanded":h,focusVisibleClassName:n(S.focusVisible,s)},getSlotProps:e=>({...e,onClick:t=>{e.onClick?.(t),v(t)}})}),[D,O]=g(`content`,{className:S.content,elementType:R,externalForwardedProps:C,ownerState:y}),[k,A]=g(`expandIconWrapper`,{className:S.expandIconWrapper,elementType:z,externalForwardedProps:C,ownerState:y});return(0,w.jsxs)(T,{...E,children:[(0,w.jsx)(D,{...O,children:i}),o&&(0,w.jsx)(k,{...A,children:o})]})}),V=({children:e,...t})=>r(k,{...t,children:e});try{V.displayName=`Accordion`,V.__docgenInfo={description:``,displayName:`Accordion`,props:{slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<AccordionSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<PaperProps, keyof IntrinsicElements>, AccordionRootSlotPropsOverrides, AccordionOwnerState>; heading?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; region?: SlotProps<...> | undefined; } | undefined`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var H=()=>{let{palette:e}=o();return r(`svg`,{width:`20`,height:`20`,x:`0`,y:`0`,viewBox:`0 0 128 128`,children:r(`g`,{children:r(`path`,{d:`m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z`,fill:e.text.primary})})})},U=e=>i(p,{spacing:0,alignItems:`stretch`,justifyContent:`center`,height:`100%`,children:[i(V,{...e,children:[r(B,{expandIcon:r(H,{}),"aria-controls":`panel1a-content`,id:`panel1a-header`,children:r(y,{children:`Accordion 1`})}),r(N,{children:r(y,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),i(V,{...e,children:[r(B,{expandIcon:r(H,{}),"aria-controls":`panel2a-content`,id:`panel2a-header`,children:r(y,{children:`Accordion 2`})}),r(N,{children:r(y,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),r(V,{disabled:!0,...e,children:r(B,{expandIcon:r(H,{}),"aria-controls":`panel3a-content`,id:`panel3a-header`,children:r(y,{children:`Disabled Accordion`})})})]}),W=e=>i(p,{spacing:0,alignItems:`stretch`,justifyContent:`center`,height:`100%`,children:[i(V,{...e,children:[r(B,{expandIcon:r(H,{}),"aria-controls":`panel1a-content`,id:`panel1a-header`,sx:{textAlign:`right`},children:r(y,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Accordion 1`})}),r(N,{children:r(y,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),i(V,{...e,children:[r(B,{expandIcon:r(H,{}),"aria-controls":`panel2a-content`,id:`panel2a-header`,children:r(y,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Accordion 2`})}),r(N,{children:r(y,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),r(V,{disabled:!0,...e,children:r(B,{expandIcon:r(H,{}),"aria-controls":`panel3a-content`,id:`panel3a-header`,children:r(y,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Disabled Accordion`})})})]}),G=U.bind({});G.args={};var K=U.bind({});K.args={variant:`outlined`};var q=U.bind({});q.args={square:!0};var J=U.bind({});J.args={elevation:0,square:!0};var Y=U.bind({});Y.args={disableGutters:!0};var X=U.bind({});X.args={disableGutters:!0,elevation:0,square:!0,sx:{"&:before":{display:`none`}}};var Z=W.bind({});Z.args={};var Q={component:V,title:`Components/Surface/Accordion`};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
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
  </Stack>`,...Z.parameters?.docs?.source}}};var $=[`Basic`,`Outlined`,`Square`,`SquareWithNoElevation`,`DisableGutters`,`WithoutDivider`,`AlignRight`];export{Z as AlignRight,G as Basic,Y as DisableGutters,K as Outlined,q as Square,J as SquareWithNoElevation,X as WithoutDivider,$ as __namedExportsOrder,Q as default};