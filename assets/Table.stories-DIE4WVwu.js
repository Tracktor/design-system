import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{d as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as o}from"./jsx-runtime-prWBgBgC.js";import{t as s}from"./generateUtilityClass-DUL8zXGJ.js";import{t as c}from"./Box-DFvgjzeS.js";import{t as l}from"./generateUtilityClasses-DFWpRkIR.js";import{n as u,t as d}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as f}from"./memoTheme-BGsJ-lK3.js";import{t as p}from"./composeClasses-CbmTWm-W.js";import{t as m}from"./Stack-BIr57r_j.js";import{t as h}from"./capitalize-B_lFlclu.js";import{t as g}from"./Collapse-DPLi2b3B.js";import{t as _}from"./Paper-Apd769t-.js";import{t as v}from"./Typography-BNYwlYGw.js";import{t as y}from"./Button-C-NK_Lvb.js";var b=e(t()),x=b.createContext();function S(e){return s(`MuiTable`,e)}l(`MuiTable`,[`root`,`stickyHeader`]);var C=e(o()),w=e=>{let{classes:t,stickyHeader:n}=e;return p({root:[`root`,n&&`stickyHeader`]},S,t)},T=u(`table`,{name:`MuiTable`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})(f(({theme:e})=>({display:`table`,width:`100%`,borderCollapse:`collapse`,borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:`left`,captionSide:`bottom`},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:`separate`}}]}))),E=`table`,D=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTable`}),{className:i,component:a=E,padding:o=`normal`,size:s=`medium`,stickyHeader:c=!1,...l}=r,u={...r,component:a,padding:o,size:s,stickyHeader:c},f=w(u),p=b.useMemo(()=>({padding:o,size:s,stickyHeader:c}),[o,s,c]);return(0,C.jsx)(x.Provider,{value:p,children:(0,C.jsx)(T,{as:a,role:a===E?null:`table`,ref:t,className:n(f.root,i),ownerState:u,...l})})}),O=b.createContext();function k(e){return s(`MuiTableBody`,e)}l(`MuiTableBody`,[`root`]);var ee=e=>{let{classes:t}=e;return p({root:[`root`]},k,t)},te=u(`tbody`,{name:`MuiTableBody`,slot:`Root`})({display:`table-row-group`}),A={variant:`body`},j=`tbody`,M=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTableBody`}),{className:i,component:a=j,...o}=r,s={...r,component:a},c=ee(s);return(0,C.jsx)(O.Provider,{value:A,children:(0,C.jsx)(te,{className:n(c.root,i),as:a,ref:t,role:a===j?null:`rowgroup`,ownerState:s,...o})})});function ne(e){return s(`MuiTableCell`,e)}var re=l(`MuiTableCell`,[`root`,`head`,`body`,`footer`,`sizeSmall`,`sizeMedium`,`paddingCheckbox`,`paddingNone`,`alignLeft`,`alignCenter`,`alignRight`,`alignJustify`,`stickyHeader`]),ie=e=>{let{classes:t,variant:n,align:r,padding:i,size:a,stickyHeader:o}=e;return p({root:[`root`,n,o&&`stickyHeader`,r!==`inherit`&&`align${h(r)}`,i!==`normal`&&`padding${h(i)}`,`size${h(a)}`]},ne,t)},ae=u(`td`,{name:`MuiTableCell`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${h(n.size)}`],n.padding!==`normal`&&t[`padding${h(n.padding)}`],n.align!==`inherit`&&t[`align${h(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(f(({theme:e})=>({...e.typography.body2,display:`table-cell`,verticalAlign:`inherit`,borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode===`light`?e.lighten(e.alpha(e.palette.divider,1),.88):e.darken(e.alpha(e.palette.divider,1),.68)}`,textAlign:`left`,padding:16,variants:[{props:{variant:`head`},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:`body`},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:`footer`},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:`small`},style:{padding:`6px 16px`,[`&.${re.paddingCheckbox}`]:{width:24,padding:`0 12px 0 16px`,"& > *":{padding:0}}}},{props:{padding:`checkbox`},style:{width:48,padding:`0 0 0 4px`}},{props:{padding:`none`},style:{padding:0}},{props:{align:`left`},style:{textAlign:`left`}},{props:{align:`center`},style:{textAlign:`center`}},{props:{align:`right`},style:{textAlign:`right`,flexDirection:`row-reverse`}},{props:{align:`justify`},style:{textAlign:`justify`}},{props:({ownerState:e})=>e.stickyHeader,style:{position:`sticky`,top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),N=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTableCell`}),{align:i=`inherit`,className:a,component:o,padding:s,scope:c,size:l,sortDirection:u,variant:f,...p}=r,m=b.useContext(x),h=b.useContext(O),g=h&&h.variant===`head`,_;_=o||(g?`th`:`td`);let v=c;_===`td`?v=void 0:!v&&g&&(v=`col`);let y=f||h&&h.variant,S={...r,align:i,component:_,padding:s||(m&&m.padding?m.padding:`normal`),size:l||(m&&m.size?m.size:`medium`),sortDirection:u,stickyHeader:y===`head`&&m&&m.stickyHeader,variant:y},w=ie(S),T=null;return u&&(T=u===`asc`?`ascending`:`descending`),(0,C.jsx)(ae,{as:_,ref:t,className:n(w.root,a),"aria-sort":T,scope:v,ownerState:S,...p})});function oe(e){return s(`MuiTableContainer`,e)}l(`MuiTableContainer`,[`root`]);var se=e=>{let{classes:t}=e;return p({root:[`root`]},oe,t)},ce=u(`div`,{name:`MuiTableContainer`,slot:`Root`})({width:`100%`,overflowX:`auto`}),P=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTableContainer`}),{className:i,component:a=`div`,...o}=r,s={...r,component:a};return(0,C.jsx)(ce,{ref:t,as:a,className:n(se(s).root,i),ownerState:s,...o})});function le(e){return s(`MuiTableHead`,e)}l(`MuiTableHead`,[`root`]);var ue=e=>{let{classes:t}=e;return p({root:[`root`]},le,t)},de=u(`thead`,{name:`MuiTableHead`,slot:`Root`})({display:`table-header-group`}),F={variant:`head`},I=`thead`,L=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTableHead`}),{className:i,component:a=I,...o}=r,s={...r,component:a},c=ue(s);return(0,C.jsx)(O.Provider,{value:F,children:(0,C.jsx)(de,{as:a,className:n(c.root,i),ref:t,role:a===I?null:`rowgroup`,ownerState:s,...o})})});function R(e){return s(`MuiTableRow`,e)}var z=l(`MuiTableRow`,[`root`,`selected`,`hover`,`head`,`footer`]),B=e=>{let{classes:t,selected:n,hover:r,head:i,footer:a}=e;return p({root:[`root`,n&&`selected`,r&&`hover`,i&&`head`,a&&`footer`]},R,t)},V=u(`tr`,{name:`MuiTableRow`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})(f(({theme:e})=>({color:`inherit`,display:`table-row`,verticalAlign:`middle`,outline:0,[`&.${z.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${z.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)}}}))),H=`tr`,U=b.forwardRef(function(e,t){let r=d({props:e,name:`MuiTableRow`}),{className:i,component:a=H,hover:o=!1,selected:s=!1,...c}=r,l=b.useContext(O),u={...r,component:a,hover:o,selected:s,head:l&&l.variant===`head`,footer:l&&l.variant===`footer`};return(0,C.jsx)(V,{as:a,ref:t,className:n(B(u).root,i),role:a===H?null:`row`,ownerState:u,...c})}),W=e=>r(D,{...e});try{W.displayName=`Table`,W.__docgenInfo={description:``,displayName:`Table`,props:{component:{defaultValue:null,description:``,name:`component`,required:!1,type:{name:`ElementType<any, keyof IntrinsicElements>`}}}}}catch{}var G=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),K=[G(`Frozen yoghurt`,159,6,24,4,3.99),G(`Ice cream sandwich`,237,9,37,4.3,4.99),G(`Eclair`,262,16,24,6,3.79),G(`Cupcake`,305,3.7,67,4.3,2.5),G(`Gingerbread`,356,16,49,3.9,1.5)],fe=e=>{let{row:t}=e,[n,o]=(0,b.useState)(!1);return i(a,{children:[i(U,{sx:{"& > *":{borderBottom:`unset`}},children:[r(N,{children:r(y,{"aria-label":`expand row`,size:`small`,onClick:()=>o(!n),children:n?`-`:`+`})}),r(N,{component:`th`,scope:`row`,children:t.name}),r(N,{align:`right`,children:t.calories}),r(N,{align:`right`,children:t.fat}),r(N,{align:`right`,children:t.carbs}),r(N,{align:`right`,children:t.protein})]}),r(U,{children:r(N,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:r(g,{in:n,timeout:`auto`,unmountOnExit:!0,children:i(c,{sx:{margin:1},children:[r(v,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),i(W,{size:`small`,"aria-label":`purchases`,children:[r(L,{children:i(U,{children:[r(N,{children:`Date`}),r(N,{children:`Customer`}),r(N,{align:`right`,children:`Amount`}),r(N,{align:`right`,children:`Total price ($)`})]})}),r(M,{children:t.history.map(e=>i(U,{children:[r(N,{component:`th`,scope:`row`,children:e.date}),r(N,{children:e.customerId}),r(N,{align:`right`,children:e.amount}),r(N,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},q=e=>{let{stickyHeader:t}=e;return r(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(P,{sx:{maxHeight:t?250:`auto`},children:i(W,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[r(L,{children:i(U,{children:[r(N,{children:`Dessert (100g serving)`}),r(N,{align:`right`,children:`Calories`}),r(N,{align:`right`,children:`Fat\xA0(g)`}),r(N,{align:`right`,children:`Carbs\xA0(g)`}),r(N,{align:`right`,children:`Protein\xA0(g)`})]})}),r(M,{children:K.map(e=>i(U,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[r(N,{component:`th`,scope:`row`,children:e.name}),r(N,{align:`right`,children:e.calories}),r(N,{align:`right`,children:e.fat}),r(N,{align:`right`,children:e.carbs}),r(N,{align:`right`,children:e.protein})]},e.name))})]})})})},pe=e=>{let{stickyHeader:t}=e;return r(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(P,{component:_,sx:{maxHeight:t?250:`auto`},children:i(W,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[i(L,{children:[i(U,{children:[r(N,{align:`center`,colSpan:2,children:`Name`}),r(N,{align:`center`,colSpan:3,children:`Details`})]}),i(U,{children:[r(N,{children:`Dessert (100g serving)`}),r(N,{align:`right`,children:`Calories`}),r(N,{align:`right`,children:`Fat\xA0(g)`}),r(N,{align:`right`,children:`Carbs\xA0(g)`}),r(N,{align:`right`,children:`Protein\xA0(g)`})]})]}),r(M,{children:K.map(e=>i(U,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[r(N,{component:`th`,scope:`row`,children:e.name}),r(N,{align:`right`,children:e.calories}),r(N,{align:`right`,children:e.fat}),r(N,{align:`right`,children:e.carbs}),r(N,{align:`right`,children:e.protein})]},e.name))})]})})})},J=e=>r(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:r(P,{component:_,children:i(W,{"aria-label":`collapsible table`,...e,children:[r(L,{children:i(U,{children:[r(N,{}),r(N,{children:`Dessert (100g serving)`}),r(N,{align:`right`,children:`Calories`}),r(N,{align:`right`,children:`Fat\xA0(g)`}),r(N,{align:`right`,children:`Carbs\xA0(g)`}),r(N,{align:`right`,children:`Protein\xA0(g)`})]})}),r(M,{children:K.map(e=>r(fe,{row:e},e.name))})]})})}),Y=q.bind({});Y.args={};var X=q.bind({});X.args={size:`small`};var Z=q.bind({});Z.args={stickyHeader:!0};var Q=pe.bind({});Q.args={};var $=J.bind({});$.args={};var me={component:W,title:`Components/Data Display/Table`};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer component={Paper} sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Name
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" {...args}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <Row key={row.name} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  </Stack>`,...$.parameters?.docs?.source}}};var he=[`Basic`,`Dense`,`StickyHeader`,`ColumnGrouping`,`CollapsibleTable`];export{Y as Basic,$ as CollapsibleTable,Q as ColumnGrouping,X as Dense,Z as StickyHeader,he as __namedExportsOrder,me as default};