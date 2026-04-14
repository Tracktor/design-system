import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{L as n,n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./IconButton-Cm2voGaN.js";import{t as s}from"./Typography-BNYwlYGw.js";import{n as c,t as l}from"./Toolbar-X8byKYiQ.js";import{t as u}from"./Avatar-p_cSZ-X-.js";import{t as d}from"./Button-C-NK_Lvb.js";import{n as f}from"./DialogCloseIcon-YEEde8tv.js";import{r as p,t as m}from"./DialogContent-u3dgL-lw.js";import{t as h}from"./DialogContentText-B1hBEJqO.js";import{t as g}from"./DialogTitle-CI5YPYxV.js";import{t as _}from"./Divider-Dm1KHk8o.js";import{t as v}from"./Slide-B9UVPVd_.js";import{t as y}from"./List-dHlU8BBG.js";import{t as b}from"./ListItem-BnsA-Tfl.js";import{t as x}from"./ListItemButton-BNDaM0Mi.js";import{t as S}from"./ListItemAvatar-BObKCzsU.js";import{t as C}from"./ListItemText-Cs8fd-Dg.js";import{t as w}from"./DialogCloseIcon-DP1vZhJe.js";var T=e(t(),1),E=e=>r(f,{...e});try{E.displayName=`Dialog`,E.__docgenInfo={description:``,displayName:`Dialog`,props:{backgroundColor:{defaultValue:null,description:``,name:`backgroundColor`,required:!1,type:{name:`string`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<DialogSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined`}}}}}catch{}var D={mobile:{name:`Mobile`,styles:{height:`600px`,width:`480px`}}},O=[`username@gmail.com`,`user02@gmail.com`],k=(0,T.forwardRef)((e,t)=>r(v,{direction:`up`,ref:t,...e,children:e.children})),A=e=>{let{onClose:t,selectedValue:a,open:o}=e,s=()=>{t(a)},c=e=>{t(e)};return i(E,{onClose:s,open:o,children:[r(g,{children:`Set backup account`}),i(y,{sx:{pt:0},children:[O.map(e=>i(x,{onClick:()=>c(e),children:[r(S,{children:r(u,{sx:{backgroundColor:n[100],color:n[600]}})}),r(C,{primary:e})]},e)),i(x,{autoFocus:!0,onClick:()=>c(`addAccount`),children:[r(S,{children:r(u,{children:`+`})}),r(C,{primary:`Add account`})]})]})]})},j=({TransitionComponent:e,...t},{parameters:n})=>{let[o,s]=(0,T.useState)(!0),c=()=>{s(!0)},l=()=>{s(!1)};return i(a,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[r(d,{variant:`outlined`,onClick:c,children:`Open alert dialog`}),i(E,{...t,open:o,onClose:l,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,TransitionComponent:e||void 0,children:[r(g,{id:`alert-dialog-title`,children:`Use Google location service?`}),r(m,{children:r(h,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),i(p,{children:[r(d,{onClick:l,variant:n?.variantButton,size:n?.sizeButton,children:`Disagree`}),r(d,{onClick:l,variant:n?.variantButton,size:n?.sizeButton,children:`Agree`})]})]})]})},M=()=>{let[e,t]=(0,T.useState)(!0),[n,o]=(0,T.useState)(O[1]);return i(a,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[i(s,{variant:`subtitle1`,component:`div`,children:[`Selected: `,n]}),r(`br`,{}),r(d,{variant:`outlined`,onClick:()=>{t(!0)},children:`Open simple dialog`}),r(A,{selectedValue:n,open:e,onClose:e=>{t(!1),o(e)}})]})},N=e=>{let[t,n]=(0,T.useState)(!0),u=()=>{n(!0)},f=()=>{n(!1)};return i(a,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[r(d,{variant:`outlined`,onClick:u,children:`Open full-screen dialog`}),i(E,{...e,open:t,onClose:f,TransitionComponent:k,children:[r(c,{sx:{position:`fixed`},children:i(l,{children:[r(o,{edge:`start`,color:`inherit`,onClick:f,"aria-label":`close`,children:`X`}),r(s,{sx:{flex:1,ml:2},variant:`h6`,component:`div`,children:`Sound`}),r(d,{autoFocus:!0,color:`inherit`,onClick:f,children:`save`})]})}),i(y,{children:[r(x,{children:r(C,{primary:`Phone ringtone`,secondary:`Titania`})}),r(_,{}),r(b,{children:r(C,{primary:`Default notification ringtone`,secondary:`Tethys`})})]})]})]})},P=({...e},{parameters:t})=>{let[n,o]=(0,T.useState)(!0),s=()=>{o(!0)},c=()=>{o(!1)};return i(a,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[r(d,{variant:`outlined`,onClick:s,children:`Open alert dialog`}),i(E,{...e,open:n,onClose:c,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,children:[r(w,{onClick:c}),r(g,{id:`alert-dialog-title`,children:`Use Google location service?`}),r(m,{children:r(h,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),i(p,{children:[r(d,{onClick:c,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),r(d,{onClick:c,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},F=j.bind({});F.args={};var I=j.bind({});I.args={},I.parameters={viewport:{defaultViewport:`mobile`,viewports:D}};var L=j.bind({});L.args={TransitionComponent:k};var R=j.bind({});R.parameters={variantButton:`outlined`};var z=j.bind({});z.parameters={variantButton:`contained`};var B=M.bind({});B.args={};var V=N.bind({});V.args={fullScreen:!0};var H=j.bind({});H.parameters={sizeButton:`small`};var U=P.bind({});U.args={};var W=j.bind({});W.args={backgroundColor:`secondary`};var G={component:E,title:`Components/Feedback/Dialog`};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`({
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`({
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`({
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`({
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`({
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`({
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
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
}`,...W.parameters?.docs?.source}}};var K=[`Basic`,`BasicMobile`,`BasicWithTransition`,`DialogActionsOutlined`,`DialogActionsContained`,`WithList`,`FullScreen`,`SmallActionsButton`,`WithDialogCloseIcon`,`BackgroundSecondary`];export{W as BackgroundSecondary,F as Basic,I as BasicMobile,L as BasicWithTransition,z as DialogActionsContained,R as DialogActionsOutlined,V as FullScreen,H as SmallActionsButton,U as WithDialogCloseIcon,B as WithList,K as __namedExportsOrder,G as default};