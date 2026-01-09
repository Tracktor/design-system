import{j as n}from"./iframe-3GrHJcTe.js";import{useMDXComponents as t}from"./index-CAU9W0OJ.js";import{M as s}from"./blocks-BpB0Slgj.js";import"./preload-helper-PPVm8Dsz.js";function c(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Hooks/useSnackbar"}),`
`,n.jsx(e.h1,{id:"usesnackbar",children:n.jsx(e.code,{children:"useSnackbar"})}),`
`,n.jsxs(e.p,{children:["Utility hook for menu ",n.jsx(e.code,{children:"Snackbar"})," component."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

const { openSnackbar } = useSnackbar();

const App = () => (
  <SnackbarProvider>
    <Button onClick={()=> openSnackbar({message : "Hello", severity: "info"})}>Open Snackbar</Button>
  </SnackbarProvider>
);

export default App;
`})}),`
`,n.jsxs(e.p,{children:["By default, the snackbar is an Alert component. You can change it by passing a ",n.jsx(e.code,{children:"component"})," props."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

const { openSnackbar } = useSnackbar();

const CustomSnackbar = () => (
  <div>Custom Snackbar</div>
);

const App = () => (
  <SnackbarProvider>
    <Button onClick={()=> openSnackbar({ component: CustomSnackbar})}>Open Snackbar</Button>
  </SnackbarProvider>
);

export default App;
`})}),`
`,n.jsx(e.h3,{id:"available-state--function",children:"Available state & function"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"openSnackbar"})}),n.jsx("td",{children:"Function"}),n.jsx("td",{children:"Open the snackbar"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"closeSnackbar"})}),n.jsx("td",{children:"Function"}),n.jsx("td",{children:"Close the snackbar"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"isOpen"})}),n.jsx("td",{children:"boolean"}),n.jsx("td",{children:"State of current snackbar"})]})]})]})]})}function l(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(c,{...r})}):c(r)}export{l as default};
