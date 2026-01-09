import{a as n,r as c,b as l,C as i}from"./iframe-D8dqcXmT.js";import{B as p}from"./Backdrop-B0HP8czi.js";import{B as d}from"./Button-D130PddR.js";import{S as m}from"./Stack-BsvHADnk.js";import"./preload-helper-PPVm8Dsz.js";import"./Fade-CjsLrX0z.js";import"./useThemeProps-CY8knBA4.js";const t=o=>n(p,{...o});try{t.displayName="Backdrop",t.__docgenInfo={description:"",displayName:"Backdrop",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<BackdropSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", BackdropComponentsPropsOverrides, BackdropOwnerState>; transition?: SlotComponentProps<...>; } | undefined'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const u=o=>{const[r,s]=c.useState(!1);return l(m,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[n(d,{onClick:()=>{s(!r)},variant:"outlined",children:"Click to show backdrop"}),n(t,{...o,sx:{color:"#fff",zIndex:a=>a.zIndex.drawer+1},open:r,onClick:()=>{s(!1)},children:n(i,{color:"inherit"})})]})},e=u.bind({});e.args={};const _={component:t,title:"Components/Feedback/Backdrop"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button onClick={handleToggle} variant="outlined">
        Click to show backdrop
      </Button>
      <Backdrop {...args} sx={{
      color: "#fff",
      zIndex: theme => theme.zIndex.drawer + 1
    }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>;
}`,...e.parameters?.docs?.source}}};const I=["Basic"];export{e as Basic,I as __namedExportsOrder,_ as default};
