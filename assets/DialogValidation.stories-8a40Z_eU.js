import{b as r,a as e,r as k}from"./iframe-DIimKiIQ.js";import{D as b,a as v}from"./DialogCloseIcon-DXjb4JYz.js";import{B as y}from"./Button-aUa1qRhx.js";import{b as B,a as R,c as D}from"./DialogContentText-Bwt1ENzG.js";import{B as I}from"./Box-DrKUciYo.js";import{T as V}from"./Typography-CAPPV5Ea.js";import{B as L}from"./Button-DTv0bT3F.js";import{S as w}from"./Stack-DGnV1gt4.js";import"./preload-helper-PPVm8Dsz.js";import"./Fade-CVGg1UYR.js";import"./Modal-CC9if7oG.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-DMRLiHAY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-C575CsFI.js";import"./Backdrop-KXfriruN.js";import"./CloseIcon-CljoMJbT.js";import"./useThemeProps-CIjGlazY.js";const O=86,E={"@keyframes checkIn":{"0%":{strokeDashoffset:"-30"},"100%":{strokeDashoffset:"0"}},"@keyframes circleIn":{"0%":{opacity:0},"100%":{opacity:1}},"@keyframes scaleIn":{"0%":{transform:"scale(0)"},"100%":{transform:"scale(1)"}},"& svg":{animation:"scaleIn 0.4s ease-out"},"& svg path:first-of-type":{animation:"circleIn 2s ease-out"},"& svg path:last-child":{animation:"checkIn 0.4s ease-out 0.4s both",strokeDasharray:"30",strokeDashoffset:"-30"}},g=({title:m,subtitle:f,buttonPrimary:t,buttonSecondary:o,color:s="secondary",fullWidth:h=!0,maxWidth:S="xs",onClose:C,...x})=>r(v,{maxWidth:S,fullWidth:h,onClose:C,...x,sx:{"& .MuiDialog-paper":{borderColor:({palette:n})=>n[s]["30p"]}},children:[r(B,{sx:{alignItems:"center",backgroundColor:({palette:n})=>n[s]["4p"],display:"flex",flexDirection:"column",padding:3,textAlign:"center",...(t||o)&&{borderBottom:({palette:n})=>`1px solid ${n[s]["12p"]}`}},children:[e(b,{onClick:n=>C?.(n,"closeButton")}),e(I,{sx:{alignItems:"center",backgroundColor:({palette:n})=>n[s]["12p"],borderRadius:"50%",color:({palette:n})=>n[s].main,display:"flex",flexShrink:0,height:O,justifyContent:"center",marginBottom:4,width:O,...E},children:r("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33331 20 3.33331C10.7953 3.33331 3.33334 10.7952 3.33334 20C3.33334 29.2047 10.7953 36.6666 20 36.6666Z",fill:"currentColor"}),e("path",{d:"M28 14L17 25L12 20",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e(V,{variant:"h4",sx:{marginBottom:1},children:m}),e(R,{variant:"body2",children:f})]}),(t||o)&&r(D,{children:[o&&e(y,{variant:"outlined",size:"small",isLoading:o?.loading,onClick:o?.onClick,sx:{flex:1},children:o?.text}),t&&e(y,{variant:"contained",size:"small",isLoading:t?.loading,onClick:t?.onClick,endIcon:e("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.27875 4.5L6.22125 5.5575L9.65625 9L6.22125 12.4425L7.27875 13.5L11.7788 9L7.27875 4.5Z",fill:"currentColor"})}),children:t?.text})]})]});try{g.displayName="DialogValidation",g.__docgenInfo={description:"",displayName:"DialogValidation",props:{title:{defaultValue:null,description:"Title of the dialog",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"Subtitle of the dialog",name:"subtitle",required:!1,type:{name:"string"}},color:{defaultValue:{value:"secondary"},description:"Color of the dialog",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},buttonPrimary:{defaultValue:null,description:"Button primary props",name:"buttonPrimary",required:!1,type:{name:"ButtonProps"}},buttonSecondary:{defaultValue:null,description:"Button secondary props",name:"buttonSecondary",required:!1,type:{name:"ButtonProps"}},onClose:{defaultValue:null,description:"Callback when modal is closed",name:"onClose",required:!1,type:{name:"((event: {}, reason?: string) => void)"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<DialogSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const a=({...m})=>{const[f,t]=k.useState(!0),o=k.useRef(null);return r(w,{spacing:2,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[e(L,{variant:"outlined",onClick:()=>{t(!0)},ref:o,children:"Open dialog validation"}),e(g,{...m,open:f,onClose:()=>{t(!1)},title:"Your order has !",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus."})]})},i=a.bind({});i.args={color:"secondary"};const l=a.bind({});l.args={buttonPrimary:{text:"Continue"},buttonSecondary:{text:"All my orders"}};const c=a.bind({});c.args={buttonPrimary:{text:"Continue"},buttonSecondary:{text:"All my orders"},color:"warning"};const d=a.bind({});d.args={buttonPrimary:{text:"Continue"},buttonSecondary:{text:"All my orders"},color:"info"};const u=a.bind({});u.args={buttonPrimary:{text:"Continue"},buttonSecondary:{text:"All my orders"},color:"error"};const p=a.bind({});p.args={buttonPrimary:{text:"Continue"},buttonSecondary:{text:"All my orders"},color:"success"};const J={component:g,title:"Components/Feedback/DialogValidation"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};const Q=["Basic","WithButton","Warning","Info","ErrorStory","Success"];export{i as Basic,u as ErrorStory,d as Info,p as Success,c as Warning,l as WithButton,Q as __namedExportsOrder,J as default};
