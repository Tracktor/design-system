import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./Paper-Apd769t-.js";import{t as o}from"./Popper-D6sY_UtF.js";import{t as s}from"./Backdrop-DudeCraL.js";import{t as c}from"./Button-C-NK_Lvb.js";import{r as l,t as u}from"./DialogContent-u3dgL-lw.js";import{t as d}from"./DialogContentText-B1hBEJqO.js";import{t as f}from"./DialogTitle-CI5YPYxV.js";var p=e(t(),1),m=({open:e,anchorEl:t,onClose:r,children:i,placement:c,variant:l=`outlined`})=>n(s,{open:!!e,onClick:r,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:n(o,{open:!!e,anchorEl:t,placement:c,sx:{maxWidth:`100%`},children:n(a,{role:`dialog`,"aria-modal":`false`,variant:l,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:i})})});try{m.displayName=`DialogPopper`,m.__docgenInfo={description:``,displayName:`DialogPopper`,props:{open:{defaultValue:null,description:`Open state`,name:`open`,required:!0,type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,description:`Anchor element`,name:`anchorEl`,required:!0,type:{name:`HTMLElement | Element | null | undefined`}},children:{defaultValue:null,description:`Children`,name:`children`,required:!1,type:{name:`ReactNode`}},placement:{defaultValue:null,description:`Popper placement`,name:`placement`,required:!1,type:{name:`enum`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},description:`Paper variant`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"outlined"`},{value:`"elevation"`}]}},onClose:{defaultValue:null,description:`Callback fired when the backdrop is clicked.`,name:`onClose`,required:!1,type:{name:`(() => void)`}}}}}catch{}var h=m,g=({...e},{parameters:t})=>{let[a,o]=(0,p.useState)(!1),[s,m]=(0,p.useState)(),g=(0,p.useRef)(null),_=e=>{o(!0),m(e.currentTarget)},v=()=>{o(!1)};return r(i,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[n(c,{variant:`outlined`,onClick:_,ref:g,children:`Open popper dialog`}),r(h,{...e,open:a,onClose:v,anchorEl:s,children:[n(f,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),n(u,{children:n(d,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),r(l,{children:[n(c,{onClick:v,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),n(c,{onClick:v,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},_=({...e},{parameters:t})=>{let[a,o]=(0,p.useState)(!1),[s,m]=(0,p.useState)(),[g,_]=(0,p.useState)(),v=(0,p.useRef)(null),y=(e,t)=>{_(t),o(!0),m(e.currentTarget)},b=()=>{o(!1)};return r(i,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[r(i,{direction:`row`,spacing:2,children:[n(c,{variant:`outlined`,onClick:e=>y(e,`top-start`),ref:v,children:`Top start`}),n(c,{variant:`outlined`,onClick:e=>y(e,`top`),ref:v,children:`Top`}),n(c,{variant:`outlined`,onClick:e=>y(e,`top-end`),ref:v,children:`Top start`})]}),r(i,{direction:`row`,spacing:2,children:[n(c,{variant:`outlined`,onClick:e=>y(e,`left`),ref:v,children:`Left`}),n(c,{variant:`outlined`,onClick:y,ref:v,children:`Default`}),n(c,{variant:`outlined`,onClick:e=>y(e,`right`),ref:v,children:`Right`})]}),r(i,{direction:`row`,spacing:2,children:[n(c,{variant:`outlined`,onClick:e=>y(e,`bottom-start`),ref:v,children:`Bottom start`}),n(c,{variant:`outlined`,onClick:e=>y(e,`bottom`),ref:v,children:`Bottom`}),n(c,{variant:`outlined`,onClick:e=>y(e,`bottom-end`),ref:v,children:`Bottom end`})]}),r(h,{...e,open:a,onClose:b,anchorEl:s,placement:g,children:[n(f,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),n(u,{children:n(d,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),r(l,{children:[n(c,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),n(c,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},v=g.bind({});v.args={};var y=_.bind({});y.args={placement:`bottom-end`};var b={component:m,title:`Components/Feedback/DialogPopper`};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = (e: MouseEvent) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open popper dialog
      </Button>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [placement, setPlacement] = useState<PopperProps["placement"]>();
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = (e: MouseEvent, newPlacement?: PopperProps["placement"]) => {
    setPlacement(newPlacement);
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top-start")} ref={anchorRef}>
          Top start
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top")} ref={anchorRef}>
          Top
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top-end")} ref={anchorRef}>
          Top start
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "left")} ref={anchorRef}>
          Left
        </Button>
        <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
          Default
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "right")} ref={anchorRef}>
          Right
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom-start")} ref={anchorRef}>
          Bottom start
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom")} ref={anchorRef}>
          Bottom
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom-end")} ref={anchorRef}>
          Bottom end
        </Button>
      </Stack>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl} placement={placement}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>;
}`,...y.parameters?.docs?.source}}};var x=[`Basic`,`Placement`];export{v as Basic,y as Placement,x as __namedExportsOrder,b as default};