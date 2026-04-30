import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-DD_Ni_-r.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Styles`}),`
`,(0,i.jsx)(t.h1,{id:`styles`,children:`Styles`}),`
`,(0,i.jsxs)(t.p,{children:[`Design System components use the system prop `,(0,i.jsx)(t.code,{children:`sx`}),` that allows defining system overrides as well as additional CSS styles or
use`,(0,i.jsx)(t.code,{children:`Emotion-based`}),` styling solution provided by MUI to style your components.`]}),`
`,(0,i.jsx)(t.h3,{id:`system-prop`,children:`System Prop`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { Box } from "@tracktor/design-system";

const styles = {
  box : {
    "&:hover": {
      backgroundColor: "blue",
    },
    backgroundColor: "red",
    height: 150,
    width: 150,
  }
}

<Box sx={styles.box} />
`})}),`
`,(0,i.jsx)(t.h3,{id:`global-style`,children:`Global style`}),`
`,(0,i.jsxs)(t.p,{children:[`For injecting global style you can use `,(0,i.jsx)(t.code,{children:`GlobalStyles`}),` and `,(0,i.jsx)(t.code,{children:`css`}),` from Material UI. It is an alias of `,(0,i.jsx)(t.code,{children:`Global`}),` from emotion css.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={{
    ".some-class": {
      color: "red",
      textAlign: "center",
    },
  }}
/>
`})}),`
`,(0,i.jsxs)(t.p,{children:[`Or `,(0,i.jsx)(t.code,{children:`css`}),` with `,(0,i.jsx)(t.code,{children:`GlobalStyles`})]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={css\`
    .some-class {
      color: red;
    }
  \`}
/>
`})})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};