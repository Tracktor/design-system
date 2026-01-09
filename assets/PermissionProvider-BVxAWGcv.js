import{j as e}from"./iframe-zjPJjZb8.js";import{useMDXComponents as r}from"./index-B4Zx95tB.js";import{M as o}from"./blocks-DzS4Nu4o.js";import"./preload-helper-PPVm8Dsz.js";function i(n){const s={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Provider/PermissionProvider"}),`
`,e.jsx(s.h1,{id:"permissionprovider",children:e.jsx(s.code,{children:"PermissionProvider"})}),`
`,e.jsx(s.p,{children:"Provider to manage permissions in your application."}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import Home from "./Home";
import { PermissionProvider } from "@tracktor/design-system";

const App = () => (
    <PermissionProvider permissions={["order", "checkout"]}>
      <Home />
    </PermissionProvider>
);

export default App;
`})}),`
`,e.jsxs(s.p,{children:["Then anywhere in your application like ",e.jsx(s.code,{children:"home.tsx"})," you can use the hook without give permissions again."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("checkout");
const hasBill = hasPermission("bill");

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,e.jsx(s.h3,{id:"props",children:"Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"permissions"})}),e.jsx("td",{children:"string[]"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Array of permissions name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setPermissions"})}),e.jsx("td",{children:"function"}),e.jsx("td",{children:"undefined"}),e.jsx("td",{children:"Permission setter function"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabledPermissions"})}),e.jsx("td",{children:"string[]"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Array of disabledPermissions name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"Children"})]})]})]})]})}function l(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{l as default};
