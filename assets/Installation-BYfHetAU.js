import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-eIJHG9y-.js";var i=e(t());function a(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Installation`}),`
`,(0,i.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-console`,children:`yarn add @tracktor/design-system
`})}),`
`,(0,i.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,i.jsx)(t.h3,{id:`provide-the-theme`,children:`Provide the theme`}),`
`,(0,i.jsxs)(t.p,{children:[`Put `,(0,i.jsx)(t.code,{children:`<ThemeProvider>`}),` around your application.
Custom theme can be provided as prop `,(0,i.jsx)(t.code,{children:`theme={YOUR_CUSTOM_THEME}`})]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { Button, ThemeProvider } from "@tracktor/design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
`})})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};