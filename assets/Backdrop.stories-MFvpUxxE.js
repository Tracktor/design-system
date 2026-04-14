import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./CircularProgress-D8Cc5zFZ.js";import{t as o}from"./Backdrop-DudeCraL.js";import{t as s}from"./Button-C-NK_Lvb.js";var c=e(t(),1),l=e=>n(o,{...e});try{l.displayName=`Backdrop`,l.__docgenInfo={description:``,displayName:`Backdrop`,props:{slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<BackdropSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<"div", BackdropComponentsPropsOverrides, BackdropOwnerState>; transition?: SlotComponentProps<...>; } | undefined`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var u=(e=>{let[t,o]=(0,c.useState)(!1),u=()=>{o(!1)};return r(i,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[n(s,{onClick:()=>{o(!t)},variant:`outlined`,children:`Click to show backdrop`}),n(l,{...e,sx:{color:`#fff`,zIndex:e=>e.zIndex.drawer+1},open:t,onClick:u,children:n(a,{color:`inherit`})})]})}).bind({});u.args={};var d={component:l,title:`Components/Feedback/Backdrop`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
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
}`,...u.parameters?.docs?.source}}};var f=[`Basic`];export{u as Basic,f as __namedExportsOrder,d as default};