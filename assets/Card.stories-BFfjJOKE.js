import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{R as n,d as r,n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as o}from"./jsx-runtime-prWBgBgC.js";import{n as s}from"./GlobalStyles-DXlWX7xR.js";import{t as c}from"./generateUtilityClass-DUL8zXGJ.js";import{t as l}from"./Box-DFvgjzeS.js";import{t as u}from"./generateUtilityClasses-DFWpRkIR.js";import{n as d,t as f}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as p}from"./memoTheme-BGsJ-lK3.js";import{t as m}from"./composeClasses-CbmTWm-W.js";import{t as h}from"./Stack-BIr57r_j.js";import{t as g}from"./SvgIcon-c7Jm5eCq.js";import{t as _}from"./ButtonBase-ai95Z7DO.js";import{t as v}from"./useSlot-BpysTuU-.js";import{t as y}from"./Collapse-DPLi2b3B.js";import{t as b}from"./IconButton-Cm2voGaN.js";import{n as x,t as S}from"./Typography-BNYwlYGw.js";import{t as C}from"./Avatar-p_cSZ-X-.js";import{t as w}from"./Button-C-NK_Lvb.js";import{t as T}from"./Card-CnvrwJCa.js";import{t as E}from"./CardContent-Xy3obn2C.js";function D(e){return c(`MuiCardActionArea`,e)}var O=u(`MuiCardActionArea`,[`root`,`focusVisible`,`focusHighlight`]),k=e(t()),A=e(o()),j=e=>{let{classes:t}=e;return m({root:[`root`],focusHighlight:[`focusHighlight`]},D,t)},M=d(_,{name:`MuiCardActionArea`,slot:`Root`})(p(({theme:e})=>({display:`block`,textAlign:`inherit`,borderRadius:`inherit`,width:`100%`,[`&:hover .${O.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${O.focusVisible} .${O.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),N=d(`span`,{name:`MuiCardActionArea`,slot:`FocusHighlight`})(p(({theme:e})=>({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`,opacity:0,backgroundColor:`currentcolor`,transition:e.transitions.create(`opacity`,{duration:e.transitions.duration.short})}))),P=k.forwardRef(function(e,t){let n=f({props:e,name:`MuiCardActionArea`}),{children:i,className:a,focusVisibleClassName:o,slots:s={},slotProps:c={},...l}=n,u=n,d=j(u),p={slots:s,slotProps:c},[m,h]=v(`root`,{elementType:M,externalForwardedProps:{...p,...l},shouldForwardComponentProp:!0,ownerState:u,ref:t,className:r(d.root,a),additionalProps:{focusVisibleClassName:r(o,d.focusVisible)}}),[g,_]=v(`focusHighlight`,{elementType:N,externalForwardedProps:p,ownerState:u,className:d.focusHighlight});return(0,A.jsxs)(m,{...h,children:[i,(0,A.jsx)(g,{..._})]})});function F(e){return c(`MuiCardActions`,e)}u(`MuiCardActions`,[`root`,`spacing`]);var ee=e=>{let{classes:t,disableSpacing:n}=e;return m({root:[`root`,!n&&`spacing`]},F,t)},I=d(`div`,{name:`MuiCardActions`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})({display:`flex`,alignItems:`center`,padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),L=k.forwardRef(function(e,t){let n=f({props:e,name:`MuiCardActions`}),{disableSpacing:i=!1,className:a,...o}=n,s={...n,disableSpacing:i};return(0,A.jsx)(I,{className:r(ee(s).root,a),ownerState:s,ref:t,...o})});function te(e){return c(`MuiCardHeader`,e)}var R=u(`MuiCardHeader`,[`root`,`avatar`,`action`,`content`,`title`,`subheader`]),ne=e=>{let{classes:t}=e;return m({root:[`root`],avatar:[`avatar`],action:[`action`],content:[`content`],title:[`title`],subheader:[`subheader`]},te,t)},re=d(`div`,{name:`MuiCardHeader`,slot:`Root`,overridesResolver:(e,t)=>[{[`& .${R.title}`]:t.title},{[`& .${R.subheader}`]:t.subheader},t.root]})({display:`flex`,alignItems:`center`,padding:16}),ie=d(`div`,{name:`MuiCardHeader`,slot:`Avatar`})({display:`flex`,flex:`0 0 auto`,marginRight:16}),ae=d(`div`,{name:`MuiCardHeader`,slot:`Action`})({flex:`0 0 auto`,alignSelf:`flex-start`,marginTop:-4,marginRight:-8,marginBottom:-4}),oe=d(`div`,{name:`MuiCardHeader`,slot:`Content`})({flex:`1 1 auto`,[`.${x.root}:where(& .${R.title})`]:{display:`block`},[`.${x.root}:where(& .${R.subheader})`]:{display:`block`}}),se=k.forwardRef(function(e,t){let n=f({props:e,name:`MuiCardHeader`}),{action:r,avatar:i,component:a=`div`,disableTypography:o=!1,subheader:s,subheaderTypographyProps:c,title:l,titleTypographyProps:u,slots:d={},slotProps:p={},...m}=n,h={...n,component:a,disableTypography:o},g=ne(h),_={slots:d,slotProps:{title:u,subheader:c,...p}},y=l,[b,x]=v(`title`,{className:g.title,elementType:S,externalForwardedProps:_,ownerState:h,additionalProps:{variant:i?`body2`:`h5`,component:`span`}});y!=null&&y.type!==S&&!o&&(y=(0,A.jsx)(b,{...x,children:y}));let C=s,[w,T]=v(`subheader`,{className:g.subheader,elementType:S,externalForwardedProps:_,ownerState:h,additionalProps:{variant:i?`body2`:`body1`,color:`textSecondary`,component:`span`}});C!=null&&C.type!==S&&!o&&(C=(0,A.jsx)(w,{...T,children:C}));let[E,D]=v(`root`,{ref:t,className:g.root,elementType:re,externalForwardedProps:{..._,...m,component:a},ownerState:h}),[O,k]=v(`avatar`,{className:g.avatar,elementType:ie,externalForwardedProps:_,ownerState:h}),[j,M]=v(`content`,{className:g.content,elementType:oe,externalForwardedProps:_,ownerState:h}),[N,P]=v(`action`,{className:g.action,elementType:ae,externalForwardedProps:_,ownerState:h});return(0,A.jsxs)(E,{...D,children:[i&&(0,A.jsx)(O,{...k,children:i}),(0,A.jsxs)(j,{...M,children:[y,C]}),r&&(0,A.jsx)(N,{...P,children:r})]})});function ce(e){return c(`MuiCardMedia`,e)}u(`MuiCardMedia`,[`root`,`media`,`img`]);var z=e=>{let{classes:t,isMediaComponent:n,isImageComponent:r}=e;return m({root:[`root`,n&&`media`,r&&`img`]},ce,t)},B=d(`div`,{name:`MuiCardMedia`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:r,isImageComponent:i}=n;return[t.root,r&&t.media,i&&t.img]}})({display:`block`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundPosition:`center`,variants:[{props:{isMediaComponent:!0},style:{width:`100%`}},{props:{isImageComponent:!0},style:{objectFit:`cover`}}]}),V=[`video`,`audio`,`picture`,`iframe`,`img`],H=[`picture`,`img`],U=k.forwardRef(function(e,t){let n=f({props:e,name:`MuiCardMedia`}),{children:i,className:a,component:o=`div`,image:s,src:c,style:l,...u}=n,d=V.includes(o),p=!d&&s?{backgroundImage:`url("${s}")`,...l}:l,m={...n,component:o,isMediaComponent:d,isImageComponent:H.includes(o)};return(0,A.jsx)(B,{className:r(z(m).root,a),as:o,role:!d&&s?`img`:void 0,ref:t,style:p,ownerState:m,src:d?s||c:void 0,...u,children:i})}),W=({children:e,...t})=>i(T,{...t,children:e});try{W.displayName=`Card`,W.__docgenInfo={description:``,displayName:`Card`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var G=`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,K=e=>a(h,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(W,{sx:{minWidth:275},...e,children:[a(E,{children:[i(S,{sx:{fontSize:14},color:`text.secondary`,gutterBottom:!0,children:`Word of the Day`}),i(S,{variant:`h5`,component:`div`,children:`Hello`}),i(S,{sx:{mb:1.5},color:`text.secondary`,children:`adjective`}),a(S,{variant:`body2`,children:[`well meaning and kindly.`,i(`br`,{}),`a benevolent smile`]})]}),i(L,{children:i(w,{size:`small`,children:`Learn More small`})})]}),a(W,{sx:{minWidth:275},...e,children:[a(E,{children:[i(S,{sx:{fontSize:14},color:`text.secondary`,gutterBottom:!0,children:`Word of the Day`}),i(S,{variant:`h5`,component:`div`,children:`Hello`}),i(S,{sx:{mb:1.5},color:`text.secondary`,children:`adjective`}),a(S,{variant:`body2`,children:[`well meaning and kindly.`,i(`br`,{}),`a benevolent smile`]})]}),i(L,{children:i(w,{children:`Learn More`})})]})]}),le=e=>i(h,{spacing:0,alignItems:`center`,justifyContent:`center`,height:`100%`,children:a(W,{sx:{maxWidth:345},...e,children:[i(U,{component:`img`,height:`140`,image:G,alt:`PME`}),a(E,{children:[i(S,{gutterBottom:!0,variant:`h5`,component:`div`,children:`Lizard`}),i(S,{variant:`body2`,color:`text.secondary`,children:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica`})]}),a(L,{children:[i(w,{size:`small`,children:`Share`}),i(w,{size:`small`,children:`Learn More`})]})]})}),ue=e=>i(h,{spacing:0,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(W,{sx:{maxWidth:345},...e,children:a(P,{children:[i(U,{component:`img`,height:`140`,image:G,alt:`PME`}),a(E,{children:[i(S,{gutterBottom:!0,variant:`h5`,component:`div`,children:`Click on the card !`}),i(S,{variant:`body2`,color:`text.secondary`,children:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica`})]})]})})}),de=()=>{let{palette:e}=s();return i(`svg`,{width:`20`,height:`20`,x:`0`,y:`0`,viewBox:`0 0 128 128`,children:i(`g`,{children:i(`path`,{d:`m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z`,fill:e.text.primary})})})},fe=d(e=>{let{expand:t,...n}=e;return i(b,{...n})})(({theme:e,expand:t})=>({marginLeft:`auto`,transform:t?`rotate(180deg)`:`rotate(0deg)`,transition:e.transitions.create(`transform`,{duration:e.transitions.duration.shortest})})),q=e=>{let[t,r]=(0,k.useState)(!1),o=()=>{r(!t)};return i(l,{display:`flex`,height:`100%`,overflow:`auto`,justifyContent:`center`,flexWrap:`wrap`,alignItems:`center`,children:a(W,{sx:{maxWidth:345},...e,children:[i(se,{avatar:i(C,{sx:{backgroundColor:n[500]},"aria-label":`recipe`,children:`R`}),action:i(b,{"aria-label":`settings`,children:i(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`MoreVertIcon`,children:i(`path`,{d:`M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`})})}),title:`Vous louez du matériel régulièrement ?`,subheader:`September 14, 2016`}),i(U,{component:`img`,height:`194`,image:G,alt:`PME`}),i(E,{children:i(S,{variant:`body2`,color:`text.secondary`,children:`This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`})}),a(L,{disableSpacing:!0,children:[i(b,{"aria-label":`add to favorites`,children:i(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`,children:i(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`})})}),i(b,{"aria-label":`share`,children:i(g,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ShareIcon`,children:i(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z`})})}),i(fe,{expand:t,onClick:o,"aria-expanded":t,"aria-label":`show more`,children:i(de,{})})]}),i(y,{in:t,timeout:`auto`,unmountOnExit:!0,children:a(E,{children:[i(S,{paragraph:!0,children:`Method:`}),i(S,{paragraph:!0,children:`Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.`}),i(S,{paragraph:!0,children:`Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.`}),i(S,{paragraph:!0,children:`Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)`}),i(S,{children:`Set aside off of the heat to let rest for 10 minutes, and then serve.`})]})})]})})},J=K.bind({});J.args={};var Y=K.bind({});Y.args={variant:`elevation`};var X=le.bind({});X.args={};var Z=ue.bind({});Z.args={};var Q=q.bind({});Q.args={};var $=K.bind({});$.args={square:!0};var pe={component:W,title:`Components/Surface/Card`};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...$.parameters?.docs?.source}}};var me=[`Basic`,`Elevation`,`Media`,`ActionArea`,`ComplexInteraction`,`Square`];export{Z as ActionArea,J as Basic,Q as ComplexInteraction,Y as Elevation,X as Media,$ as Square,me as __namedExportsOrder,pe as default};