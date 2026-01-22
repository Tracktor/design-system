import{j as e}from"./iframe-Dk7whoML.js";import{useMDXComponents as r}from"./index-ofWOC-Up.js";import{M as i}from"./blocks-BaGRDBY8.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useMediaQuery"}),`
`,e.jsx(n.h1,{id:"usemediaquery",children:e.jsx(n.code,{children:"useMediaQuery"})}),`
`,e.jsx(n.p,{children:"This is a CSS media query hook. It listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not"}),`
`,e.jsx(n.h3,{id:"basic-media-query",children:"Basic media query"}),`
`,e.jsxs(n.p,{children:[`You should provide a media query to the first argument of the hook.
The media query string can be any valid CSS media query, e.g. `,e.jsx(n.code,{children:"(prefers-color-scheme: dark)"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useMediaQuery } from "@tracktor/design-system";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches}\`}</span>;
}
`})}),`
`,e.jsx(n.h3,{id:"using-theme-breakpoint",children:"Using theme breakpoint"}),`
`,e.jsx(n.p,{children:"You can use theme breakpoint"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useMediaQuery, useTheme } from "@tracktor/design-system"

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{\`theme.breakpoints.up("sm") matches: \${matches}\`}</span>;
}
`})})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
