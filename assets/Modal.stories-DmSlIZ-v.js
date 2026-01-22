import{a as e,r as c,b as r}from"./iframe-BBh-gPoa.js";import{M as f}from"./Modal-BRQ92MKg.js";import{B as m}from"./Button-Brd4e1lv.js";import{B as d}from"./Box-C9ZObZVZ.js";import{T as p}from"./Typography-Q7BDZc_a.js";import{F as x}from"./Fade-OytJ6vRp.js";import"./preload-helper-PPVm8Dsz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-Bexa4m5r.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BHxRgcij.js";import"./Backdrop-JAxjXbt4.js";const s=({children:n,...o})=>e(f,{...o,children:n});try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const u={bgcolor:"background.paper",border:"1px solid",borderColor:"divider",boxShadow:24,left:"50%",p:4,position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:400},h=n=>{const[o,t]=c.useState(!1);return r(d,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[e(m,{onClick:()=>t(!0),variant:"outlined",children:"Open modal"}),e(s,{...n,open:o,onClose:()=>t(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r(d,{sx:u,children:[e(p,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Modal Title"}),e(p,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},b=n=>{const[o,t]=c.useState(!1);return r(d,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[e(m,{onClick:()=>t(!0),variant:"outlined",children:"Open fade transition modal"}),e(s,{...n,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:o,onClose:()=>t(!1),closeAfterTransition:!0,children:e(x,{in:o,timeout:1e3,children:r(d,{sx:u,children:[e(p,{id:"transition-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(p,{id:"transition-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})},a=h.bind({});a.args={};const l=h.bind({});l.args={keepMounted:!0};const i=b.bind({});i.args={};const E={component:s,title:"Components/Utils/Modal"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
