import{a as n,r as u,b as t,I as _,a9 as x}from"./iframe-CA_CZfNl.js";import{a as U,D as W}from"./DialogCloseIcon-84FQSxJ9.js";import{B as c}from"./Button-KcMK-BSk.js";import{D as b}from"./DialogTitle-Dlb6gGzH.js";import{a as I,b as L,c as G}from"./DialogContentText-C37vPbHb.js";import{S as O}from"./Stack-DPmfBFfu.js";import{T as j}from"./Typography-_iZKJk8c.js";import{T as E,A as F}from"./Toolbar-2xSlhmx_.js";import{a as w}from"./List-CInnq3EZ.js";import{L as y}from"./ListItemText-BYzq1csv.js";import{L as S}from"./ListItemButton-Bu3TC7wW.js";import{D as q}from"./Divider-Cat9Lwk4.js";import{L as M}from"./ListItem-DQrdKdyq.js";import{A}from"./Avatar-Bz4Dh2Ph.js";import{L as z}from"./ListItemAvatar-Boh5Sq02.js";import{S as R}from"./Slide-Blia7smw.js";import"./preload-helper-PPVm8Dsz.js";import"./Fade-DHHGFNLm.js";import"./Modal-DWR4uzCh.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-BrIYJ5T_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-9tidJRNu.js";import"./Backdrop-Cj895AVh.js";import"./CloseIcon-Ct8EBNCZ.js";import"./useThemeProps-mw7ovPa8.js";import"./dividerClasses-o27n4VOQ.js";import"./isMuiElement-C6R-BPvq.js";import"./debounce-Be36O1Ab.js";const d=o=>n(U,{...o});try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<DialogSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined"}}}}}catch{}const N={mobile:{name:"Mobile",styles:{height:"600px",width:"480px"}}},V=["username@gmail.com","user02@gmail.com"],P=u.forwardRef((o,e)=>n(R,{direction:"up",ref:e,...o,children:o.children})),X=o=>{const{onClose:e,selectedValue:a,open:r}=o,i=()=>{e(a)},s=l=>{e(l)};return t(d,{onClose:i,open:r,children:[n(b,{children:"Set backup account"}),t(w,{sx:{pt:0},children:[V.map(l=>t(S,{onClick:()=>s(l),children:[n(z,{children:n(A,{sx:{backgroundColor:x[100],color:x[600]}})}),n(y,{primary:l})]},l)),t(S,{autoFocus:!0,onClick:()=>s("addAccount"),children:[n(z,{children:n(A,{children:"+"})}),n(y,{primary:"Add account"})]})]})]})},p=({TransitionComponent:o,...e},{parameters:a})=>{const[r,i]=u.useState(!0),s=()=>{i(!0)},l=()=>{i(!1)};return t(O,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[n(c,{variant:"outlined",onClick:s,children:"Open alert dialog"}),t(d,{...e,open:r,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",TransitionComponent:o||void 0,children:[n(b,{id:"alert-dialog-title",children:"Use Google location service?"}),n(L,{children:n(I,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),t(G,{children:[n(c,{onClick:l,variant:a?.variantButton,size:a?.sizeButton,children:"Disagree"}),n(c,{onClick:l,variant:a?.variantButton,size:a?.sizeButton,children:"Agree"})]})]})]})},$=()=>{const[o,e]=u.useState(!0),[a,r]=u.useState(V[1]);return t(O,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[t(j,{variant:"subtitle1",component:"div",children:["Selected: ",a]}),n("br",{}),n(c,{variant:"outlined",onClick:()=>{e(!0)},children:"Open simple dialog"}),n(X,{selectedValue:a,open:o,onClose:l=>{e(!1),r(l)}})]})},H=o=>{const[e,a]=u.useState(!0),r=()=>{a(!0)},i=()=>{a(!1)};return t(O,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[n(c,{variant:"outlined",onClick:r,children:"Open full-screen dialog"}),t(d,{...o,open:e,onClose:i,TransitionComponent:P,children:[n(F,{sx:{position:"fixed"},children:t(E,{children:[n(_,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:"X"}),n(j,{sx:{flex:1,ml:2},variant:"h6",component:"div",children:"Sound"}),n(c,{autoFocus:!0,color:"inherit",onClick:i,children:"save"})]})}),t(w,{children:[n(S,{children:n(y,{primary:"Phone ringtone",secondary:"Titania"})}),n(q,{}),n(M,{children:n(y,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})},J=({...o},{parameters:e})=>{const[a,r]=u.useState(!0),i=()=>{r(!0)},s=()=>{r(!1)};return t(O,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[n(c,{variant:"outlined",onClick:i,children:"Open alert dialog"}),t(d,{...o,open:a,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[n(W,{onClick:s}),n(b,{id:"alert-dialog-title",children:"Use Google location service?"}),n(L,{children:n(I,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),t(G,{children:[n(c,{onClick:s,variant:e?.variantButton,size:e?.sizeButton,children:"Disagree"}),n(c,{onClick:s,variant:e?.variantButton,size:e?.sizeButton,children:"Agree"})]})]})]})},m=p.bind({});m.args={};const g=p.bind({});g.args={};g.parameters={viewport:{defaultViewport:"mobile",viewports:N}};const C=p.bind({});C.args={TransitionComponent:P};const h=p.bind({});h.parameters={variantButton:"outlined"};const D=p.bind({});D.parameters={variantButton:"contained"};const B=$.bind({});B.args={};const k=H.bind({});k.args={fullScreen:!0};const T=p.bind({});T.parameters={sizeButton:"small"};const v=J.bind({});v.args={};const f=p.bind({});f.args={backgroundColor:"secondary"};const bn={component:d,title:"Components/Feedback/Dialog"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Stack>;
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} TransitionComponent={TransitionSample}>
        <AppBar sx={{
        position: "fixed"
      }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              X
            </IconButton>
            <Typography sx={{
            flex: 1,
            ml: 2
          }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItem>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </Stack>;
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogCloseIcon onClick={handleClose} />
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...f.parameters?.docs?.source}}};const xn=["Basic","BasicMobile","BasicWithTransition","DialogActionsOutlined","DialogActionsContained","WithList","FullScreen","SmallActionsButton","WithDialogCloseIcon","BackgroundSecondary"];export{f as BackgroundSecondary,m as Basic,g as BasicMobile,C as BasicWithTransition,D as DialogActionsContained,h as DialogActionsOutlined,k as FullScreen,T as SmallActionsButton,v as WithDialogCloseIcon,B as WithList,xn as __namedExportsOrder,bn as default};
