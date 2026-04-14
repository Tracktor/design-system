import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Typography-BNYwlYGw.js";import{t as o}from"./Button-C-NK_Lvb.js";import{t as s}from"./Popover-L1gmYwyn.js";var c=e(t(),1),l=({children:e,...t})=>n(s,{...t,children:e});try{l.displayName=`Popover`,l.__docgenInfo={description:``,displayName:`Popover`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<PopoverSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, PopoverRootSlotPropsOverrides, PopoverOwnerState>; paper?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined`}}}}}catch{}var u=e=>{let[t,s]=(0,c.useState)(null),u=!!t,d=u?`simple-popover`:void 0,f=e=>{s(e.currentTarget)},p=()=>{s(null)};return r(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(o,{"aria-describedby":d,variant:`outlined`,onClick:f,children:`Open Popover`}),n(l,{id:d,anchorEl:t,onClose:p,...e,open:u,children:n(a,{sx:{p:2},children:`The content of the Popover.`})})]})},d=u.bind({});d.args={};var f=u.bind({});f.args={anchorOrigin:{horizontal:`center`,vertical:`bottom`},transformOrigin:{horizontal:`center`,vertical:`top`}};var p={component:l,title:`Components/Utils/Popover`};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} anchorEl={anchorEl} onClose={handleClose} {...args} open={open}>
        <Typography sx={{
        p: 2
      }}>The content of the Popover.</Typography>
      </Popover>
    </Box>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} anchorEl={anchorEl} onClose={handleClose} {...args} open={open}>
        <Typography sx={{
        p: 2
      }}>The content of the Popover.</Typography>
      </Popover>
    </Box>;
}`,...f.parameters?.docs?.source}}};var m=[`Basic`,`CustomPosition`];export{d as Basic,f as CustomPosition,m as __namedExportsOrder,p as default};