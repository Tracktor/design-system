import{a as e,a9 as l,r as c,b as p}from"./iframe-B2mei-3E.js";import{B as d}from"./Button-BPNmJ-w6.js";import{B as o}from"./Box-Bfb44pIv.js";import{S as u}from"./Stack-BDVg857W.js";import"./preload-helper-D9Z9MdNV.js";import"./useThemeProps-CQK6z-Qf.js";const i=t=>e(l,{...t});try{i.displayName="ClickAwayListener",i.__docgenInfo={description:"",displayName:"ClickAwayListener",props:{}}}catch{}const h=t=>{const[a,s]=c.useState(!1);return e(u,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%",width:"100%"},children:e(i,{...t,onClickAway:()=>{s(!1)},children:p(o,{sx:{position:"relative"},children:[e(d,{type:"button",variant:"outlined",onClick:()=>{s(r=>!r)},children:"Open menu dropdown"}),a?e(o,{sx:{bgcolor:"background.paper",left:0,p:2,position:"absolute",right:0,top:"100%",zIndex:1},children:"Click me, I will stay visible until you click outside."}):null]})})})},n=h.bind({});n.args={};const v={argTypes:{children:{description:"The wrapped element."},disableReactTree:{description:"If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled."},mouseEvent:{description:"The mouse event to listen to. You can disable the listener by providing false."},onClickAway:{description:"Callback fired when a “click away” event is detected."},touchEvent:{description:"The touch event to listen to. You can disable the listener by providing false."}},component:i,title:"Components/Utils/ClickAwayListener"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}};const A=["Basic"];export{n as Basic,A as __namedExportsOrder,v as default};
