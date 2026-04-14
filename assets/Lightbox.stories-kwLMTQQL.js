import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Button-C-NK_Lvb.js";import{t as o}from"./Lightbox-CcKCRutj.js";var s=e(t(),1),c=e=>n(o,{...e});try{c.displayName=`Lightbox`,c.__docgenInfo={description:``,displayName:`Lightbox`,props:{src:{defaultValue:null,description:``,name:`src`,required:!1,type:{name:`string`}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.",name:`onClose`,required:!1,type:{name:`((event: {} | MouseEvent<Element, MouseEvent>, reason?: "backdropClick" | "escapeKeyDown" | "closeButton") => void) | undefined`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var l=`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,u=e=>{let[t,a]=(0,s.useState)(!1),o=()=>a(!0),u=()=>a(!1);return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(i,{component:`img`,src:l,alt:`My image`,width:200,height:200,sx:{cursor:`pointer`,objectFit:`cover`},onClick:o}),n(c,{...e,open:t,onClose:u,src:l})]})},d=e=>{let[t,o]=(0,s.useState)(!1),u=()=>o(!0),d=()=>o(!1);return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(a,{onClick:u,variant:`contained`,children:`Open`}),n(c,{...e,open:t,onClose:d,src:l})]})},f=u.bind({});f.args={};var p=d.bind({});p.args={children:n(i,{children:`My children`})};var m={component:c,title:`Components/Feedback/Lightbox`};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box component="img" src={IMG_SRC} alt="My image" width={200} height={200} sx={{
      cursor: "pointer",
      objectFit: "cover"
    }} onClick={handleOpen} />
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>;
}`,...p.parameters?.docs?.source}}};var h=[`Basic`,`WithChildren`];export{f as Basic,p as WithChildren,h as __namedExportsOrder,m as default};