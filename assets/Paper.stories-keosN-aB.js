import{a as n,P as l,b as m}from"./iframe-DcYbRMsr.js";import{S as p}from"./Stack-CRgH-umR.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CUcn4g5r.js";const t=({children:e,...i})=>n(l,{...i,children:e});try{t.displayName="Paper",t.__docgenInfo={description:"",displayName:"Paper",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const c=e=>m(p,{sx:{"& > :not(style)":{height:128,m:1,width:128}},direction:"row",height:"100%",justifyContent:"center",alignItems:"center",children:[n(t,{elevation:0,...e}),n(t,{...e}),n(t,{elevation:3,...e})]}),d=e=>n(p,{sx:{"& > :not(style)":{height:128,m:1,width:128}},direction:"row",height:"100%",justifyContent:"center",alignItems:"center",children:[0,1,2,3,4,6,8,12,16,24].map(i=>n(t,{elevation:i,...e},i))}),r=c.bind({});r.args={};const a=c.bind({});a.args={variant:"outlined"};const s=c.bind({});s.args={square:!0};const o=d.bind({});o.args={};const P={component:t,title:"Components/Surface/Paper"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(elevation => <Paper key={elevation} elevation={elevation} {...args} />)}
  </Stack>`,...o.parameters?.docs?.source}}};const S=["Basic","Outlined","Square","Elevation"];export{r as Basic,o as Elevation,a as Outlined,s as Square,S as __namedExportsOrder,P as default};
