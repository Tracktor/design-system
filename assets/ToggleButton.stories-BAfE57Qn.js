import{g as P,h as H,r as u,ak as K,d as U,j as E,s as D,e as F,X as W,f as q,B as Q,m as X,Y as Z,a as o,b as p}from"./iframe-CDkEQz8F.js";import{g as ee}from"./getValidReactChildren-wTEw_lRO.js";import{S as A}from"./Stack-BknGZ7B2.js";import{C as te}from"./Chip-r2ejW9Q8.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-BmOcJ6W1.js";function oe(e){return H("MuiToggleButton",e)}const B=P("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Y=u.createContext({}),J=u.createContext(void 0);function ne(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.includes(e):e===t}const re=e=>{const{classes:t,fullWidth:r,selected:s,disabled:c,size:l,color:f}=e,v={root:["root",s&&"selected",c&&"disabled",r&&"fullWidth",`size${W(l)}`,f]};return q(v,oe,t)},ae=D(Q,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`size${W(r.size)}`]]}})(X(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${B.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${B.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(Z()).map(([t])=>({props:{color:t},style:{[`&.${B.selected}`]:{color:(e.vars||e).palette[t].main,backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),le=u.forwardRef(function(t,r){const{value:s,...c}=u.useContext(Y),l=u.useContext(J),f=K({...c,selected:ne(t.value,s)},t),v=U({props:f,name:"MuiToggleButton"}),{children:M,className:C,color:m="standard",disabled:_=!1,disableFocusRipple:b=!1,fullWidth:g=!1,onChange:k,onClick:x,selected:T,size:L="medium",value:y,...I}=v,$={...v,color:m,disabled:_,disableFocusRipple:b,fullWidth:g,size:L},O=re($),N=i=>{x&&(x(i,y),i.defaultPrevented)||k&&k(i,y)},d=l||"";return E.jsx(ae,{className:F(c.className,O.root,C,d),disabled:_,focusRipple:!b,ref:r,onClick:N,onChange:k,value:y,ownerState:$,"aria-pressed":T,...I,children:M})});function se(e){return H("MuiToggleButtonGroup",e)}const n=P("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),ie=e=>{const{classes:t,orientation:r,fullWidth:s,disabled:c}=e,l={root:["root",r,s&&"fullWidth"],grouped:["grouped",`grouped${W(r)}`,c&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return q(l,se,t)},ue=D("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${n.grouped}`]:t.grouped},{[`& .${n.grouped}`]:t[`grouped${W(r.orientation)}`]},{[`& .${n.firstButton}`]:t.firstButton},{[`& .${n.lastButton}`]:t.lastButton},{[`& .${n.middleButton}`]:t.middleButton},t.root,r.orientation==="vertical"&&t.vertical,r.fullWidth&&t.fullWidth]}})(X(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${n.grouped}`]:{[`&.${n.selected} + .${n.grouped}.${n.selected}`]:{borderTop:0,marginTop:0}},[`& .${n.firstButton},& .${n.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${n.lastButton},& .${n.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${n.lastButton}.${B.disabled},& .${n.middleButton}.${B.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${n.grouped}`]:{[`&.${n.selected} + .${n.grouped}.${n.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${n.firstButton},& .${n.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${n.lastButton},& .${n.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${n.lastButton}.${B.disabled},& .${n.middleButton}.${B.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),h=u.forwardRef(function(t,r){const s=U({props:t,name:"MuiToggleButtonGroup"}),{children:c,className:l,color:f="standard",disabled:v=!1,exclusive:M=!1,fullWidth:C=!1,onChange:m,orientation:_="horizontal",size:b="medium",value:g,...k}=s,x={...s,disabled:v,fullWidth:C,orientation:_,size:b},T=ie(x),L=u.useCallback((d,i)=>{if(!m)return;const w=g&&g.indexOf(i);let j;g&&w>=0?(j=g.slice(),j.splice(w,1)):j=g?g.concat(i):[i],m(d,j)},[m,g]),y=u.useCallback((d,i)=>{m&&m(d,g===i?null:i)},[m,g]),I=u.useMemo(()=>({className:T.grouped,onChange:M?y:L,value:g,size:b,fullWidth:C,color:f,disabled:v}),[T.grouped,M,y,L,g,b,C,f,v]),$=ee(c),O=$.length,N=d=>{const i=d===0,w=d===O-1;return i&&w?"":i?T.firstButton:w?T.lastButton:T.middleButton};return E.jsx(ue,{role:"group",className:F(T.root,l),ref:r,ownerState:x,...k,children:E.jsx(Y.Provider,{value:I,children:$.map((d,i)=>E.jsx(J.Provider,{value:N(i),children:d},i))})})}),a=e=>o(le,{...e});try{a.displayName="ToggleButton",a.__docgenInfo={description:"",displayName:"ToggleButton",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const ce=e=>{const[t,r]=u.useState("b");return o(A,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:p(h,{value:t,onChange:(c,l)=>{r(l)},"aria-label":"Tracktor",exclusive:!0,children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",color:"secondary",children:"is"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]})})},ge=e=>{const[t,r]=u.useState(()=>["a","c"]);return o(A,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:p(h,{value:t,onChange:(c,l)=>{r(l)},"aria-label":"Tracktor",children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",color:"secondary",children:"is"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]})})},de=e=>{const[t,r]=u.useState(()=>["a"]);return o(A,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:p(h,{value:t,onChange:(c,l)=>{r(l)},"aria-label":"Tracktor",children:[p(a,{...e,value:"a",color:"primary",children:["List ",o(te,{label:"2",size:"small",variant:"rounded",color:"primary",sx:{marginLeft:1}})]}),o(a,{...e,value:"b",color:"secondary",children:"is"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]})})},pe=e=>{const[t,r]=u.useState(()=>["a","b"]);return o(A,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:p(h,{value:t,onChange:(c,l)=>{r(l)},"aria-label":"Tracktor",orientation:"vertical",children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",children:"is"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]})})},ve=e=>{const[t,r]=u.useState(()=>["a","b"]),s=(c,l)=>{r(l)};return p(A,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[p(h,{value:t,onChange:s,"aria-label":"Tracktor",orientation:"vertical",size:"small",children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",children:"small"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]}),p(h,{value:t,onChange:s,"aria-label":"Tracktor",orientation:"vertical",size:"medium",children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",children:"medium"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]}),p(h,{value:t,onChange:s,"aria-label":"Tracktor",orientation:"vertical",size:"large",children:[o(a,{...e,value:"a",color:"primary",children:"Tracktor"}),o(a,{...e,value:"b",children:"large"}),o(a,{...e,value:"c",color:"error",children:"awesome"})]})]})},S=ce.bind({});S.args={};const V=ge.bind({});V.args={};const R=de.bind({});R.args={};const z=pe.bind({});z.args={};const G=ve.bind({});G.args={};const ye={component:a,title:"Components/Inputs/ToggleButton"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
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
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
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
}`,...G.parameters?.docs?.source}}};const Ce=["ExclusiveSelection","MultipleSelection","WithChip","Vertical","Sizes"];export{S as ExclusiveSelection,V as MultipleSelection,G as Sizes,z as Vertical,R as WithChip,Ce as __namedExportsOrder,ye as default};
