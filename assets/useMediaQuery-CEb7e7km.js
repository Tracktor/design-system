import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-DD_Ni_-r.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Hooks/useMediaQuery`}),`
`,(0,i.jsx)(t.h1,{id:`usemediaquery`,children:(0,i.jsx)(t.code,{children:`useMediaQuery`})}),`
`,(0,i.jsx)(t.p,{children:`This is a CSS media query hook. It listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not`}),`
`,(0,i.jsx)(t.h3,{id:`basic-media-query`,children:`Basic media query`}),`
`,(0,i.jsxs)(t.p,{children:[`You should provide a media query to the first argument of the hook.
The media query string can be any valid CSS media query, e.g. `,(0,i.jsx)(t.code,{children:`(prefers-color-scheme: dark)`})]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { useMediaQuery } from "@tracktor/design-system";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches}\`}</span>;
}
`})}),`
`,(0,i.jsx)(t.h3,{id:`using-theme-breakpoint`,children:`Using theme breakpoint`}),`
`,(0,i.jsx)(t.p,{children:`You can use theme breakpoint`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { useMediaQuery, useTheme } from "@tracktor/design-system"

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{\`theme.breakpoints.up("sm") matches: \${matches}\`}</span>;
}
`})})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};