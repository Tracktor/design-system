import{j as n}from"./iframe-BM82Om_i.js";import{useMDXComponents as t}from"./index-CW0Gg8zL.js";import{M as c}from"./blocks-LBALGE8E.js";import"./preload-helper-D9Z9MdNV.js";function s(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Provider/SnackbarProvider"}),`
`,n.jsx(e.h1,{id:"snackbarprovider",children:n.jsx(e.code,{children:"SnackbarProvider"})}),`
`,n.jsx(e.p,{children:"Provider for the snackbar component."}),`
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
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Required"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"autoHideDuration"})}),n.jsx("td",{children:"number"}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"The duration of the snack appears"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"anchorOrigin"})}),n.jsx("td",{children:"SnackbarOrigin"}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"Position of the snackbar"})]})]})]})]})}function h(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{h as default};
