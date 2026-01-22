import{r as y,a as e,ad as j,b as i,F as f}from"./iframe-Caok1jJy.js";import{S as M}from"./Skeleton-OmvUotiK.js";import{L as a}from"./ListItem-BC7IVbXi.js";import{B as O}from"./Box-C_0BKT2W.js";import{C as N}from"./Card-bCSoSRrg.js";import{a as Q}from"./List-C1Wzyt7f.js";import{L as n}from"./ListItemText-B59B4OIy.js";import{S as m}from"./Stack-DRQGUNdr.js";import{L as C}from"./ListItemAvatar-SxITzlRE.js";import{A as b}from"./Avatar-CP5bwafE.js";import{T as S}from"./Typography-DroeofvW.js";import{D as A}from"./Divider-DLXstoEM.js";import{L as g}from"./ListItemButton-C1q0lCuO.js";import{C as q}from"./Collapse-BXBmfEum.js";import{L as R}from"./ListSubheader-Dub_nFNX.js";import"./preload-helper-PPVm8Dsz.js";import"./isMuiElement-FuRIds7s.js";import"./useThemeProps-BgOXabg8.js";import"./dividerClasses-Cvh3uXRh.js";const V="No data",z={large:80,medium:50,small:40},P=({children:t,...o},d)=>e(N,{component:"li",ref:d,...o,children:t}),F=y.forwardRef(P),v=({children:t,isEmpty:o,isLoading:d,emptyMessage:k,sx:_,height:w,onClick:T,size:B="medium",...D},x)=>d?e(M,{width:"100%",variant:"rounded",height:w||z[B],sx:{marginBottom:1},ref:x,component:"li"}):o?e(a,{disablePadding:!0,children:e(j,{severity:"info",sx:{width:"100%"},ref:x,children:k||V})}):e(a,{component:F,ref:x,onClick:T,sx:{alignItems:"center",display:"flex",height:w||z[B],marginBottom:1,px:2,width:"100%",...T&&{"&:hover":{backgroundColor:"action.hover"},cursor:"pointer"},..._},...D,children:e(O,{flex:"auto",minWidth:0,children:t})}),r=y.memo(y.forwardRef(v));try{v.displayName="ListItemCard",v.__docgenInfo={description:"",displayName:"ListItemCard",props:{size:{defaultValue:{value:"medium"},description:"Set predefined size, ignored if prop height is provided",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},height:{defaultValue:null,description:"Set custom height",name:"height",required:!1,type:{name:"number"}},isLoading:{defaultValue:null,description:"If list is loading item render loading skeleton",name:"isLoading",required:!1,type:{name:"boolean"}},isEmpty:{defaultValue:null,description:"If list is empty item render empty message",name:"isEmpty",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:null,description:"Empty message if list is empty",name:"emptyMessage",required:!1,type:{name:"string"}}}}}catch{}const s=t=>e(Q,{...t});try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const W=t=>e(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:i(s,{sx:{backgroundColor:"info.main",maxWidth:360,width:"100%"},...t,children:[e(a,{children:e(n,{primary:"Bulldozer"})}),e(a,{children:e(n,{primary:"Mini-pelle"})}),e(a,{children:e(n,{primary:"Dumper"})})]})}),H=t=>e(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:i(s,{sx:{backgroundColor:"secondary.main",maxWidth:360,width:"100%"},...t,children:[e(a,{children:e(n,{primary:"Bulldozer",secondary:"Lorem Ipsum"})}),e(a,{children:e(n,{primary:"Mini-pelle",secondary:"Lorem Ipsum"})}),e(a,{children:e(n,{primary:"Dumper",secondary:"Lorem Ipsum"})})]})}),E=t=>e(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:i(s,{sx:{maxWidth:360,width:"100%"},...t,children:[i(a,{alignItems:"flex-start",children:[e(C,{children:e(b,{children:"RS"})}),e(n,{primary:"Brunch this weekend?",secondary:i(f,{children:[e(S,{sx:{display:"inline"},component:"span",variant:"body2",children:"Ali Connors"})," — I'll be in your neighborhood doing errands this…"]})})]}),e(A,{variant:"inset",component:"li"}),i(a,{alignItems:"flex-start",children:[e(C,{children:e(b,{children:"TH"})}),e(n,{primary:"Summer BBQ",secondary:i(f,{children:[e(S,{sx:{display:"inline"},component:"span",variant:"body2",children:"to Scott, Alex, Jennifer"})," — Wish I could come, but I'm out of town this…"]})})]}),e(A,{variant:"inset",component:"li"}),i(a,{alignItems:"flex-start",children:[e(C,{children:e(b,{children:"SA"})}),e(n,{primary:"Oui Oui",secondary:i(f,{children:[e(S,{sx:{display:"inline"},component:"span",variant:"body2",children:"Sandra Adams"})," — Do you have Paris recommendations? Have you ever…"]})})]})]})}),J=t=>{const[o,d]=y.useState(!0);return e(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:i(s,{sx:{backgroundColor:"error.main",maxWidth:360,width:"100%"},"aria-labelledby":"nested-list-subheader",subheader:e(R,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),...t,children:[e(g,{children:e(n,{primary:"Sent mail"})}),e(g,{children:e(n,{primary:"Drafts"})}),i(g,{onClick:()=>{d(!o)},children:[e(n,{primary:"Inbox"}),o?"-":"+"]}),e(q,{in:o,timeout:"auto",unmountOnExit:!0,children:e(s,{disablePadding:!0,children:e(g,{sx:{pl:4},children:e(n,{primary:"Starred"})})})})]})})},$=t=>i(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[i(s,{sx:{maxWidth:360,width:"100%"},...t,children:[e(r,{isLoading:!0,size:"small"}),e(r,{size:"small",children:"Small brunch this weekend ?"}),e(r,{size:"small",children:"Small summer BBQ"}),e(r,{size:"small",children:"Small Tracktor vibes"})]}),i(s,{sx:{maxWidth:360,width:"100%"},...t,children:[e(r,{isLoading:!0}),e(r,{children:"Medium brunch this weekend ?"}),e(r,{children:"Medium summer BBQ"}),e(r,{children:"Medium Tracktor vibes"})]}),i(s,{sx:{maxWidth:360,width:"100%"},...t,children:[e(r,{size:"large",isLoading:!0,children:"Brunch this weekend ?"}),e(r,{size:"large",children:"Large brunch this weekend ?"}),e(r,{size:"large",children:"Large summer BBQ"}),e(r,{size:"large",children:"Large Tracktor vibes"})]})]}),G=t=>e(m,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(s,{sx:{maxWidth:360,width:"100%"},...t,children:e(r,{size:"small",isEmpty:!0})})}),l=W.bind({});l.args={};const c=W.bind({});c.args={dense:!0};const p=H.bind({});p.args={};const I=E.bind({});E.args={};const h=J.bind({});h.args={};const u=$.bind({});u.args={};const L=G.bind({});L.args={};const ue={component:s,title:"Components/Data Display/List"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    backgroundColor: "info.main",
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" />
      </ListItem>
    </List>
  </Stack>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    backgroundColor: "info.main",
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" />
      </ListItem>
    </List>
  </Stack>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    backgroundColor: "secondary.main",
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" secondary="Lorem Ipsum" />
      </ListItem>
    </List>
  </Stack>`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>RS</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary={<>
              <Typography sx={{
          display: "inline"
        }} component="span" variant="body2">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>TH</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Summer BBQ" secondary={<>
              <Typography sx={{
          display: "inline"
        }} component="span" variant="body2">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>SA</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Oui Oui" secondary={<>
              <Typography sx={{
          display: "inline"
        }} component="span" variant="body2">
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>} />
      </ListItem>
    </List>
  </Stack>`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <List sx={{
      backgroundColor: "error.main",
      maxWidth: 360,
      width: "100%"
    }} aria-labelledby="nested-list-subheader" subheader={<ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>} {...args}>
        <ListItemButton>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? "-" : "+"}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{
            pl: 4
          }}>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>;
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItemCard isLoading size="small" />
      <ListItemCard size="small">Small brunch this weekend ?</ListItemCard>
      <ListItemCard size="small">Small summer BBQ</ListItemCard>
      <ListItemCard size="small">Small Tracktor vibes</ListItemCard>
    </List>
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItemCard isLoading />
      <ListItemCard>Medium brunch this weekend ?</ListItemCard>
      <ListItemCard>Medium summer BBQ</ListItemCard>
      <ListItemCard>Medium Tracktor vibes</ListItemCard>
    </List>
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItemCard size="large" isLoading>
        Brunch this weekend ?
      </ListItemCard>
      <ListItemCard size="large">Large brunch this weekend ?</ListItemCard>
      <ListItemCard size="large">Large summer BBQ</ListItemCard>
      <ListItemCard size="large">Large Tracktor vibes</ListItemCard>
    </List>
  </Stack>`,...u.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItemCard size="small" isEmpty />
    </List>
  </Stack>`,...L.parameters?.docs?.source}}};const Le=["Basic","Dense","WithTextSecondary","AlignItemsList","NestedList","ListOfCard","ListOfCardEmpty"];export{I as AlignItemsList,l as Basic,c as Dense,u as ListOfCard,L as ListOfCardEmpty,h as NestedList,p as WithTextSecondary,Le as __namedExportsOrder,ue as default};
