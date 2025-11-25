import{r as p,a as t,a6 as fe,b as C,I as de,a7 as q,F as xe,P as Me,u as Xe}from"./iframe-iTQVGlDB.js";import{C as be}from"./ChevronIcon-DvuUTjj9.js";import{C as ue}from"./CloseIcon-kK0fGgXa.js";import{u as we}from"./useTranslation-BmJXt_HJ.js";import{T as ke}from"./TextField-C5IVGd9f.js";import{T as le}from"./Typography-DGDF1be6.js";import{L as ze}from"./ListItemAvatar-CF-Kjom_.js";import{A as Ie}from"./Avatar-Bng-1Pi1.js";import{C as ae}from"./Checkbox-Gxyez4ih.js";import{L as oe}from"./ListItem-BEfzmBBL.js";import{I as he}from"./InputAdornment-BRHYcLV6.js";import{A as _e}from"./Autocomplete-NQ0OQcIo.js";import{a as Ee}from"./List-C_VQEWa2.js";import{L as Se}from"./ListItemButton-CrKqqkcQ.js";import{L as ge}from"./ListItemText-DtkPD3S1.js";import{B as je}from"./Button-Cvl3_Wjr.js";import{D as Pe}from"./Divider-top--QCC.js";import{B as Te}from"./Badge-CoFqLj1n.js";import{S as se}from"./Stack-BXjlknso.js";import"./preload-helper-D9Z9MdNV.js";import"./Select-CaFQ7gsu.js";import"./Menu-DIWl-B3P.js";import"./useSlotProps-CpWxIzwg.js";import"./Popover-D3_wXjlK.js";import"./ownerWindow-mQbbsZ3p.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-tMq5qWBZ.js";import"./Modal-4K--IcUR.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DMZ0Txs1.js";import"./Backdrop-CqRbTo-e.js";import"./Fade-DbftW66R.js";import"./MenuList-BDZVubuB.js";import"./FormControl-DUEtRtT1.js";import"./useFormControl-CS6dMIXp.js";import"./isMuiElement-CJS-XTmX.js";import"./useControlled---gUJVqy.js";import"./formControlState-Dq1zat_P.js";import"./TextareaAutosize-KDDeg9E2.js";import"./InputLabel-DX5h9MH5.js";import"./FormLabel-DJGxGDPD.js";import"./SwitchBase-BoMwMGKV.js";import"./usePreviousProps-BF-RMcho.js";import"./Popper-C9jyfSLD.js";import"./Chip-BTdqDIke.js";import"./ListSubheader-DlnFmX6S.js";import"./dividerClasses-CiOvvj0I.js";import"./useThemeProps-CsH5eJxn.js";const ie={padding:0,paddingRight:1},ne=n=>n==="xSmall"?{fontSize:q(12),height:20}:n==="small"?{fontSize:q(13),height:24}:{fontSize:q(14),height:32},De=(n,r)=>r?n?Array.isArray(n)?n:[n]:[]:n||null,Re=n=>{const{palette:r}=Xe(),u=r.mode==="light"?"default":"primary",h=n==="chip";return function(m){return t(Te,{badgeContent:`+${m}`,color:u,sx:{"& .MuiBadge-badge":{...h&&{backgroundColor:"grey.100",color:"text.primary"},position:"relative",transform:"none"},alignItems:"center"}})}},We=({variant:n,children:r,disableSelectAll:u,localeText:h,disableReset:v,onChange:m,loading:F,options:o,value:c,multiple:f,...S})=>{const{t:i}=we(),z=Array.isArray(c)?c?.length===o?.length:!1,I=Array.isArray(o)&&o.every(l=>typeof l=="string"),b=!I&&o?.filter(l=>l?.isHeader)||[];return C(Me,{sx:{minWidth:250},...S,children:[f&&!F&&(!u||!!b?.length)&&C(xe,{children:[C(Ee,{role:"listbox",children:[!u&&t(oe,{disablePadding:!0,role:"option",onMouseDown:l=>{if(l.stopPropagation(),l.preventDefault(),z){m?.(l,[],"removeOption");return}m?.(l,o||[],"selectOption")},children:C(Se,{disableRipple:!0,children:[t(ae,{disableRipple:!0,id:"select-all-checkbox",checked:z,sx:ie}),t(ge,{primary:h?.selectAll||i("selectAll"),slotProps:{primary:{variant:"body2"}}}),!v&&t(je,{variant:"link",size:"small",sx:{marginX:1,textDecoration:"none"},onClick:l=>{m?.(l,[],"removeOption")},onMouseDown:l=>{l.stopPropagation(),l.preventDefault()},children:t(le,{variant:"body2",children:h?.reset||i("reset")})})]})}),!I&&b?.map((l,_)=>{const K=`header-options-${_}`,Y=Array.isArray(c)&&c.some(g=>JSON.stringify(g)===JSON.stringify(l)||g&&typeof g=="object"&&"id"in g&&g?.id===l?.id);return t(oe,{disablePadding:!0,onMouseDown:g=>{if(g.stopPropagation(),g.preventDefault(),Y){const Q=Array.isArray(c)?c?.filter(A=>!(JSON.stringify(A)===JSON.stringify(l)||A&&typeof A=="object"&&"id"in A&&A?.id===l?.id)):[];m?.(g,Q,"removeOption");return}m?.(g,[...Array.isArray(c)?c:[],l],"selectOption")},children:C(Se,{disableRipple:!0,children:[t(ae,{disableRipple:!0,checked:Y,sx:ie}),t(ge,{primary:l?.label})]})},K)})]}),t(Pe,{})]}),r]})},Ve=({variant:n,onChange:r,disableCheckbox:u,placeholder:h,localeText:v,disableReset:m,disableSelectAll:F,value:o,onFocus:c,onBlur:f,open:S,getOptionLabel:i,onInputChange:z,inputValue:I,disableClearable:b,loading:l,resetInputValueOnSelectOption:_,renderOption:K,renderValue:Y,width:g,sx:Q,size:A="small",disableCloseOnSelect:re=!0,multiple:M=!0,options:ce=[],slotProps:me,...ve},Ae)=>{const[w,G]=p.useState(!1),[Ce,Z]=p.useState(""),E=I||Ce,pe=n==="chip",k=Array.isArray(o)?!!o.length:o!=null,ye=De(o,M);return t(_e,{freeSolo:!1,multiple:M,disableClearable:b,value:ye,options:ce,loading:l,ref:Ae,size:A,disableCloseOnSelect:re,onChange:(e,a,d,s)=>{if(a===null){r?.(e,M?[]:null,d,s);return}r?.(e,a,d,s),re&&M||G(!1)},getLimitTagsText:Re(n),inputValue:E,open:S||w,onOpen:()=>G(!0),sx:{width:g,...Q},slots:{paper:We},slotProps:{...me,paper:{disableReset:m,disableSelectAll:F,loading:l,localeText:v,multiple:M,onChange:r,options:ce,value:o,variant:n,...me?.paper}},onInputChange:(e,a,d)=>{d==="reset"&&w&&!_||d==="selectOption"&&!_||d==="removeOption"&&!_||(I||Z(a),z?.(e,a,d))},onFocus:e=>{G(!0),c?.(e)},onBlur:e=>{G(!1),f?.(e)},getOptionLabel:i||(e=>{const a=typeof e=="object"&&"label"in e?e.label:e;return String(a)}),renderOption:K||((e,a,{selected:d})=>{const s=typeof a!="string"&&a.isHeader;if(l||s)return null;const ee=typeof a=="string"?a:a?.id||a?.value||"",X=typeof a=="string"?a:a?.label,te=typeof a=="string"?void 0:a?.image,Fe=`${ee}-${e?.key}`;return fe(oe,{...e,key:Fe},!u&&t(ae,{disableRipple:!0,checked:d,sx:ie}),te&&t(ze,{sx:{height:24,marginRight:1,minWidth:"auto",width:24},children:t(Ie,{variant:"rounded",src:te,sx:{height:24,width:24},children:te==="letter"&&typeof X=="string"&&X?.charAt(0).toUpperCase()})}),typeof X=="string"?t(le,{variant:"body2",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",title:X,children:X}):X)}),renderValue:Y||(M?(e,a,d)=>Array.isArray(e)?e.map((s,ee)=>{if(d?.focused)return null;const{key:X}=a({index:ee});return t(le,{marginX:1,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:typeof s=="object"&&"label"in s&&s?.label?s.label:s.toString()},X)}):null:void 0),renderInput:e=>{const a=()=>{if(!(!w&&(Array.isArray(o)&&o.length||!Array.isArray(o)&&o)))return h},d=()=>pe?C(he,{position:"end",sx:{color:k?"text.contrast":"text.primary",position:"absolute",right:5,transform:w?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease-in-out"},children:[(E||k)&&!b&&t(de,{size:"small",onClick:s=>{s.preventDefault(),s.stopPropagation(),Z(""),z?.(s,"","clear"),k&&r?.(s,M?[]:null,"clear")},onMouseDown:s=>{s.preventDefault(),s.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:q(16),pointerEvents:"none"},color:k?"text.contrast":"text.primary",cursor:"pointer",left:"50%",opacity:0,padding:"2px",pointerEvents:"auto",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",transition:"opacity 0.2s ease-in-out",zIndex:1},children:t(ue,{})}),t(be,{fontSize:"small",sx:{cursor:"pointer",transition:"opacity 0.2s ease-in-out",...(E||k)&&!b&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):w?C(he,{position:"end",sx:{position:"absolute",right:8},children:[E&&!b&&t(de,{size:"small",onClick:s=>{Z(""),z?.(s,"","clear")},sx:{marginRight:"-3px"},children:t(ue,{sx:{fontSize:q(20)}})}),p.isValidElement(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment=="object"&&"props"in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props=="object"&&"children"in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):p.isValidElement(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return t(ke,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(M&&(w||E))||w?1:0,minWidth:0},...pe&&{"& .MuiInputBase-root":{backgroundColor:k?"text.primary":"grey.100",borderRadius:20,color:k?"text.contrast":"text.primary",fieldset:{borderColor:"transparent !important"},fontSize:ne(A).fontSize,height:ne(A).height,input:{padding:"0 !important"},minWidth:90,"p.MuiTypography-root":{fontSize:ne(A).fontSize,margin:0},paddingRight:"30px !important",paddingY:"0 !important"}}},...e,slotProps:{input:{...e.InputProps,endAdornment:d()}},placeholder:a()})},...ve})},y=p.forwardRef(Ve),x=[{id:"1",label:"Oliver Hansen",value:"oliver-hansen"},{id:"2",label:"Van Henry",value:"van-henry"},{id:"3",label:"April Tucker",value:"april-tucker"},{id:"4",label:"April Tucker with very long label already",value:"april-tucker"}],Oe=[{id:"1",image:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",label:"Oliver Hansen",value:"oliver-hansen"},{id:"2",image:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",label:"Van Henry",value:"van-henry"},{id:"3",image:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",label:"April Tucker",value:"april-tucker"}],O=n=>{const[r,u]=p.useState([]),[h,v]=p.useState([]),[m,F]=p.useState([]),o=(S,i)=>{u(i)},c=(S,i)=>{v(i)},f=(S,i)=>{F(i)};return C(se,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[t(y,{...n,size:"xSmall",sx:{width:300},onChange:o,value:r}),t(y,{...n,size:"small",sx:{width:300},onChange:c,value:h}),t(y,{...n,size:"medium",sx:{width:300},onChange:f,value:m})]})},Le=n=>{const[r,u]=p.useState(null),[h,v]=p.useState(null),[m,F]=p.useState(null),o=(S,i)=>{u(i)},c=(S,i)=>{v(i)},f=(S,i)=>{F(i)};return C(se,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[t(y,{...n,size:"xSmall",sx:{width:300},onChange:o,value:r,multiple:!1}),t(y,{...n,size:"small",sx:{width:300},onChange:c,value:h,multiple:!1}),t(y,{...n,size:"medium",sx:{width:300},onChange:f,value:m,multiple:!1})]})},He=n=>{const[r,u]=p.useState([]),[h,v]=p.useState([]),[m,F]=p.useState([]),o=(S,i)=>{u(i)},c=(S,i)=>{v(i)},f=(S,i)=>{F(i)};return C(se,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[t(y,{...n,size:"xSmall",onChange:o,value:r}),t(y,{...n,size:"small",onChange:c,value:h}),t(y,{...n,size:"medium",onChange:f,value:m})]})},j=O.bind({});j.args={options:x};const P=O.bind({});P.args={options:Oe};const T=O.bind({});T.args={options:[{id:"1",image:"avatar",label:"Oliver Hansen",value:"oliver-hansen"},{id:"2",image:"avatar",label:"Van Henry",value:"van-henry"},{id:"3",image:"avatar",label:"April Tucker",value:"april-tucker"}]};const D=O.bind({});D.args={options:[{id:"1",image:"letter",label:"Oliver Hansen",value:"oliver-hansen"},{id:"2",image:"letter",label:"Van Henry",value:"van-henry"},{id:"3",image:"letter",label:"April Tucker",value:"april-tucker"}]};const R=O.bind({});R.args={disableSelectAll:!0,options:Oe};const W=O.bind({});W.args={options:[...x,{id:"my-worksite",isHeader:!0,label:"Mes chantiers",value:"my-worksite"}]};const V=O.bind({});V.args={disableReset:!0,options:x};const L=O.bind({});L.args={disableCheckbox:!0,options:x};const H=O.bind({});H.args={options:x,placeholder:"Search..."};const B=O.bind({});B.args={options:x,resetInputValueOnSelectOption:!0};const $=O.bind({});$.args={disableClearable:!0,options:x};const J=O.bind({});J.args={loading:!0};const N=Le.bind({});N.args={multiple:!1,options:x};const U=He.bind({});U.args={options:x,placeholder:"Search",variant:"chip"};const Wt={component:y,title:"Components/Inputs/AutocompleteFilter"};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
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
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
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
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
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
}`,...W.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
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
}`,...H.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
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
}`,...J.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
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
}`,...N.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
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
}`,...U.parameters?.docs?.source}}};const Vt=["Basic","WithImage","WithAvatar","WithAvatarLetter","DisableSelectAll","WithHeaderOptions","WithoutReset","CheckboxDisabled","WithPlaceholder","ResetInputValueOnSelect","DisableClearable","Loading","UniqueSelection","ChipVariant"];export{j as Basic,L as CheckboxDisabled,U as ChipVariant,$ as DisableClearable,R as DisableSelectAll,J as Loading,B as ResetInputValueOnSelect,N as UniqueSelection,T as WithAvatar,D as WithAvatarLetter,W as WithHeaderOptions,P as WithImage,H as WithPlaceholder,V as WithoutReset,Vt as __namedExportsOrder,Wt as default};
