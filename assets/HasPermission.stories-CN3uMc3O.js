import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as r}from"./Box-DFvgjzeS.js";import{t as i}from"./Stack-BIr57r_j.js";var a=e(t(),1),o=(0,a.createContext)({disabledPermissions:void 0,permissions:void 0,setPermissions:()=>{}});try{o.displayName=`PermissionContext`,o.__docgenInfo={description:``,displayName:`PermissionContext`,props:{}}}catch{}var s=(e,t)=>e===``||!t.length?!1:t.some(t=>e===t),c=()=>{let{permissions:e,setPermissions:t,disabledPermissions:n}=(0,a.useContext)(o),r=(0,a.useCallback)((t,r,i=`or`)=>{let a=[...r||[],...e||[]].filter(e=>!n?.includes(e));return a.length?Array.isArray(t)?i===`or`?t.some(e=>s(e,a)):t.every(e=>s(e,a)):s(t,a):!1},[n,e]);return{appendPermissions:(0,a.useCallback)(e=>{t(t=>[...t||[],e])},[t]),disabledPermissions:n,hasPermission:r,permissions:e,setPermissions:t}},l=({children:e,fallback:t,name:n,additionalPermissions:r,permissionCheckMode:i=`or`})=>{let{hasPermission:a}=c(),o=a(n,r,i);return o?e:!o&&t?t:null};try{l.displayName=`HasPermission`,l.__docgenInfo={description:``,displayName:`HasPermission`,props:{name:{defaultValue:null,description:`Permissions name or array of permission names`,name:`name`,required:!0,type:{name:`string | string[]`}},children:{defaultValue:null,description:`The content of the component`,name:`children`,required:!1,type:{name:`ReactNode`}},fallback:{defaultValue:null,description:`A fallback react to display when permissions is not enabled for given name`,name:`fallback`,required:!1,type:{name:`ReactNode`}},additionalPermissions:{defaultValue:null,description:`Additional permissions to check with combined context permissions`,name:`additionalPermissions`,required:!1,type:{name:`string[]`}},permissionCheckMode:{defaultValue:{value:`or`},description:`Operator to use when checking multiple permissions:
- "or": User must have at least one of the permissions (default)
- "and": User must have all permissions`,name:`permissionCheckMode`,required:!1,type:{name:`enum`,value:[{value:`"or"`},{value:`"and"`}]}}}}}catch{}var u=e=>n(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:n(l,{...e,children:n(`code`,{children:n(r,{p:2,children:`If user has permission, children is rendered`})})})}),d=u.bind({});d.args={additionalPermissions:[`test`],name:`test`};var f=u.bind({});f.args={};var p=u.bind({});p.args={fallback:n(`code`,{children:n(r,{p:2,children:`If user has not permission, we display this fallback.`})})};var m=u.bind({});m.args={additionalPermissions:[`test`],name:[`test`,`another_feature`],permissionCheckMode:`or`};var h=u.bind({});h.args={additionalPermissions:[`test`,`another_feature`],name:[`test`,`another_feature`],permissionCheckMode:`and`};var g={component:l,title:`Components/Utils/HasPermission`};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...h.parameters?.docs?.source}}};var _=[`IfWeHavePermission`,`IfWeHaveNotPermission`,`WithFallBack`,`OrPermissionCheckMode`,`AndPermissionCheckMode`];export{h as AndPermissionCheckMode,f as IfWeHaveNotPermission,d as IfWeHavePermission,m as OrPermissionCheckMode,p as WithFallBack,_ as __namedExportsOrder,g as default};