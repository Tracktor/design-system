import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-DD_Ni_-r.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Hooks/useSnackbar`}),`
`,(0,i.jsx)(t.h1,{id:`usesnackbar`,children:(0,i.jsx)(t.code,{children:`useSnackbar`})}),`
`,(0,i.jsxs)(t.p,{children:[`Utility hook for menu `,(0,i.jsx)(t.code,{children:`Snackbar`}),` component.`]}),`
`,(0,i.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

const { openSnackbar } = useSnackbar();

const App = () => (
  <SnackbarProvider>
    <Button onClick={()=> openSnackbar({message : "Hello", severity: "info"})}>Open Snackbar</Button>
  </SnackbarProvider>
);

export default App;
`})}),`
`,(0,i.jsxs)(t.p,{children:[`By default, the snackbar is an Alert component. You can change it by passing a `,(0,i.jsx)(t.code,{children:`component`}),` props.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

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
`,(0,i.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Name`}),(0,i.jsx)(`th`,{children:`Type`}),(0,i.jsx)(`th`,{children:`Description`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`openSnackbar`})}),(0,i.jsx)(`td`,{children:`Function`}),(0,i.jsx)(`td`,{children:`Open the snackbar`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`closeSnackbar`})}),(0,i.jsx)(`td`,{children:`Function`}),(0,i.jsx)(`td`,{children:`Close the snackbar`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`isOpen`})}),(0,i.jsx)(`td`,{children:`boolean`}),(0,i.jsx)(`td`,{children:`State of current snackbar`})]})]})]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};