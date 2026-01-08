import{a as n,r as a,b as l}from"./iframe-BvWu_UE0.js";import{P as d}from"./Portal-DT4VRDmi.js";import{B as p}from"./Button-InTMRXiv.js";import{B as o}from"./Box-Bqv_4rA2.js";import"./preload-helper-PPVm8Dsz.js";const c=r=>n(d,{...r});try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const u=r=>{const[t,i]=a.useState(!1),s=a.useRef(null);return l(o,{alignItems:"center",justifyContent:"center",height:"100%",children:[n(p,{variant:"outlined",onClick:()=>{i(!t)},children:t?"Unmount children":"Mount children"}),l(o,{sx:{border:"1px solid",my:1,p:1},children:["It looks like I will render here.",t?n(c,{container:s.current,...r,children:n("span",{children:"But I actually render here!"})}):null]}),n(o,{sx:{border:"1px solid",my:1,p:1},ref:s})]})},e=u.bind({});e.args={};const P={component:c,title:"Components/Utils/Portal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  const container = useRef(null);
  const handleClick = () => {
    setShow(!show);
  };
  return <Box alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </Button>
      <Box sx={{
      border: "1px solid",
      my: 1,
      p: 1
    }}>
        It looks like I will render here.
        {show ? <Portal container={container.current} {...args}>
            <span>But I actually render here!</span>
          </Portal> : null}
      </Box>
      <Box sx={{
      border: "1px solid",
      my: 1,
      p: 1
    }} ref={container} />
    </Box>;
}`,...e.parameters?.docs?.source}}};const _=["Basic"];export{e as Basic,_ as __namedExportsOrder,P as default};
