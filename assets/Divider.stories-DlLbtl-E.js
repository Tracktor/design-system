import{a as e,b as c}from"./iframe-DJVCH6ey.js";import{D as l}from"./Divider-KxeVvoqx.js";import{B as a}from"./Box-g96slZe0.js";import{S as p}from"./Stack-D5AWOCXk.js";import{C as m}from"./Chip-B5tw8DrN.js";import{G as d}from"./Grid--H6S8dwC.js";import{T as u}from"./Typography-B5XpbpEn.js";import"./preload-helper-PPVm8Dsz.js";import"./dividerClasses-CRYvW0IR.js";import"./useThemeProps-R_U2h2co.js";import"./isMuiElement-_x47OoU6.js";const i=r=>e(l,{...r});try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const t=e(u,{variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."}),x=r=>e(p,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(a,{width:"100%",children:e(i,{...r})})}),h=r=>e(a,{display:"flex",justifyContent:"center",children:c(a,{maxWidth:500,sx:{border:"solid 1px",borderColor:"divider",borderRadius:2,p:2},children:[t,e(i,{...r,children:"CENTER"}),t,e(i,{textAlign:"left",...r,children:"LEFT"}),t,e(i,{textAlign:"right",...r,children:"RIGHT"}),t,e(i,{...r,children:e(m,{label:"CHIP"})}),t]})}),g=r=>e(a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:e(a,{maxWidth:500,sx:{border:"solid 1px",borderColor:"divider",borderRadius:2,p:2},children:c(d,{container:!0,children:[e(d,{size:"grow",children:t}),e(i,{orientation:"vertical",flexItem:!0,...r,children:"VERTICAL"}),e(d,{size:"grow",children:t})]})})}),n=x.bind({});n.args={};const o=h.bind({});o.args={};const s=g.bind({});s.args={};const G={component:i,title:"Components/Data Display/Divider"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
