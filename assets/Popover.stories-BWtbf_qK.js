import{a as r,r as d,b as u}from"./iframe-COfzbhnx.js";import{a as m}from"./Popover-CHm6wYC8.js";import{B as h}from"./Button-D7F5_0JI.js";import{T as v}from"./Typography-CJN9rLfT.js";import{B as f}from"./Box-Ndu3TtHP.js";import"./preload-helper-PPVm8Dsz.js";import"./ownerWindow-BCif7y8c.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-m-KUZADf.js";import"./Modal-C7Utgw4w.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-zJ-lrLqq.js";import"./Backdrop-BEZtfx8b.js";import"./Fade-CgU1NuX8.js";const s=({children:n,...t})=>r(m,{...t,children:n});try{s.displayName="Popover",s.__docgenInfo={description:"",displayName:"Popover",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<PopoverSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, PopoverRootSlotPropsOverrides, PopoverOwnerState>; paper?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined'}}}}}catch{}const p=n=>{const[t,a]=d.useState(null),l=!!t,i=l?"simple-popover":void 0;return u(f,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[r(h,{"aria-describedby":i,variant:"outlined",onClick:c=>{a(c.currentTarget)},children:"Open Popover"}),r(s,{id:i,anchorEl:t,onClose:()=>{a(null)},...n,open:l,children:r(v,{sx:{p:2},children:"The content of the Popover."})})]})},e=p.bind({});e.args={};const o=p.bind({});o.args={anchorOrigin:{horizontal:"center",vertical:"bottom"},transformOrigin:{horizontal:"center",vertical:"top"}};const H={component:s,title:"Components/Utils/Popover"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
