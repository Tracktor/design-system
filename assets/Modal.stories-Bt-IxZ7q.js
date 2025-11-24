import{a as e,r as c,b as r}from"./iframe-B2mei-3E.js";import{M as f}from"./Modal-C0iQR4Rg.js";import{B as m}from"./Button-BPNmJ-w6.js";import{B as d}from"./Box-Bfb44pIv.js";import{T as p}from"./Typography-DsfsxxFp.js";import{F as x}from"./Fade-BEImJVze.js";import"./preload-helper-D9Z9MdNV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-Dhl2t-j0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DLzRtJ9r.js";import"./Backdrop-whAt_gyx.js";const s=({children:n,...o})=>e(f,{...o,children:n});try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const u={bgcolor:"background.paper",border:"1px solid",borderColor:"divider",boxShadow:24,left:"50%",p:4,position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:400},h=n=>{const[o,t]=c.useState(!1);return r(d,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[e(m,{onClick:()=>t(!0),variant:"outlined",children:"Open modal"}),e(s,{...n,open:o,onClose:()=>t(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r(d,{sx:u,children:[e(p,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Modal Title"}),e(p,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},b=n=>{const[o,t]=c.useState(!1);return r(d,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[e(m,{onClick:()=>t(!0),variant:"outlined",children:"Open fade transition modal"}),e(s,{...n,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:o,onClose:()=>t(!1),closeAfterTransition:!0,children:e(x,{in:o,timeout:1e3,children:r(d,{sx:u,children:[e(p,{id:"transition-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(p,{id:"transition-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})},a=h.bind({});a.args={};const l=h.bind({});l.args={keepMounted:!0};const i=b.bind({});i.args={};const E={component:s,title:"Components/Utils/Modal"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{
          mt: 2
        }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{
          mt: 2
        }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open fade transition modal
      </Button>
      <Modal {...args} aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open} timeout={1000}>
          <Box sx={ModalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{
            mt: 2
          }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>;
}`,...i.parameters?.docs?.source}}};const F=["Basic","KeepMounted","Transition"];export{a as Basic,l as KeepMounted,i as Transition,F as __namedExportsOrder,E as default};
