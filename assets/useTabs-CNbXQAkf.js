import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-prWBgBgC.js";import{n}from"./lib-BYeNhzQt.js";import{o as r}from"./blocks-DD_Ni_-r.js";var i=e(t());function a(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{title:`Hooks/useTabs`}),`
`,(0,i.jsx)(t.h1,{id:`usetabs`,children:(0,i.jsx)(t.code,{children:`useTabs`})}),`
`,(0,i.jsx)(t.p,{children:`Utility hook for handle tabs`}),`
`,(0,i.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-typescript`,children:`import { Box, Tab, Tabs, TabPanel, useTabs } from "@tracktor/design-system";

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
`,(0,i.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Name`}),(0,i.jsx)(`th`,{children:`Type`}),(0,i.jsx)(`th`,{children:`Description`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`value`})}),(0,i.jsx)(`td`,{children:`number`}),(0,i.jsx)(`td`,{children:`Value of the current active tab`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{children:(0,i.jsx)(`code`,{children:`handleChange`})}),(0,i.jsx)(`td`,{children:`Function`}),(0,i.jsx)(`td`,{children:`Handle tab change`})]})]})]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};