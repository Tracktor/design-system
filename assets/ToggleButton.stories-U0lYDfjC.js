import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{d as n,n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./jsx-runtime-prWBgBgC.js";import{t as o}from"./generateUtilityClass-DUL8zXGJ.js";import{t as s}from"./generateUtilityClasses-DFWpRkIR.js";import{n as c,s as l,t as u}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as d}from"./memoTheme-BGsJ-lK3.js";import{t as f}from"./composeClasses-CbmTWm-W.js";import{t as p}from"./Stack-BIr57r_j.js";import{t as m}from"./capitalize-B_lFlclu.js";import{t as h}from"./ButtonBase-ai95Z7DO.js";import{t as g}from"./createSimplePaletteValueFilter-BrCCnfgo.js";import{t as _}from"./Chip-Be_wopR6.js";import{t as v}from"./getValidReactChildren-CZ4ySNDO.js";function y(e){return o(`MuiToggleButton`,e)}var b=s(`MuiToggleButton`,[`root`,`disabled`,`selected`,`standard`,`primary`,`secondary`,`sizeSmall`,`sizeMedium`,`sizeLarge`,`fullWidth`]),x=e(t()),S=x.createContext({}),C=x.createContext(void 0);function w(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}var T=e(a()),E=e=>{let{classes:t,fullWidth:n,selected:r,disabled:i,size:a,color:o}=e;return f({root:[`root`,r&&`selected`,i&&`disabled`,n&&`fullWidth`,`size${m(a)}`,o]},y,t)},D=c(h,{name:`MuiToggleButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`size${m(n.size)}`]]}})(d(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:`none`,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:`transparent`}},variants:[{props:{color:`standard`},style:{[`&.${b.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(g()).map(([t])=>({props:{color:t},style:{[`&.${b.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:`100%`}},{props:{size:`small`},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),O=x.forwardRef(function(e,t){let{value:r,...i}=x.useContext(S),a=x.useContext(C),o=u({props:l({...i,selected:w(e.value,r)},e),name:`MuiToggleButton`}),{children:s,className:c,color:d=`standard`,disabled:f=!1,disableFocusRipple:p=!1,fullWidth:m=!1,onChange:h,onClick:g,selected:_,size:v=`medium`,value:y,...b}=o,O={...o,color:d,disabled:f,disableFocusRipple:p,fullWidth:m,size:v},k=E(O),A=e=>{g&&(g(e,y),e.defaultPrevented)||h&&h(e,y)},j=a||``;return(0,T.jsx)(D,{className:n(i.className,k.root,c,j),disabled:f,focusRipple:!p,ref:t,onClick:A,onChange:h,value:y,ownerState:O,"aria-pressed":_,...b,children:s})});function k(e){return o(`MuiToggleButtonGroup`,e)}var A=s(`MuiToggleButtonGroup`,[`root`,`selected`,`horizontal`,`vertical`,`disabled`,`grouped`,`groupedHorizontal`,`groupedVertical`,`fullWidth`,`firstButton`,`lastButton`,`middleButton`]),j=e=>{let{classes:t,orientation:n,fullWidth:r,disabled:i}=e;return f({root:[`root`,n,r&&`fullWidth`],grouped:[`grouped`,`grouped${m(n)}`,i&&`disabled`],firstButton:[`firstButton`],lastButton:[`lastButton`],middleButton:[`middleButton`]},k,t)},M=c(`div`,{name:`MuiToggleButtonGroup`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${A.grouped}`]:t.grouped},{[`& .${A.grouped}`]:t[`grouped${m(n.orientation)}`]},{[`& .${A.firstButton}`]:t.firstButton},{[`& .${A.lastButton}`]:t.lastButton},{[`& .${A.middleButton}`]:t.middleButton},t.root,n.orientation===`vertical`&&t.vertical,n.fullWidth&&t.fullWidth]}})(d(({theme:e})=>({display:`inline-flex`,borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:`vertical`},style:{flexDirection:`column`,[`& .${A.grouped}`]:{[`&.${A.selected} + .${A.grouped}.${A.selected}`]:{borderTop:0,marginTop:0}},[`& .${A.firstButton},& .${A.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${A.lastButton},& .${A.middleButton}`]:{marginTop:-1,borderTop:`1px solid transparent`,borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${A.lastButton}.${b.disabled},& .${A.middleButton}.${b.disabled}`]:{borderTop:`1px solid transparent`}}},{props:{fullWidth:!0},style:{width:`100%`}},{props:{orientation:`horizontal`},style:{[`& .${A.grouped}`]:{[`&.${A.selected} + .${A.grouped}.${A.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${A.firstButton},& .${A.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${A.lastButton},& .${A.middleButton}`]:{marginLeft:-1,borderLeft:`1px solid transparent`,borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${A.lastButton}.${b.disabled},& .${A.middleButton}.${b.disabled}`]:{borderLeft:`1px solid transparent`}}}]}))),N=x.forwardRef(function(e,t){let r=u({props:e,name:`MuiToggleButtonGroup`}),{children:i,className:a,color:o=`standard`,disabled:s=!1,exclusive:c=!1,fullWidth:l=!1,onChange:d,orientation:f=`horizontal`,size:p=`medium`,value:m,...h}=r,g={...r,disabled:s,fullWidth:l,orientation:f,size:p},_=j(g),y=x.useCallback((e,t)=>{if(!d)return;let n=m&&m.indexOf(t),r;m&&n>=0?(r=m.slice(),r.splice(n,1)):r=m?m.concat(t):[t],d(e,r)},[d,m]),b=x.useCallback((e,t)=>{d&&d(e,m===t?null:t)},[d,m]),w=x.useMemo(()=>({className:_.grouped,onChange:c?b:y,value:m,size:p,fullWidth:l,color:o,disabled:s}),[_.grouped,c,b,y,m,p,l,o,s]),E=v(i),D=E.length,O=e=>{let t=e===0,n=e===D-1;return t&&n?``:t?_.firstButton:n?_.lastButton:_.middleButton};return(0,T.jsx)(M,{role:`group`,className:n(_.root,a),ref:t,ownerState:g,...h,children:(0,T.jsx)(S.Provider,{value:w,children:E.map((e,t)=>(0,T.jsx)(C.Provider,{value:O(t),children:e},t))})})}),P=e=>r(O,{...e});try{P.displayName=`ToggleButton`,P.__docgenInfo={description:``,displayName:`ToggleButton`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var F=e=>{let[t,n]=(0,x.useState)(`b`);return r(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(N,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,exclusive:!0,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,color:`secondary`,children:`is`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]})})},I=e=>{let[t,n]=(0,x.useState)(()=>[`a`,`c`]);return r(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(N,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,color:`secondary`,children:`is`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]})})},L=e=>{let[t,n]=(0,x.useState)(()=>[`a`]);return r(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(N,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[i(P,{...e,value:`a`,color:`primary`,children:[`List `,r(_,{label:`2`,size:`small`,variant:`rounded`,color:`primary`,sx:{marginLeft:1}})]}),r(P,{...e,value:`b`,color:`secondary`,children:`is`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]})})},R=e=>{let[t,n]=(0,x.useState)(()=>[`a`,`b`]);return r(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(N,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,orientation:`vertical`,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,children:`is`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]})})},z=e=>{let[t,n]=(0,x.useState)(()=>[`a`,`b`]),a=(e,t)=>{n(t)};return i(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[i(N,{value:t,onChange:a,"aria-label":`Tracktor`,orientation:`vertical`,size:`small`,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,children:`small`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]}),i(N,{value:t,onChange:a,"aria-label":`Tracktor`,orientation:`vertical`,size:`medium`,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,children:`medium`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]}),i(N,{value:t,onChange:a,"aria-label":`Tracktor`,orientation:`vertical`,size:`large`,children:[r(P,{...e,value:`a`,color:`primary`,children:`Tracktor`}),r(P,{...e,value:`b`,children:`large`}),r(P,{...e,value:`c`,color:`error`,children:`awesome`})]})]})},B=F.bind({});B.args={};var V=I.bind({});V.args={};var H=L.bind({});H.args={};var U=R.bind({});U.args={};var W=z.bind({});W.args={};var G={component:P,title:`Components/Inputs/ToggleButton`};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>("b");
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" exclusive>
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "c"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor">
        <ToggleButton {...args} value="a" color="primary">
          List <Chip label="2" size="small" variant="rounded" color="primary" sx={{
          marginLeft: 1
        }} />
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "b"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "b"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="small">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          small
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="medium">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          medium
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="large">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          large
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...W.parameters?.docs?.source}}};var K=[`ExclusiveSelection`,`MultipleSelection`,`WithChip`,`Vertical`,`Sizes`];export{B as ExclusiveSelection,V as MultipleSelection,W as Sizes,U as Vertical,H as WithChip,K as __namedExportsOrder,G as default};