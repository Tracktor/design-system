import{a as n,r as c,b as p}from"./iframe-CNsPZ6lW.js";import{L as m}from"./Lightbox-CD64wd6u.js";import{B as a}from"./Box-BbhV3TUc.js";import{B as u}from"./Button-8IceTiKy.js";import"./preload-helper-PPVm8Dsz.js";import"./Fade-BPlhz1KJ.js";import"./Modal-Dyq60M8m.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-Db0D_Rj3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DPbM2A5h.js";import"./Backdrop-D3xbAPqs.js";const r=e=>n(m,{...e});try{r.displayName="Lightbox",r.__docgenInfo={description:"",displayName:"Lightbox",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.",name:"onClose",required:!1,type:{name:'((event: {} | MouseEvent<Element, MouseEvent>, reason?: "backdropClick" | "escapeKeyDown" | "closeButton") => void) | undefined'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const i="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",g=e=>{const[l,t]=c.useState(!1);return p(a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[n(a,{component:"img",src:i,alt:"My image",width:200,height:200,sx:{cursor:"pointer",objectFit:"cover"},onClick:()=>t(!0)}),n(r,{...e,open:l,onClose:()=>t(!1),src:i})]})},C=e=>{const[l,t]=c.useState(!1);return p(a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[n(u,{onClick:()=>t(!0),variant:"contained",children:"Open"}),n(r,{...e,open:l,onClose:()=>t(!1),src:i})]})},o=g.bind({});o.args={};const s=C.bind({});s.args={children:n(a,{children:"My children"})};const j={component:r,title:"Components/Feedback/Lightbox"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>;
}`,...s.parameters?.docs?.source}}};const v=["Basic","WithChildren"];export{o as Basic,s as WithChildren,v as __namedExportsOrder,j as default};
