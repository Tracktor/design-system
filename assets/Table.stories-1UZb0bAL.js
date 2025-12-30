import{r as b,h as w,g as f,d as x,j as T,s as v,e as k,f as H,m as A,X as y,a,b as d,P as ee,F as ne}from"./iframe-X86txNIV.js";import{S as W}from"./Stack-DUrGvMZA.js";import{B as te}from"./Button-DPl-yVmi.js";import{C as re}from"./Collapse-F1Zvky1Y.js";import{B as oe}from"./Box-D5yNz9yp.js";import{T as ie}from"./Typography-CUKm-Ru-.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CDY-9Aaq.js";const ae=b.createContext();function se(e){return w("MuiTable",e)}f("MuiTable",["root","stickyHeader"]);const ce=e=>{const{classes:l,stickyHeader:n}=e;return H({root:["root",n&&"stickyHeader"]},se,l)},de=v("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:n}=e;return[l.root,n.stickyHeader&&l.stickyHeader]}})(A(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:l})=>l.stickyHeader,style:{borderCollapse:"separate"}}]}))),V="table",ge=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTable"}),{className:i,component:o=V,padding:c="normal",size:s="medium",stickyHeader:g=!1,...C}=r,h={...r,component:o,padding:c,size:s,stickyHeader:g},R=ce(h),_=b.useMemo(()=>({padding:c,size:s,stickyHeader:g}),[c,s,g]);return T.jsx(ae.Provider,{value:_,children:T.jsx(de,{as:o,role:o===V?null:"table",ref:n,className:k(R.root,i),ownerState:h,...C})})}),I=b.createContext();function be(e){return w("MuiTableBody",e)}f("MuiTableBody",["root"]);const pe=e=>{const{classes:l}=e;return H({root:["root"]},be,l)},he=v("tbody",{name:"MuiTableBody",slot:"Root"})({display:"table-row-group"}),Te={variant:"body"},K="tbody",U=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTableBody"}),{className:i,component:o=K,...c}=r,s={...r,component:o},g=pe(s);return T.jsx(I.Provider,{value:Te,children:T.jsx(he,{className:k(g.root,i),as:o,ref:n,role:o===K?null:"rowgroup",ownerState:s,...c})})});function Ce(e){return w("MuiTableCell",e)}const ue=f("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),me=e=>{const{classes:l,variant:n,align:r,padding:i,size:o,stickyHeader:c}=e,s={root:["root",n,c&&"stickyHeader",r!=="inherit"&&`align${y(r)}`,i!=="normal"&&`padding${y(i)}`,`size${y(o)}`]};return H(s,Ce,l)},ye=v("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:n}=e;return[l.root,l[n.variant],l[`size${y(n.size)}`],n.padding!=="normal"&&l[`padding${y(n.padding)}`],n.align!=="inherit"&&l[`align${y(n.align)}`],n.stickyHeader&&l.stickyHeader]}})(A(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?e.lighten(e.alpha(e.palette.divider,1),.88):e.darken(e.alpha(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${ue.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:l})=>l.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),t=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTableCell"}),{align:i="inherit",className:o,component:c,padding:s,scope:g,size:C,sortDirection:h,variant:R,..._}=r,u=b.useContext(ae),D=b.useContext(I),X=D&&D.variant==="head";let S;c?S=c:S=X?"th":"td";let N=g;S==="td"?N=void 0:!N&&X&&(N="col");const q=R||D&&D.variant,J={...r,align:i,component:S,padding:s||(u&&u.padding?u.padding:"normal"),size:C||(u&&u.size?u.size:"medium"),sortDirection:h,stickyHeader:q==="head"&&u&&u.stickyHeader,variant:q},le=me(J);let L=null;return h&&(L=h==="asc"?"ascending":"descending"),T.jsx(ye,{as:S,ref:n,className:k(le.root,o),"aria-sort":L,scope:N,ownerState:J,..._})});function we(e){return w("MuiTableContainer",e)}f("MuiTableContainer",["root"]);const fe=e=>{const{classes:l}=e;return H({root:["root"]},we,l)},xe=v("div",{name:"MuiTableContainer",slot:"Root"})({width:"100%",overflowX:"auto"}),E=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTableContainer"}),{className:i,component:o="div",...c}=r,s={...r,component:o},g=fe(s);return T.jsx(xe,{ref:n,as:o,className:k(g.root,i),ownerState:s,...c})});function ve(e){return w("MuiTableHead",e)}f("MuiTableHead",["root"]);const ke=e=>{const{classes:l}=e;return H({root:["root"]},ve,l)},He=v("thead",{name:"MuiTableHead",slot:"Root"})({display:"table-header-group"}),Re={variant:"head"},Q="thead",F=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTableHead"}),{className:i,component:o=Q,...c}=r,s={...r,component:o},g=ke(s);return T.jsx(I.Provider,{value:Re,children:T.jsx(He,{as:o,className:k(g.root,i),ref:n,role:o===Q?null:"rowgroup",ownerState:s,...c})})});function Se(e){return w("MuiTableRow",e)}const Y=f("MuiTableRow",["root","selected","hover","head","footer"]),Be=e=>{const{classes:l,selected:n,hover:r,head:i,footer:o}=e;return H({root:["root",n&&"selected",r&&"hover",i&&"head",o&&"footer"]},Se,l)},Me=v("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:n}=e;return[l.root,n.head&&l.head,n.footer&&l.footer]}})(A(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Y.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Y.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)}}}))),Z="tr",p=b.forwardRef(function(l,n){const r=x({props:l,name:"MuiTableRow"}),{className:i,component:o=Z,hover:c=!1,selected:s=!1,...g}=r,C=b.useContext(I),h={...r,component:o,hover:c,selected:s,head:C&&C.variant==="head",footer:C&&C.variant==="footer"},R=Be(h);return T.jsx(Me,{as:o,ref:n,className:k(R.root,i),role:o===Z?null:"row",ownerState:h,...g})}),m=e=>a(ge,{...e});try{m.displayName="Table",m.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const B=(e,l,n,r,i,o)=>({calories:l,carbs:r,fat:n,history:[{amount:3,customerId:"11091700",date:"2020-01-05"},{amount:1,customerId:"Anonymous",date:"2020-01-02"}],name:e,price:o,protein:i}),O=[B("Frozen yoghurt",159,6,24,4,3.99),B("Ice cream sandwich",237,9,37,4.3,4.99),B("Eclair",262,16,24,6,3.79),B("Cupcake",305,3.7,67,4.3,2.5),B("Gingerbread",356,16,49,3.9,1.5)],$e=e=>{const{row:l}=e,[n,r]=b.useState(!1);return d(ne,{children:[d(p,{sx:{"& > *":{borderBottom:"unset"}},children:[a(t,{children:a(te,{"aria-label":"expand row",size:"small",onClick:()=>r(!n),children:n?"-":"+"})}),a(t,{component:"th",scope:"row",children:l.name}),a(t,{align:"right",children:l.calories}),a(t,{align:"right",children:l.fat}),a(t,{align:"right",children:l.carbs}),a(t,{align:"right",children:l.protein})]}),a(p,{children:a(t,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:a(re,{in:n,timeout:"auto",unmountOnExit:!0,children:d(oe,{sx:{margin:1},children:[a(ie,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),d(m,{size:"small","aria-label":"purchases",children:[a(F,{children:d(p,{children:[a(t,{children:"Date"}),a(t,{children:"Customer"}),a(t,{align:"right",children:"Amount"}),a(t,{align:"right",children:"Total price ($)"})]})}),a(U,{children:l.history.map(i=>d(p,{children:[a(t,{component:"th",scope:"row",children:i.date}),a(t,{children:i.customerId}),a(t,{align:"right",children:i.amount}),a(t,{align:"right",children:Math.round(i.amount*l.price*100)/100})]},i.date))})]})]})})})})]})},G=e=>{const{stickyHeader:l}=e;return a(W,{spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:a(E,{sx:{maxHeight:l?250:"auto"},children:d(m,{sx:{minWidth:650},"aria-label":"simple table",...e,children:[a(F,{children:d(p,{children:[a(t,{children:"Dessert (100g serving)"}),a(t,{align:"right",children:"Calories"}),a(t,{align:"right",children:"Fat (g)"}),a(t,{align:"right",children:"Carbs (g)"}),a(t,{align:"right",children:"Protein (g)"})]})}),a(U,{children:O.map(n=>d(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[a(t,{component:"th",scope:"row",children:n.name}),a(t,{align:"right",children:n.calories}),a(t,{align:"right",children:n.fat}),a(t,{align:"right",children:n.carbs}),a(t,{align:"right",children:n.protein})]},n.name))})]})})})},je=e=>{const{stickyHeader:l}=e;return a(W,{spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:a(E,{component:ee,sx:{maxHeight:l?250:"auto"},children:d(m,{sx:{minWidth:650},"aria-label":"simple table",...e,children:[d(F,{children:[d(p,{children:[a(t,{align:"center",colSpan:2,children:"Name"}),a(t,{align:"center",colSpan:3,children:"Details"})]}),d(p,{children:[a(t,{children:"Dessert (100g serving)"}),a(t,{align:"right",children:"Calories"}),a(t,{align:"right",children:"Fat (g)"}),a(t,{align:"right",children:"Carbs (g)"}),a(t,{align:"right",children:"Protein (g)"})]})]}),a(U,{children:O.map(n=>d(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[a(t,{component:"th",scope:"row",children:n.name}),a(t,{align:"right",children:n.calories}),a(t,{align:"right",children:n.fat}),a(t,{align:"right",children:n.carbs}),a(t,{align:"right",children:n.protein})]},n.name))})]})})})},Pe=e=>a(W,{spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:a(E,{component:ee,children:d(m,{"aria-label":"collapsible table",...e,children:[a(F,{children:d(p,{children:[a(t,{}),a(t,{children:"Dessert (100g serving)"}),a(t,{align:"right",children:"Calories"}),a(t,{align:"right",children:"Fat (g)"}),a(t,{align:"right",children:"Carbs (g)"}),a(t,{align:"right",children:"Protein (g)"})]})}),a(U,{children:O.map(l=>a($e,{row:l},l.name))})]})})}),M=G.bind({});M.args={};const $=G.bind({});$.args={size:"small"};const j=G.bind({});j.args={stickyHeader:!0};const P=je.bind({});P.args={};const z=Pe.bind({});z.args={};const We={component:m,title:"Components/Data Display/Table"};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
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
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
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
  </Stack>`,...z.parameters?.docs?.source}}};const Ee=["Basic","Dense","StickyHeader","ColumnGrouping","CollapsibleTable"];export{M as Basic,z as CollapsibleTable,P as ColumnGrouping,$ as Dense,j as StickyHeader,Ee as __namedExportsOrder,We as default};
