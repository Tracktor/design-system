import{r as l,a as s,b as X}from"./iframe-C-kofbB0.js";import{T as j}from"./TextField-a7WegWtS.js";import{S as E}from"./Stack-BKu2AZBE.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-heutBS42.js";import"./Menu-BEMlbhpe.js";import"./useSlotProps-Be3r-DMZ.js";import"./Popover-DTOz7oM2.js";import"./ownerWindow-5jgeDiPq.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CcBMUQKY.js";import"./Modal-D3aIgwqQ.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-COEgiVRx.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CQXUEItf.js";import"./Fade-BMoVQwa5.js";import"./MenuList-DnxNv_s1.js";import"./List-D33OTKx7.js";import"./FormControl-B_j2jRvG.js";import"./useFormControl-C2CUjcuj.js";import"./isMuiElement-CbOjyHKC.js";import"./useControlled-Dcwo09_0.js";import"./formControlState-Dq1zat_P.js";import"./TextareaAutosize-zEOULDPm.js";import"./InputLabel-BTa53rAu.js";import"./FormLabel-2dkevFm7.js";import"./useThemeProps-CGaPnW5A.js";const R=(a,m,c,e,S=0)=>{if(!a)return null;const t=window.getComputedStyle(a),g=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,i=document.createElement("canvas").getContext("2d");if(!i)return null;i.font=g;const n=m?.toString()||c?.toString()||e?.toString()||" ",p=i.measureText(n).width,b=parseFloat(t.paddingLeft),C=parseFloat(t.paddingRight);return p+b+C+S},u=l.forwardRef(({sx:a,maxWidth:m,minWidth:c,...e},S)=>{const t=l.useRef(null),[g,f]=l.useState(null),i=l.useRef(void 0),{size:n}=e,p=n==="tiny",b=p?27:50,C=e?.slotProps?.input,F=!!C?.startAdornment||!!e?.InputProps?.startAdornment,M=!!C?.endAdornment||!!e?.InputProps?.endAdornment,W=(F?b:0)+(M?b:0),I=l.useCallback(()=>{const r=R(t.current,e.value,e.defaultValue,e.placeholder,W);if(r===null)return;const o=Math.min(Math.max(r,c??0),m??1/0);f(o)},[e.value,e.defaultValue,e.placeholder,m,c,W]),P=r=>{e.onFocus?.(r);const o=t.current;if(!o)return;const k=o.value.length;requestAnimationFrame(()=>{o.setSelectionRange(k,k)})};return l.useEffect(()=>{if(!t.current)return;const r=e.value?.toString(),o=i.current;r!==o&&(I(),i.current=r)},[I,e.value?.toString]),s(j,{ref:S,inputRef:t,...e,onFocus:P,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...M&&{paddingRight:0},...F&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:p&&F?"5px":void 0,paddingRight:p&&M?"5px":void 0,width:g?`${g}px`:"auto"},...a}})});try{u.displayName="TextFieldAutosize",u.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:"TextFieldAutosize",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TextFieldSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, TextFieldRootSlotPropsOverrides, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const d=a=>{const[m,c]=l.useState("Tiny text rendered"),[e,S]=l.useState("xSmall text rendered"),[t,g]=l.useState("Small field value rendered"),[f,i]=l.useState("Medium sized input rendered");return X(E,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",height:"100%",children:[s(u,{label:"Tiny",size:"tiny",value:m,onChange:n=>c(n.target.value),...a}),s(u,{label:"xSmall",size:"xSmall",value:e,onChange:n=>S(n.target.value),...a}),s(u,{label:"Small",size:"small",value:t,onChange:n=>g(n.target.value),...a}),s(u,{label:"Medium",size:"medium",value:f,onChange:n=>i(n.target.value),...a})]})},x=d.bind({});x.args={variant:"outlined"};const h=d.bind({});h.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const v=d.bind({});v.args={InputProps:{startAdornment:s("span",{style:{backgroundColor:"blue"},children:"USD"})},variant:"outlined"};const z=d.bind({});z.args={InputProps:{endAdornment:s("span",{style:{backgroundColor:"blue"},children:".00"}),startAdornment:s("span",{style:{backgroundColor:"red"},children:"USD"})},variant:"outlined"};const y=d.bind({});y.args={maxWidth:150,variant:"outlined"};const T=d.bind({});T.args={minWidth:300,variant:"outlined"};const A=d.bind({});A.args={maxWidth:400,minWidth:200,variant:"outlined"};const me={component:u,title:"Components/Inputs/TextFieldAutosize"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}};const ce=["Autosize","AutosizeEndAdornment","AutosizeStartAdornment","AutosizeBothAdornments","AutosizeWithMaxWidth","AutosizeWithMinWidth","AutosizeWithMinAndMaxWidth"];export{x as Autosize,z as AutosizeBothAdornments,h as AutosizeEndAdornment,v as AutosizeStartAdornment,y as AutosizeWithMaxWidth,A as AutosizeWithMinAndMaxWidth,T as AutosizeWithMinWidth,ce as __namedExportsOrder,me as default};
