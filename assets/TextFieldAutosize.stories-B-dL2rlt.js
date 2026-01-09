import{r as l,a as s,b as P}from"./iframe-DDIA12wO.js";import{T as j}from"./TextField-CBhADXNs.js";import{S as E}from"./Stack-37KHzGwv.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-BEJE77US.js";import"./Menu-Dlrmcq0T.js";import"./useSlotProps-C1fuIq9p.js";import"./Popover-t9et9W0u.js";import"./ownerWindow-DgXixBf8.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CmeXxHqd.js";import"./Modal-wtm-3aQK.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-15hp5EXA.js";import"./Backdrop-D8xi7nl7.js";import"./Fade-CWL8DcV3.js";import"./MenuList-DHarDM1G.js";import"./List-jSZ15tS3.js";import"./FormControl-C3TF4Ehy.js";import"./useFormControl-C75M6SCX.js";import"./isMuiElement-CiicauX4.js";import"./useControlled-BY01H-g2.js";import"./formControlState-Dq1zat_P.js";import"./TextareaAutosize-CInOgQGv.js";import"./InputLabel-BQv1r_HV.js";import"./FormLabel-GLwly6RE.js";import"./useThemeProps-1bVNWKZu.js";const _=(a,m,c,e,S=0)=>{if(!a)return null;const t=window.getComputedStyle(a),g=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,i=document.createElement("canvas").getContext("2d");if(!i)return null;i.font=g;const n=m?.toString()||c?.toString()||e?.toString()||" ",p=i.measureText(n).width,b=parseFloat(t.paddingLeft),C=parseFloat(t.paddingRight);return p+b+C+S},u=l.forwardRef(({sx:a,maxWidth:m,minWidth:c,...e},S)=>{const t=l.useRef(null),[g,f]=l.useState(null),i=l.useRef(void 0),{size:n}=e,p=n==="tiny",b=p?27:50,C=e?.slotProps?.input,M=!!C?.startAdornment||!!e?.InputProps?.startAdornment,F=!!C?.endAdornment||!!e?.InputProps?.endAdornment,W=(M?b:0)+(F?b:0),I=l.useCallback(()=>{const r=_(t.current,e.value,e.defaultValue,e.placeholder,W);if(r===null)return;const o=Math.min(Math.max(r,c??0),m??1/0);f(o)},[e.value,e.defaultValue,e.placeholder,m,c,W]),X=r=>{e.onFocus?.(r);const o=t.current;if(!o)return;const k=o.value.length;requestAnimationFrame(()=>{o.setSelectionRange(k,k)})};return l.useEffect(()=>{if(!t.current)return;const r=e.value?.toString(),o=i.current;r!==o&&(I(),i.current=r)},[I,e.value?.toString]),s(j,{ref:S,inputRef:t,...e,onFocus:X,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...F&&{paddingRight:0},...M&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:p&&M?"5px":void 0,paddingRight:p&&F?"5px":void 0,width:g?`${g}px`:"auto"},...a}})});try{u.displayName="TextFieldAutosize",u.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:"TextFieldAutosize",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TextFieldSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, {}, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const d=a=>{const[m,c]=l.useState("Tiny text rendered"),[e,S]=l.useState("xSmall text rendered"),[t,g]=l.useState("Small field value rendered"),[f,i]=l.useState("Medium sized input rendered");return P(E,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",height:"100%",children:[s(u,{label:"Tiny",size:"tiny",value:m,onChange:n=>c(n.target.value),...a}),s(u,{label:"xSmall",size:"xSmall",value:e,onChange:n=>S(n.target.value),...a}),s(u,{label:"Small",size:"small",value:t,onChange:n=>g(n.target.value),...a}),s(u,{label:"Medium",size:"medium",value:f,onChange:n=>i(n.target.value),...a})]})},x=d.bind({});x.args={variant:"outlined"};const h=d.bind({});h.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const v=d.bind({});v.args={InputProps:{startAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const z=d.bind({});z.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:".00"}),startAdornment:s("span",{style:{backgroundColor:"red"},children:"USD"})},variant:"outlined"};const y=d.bind({});y.args={maxWidth:150,variant:"outlined"};const T=d.bind({});T.args={minWidth:300,variant:"outlined"};const A=d.bind({});A.args={maxWidth:400,minWidth:200,variant:"outlined"};const de={component:u,title:"Components/Inputs/TextFieldAutosize"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
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
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}};const me=["Autosize","AutosizeEndAdornment","AutosizeStartAdornment","AutosizeBothAdornments","AutosizeWithMaxWidth","AutosizeWithMinWidth","AutosizeWithMinAndMaxWidth"];export{x as Autosize,z as AutosizeBothAdornments,h as AutosizeEndAdornment,v as AutosizeStartAdornment,y as AutosizeWithMaxWidth,A as AutosizeWithMinAndMaxWidth,T as AutosizeWithMinWidth,me as __namedExportsOrder,de as default};
