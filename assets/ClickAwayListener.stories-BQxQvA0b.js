import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./Button-C-NK_Lvb.js";import{t as s}from"./ClickAwayListener-25ftiX6Q.js";var c=e(t(),1),l=e=>n(s,{...e});try{l.displayName=`ClickAwayListener`,l.__docgenInfo={description:``,displayName:`ClickAwayListener`,props:{}}}catch{}var u=(e=>{let[t,s]=(0,c.useState)(!1),u=()=>{s(e=>!e)},d=()=>{s(!1)},f={bgcolor:`background.paper`,left:0,p:2,position:`absolute`,right:0,top:`100%`,zIndex:1};return n(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:n(l,{...e,onClickAway:d,children:r(i,{sx:{position:`relative`},children:[n(o,{type:`button`,variant:`outlined`,onClick:u,children:`Open menu dropdown`}),t?n(i,{sx:f,children:`Click me, I will stay visible until you click outside.`}):null]})})})}).bind({});u.args={};var d={argTypes:{children:{description:`The wrapped element.`},disableReactTree:{description:`If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled.`},mouseEvent:{description:`The mouse event to listen to. You can disable the listener by providing false.`},onClickAway:{description:`Callback fired when a “click away” event is detected.`},touchEvent:{description:`The touch event to listen to. You can disable the listener by providing false.`}},component:l,title:`Components/Utils/ClickAwayListener`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const styles: SxProps = {
    bgcolor: "background.paper",
    left: 0,
    p: 2,
    position: "absolute",
    right: 0,
    top: "100%",
    zIndex: 1
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%",
    width: "100%"
  }}>
      <ClickAwayListener {...args} onClickAway={handleClickAway}>
        <Box sx={{
        position: "relative"
      }}>
          <Button type="button" variant="outlined" onClick={handleClick}>
            Open menu dropdown
          </Button>
          {open ? <Box sx={styles}>Click me, I will stay visible until you click outside.</Box> : null}
        </Box>
      </ClickAwayListener>
    </Stack>;
}`,...u.parameters?.docs?.source}}};var f=[`Basic`];export{u as Basic,f as __namedExportsOrder,d as default};