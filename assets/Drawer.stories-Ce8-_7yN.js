import{a as t,r as p,b as s,S}from"./iframe-3GrHJcTe.js";import{D as v}from"./Drawer-DL0NMntU.js";import{B as L}from"./Button-Be7oOxIT.js";import{S as w}from"./Stack-BFjGhxt_.js";import{L as d}from"./ListItem-D4EDcibI.js";import{L as f}from"./ListItemButton-e9vK8oVh.js";import{L as u}from"./ListItemIcon-Eq6Nh7ri.js";import{L as h}from"./ListItemText-CpBN48lI.js";import{a as g}from"./List-tR_9UuhL.js";import{D as b}from"./Divider-Ck8k40pU.js";import{B as D}from"./Box-BQZf_2R8.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeSlotProps-BEp_BC4s.js";import"./Slide-tKS_T5tz.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DyJfJl6c.js";import"./Modal-DG7nb8Ja.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-OrPL79Xk.js";import"./Backdrop-JVoutOys.js";import"./Fade-De7os2GR.js";import"./useThemeProps-whTvY3Ea.js";import"./isMuiElement-B1kuGpB2.js";import"./listItemIconClasses-CGdmkCGF.js";import"./Typography-nEEsTQaR.js";import"./dividerClasses-CudM3zZK.js";const i=r=>t(v,{...r});try{i.displayName="Drawer",i.__docgenInfo={description:"",displayName:"Drawer",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<DrawerSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DrawerRootSlotPropsOverrides, DrawerOwnerState>; backdrop?: SlotProps<...>; docked?: SlotProps<...> | undefined; paper?: SlotProps<...> | undefined; transition?: SlotProps<...> | undefined; } | undefined"}}}}}catch{}const x=r=>{const[m,I]=p.useState({bottom:!1,left:!1,right:!1,top:!1}),c=t(S,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"FavoriteIcon",children:t("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),a=(e,o)=>l=>{l.type==="keydown"&&(l.key==="Tab"||l.key==="Shift")||I({...m,[e]:o})},y=e=>s(D,{sx:{width:e==="top"||e==="bottom"?"auto":250},role:"presentation",onClick:a(e,!1),onKeyDown:a(e,!1),children:[t(g,{children:["Inbox","Starred","Send email","Drafts"].map(o=>t(d,{disablePadding:!0,children:s(f,{children:[t(u,{children:c}),t(h,{primary:o})]})},o))}),t(b,{}),t(g,{children:["All mail","Trash","Spam"].map(o=>t(d,{disablePadding:!0,children:s(f,{children:[t(u,{children:c}),t(h,{primary:o})]})},o))})]});return t(w,{direction:"row",spacing:1,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:["left","right","top","bottom"].map(e=>s(p.Fragment,{children:[t(L,{onClick:a(e,!0),variant:"outlined",children:e}),t(i,{anchor:e,open:m[e],onClose:a(e,!1),...r,children:y(e)})]},e))})},n=x.bind({});n.args={};const Z={component:i,title:"Components/Navigation/Drawer"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [state, setState] = useState({
    bottom: false,
    left: false,
    right: false,
    top: false
  });
  const Icon = <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </SvgIcon>;
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")) {
      return;
    }
    setState({
      ...state,
      [anchor]: open
    });
  };
  const list = (anchor: Anchor) => <Box sx={{
    width: anchor === "top" || anchor === "bottom" ? "auto" : 250
  }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map(text => <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>)}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map(text => <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>)}
      </List>
    </Box>;
  return <Stack direction="row" spacing={1} display="flex" alignItems="center" justifyContent="center" height="100%">
      {(["left", "right", "top", "bottom"] as const).map(anchor => <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="outlined">
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} {...args}>
            {list(anchor)}
          </Drawer>
        </Fragment>)}
    </Stack>;
}`,...n.parameters?.docs?.source}}};const tt=["Basic"];export{n as Basic,tt as __namedExportsOrder,Z as default};
