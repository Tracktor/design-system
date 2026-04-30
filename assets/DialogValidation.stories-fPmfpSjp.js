import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./Typography-BNYwlYGw.js";import{t as s}from"./Button-C-NK_Lvb.js";import{n as c,t as l}from"./DialogCloseIcon-f0n7vRD1.js";import{r as u,t as d}from"./DialogContent-u3dgL-lw.js";import{t as f}from"./DialogContentText-B1hBEJqO.js";import{t as p}from"./Button-C0MsCsph.js";var m=e(t(),1),h=86,g={"@keyframes checkIn":{"0%":{strokeDashoffset:`-30`},"100%":{strokeDashoffset:`0`}},"@keyframes circleIn":{"0%":{opacity:0},"100%":{opacity:1}},"@keyframes scaleIn":{"0%":{transform:`scale(0)`},"100%":{transform:`scale(1)`}},"& svg":{animation:`scaleIn 0.4s ease-out`},"& svg path:first-of-type":{animation:`circleIn 2s ease-out`},"& svg path:last-child":{animation:`checkIn 0.4s ease-out 0.4s both`,strokeDasharray:`30`,strokeDashoffset:`-30`}},_=({title:e,subtitle:t,buttonPrimary:a,buttonSecondary:s,color:m=`secondary`,fullWidth:_=!0,maxWidth:v=`xs`,onClose:y,...b})=>r(c,{maxWidth:v,fullWidth:_,onClose:y,...b,sx:{"& .MuiDialog-paper":{borderColor:({palette:e})=>e[m][`30p`]}},children:[r(d,{sx:{alignItems:`center`,backgroundColor:({palette:e})=>e[m][`4p`],display:`flex`,flexDirection:`column`,padding:3,textAlign:`center`,...(a||s)&&{borderBottom:({palette:e})=>`1px solid ${e[m][`12p`]}`}},children:[n(l,{onClick:e=>y?.(e,`closeButton`)}),n(i,{sx:{alignItems:`center`,backgroundColor:({palette:e})=>e[m][`12p`],borderRadius:`50%`,color:({palette:e})=>e[m].main,display:`flex`,flexShrink:0,height:h,justifyContent:`center`,marginBottom:4,width:h,...g},children:r(`svg`,{width:`40`,height:`40`,viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[n(`path`,{d:`M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33331 20 3.33331C10.7953 3.33331 3.33334 10.7952 3.33334 20C3.33334 29.2047 10.7953 36.6666 20 36.6666Z`,fill:`currentColor`}),n(`path`,{d:`M28 14L17 25L12 20`,stroke:`white`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),n(o,{variant:`h4`,sx:{marginBottom:1},children:e}),n(f,{variant:`body2`,children:t})]}),(a||s)&&r(u,{children:[s&&n(p,{variant:`outlined`,size:`small`,isLoading:s?.loading,onClick:s?.onClick,sx:{flex:1},children:s?.text}),a&&n(p,{variant:`contained`,size:`small`,isLoading:a?.loading,onClick:a?.onClick,endIcon:n(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:n(`path`,{d:`M7.27875 4.5L6.22125 5.5575L9.65625 9L6.22125 12.4425L7.27875 13.5L11.7788 9L7.27875 4.5Z`,fill:`currentColor`})}),children:a?.text})]})]});try{_.displayName=`DialogValidation`,_.__docgenInfo={description:``,displayName:`DialogValidation`,props:{title:{defaultValue:null,description:`Title of the dialog`,name:`title`,required:!1,type:{name:`string`}},subtitle:{defaultValue:null,description:`Subtitle of the dialog`,name:`subtitle`,required:!1,type:{name:`string`}},color:{defaultValue:{value:`secondary`},description:`Color of the dialog`,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"secondary"`},{value:`"success"`},{value:`"error"`},{value:`"info"`},{value:`"warning"`}]}},buttonPrimary:{defaultValue:null,description:`Button primary props`,name:`buttonPrimary`,required:!1,type:{name:`ButtonProps`}},buttonSecondary:{defaultValue:null,description:`Button secondary props`,name:`buttonSecondary`,required:!1,type:{name:`ButtonProps`}},onClose:{defaultValue:null,description:`Callback when modal is closed`,name:`onClose`,required:!1,type:{name:`((event: {}, reason?: string) => void)`}},backgroundColor:{defaultValue:null,description:``,name:`backgroundColor`,required:!1,type:{name:`string`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<DialogSlots>`}}}}}catch{}var v=({...e})=>{let[t,i]=(0,m.useState)(!0),o=(0,m.useRef)(null),c=()=>{i(!0)},l=()=>{i(!1)};return r(a,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[n(s,{variant:`outlined`,onClick:c,ref:o,children:`Open dialog validation`}),n(_,{...e,open:t,onClose:l,title:`Your order has !`,subtitle:`Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus.`})]})},y=v.bind({});y.args={color:`secondary`};var b=v.bind({});b.args={buttonPrimary:{text:`Continue`},buttonSecondary:{text:`All my orders`}};var x=v.bind({});x.args={buttonPrimary:{text:`Continue`},buttonSecondary:{text:`All my orders`},color:`warning`};var S=v.bind({});S.args={buttonPrimary:{text:`Continue`},buttonSecondary:{text:`All my orders`},color:`info`};var C=v.bind({});C.args={buttonPrimary:{text:`Continue`},buttonSecondary:{text:`All my orders`},color:`error`};var w=v.bind({});w.args={buttonPrimary:{text:`Continue`},buttonSecondary:{text:`All my orders`},color:`success`};var T={component:_,title:`Components/Feedback/DialogValidation`};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation {...args} open={open} onClose={handleClose} title="Your order has !" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus." />
    </Stack>;
}`,...w.parameters?.docs?.source}}};var E=[`Basic`,`WithButton`,`Warning`,`Info`,`ErrorStory`,`Success`];export{y as Basic,C as ErrorStory,S as Info,w as Success,x as Warning,b as WithButton,E as __namedExportsOrder,T as default};