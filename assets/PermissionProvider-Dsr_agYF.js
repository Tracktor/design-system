import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-eIJHG9y-.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Provider/PermissionProvider`}),`
`,(0,i.jsx)(t.h1,{id:`permissionprovider`,children:(0,i.jsx)(t.code,{children:`PermissionProvider`})}),`
`,(0,i.jsx)(t.p,{children:`Provider to manage permissions in your application.`}),`
`,(0,i.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import Home from "./Home";
import { PermissionProvider } from "@tracktor/design-system";

const App = () => (
    <PermissionProvider permissions={["order", "checkout"]}>
      <Home />
    </PermissionProvider>
);

export default App;
`})}),`
`,(0,i.jsxs)(t.p,{children:[`Then anywhere in your application like `,(0,i.jsx)(t.code,{children:`home.tsx`}),` you can use the hook without give permissions again.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("checkout");
const hasBill = hasPermission("bill");

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,(0,i.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Name`}),(0,i.jsx)(`th`,{children:`Type`}),(0,i.jsx)(`th`,{children:`Required`}),(0,i.jsx)(`th`,{children:`Description`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`permissions`})}),(0,i.jsx)(`td`,{children:`string[]`}),(0,i.jsx)(`td`,{children:`false`}),(0,i.jsx)(`td`,{children:`Array of permissions name`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`setPermissions`})}),(0,i.jsx)(`td`,{children:`function`}),(0,i.jsx)(`td`,{children:`undefined`}),(0,i.jsx)(`td`,{children:`Permission setter function`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`disabledPermissions`})}),(0,i.jsx)(`td`,{children:`string[]`}),(0,i.jsx)(`td`,{children:`false`}),(0,i.jsx)(`td`,{children:`Array of disabledPermissions name`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`children`})}),(0,i.jsx)(`td`,{children:`string`}),(0,i.jsx)(`td`,{children:`false`}),(0,i.jsx)(`td`,{children:`Children`})]})]})]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};