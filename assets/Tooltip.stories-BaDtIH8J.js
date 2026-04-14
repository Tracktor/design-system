import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as n}from"./Box-DFvgjzeS.js";import{n as r}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as i}from"./Stack-BIr57r_j.js";import{t as a}from"./Typography-BNYwlYGw.js";import{t as o}from"./Fade-BcEeyNlD.js";import{t as s}from"./Button-C-NK_Lvb.js";import{t as c}from"./Zoom-DHaUOAmY.js";import{n as l}from"./Tooltip-DyV1WTq9.js";import{t as u}from"./Tooltip-Cz3I3I-b.js";var d=r(({children:t,className:n,...r})=>e(u,{...r,classes:{popper:n},children:t}))({[`& .${l.tooltip}`]:{maxWidth:500}}),f=r(({children:t,className:n,...r})=>e(u,{...r,classes:{popper:n},children:t}))({[`& .${l.tooltip}`]:{maxWidth:`none`}}),p=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`,m=t=>e(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:e(u,{...t,title:`Hello Bro !`,children:e(n,{sx:{border:`1px dashed`,borderColor:`primary.main`,cursor:`default`,p:2},display:`flex`,alignItems:`center`,justifyContent:`center`,children:e(a,{children:`Please, hover me !`})})})}),h=n=>t(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[e(u,{...n,title:p,children:e(s,{sx:{m:1},children:`Default Width [300px]`})}),e(d,{title:p,children:e(s,{sx:{m:1},children:`Custom Width [500px]`})}),e(f,{title:p,children:e(s,{sx:{m:1},children:`No wrapping`})})]}),g=n=>t(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[e(u,{...n,title:`Add`,children:e(s,{children:`Grow`})}),e(u,{TransitionComponent:o,TransitionProps:{timeout:600},title:`Add`,children:e(s,{children:`Fade`})}),e(u,{TransitionComponent:c,title:`Add`,children:e(s,{children:`Zoom`})})]}),_=m.bind({});_.args={};var v=m.bind({});v.args={arrow:!0};var y=m.bind({});y.args={placement:`top`};var b=h.bind({});b.args={};var x=g.bind({});x.args={};var S=m.bind({});S.args={followCursor:!0};var C=m.bind({});C.args={enterDelay:500};var w=m.bind({});w.args={leaveDelay:500};var T={args:{arrow:!1},argTypes:{placement:{control:{type:`select`},options:[`top`,`right`,`bottom`,`left`]}},component:u,title:`Components/Data Display/Tooltip`};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...w.parameters?.docs?.source}}};var E=[`Basic`,`WithArrow`,`WithPlacement`,`VariableWidth`,`Transition`,`FollowCursor`,`WithEnterDelay`,`WithLeaveDelay`];export{_ as Basic,S as FollowCursor,x as Transition,b as VariableWidth,v as WithArrow,C as WithEnterDelay,w as WithLeaveDelay,y as WithPlacement,E as __namedExportsOrder,T as default};