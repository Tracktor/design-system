import{r as C,a as n,b as l,z as T,P as u}from"./iframe-CH5KAYb1.js";import{B as o}from"./Box-BTvquV1-.js";import{F as k}from"./FormControlLabel-Br0KjE5J.js";import{S as f}from"./Switch-CKH0NfI6.js";import{F as g}from"./Fade-DEXu_ZbB.js";import{Z as w}from"./Zoom-GlTtVnKn.js";import{S as v}from"./Slide-qrZi5Ykl.js";import{C as y}from"./Collapse-D4wa8tj9.js";import"./preload-helper-PPVm8Dsz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-kTGGCujf.js";import"./Typography-DHwx2JYA.js";import"./SwitchBase-CrJzWECN.js";import"./useControlled-Bpsi3hbI.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-DkqINJUg.js";const x=n(u,{sx:{m:1},elevation:4,children:n(o,{component:"svg",sx:{height:100,width:100},children:n(o,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})}),S=e=>{switch(e){case"Fade":return g;case"Collapse":return y;case"Grow":return T;case"Slide":return v;case"Zoom":return w;default:return g}},t=(e,{name:p})=>{const d=S(p),[i,m]=C.useState(!1);return n(o,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:l(o,{sx:{height:300},children:[n(o,{textAlign:"center",children:n(k,{control:n(f,{checked:i,onChange:()=>{m(B=>!B)}}),label:"Show"})}),l(o,{sx:{"& > :not(style)":{display:"flex",height:120,justifyContent:"space-around",width:250}},children:[l("div",{children:[n(d,{in:i,...e,children:x}),n(d,{in:i,...e,children:x})]}),l("div",{children:[n(o,{sx:{width:"50%"},children:n(d,{orientation:"horizontal",in:i,...e,children:x})}),n(o,{sx:{width:"50%"},children:n(d,{orientation:"horizontal",in:i,...e,children:x})})]})]})]})})},r=t.bind({});r.args={};const s=t.bind({});s.args={};const a=t.bind({});a.args={};const c=t.bind({});c.args={};const h=t.bind({});h.args={};const D={component:t,title:"Components/Utils/Transition"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...h.parameters?.docs?.source}}};const H=["Fade","Collapse","Grow","Slide","Zoom"];export{s as Collapse,r as Fade,a as Grow,c as Slide,h as Zoom,H as __namedExportsOrder,D as default};
