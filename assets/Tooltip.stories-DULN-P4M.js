import{a as e,b as T,s as x}from"./iframe-DcYbRMsr.js";import{T as o}from"./Tooltip-BMLp0IkW.js";import{B as C}from"./Box-pwVYSent.js";import{T as B}from"./Typography-CwSFD9qe.js";import{S as y}from"./Stack-CRgH-umR.js";import{B as r}from"./Button-DC2Y9TmL.js";import{F as b}from"./Fade-Cr_yNcxZ.js";import{Z as S}from"./Zoom-Cnva0npo.js";import{t as f}from"./Tooltip-BgMOVWzk.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CUcn4g5r.js";import"./useControlled-CBPSLPST.js";import"./Popper-Cw95DFGt.js";import"./Portal-D0j2vmKk.js";import"./useSlotProps-DkggwjBI.js";const W=x(({children:t,className:g,...u})=>e(o,{...u,classes:{popper:g},children:t}))({[`& .${f.tooltip}`]:{maxWidth:500}}),w=x(({children:t,className:g,...u})=>e(o,{...u,classes:{popper:g},children:t}))({[`& .${f.tooltip}`]:{maxWidth:"none"}}),h=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`,n=t=>e(y,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:e(o,{...t,title:"Hello Bro !",children:e(C,{sx:{border:"1px dashed",borderColor:"primary.main",cursor:"default",p:2},display:"flex",alignItems:"center",justifyContent:"center",children:e(B,{children:"Please, hover me !"})})})}),j=t=>T(y,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(o,{...t,title:h,children:e(r,{sx:{m:1},children:"Default Width [300px]"})}),e(W,{title:h,children:e(r,{sx:{m:1},children:"Custom Width [500px]"})}),e(w,{title:h,children:e(r,{sx:{m:1},children:"No wrapping"})})]}),I=t=>T(y,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(o,{...t,title:"Add",children:e(r,{children:"Grow"})}),e(o,{TransitionComponent:b,TransitionProps:{timeout:600},title:"Add",children:e(r,{children:"Fade"})}),e(o,{TransitionComponent:S,title:"Add",children:e(r,{children:"Zoom"})})]}),a=n.bind({});a.args={};const i=n.bind({});i.args={arrow:!0};const s=n.bind({});s.args={placement:"top"};const l=j.bind({});l.args={};const c=I.bind({});c.args={};const p=n.bind({});p.args={followCursor:!0};const d=n.bind({});d.args={enterDelay:500};const m=n.bind({});m.args={leaveDelay:500};const L={args:{arrow:!1},argTypes:{placement:{control:{type:"select"},options:["top","right","bottom","left"]}},component:o,title:"Components/Data Display/Tooltip"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title={longText}>
      <Button sx={{
      m: 1
    }}>Default Width [300px]</Button>
    </Tooltip>
    <CustomWidthTooltip title={longText}>
      <Button sx={{
      m: 1
    }}>Custom Width [500px]</Button>
    </CustomWidthTooltip>
    <NoMaxWidthTooltip title={longText}>
      <Button sx={{
      m: 1
    }}>No wrapping</Button>
    </NoMaxWidthTooltip>
  </Stack>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Add">
      <Button>Grow</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Fade} TransitionProps={{
    timeout: 600
  }} title="Add">
      <Button>Fade</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Zoom} title="Add">
      <Button>Zoom</Button>
    </Tooltip>
  </Stack>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...m.parameters?.docs?.source}}};const $=["Basic","WithArrow","WithPlacement","VariableWidth","Transition","FollowCursor","WithEnterDelay","WithLeaveDelay"];export{a as Basic,p as FollowCursor,c as Transition,l as VariableWidth,i as WithArrow,d as WithEnterDelay,m as WithLeaveDelay,s as WithPlacement,$ as __namedExportsOrder,L as default};
