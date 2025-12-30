import{a as e,b as m}from"./iframe-X86txNIV.js";import{B as y}from"./Badge-D29Uj9WV.js";import{T as o}from"./Typography-CUKm-Ru-.js";import{S as h}from"./Stack-DUrGvMZA.js";import{B as u}from"./Box-D5yNz9yp.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousProps-BMf_3HYl.js";import"./useThemeProps-CDY-9Aaq.js";const a=r=>e(y,{...r});try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<BadgeSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"span", BadgeRootSlotPropsOverrides, { children?: ReactNode; anchorOrigin: BadgeOrigin; className?: string; ... 11 more ...; displayValue: ReactNode; }>; badge?: SlotProps<...> | undefined; } | undefined'}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const t=r=>e(h,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(a,{badgeContent:4,...r,children:e(o,{variant:"h4",children:"✉️"})})}),B=r=>m(h,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(a,{badgeContent:4,color:"default",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"primary",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"secondary",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"error",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"warning",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"info",...r,children:e(o,{variant:"h4",children:"✉️"})}),e(a,{badgeContent:4,color:"success",...r,children:e(o,{variant:"h4",children:"✉️"})})]}),C=r=>e(h,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(a,{...r,children:e(u,{component:"span",sx:{backgroundColor:"secondary.main",borderRadius:"50%",height:40,width:40}})})}),n=t.bind({});n.args={badgeContent:4,color:"primary"};const i=B.bind({});i.args={};const s=t.bind({});s.args={badgeContent:0,color:"primary",showZero:!0};const c=t.bind({});c.args={badgeContent:0,color:"primary",showZero:!1};const g=t.bind({});g.args={badgeContent:1e3,color:"primary",max:99};const d=t.bind({});d.args={color:"primary",variant:"dot"};const p=t.bind({});p.args={anchorOrigin:{horizontal:"right",vertical:"top"},color:"primary"};const l=C.bind({});l.args={badgeContent:" ",color:"primary",overlap:"circular"};const I={argTypes:{anchorOrigin:{mapping:{BottomLeft:{horizontal:"left",vertical:"bottom"},BottomRight:{horizontal:"right",vertical:"bottom"},TopLeft:{horizontal:"left",vertical:"top"},TopRight:{horizontal:"right",vertical:"top"}},options:["BottomLeft","BottomRight","TopLeft","TopRight"]},overlap:{control:{type:"radio"},options:["circular","rectangular"]}},component:a,title:"Components/Data Display/Badge"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} color="default" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="primary" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="secondary" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="error" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="warning" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="info" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
    <Badge badgeContent={4} color="success" {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge {...args}>
      <Box component="span" sx={{
      backgroundColor: "secondary.main",
      borderRadius: "50%",
      height: 40,
      width: 40
    }} />
    </Badge>
  </Stack>`,...l.parameters?.docs?.source}}};const x=["Basic","Color","Zero","ZeroHidden","Max","Dot","Alignment","BadgeOverlap"];export{p as Alignment,l as BadgeOverlap,n as Basic,i as Color,d as Dot,g as Max,s as Zero,c as ZeroHidden,x as __namedExportsOrder,I as default};
