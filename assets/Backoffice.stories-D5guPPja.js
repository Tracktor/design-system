import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{n as i}from"./GlobalStyles-DXlWX7xR.js";import{t as a}from"./Box-DFvgjzeS.js";import{i as o,t as s}from"./NavigationMenu-RHZ1k6KR.js";import{t as c}from"./Stack-BIr57r_j.js";import{t as l}from"./Typography-BNYwlYGw.js";import{t as u}from"./AppBar-BjbEk6UD.js";var d=u,f=e(t(),1),p=({Main:e,Sidebar:t,AppBar:s})=>{let{breakpoints:l}=i(),u=(0,f.useRef)(null),d=o(l.down(`md`)),p=(0,f.isValidElement)(t)?(0,f.cloneElement)(t,{AppBar:s}):t;return r(c,{height:`100%`,children:[!d&&s,r(c,{height:`100%`,direction:d?`column`:`row`,minHeight:0,children:[p,n(a,{flex:1,sx:{maxHeight:`100%`,overflow:`auto`},ref:u,children:n(a,{component:`main`,height:`100%`,children:e})})]})]})};try{p.displayName=`Backoffice`,p.__docgenInfo={description:``,displayName:`Backoffice`,props:{AppBar:{defaultValue:null,description:``,name:`AppBar`,required:!1,type:{name:`ReactNode`}},Main:{defaultValue:null,description:``,name:`Main`,required:!1,type:{name:`ReactNode`}},Sidebar:{defaultValue:null,description:``,name:`Sidebar`,required:!1,type:{name:`ReactNode`}}}}}catch{}var m=[{active:!0,icon:`🏠`,label:`Dashboard`,url:`#`},{icon:`📦`,label:`Booking`,url:`#`}],h=e=>n(a,{sx:{height:`100%`,width:`100%`},children:n(p,{AppBar:n(d,{actionProps:{children:`Action`}}),Sidebar:n(s,{items:m}),Main:n(a,{p:3,children:n(l,{variant:`h1`,children:`This is main`})}),...e})}),g=e=>n(a,{sx:{height:`100%`,width:`100%`},children:n(p,{Sidebar:n(s,{items:m}),Main:n(a,{p:3,children:n(l,{variant:`h1`,children:`This is main`})}),...e})}),_=h.bind({});_.args={};var v=g.bind({});v.args={};var y={component:p,title:`Components/Layout/Backoffice`};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Box sx={{
  height: "100%",
  width: "100%"
}}>
    <Backoffice AppBar={<AppBar actionProps={{
    children: "Action"
  }} />} Sidebar={<NavigationMenu items={menuItems} />} Main={<Box p={3}>
          <Typography variant="h1">This is main</Typography>
        </Box>} {...args} />
  </Box>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Box sx={{
  height: "100%",
  width: "100%"
}}>
    <Backoffice Sidebar={<NavigationMenu items={menuItems} />} Main={<Box p={3}>
          <Typography variant="h1">This is main</Typography>
        </Box>} {...args} />
  </Box>`,...v.parameters?.docs?.source}}};var b=[`Basic`,`WithoutAppBar`];export{_ as Basic,v as WithoutAppBar,b as __namedExportsOrder,y as default};