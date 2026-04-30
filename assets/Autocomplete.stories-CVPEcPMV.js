import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Stack-BIr57r_j.js";import{t as r}from"./Autocomplete-Cq_UZGzd.js";import{t as i}from"./TextField-NqGxUReS.js";var a=t=>e(r,{...t});try{a.displayName=`Autocomplete`,a.__docgenInfo={description:``,displayName:`Autocomplete`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`Ref<unknown>`}},slots:{defaultValue:{value:`{}`},description:`The components used for each slot inside.`,name:`slots`,required:!1,type:{name:`Partial<AutocompleteSlots>`}},slotProps:{defaultValue:{value:`{}`},description:`The props used for each slot inside.`,name:`slotProps`,required:!1,type:{name:`{ chip?: SlotProps<ElementType<Partial<ChipProps<"div">>, keyof IntrinsicElements>, {}, AutocompleteOwnerState<any, any, any, any, "div">>; ... 4 more ...; popupIndicator?: SlotProps<...>; } | undefined`}}}}}catch{}var o=[{label:`The Shawshank Redemption`,year:1994},{label:`The Godfather`,year:1972},{label:`The Godfather: Part II`,year:1974},{label:`The Dark Knight`,year:2008},{label:`12 Angry Men`,year:1957},{label:`Schindler's List`,year:1993},{label:`Pulp Fiction`,year:1994}],s=r=>{let s=r?.multiple?o.slice(0,2):o[0];return t(n,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[e(a,{...r,disablePortal:!0,defaultValue:s,id:`combo-box-demo`,options:o,sx:{width:300},renderInput:t=>e(i,{...t,label:`Movie (xSmall)`}),size:`xSmall`,isOptionEqualToValue:(e,t)=>e.label===t.label}),e(a,{...r,disablePortal:!0,defaultValue:s,id:`combo-box-demo`,options:o,sx:{width:300},renderInput:t=>e(i,{...t,label:`Movie (small)`}),size:`small`,isOptionEqualToValue:(e,t)=>e.label===t.label}),e(a,{...r,disablePortal:!0,defaultValue:s,id:`combo-box-demo`,options:o,sx:{width:300},renderInput:t=>e(i,{...t,label:`Movie (medium)`}),isOptionEqualToValue:(e,t)=>e.label===t.label})]})},c=s.bind({});c.args={};var l=s.bind({});l.args={multiple:!0};var u={component:a,title:`Components/Inputs/Autocomplete`};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const defaultValuesWithContext = args?.multiple ? topFilms.slice(0, 2) : topFilms[0];
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (xSmall)" />} size="xSmall" isOptionEqualToValue={(option, value) => option.label === value.label} />
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (small)" />} size="small" isOptionEqualToValue={(option, value) => option.label === value.label} />
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (medium)" />} isOptionEqualToValue={(option, value) => option.label === value.label} />
    </Stack>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const defaultValuesWithContext = args?.multiple ? topFilms.slice(0, 2) : topFilms[0];
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (xSmall)" />} size="xSmall" isOptionEqualToValue={(option, value) => option.label === value.label} />
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (small)" />} size="small" isOptionEqualToValue={(option, value) => option.label === value.label} />
      <Autocomplete {...args} disablePortal defaultValue={defaultValuesWithContext} id="combo-box-demo" options={topFilms} sx={{
      width: 300
    }} renderInput={params => <TextField {...params} label="Movie (medium)" />} isOptionEqualToValue={(option, value) => option.label === value.label} />
    </Stack>;
}`,...l.parameters?.docs?.source}}};var d=[`ComboBox`,`ComboBoxMultiple`];export{c as ComboBox,l as ComboBoxMultiple,d as __namedExportsOrder,u as default};