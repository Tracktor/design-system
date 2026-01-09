import{j as s}from"./iframe-BgPkNInI.js";import{useMDXComponents as r}from"./index-CtQY0WqL.js";import{M as o}from"./blocks-5pJ2DjcP.js";import"./preload-helper-PPVm8Dsz.js";function i(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Hooks/usePermission"}),`
`,s.jsx(e.h1,{id:"usepermission",children:s.jsx(e.code,{children:"usePermission"})}),`
`,s.jsx(e.p,{children:"Utility hook for permission management."}),`
`,s.jsx(e.h3,{id:"basic-usage",children:"Basic usage"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("order", ["order", "checkout"]); // return true
const hasBill = hasPermission("bill", ["order", "checkout"]); // return false

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,s.jsx(e.h3,{id:"with-permission-check-mode",children:"With permission check mode"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();

// "or" mode (default) - User needs at least one of the permissions
const hasAnyPermission = hasPermission(["order", "checkout"], ["order"], "or"); // true

// "and" mode - User needs all of permissions
const hasAllPermissions = hasPermission(["order", "checkout"], ["order"], "and"); // false
`})}),`
`,s.jsx(e.h3,{id:"provide-permissions",children:"Provide permissions"}),`
`,s.jsxs(e.p,{children:["Put ",s.jsx(e.code,{children:"<PermissionProvider>"})," to provide user ",s.jsx(e.code,{children:"permissions"}),s.jsx("br",{}),`
In this example above static data is provided, but you can fetch user permissions.`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import Home from "./Home";
import { PermissionProvider } from "@tracktor/design-system";

const App = () => (
    <PermissionProvider permissions={["order", "checkout"]}>
      <Home />
    </PermissionProvider>
);

export default App;
`})}),`
`,s.jsxs(e.p,{children:["Then anywhere in your application like ",s.jsx(e.code,{children:"home.tsx"})," you can use the hook without give permissions."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("checkout");
const hasBill = hasPermission("bill");

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,s.jsx(e.h3,{id:"with-haspermission-component",children:"With HasPermission component"}),`
`,s.jsx(e.p,{children:"The HasPermission component can be used to conditionally render content based on user permissions."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { HasPermission } from "@tracktor/design-system";

// Basic usage
<HasPermission name="checkout">
  <CheckoutButton />
</HasPermission>

// With fallback
<HasPermission name="checkout" fallback={<RequestAccessButton />}>
  <CheckoutButton />
</HasPermission>

// With array of permissions using OR mode (default)
<HasPermission name={["checkout", "view_order"]} permissionCheckMode="or">
  <OrderSection />
</HasPermission>

// With array of permissions using AND mode
<HasPermission name={["checkout", "view_order"]} permissionCheckMode="and">
  <CompleteOrderSection />
</HasPermission>
`})}),`
`,s.jsx(e.h3,{id:"available-function",children:"Available function"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Name"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"hasPermission"})}),s.jsx("td",{children:'Check if has permission. Accepts an optional permissionCheckMode ("or" or "and")'})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"appendPermissions"})}),s.jsx("td",{children:"Append permission to PermissionContext"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"setPermissions"})}),s.jsx("td",{children:"Set permission to PermissionContext"})]})]})]}),`
`,s.jsx(e.h3,{id:"state-available",children:"State available"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Name"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"disabledPermissions"})}),s.jsx("td",{children:"List of current disabled permissions (override permissions)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"permissions"})}),s.jsx("td",{children:"List of current permissions"})]})]})]})]})}function h(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{h as default};
