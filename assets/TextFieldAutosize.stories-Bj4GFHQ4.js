import{r as l,a as s,b as k}from"./iframe-B1YTgcM9.js";import{T as P}from"./TextField-D2TbBT8V.js";import{S as W}from"./Stack-mn-RzWqQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Select-BedQj4TJ.js";import"./Menu-B7JO94zg.js";import"./useSlotProps-k8hPbF9G.js";import"./Popover-BJoq8Diq.js";import"./ownerWindow-DqDdw606.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BM5R2wp7.js";import"./Modal-CTfN2Gzy.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DMxn2nxb.js";import"./Backdrop-DAtUssHj.js";import"./Fade-DyUnM9nl.js";import"./MenuList-CmVVhHDF.js";import"./List-DzwgOI7g.js";import"./FormControl-B2AJTphV.js";import"./useFormControl-BBPma7iZ.js";import"./isMuiElement-B7vDEp_A.js";import"./useControlled-HSe2DK5l.js";import"./formControlState-Dq1zat_P.js";import"./TextareaAutosize-Bl5CnvJ2.js";import"./InputLabel-CXPaz0Qg.js";import"./FormLabel-lP3hjmPS.js";import"./useThemeProps-DyK-jb32.js";const E=(n,o,e,m,i=0)=>{if(!n)return null;const a=window.getComputedStyle(n),c=`${a.fontWeight} ${a.fontSize} ${a.fontFamily}`,u=document.createElement("canvas").getContext("2d");if(!u)return null;u.font=c;const t=o?.toString()||e?.toString()||m?.toString()||" ",f=u.measureText(t).width,A=parseFloat(a.paddingLeft),S=parseFloat(a.paddingRight);return f+A+S+i},d=l.forwardRef(({sx:n,maxWidth:o,...e},m)=>{const i=l.useRef(null),[a,c]=l.useState(null),g=l.useRef(void 0),{size:u}=e,t=u==="tiny",f=t?27:50,A=e?.slotProps?.input,S=!!A?.startAdornment||!!e?.InputProps?.startAdornment,b=!!A?.endAdornment||!!e?.InputProps?.endAdornment,C=(S?f:0)+(b?f:0),F=l.useCallback(()=>{const r=E(i.current,e.value,e.defaultValue,e.placeholder,C);r!==null&&c(o?Math.min(r,o):r)},[e.value,e.defaultValue,e.placeholder,C,o]),I=r=>{e.onFocus?.(r);const p=i.current;if(!p)return;const M=p.value.length;requestAnimationFrame(()=>{p.setSelectionRange(M,M)})};return l.useEffect(()=>{if(!i.current)return;const r=e.value?.toString(),p=g.current;r!==p&&(F(),g.current=r)},[F,e.value?.toString]),s(P,{ref:m,inputRef:i,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...b&&{paddingRight:0},...S&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:t&&S?"5px":void 0,paddingRight:t&&b?"5px":void 0,width:a?`${a}px`:"auto"},...n},...e,onFocus:I})});try{d.displayName="TextFieldAutosize",d.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:"TextFieldAutosize",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TextFieldSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, {}, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const T=n=>{const[o,e]=l.useState("Tiny text rendered"),[m,i]=l.useState("xSmall text rendered"),[a,c]=l.useState("Small field value rendered"),[g,u]=l.useState("Medium sized input rendered");return k(W,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",height:"100%",children:[s(d,{label:"Tiny",size:"tiny",value:o,onChange:t=>e(t.target.value),...n}),s(d,{label:"xSmall",size:"xSmall",value:m,onChange:t=>i(t.target.value),...n}),s(d,{label:"Small",size:"small",value:a,onChange:t=>c(t.target.value),...n}),s(d,{label:"Medium",size:"medium",value:g,onChange:t=>u(t.target.value),...n})]})},x=T.bind({});x.args={variant:"outlined"};const h=T.bind({});h.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const v=T.bind({});v.args={InputProps:{startAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const y=T.bind({});y.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:".00"}),startAdornment:s("span",{style:{backgroundColor:"red"},children:"USD"})},variant:"outlined"};const z=T.bind({});z.args={maxWidth:150,variant:"outlined"};const re={component:d,title:"Components/Inputs/TextFieldAutosize"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...z.parameters?.docs?.source}}};const oe=["Autosize","AutosizeEndAdornment","AutosizeStartAdornment","AutosizeBothAdornments","AutosizeWithMaxWidth"];export{x as Autosize,y as AutosizeBothAdornments,h as AutosizeEndAdornment,v as AutosizeStartAdornment,z as AutosizeWithMaxWidth,oe as __namedExportsOrder,re as default};
