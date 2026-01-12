import{r as b,b as S,a as n,I as le,F as ae}from"./iframe-BV8vsj3f.js";import{C as te}from"./ChevronIcon-CulEiKxa.js";import{C as ne}from"./CloseIcon-Corv00fH.js";import{u as ie}from"./useMenu-DmfBx9V9.js";import{u as se}from"./useTranslation-vuFghfLt.js";import{C as re}from"./Chip-lvKdnukB.js";import{M as oe}from"./Menu-BmP6Izyw.js";import{S as z}from"./Stack-CWKpID0y.js";import{L as P}from"./ListItemText-CC2LstZ2.js";import{M as ue}from"./MenuItem-DTKbbGL8.js";import{C as de}from"./Checkbox-BZRcv89Y.js";import{R as ce}from"./Radio-CPFB-DT0.js";import{L as pe}from"./ListItemIcon-WeAjIGND.js";import{B as G}from"./Button-lGYHvgsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlotProps-BBPIEmK8.js";import"./Popover-Doe1wkDn.js";import"./ownerWindow-Boxmah0U.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-oaaCFy8C.js";import"./Modal-HmJaN8qQ.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CWPwu0HT.js";import"./Backdrop-D5qdszg9.js";import"./Fade-DgCUhA3l.js";import"./MenuList-c2IeN385.js";import"./List-CsH-JQuD.js";import"./useThemeProps-CL3C2p_R.js";import"./Typography-B-kTso95.js";import"./listItemIconClasses-D9mGF7xF.js";import"./dividerClasses-DxMY7q1P.js";import"./SwitchBase-Ng4KLCGA.js";import"./useFormControl-C4EdeTOb.js";import"./useControlled-Cxs1AFZJ.js";function m({label:l,value:t,onChange:i,checked:s,onCheckedChange:d,options:u,variant:c,disabled:p,labelMenu:I,labelOnlyAfterSelection:R,applyOnSelect:D,separatorBetweenLabelAndOptionSelected:H=":",multiple:r=!1,size:J="medium"}){const o=s!==void 0,[x,f]=b.useState(()=>o?s:r?t||[]:t),j=o?s===!0:r?t?.length>0:t!=null,{anchorMenu:K,openMenu:Q,isMenuOpen:E,closeMenu:C}=ie(),{t:W}=se(),h=Array.isArray(u),M=u!==void 0,N=e=>{o?d?.(e):i?.(e)},U=()=>{N(x),C()},X=()=>{if(o)f(!1),d?.(!1);else if(r){const e=[];f(e),i?.(e)}else f(void 0),i?.(void 0);C()},Y=e=>{if(o&&!M){d?.(!s);return}if(M&&h){Q(e);return}if(M&&!h)if(o)d?.(!s);else{const a=t!=null?void 0:u?.value;i?.(r?a!==void 0?[a]:[]:a)}},Z=e=>{let a;if(o)a=!0,f(a);else if(r){const g=x||[];a=g.includes(e)?g.filter(y=>y!==e):[...g,e],f(a)}else a=e,f(a);D&&(N(a),r||o||C())},ee=e=>o?s===!0:r?x?.includes(e):x===e,_=e=>h?`${I?`${I} ${H} `:""}${u.find(a=>a.value===e)?.label||""}`:u?.label;return S(ae,{children:[n(re,{disabled:p,size:J,label:(()=>{if(o)return l;if(R&&j){const e=t||[],a=Array.isArray(e)?e.length:1;return`${l||I}${r&&a>1?` (${a})`:""}`}if(r&&j){const e=t||[],a=e.length;if(a===1)return _(e[0])||l;if(a>1){const g=_(e[0]),y=a-1;return`${g||String(e[0])}... (+${y})`}}return!(r||o)&&t!==void 0&&t!==null&&h&&_(t)||l})(),variant:c,deleteIcon:M&&h?n(te,{fontSize:"small",sx:{marginLeft:-.5,marginRight:.5,transform:E?"rotate(180deg)":"rotate(0deg)"}}):void 0,onClick:Y,onDelete:M&&h?()=>{}:void 0,color:j?"active":"default"}),M&&h&&S(oe,{anchorEl:K,open:E,onClose:C,slotProps:{paper:{sx:{minWidth:350}}},children:[S(z,{component:"li",direction:"row",paddingLeft:2,marginBottom:1,children:[n(P,{children:I}),n(le,{onClick:C,children:n(ne,{fontSize:"small"})})]}),u.map((e,a)=>{const g=`${e.id||e.value}-${a}`,y=ee(e.value);return S(ue,{onClick:()=>Z(e.value),children:[n(pe,{children:r||o?n(de,{disableRipple:!0,checked:y,sx:{padding:0}}):n(ce,{disableRipple:!0,checked:y,sx:{padding:0}})}),n(P,{sx:{color:"text.secondary"},children:e.label})]},g)}),!D&&S(z,{component:"li",direction:"row",justifyContent:"flex-end",spacing:1,marginTop:1,children:[n(G,{size:"small",onClick:X,children:W("reset")}),n(G,{variant:"contained",size:"small",onClick:U,children:W("apply")})]})]})]})}try{m.displayName="ChipFilter",m.__docgenInfo={description:"ChipFilter component that can function as a toggle, single selection, or multiple selection filter.",displayName:"ChipFilter",props:{checked:{defaultValue:null,description:"The checked state of the toggle. When provided, the component acts as a toggle.",name:"checked",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:`Callback function triggered when the checked state changes.
@param checked`,name:"onCheckedChange",required:!1,type:{name:"((checked: boolean) => void)"}},multiple:{defaultValue:{value:"false"},description:"Exclude these props for toggle mode",name:"multiple",required:!1,type:{name:"undefined"}},value:{defaultValue:null,description:"Exclude these props for toggle mode",name:"value",required:!1,type:{name:"undefined"}},onChange:{defaultValue:null,description:"Exclude these props for toggle mode",name:"onChange",required:!1,type:{name:"undefined"}},label:{defaultValue:null,description:"The label of the chip filter.",name:"label",required:!1,type:{name:"ReactNode"}},labelMenu:{defaultValue:null,description:"The label displayed in the menu for the chip filter, only with multiple options.",name:"labelMenu",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"The size of the chip filter.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xSmall"'}]}},variant:{defaultValue:null,description:"The variant of the chip filter.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"outlined-rounded"'},{value:'"rounded"'}]}},disabled:{defaultValue:null,description:"Indicates if the chip filter is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:`The options available for selection in the chip filter.
If "options" is not provided, it acts as a simple toggle.`,name:"options",required:!1,type:{name:"Option<boolean> | Option<boolean>[]"}},separatorBetweenLabelAndOptionSelected:{defaultValue:{value:":"},description:`Indicates if there should be a separator between the label menu and the options selected in the menu.
Defaults to ":"`,name:"separatorBetweenLabelAndOptionSelected",required:!1,type:{name:"string"}},labelOnlyAfterSelection:{defaultValue:null,description:"Indicates if the label should only be displayed after a selection is made.",name:"labelOnlyAfterSelection",required:!1,type:{name:"boolean"}},applyOnSelect:{defaultValue:null,description:`When true, changes are applied immediately without needing to click "Apply".
When false (default), changes require clicking "Apply" to be applied.`,name:"applyOnSelect",required:!1,type:{name:"boolean"}}}}}catch{}const q=[{id:"1",label:"Filter 1",value:"filter-1"},{id:"2",label:"Filter 2",value:"filter-2"},{id:"3",label:"Filter 3",value:"filter-3"},{id:"4",label:"Filter 4",value:"filter-4"}],F=l=>{const[t,i]=b.useState(),[s,d]=b.useState(),u=p=>{i(p)},c=p=>{d(p)};return S(z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(m,{size:"small",label:"Small",onChange:u,value:t,options:q,labelMenu:"Make your choice",disabled:l?.disabled,labelOnlyAfterSelection:l?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:l?.separatorBetweenLabelAndOptionSelected,applyOnSelect:l?.applyOnSelect}),n(m,{size:"medium",label:"Medium",onChange:c,value:s,options:q,labelMenu:"Make your choice",disabled:l?.disabled,labelOnlyAfterSelection:l?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:l?.separatorBetweenLabelAndOptionSelected,applyOnSelect:l?.applyOnSelect})]})},$=l=>{const[t,i]=b.useState([]),[s,d]=b.useState([]),u=p=>{i(p)},c=p=>{d(p)};return S(z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(m,{multiple:!0,size:"small",label:"Small Multiple",onChange:u,value:t,options:q,labelMenu:"Select multiple options",disabled:l?.disabled,labelOnlyAfterSelection:l?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:l?.separatorBetweenLabelAndOptionSelected}),n(m,{multiple:!0,size:"medium",label:"Medium Multiple",onChange:c,value:s,options:q,labelMenu:"Select multiple options",disabled:l?.disabled,labelOnlyAfterSelection:l?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:l?.separatorBetweenLabelAndOptionSelected})]})},me=()=>{const[l,t]=b.useState(!1),[i,s]=b.useState(!1);return S(z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[n(m,{size:"small",label:"Small",onCheckedChange:c=>{t(c)},checked:l}),n(m,{size:"medium",label:"Medium",onCheckedChange:c=>{s(c)},checked:i})]})},O=F.bind({});O.args={};const w=F.bind({});w.args={disabled:!0};const V=$.bind({});V.args={};const A=$.bind({});A.args={disabled:!0};const v=me.bind({});v.args={};const L=F.bind({});L.args={labelOnlyAfterSelection:!0};const k=$.bind({});k.args={labelOnlyAfterSelection:!0};const B=F.bind({});B.args={separatorBetweenLabelAndOptionSelected:"/"};const T=F.bind({});T.args={applyOnSelect:!0};const Ue={component:m,title:"Components/Inputs/ChipFilter"};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
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
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
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
}`,...T.parameters?.docs?.source}}};const Xe=["Basic","Disabled","Multiple","MultipleDisabled","Toggle","LabelOnlyAfterSelection","MultipleLabelOnlyAfterSelection","CustomSeparator","ApplyOnSelect"];export{T as ApplyOnSelect,O as Basic,B as CustomSeparator,w as Disabled,L as LabelOnlyAfterSelection,V as Multiple,A as MultipleDisabled,k as MultipleLabelOnlyAfterSelection,v as Toggle,Xe as __namedExportsOrder,Ue as default};
