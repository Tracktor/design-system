import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Typography-BNYwlYGw.js";import{t as o}from"./Fade-BcEeyNlD.js";import{t as s}from"./Button-C-NK_Lvb.js";import{t as c}from"./Modal-KAGIkh8j.js";var l=e(t(),1),u=({children:e,...t})=>n(c,{...t,children:e});try{u.displayName=`Modal`,u.__docgenInfo={description:``,displayName:`Modal`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var d={bgcolor:`background.paper`,border:`1px solid`,borderColor:`divider`,boxShadow:24,left:`50%`,p:4,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,width:400},f=e=>{let[t,o]=(0,l.useState)(!1),c=()=>o(!0),f=()=>o(!1);return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{onClick:c,variant:`outlined`,children:`Open modal`}),n(u,{...e,open:t,onClose:f,"aria-labelledby":`modal-modal-title`,"aria-describedby":`modal-modal-description`,children:r(i,{sx:d,children:[n(a,{id:`modal-modal-title`,variant:`h6`,component:`h2`,children:`Modal Title`}),n(a,{id:`modal-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})]})},p=e=>{let[t,c]=(0,l.useState)(!1),f=()=>c(!0),p=()=>c(!1);return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{onClick:f,variant:`outlined`,children:`Open fade transition modal`}),n(u,{...e,"aria-labelledby":`transition-modal-title`,"aria-describedby":`transition-modal-description`,open:t,onClose:p,closeAfterTransition:!0,children:n(o,{in:t,timeout:1e3,children:r(i,{sx:d,children:[n(a,{id:`transition-modal-title`,variant:`h6`,component:`h2`,children:`Text in a modal`}),n(a,{id:`transition-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})})]})},m=f.bind({});m.args={};var h=f.bind({});h.args={keepMounted:!0};var g=p.bind({});g.args={};var _={component:u,title:`Components/Utils/Modal`};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}};var v=[`Basic`,`KeepMounted`,`Transition`];export{m as Basic,h as KeepMounted,g as Transition,v as __namedExportsOrder,_ as default};