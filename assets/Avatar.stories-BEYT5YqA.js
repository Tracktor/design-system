import{g as aa,h as ra,r as y,d as ta,a0 as ea,j as O,s as sa,e as _,f as na,m as ca,b as f,a as r}from"./iframe-DZQ9sGV0.js";import{A as t}from"./Avatar-DN_s1ZQJ.js";import{S as i}from"./Stack-BIFwhIm5.js";import{A as oa,a as ia}from"./Avatar-TIl8blIl.js";import{B as ga}from"./Badge-DLi_TF5w.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CGO7Wj0T.js";import"./useThemeProps-TWJnuSzS.js";import"./usePreviousProps-BxM0lQ70.js";function da(a){return ra("MuiAvatarGroup",a)}const la=aa("MuiAvatarGroup",["root","avatar"]),D={small:-16,medium:-8},ma=a=>{const{classes:n}=a;return na({root:["root"],avatar:["avatar"]},da,n)},pa=sa("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,n)=>[{[`& .${la.avatar}`]:n.avatar},n.root]})(ca(({theme:a})=>({display:"flex",flexDirection:"row-reverse",[`& .${ia.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),ha=y.forwardRef(function(n,P){const B=ta({props:n,name:"MuiAvatarGroup"}),{children:H,className:V,component:q="div",componentsProps:E,max:I=5,renderSurplus:N,slotProps:$={},slots:F={},spacing:J="medium",total:K,variant:j="circular",...U}=B;let c=I<2?2:I;const s={...B,max:I,spacing:J,component:q,variant:j},z=ma(s),G=y.Children.toArray(H).filter(g=>y.isValidElement(g)),b=K||G.length;b===c&&(c+=1),c=Math.min(b+1,c);const W=Math.min(G.length,c-1),M=Math.max(b-c,b-W,0),Q=N?N(M):`+${M}`;let k;s.spacing&&D[s.spacing]!==void 0?k=D[s.spacing]:s.spacing===0?k=0:k=-s.spacing||D.medium;const X={slots:F,slotProps:{surplus:$.additionalAvatar??E?.additionalAvatar,...E,...$}},[Y,Z]=ea("surplus",{elementType:oa,externalForwardedProps:X,className:z.avatar,ownerState:s,additionalProps:{variant:j}});return O.jsxs(pa,{as:q,ownerState:s,className:_(z.root,V),ref:P,...U,style:{"--AvatarGroup-spacing":`${k}px`,...U.style},children:[M?O.jsx(Y,{...Z,children:Q}):null,G.slice(0,W).reverse().map(g=>y.cloneElement(g,{className:_(g.props.className,z.avatar),variant:g.props.variant||j}))]})}),e="https://avatars.githubusercontent.com/u/16801167?s=200&v=4",ua=a=>f(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[r(t,{size:"small",...a,children:"S"}),r(t,{size:"medium",...a,children:"M"}),r(t,{size:"large",...a,children:"L"})]}),L=a=>f(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[r(t,{src:a?.src||e,size:"small",...a}),r(t,{src:a?.src||e,size:"medium",...a}),r(t,{src:a?.src||e,size:"large",...a})]}),C=a=>f(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[r(t,{src:a?.src||e,sx:{height:24,width:24},...a}),r(t,{src:a?.src||e,...a}),r(t,{src:a?.src||e,sx:{height:56,width:56},...a})]}),R=a=>f(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[r(t,{sx:{height:24,width:24},...a,children:"T"}),r(t,{...a,children:"T"}),r(t,{sx:{height:56,width:56},...a,children:"T"})]}),va=a=>r(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:f(ha,{max:4,children:[r(t,{alt:"Tracktor",src:e,...a}),r(t,{alt:"Tracktor",src:e,...a}),r(t,{alt:"Tracktor",src:e,...a}),r(t,{alt:"Tracktor",src:e,...a}),r(t,{alt:"Tracktor",src:e,...a})]})}),Sa=a=>r(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:r(ga,{overlap:"circular",anchorOrigin:{horizontal:"right",vertical:"bottom"},badgeContent:r(t,{src:e,sx:{height:20,width:20},...a}),children:r(t,{alt:"Travis Howard",src:e,...a})})}),o=C.bind({});o.args={};const T=ua.bind({});o.args={};const d=C.bind({});d.args={src:"null"};const l=C.bind({});l.args={variant:"square"};const m=C.bind({});m.args={variant:"rounded"};const p=R.bind({});p.args={};const h=R.bind({});h.args={variant:"square"};const u=R.bind({});u.args={variant:"rounded"};const v=va.bind({});v.args={};const S=Sa.bind({});S.args={};const A=L.bind({});A.args={secondarySrc:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",src:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"};const x=L.bind({});x.args={secondaryAvatarProps:{variant:"rounded"},secondarySrc:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",src:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",variant:"rounded"};const w=L.bind({});w.args={secondarySrc:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",src:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",variant:"rounded"};const Ia={component:t,title:"Components/Data Display/Avatar"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 24,
    width: 24
  }} {...args} />
    <Avatar src={args?.src || avatarSrc} {...args} />
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 56,
    width: 56
  }} {...args} />
  </Stack>`,...o.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar size="small" {...args}>
      S
    </Avatar>
    <Avatar size="medium" {...args}>
      M
    </Avatar>
    <Avatar size="large" {...args}>
      L
    </Avatar>
  </Stack>`,...T.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 24,
    width: 24
  }} {...args} />
    <Avatar src={args?.src || avatarSrc} {...args} />
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 56,
    width: 56
  }} {...args} />
  </Stack>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 24,
    width: 24
  }} {...args} />
    <Avatar src={args?.src || avatarSrc} {...args} />
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 56,
    width: 56
  }} {...args} />
  </Stack>`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 24,
    width: 24
  }} {...args} />
    <Avatar src={args?.src || avatarSrc} {...args} />
    <Avatar src={args?.src || avatarSrc} sx={{
    height: 56,
    width: 56
  }} {...args} />
  </Stack>`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar sx={{
    height: 24,
    width: 24
  }} {...args}>
      T
    </Avatar>
    <Avatar {...args}>T</Avatar>
    <Avatar sx={{
    height: 56,
    width: 56
  }} {...args}>
      T
    </Avatar>
  </Stack>`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar sx={{
    height: 24,
    width: 24
  }} {...args}>
      T
    </Avatar>
    <Avatar {...args}>T</Avatar>
    <Avatar sx={{
    height: 56,
    width: 56
  }} {...args}>
      T
    </Avatar>
  </Stack>`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar sx={{
    height: 24,
    width: 24
  }} {...args}>
      T
    </Avatar>
    <Avatar {...args}>T</Avatar>
    <Avatar sx={{
    height: 56,
    width: 56
  }} {...args}>
      T
    </Avatar>
  </Stack>`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <AvatarGroup max={4}>
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
    </AvatarGroup>
  </Stack>`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge overlap="circular" anchorOrigin={{
    horizontal: "right",
    vertical: "bottom"
  }} badgeContent={<Avatar src={avatarSrc} sx={{
    height: 20,
    width: 20
  }} {...args} />}>
      <Avatar alt="Travis Howard" src={avatarSrc} {...args} />
    </Badge>
  </Stack>`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} size="small" {...args} />
    <Avatar src={args?.src || avatarSrc} size="medium" {...args} />
    <Avatar src={args?.src || avatarSrc} size="large" {...args} />
  </Stack>`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} size="small" {...args} />
    <Avatar src={args?.src || avatarSrc} size="medium" {...args} />
    <Avatar src={args?.src || avatarSrc} size="large" {...args} />
  </Stack>`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} size="small" {...args} />
    <Avatar src={args?.src || avatarSrc} size="medium" {...args} />
    <Avatar src={args?.src || avatarSrc} size="large" {...args} />
  </Stack>`,...w.parameters?.docs?.source}}};const ja=["Image","Size","WithoutImage","ImageSquare","ImageRounded","Letter","LetterSquare","LetterRounded","Grouped","WithBadge","Double","DoubleRounded","DoubleMixed"];export{A as Double,w as DoubleMixed,x as DoubleRounded,v as Grouped,o as Image,m as ImageRounded,l as ImageSquare,p as Letter,u as LetterRounded,h as LetterSquare,T as Size,S as WithBadge,d as WithoutImage,ja as __namedExportsOrder,Ia as default};
