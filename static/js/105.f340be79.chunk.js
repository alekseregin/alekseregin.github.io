(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[105],{1161:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(17),r=n(147),i=n(1146),c=n(1136),o=n(1132),s=n(1138),d=n(1123),l=n(6),u=n(1),m=n(8),b=n(109),f=n(64),j=n.n(f),x=n(421),h=n(183),p=n(82),O=n(1164),v=n(45),g=n(14),y=n(1104),w=n(0),C=["children","name"];function N(e){var t=e.children,n=e.document,a=Object(v.a)();u.useEffect((function(){n.body.dir=a.direction}),[n,a.direction]);var r=u.useMemo((function(){return Object(h.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===a.direction?[x.a]:[]})}),[n,a.direction]),i=u.useCallback((function(){return n.defaultView}),[n]);return Object(w.jsx)(O.a,{target:n.head,stylisPlugins:"rtl"===a.direction?[x.a]:[],children:Object(w.jsxs)(p.a,{value:r,children:[Object(w.jsx)(y.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),u.cloneElement(t,{window:i})]})})}var k=Object(g.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function W(e){var t,n=e.children,r=e.name,i=Object(b.a)(e,C),c="".concat(r," demo"),o=u.useRef(null),s=u.useReducer((function(){return!0}),!1),d=Object(a.a)(s,2),l=d[0],f=d[1];u.useEffect((function(){var e=o.current.contentDocument;null==e||"complete"!==e.readyState||l||f()}),[l]);var x=null===(t=o.current)||void 0===t?void 0:t.contentDocument;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(k,Object(m.a)({onLoad:f,ref:o,title:c},i)),!1!==l?j.a.createPortal(Object(w.jsx)(N,{document:x,children:n}),x.body):null]})}var S=u.memo(W);function R(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],b=n[1],f=e.component,j=e.raw,x=e.iframe,h=e.className;return Object(w.jsxs)(c.a,{className:Object(l.default)(h,"shadow"),children:[Object(w.jsx)(i.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(d.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){b(t)},children:[f&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(o.a,{children:"remove_red_eye"})}),j&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(o.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(w.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:f&&(x?Object(w.jsx)(S,{children:Object(w.jsx)(f,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(f,{})}))}),Object(w.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:j&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(r.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:j.default})})})]})]})}R.defaultProps={currentTabIndex:0};var B=R},1165:function(e,t,n){"use strict";var a=n(2),r=n(13),i=n(1),c=(n(12),n(6)),o=n(341),s=n(1098),d=n(1102),l=n(228),u=n(0),m=["className","component"];var b=n(595),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(o.a)("div")(s.a),b=i.forwardRef((function(e,i){var o=Object(l.a)(t),s=Object(d.a)(e),b=s.className,f=s.component,j=void 0===f?"div":f,x=Object(r.a)(s,m);return Object(u.jsx)(n,Object(a.a)({as:j,ref:i,className:Object(c.default)(b,"MuiBox-root"),theme:o},x))}));return b}({defaultTheme:Object(b.a)()});t.a=f},1364:function(e,t,n){"use strict";var a,r=n(2),i=n(1),c=(n(12),n(24)),o=n(1104),s=n(0),d={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},l=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})},u=function(e){var t,n,a={html:d,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},l(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})},i=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return i&&(a=[a,i]),a};t.a=function(e){var t=Object(c.a)({props:e,name:"MuiCssBaseline"}).children;return Object(s.jsxs)(i.Fragment,{children:[a||(a=Object(s.jsx)(o.a,{styles:u})),t]})}},1986:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(1),r=n(1364),i=n(1165),c=n(2876),o=n(0);function s(){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(r.a,{}),Object(o.jsx)(c.a,{maxWidth:"sm",children:Object(o.jsx)(i.a,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},1987:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function SimpleContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container maxWidth=\"sm\">\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},1988:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(1),r=n(1364),i=n(1165),c=n(2876),o=n(0);function s(){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(r.a,{}),Object(o.jsx)(c.a,{fixed:!0,children:Object(o.jsx)(i.a,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}},1989:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Box from '@mui/material/Box';\nimport Container from '@mui/material/Container';\n\nexport default function FixedContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container fixed>\n        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},2876:function(e,t,n){"use strict";var a=n(4),r=n(13),i=n(2),c=n(1),o=(n(12),n(6)),s=n(127),d=n(24),l=n(14),u=n(96),m=n(89);function b(e){return Object(u.a)("MuiContainer",e)}Object(m.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=n(18),j=n(0),x=["className","component","disableGutters","fixed","maxWidth"],h=Object(l.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat(Object(f.a)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&Object(a.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},"xs"===n.maxWidth&&Object(a.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&Object(a.a)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=c.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiContainer"}),a=n.className,c=n.component,l=void 0===c?"div":c,u=n.disableGutters,m=void 0!==u&&u,p=n.fixed,O=void 0!==p&&p,v=n.maxWidth,g=void 0===v?"lg":v,y=Object(r.a)(n,x),w=Object(i.a)({},n,{component:l,disableGutters:m,fixed:O,maxWidth:g}),C=function(e){var t=e.classes,n=e.fixed,a=e.disableGutters,r=e.maxWidth,i={root:["root",r&&"maxWidth".concat(Object(f.a)(String(r))),n&&"fixed",a&&"disableGutters"]};return Object(s.a)(i,b,t)}(w);return Object(j.jsx)(h,Object(i.a)({as:l,ownerState:w,className:Object(o.default)(C.root,a),ref:t},y))}));t.a=p},2962:function(e,t,n){"use strict";n.r(t);var a=n(1161),r=n(147),i=n(1135),c=n(1132),o=n(339),s=n(0);t.default=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(i.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/container",target:"_blank",role:"button",children:[Object(s.jsx)(c.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(o.a,{className:"text-40 my-16 font-700",component:"h1",children:"Container"}),Object(s.jsx)(o.a,{className:"description",children:"The container centers your content horizontally. It's the most basic layout element."}),Object(s.jsx)(o.a,{className:"mb-40",component:"div",children:"While containers can be nested, most layouts do not require a nested container."}),Object(s.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fluid"}),Object(s.jsxs)(o.a,{className:"mb-40",component:"div",children:["A fluid container width is bounded by the ",Object(s.jsx)("code",{children:"maxWidth"})," prop value."]}),Object(s.jsx)(o.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!0,component:n(1986).default,raw:n(1987)})}),Object(s.jsx)(r.a,{component:"pre",className:"language-jsx",children:' \n<Container maxWidth="sm">\n'}),Object(s.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fixed"}),Object(s.jsxs)(o.a,{className:"mb-40",component:"div",children:["If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",Object(s.jsx)("code",{children:"fixed"})," prop. The max-width matches the min-width of the current breakpoint."]}),Object(s.jsx)(o.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!0,component:n(1988).default,raw:n(1989)})}),Object(s.jsx)(r.a,{component:"pre",className:"language-jsx",children:" \n<Container fixed>\n"})]})}}}]);