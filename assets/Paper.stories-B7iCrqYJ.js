import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Stack-BIr57r_j.js";import{t as r}from"./Paper-Apd769t-.js";var i=({children:t,...n})=>e(r,{...n,children:t});try{i.displayName=`Paper`,i.__docgenInfo={description:``,displayName:`Paper`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var a=r=>t(n,{sx:{"& > :not(style)":{height:128,m:1,width:128}},direction:`row`,height:`100%`,justifyContent:`center`,alignItems:`center`,children:[e(i,{elevation:0,...r}),e(i,{...r}),e(i,{elevation:3,...r})]}),o=t=>e(n,{sx:{"& > :not(style)":{height:128,m:1,width:128}},direction:`row`,height:`100%`,justifyContent:`center`,alignItems:`center`,children:[0,1,2,3,4,6,8,12,16,24].map(n=>e(i,{elevation:n,...t},n))}),s=a.bind({});s.args={};var c=a.bind({});c.args={variant:`outlined`};var l=a.bind({});l.args={square:!0};var u=o.bind({});u.args={};var d={component:i,title:`Components/Surface/Paper`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Stack sx={{
  "& > :not(style)": {
    height: 128,
    m: 1,
    width: 128
  }
}} direction="row" height="100%" justifyContent="center" alignItems="center">
    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(elevation => <Paper key={elevation} elevation={elevation} {...args} />)}
  </Stack>`,...u.parameters?.docs?.source}}};var f=[`Basic`,`Outlined`,`Square`,`Elevation`];export{s as Basic,u as Elevation,c as Outlined,l as Square,f as __namedExportsOrder,d as default};