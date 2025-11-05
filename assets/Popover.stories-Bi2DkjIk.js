import{a as r,r as d,b as u}from"./iframe-B9XmXiD0.js";import{a as m}from"./Popover-D0ecce4P.js";import{B as h}from"./Button-B1OCesR6.js";import{T as v}from"./Typography-Dqm_VHwU.js";import{B as f}from"./Box-BUmoO4To.js";import"./preload-helper-D9Z9MdNV.js";import"./ownerWindow-Uq3nHk8K.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-bISrlv6c.js";import"./Modal-BqjgCfrr.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CIA1KYon.js";import"./Backdrop-B8oh6vUN.js";import"./Fade-EJFjS-3z.js";const s=({children:n,...t})=>r(m,{...t,children:n});try{s.displayName="Popover",s.__docgenInfo={description:"",displayName:"Popover",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<PopoverSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, PopoverRootSlotPropsOverrides, PopoverOwnerState>; paper?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined'}}}}}catch{}const p=n=>{const[t,a]=d.useState(null),l=!!t,i=l?"simple-popover":void 0;return u(f,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[r(h,{"aria-describedby":i,variant:"outlined",onClick:c=>{a(c.currentTarget)},children:"Open Popover"}),r(s,{id:i,anchorEl:t,onClose:()=>{a(null)},...n,open:l,children:r(v,{sx:{p:2},children:"The content of the Popover."})})]})},e=p.bind({});e.args={};const o=p.bind({});o.args={anchorOrigin:{horizontal:"center",vertical:"bottom"},transformOrigin:{horizontal:"center",vertical:"top"}};const H={component:s,title:"Components/Utils/Popover"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};const L=["Basic","CustomPosition"];export{e as Basic,o as CustomPosition,L as __namedExportsOrder,H as default};
