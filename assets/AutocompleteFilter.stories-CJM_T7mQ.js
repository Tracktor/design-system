import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{j as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{n as o}from"./GlobalStyles-DXlWX7xR.js";import{t as s}from"./Stack-BIr57r_j.js";import{t as c}from"./Paper-Apd769t-.js";import{t as l}from"./IconButton-Cm2voGaN.js";import{t as u}from"./Typography-BNYwlYGw.js";import{t as d}from"./Autocomplete-Cq_UZGzd.js";import{t as f}from"./Avatar-p_cSZ-X-.js";import{t as p}from"./Badge-DN16MG0Y.js";import{t as m}from"./Button-C-NK_Lvb.js";import{t as h}from"./Checkbox-Cm3_-XC0.js";import{t as g}from"./Divider-Dm1KHk8o.js";import{t as _}from"./TextField-NqGxUReS.js";import{t as v}from"./InputAdornment-dHnJYa1Y.js";import{t as y}from"./List-dHlU8BBG.js";import{t as b}from"./ListItem-BnsA-Tfl.js";import{t as x}from"./ListItemButton-BNDaM0Mi.js";import{t as S}from"./ListItemAvatar-BObKCzsU.js";import{t as C}from"./ListItemText-Cs8fd-Dg.js";import{i as w}from"./iframe-Zi-9QKaB.js";import{t as T}from"./CloseIcon-Dvbqi1jK.js";import{t as E}from"./ChevronIcon-DjoRGICg.js";import{t as D}from"./useTranslation-T-YAQwl3.js";var O=e(t(),1),k={padding:0,paddingRight:1},A=e=>e===`xSmall`?{fontSize:w(12),height:20}:e===`small`?{fontSize:w(13),height:24}:{fontSize:w(14),height:32},ee=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,te=e=>{let{palette:t}=o(),n=t.mode===`light`?`default`:`primary`,i=e===`chip`;return function(e){return r(p,{badgeContent:`+${e}`,color:n,sx:{"& .MuiBadge-badge":{...i&&{backgroundColor:`grey.100`,color:`text.primary`},position:`relative`,transform:`none`},alignItems:`center`}})}},j=({variant:e,children:t,disableSelectAll:n,localeText:o,disableReset:s,onChange:l,loading:d,options:f,value:p,multiple:_,...v})=>{let{t:S}=D(),w=Array.isArray(p)?p?.length===f?.length:!1,T=Array.isArray(f)&&f.every(e=>typeof e==`string`),E=!T&&f?.filter(e=>e?.isHeader)||[];return i(c,{sx:{minWidth:250},...v,children:[_&&!d&&(!n||!!E?.length)&&i(a,{children:[i(y,{role:`listbox`,children:[!n&&r(b,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),w){l?.(e,[],`removeOption`);return}l?.(e,f||[],`selectOption`)},children:i(x,{disableRipple:!0,children:[r(h,{disableRipple:!0,id:`select-all-checkbox`,checked:w,sx:k}),r(C,{primary:o?.selectAll||S(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!s&&r(m,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{l?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:r(u,{variant:`body2`,children:o?.reset||S(`reset`)})})]})}),!T&&E?.map((e,t)=>{let n=`header-options-${t}`,a=Array.isArray(p)&&p.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return r(b,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),a){let n=Array.isArray(p)?p?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];l?.(t,n,`removeOption`);return}l?.(t,[...Array.isArray(p)?p:[],e],`selectOption`)},children:i(x,{disableRipple:!0,children:[r(h,{disableRipple:!0,checked:a,sx:k}),r(C,{primary:e?.label})]})},n)})]}),r(g,{})]}),t]})},M=(0,O.forwardRef)(({variant:e,onChange:t,disableCheckbox:a,placeholder:o,localeText:s,disableReset:c,disableSelectAll:p,value:m,onFocus:g,onBlur:y,open:x,getOptionLabel:C,onInputChange:D,inputValue:M,disableClearable:N,loading:P,resetInputValueOnSelectOption:F,renderOption:I,renderValue:L,width:R,sx:z,size:B=`small`,disableCloseOnSelect:V=!0,multiple:H=!0,options:U=[],slotProps:W,...G},K)=>{let[q,J]=(0,O.useState)(!1),[Y,X]=(0,O.useState)(``),Z=M||Y,Q=e===`chip`,$=Array.isArray(m)?!!m.length:m!=null;return r(d,{freeSolo:!1,multiple:H,disableClearable:N,value:ee(m,H),options:U,loading:P,ref:K,size:B,disableCloseOnSelect:V,onChange:(e,n,r,i)=>{if(n===null){t?.(e,H?[]:null,r,i);return}t?.(e,n,r,i),V&&H||J(!1)},getLimitTagsText:te(e),inputValue:Z,open:x||q,onOpen:()=>J(!0),sx:{width:R,...z},slots:{paper:j},slotProps:{...W,paper:{disableReset:c,disableSelectAll:p,loading:P,localeText:s,multiple:H,onChange:t,options:U,value:m,variant:e,...W?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&q&&!F||n===`selectOption`&&!F||n===`removeOption`&&!F||(M||X(t),D?.(e,t,n))},onFocus:e=>{J(!0),g?.(e)},onBlur:e=>{J(!1),y?.(e)},getOptionLabel:C||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:I||((e,t,{selected:i})=>{let o=typeof t!=`string`&&t.isHeader;if(P||o)return null;let s=typeof t==`string`?t:t?.id||t?.value||``,c=typeof t==`string`?t:t?.label,l=typeof t==`string`?void 0:t?.image,d=`${s}-${e?.key}`;return n(b,{...e,key:d},!a&&r(h,{disableRipple:!0,checked:i,sx:k}),l&&r(S,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:r(f,{variant:`rounded`,src:l,sx:{height:24,width:24},children:l===`letter`&&typeof c==`string`&&c?.charAt(0).toUpperCase()})}),typeof c==`string`?r(u,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:c,children:c}):c)}),renderValue:L||(H?(e,t,n)=>Array.isArray(e)?e.map((e,i)=>{if(n?.focused)return null;let{key:a}=t({index:i});return r(u,{marginX:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString()},a)}):null:void 0),renderInput:e=>{let n=()=>{if(!(!q&&(Array.isArray(m)&&m.length||!Array.isArray(m)&&m)))return o},a=()=>Q?i(v,{position:`end`,sx:{color:$?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:q?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[(Z||$)&&!N&&r(l,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),X(``),D?.(e,``,`clear`),$&&t?.(e,H?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:w(16),pointerEvents:`none`},color:$?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:r(T,{})}),r(E,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...(Z||$)&&!N&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):q?i(v,{position:`end`,sx:{position:`absolute`,right:8},children:[Z&&!N&&r(l,{size:`small`,onClick:e=>{X(``),D?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:r(T,{sx:{fontSize:w(20)}})}),(0,O.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,O.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return r(_,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(H&&(q||Z))||q?1:0,minWidth:0},...Q&&{"& .MuiInputBase-root":{backgroundColor:$?`text.primary`:`grey.100`,borderRadius:20,color:$?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:A(B).fontSize,height:A(B).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:A(B).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{input:{...e.InputProps,endAdornment:a()}},placeholder:n()})},...G})}),N=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],P=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],F=e=>{let[t,n]=(0,O.useState)([]),[a,o]=(0,O.useState)([]),[c,l]=(0,O.useState)([]),u=(e,t)=>{n(t)},d=(e,t)=>{o(t)},f=(e,t)=>{l(t)};return i(s,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[r(M,{...e,size:`xSmall`,sx:{width:300},onChange:u,value:t}),r(M,{...e,size:`small`,sx:{width:300},onChange:d,value:a}),r(M,{...e,size:`medium`,sx:{width:300},onChange:f,value:c})]})},I=e=>{let[t,n]=(0,O.useState)(null),[a,o]=(0,O.useState)(null),[c,l]=(0,O.useState)(null),u=(e,t)=>{n(t)},d=(e,t)=>{o(t)},f=(e,t)=>{l(t)};return i(s,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[r(M,{...e,size:`xSmall`,sx:{width:300},onChange:u,value:t,multiple:!1}),r(M,{...e,size:`small`,sx:{width:300},onChange:d,value:a,multiple:!1}),r(M,{...e,size:`medium`,sx:{width:300},onChange:f,value:c,multiple:!1})]})},L=e=>{let[t,n]=(0,O.useState)([]),[a,o]=(0,O.useState)([]),[c,l]=(0,O.useState)([]),u=(e,t)=>{n(t)},d=(e,t)=>{o(t)},f=(e,t)=>{l(t)};return i(s,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[r(M,{...e,size:`xSmall`,onChange:u,value:t}),r(M,{...e,size:`small`,onChange:d,value:a}),r(M,{...e,size:`medium`,onChange:f,value:c})]})},R=F.bind({});R.args={options:N};var z=F.bind({});z.args={options:P};var B=F.bind({});B.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]};var V=F.bind({});V.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]};var H=F.bind({});H.args={disableSelectAll:!0,options:P};var U=F.bind({});U.args={options:[...N,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]};var W=F.bind({});W.args={disableReset:!0,options:N};var G=F.bind({});G.args={disableCheckbox:!0,options:N};var K=F.bind({});K.args={options:N,placeholder:`Search...`};var q=F.bind({});q.args={options:N,resetInputValueOnSelectOption:!0};var J=F.bind({});J.args={disableClearable:!0,options:N};var Y=F.bind({});Y.args={loading:!0};var X=I.bind({});X.args={multiple:!1,options:N};var Z=L.bind({});Z.args={options:N,placeholder:`Search`,variant:`chip`};var Q={component:M,title:`Components/Inputs/AutocompleteFilter`};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption | null>(null);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} multiple={false} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} multiple={false} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} multiple={false} />
    </Stack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...Z.parameters?.docs?.source}}};var $=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`ChipVariant`];export{R as Basic,G as CheckboxDisabled,Z as ChipVariant,J as DisableClearable,H as DisableSelectAll,Y as Loading,q as ResetInputValueOnSelect,X as UniqueSelection,B as WithAvatar,V as WithAvatarLetter,U as WithHeaderOptions,z as WithImage,K as WithPlaceholder,W as WithoutReset,$ as __namedExportsOrder,Q as default};