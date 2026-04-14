import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Box-DFvgjzeS.js";import{t as r}from"./Grid-Cf8f48zR.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./Typography-BNYwlYGw.js";import{t as o}from"./Chip-Be_wopR6.js";import{t as s}from"./Divider-Dm1KHk8o.js";var c=t=>e(s,{...t});try{c.displayName=`Divider`,c.__docgenInfo={description:``,displayName:`Divider`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var l=e(a,{variant:`body2`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.`}),u=t=>e(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:e(n,{width:`100%`,children:e(c,{...t})})}),d=r=>e(n,{display:`flex`,justifyContent:`center`,children:t(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:[l,e(c,{...r,children:`CENTER`}),l,e(c,{textAlign:`left`,...r,children:`LEFT`}),l,e(c,{textAlign:`right`,...r,children:`RIGHT`}),l,e(c,{...r,children:e(o,{label:`CHIP`})}),l]})}),f=i=>e(n,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:e(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:t(r,{container:!0,children:[e(r,{size:`grow`,children:l}),e(c,{orientation:`vertical`,flexItem:!0,...i,children:`VERTICAL`}),e(r,{size:`grow`,children:l})]})})}),p=u.bind({});p.args={};var m=d.bind({});m.args={};var h=f.bind({});h.args={};var g={component:c,title:`Components/Data Display/Divider`};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width="100%">
      <Divider {...args} />
    </Box>
  </Stack>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center">
    <Box maxWidth={500} sx={{
    border: "solid 1px",
    borderColor: "divider",
    borderRadius: 2,
    p: 2
  }}>
      {content}
      <Divider {...args}>CENTER</Divider>
      {content}
      <Divider textAlign="left" {...args}>
        LEFT
      </Divider>
      {content}
      <Divider textAlign="right" {...args}>
        RIGHT
      </Divider>
      {content}
      <Divider {...args}>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Box>
  </Box>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Box maxWidth={500} sx={{
    border: "solid 1px",
    borderColor: "divider",
    borderRadius: 2,
    p: 2
  }}>
      <Grid container>
        <Grid size="grow">{content}</Grid>
        <Divider orientation="vertical" flexItem {...args}>
          VERTICAL
        </Divider>
        <Grid size="grow">{content}</Grid>
      </Grid>
    </Box>
  </Box>`,...h.parameters?.docs?.source}}};var _=[`Basic`,`WithText`,`Vertical`];export{p as Basic,h as Vertical,m as WithText,_ as __namedExportsOrder,g as default};