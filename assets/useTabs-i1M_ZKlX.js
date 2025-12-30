import{j as e}from"./iframe-WiXY94Bq.js";import{useMDXComponents as s}from"./index-Cq0GkMwQ.js";import{M as l}from"./blocks-BBCFRxCn.js";import"./preload-helper-PPVm8Dsz.js";function t(a){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Hooks/useTabs"}),`
`,e.jsx(n.h1,{id:"usetabs",children:e.jsx(n.code,{children:"useTabs"})}),`
`,e.jsx(n.p,{children:"Utility hook for handle tabs"}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Box, Tab, Tabs, TabPanel, useTabs } from "@tracktor/design-system";

const { value, handleChange } = useTabs();

const App = () => (
  <Box sx={{ width: '100%' }}>
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One"  />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
  </Box>
);

export default App;
`})}),`
`,e.jsx(n.h3,{id:"available-state--function",children:"Available state & function"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Value of the current active tab"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"handleChange"})}),e.jsx("td",{children:"Function"}),e.jsx("td",{children:"Handle tab change"})]})]})]})]})}function o(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{o as default};
