import{r as h,a as o}from"./iframe-DcYbRMsr.js";import{B as C}from"./Box-pwVYSent.js";import{S as I}from"./Stack-CRgH-umR.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CUcn4g5r.js";const H={disabledPermissions:void 0,permissions:void 0,setPermissions:()=>{}},k=h.createContext(H);try{k.displayName="PermissionContext",k.__docgenInfo={description:"",displayName:"PermissionContext",props:{}}}catch{}const x="or",P=(e,s)=>e===""||!s.length?!1:s.some(n=>e===n),S=()=>{const{permissions:e,setPermissions:s,disabledPermissions:n}=h.useContext(k),g=h.useCallback((r,i,_=x)=>{const u=[...i||[],...e||[]].filter(t=>!n?.includes(t));return u.length?Array.isArray(r)?_===x?r.some(t=>P(t,u)):r.every(t=>P(t,u)):P(r,u):!1},[n,e]);return{appendPermissions:h.useCallback(r=>{s(i=>[...i||[],r])},[s]),disabledPermissions:n,hasPermission:g,permissions:e,setPermissions:s}},f=({children:e,fallback:s,name:n,additionalPermissions:g,permissionCheckMode:y=x})=>{const{hasPermission:r}=S(),i=r(n,g,y);return i?e:!i&&s?s:null};try{f.displayName="HasPermission",f.__docgenInfo={description:"",displayName:"HasPermission",props:{name:{defaultValue:null,description:"Permissions name or array of permission names",name:"name",required:!0,type:{name:"string | string[]"}},children:{defaultValue:null,description:"The content of the component",name:"children",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"A fallback react to display when permissions is not enabled for given name",name:"fallback",required:!1,type:{name:"ReactNode"}},additionalPermissions:{defaultValue:null,description:"Additional permissions to check with combined context permissions",name:"additionalPermissions",required:!1,type:{name:"string[]"}},permissionCheckMode:{defaultValue:{value:"or"},description:`Operator to use when checking multiple permissions:
- "or": User must have at least one of the permissions (default)
- "and": User must have all permissions`,name:"permissionCheckMode",required:!1,type:{name:"enum",value:[{value:'"or"'},{value:'"and"'}]}}}}}catch{}const p=e=>o(I,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",sx:{height:"100%",width:"100%"},children:o(f,{...e,children:o("code",{children:o(C,{p:2,children:"If user has permission, children is rendered"})})})}),a=p.bind({});a.args={additionalPermissions:["test"],name:"test"};const c=p.bind({});c.args={};const d=p.bind({});d.args={fallback:o("code",{children:o(C,{p:2,children:"If user has not permission, we display this fallback."})})};const m=p.bind({});m.args={additionalPermissions:["test"],name:["test","another_feature"],permissionCheckMode:"or"};const l=p.bind({});l.args={additionalPermissions:["test","another_feature"],name:["test","another_feature"],permissionCheckMode:"and"};const A={component:f,title:"Components/Utils/HasPermission"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...l.parameters?.docs?.source}}};const j=["IfWeHavePermission","IfWeHaveNotPermission","WithFallBack","OrPermissionCheckMode","AndPermissionCheckMode"];export{l as AndPermissionCheckMode,c as IfWeHaveNotPermission,a as IfWeHavePermission,m as OrPermissionCheckMode,d as WithFallBack,j as __namedExportsOrder,A as default};
