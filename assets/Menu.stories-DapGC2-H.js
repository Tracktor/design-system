import{a as n,r as M,b as t,S as f}from"./iframe-B-73IjUx.js";import{M as P}from"./Menu-B7qAkX0C.js";import{L as T}from"./ListItem-Ds64AXv3.js";import{L as B}from"./ListItemText-DM2oydw2.js";import{a as w}from"./List-DfpDE_1B.js";import{M as a}from"./MenuItem-BsRD7q0h.js";import{S as v}from"./Stack-CDtb63Ov.js";import{B as L}from"./Button-CR6pWzFj.js";import{L as g}from"./ListItemIcon-BkCsR9pC.js";import{T as H}from"./Typography-C4RqFiPL.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlotProps-Cy2cOhBT.js";import"./Popover-BKeDrWZE.js";import"./ownerWindow-Ch8L5E4_.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DIFWWyFh.js";import"./Modal-DPVqABBB.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dz24du8X.js";import"./Backdrop-BsY_SNod.js";import"./Fade-BwuglgLa.js";import"./MenuList-1Kz3W1lJ.js";import"./isMuiElement-Dhu5G2Yi.js";import"./listItemIconClasses-DGSgJX0E.js";import"./dividerClasses-C5Mmtdmo.js";import"./useThemeProps-ComhHJ2-.js";const l=i=>n(P,{...i});try{l.displayName="Menu",l.__docgenInfo={description:"",displayName:"Menu",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<MenuSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, MenuRootSlotPropsOverrides, MenuOwnerState>; paper?: SlotProps<...>; list?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined"}}}}}catch{}const x=["Show some love to MUI","Show all notification content","Hide sensitive notification content","Hide all notification content"],C=(i,{parameters:k})=>{const p=M.useRef(null),[h,I]=M.useState(null),[S,y]=M.useState(1),o=!!h,b=r=>{I(r.currentTarget)},e=()=>{I(null)},E=(r,u)=>{y(u),I(null)};return M.useEffect(()=>{I(p.current)},[]),k.template==="selected"?t(v,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(w,{component:"nav","aria-label":"Device settings",sx:{backgroundColor:"background.paper"},children:n(T,{id:"lock-button","aria-haspopup":"listbox","aria-controls":"lock-menu","aria-label":"when device is locked","aria-expanded":o?"true":void 0,onClick:b,ref:p,children:n(B,{primary:"When device is locked",secondary:x[S]})})}),n(l,{...i,id:"lock-menu",anchorEl:h,open:o,transitionDuration:0,onClose:e,MenuListProps:{"aria-labelledby":"lock-button",role:"listbox"},children:x.map((r,u)=>t(a,{disabled:u===0,selected:u===S,onClick:z=>E(z,u),children:[r," aa"]},r))})]}):k.template==="icon"?t(v,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(L,{id:"basic-button","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:b,ref:p,children:"Dashboard"}),t(l,{...i,id:"basic-menu",anchorEl:h,open:o,onClose:e,transitionDuration:0,MenuListProps:{"aria-labelledby":"basic-button"},children:[t(a,{onClick:e,children:[n(g,{children:n(f,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ContentCutIcon",children:n("path",{d:"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"})})}),"Cut"]}),t(a,{onClick:e,children:[n(g,{children:n(f,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ContentCopyIcon",children:n("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})})}),"Copy"]}),t(a,{onClick:e,children:[n(g,{children:n(f,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ContentPasteIcon",children:n("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"})})}),n(H,{variant:"h5",children:"Paste with custom typography (h5)"})]})]})]}):t(v,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(L,{id:"basic-button","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:b,ref:p,children:"Dashboard"}),t(l,{...i,id:"basic-menu",anchorEl:h,open:o,onClose:e,transitionDuration:0,MenuListProps:{"aria-labelledby":"basic-button"},children:[n(a,{onClick:e,children:"Profile"}),n(a,{onClick:e,children:"My account"}),n(a,{onClick:e,children:"Logout"})]})]})},d=C.bind({});d.args={};const m=C.bind({});m.args={anchorOrigin:{horizontal:"left",vertical:"top"}};const c=C.bind({});c.args={};c.parameters={template:"icon"};const s=C.bind({});s.args={};s.parameters={template:"selected"};const ln={component:l,title:"Components/Navigation/Menu"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...s.parameters?.docs?.source}}};const rn=["Basic","Positioned","WithIcon","Selected"];export{d as Basic,m as Positioned,s as Selected,c as WithIcon,rn as __namedExportsOrder,ln as default};
