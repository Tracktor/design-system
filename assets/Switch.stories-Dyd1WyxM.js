import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Stack-BIr57r_j.js";import{t as r}from"./FormControlLabel-DBN0FxR_.js";import{t as i}from"./FormGroup-CZRSVaUx.js";import{t as a}from"./Switch-CCVecBDc.js";var o=t=>e(a,{...t});try{o.displayName=`Switch`,o.__docgenInfo={description:``,displayName:`Switch`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<SwitchSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ root?: SlotProps<"span", SwitchRootSlotPropsOverrides, SwitchOwnerState>; track?: SlotProps<"span", SwitchTrackSlotPropsOverrides, SwitchOwnerState>; thumb?: SlotProps<...> | undefined; switchBase?: SlotProps<...> | undefined; input?: SlotProps<...> | undefined; } | undefined`}}}}}catch{}var s=r=>t(n,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[e(o,{defaultChecked:!0,...r}),e(o,{...r}),e(o,{disabled:!0,defaultChecked:!0,...r}),e(o,{disabled:!0,...r})]}),c=()=>e(n,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:t(i,{children:[e(r,{control:e(o,{defaultChecked:!0}),label:`Label`}),e(r,{disabled:!0,control:e(o,{}),label:`Disabled`})]})}),l=r=>t(n,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[e(o,{defaultChecked:!0,...r}),e(o,{defaultChecked:!0,color:`secondary`,...r}),e(o,{defaultChecked:!0,color:`warning`,...r}),e(o,{defaultChecked:!0,color:`error`,...r}),e(o,{defaultChecked:!0,color:`info`,...r}),e(o,{defaultChecked:!0,color:`success`,...r}),e(o,{defaultChecked:!0,color:`default`,...r})]}),u=s.bind({});u.args={};var d=c.bind({});d.args={};var f=l.bind({});f.args={};var p={component:o,title:`Components/Inputs/Switch`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch {...args} />
    <Switch disabled defaultChecked {...args} />
    <Switch disabled {...args} />
  </Stack>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  </Stack>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch defaultChecked color="secondary" {...args} />
    <Switch defaultChecked color="warning" {...args} />
    <Switch defaultChecked color="error" {...args} />
    <Switch defaultChecked color="info" {...args} />
    <Switch defaultChecked color="success" {...args} />
    <Switch defaultChecked color="default" {...args} />
  </Stack>`,...f.parameters?.docs?.source}}};var m=[`Basic`,`Label`,`Color`];export{u as Basic,f as Color,d as Label,m as __namedExportsOrder,p as default};