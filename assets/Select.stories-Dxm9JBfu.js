import{a as e,r as v,b as a}from"./iframe-CNsPZ6lW.js";import{S,O as M}from"./Select-De35EB84.js";import{F as h}from"./FormControl-DsyymfqP.js";import{I}from"./InputLabel-CM3mY6Ld.js";import{M as t}from"./MenuItem-DRZFospi.js";import{S as b}from"./Stack-BNmRP4c_.js";import{C as T}from"./Checkbox-DqAJW-DY.js";import{L as x}from"./ListItemText-DBhdl8Tr.js";import"./preload-helper-PPVm8Dsz.js";import"./Menu-z3uu7z_S.js";import"./useSlotProps-Dyov2eQj.js";import"./Popover-CnY2tw19.js";import"./ownerWindow-Db0D_Rj3.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B3krwi-n.js";import"./Modal-Dyq60M8m.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DPbM2A5h.js";import"./Backdrop-D3xbAPqs.js";import"./Fade-BPlhz1KJ.js";import"./MenuList-DKOte1Bt.js";import"./List-DKpj8zFo.js";import"./useControlled-BYO2vJvr.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CyAtwj10.js";import"./TextareaAutosize-a5l0pTQP.js";import"./isMuiElement-CdJpmRvD.js";import"./FormLabel-Djv1UOKG.js";import"./listItemIconClasses-mME9DR26.js";import"./dividerClasses-BEj_Impb.js";import"./useThemeProps-DU4GH7N6.js";import"./SwitchBase-BUSoe_mx.js";import"./Typography-Ceawz7UG.js";const s=l=>e(S,{...l});try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: unknown) => void | (() => VoidOrUndefinedOnly)) | RefObject<unknown> | null"}}}}}catch{}const y=48,A=8,w={PaperProps:{style:{maxHeight:y*4.5+A,width:250}}},k=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"],C=l=>{const[r,m]=v.useState(""),{variant:o}=l,n=i=>{m(i.target.value)};return a(b,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[a(h,{sx:{width:150},children:[e(I,{id:"demo-simple-select-label-xsmall",size:"xSmall",variant:o,children:"Age (xSmall)"}),a(s,{labelId:"demo-simple-select-label-small",value:r,label:"Age (xSmall)",onChange:n,size:"xSmall",...l,children:[e(t,{value:10,children:"Ten"}),e(t,{value:20,children:"Twenty"}),e(t,{value:30,children:"Thirty"})]})]}),a(h,{sx:{width:200},children:[e(I,{id:"demo-simple-select-label-small",size:"small",variant:o,children:"Age (small)"}),a(s,{labelId:"demo-simple-select-label-small",value:r,label:"Age (small)",onChange:n,size:"small",...l,children:[e(t,{value:10,children:"Ten"}),e(t,{value:20,children:"Twenty"}),e(t,{value:30,children:"Thirty"})]})]}),a(h,{sx:{width:200},children:[e(I,{id:"demo-simple-select-label",variant:o,children:"Age"}),a(s,{labelId:"demo-simple-select-label",value:r,label:"Age",onChange:n,...l,children:[e(t,{value:10,children:"Ten"}),e(t,{value:20,children:"Twenty"}),e(t,{value:30,children:"Thirty"})]})]})]})},f=l=>{const[r,m]=v.useState("20");return e(b,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(h,{children:a(s,{size:"small",value:r,label:"Age",onChange:n=>{m(n.target.value)},...l,children:[e(t,{value:10,children:"Ten"}),e(t,{value:20,children:"Twenty"}),e(t,{value:30,children:"Thirty"})]})})})},F=l=>{const[r,m]=v.useState([]);return e(b,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:a(h,{sx:{m:1,width:300},children:[e(I,{id:"demo-multiple-checkbox-label",children:"Tag"}),e(s,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:r,onChange:n=>{const{target:{value:i}}=n;m(typeof i=="string"?i.split(","):i)},input:e(M,{label:"Tag"}),renderValue:n=>n.join(", "),MenuProps:w,...l,children:k.map(n=>a(t,{value:n,children:[e(T,{checked:r.indexOf(n)>-1}),e(x,{primary:n})]},n))})]})})},c=C.bind({});c.args={variant:"outlined"};const u=C.bind({});u.args={variant:"filled"};const d=C.bind({});d.args={variant:"standard"};const g=f.bind({});g.args={disableUnderline:!0,variant:"standard"};const p=F.bind({});p.args={};const ce={component:s,title:"Components/Inputs/Select"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("20");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl>
        <Select size="small" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [personName, setPersonName] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: {
        value
      }
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      m: 1,
      width: 300
    }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Tag" />} renderValue={selected => selected.join(", ")} MenuProps={MenuProps} {...args}>
          {names.map(name => <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>)}
        </Select>
      </FormControl>
    </Stack>;
}`,...p.parameters?.docs?.source}}};const ue=["Basic","Filled","Standard","Text","Checkmarks"];export{c as Basic,p as Checkmarks,u as Filled,d as Standard,g as Text,ue as __namedExportsOrder,ce as default};
