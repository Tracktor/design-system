import{r as S,a as t,P as v,b as w}from"./iframe-DKGLFk-I.js";import{S as b}from"./Slide-BkfeBqBf.js";import{B as a}from"./Button-BNwKoQp6.js";import{S as s}from"./Stack-Cf3ozuxK.js";import"./preload-helper-PPVm8Dsz.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CG3scOT4.js";import"./useThemeProps-woUEUDRJ.js";const P=({in:r,children:p,sx:m,padding:o,direction:i,position:u="fixed",mountOnEnter:h=!0,unmountOnExit:f=!0,...g},x)=>t(b,{mountOnEnter:h,unmountOnExit:f,in:r===void 0?!0:r,direction:"up",children:t(v,{square:!0,elevation:0,ref:x,sx:{borderTop:({palette:B})=>`1px solid ${B.divider}`,bottom:0,left:0,padding:o,paddingX:o?void 0:2,paddingY:o?void 0:3,position:u,right:0,zIndex:10,...i==="column"&&{display:"flex",flexDirection:"column"},...i==="row"&&{display:"flex",flexDirection:"row"},...m},...g,children:p})}),c=S.forwardRef(P),l={mobile:{name:"Mobile",styles:{height:"600px",width:"480px"}},tablet:{name:"Tablet",styles:{height:"600px",width:"768px"}}},d=r=>t(s,{spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:t(c,{...r,children:w(s,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[t(a,{fullWidth:!0,variant:"contained",children:"Hello"}),t(a,{fullWidth:!0,variant:"contained",children:"World"})]})})}),e=d.bind({});e.args={};e.parameters={viewport:{defaultViewport:"mobile",viewports:l}};const n=d.bind({});n.args={in:!1};n.parameters={viewport:{defaultViewport:"mobile",viewports:l}};const E={component:c,title:"Components/Surface/BottomFixedPaper"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <BottomFixedPaper {...args}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button fullWidth variant="contained">
          Hello
        </Button>
        <Button fullWidth variant="contained">
          World
        </Button>
      </Stack>
    </BottomFixedPaper>
  </Stack>`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <BottomFixedPaper {...args}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button fullWidth variant="contained">
          Hello
        </Button>
        <Button fullWidth variant="contained">
          World
        </Button>
      </Stack>
    </BottomFixedPaper>
  </Stack>`,...n.parameters?.docs?.source}}};const H=["Basic","InFalse"];export{e as Basic,n as InFalse,H as __namedExportsOrder,E as default};
