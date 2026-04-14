import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{n as a}from"./GlobalStyles-DXlWX7xR.js";import{t as o}from"./Stack-BIr57r_j.js";import{t as s}from"./SvgIcon-c7Jm5eCq.js";import{t as c}from"./Typography-BNYwlYGw.js";import{t as l}from"./InputLabel-BrMQDK-D.js";import{t as u}from"./Button-CYkgkMcR.js";import{t as d}from"./useTranslation-BClWMmep.js";var f=e(t(),1),p=({fontSize:e,sx:t,color:i=`currentColor`})=>r(s,{width:`40`,height:`40`,viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,fontSize:e,sx:t,children:[n(`g`,{clipPath:`url(#clip0_12914_201806)`,children:n(`path`,{d:`M22 10H14C12.9 10 12.01 10.9 12.01 12L12 28C12 29.1 12.89 30 13.99 30H26C27.1 30 28 29.1 28 28V16L22 10ZM26 28H14V12H21V17H26V28ZM16 23.01L17.41 24.42L19 22.84V27H21V22.84L22.59 24.43L24 23.01L20.01 19L16 23.01Z`,fill:i})}),n(`defs`,{children:n(`clipPath`,{id:`clip0_12914_201806`,children:n(`rect`,{width:`40`,height:`40`,fill:`white`})})})]});try{p.displayName=`UploadIcon`,p.__docgenInfo={description:``,displayName:`UploadIcon`,props:{color:{defaultValue:{value:`currentColor`},description:``,name:`color`,required:!1,type:{name:`string`}},fontSize:{defaultValue:null,description:``,name:`fontSize`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"medium"`},{value:`"inherit"`},{value:`"large"`}]}},sx:{defaultValue:null,description:``,name:`sx`,required:!1,type:{name:`SxProps<Theme>`}}}}}catch{}var m=5,h=(e,t)=>{let n=t===`vertical`;return e===`small`?n?130:60:n?150:80},g=e=>{if(!e)return``;let t=e.length>1,n=[...e||[]].slice(0,5).map(({name:e})=>{let n=e.split(`.`).pop();return e.length>10&&t?`${e.substring(0,10)}(...).${n}`:e}).join(` • `);return e.length>m?`${n} + ${e.length-m}`:n},_=(0,f.forwardRef)(({accept:e,name:t,disabled:s,required:u,error:m,localeText:_,multiple:v,id:y,size:b,helperText:x,fullWidth:S,icon:C,onChange:w,label:T,pattern:E,title:D,value:O,variant:k=`vertical`},A)=>{let[j,M]=(0,f.useState)(null),{t:N}=d(),{palette:P}=a(),F=k===`vertical`,I=y||t,L=(0,f.useRef)(null),R=(0,f.useRef)(null),z=O===void 0?j:O,B=g(z);(0,f.useImperativeHandle)(A,()=>{let e=R.current;return e.reset=()=>{M(null),R.current&&(R.current.value=``)},e});let V=e=>{w?.(e),M(e.target.files)};return r(l,{ref:L,htmlFor:I,onDragOver:e=>{e.preventDefault()},onDrop:e=>{if(e.preventDefault(),e.dataTransfer.files.length>0){let t=R.current,n=e.dataTransfer.files;M(n);let r=new DataTransfer;Array.from(n).forEach(e=>{r.items.add(e)}),t&&(t.files=r.files),t?.focus(),t?.blur(),w?.({...e,target:t})}},sx:{"&:hover, &:focus":{borderColor:P.primary.main},border:`1px dashed ${m?P.error.main:P.divider}`,borderRadius:1,cursor:`pointer`,height:h(b,k),maxWidth:S?`100%`:400,padding:2,position:`relative`,width:`100%`},children:[r(o,{alignItems:`center`,height:`100%`,direction:F?`column`:`row`,justifyContent:F?`center`:`flex-start`,textAlign:F?`center`:`left`,spacing:.5,color:s?`text.disabled`:`text.secondary`,children:[C||n(p,{sx:{height:40,width:40}}),B?r(i,{children:[r(c,{variant:`body2`,color:`textSecondary`,children:[z?.length,` `,_?.files||N(`files`)]}),n(c,{variant:`body2`,color:`primary`,whiteSpace:F?`normal`:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:B})]}):r(c,{variant:`subtitle1`,color:s?`text.disabled`:`primary`,children:[T||N(`clickToUpload`),` `,u&&`*`]}),x&&n(c,{color:m?`error`:`textSecondary`,variant:`body2`,children:x})]}),n(`input`,{id:I,ref:R,type:`file`,title:D,disabled:s,required:u,name:t,multiple:v,accept:e,pattern:E,onChange:V,style:{left:`50%`,opacity:0,pointerEvents:`none`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,zIndex:-1}},O?`has-files`:`no-files`)]})});try{_.displayName=`File`,_.__docgenInfo={description:``,displayName:`File`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"medium"`}]}},variant:{defaultValue:{value:`vertical`},description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},label:{defaultValue:null,description:``,name:`label`,required:!1,type:{name:`ReactNode`}},helperText:{defaultValue:null,description:``,name:`helperText`,required:!1,type:{name:`ReactNode`}},icon:{defaultValue:null,description:``,name:`icon`,required:!1,type:{name:`ReactNode`}},error:{defaultValue:null,description:``,name:`error`,required:!1,type:{name:`boolean`}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},accept:{defaultValue:null,description:``,name:`accept`,required:!1,type:{name:`string`}},required:{defaultValue:null,description:``,name:`required`,required:!1,type:{name:`boolean`}},multiple:{defaultValue:null,description:``,name:`multiple`,required:!1,type:{name:`boolean`}},fullWidth:{defaultValue:null,description:``,name:`fullWidth`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},pattern:{defaultValue:null,description:``,name:`pattern`,required:!1,type:{name:`string`}},title:{defaultValue:null,description:``,name:`title`,required:!1,type:{name:`string`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`File[] | FileList | null`}},localeText:{defaultValue:null,description:``,name:`localeText`,required:!1,type:{name:`{ files: string; }`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void)`}}}}}catch{}var v=_,y=e=>{let t=(0,f.useRef)(null),i=(0,f.useRef)(null);return r(o,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,component:`form`,onSubmit:e=>{e.preventDefault(),alert(`Submitted`)},children:[n(v,{size:`small`,...e,ref:t}),n(v,{size:`medium`,...e,ref:i}),r(o,{direction:`row`,spacing:1,children:[n(u,{onClick:()=>t?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset`}),n(u,{onClick:()=>i?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset medium`}),e?.required&&n(u,{type:`submit`,variant:`contained`,children:`Submit`})]})]})},b=e=>{let[t,i]=(0,f.useState)(null);return r(o,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,children:[n(v,{...e,size:`small`,value:t,onChange:({target:e})=>i(e.files)}),n(u,{variant:`contained`,onClick:()=>i(null),disabled:!t?.length,children:`Remove files`})]})},x=y.bind({});x.args={label:`Ajouter une photo ou un fichier`};var S=y.bind({});S.args={label:`Ajouter une photo ou un fichier`,multiple:!0};var C=y.bind({});C.args={label:`Ajouter une photo ou un fichier`,required:!0};var w=y.bind({});w.args={helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`};var T=y.bind({});T.args={label:`Ajouter une photo ou un fichier`,variant:`horizontal`};var E=y.bind({});E.args={label:`Ajouter une photo ou un fichier`,multiple:!0,variant:`horizontal`};var D=y.bind({});D.args={error:!0,helperText:`Fichier invalide`,label:`Ajouter une photo ou un fichier`};var O=y.bind({});O.args={disabled:!0,helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`};var k=b.bind({});k.args={label:`Controlled File Input`};var A={component:v,title:`Components/Inputs/File`};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<null | FileList>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
      <File {...args} size="small" value={files} onChange={({
      target
    }) => setFiles(target.files)} />
      <Button variant="contained" onClick={() => setFiles(null)} disabled={!files?.length}>
        Remove files
      </Button>
    </Stack>;
}`,...k.parameters?.docs?.source}}};var j=[`Basic`,`FileMultiple`,`Required`,`WithLabelAndHelperText`,`DirectionRow`,`DirectionRowMultiple`,`WithError`,`Disabled`,`Controlled`];export{x as Basic,k as Controlled,T as DirectionRow,E as DirectionRowMultiple,O as Disabled,S as FileMultiple,C as Required,D as WithError,w as WithLabelAndHelperText,j as __namedExportsOrder,A as default};