import{b as l,a as n,S as ee,r as o,u as ne,F as te}from"./iframe-JHRo5wbm.js";import{B as k}from"./Button-D_Ol9FtH.js";import{u as re}from"./useTranslation-ZZMn6Pz0.js";import{S as M}from"./Stack-C4tcqEMm.js";import{T as B}from"./Typography-BVL_QmWQ.js";import{I as ie}from"./InputLabel-QzXCRpdX.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D0pWYTis.js";import"./Box-Bg8WUn3E.js";import"./useThemeProps-DoI279HG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DI3MWdTl.js";import"./FormLabel-CCC2-YMS.js";const q=({fontSize:e,sx:r,color:t="currentColor"})=>l(ee,{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",fontSize:e,sx:r,children:[n("g",{clipPath:"url(#clip0_12914_201806)",children:n("path",{d:"M22 10H14C12.9 10 12.01 10.9 12.01 12L12 28C12 29.1 12.89 30 13.99 30H26C27.1 30 28 29.1 28 28V16L22 10ZM26 28H14V12H21V17H26V28ZM16 23.01L17.41 24.42L19 22.84V27H21V22.84L22.59 24.43L24 23.01L20.01 19L16 23.01Z",fill:t})}),n("defs",{children:n("clipPath",{id:"clip0_12914_201806",children:n("rect",{width:"40",height:"40",fill:"white"})})})]});try{q.displayName="UploadIcon",q.__docgenInfo={description:"",displayName:"UploadIcon",props:{color:{defaultValue:{value:"currentColor"},description:"",name:"color",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"inherit"'},{value:'"large"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const A=5,ae=(e,r)=>{const t=r==="vertical";return e==="small"?t?130:60:t?150:80},le=e=>{if(!e)return"";const r=e.length>1,a=[...e||[]].slice(0,5).map(({name:s})=>{const C=s.split(".").pop();return s.length>10&&r?`${s.substring(0,10)}(...).${C}`:s}).join(" • ");return e.length>A?`${a} + ${e.length-A}`:a},c=o.forwardRef(({accept:e,name:r,disabled:t,required:a,error:s,localeText:C,multiple:N,id:G,size:P,helperText:L,fullWidth:W,icon:O,onChange:w,label:$,pattern:U,title:Z,value:I,variant:V="vertical"},J)=>{const[X,x]=o.useState(null),{t:z}=re(),{palette:T}=ne(),F=V==="vertical",E=G||r,Y=o.useRef(null),d=o.useRef(null),H=I!==void 0?I:X,_=le(H);o.useImperativeHandle(J,()=>{const i=d.current;return i.reset=()=>{x(null),d.current&&(d.current.value="")},i});const K=i=>{w?.(i),x(i.target.files)};return l(ie,{ref:Y,htmlFor:E,onDragOver:i=>{i.preventDefault()},onDrop:i=>{if(i.preventDefault(),i.dataTransfer.files.length>0){const m=d.current,D=i.dataTransfer.files;x(D);const j=new DataTransfer;Array.from(D).forEach(Q=>{j.items.add(Q)}),m&&(m.files=j.files),m?.focus(),m?.blur(),w?.({...i,target:m}),i.dataTransfer.clearData()}},sx:{"&:hover, &:focus":{borderColor:T.primary.main},border:`1px dashed ${s?T.error.main:T.divider}`,borderRadius:1,cursor:"pointer",height:ae(P,V),maxWidth:W?"100%":400,padding:2,position:"relative",width:"100%"},children:[l(M,{alignItems:"center",height:"100%",direction:F?"column":"row",justifyContent:F?"center":"flex-start",textAlign:F?"center":"left",spacing:.5,color:t?"text.disabled":"text.secondary",children:[O||n(q,{sx:{height:40,width:40}}),_?l(te,{children:[l(B,{variant:"body2",color:"textSecondary",children:[H?.length," ",C?.files||z("files")]}),n(B,{variant:"body2",color:"primary",whiteSpace:F?"normal":"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:_})]}):l(B,{variant:"subtitle1",color:t?"text.disabled":"primary",children:[$||z("clickToUpload")," ",a&&"*"]}),L&&n(B,{color:s?"error":"textSecondary",variant:"body2",children:L})]}),n("input",{id:E,ref:d,type:"file",title:Z,disabled:t,required:a,name:r,multiple:N,accept:e,pattern:U,onChange:K,style:{left:"50%",opacity:0,pointerEvents:"none",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",zIndex:-1}},I?"has-files":"no-files")]})});try{c.displayName="File",c.__docgenInfo={description:"",displayName:"File",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},variant:{defaultValue:{value:"vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"File[] | FileList | null"}},localeText:{defaultValue:null,description:"",name:"localeText",required:!1,type:{name:"{ files: string; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const u=e=>{const r=o.useRef(null),t=o.useRef(null);return l(M,{spacing:2,height:"100%",alignItems:"center",justifyContent:"center",component:"form",onSubmit:a=>{a.preventDefault(),alert("Submitted")},children:[n(c,{size:"small",...e,ref:r}),n(c,{size:"medium",...e,ref:t}),l(M,{direction:"row",spacing:1,children:[n(k,{onClick:()=>r?.current?.reset(),color:"error",variant:"outlined",children:"Reset"}),n(k,{onClick:()=>t?.current?.reset(),color:"error",variant:"outlined",children:"Reset medium"}),e?.required&&n(k,{type:"submit",variant:"contained",children:"Submit"})]})]})},oe=e=>{const[r,t]=o.useState(null);return l(M,{spacing:2,height:"100%",alignItems:"center",justifyContent:"center",children:[n(c,{...e,size:"small",value:r,onChange:({target:a})=>t(a.files)}),n(k,{variant:"contained",onClick:()=>t(null),disabled:!r?.length,children:"Remove files"})]})},p=u.bind({});p.args={label:"Ajouter une photo ou un fichier"};const f=u.bind({});f.args={label:"Ajouter une photo ou un fichier",multiple:!0};const g=u.bind({});g.args={label:"Ajouter une photo ou un fichier",required:!0};const h=u.bind({});h.args={helperText:"SVG, PNG, JPG or GIF (max. 3MB)",label:"Ajouter une photo ou un fichier"};const R=u.bind({});R.args={label:"Ajouter une photo ou un fichier",variant:"horizontal"};const b=u.bind({});b.args={label:"Ajouter une photo ou un fichier",multiple:!0,variant:"horizontal"};const v=u.bind({});v.args={error:!0,helperText:"Fichier invalide",label:"Ajouter une photo ou un fichier"};const S=u.bind({});S.args={disabled:!0,helperText:"SVG, PNG, JPG or GIF (max. 3MB)",label:"Ajouter une photo ou un fichier"};const y=oe.bind({});y.args={label:"Controlled File Input"};const Be={component:c,title:"Components/Inputs/File"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<null | FileList>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
      <File {...args} size="small" value={files} onChange={({
      target
    }) => setFiles(target.files)} />
      <Button variant="contained" onClick={() => setFiles(null)} disabled={!files?.length}>
        Remove files
      </Button>
    </Stack>;
}`,...y.parameters?.docs?.source}}};const ke=["Basic","FileMultiple","Required","WithLabelAndHelperText","DirectionRow","DirectionRowMultiple","WithError","Disabled","Controlled"];export{p as Basic,y as Controlled,R as DirectionRow,b as DirectionRowMultiple,S as Disabled,f as FileMultiple,g as Required,v as WithError,h as WithLabelAndHelperText,ke as __namedExportsOrder,Be as default};
