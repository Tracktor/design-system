import{j as n}from"./iframe-CPdEcnQE.js";import{useMDXComponents as c}from"./index-JE0OcGAN.js";import{M as i}from"./blocks-mWktzUId.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useMenu"}),`
`,n.jsx(e.h1,{id:"usemenu",children:n.jsx(e.code,{children:"useMenu"})}),`
`,n.jsx(e.p,{children:"Utility hook for handle menu"}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Button, Menu, MenuItem, useMenu } from "@tracktor/design-system";

const { isMenuOpen, anchorMenu, closeMenu, openMenu } = useMenu();

const App = () => (
  <>
    <Button onClick={openMenu}>Open menu</Button>
    <Menu
      open={isMenuOpen}
      onClose={closeMenu}
      anchorEl={anchorMenu}
    >
      <MenuItem>...</MenuItem>
    </Menu>
  </>
);

export default App;
`})}),`
`,n.jsx(e.h3,{id:"available-state--function",children:"Available state & function"}),`
`,n.jsx(e.h3,{id:"available-state--function-1",children:"Available state & function"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"closeMenu"})}),n.jsx("td",{children:"Function"}),n.jsx("td",{children:"Handles closing the menu"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"openMenu"})}),n.jsx("td",{children:"Function"}),n.jsx("td",{children:"Handles opening the menu"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"anchorMenu"})}),n.jsx("td",{children:"HTMLElement"}),n.jsx("td",{children:"Anchor element for the menu"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"isMenuOpen"})}),n.jsx("td",{children:"boolean"}),n.jsx("td",{children:"Indicates if the menu is open"})]})]})]})]})}function h(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{h as default};
