import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Box-DFvgjzeS.js";import{t as r}from"./Stack-BIr57r_j.js";import{t as i}from"./Skeleton-CMYhxntG.js";var a=t=>e(i,{...t});try{a.displayName=`Skeleton`,a.__docgenInfo={description:``,displayName:`Skeleton`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var o=t=>e(r,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:e(a,{variant:`rectangular`,...t})}),s=i=>e(r,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:t(n,{sx:{width:300},children:[e(a,{...i}),e(a,{animation:`wave`,...i}),e(a,{animation:!1,...i})]})}),c=i=>e(r,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:t(n,{sx:{width:300},children:[e(a,{variant:`rectangular`,width:300,height:118,...i}),t(n,{sx:{pt:.5},children:[e(a,{...i}),e(a,{width:`60%`,...i})]})]})}),l=o.bind({});l.args={height:100,width:200};var u=o.bind({});u.args={sx:{},variant:`text`,width:200};var d=o.bind({});d.args={height:60,variant:`circular`,width:60};var f=o.bind({});f.args={height:60,variant:`rectangular`,width:200};var p=o.bind({});p.args={height:60,variant:`rounded`,width:200};var m=s.bind({});m.args={};var h=c.bind({});h.args={};var g={component:a,title:`Components/Feedback/Skeleton`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%"
}}>
    <Box sx={{
    width: 300
  }}>
      <Skeleton {...args} />
      <Skeleton animation="wave" {...args} />
      <Skeleton animation={false} {...args} />
    </Box>
  </Stack>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
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
  </Stack>`,...h.parameters?.docs?.source}}};var _=[`Basic`,`Text`,`Circular`,`Rectangular`,`Rounded`,`Animation`,`Pulsate`];export{m as Animation,l as Basic,d as Circular,h as Pulsate,f as Rectangular,p as Rounded,u as Text,_ as __namedExportsOrder,g as default};