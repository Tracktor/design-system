import{j as e}from"./iframe-Bx5tGTIY.js";import{useMDXComponents as r}from"./index-CCTBRnlo.js";import{M as s}from"./blocks-BMP5DVs9.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Installation"}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-console",children:`yarn add @tracktor/design-system
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"provide-the-theme",children:"Provide the theme"}),`
`,e.jsxs(n.p,{children:["Put ",e.jsx(n.code,{children:"<ThemeProvider>"}),` around your application.
Custom theme can be provided as prop `,e.jsx(n.code,{children:"theme={YOUR_CUSTOM_THEME}"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Button, ThemeProvider } from "@tracktor/design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
