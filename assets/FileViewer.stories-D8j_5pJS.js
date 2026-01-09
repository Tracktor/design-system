import{b as a,a as e,r as I,F as S}from"./iframe-CMab-WJE.js";import{F as s}from"./FileViewer-mvTuyvjT.js";import{B as y}from"./Button-DxsaTX6Q.js";import{S as u}from"./Stack-Bmm17zU8.js";import{G as o}from"./Grid-HtwFiPi6.js";import"./preload-helper-PPVm8Dsz.js";import"./Lightbox-BD5-Ed2h.js";import"./Box-DzJ_9kKE.js";import"./Fade-BBwoqCZj.js";import"./Modal-BwVXpxuu.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-CU_GDSV1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-VTxkI3Up.js";import"./Backdrop-Cxb937rf.js";import"./Typography-DYw4CFXK.js";import"./Tooltip-C7HpKzGD.js";import"./useControlled-DXGMmRrv.js";import"./Popper-CrnGDXD8.js";import"./useSlotProps-DDGTAkkW.js";import"./Button-3bsbUGIl.js";import"./useThemeProps-DMiDUtiQ.js";import"./isMuiElement-CHu0J1Jp.js";const x="https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",L="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",C="https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",O="https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv",B="https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg",k="https://commons.wikimedia.org/wiki/File:JPG_Test.jpg",F=t=>{const{width:n,disableLightbox:i}=t;return a(u,{direction:"row",height:"100%",alignItems:"center",justifyContent:"center",spacing:5,children:[e(s,{src:L,width:n,disableLightbox:i,...t}),e(s,{src:x,width:n,disableLightbox:i,...t})]})},f=t=>{const{width:n,disableLightbox:i}=t;return e(u,{direction:"row",height:"100%",alignItems:"center",justifyContent:"center",spacing:5,children:e(s,{src:L,width:n,disableLightbox:i,...t})})},D=t=>{const{width:n,disableLightbox:i,iconOnly:r}=t;return e(u,{height:"100%",alignItems:"center",justifyContent:"center",children:a(o,{container:!0,spacing:5,justifyContent:"center",alignItems:"center",children:[a(o,{size:12,container:!0,justifyContent:"center",spacing:5,children:[e(o,{children:e(s,{iconOnly:r,src:O,width:n,disableLightbox:i,fileName:"Document CSV",...t})}),e(o,{children:e(s,{iconOnly:r,src:x,width:n,disableLightbox:i,fileName:"Document PDF",...t})}),e(o,{children:e(s,{iconOnly:r,src:C,width:n,disableLightbox:i,fileName:"Image PNG",...t})})]}),a(o,{size:12,container:!0,justifyContent:"center",spacing:5,children:[e(o,{children:e(s,{iconOnly:r,src:B,width:n,disableLightbox:i,fileName:"No reconize extension",...t})}),e(o,{children:e(s,{iconOnly:r,src:k,width:n,disableLightbox:i,fileName:"Image JPG",...t})})]})]})})},G=t=>{const[n,i]=I.useState(""),[r,w]=I.useState(!1);return a(S,{children:[a(u,{direction:"row",height:"100%",alignItems:"center",justifyContent:"center",spacing:5,children:[e(y,{variant:"contained",onClick:()=>{i(x),w(!r)},children:"Open PDF"}),e(y,{variant:"outlined",onClick:()=>{i(L),w(!r)},children:"Open Image"})]}),e(s,{...t,src:n,open:r,onClose:()=>{w(!1)}})]})},c=F.bind({});c.args={width:220};const d=F.bind({});d.args={disableLightbox:!0,width:220};const l=G.bind({});l.args={disableThumb:!0,width:220};const h=F.bind({});h.args={variant:"rounded",width:220};const g=f.bind({});g.args={src:"https://placehold.co/1000",srcThumb:"https://placehold.co/500",variant:"rounded",width:220};const m=f.bind({});m.args={fileName:"Document CSV",height:115,src:O,width:174};const p=f.bind({});p.args={src:"https://a.a/a.png"};const b=D.bind({});b.args={height:115,iconOnly:!0,width:100};const ne={component:s,title:"Components/Data Display/FileViewer"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [pathFile, setPathFile] = useState<string>("");
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const handleOpenLightBoxPDF = () => {
    setPathFile(testFilePDF);
    setOpenLightBox(!openLightBox);
  };
  const handleOpenLightBoxImage = () => {
    setPathFile(testImage);
    setOpenLightBox(!openLightBox);
  };
  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };
  return <>
      <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
        <Button variant="contained" onClick={handleOpenLightBoxPDF}>
          Open PDF
        </Button>
        <Button variant="outlined" onClick={handleOpenLightBoxImage}>
          Open Image
        </Button>
      </Stack>
      <FileViewer {...args} src={pathFile} open={openLightBox} onClose={handleCloseLightBox} />
    </>;
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox,
    iconOnly
  } = args;
  return <Stack height="100%" alignItems="center" justifyContent="center">
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {/* Ligne du haut avec 3 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={csvFile} width={width} disableLightbox={disableLightbox} fileName="Document CSV" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={testFilePDF} width={width} disableLightbox={disableLightbox} fileName="Document PDF" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={testFilePNG} width={width} disableLightbox={disableLightbox} fileName="Image PNG" {...args} />
          </Grid>
        </Grid>

        {/* Ligne du bas avec 2 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={svgFile} width={width} disableLightbox={disableLightbox} fileName="No reconize extension" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={jpgFile} width={width} disableLightbox={disableLightbox} fileName="Image JPG" {...args} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>;
}`,...b.parameters?.docs?.source}}};const se=["Basic","DisableLightbox","DisableThumb","RoundedVariant","Thumbnail","Document","NotFound","IconOnly"];export{c as Basic,d as DisableLightbox,l as DisableThumb,m as Document,b as IconOnly,p as NotFound,h as RoundedVariant,g as Thumbnail,se as __namedExportsOrder,ne as default};
