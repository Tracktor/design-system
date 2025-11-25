import{a as e,b as c}from"./iframe-iTQVGlDB.js";import{D as l}from"./Divider-top--QCC.js";import{B as a}from"./Box-CpLfrFgH.js";import{S as p}from"./Stack-BXjlknso.js";import{C as m}from"./Chip-BTdqDIke.js";import{G as d}from"./Grid-Z_i-mBKu.js";import{T as u}from"./Typography-DGDF1be6.js";import"./preload-helper-D9Z9MdNV.js";import"./dividerClasses-CiOvvj0I.js";import"./useThemeProps-CsH5eJxn.js";import"./isMuiElement-CJS-XTmX.js";const i=r=>e(l,{...r});try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const t=e(u,{variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."}),x=r=>e(p,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(a,{width:"100%",children:e(i,{...r})})}),h=r=>e(a,{display:"flex",justifyContent:"center",children:c(a,{maxWidth:500,sx:{border:"solid 1px",borderColor:"divider",borderRadius:2,p:2},children:[t,e(i,{...r,children:"CENTER"}),t,e(i,{textAlign:"left",...r,children:"LEFT"}),t,e(i,{textAlign:"right",...r,children:"RIGHT"}),t,e(i,{...r,children:e(m,{label:"CHIP"})}),t]})}),g=r=>e(a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:e(a,{maxWidth:500,sx:{border:"solid 1px",borderColor:"divider",borderRadius:2,p:2},children:c(d,{container:!0,children:[e(d,{size:"grow",children:t}),e(i,{orientation:"vertical",flexItem:!0,...r,children:"VERTICAL"}),e(d,{size:"grow",children:t})]})})}),n=x.bind({});n.args={};const o=h.bind({});o.args={};const s=g.bind({});s.args={};const G={component:i,title:"Components/Data Display/Divider"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width="100%">
      <Divider {...args} />
    </Box>
  </Stack>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center">
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
  </Box>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
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
  </Box>`,...s.parameters?.docs?.source}}};const R=["Basic","WithText","Vertical"];export{n as Basic,s as Vertical,o as WithText,R as __namedExportsOrder,G as default};
