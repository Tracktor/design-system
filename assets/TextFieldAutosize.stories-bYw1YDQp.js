import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./TextField-DwjXsUo9.js";var o=e(t(),1),s=(e,t,n,r,i=0)=>{if(!e)return null;let a=window.getComputedStyle(e),o=`${a.fontWeight} ${a.fontSize} ${a.fontFamily}`,s=document.createElement(`canvas`).getContext(`2d`);if(!s)return null;s.font=o;let c=t?.toString()||n?.toString()||r?.toString()||` `,l=s.measureText(c).width,u=parseFloat(a.paddingLeft),d=parseFloat(a.paddingRight);return l+u+d+i},c=(0,o.forwardRef)(({sx:e,maxWidth:t,minWidth:r,...i},c)=>{let l=(0,o.useRef)(null),[u,d]=(0,o.useState)(null),f=(0,o.useRef)(void 0),{size:p}=i,m=p===`tiny`,h=m?27:50,g=i?.slotProps?.input,_=!!g?.startAdornment||!!i?.InputProps?.startAdornment,v=!!g?.endAdornment||!!i?.InputProps?.endAdornment,y=(_?h:0)+(v?h:0),b=(0,o.useCallback)(()=>{let e=s(l.current,i.value,i.defaultValue,i.placeholder,y);e!==null&&d(Math.min(Math.max(e,r??0),t??1/0))},[i.value,i.defaultValue,i.placeholder,t,r,y]),x=e=>{i.onFocus?.(e);let t=l.current;if(!t)return;let n=t.value.length;requestAnimationFrame(()=>{t.setSelectionRange(n,n)})};return(0,o.useEffect)(()=>{if(!l.current)return;let e=i.value?.toString();e!==f.current&&(b(),f.current=e)},[b,i.value?.toString]),n(a,{ref:c,inputRef:l,...i,onFocus:x,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...v&&{paddingRight:0},..._&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:m&&_?`5px`:void 0,paddingRight:m&&v?`5px`:void 0,width:u?`${u}px`:`auto`},...e}})});try{c.displayName=`TextFieldAutosize`,c.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:`TextFieldAutosize`,props:{maxWidth:{defaultValue:null,description:``,name:`maxWidth`,required:!1,type:{name:`number`}},minWidth:{defaultValue:null,description:``,name:`minWidth`,required:!1,type:{name:`number`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<TextFieldSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, TextFieldRootSlotPropsOverrides, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined`}}}}}catch{}var l=e=>{let[t,a]=(0,o.useState)(`Tiny text rendered`),[s,l]=(0,o.useState)(`xSmall text rendered`),[u,d]=(0,o.useState)(`Small field value rendered`),[f,p]=(0,o.useState)(`Medium sized input rendered`);return r(i,{direction:`column`,spacing:3,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(c,{label:`Tiny`,size:`tiny`,value:t,onChange:e=>a(e.target.value),...e}),n(c,{label:`xSmall`,size:`xSmall`,value:s,onChange:e=>l(e.target.value),...e}),n(c,{label:`Small`,size:`small`,value:u,onChange:e=>d(e.target.value),...e}),n(c,{label:`Medium`,size:`medium`,value:f,onChange:e=>p(e.target.value),...e})]})},u=l.bind({});u.args={variant:`outlined`};var d=l.bind({});d.args={InputProps:{endAdornment:n(`span`,{style:{backgroundColor:`blue`},children:`USD`})},variant:`outlined`};var f=l.bind({});f.args={InputProps:{startAdornment:n(`span`,{style:{backgroundColor:`blue`},children:`USD`})},variant:`outlined`};var p=l.bind({});p.args={InputProps:{endAdornment:n(`span`,{style:{backgroundColor:`blue`},children:`.00`}),startAdornment:n(`span`,{style:{backgroundColor:`red`},children:`USD`})},variant:`outlined`};var m=l.bind({});m.args={maxWidth:150,variant:`outlined`};var h=l.bind({});h.args={minWidth:300,variant:`outlined`};var g=l.bind({});g.args={maxWidth:400,minWidth:200,variant:`outlined`};var _={component:c,title:`Components/Inputs/TextFieldAutosize`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}};var v=[`Autosize`,`AutosizeEndAdornment`,`AutosizeStartAdornment`,`AutosizeBothAdornments`,`AutosizeWithMaxWidth`,`AutosizeWithMinWidth`,`AutosizeWithMinAndMaxWidth`];export{u as Autosize,p as AutosizeBothAdornments,d as AutosizeEndAdornment,f as AutosizeStartAdornment,m as AutosizeWithMaxWidth,g as AutosizeWithMinAndMaxWidth,h as AutosizeWithMinWidth,v as __namedExportsOrder,_ as default};