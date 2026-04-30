import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Popper-D6sY_UtF.js";import{t as o}from"./Fade-BcEeyNlD.js";import{t as s}from"./Button-C-NK_Lvb.js";var c=e(t(),1),l=e=>n(a,{...e});try{l.displayName=`Popper`,l.__docgenInfo={description:``,displayName:`Popper`,props:{}}}catch{}var u=e=>{let[t,a]=(0,c.useState)(null),o=!!t;return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{variant:`outlined`,onClick:e=>{a(t?null:e.currentTarget)},children:`Toggle Popper`}),n(l,{id:o?`simple-popper`:void 0,anchorEl:t,...e,open:o,children:n(i,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})]})},d=e=>{let[t,a]=(0,c.useState)(!1),[u,d]=(0,c.useState)(null);return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{variant:`outlined`,onClick:e=>{d(e.currentTarget),a(e=>!e)},children:`Toggle fade transition Popper`}),n(l,{id:t&&u?`transition-popper`:void 0,anchorEl:u,transition:!0,...e,open:t,children:({TransitionProps:e})=>n(o,{...e,timeout:1e3,children:n(i,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})})]})},f=u.bind({});f.args={};var p=d.bind({});p.args={};var m={component:l,title:`Components/Utils/Popper`};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} {...args} open={open}>
        <Box sx={{
        bgcolor: "background.paper",
        border: 1,
        p: 1
      }}>The content of the Popper.</Box>
      </Popper>
    </Box>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle fade transition Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} transition {...args} open={open}>
        {({
        TransitionProps
      }) => <Fade {...TransitionProps} timeout={1000}>
            <Box sx={{
          bgcolor: "background.paper",
          border: 1,
          p: 1
        }}>The content of the Popper.</Box>
          </Fade>}
      </Popper>
    </Box>;
}`,...p.parameters?.docs?.source}}};var h=[`Basic`,`Transition`];export{f as Basic,p as Transition,h as __namedExportsOrder,m as default};