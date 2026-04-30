import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-DD_Ni_-r.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Provider/SnackbarProvider`}),`
`,(0,i.jsx)(t.h1,{id:`snackbarprovider`,children:(0,i.jsx)(t.code,{children:`SnackbarProvider`})}),`
`,(0,i.jsx)(t.p,{children:`Provider for the snackbar component.`}),`
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
`,(0,i.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Name`}),(0,i.jsx)(`th`,{children:`Type`}),(0,i.jsx)(`th`,{children:`Required`}),(0,i.jsx)(`th`,{children:`Description`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`autoHideDuration`})}),(0,i.jsx)(`td`,{children:`number`}),(0,i.jsx)(`td`,{children:`false`}),(0,i.jsx)(`td`,{children:`The duration of the snack appears`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`anchorOrigin`})}),(0,i.jsx)(`td`,{children:`SnackbarOrigin`}),(0,i.jsx)(`td`,{children:`false`}),(0,i.jsx)(`td`,{children:`Position of the snackbar`})]})]})]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};