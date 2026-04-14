import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./SvgIcon-c7Jm5eCq.js";import{t as s}from"./Button-C-NK_Lvb.js";import{t as c}from"./Divider-Dm1KHk8o.js";import{t as l}from"./Drawer-ChEoWWI8.js";import{t as u}from"./List-dHlU8BBG.js";import{t as d}from"./ListItem-BnsA-Tfl.js";import{t as f}from"./ListItemButton-BNDaM0Mi.js";import{t as p}from"./ListItemIcon-C2B6H72e.js";import{t as m}from"./ListItemText-Cs8fd-Dg.js";var h=e(t(),1),g=e=>n(l,{...e});try{g.displayName=`Drawer`,g.__docgenInfo={description:``,displayName:`Drawer`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<DrawerSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DrawerRootSlotPropsOverrides, DrawerOwnerState>; backdrop?: SlotProps<...>; docked?: SlotProps<...> | undefined; paper?: SlotProps<...> | undefined; transition?: SlotProps<...> | undefined; } | undefined`}}}}}catch{}var _=(e=>{let[t,l]=(0,h.useState)({bottom:!1,left:!1,right:!1,top:!1}),_=n(o,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`,children:n(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`})}),v=(e,n)=>r=>{r.type===`keydown`&&(r.key===`Tab`||r.key===`Shift`)||l({...t,[e]:n})},y=e=>r(i,{sx:{width:e===`top`||e===`bottom`?`auto`:250},role:`presentation`,onClick:v(e,!1),onKeyDown:v(e,!1),children:[n(u,{children:[`Inbox`,`Starred`,`Send email`,`Drafts`].map(e=>n(d,{disablePadding:!0,children:r(f,{children:[n(p,{children:_}),n(m,{primary:e})]})},e))}),n(c,{}),n(u,{children:[`All mail`,`Trash`,`Spam`].map(e=>n(d,{disablePadding:!0,children:r(f,{children:[n(p,{children:_}),n(m,{primary:e})]})},e))})]});return n(a,{direction:`row`,spacing:1,display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[`left`,`right`,`top`,`bottom`].map(i=>r(h.Fragment,{children:[n(s,{onClick:v(i,!0),variant:`outlined`,children:i}),n(g,{anchor:i,open:t[i],onClose:v(i,!1),...e,children:y(i)})]},i))})}).bind({});_.args={};var v={component:g,title:`Components/Navigation/Drawer`};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
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
}`,..._.parameters?.docs?.source}}};var y=[`Basic`];export{_ as Basic,y as __namedExportsOrder,v as default};