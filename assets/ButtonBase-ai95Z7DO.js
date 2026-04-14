import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-BFE3z-Ps.js";import{M as n,P as r,d as i}from"./emotion-react-jsx-runtime.browser.esm-oEpu3ON2.js";import{t as a}from"./jsx-runtime-prWBgBgC.js";import{t as o}from"./generateUtilityClass-DUL8zXGJ.js";import{t as s}from"./generateUtilityClasses-DFWpRkIR.js";import{n as c,t as l}from"./DefaultPropsProvider-DDS0Jp9_.js";import{t as u}from"./composeClasses-CbmTWm-W.js";import{t as d}from"./useEventCallback-iIgKXB6U.js";import{t as f}from"./useForkRef-mEA9gpDu.js";import{a as p,i as m,n as h,o as g,r as _}from"./useTimeout-BaIMor-N.js";import{t as v}from"./isFocusVisible-BZcWtvi8.js";var y=d;function b(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var x=e(t());function S(e,t){var n=function(e){return t&&(0,x.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&x.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function C(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function w(e,t,n){return n[t]==null?e.props[t]:n[t]}function T(e,t){return S(e.children,function(n){return(0,x.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:w(n,`appear`,e),enter:w(n,`enter`,e),exit:w(n,`exit`,e)})})}function E(e,t,n){var r=S(e.children),i=C(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,x.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,x.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,x.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:w(o,`exit`,e),enter:w(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,x.cloneElement)(o,{in:!1}):c&&s&&(0,x.isValidElement)(l)&&(i[a]=(0,x.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:w(o,`exit`,e),enter:w(o,`enter`,e)}))}}),i}var D=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},O={component:`div`,childFactory:function(e){return e}},k=function(e){p(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(b(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?T(e,r):E(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=S(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=r({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=g(e,[`component`,`childFactory`]),i=this.state.contextValue,a=D(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?x.createElement(m.Provider,{value:i},a):x.createElement(m.Provider,{value:i},x.createElement(t,r,a))},t}(x.Component);k.propTypes={},k.defaultProps=O;var A=class e{static create(){return new e}static use(){let t=_(e.create).current,[n,r]=x.useState(!1);return t.shouldMount=n,t.setShouldMount=r,x.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=j(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function ee(){return A.use()}function j(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var M=e(a());function N(e){let{className:t,classes:n,pulsate:r=!1,rippleX:a,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:u}=e,[d,f]=x.useState(!1),p=i(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:s,height:s,top:-(s/2)+o,left:-(s/2)+a},h=i(n.child,d&&n.childLeaving,r&&n.childPulsate);return!c&&!d&&f(!0),x.useEffect(()=>{if(!c&&l!=null){let e=setTimeout(l,u);return()=>{clearTimeout(e)}}},[l,c,u]),(0,M.jsx)(`span`,{className:p,style:m,children:(0,M.jsx)(`span`,{className:h})})}var P=s(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),F=550,I=n`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,L=n`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,R=n`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,z=c(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),B=c(N,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${P.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${I};
    animation-duration: ${F}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${P.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${P.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${P.childLeaving} {
    opacity: 0;
    animation-name: ${L};
    animation-duration: ${F}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${P.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${R};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,V=x.forwardRef(function(e,t){let{center:n=!1,classes:r={},className:a,...o}=l({props:e,name:`MuiTouchRipple`}),[s,c]=x.useState([]),u=x.useRef(0),d=x.useRef(null);x.useEffect(()=>{d.current&&=(d.current(),null)},[s]);let f=x.useRef(!1),p=h(),m=x.useRef(null),g=x.useRef(null),_=x.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:a,rippleSize:o,cb:s}=e;c(e=>[...e,(0,M.jsx)(B,{classes:{ripple:i(r.ripple,P.ripple),rippleVisible:i(r.rippleVisible,P.rippleVisible),ripplePulsate:i(r.ripplePulsate,P.ripplePulsate),child:i(r.child,P.child),childLeaving:i(r.childLeaving,P.childLeaving),childPulsate:i(r.childPulsate,P.childPulsate)},timeout:F,pulsate:t,rippleX:n,rippleY:a,rippleSize:o},u.current)]),u.current+=1,d.current=s},[r]),v=x.useCallback((e={},t={},r=()=>{})=>{let{pulsate:i=!1,center:a=n||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&f.current){f.current=!1;return}e?.type===`touchstart`&&(f.current=!0);let s=o?null:g.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,d;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)d=Math.sqrt((2*c.width**2+c.height**2)/3),d%2==0&&(d+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;d=Math.sqrt(e**2+t**2)}e?.touches?m.current===null&&(m.current=()=>{_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},p.start(80,()=>{m.current&&=(m.current(),null)})):_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},[n,_,p]),y=x.useCallback(()=>{v({},{pulsate:!0})},[v]),b=x.useCallback((e,t)=>{if(p.clear(),e?.type===`touchend`&&m.current){m.current(),m.current=null,p.start(0,()=>{b(e,t)});return}m.current=null,c(e=>e.length>0?e.slice(1):e),d.current=t},[p]);return x.useImperativeHandle(t,()=>({pulsate:y,start:v,stop:b}),[y,v,b]),(0,M.jsx)(z,{className:i(P.root,r.root,a),ref:g,...o,children:(0,M.jsx)(k,{component:null,exit:!0,children:s})})});function H(e){return o(`MuiButtonBase`,e)}var U=s(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),W=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=u({root:[`root`,t&&`disabled`,n&&`focusVisible`]},H,i);return n&&r&&(a.root+=` ${r}`),a},G=c(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${U.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),K=x.forwardRef(function(e,t){let n=l({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:a=!1,children:o,className:s,component:c=`button`,disabled:u=!1,disableRipple:d=!1,disableTouchRipple:p=!1,focusRipple:m=!1,focusVisibleClassName:h,LinkComponent:g=`a`,onBlur:_,onClick:b,onContextMenu:S,onDragLeave:C,onFocus:w,onFocusVisible:T,onKeyDown:E,onKeyUp:D,onMouseDown:O,onMouseLeave:k,onMouseUp:A,onTouchEnd:j,onTouchMove:N,onTouchStart:P,tabIndex:F=0,TouchRippleProps:I,touchRippleRef:L,type:R,...z}=n,B=x.useRef(null),H=ee(),U=f(H.ref,L),[K,J]=x.useState(!1);u&&K&&J(!1),x.useImperativeHandle(r,()=>({focusVisible:()=>{J(!0),B.current.focus()}}),[]);let Y=H.shouldMount&&!d&&!u;x.useEffect(()=>{K&&m&&!d&&H.pulsate()},[d,m,K,H]);let te=q(H,`start`,O,p),ne=q(H,`stop`,S,p),re=q(H,`stop`,C,p),ie=q(H,`stop`,A,p),ae=q(H,`stop`,e=>{K&&e.preventDefault(),k&&k(e)},p),oe=q(H,`start`,P,p),se=q(H,`stop`,j,p),ce=q(H,`stop`,N,p),le=q(H,`stop`,e=>{v(e.target)||J(!1),_&&_(e)},!1),ue=y(e=>{B.current||=e.currentTarget,v(e.target)&&(J(!0),T&&T(e)),w&&w(e)}),X=()=>{let e=B.current;return c&&c!==`button`&&!(e.tagName===`A`&&e.href)},de=y(e=>{m&&!e.repeat&&K&&e.key===` `&&H.stop(e,()=>{H.start(e)}),e.target===e.currentTarget&&X()&&e.key===` `&&e.preventDefault(),E&&E(e),e.target===e.currentTarget&&X()&&e.key===`Enter`&&!u&&(e.preventDefault(),b&&b(e))}),fe=y(e=>{m&&e.key===` `&&K&&!e.defaultPrevented&&H.stop(e,()=>{H.pulsate(e)}),D&&D(e),b&&e.target===e.currentTarget&&X()&&e.key===` `&&!e.defaultPrevented&&b(e)}),Z=c;Z===`button`&&(z.href||z.to)&&(Z=g);let Q={};if(Z===`button`){let e=!!z.formAction;Q.type=R===void 0&&!e?`button`:R,Q.disabled=u}else !z.href&&!z.to&&(Q.role=`button`),u&&(Q[`aria-disabled`]=u);let pe=f(t,B),$={...n,centerRipple:a,component:c,disabled:u,disableRipple:d,disableTouchRipple:p,focusRipple:m,tabIndex:F,focusVisible:K},me=W($);return(0,M.jsxs)(G,{as:Z,className:i(me.root,s),ownerState:$,onBlur:le,onClick:b,onContextMenu:ne,onFocus:ue,onKeyDown:de,onKeyUp:fe,onMouseDown:te,onMouseLeave:ae,onMouseUp:ie,onDragLeave:re,onTouchEnd:se,onTouchMove:ce,onTouchStart:oe,ref:pe,tabIndex:u?-1:F,type:R,...Q,...z,children:[o,Y?(0,M.jsx)(V,{ref:U,center:a,...I}):null]})});function q(e,t,n,r=!1){return y(i=>(n&&n(i),r||e[t](i),!0))}export{y as n,K as t};