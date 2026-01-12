import{a as t,b as m}from"./iframe-DcYbRMsr.js";import{S as u}from"./Skeleton-OGaGalaU.js";import{S as p}from"./Stack-CRgH-umR.js";import{B as d}from"./Box-pwVYSent.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CUcn4g5r.js";const n=e=>t(u,{...e});try{n.displayName="Skeleton",n.__docgenInfo={description:"",displayName:"Skeleton",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const l=e=>t(p,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:t(n,{variant:"rectangular",...e})}),h=e=>t(p,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:m(d,{sx:{width:300},children:[t(n,{...e}),t(n,{animation:"wave",...e}),t(n,{animation:!1,...e})]})}),S=e=>t(p,{spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:m(d,{sx:{width:300},children:[t(n,{variant:"rectangular",width:300,height:118,...e}),m(d,{sx:{pt:.5},children:[t(n,{...e}),t(n,{width:"60%",...e})]})]})}),a=l.bind({});a.args={height:100,width:200};const r=l.bind({});r.args={sx:{},variant:"text",width:200};const s=l.bind({});s.args={height:60,variant:"circular",width:60};const c=l.bind({});c.args={height:60,variant:"rectangular",width:200};const o=l.bind({});o.args={height:60,variant:"rounded",width:200};const i=h.bind({});i.args={};const g=S.bind({});g.args={};const C={component:n,title:"Components/Feedback/Skeleton"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Box sx={{
    width: 300
  }}>
      <Skeleton {...args} />
      <Skeleton animation="wave" {...args} />
      <Skeleton animation={false} {...args} />
    </Box>
  </Stack>`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Box sx={{
    width: 300
  }}>
      <Skeleton variant="rectangular" width={300} height={118} {...args} />
      <Box sx={{
      pt: 0.5
    }}>
        <Skeleton {...args} />
        <Skeleton width="60%" {...args} />
      </Box>
    </Box>
  </Stack>`,...g.parameters?.docs?.source}}};const j=["Basic","Text","Circular","Rectangular","Rounded","Animation","Pulsate"];export{i as Animation,a as Basic,s as Circular,g as Pulsate,c as Rectangular,o as Rounded,r as Text,j as __namedExportsOrder,C as default};
