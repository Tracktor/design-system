import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./Stack-BIr57r_j.js";import{t as o}from"./Radio-DWp7P56U.js";import{t as s}from"./IconButton-Cm2voGaN.js";import{t as c}from"./Chip-Be_wopR6.js";import{t as l}from"./Button-C-NK_Lvb.js";import{t as u}from"./Checkbox-Cm3_-XC0.js";import{t as d}from"./ListItemIcon-C2B6H72e.js";import{t as f}from"./ListItemText-Cs8fd-Dg.js";import{t as p}from"./Menu-C4zsosS2.js";import{t as m}from"./MenuItem-sEwEC_dw.js";import{t as h}from"./CloseIcon-Dvbqi1jK.js";import{t as g}from"./useMenu-5V_X0vq-.js";import{t as _}from"./ChevronIcon-DjoRGICg.js";import{t as v}from"./useTranslation-T-YAQwl3.js";var y=e(t(),1);function b({label:e,value:t,onChange:b,checked:x,onCheckedChange:S,options:C,variant:w,disabled:T,labelMenu:E,labelOnlyAfterSelection:D,applyOnSelect:O,separatorBetweenLabelAndOptionSelected:k=`:`,multiple:A=!1,size:j=`medium`}){let M=x!==void 0,[N,P]=(0,y.useState)(()=>M?x:A?t||[]:t),F=M?x:A?t?.length>0:t!=null,{anchorMenu:I,openMenu:L,isMenuOpen:R,closeMenu:z}=g(),{t:B}=v(),V=Array.isArray(C),H=C!==void 0,U=e=>{M?S?.(e):b?.(e)},W=()=>{U(N),z()},G=()=>{if(M)P(!1),S?.(!1);else if(A){let e=[];P(e),b?.(e)}else P(void 0),b?.(void 0);z()},K=e=>{if(M&&!H){S?.(!x);return}if(H&&V){L(e);return}if(H&&!V)if(M)S?.(!x);else{let e=t==null?C?.value:void 0;A?b?.(e===void 0?[]:[e]):b?.(e)}},q=e=>{let t;if(M)t=!0,P(t);else if(A){let n=N||[];t=n.includes(e)?n.filter(t=>t!==e):[...n,e],P(t)}else t=e,P(t);O&&(U(t),A||M||z())},J=e=>M?x:A?N?.includes(e):N===e,Y=e=>V?`${E?`${E} ${k} `:``}${C.find(t=>t.value===e)?.label||``}`:C?.label;return(0,y.useEffect)(()=>{P(M?x:A?t||[]:t)},[M,A,x,t]),r(i,{children:[n(c,{disabled:T,size:j,label:(()=>{if(M)return e;if(D&&F){let n=t||[],r=Array.isArray(n)?n.length:1;return`${e||E}${A&&r>1?` (${r})`:``}`}if(A&&F){let n=t||[],r=n.length;if(r===1)return Y(n[0])||e;if(r>1){let e=Y(n[0]),t=r-1;return`${e||String(n[0])}... (+${t})`}}return!(A||M)&&t!=null&&V&&Y(t)||e})(),variant:w,deleteIcon:H&&V?n(_,{fontSize:`small`,sx:{marginLeft:-.5,marginRight:.5,transform:R?`rotate(180deg)`:`rotate(0deg)`}}):void 0,onClick:K,onDelete:H&&V?()=>{}:void 0,color:F?`active`:`default`}),H&&V&&r(p,{anchorEl:I,open:R,onClose:z,slotProps:{paper:{sx:{minWidth:350}}},children:[r(a,{component:`li`,direction:`row`,paddingLeft:2,marginBottom:1,children:[n(f,{children:E}),n(s,{onClick:z,children:n(h,{fontSize:`small`})})]}),C.map((e,t)=>{let i=`${e.id||e.value}-${t}`,a=J(e.value);return r(m,{onClick:()=>q(e.value),children:[n(d,{children:n(A||M?u:o,{disableRipple:!0,checked:a,sx:{padding:0}})}),n(f,{sx:{color:`text.secondary`},children:e.label})]},i)}),!O&&r(a,{component:`li`,direction:`row`,justifyContent:`flex-end`,spacing:1,marginTop:1,children:[n(l,{size:`small`,onClick:G,children:B(`reset`)}),n(l,{variant:`contained`,size:`small`,onClick:W,children:B(`apply`)})]})]})]})}try{b.displayName=`ChipFilter`,b.__docgenInfo={description:`ChipFilter component that can function as a toggle, single selection, or multiple selection filter.`,displayName:`ChipFilter`,props:{checked:{defaultValue:null,description:`The checked state of the toggle. When provided, the component acts as a toggle.`,name:`checked`,required:!1,type:{name:`boolean`}},onCheckedChange:{defaultValue:null,description:`Callback function triggered when the checked state changes.
@param checked`,name:`onCheckedChange`,required:!1,type:{name:`((checked: boolean) => void)`}},multiple:{defaultValue:{value:`false`},description:`Exclude these props for toggle mode`,name:`multiple`,required:!1,type:{name:`undefined`}},value:{defaultValue:null,description:`Exclude these props for toggle mode`,name:`value`,required:!1,type:{name:`undefined`}},onChange:{defaultValue:null,description:`Exclude these props for toggle mode`,name:`onChange`,required:!1,type:{name:`undefined`}},label:{defaultValue:null,description:`The label of the chip filter.`,name:`label`,required:!1,type:{name:`ReactNode`}},labelMenu:{defaultValue:null,description:`The label displayed in the menu for the chip filter, only with multiple options.`,name:`labelMenu`,required:!1,type:{name:`string`}},size:{defaultValue:{value:`medium`},description:`The size of the chip filter.`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"medium"`},{value:`"xSmall"`}]}},variant:{defaultValue:null,description:`The variant of the chip filter.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"filled"`},{value:`"outlined"`},{value:`"outlined-rounded"`},{value:`"rounded"`}]}},disabled:{defaultValue:null,description:`Indicates if the chip filter is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},options:{defaultValue:null,description:`The options available for selection in the chip filter.
If "options" is not provided, it acts as a simple toggle.`,name:`options`,required:!1,type:{name:`Option<boolean> | Option<boolean>[]`}},separatorBetweenLabelAndOptionSelected:{defaultValue:{value:`:`},description:`Indicates if there should be a separator between the label menu and the options selected in the menu.
Defaults to ":"`,name:`separatorBetweenLabelAndOptionSelected`,required:!1,type:{name:`string`}},labelOnlyAfterSelection:{defaultValue:null,description:`Indicates if the label should only be displayed after a selection is made.`,name:`labelOnlyAfterSelection`,required:!1,type:{name:`boolean`}},applyOnSelect:{defaultValue:null,description:`When true, changes are applied immediately without needing to click "Apply".
When false (default), changes require clicking "Apply" to be applied.`,name:`applyOnSelect`,required:!1,type:{name:`boolean`}}}}}catch{}var x=[{id:`1`,label:`Filter 1`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],S=e=>{let[t,i]=(0,y.useState)(),[o,s]=(0,y.useState)();return r(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(b,{size:`small`,label:`Small`,onChange:e=>{i(e)},value:t,options:x,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect}),n(b,{size:`medium`,label:`Medium`,onChange:e=>{s(e)},value:o,options:x,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect})]})},C=e=>{let[t,i]=(0,y.useState)([]),[o,s]=(0,y.useState)([]);return r(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(b,{multiple:!0,size:`small`,label:`Small Multiple`,onChange:e=>{i(e)},value:t,options:x,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected}),n(b,{multiple:!0,size:`medium`,label:`Medium Multiple`,onChange:e=>{s(e)},value:o,options:x,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected})]})},w=()=>{let[e,t]=(0,y.useState)(!1),[i,o]=(0,y.useState)(!1);return r(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[n(b,{size:`small`,label:`Small`,onCheckedChange:e=>{t(e)},checked:e}),n(b,{size:`medium`,label:`Medium`,onCheckedChange:e=>{o(e)},checked:i})]})},T=S.bind({});T.args={};var E=S.bind({});E.args={disabled:!0};var D=C.bind({});D.args={};var O=C.bind({});O.args={disabled:!0};var k=w.bind({});k.args={};var A=S.bind({});A.args={labelOnlyAfterSelection:!0};var j=C.bind({});j.args={labelOnlyAfterSelection:!0};var M=S.bind({});M.args={separatorBetweenLabelAndOptionSelected:`/`};var N=S.bind({});N.args={applyOnSelect:!0};var P={component:b,title:`Components/Inputs/ChipFilter`};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [valueSmallToggle, setValueSmallToggle] = useState<boolean>(false);
  const [valueMediumToggle, setValueMediumToggle] = useState<boolean>(false);
  const handleChangeSmallToggle = (newValue: boolean) => {
    setValueSmallToggle(newValue);
  };
  const handleChangeMediumToggle = (newValue: boolean) => {
    setValueMediumToggle(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onCheckedChange={handleChangeSmallToggle} checked={valueSmallToggle} />
      <ChipFilter size="medium" label="Medium" onCheckedChange={handleChangeMediumToggle} checked={valueMediumToggle} />
    </Stack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...N.parameters?.docs?.source}}};var F=[`Basic`,`Disabled`,`Multiple`,`MultipleDisabled`,`Toggle`,`LabelOnlyAfterSelection`,`MultipleLabelOnlyAfterSelection`,`CustomSeparator`,`ApplyOnSelect`];export{N as ApplyOnSelect,T as Basic,M as CustomSeparator,E as Disabled,A as LabelOnlyAfterSelection,D as Multiple,O as MultipleDisabled,j as MultipleLabelOnlyAfterSelection,k as Toggle,F as __namedExportsOrder,P as default};