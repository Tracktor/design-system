import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./Grid-Cf8f48zR.js";import{t as o}from"./Stack-BIr57r_j.js";import{t as s}from"./Button-CYkgkMcR.js";import{t as c}from"./FileViewer-DZm4oQY1.js";var l=e(t(),1),u=`https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf`,d=`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,f=`https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png`,p=`https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv`,m=`https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg`,h=`https://commons.wikimedia.org/wiki/File:JPG_Test.jpg`,g=e=>{let{width:t,disableLightbox:i}=e;return r(o,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:[n(c,{src:d,width:t,disableLightbox:i,...e}),n(c,{src:u,width:t,disableLightbox:i,...e})]})},_=e=>{let{width:t,disableLightbox:r}=e;return n(o,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:n(c,{src:d,width:t,disableLightbox:r,...e})})},v=e=>{let{width:t,disableLightbox:i,iconOnly:s}=e;return n(o,{height:`100%`,alignItems:`center`,justifyContent:`center`,children:r(a,{container:!0,spacing:5,justifyContent:`center`,alignItems:`center`,children:[r(a,{size:12,container:!0,justifyContent:`center`,spacing:5,children:[n(a,{children:n(c,{iconOnly:s,src:p,width:t,disableLightbox:i,fileName:`Document CSV`,...e})}),n(a,{children:n(c,{iconOnly:s,src:u,width:t,disableLightbox:i,fileName:`Document PDF`,...e})}),n(a,{children:n(c,{iconOnly:s,src:f,width:t,disableLightbox:i,fileName:`Image PNG`,...e})})]}),r(a,{size:12,container:!0,justifyContent:`center`,spacing:5,children:[n(a,{children:n(c,{iconOnly:s,src:m,width:t,disableLightbox:i,fileName:`No reconize extension`,...e})}),n(a,{children:n(c,{iconOnly:s,src:h,width:t,disableLightbox:i,fileName:`Image JPG`,...e})})]})]})})},y=e=>{let[t,a]=(0,l.useState)(``),[f,p]=(0,l.useState)(!1),m=()=>{a(u),p(!f)},h=()=>{a(d),p(!f)},g=()=>{p(!1)};return r(i,{children:[r(o,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:[n(s,{variant:`contained`,onClick:m,children:`Open PDF`}),n(s,{variant:`outlined`,onClick:h,children:`Open Image`})]}),n(c,{...e,src:t,open:f,onClose:g})]})},b=g.bind({});b.args={width:220};var x=g.bind({});x.args={disableLightbox:!0,width:220};var S=y.bind({});S.args={disableThumb:!0,width:220};var C=g.bind({});C.args={variant:`rounded`,width:220};var w=_.bind({});w.args={src:`https://placehold.co/1000`,srcThumb:`https://placehold.co/500`,variant:`rounded`,width:220};var T=_.bind({});T.args={fileName:`Document CSV`,height:115,src:p,width:174};var E=_.bind({});E.args={src:`https://a.a/a.png`};var D=v.bind({});D.args={height:115,iconOnly:!0,width:100};var O={component:c,title:`Components/Data Display/FileViewer`};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}};var k=[`Basic`,`DisableLightbox`,`DisableThumb`,`RoundedVariant`,`Thumbnail`,`Document`,`NotFound`,`IconOnly`];export{b as Basic,x as DisableLightbox,S as DisableThumb,T as Document,D as IconOnly,E as NotFound,C as RoundedVariant,w as Thumbnail,k as __namedExportsOrder,O as default};