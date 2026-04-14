import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./Alert-C9j59ec6.js";import{t as s}from"./IconButton-Cm2voGaN.js";import{t as c}from"./Button-C-NK_Lvb.js";import{o as l,t as u}from"./iframe-7ZbU6LzZ.js";var d=e(t(),1),f=()=>{let e=(0,d.useContext)(u),{isOpen:t,closeSnackbar:n,openSnackbar:r}=e;if(e===void 0)throw Error(`SnackbarProvider must be used within a useSnackBar hook`);return{closeSnackbar:n,isOpen:t,openSnackbar:r}},p=e=>n(l,{...e});try{p.displayName=`Snackbar`,p.__docgenInfo={description:``,displayName:`Snackbar`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`Ref<unknown>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<SnackbarSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<...>; clickAwayListener?: SlotComponentProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; } | undefined`}}}}}catch{}var m=e=>{let[t,o]=(0,d.useState)(!0),l=(e,t)=>{t!==`clickaway`&&o(!1)};return n(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:n(p,{open:t,onClose:l,message:`Note archived`,action:r(i,{children:[n(c,{color:`info`,size:`small`,onClick:l,children:`UNDO`}),n(s,{size:`small`,"aria-label":`close`,color:`inherit`,onClick:l,children:`×`})]}),...e})})},h=e=>{let[t,r]=(0,d.useState)(!0),i=(e,t)=>{t!==`clickaway`&&r(!1)};return n(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:n(p,{open:t,onClose:i,...e,children:n(o,{onClose:i,severity:`success`,children:`This is a success message!`})})})},g=()=>{let[e,t]=(0,d.useState)({horizontal:`center`,open:!0,vertical:`top`}),{vertical:i,horizontal:o,open:s}=e,l=e=>()=>{t({open:!0,...e})};return r(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:[n(c,{variant:`outlined`,onClick:l({horizontal:`center`,vertical:`top`}),children:`Top-Center`}),n(c,{variant:`outlined`,onClick:l({horizontal:`right`,vertical:`top`}),children:`Top-Right`}),n(c,{variant:`outlined`,onClick:l({horizontal:`right`,vertical:`bottom`}),children:`Bottom-Right`}),n(c,{variant:`outlined`,onClick:l({horizontal:`center`,vertical:`bottom`}),children:`Bottom-Center`}),n(c,{variant:`outlined`,onClick:l({horizontal:`left`,vertical:`bottom`}),children:`Bottom-Left`}),n(c,{variant:`outlined`,onClick:l({horizontal:`left`,vertical:`top`}),children:`Top-Left`}),n(p,{anchorOrigin:{horizontal:o,vertical:i},open:s,onClose:()=>{t({...e,open:!1})},message:`I love snacks`},i+o)]})},_=()=>{let{openSnackbar:e}=f();return n(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:n(c,{onClick:()=>{e({message:`This is a success message!`,severity:`success`})},variant:`outlined`,children:`Open snackbar`})})},v=m.bind({});v.args={};var y=h.bind({});y.args={};var b=g.bind({});b.args={};var x=_.bind({});x.args={};var S={component:p,title:`Components/Feedback/Snackbar`};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = <>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        &times;
      </IconButton>
    </>;
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Snackbar open={open} onClose={handleClose} message="Note archived" action={action} {...args} />
    </Stack>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Snackbar open={open} onClose={handleClose} {...args}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<State>({
    horizontal: "center",
    open: true,
    vertical: "top"
  });
  const {
    vertical,
    horizontal,
    open
  } = state;
  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({
      open: true,
      ...newState
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "center",
      vertical: "top"
    })}>
        Top-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "right",
      vertical: "top"
    })}>
        Top-Right
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "right",
      vertical: "bottom"
    })}>
        Bottom-Right
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "center",
      vertical: "bottom"
    })}>
        Bottom-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "left",
      vertical: "bottom"
    })}>
        Bottom-Left
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "left",
      vertical: "top"
    })}>
        Top-Left
      </Button>
      <Snackbar anchorOrigin={{
      horizontal,
      vertical
    }} open={open} onClose={handleClose} message="I love snacks" key={vertical + horizontal} />
    </Stack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const {
    openSnackbar
  } = useSnackbar();
  const handleOpen = () => {
    openSnackbar({
      message: "This is a success message!",
      severity: "success"
    });
  };
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Button onClick={handleOpen} variant="outlined">
        Open snackbar
      </Button>
    </Stack>;
}`,...x.parameters?.docs?.source}}};var C=[`Basic`,`CustomWithAlert`,`Position`,`SnackbarHook`];export{v as Basic,y as CustomWithAlert,b as Position,x as SnackbarHook,C as __namedExportsOrder,S as default};