import{g as _,h as D,r as E,d as F,a0 as y,e as R,s as m,j as h,f as q,B as le,m as X,a as n,b as s,I as N,S as U,ax as pe,u as he}from"./iframe-D0XseY2t.js";import{C as ue}from"./Card-mTpbpBiL.js";import{C as M}from"./CardContent-DmPir4TH.js";import{T as o,t as Q}from"./Typography-CAb7TeI_.js";import{B as L}from"./Button-y-6dmbIX.js";import{S as O}from"./Stack-CRpKgtub.js";import{A as me}from"./Avatar-CM3aFxy_.js";import{C as ge}from"./Collapse-HTvo_6M3.js";import{B as ye}from"./Box-B5ZgzvFN.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-BLpJjEkS.js";function Ce(e){return D("MuiCardActionArea",e)}const V=_("MuiCardActionArea",["root","focusVisible","focusHighlight"]),ve=e=>{const{classes:t}=e;return q({root:["root"],focusHighlight:["focusHighlight"]},Ce,t)},fe=m(le,{name:"MuiCardActionArea",slot:"Root"})(X(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${V.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${V.focusVisible} .${V.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),be=m("span",{name:"MuiCardActionArea",slot:"FocusHighlight"})(X(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),xe=E.forwardRef(function(t,a){const r=F({props:t,name:"MuiCardActionArea"}),{children:c,className:l,focusVisibleClassName:d,slots:i={},slotProps:v={},...b}=r,f=r,p=ve(f),x={slots:i,slotProps:v},[S,A]=y("root",{elementType:fe,externalForwardedProps:{...x,...b},shouldForwardComponentProp:!0,ownerState:f,ref:a,className:R(p.root,l),additionalProps:{focusVisibleClassName:R(d,p.focusVisible)}}),[u,g]=y("focusHighlight",{elementType:be,externalForwardedProps:x,ownerState:f,ref:a,className:p.focusHighlight});return h.jsxs(S,{...A,children:[c,h.jsx(u,{...g})]})});function Se(e){return D("MuiCardActions",e)}_("MuiCardActions",["root","spacing"]);const Te=e=>{const{classes:t,disableSpacing:a}=e;return q({root:["root",!a&&"spacing"]},Se,t)},Me=m("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),W=E.forwardRef(function(t,a){const r=F({props:t,name:"MuiCardActions"}),{disableSpacing:c=!1,className:l,...d}=r,i={...r,disableSpacing:c},v=Te(i);return h.jsx(Me,{className:R(v.root,l),ownerState:i,ref:a,...d})});function Ae(e){return D("MuiCardHeader",e)}const $=_("MuiCardHeader",["root","avatar","action","content","title","subheader"]),we=e=>{const{classes:t}=e;return q({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Ae,t)},ke=m("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${$.title}`]:t.title},{[`& .${$.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),Ie=m("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),Be=m("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ze=m("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${Q.root}:where(& .${$.title})`]:{display:"block"},[`.${Q.root}:where(& .${$.subheader})`]:{display:"block"}}),He=E.forwardRef(function(t,a){const r=F({props:t,name:"MuiCardHeader"}),{action:c,avatar:l,component:d="div",disableTypography:i=!1,subheader:v,subheaderTypographyProps:b,title:f,titleTypographyProps:p,slots:x={},slotProps:S={},...A}=r,u={...r,component:d,disableTypography:i},g=we(u),T={slots:x,slotProps:{title:p,subheader:b,...S}};let w=f;const[Y,Z]=y("title",{className:g.title,elementType:o,externalForwardedProps:T,ownerState:u,additionalProps:{variant:l?"body2":"h5",component:"span"}});w!=null&&w.type!==o&&!i&&(w=h.jsx(Y,{...Z,children:w}));let k=v;const[ee,ne]=y("subheader",{className:g.subheader,elementType:o,externalForwardedProps:T,ownerState:u,additionalProps:{variant:l?"body2":"body1",color:"textSecondary",component:"span"}});k!=null&&k.type!==o&&!i&&(k=h.jsx(ee,{...ne,children:k}));const[te,ae]=y("root",{ref:a,className:g.root,elementType:ke,externalForwardedProps:{...T,...A,component:d},ownerState:u}),[oe,re]=y("avatar",{className:g.avatar,elementType:Ie,externalForwardedProps:T,ownerState:u}),[se,ie]=y("content",{className:g.content,elementType:ze,externalForwardedProps:T,ownerState:u}),[ce,de]=y("action",{className:g.action,elementType:Be,externalForwardedProps:T,ownerState:u});return h.jsxs(te,{...ae,children:[l&&h.jsx(oe,{...re,children:l}),h.jsxs(se,{...ie,children:[w,k]}),c&&h.jsx(ce,{...de,children:c})]})});function je(e){return D("MuiCardMedia",e)}_("MuiCardMedia",["root","media","img"]);const Pe=e=>{const{classes:t,isMediaComponent:a,isImageComponent:r}=e;return q({root:["root",a&&"media",r&&"img"]},je,t)},Ee=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:r,isImageComponent:c}=a;return[t.root,r&&t.media,c&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),Ne=["video","audio","picture","iframe","img"],Re=["picture","img"],G=E.forwardRef(function(t,a){const r=F({props:t,name:"MuiCardMedia"}),{children:c,className:l,component:d="div",image:i,src:v,style:b,...f}=r,p=Ne.includes(d),x=!p&&i?{backgroundImage:`url("${i}")`,...b}:b,S={...r,component:d,isMediaComponent:p,isImageComponent:Re.includes(d)},A=Pe(S);return h.jsx(Ee,{className:R(A.root,l),as:d,role:!p&&i?"img":void 0,ref:a,style:x,ownerState:S,src:p?i||v:void 0,...f,children:c})}),C=({children:e,...t})=>n(ue,{...t,children:e});try{C.displayName="Card",C.__docgenInfo={description:"",displayName:"Card",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const J="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",K=e=>s(O,{spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[s(C,{sx:{minWidth:275},...e,children:[s(M,{children:[n(o,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),n(o,{variant:"h5",component:"div",children:"Hello"}),n(o,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),s(o,{variant:"body2",children:["well meaning and kindly.",n("br",{}),"a benevolent smile"]})]}),n(W,{children:n(L,{size:"small",children:"Learn More small"})})]}),s(C,{sx:{minWidth:275},...e,children:[s(M,{children:[n(o,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),n(o,{variant:"h5",component:"div",children:"Hello"}),n(o,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),s(o,{variant:"body2",children:["well meaning and kindly.",n("br",{}),"a benevolent smile"]})]}),n(W,{children:n(L,{children:"Learn More"})})]})]}),Le=e=>n(O,{spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:s(C,{sx:{maxWidth:345},...e,children:[n(G,{component:"img",height:"140",image:J,alt:"PME"}),s(M,{children:[n(o,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),n(o,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),s(W,{children:[n(L,{size:"small",children:"Share"}),n(L,{size:"small",children:"Learn More"})]})]})}),We=e=>n(O,{spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:n(C,{sx:{maxWidth:345},...e,children:s(xe,{children:[n(G,{component:"img",height:"140",image:J,alt:"PME"}),s(M,{children:[n(o,{gutterBottom:!0,variant:"h5",component:"div",children:"Click on the card !"}),n(o,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]})})}),$e=()=>{const{palette:e}=he();return n("svg",{width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 128 128",children:n("g",{children:n("path",{d:"m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z",fill:e.text.primary})})})},_e=m(e=>{const{expand:t,...a}=e;return n(N,{...a})})(({theme:e,expand:t})=>({marginLeft:"auto",transform:t?"rotate(180deg)":"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})})),De=e=>{const[t,a]=E.useState(!1),r=()=>{a(!t)};return n(ye,{display:"flex",height:"100%",overflow:"auto",justifyContent:"center",flexWrap:"wrap",alignItems:"center",children:s(C,{sx:{maxWidth:345},...e,children:[n(He,{avatar:n(me,{sx:{backgroundColor:pe[500]},"aria-label":"recipe",children:"R"}),action:n(N,{"aria-label":"settings",children:n(U,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"MoreVertIcon",children:n("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})}),title:"Vous louez du matériel régulièrement ?",subheader:"September 14, 2016"}),n(G,{component:"img",height:"194",image:J,alt:"PME"}),n(M,{children:n(o,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),s(W,{disableSpacing:!0,children:[n(N,{"aria-label":"add to favorites",children:n(U,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"FavoriteIcon",children:n("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})})}),n(N,{"aria-label":"share",children:n(U,{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"ShareIcon",children:n("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"})})}),n(_e,{expand:t,onClick:r,"aria-expanded":t,"aria-label":"show more",children:n($e,{})})]}),n(ge,{in:t,timeout:"auto",unmountOnExit:!0,children:s(M,{children:[n(o,{paragraph:!0,children:"Method:"}),n(o,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),n(o,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),n(o,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)"}),n(o,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})})},I=K.bind({});I.args={};const B=K.bind({});B.args={variant:"elevation"};const z=Le.bind({});z.args={};const H=We.bind({});H.args={};const j=De.bind({});j.args={};const P=K.bind({});P.args={square:!0};const Ze={component:C,title:"Components/Surface/Card"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More small</Button>
      </CardActions>
    </Card>

    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  </Stack>`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More small</Button>
      </CardActions>
    </Card>

    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  </Stack>`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{
    maxWidth: 345
  }} {...args}>
      <CardMedia component="img" height="140" image={image} alt="PME" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Stack>`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{
    maxWidth: 345
  }} {...args}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="PME" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Click on the card !
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Stack>`,...H.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return <Box display="flex" height="100%" overflow="auto" justifyContent="center" flexWrap="wrap" alignItems="center">
      <Card sx={{
      maxWidth: 345
    }} {...args}>
        <CardHeader avatar={<Avatar sx={{
        backgroundColor: red[500]
      }} aria-label="recipe">
              R
            </Avatar>} action={<IconButton aria-label="settings">
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreVertIcon">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </SvgIcon>
            </IconButton>} title="Vous louez du matériel régulièrement ?" subheader="September 14, 2016" />
        <CardMedia component="img" height="194" image={image} alt="PME" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
              <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </SvgIcon>
          </IconButton>
          <IconButton aria-label="share">
            <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShareIcon">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </SvgIcon>
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ArrowIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and
              cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
              until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the
              liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the
              rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any
              mussels that don&apos;t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>;
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More small</Button>
      </CardActions>
    </Card>

    <Card sx={{
    minWidth: 275
  }} {...args}>
      <CardContent>
        <Typography sx={{
        fontSize: 14
      }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  </Stack>`,...P.parameters?.docs?.source}}};const en=["Basic","Elevation","Media","ActionArea","ComplexInteraction","Square"];export{H as ActionArea,I as Basic,j as ComplexInteraction,B as Elevation,z as Media,P as Square,en as __namedExportsOrder,Ze as default};
