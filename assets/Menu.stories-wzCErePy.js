import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./SvgIcon-c7Jm5eCq.js";import{t as o}from"./Typography-BNYwlYGw.js";import{t as s}from"./Button-C-NK_Lvb.js";import{t as c}from"./List-dHlU8BBG.js";import{t as l}from"./ListItem-BnsA-Tfl.js";import{t as u}from"./ListItemIcon-C2B6H72e.js";import{t as d}from"./ListItemText-Cs8fd-Dg.js";import{t as f}from"./Menu-BVLb5WIb.js";import{t as p}from"./MenuItem-sEwEC_dw.js";var m=e(t(),1),h=e=>n(f,{...e});try{h.displayName=`Menu`,h.__docgenInfo={description:``,displayName:`Menu`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<MenuSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, MenuRootSlotPropsOverrides, MenuOwnerState>; paper?: SlotProps<...>; list?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined`}}}}}catch{}var g=[`Show some love to MUI`,`Show all notification content`,`Hide sensitive notification content`,`Hide all notification content`],_=(e,{parameters:t})=>{let f=(0,m.useRef)(null),[_,v]=(0,m.useState)(null),[y,b]=(0,m.useState)(1),x=!!_,S=e=>{v(e.currentTarget)},C=()=>{v(null)},w=(e,t)=>{b(t),v(null)};return(0,m.useEffect)(()=>{v(f.current)},[]),t.template===`selected`?r(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(c,{component:`nav`,"aria-label":`Device settings`,sx:{backgroundColor:`background.paper`},children:n(l,{id:`lock-button`,"aria-haspopup":`listbox`,"aria-controls":`lock-menu`,"aria-label":`when device is locked`,"aria-expanded":x?`true`:void 0,onClick:S,ref:f,children:n(d,{primary:`When device is locked`,secondary:g[y]})})}),n(h,{...e,id:`lock-menu`,anchorEl:_,open:x,transitionDuration:0,onClose:C,MenuListProps:{"aria-labelledby":`lock-button`,role:`listbox`},children:g.map((e,t)=>r(p,{disabled:t===0,selected:t===y,onClick:e=>w(e,t),children:[e,` aa`]},e))})]}):t.template===`icon`?r(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{id:`basic-button`,"aria-controls":x?`basic-menu`:void 0,"aria-haspopup":`true`,"aria-expanded":x?`true`:void 0,onClick:S,ref:f,children:`Dashboard`}),r(h,{...e,id:`basic-menu`,anchorEl:_,open:x,onClose:C,transitionDuration:0,MenuListProps:{"aria-labelledby":`basic-button`},children:[r(p,{onClick:C,children:[n(u,{children:n(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentCutIcon`,children:n(`path`,{d:`M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z`})})}),`Cut`]}),r(p,{onClick:C,children:[n(u,{children:n(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentCopyIcon`,children:n(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z`})})}),`Copy`]}),r(p,{onClick:C,children:[n(u,{children:n(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentPasteIcon`,children:n(`path`,{d:`M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z`})})}),n(o,{variant:`h5`,children:`Paste with custom typography (h5)`})]})]})]}):r(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(s,{id:`basic-button`,"aria-controls":x?`basic-menu`:void 0,"aria-haspopup":`true`,"aria-expanded":x?`true`:void 0,onClick:S,ref:f,children:`Dashboard`}),r(h,{...e,id:`basic-menu`,anchorEl:_,open:x,onClose:C,transitionDuration:0,MenuListProps:{"aria-labelledby":`basic-button`},children:[n(p,{onClick:C,children:`Profile`}),n(p,{onClick:C,children:`My account`}),n(p,{onClick:C,children:`Logout`})]})]})},v=_.bind({});v.args={};var y=_.bind({});y.args={anchorOrigin:{horizontal:`left`,vertical:`top`}};var b=_.bind({});b.args={},b.parameters={template:`icon`};var x=_.bind({});x.args={},x.parameters={template:`selected`};var S={component:h,title:`Components/Navigation/Menu`};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args, {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args, {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args, {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args, {
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
}`,...x.parameters?.docs?.source}}};var C=[`Basic`,`Positioned`,`WithIcon`,`Selected`];export{v as Basic,y as Positioned,x as Selected,b as WithIcon,C as __namedExportsOrder,S as default};