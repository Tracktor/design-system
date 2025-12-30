import{a as n,r as l,b as h}from"./iframe-DZQ9sGV0.js";import{P as f}from"./Popper-BnKsr1GV.js";import{B as m}from"./Button-BwqXqlU6.js";import{B as p}from"./Box-CGO7Wj0T.js";import{F as E}from"./Fade-BOUl0-Yw.js";import"./preload-helper-PPVm8Dsz.js";import"./Portal-BQYAt6rN.js";import"./useSlotProps-B9J2zYnp.js";const s=e=>n(f,{...e});try{s.displayName="Popper",s.__docgenInfo={description:"",displayName:"Popper",props:{}}}catch{}const T=e=>{const[o,c]=l.useState(null),t=!!o;return h(p,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[n(m,{variant:"outlined",onClick:u=>{c(o?null:u.currentTarget)},children:"Toggle Popper"}),n(s,{id:t?"simple-popper":void 0,anchorEl:o,...e,open:t,children:n(p,{sx:{bgcolor:"background.paper",border:1,p:1},children:"The content of the Popper."})})]})},x=e=>{const[o,c]=l.useState(!1),[t,d]=l.useState(null);return h(p,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[n(m,{variant:"outlined",onClick:i=>{d(i.currentTarget),c(B=>!B)},children:"Toggle fade transition Popper"}),n(s,{id:o&&!!t?"transition-popper":void 0,anchorEl:t,transition:!0,...e,open:o,children:({TransitionProps:i})=>n(E,{...i,timeout:1e3,children:n(p,{sx:{bgcolor:"background.paper",border:1,p:1},children:"The content of the Popper."})})})]})},r=T.bind({});r.args={};const a=x.bind({});a.args={};const j={component:s,title:"Components/Utils/Popper"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const A=["Basic","Transition"];export{r as Basic,a as Transition,A as __namedExportsOrder,j as default};
