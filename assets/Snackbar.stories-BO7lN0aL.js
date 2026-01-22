import{r as d,ap as g,a as n,aq as v,b as C,ad as f,I as b,F as B}from"./iframe-Dk7whoML.js";import{S as h}from"./Stack-DhgMnMb2.js";import{B as s}from"./Button-DVsLAQnk.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-DEl90vnb.js";const y=()=>{const e=d.useContext(g),{isOpen:o,closeSnackbar:r,openSnackbar:t}=e;if(e===void 0)throw new Error("SnackbarProvider must be used within a useSnackBar hook");return{closeSnackbar:r,isOpen:o,openSnackbar:t}},i=e=>n(v,{...e});try{i.displayName="Snackbar",i.__docgenInfo={description:"",displayName:"Snackbar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SnackbarSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<...>; clickAwayListener?: SlotComponentProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; } | undefined'}}}}}catch{}const z=e=>{const[o,r]=d.useState(!0),t=(a,k)=>{k!=="clickaway"&&r(!1)};return n(h,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:n(i,{open:o,onClose:t,message:"Note archived",action:C(B,{children:[n(s,{color:"info",size:"small",onClick:t,children:"UNDO"}),n(b,{size:"small","aria-label":"close",color:"inherit",onClick:t,children:"×"})]}),...e})})},O=e=>{const[o,r]=d.useState(!0),t=(m,a)=>{a!=="clickaway"&&r(!1)};return n(h,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:n(i,{open:o,onClose:t,...e,children:n(f,{onClose:t,severity:"success",children:"This is a success message!"})})})},x=()=>{const[e,o]=d.useState({horizontal:"center",open:!0,vertical:"top"}),{vertical:r,horizontal:t,open:m}=e,a=S=>()=>{o({open:!0,...S})},k=()=>{o({...e,open:!1})};return C(h,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:[n(s,{variant:"outlined",onClick:a({horizontal:"center",vertical:"top"}),children:"Top-Center"}),n(s,{variant:"outlined",onClick:a({horizontal:"right",vertical:"top"}),children:"Top-Right"}),n(s,{variant:"outlined",onClick:a({horizontal:"right",vertical:"bottom"}),children:"Bottom-Right"}),n(s,{variant:"outlined",onClick:a({horizontal:"center",vertical:"bottom"}),children:"Bottom-Center"}),n(s,{variant:"outlined",onClick:a({horizontal:"left",vertical:"bottom"}),children:"Bottom-Left"}),n(s,{variant:"outlined",onClick:a({horizontal:"left",vertical:"top"}),children:"Top-Left"}),n(i,{anchorOrigin:{horizontal:t,vertical:r},open:m,onClose:k,message:"I love snacks"},r+t)]})},T=()=>{const{openSnackbar:e}=y();return n(h,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:n(s,{onClick:()=>{e({message:"This is a success message!",severity:"success"})},variant:"outlined",children:"Open snackbar"})})},c=z.bind({});c.args={};const l=O.bind({});l.args={};const u=x.bind({});u.args={};const p=T.bind({});p.args={};const E={component:i,title:"Components/Feedback/Snackbar"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const A=["Basic","CustomWithAlert","Position","SnackbarHook"];export{c as Basic,l as CustomWithAlert,u as Position,p as SnackbarHook,A as __namedExportsOrder,E as default};
