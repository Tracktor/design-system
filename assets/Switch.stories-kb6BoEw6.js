import{a as e,b as n}from"./iframe-ZvY-BYO7.js";import{S as l}from"./Switch-BL6_d4Qv.js";import{S as s}from"./Stack-CqYLkQZ-.js";import{F as i}from"./FormControlLabel-Bcd9kCLx.js";import{F as d}from"./FormGroup-ydSfFyAy.js";import"./preload-helper-PPVm8Dsz.js";import"./SwitchBase-CA9E3E6q.js";import"./useFormControl-DgZLBUvY.js";import"./useControlled-DsHuiLVN.js";import"./useThemeProps-BhkFWo-U.js";import"./formControlState-Dq1zat_P.js";import"./Typography-BAy7dttV.js";const t=r=>e(l,{...r});try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SwitchSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"span", SwitchRootSlotPropsOverrides, SwitchOwnerState>; track?: SlotProps<"span", SwitchTrackSlotPropsOverrides, SwitchOwnerState>; thumb?: SlotProps<...> | undefined; switchBase?: SlotProps<...> | undefined; input?: SlotProps<...> | undefined; } | undefined'}}}}}catch{}const u=r=>n(s,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(t,{defaultChecked:!0,...r}),e(t,{...r}),e(t,{disabled:!0,defaultChecked:!0,...r}),e(t,{disabled:!0,...r})]}),p=()=>e(s,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:n(d,{children:[e(i,{control:e(t,{defaultChecked:!0}),label:"Label"}),e(i,{disabled:!0,control:e(t,{}),label:"Disabled"})]})}),h=r=>n(s,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(t,{defaultChecked:!0,...r}),e(t,{defaultChecked:!0,color:"secondary",...r}),e(t,{defaultChecked:!0,color:"warning",...r}),e(t,{defaultChecked:!0,color:"error",...r}),e(t,{defaultChecked:!0,color:"info",...r}),e(t,{defaultChecked:!0,color:"success",...r}),e(t,{defaultChecked:!0,color:"default",...r})]}),o=u.bind({});o.args={};const a=p.bind({});a.args={};const c=h.bind({});c.args={};const j={component:t,title:"Components/Inputs/Switch"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch {...args} />
    <Switch disabled defaultChecked {...args} />
    <Switch disabled {...args} />
  </Stack>`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  </Stack>`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch defaultChecked color="secondary" {...args} />
    <Switch defaultChecked color="warning" {...args} />
    <Switch defaultChecked color="error" {...args} />
    <Switch defaultChecked color="info" {...args} />
    <Switch defaultChecked color="success" {...args} />
    <Switch defaultChecked color="default" {...args} />
  </Stack>`,...c.parameters?.docs?.source}}};const F=["Basic","Label","Color"];export{o as Basic,c as Color,a as Label,F as __namedExportsOrder,j as default};
