import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as i}from"./Box-DFvgjzeS.js";import{t as a}from"./Portal-BfsDTpAu.js";import{t as o}from"./Button-C-NK_Lvb.js";var s=e(t(),1),c=e=>n(a,{...e});try{Portal.displayName=`Portal`,Portal.__docgenInfo={description:``,displayName:`Portal`,props:{}}}catch{}var l=(e=>{let[t,a]=(0,s.useState)(!1),l=(0,s.useRef)(null);return r(i,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(o,{variant:`outlined`,onClick:()=>{a(!t)},children:t?`Unmount children`:`Mount children`}),r(i,{sx:{border:`1px solid`,my:1,p:1},children:[`It looks like I will render here.`,t?n(c,{container:l.current,...e,children:n(`span`,{children:`But I actually render here!`})}):null]}),n(i,{sx:{border:`1px solid`,my:1,p:1},ref:l})]})}).bind({});l.args={};var u={component:c,title:`Components/Utils/Portal`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
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
}`,...l.parameters?.docs?.source}}};var d=[`Basic`];export{l as Basic,d as __namedExportsOrder,u as default};