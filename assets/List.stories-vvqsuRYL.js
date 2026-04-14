import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./Box-DFvgjzeS.js";import{t as o}from"./Stack-BIr57r_j.js";import{t as s}from"./Collapse-DPLi2b3B.js";import{t as c}from"./Alert-C9j59ec6.js";import{t as l}from"./Typography-BNYwlYGw.js";import{t as u}from"./ListSubheader-D_oVgNsI.js";import{t as d}from"./Avatar-p_cSZ-X-.js";import{t as f}from"./Card-CnvrwJCa.js";import{t as p}from"./Divider-Dm1KHk8o.js";import{t as m}from"./List-dHlU8BBG.js";import{t as h}from"./ListItem-BnsA-Tfl.js";import{t as g}from"./ListItemButton-BNDaM0Mi.js";import{t as _}from"./ListItemAvatar-BObKCzsU.js";import{t as v}from"./ListItemText-Cs8fd-Dg.js";import{t as y}from"./Skeleton-CMYhxntG.js";var b=e(t(),1),x=`No data`,S={large:80,medium:50,small:40},C=(0,b.forwardRef)(({children:e,...t},r)=>n(f,{component:`li`,ref:r,...t,children:e})),w=({children:e,isEmpty:t,isLoading:r,emptyMessage:i,sx:o,height:s,onClick:l,size:u=`medium`,...d},f)=>r?n(y,{width:`100%`,variant:`rounded`,height:s||S[u],sx:{marginBottom:1},ref:f,component:`li`}):t?n(h,{disablePadding:!0,children:n(c,{severity:`info`,sx:{width:`100%`},ref:f,children:i||x})}):n(h,{component:C,ref:f,onClick:l,sx:{alignItems:`center`,display:`flex`,height:s||S[u],marginBottom:1,px:2,width:`100%`,...l&&{"&:hover":{backgroundColor:`action.hover`},cursor:`pointer`},...o},...d,children:n(a,{flex:`auto`,minWidth:0,children:e})}),T=(0,b.memo)((0,b.forwardRef)(w));try{w.displayName=`ListItemCard`,w.__docgenInfo={description:``,displayName:`ListItemCard`,props:{size:{defaultValue:{value:`medium`},description:`Set predefined size, ignored if prop height is provided`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}},height:{defaultValue:null,description:`Set custom height`,name:`height`,required:!1,type:{name:`number`}},component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}},isLoading:{defaultValue:null,description:`If list is loading item render loading skeleton`,name:`isLoading`,required:!1,type:{name:`boolean`}},isEmpty:{defaultValue:null,description:`If list is empty item render empty message`,name:`isEmpty`,required:!1,type:{name:`boolean`}},emptyMessage:{defaultValue:null,description:`Empty message if list is empty`,name:`emptyMessage`,required:!1,type:{name:`string`}}}}}catch{}var E=T,D=e=>n(m,{...e});try{D.displayName=`List`,D.__docgenInfo={description:``,displayName:`List`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var O=e=>n(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(D,{sx:{backgroundColor:`info.main`,maxWidth:360,width:`100%`},...e,children:[n(h,{children:n(v,{primary:`Bulldozer`})}),n(h,{children:n(v,{primary:`Mini-pelle`})}),n(h,{children:n(v,{primary:`Dumper`})})]})}),k=e=>n(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(D,{sx:{backgroundColor:`secondary.main`,maxWidth:360,width:`100%`},...e,children:[n(h,{children:n(v,{primary:`Bulldozer`,secondary:`Lorem Ipsum`})}),n(h,{children:n(v,{primary:`Mini-pelle`,secondary:`Lorem Ipsum`})}),n(h,{children:n(v,{primary:`Dumper`,secondary:`Lorem Ipsum`})})]})}),A=e=>n(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(D,{sx:{maxWidth:360,width:`100%`},...e,children:[r(h,{alignItems:`flex-start`,children:[n(_,{children:n(d,{children:`RS`})}),n(v,{primary:`Brunch this weekend?`,secondary:r(i,{children:[n(l,{sx:{display:`inline`},component:`span`,variant:`body2`,children:`Ali Connors`}),` — I'll be in your neighborhood doing errands this…`]})})]}),n(p,{variant:`inset`,component:`li`}),r(h,{alignItems:`flex-start`,children:[n(_,{children:n(d,{children:`TH`})}),n(v,{primary:`Summer BBQ`,secondary:r(i,{children:[n(l,{sx:{display:`inline`},component:`span`,variant:`body2`,children:`to Scott, Alex, Jennifer`}),` — Wish I could come, but I'm out of town this…`]})})]}),n(p,{variant:`inset`,component:`li`}),r(h,{alignItems:`flex-start`,children:[n(_,{children:n(d,{children:`SA`})}),n(v,{primary:`Oui Oui`,secondary:r(i,{children:[n(l,{sx:{display:`inline`},component:`span`,variant:`body2`,children:`Sandra Adams`}),` — Do you have Paris recommendations? Have you ever…`]})})]})]})}),j=e=>{let[t,i]=(0,b.useState)(!0),a=()=>{i(!t)};return n(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(D,{sx:{backgroundColor:`error.main`,maxWidth:360,width:`100%`},"aria-labelledby":`nested-list-subheader`,subheader:n(u,{component:`div`,id:`nested-list-subheader`,children:`Nested List Items`}),...e,children:[n(g,{children:n(v,{primary:`Sent mail`})}),n(g,{children:n(v,{primary:`Drafts`})}),r(g,{onClick:a,children:[n(v,{primary:`Inbox`}),t?`-`:`+`]}),n(s,{in:t,timeout:`auto`,unmountOnExit:!0,children:n(D,{disablePadding:!0,children:n(g,{sx:{pl:4},children:n(v,{primary:`Starred`})})})})]})})},M=e=>r(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[r(D,{sx:{maxWidth:360,width:`100%`},...e,children:[n(E,{isLoading:!0,size:`small`}),n(E,{size:`small`,children:`Small brunch this weekend ?`}),n(E,{size:`small`,children:`Small summer BBQ`}),n(E,{size:`small`,children:`Small Tracktor vibes`})]}),r(D,{sx:{maxWidth:360,width:`100%`},...e,children:[n(E,{isLoading:!0}),n(E,{children:`Medium brunch this weekend ?`}),n(E,{children:`Medium summer BBQ`}),n(E,{children:`Medium Tracktor vibes`})]}),r(D,{sx:{maxWidth:360,width:`100%`},...e,children:[n(E,{size:`large`,isLoading:!0,children:`Brunch this weekend ?`}),n(E,{size:`large`,children:`Large brunch this weekend ?`}),n(E,{size:`large`,children:`Large summer BBQ`}),n(E,{size:`large`,children:`Large Tracktor vibes`})]})]}),N=e=>n(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:n(D,{sx:{maxWidth:360,width:`100%`},...e,children:n(E,{size:`small`,isEmpty:!0})})}),P=O.bind({});P.args={};var F=O.bind({});F.args={dense:!0};var I=k.bind({});I.args={};var L=A.bind({});A.args={};var R=j.bind({});R.args={};var z=M.bind({});z.args={};var B=N.bind({});B.args={};var V={component:D,title:`Components/Data Display/List`};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{
    maxWidth: 360,
    width: "100%"
  }} {...args}>
      <ListItemCard size="small" isEmpty />
    </List>
  </Stack>`,...B.parameters?.docs?.source}}};var H=[`Basic`,`Dense`,`WithTextSecondary`,`AlignItemsList`,`NestedList`,`ListOfCard`,`ListOfCardEmpty`];export{L as AlignItemsList,P as Basic,F as Dense,z as ListOfCard,B as ListOfCardEmpty,R as NestedList,I as WithTextSecondary,H as __namedExportsOrder,V as default};