import{r as a,a as i,b as M}from"./iframe-Cwcn5fu0.js";import{T as I}from"./TextField-BU9ruc2I.js";import{S as k}from"./Stack-BamRrp-L.js";import"./preload-helper-D9Z9MdNV.js";import"./Select-CjySmD9U.js";import"./Menu-DhLdW1Gm.js";import"./useSlotProps-CSA7xBHw.js";import"./Popover-BeDRZ7xG.js";import"./ownerWindow-eIaZ3KVy.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Ds6LjV6t.js";import"./Modal-DEfr1HVL.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Zw7wi7J7.js";import"./Backdrop-BWOl4Uh_.js";import"./Fade-nHKugCem.js";import"./MenuList-CSvrGhXJ.js";import"./List-Bwxrl3I3.js";import"./FormControl-yhXy-hpq.js";import"./useFormControl-DLubT6Mz.js";import"./isMuiElement-BYLlaTzE.js";import"./useControlled-DQpJJ7e6.js";import"./formControlState-Dq1zat_P.js";import"./TextareaAutosize-ZDJMsJu9.js";import"./InputLabel-DYoPvQSG.js";import"./FormLabel-DaoQ9xU9.js";import"./useThemeProps-CCX-sFEA.js";const P=(n,e,c,r,d=0)=>{if(!n)return null;const l=window.getComputedStyle(n),m=`${l.fontWeight} ${l.fontSize} ${l.fontFamily}`,s=document.createElement("canvas").getContext("2d");if(!s)return null;s.font=m;const t=e?.toString()||c?.toString()||r?.toString()||" ",f=s.measureText(t).width,p=parseFloat(l.paddingLeft),g=parseFloat(l.paddingRight);return f+p+g+d},u=a.forwardRef(({sx:n,...e},c)=>{const r=a.useRef(null),[d,l]=a.useState(null),m=a.useRef(void 0),{size:z}=e,s=z==="tiny",t=s?27:50,f=e?.slotProps?.input,p=!!f?.startAdornment||!!e?.InputProps?.startAdornment,g=!!f?.endAdornment||!!e?.InputProps?.endAdornment,A=(p?t:0)+(g?t:0),b=a.useCallback(()=>{const o=P(r.current,e.value,e.defaultValue,e.placeholder,A);o!==null&&l(o)},[e.value,e.defaultValue,e.placeholder,A]),F=o=>{e.onFocus?.(o);const S=r.current;if(!S)return;const C=S.value.length;requestAnimationFrame(()=>{S.setSelectionRange(C,C)})};return a.useEffect(()=>{if(!r.current)return;const o=e.value?.toString(),S=m.current;o!==S&&(b(),m.current=o)},[b,e.value?.toString]),i(I,{ref:c,inputRef:r,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...g&&{paddingRight:0},...p&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:s&&p?"5px":void 0,paddingRight:s&&g?"5px":void 0,width:d?`${d}px`:"auto"},...n},...e,onFocus:F})});try{u.displayName="TextFieldAutosize",u.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:"TextFieldAutosize",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TextFieldSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, {}, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined"}}}}}catch{}const T=n=>{const[e,c]=a.useState("Tiny text rendered"),[r,d]=a.useState("xSmall text rendered"),[l,m]=a.useState("Small field value rendered"),[z,s]=a.useState("Medium sized input rendered");return M(k,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",height:"100%",children:[i(u,{label:"Tiny",size:"tiny",value:e,onChange:t=>c(t.target.value),...n}),i(u,{label:"xSmall",size:"xSmall",value:r,onChange:t=>d(t.target.value),...n}),i(u,{label:"Small",size:"small",value:l,onChange:t=>m(t.target.value),...n}),i(u,{label:"Medium",size:"medium",value:z,onChange:t=>s(t.target.value),...n})]})},x=T.bind({});x.args={variant:"outlined"};const h=T.bind({});h.args={InputProps:{endAdornment:i("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const v=T.bind({});v.args={InputProps:{startAdornment:i("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const y=T.bind({});y.args={InputProps:{endAdornment:i("span",{style:{backgroundColor:"blue"},children:".00"}),startAdornment:i("span",{style:{backgroundColor:"red"},children:"USD"})},variant:"outlined"};const se={component:u,title:"Components/Inputs/TextFieldAutosize"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...y.parameters?.docs?.source}}};const ie=["Autosize","AutosizeEndAdornment","AutosizeStartAdornment","AutosizeBothAdornments"];export{x as Autosize,y as AutosizeBothAdornments,h as AutosizeEndAdornment,v as AutosizeStartAdornment,ie as __namedExportsOrder,se as default};
