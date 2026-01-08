import{a as e,P as b,r as s,b as r}from"./iframe-CHco9Sar.js";import{P as R}from"./Popper-Dd4lXt_c.js";import{B as S}from"./Backdrop-DNF0KQ5g.js";import{B as t}from"./Button-B91NF3et.js";import{D as B}from"./DialogTitle-BtHiIis8.js";import{a as D,b as P,c as E}from"./DialogContentText-t5exf0af.js";import{S as h}from"./Stack-D9dT0xLT.js";import"./preload-helper-PPVm8Dsz.js";import"./Portal-Bhn0t0CB.js";import"./useSlotProps-AFCv9idc.js";import"./Fade-CWOoeACU.js";import"./Typography-BSPLBATA.js";import"./useThemeProps-BSMBXMMC.js";const C=({open:l,anchorEl:a,onClose:d,children:c,placement:u,variant:p="outlined"})=>e(S,{open:!!l,onClick:d,sx:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:e(R,{open:!!l,anchorEl:a,placement:u,sx:{maxWidth:"100%"},children:e(b,{role:"dialog","aria-modal":"false",variant:p,tabIndex:-1,onClick:m=>m.stopPropagation(),sx:{borderRadius:1.5},children:c})})});try{C.displayName="DialogPopper",C.__docgenInfo={description:"",displayName:"DialogPopper",props:{open:{defaultValue:null,description:"Open state",name:"open",required:!0,type:{name:"boolean | undefined"}},anchorEl:{defaultValue:null,description:"Anchor element",name:"anchorEl",required:!0,type:{name:"HTMLElement | Element | null | undefined"}},children:{defaultValue:null,description:"Children",name:"children",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"Popper placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},variant:{defaultValue:{value:"outlined"},description:"Paper variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"elevation"'}]}},onClose:{defaultValue:null,description:"Callback fired when the backdrop is clicked.",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const T=({...l},{parameters:a})=>{const[d,c]=s.useState(!1),[u,p]=s.useState(),m=s.useRef(null),v=i=>{c(!0),p(i.currentTarget)},o=()=>{c(!1)};return r(h,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[e(t,{variant:"outlined",onClick:v,ref:m,children:"Open popper dialog"}),r(C,{...l,open:d,onClose:o,anchorEl:u,children:[e(B,{id:"alert-dialog-title",children:"Lorem ipsum ?"}),e(P,{children:e(D,{id:"alert-dialog-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."})}),r(E,{children:[e(t,{onClick:o,variant:a?.variantButton,size:a?.sizeButton,children:"Disagree"}),e(t,{onClick:o,variant:a?.variantButton,size:a?.sizeButton,children:"Agree"})]})]})]})},x=({...l},{parameters:a})=>{const[d,c]=s.useState(!1),[u,p]=s.useState(),[m,v]=s.useState(),o=s.useRef(null),i=(n,O)=>{v(O),c(!0),p(n.currentTarget)},k=()=>{c(!1)};return r(h,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[r(h,{direction:"row",spacing:2,children:[e(t,{variant:"outlined",onClick:n=>i(n,"top-start"),ref:o,children:"Top start"}),e(t,{variant:"outlined",onClick:n=>i(n,"top"),ref:o,children:"Top"}),e(t,{variant:"outlined",onClick:n=>i(n,"top-end"),ref:o,children:"Top start"})]}),r(h,{direction:"row",spacing:2,children:[e(t,{variant:"outlined",onClick:n=>i(n,"left"),ref:o,children:"Left"}),e(t,{variant:"outlined",onClick:i,ref:o,children:"Default"}),e(t,{variant:"outlined",onClick:n=>i(n,"right"),ref:o,children:"Right"})]}),r(h,{direction:"row",spacing:2,children:[e(t,{variant:"outlined",onClick:n=>i(n,"bottom-start"),ref:o,children:"Bottom start"}),e(t,{variant:"outlined",onClick:n=>i(n,"bottom"),ref:o,children:"Bottom"}),e(t,{variant:"outlined",onClick:n=>i(n,"bottom-end"),ref:o,children:"Bottom end"})]}),r(C,{...l,open:d,onClose:k,anchorEl:u,placement:m,children:[e(B,{id:"alert-dialog-title",children:"Lorem ipsum ?"}),e(P,{children:e(D,{id:"alert-dialog-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."})}),r(E,{children:[e(t,{onClick:k,variant:a?.variantButton,size:a?.sizeButton,children:"Disagree"}),e(t,{onClick:k,variant:a?.variantButton,size:a?.sizeButton,children:"Agree"})]})]})]})},g=T.bind({});g.args={};const f=x.bind({});f.args={placement:"bottom-end"};const H={component:C,title:"Components/Feedback/DialogPopper"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
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
}`,...f.parameters?.docs?.source}}};const W=["Basic","Placement"];export{g as Basic,f as Placement,W as __namedExportsOrder,H as default};
