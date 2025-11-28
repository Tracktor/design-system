import{j as s}from"./iframe-DCnTOWhR.js";import{useMDXComponents as t}from"./index-BYKcd92m.js";import{M as l}from"./blocks-COLB7gaE.js";import"./preload-helper-D9Z9MdNV.js";function o(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"Styles"}),`
`,s.jsx(e.h1,{id:"styles",children:"Styles"}),`
`,s.jsxs(e.p,{children:["Design System components use the system prop ",s.jsx(e.code,{children:"sx"}),` that allows defining system overrides as well as additional CSS styles or
use`,s.jsx(e.code,{children:"Emotion-based"})," styling solution provided by MUI to style your components."]}),`
`,s.jsx(e.h3,{id:"system-prop",children:"System Prop"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { Box } from "@tracktor/design-system";

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
`,s.jsx(e.h3,{id:"global-style",children:"Global style"}),`
`,s.jsxs(e.p,{children:["For injecting global style you can use ",s.jsx(e.code,{children:"GlobalStyles"})," and ",s.jsx(e.code,{children:"css"})," from Material UI. It is an alias of ",s.jsx(e.code,{children:"Global"})," from emotion css."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={{
    ".some-class": {
      color: "red",
      textAlign: "center",
    },
  }}
/>
`})}),`
`,s.jsxs(e.p,{children:["Or ",s.jsx(e.code,{children:"css"})," with ",s.jsx(e.code,{children:"GlobalStyles"})]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={css\`
    .some-class {
      color: red;
    }
  \`}
/>
`})})]})}function a(n={}){const{wrapper:e}={...t(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(o,{...n})}):o(n)}export{a as default};
