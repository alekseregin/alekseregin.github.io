(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[64],{1059:function(e,n,a){"use strict";n.a=function(e,n,a,t,o){return null}},1159:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=a(419)},1161:function(e,n,a){"use strict";a.d(n,"a",(function(){return M}));var t=a(17),o=a(147),r=a(1146),i=a(1136),c=a(1132),s=a(1138),d=a(1123),l=a(6),u=a(1),p=a(8),m=a(109),b=a(64),h=a.n(b),j=a(421),x=a(183),f=a(82),g=a(1164),y=a(45),O=a(14),v=a(1104),A=a(0),S=["children","name"];function w(e){var n=e.children,a=e.document,t=Object(y.a)();u.useEffect((function(){a.body.dir=t.direction}),[a,t.direction]);var o=u.useMemo((function(){return Object(x.a)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===t.direction?[j.a]:[]})}),[a,t.direction]),r=u.useCallback((function(){return a.defaultView}),[a]);return Object(A.jsx)(g.a,{target:a.head,stylisPlugins:"rtl"===t.direction?[j.a]:[],children:Object(A.jsxs)(f.a,{value:o,children:[Object(A.jsx)(v.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),u.cloneElement(n,{window:r})]})})}var T=Object(O.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function I(e){var n,a=e.children,o=e.name,r=Object(m.a)(e,S),i="".concat(o," demo"),c=u.useRef(null),s=u.useReducer((function(){return!0}),!1),d=Object(t.a)(s,2),l=d[0],b=d[1];u.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||l||b()}),[l]);var j=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(T,Object(p.a)({onLoad:b,ref:c,title:i},r)),!1!==l?h.a.createPortal(Object(A.jsx)(w,{document:j,children:a}),j.body):null]})}var C=u.memo(I);function N(e){var n=Object(u.useState)(e.currentTabIndex),a=Object(t.a)(n,2),p=a[0],m=a[1],b=e.component,h=e.raw,j=e.iframe,x=e.className;return Object(A.jsxs)(i.a,{className:Object(l.default)(x,"shadow"),children:[Object(A.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(A.jsxs)(d.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){m(n)},children:[b&&Object(A.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(A.jsx)(c.a,{children:"remove_red_eye"})}),h&&Object(A.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(A.jsx)(c.a,{children:"code"})})]})}),Object(A.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(A.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:b&&(j?Object(A.jsx)(C,{children:Object(A.jsx)(b,{})}):Object(A.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(A.jsx)(b,{})}))}),Object(A.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:h&&Object(A.jsx)("div",{className:"flex flex-1",children:Object(A.jsx)(o.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}N.defaultProps={currentTabIndex:0};var M=N},1162:function(e,n,a){"use strict";a(2);n.a=function(e,n){return function(){return null}}},1191:function(e,n,a){"use strict";var t=a(607);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a(1159)),r=a(0),i=(0,o.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.default=i},1252:function(e,n,a){"use strict";var t=a(1),o=t.createContext({});n.a=o},1533:function(e,n,a){"use strict";var t=a(436),o=a(17),r=a(4),i=a(13),c=a(2),s=a(1),d=(a(267),a(12),a(6)),l=a(127),u=a(14),p=a(24),m=a(1056),b=a(606),h=a(1252),j=a(165),x=a(96),f=a(89);function g(e){return Object(x.a)("MuiAccordion",e)}var y=Object(f.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),O=a(0),v=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],A=Object(u.a)(b.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[Object(r.a)({},"& .".concat(y.region),n.region),n.root,!a.square&&n.rounded,!a.disableGutters&&n.gutters]}})((function(e){var n,a=e.theme,t={duration:a.transitions.duration.shortest};return n={position:"relative",transition:a.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}}},Object(r.a)(n,"&.".concat(y.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(r.a)(n,"&.".concat(y.disabled),{backgroundColor:a.palette.action.disabledBackground}),n}),(function(e){var n=e.theme,a=e.ownerState;return Object(c.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:n.shape.borderRadius,borderTopRightRadius:n.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:n.shape.borderRadius,borderBottomRightRadius:n.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(r.a)({},"&.".concat(y.expanded),{margin:"16px 0"}))})),S=s.forwardRef((function(e,n){var a=Object(p.a)({props:e,name:"MuiAccordion"}),r=a.children,u=a.className,b=a.defaultExpanded,x=void 0!==b&&b,f=a.disabled,y=void 0!==f&&f,S=a.disableGutters,w=void 0!==S&&S,T=a.expanded,I=a.onChange,C=a.square,N=void 0!==C&&C,M=a.TransitionComponent,D=void 0===M?m.a:M,R=a.TransitionProps,k=Object(i.a)(a,v),E=Object(j.a)({controlled:T,default:x,name:"Accordion",state:"expanded"}),G=Object(o.a)(E,2),L=G[0],P=G[1],q=s.useCallback((function(e){P(!L),I&&I(e,!L)}),[L,I,P]),z=s.Children.toArray(r),F=Object(t.a)(z),_=F[0],B=F.slice(1),V=s.useMemo((function(){return{expanded:L,disabled:y,disableGutters:w,toggle:q}}),[L,y,w,q]),W=Object(c.a)({},a,{square:N,disabled:y,disableGutters:w,expanded:L}),H=function(e){var n=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,g,n)}(W);return Object(O.jsxs)(A,Object(c.a)({className:Object(d.default)(H.root,u),ref:n,ownerState:W,square:N},k,{children:[Object(O.jsx)(h.a.Provider,{value:V,children:_}),Object(O.jsx)(D,Object(c.a)({in:L,timeout:"auto"},R,{children:Object(O.jsx)("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:H.region,children:B})}))]}))}));n.a=S},1534:function(e,n,a){"use strict";var t=a(4),o=a(13),r=a(2),i=a(1),c=(a(12),a(6)),s=a(127),d=a(14),l=a(24),u=a(1125),p=a(1252),m=a(96),b=a(89);function h(e){return Object(m.a)("MuiAccordionSummary",e)}var j=Object(b.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),x=a(0),f=["children","className","expandIcon","focusVisibleClassName","onClick"],g=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,a=e.theme,o=e.ownerState,i={duration:a.transitions.duration.shortest};return Object(r.a)((n={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(t.a)(n,"&.".concat(j.focusVisible),{backgroundColor:a.palette.action.focus}),Object(t.a)(n,"&.".concat(j.disabled),{opacity:a.palette.action.disabledOpacity}),Object(t.a)(n,"&:hover:not(.".concat(j.disabled,")"),{cursor:"pointer"}),n),!o.disableGutters&&Object(t.a)({},"&.".concat(j.expanded),{minHeight:64}))})),y=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,a=e.ownerState;return Object(r.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(t.a)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(j.expanded),{margin:"20px 0"}))})),O=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return Object(t.a)({display:"flex",color:n.palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(j.expanded),{transform:"rotate(180deg)"})})),v=i.forwardRef((function(e,n){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),t=a.children,d=a.className,u=a.expandIcon,m=a.focusVisibleClassName,b=a.onClick,j=Object(o.a)(a,f),v=i.useContext(p.a),A=v.disabled,S=void 0!==A&&A,w=v.disableGutters,T=v.expanded,I=v.toggle,C=Object(r.a)({},a,{expanded:T,disabled:S,disableGutters:w}),N=function(e){var n=e.classes,a=e.expanded,t=e.disabled,o=e.disableGutters,r={root:["root",a&&"expanded",t&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(r,h,n)}(C);return Object(x.jsxs)(g,Object(r.a)({focusRipple:!1,disableRipple:!0,disabled:S,component:"div","aria-expanded":T,className:Object(c.default)(N.root,d),focusVisibleClassName:Object(c.default)(N.focusVisible,m),onClick:function(e){I&&I(e),b&&b(e)},ref:n,ownerState:C},j,{children:[Object(x.jsx)(y,{className:N.content,ownerState:C,children:t}),u&&Object(x.jsx)(O,{className:N.expandIconWrapper,ownerState:C,children:u})]}))}));n.a=v},1535:function(e,n,a){"use strict";var t=a(2),o=a(13),r=a(1),i=(a(12),a(6)),c=a(127),s=a(14),d=a(24),l=a(96),u=a(89);function p(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var m=a(0),b=["className"],h=Object(s.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),j=r.forwardRef((function(e,n){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),r=a.className,s=Object(o.a)(a,b),l=a,u=function(e){var n=e.classes;return Object(c.a)({root:["root"]},p,n)}(l);return Object(m.jsx)(h,Object(t.a)({className:Object(i.default)(u.root,r),ref:n,ownerState:l},s))}));n.a=j},1688:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));a(1);var t=a(1533),o=a(1534),r=a(1535),i=a(339),c=a(1191),s=a.n(c),d=a(0);function l(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)(t.a,{children:[Object(d.jsx)(o.a,{expandIcon:Object(d.jsx)(s.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(d.jsx)(i.a,{children:"Accordion 1"})}),Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(d.jsxs)(t.a,{children:[Object(d.jsx)(o.a,{expandIcon:Object(d.jsx)(s.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(d.jsx)(i.a,{children:"Accordion 2"})}),Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(d.jsx)(t.a,{disabled:!0,children:Object(d.jsx)(o.a,{expandIcon:Object(d.jsx)(s.a,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:Object(d.jsx)(i.a,{children:"Disabled Accordion"})})})]})}},1689:function(e,n,a){"use strict";a.r(n),n.default="import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function SimpleAccordion() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1a-content\"\n          id=\"panel1a-header\"\n        >\n          <Typography>Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2a-content\"\n          id=\"panel2a-header\"\n        >\n          <Typography>Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3a-content\"\n          id=\"panel3a-header\"\n        >\n          <Typography>Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </div>\n  );\n}\n"},1690:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p}));var t=a(17),o=a(1),r=a(1533),i=a(1535),c=a(1534),s=a(339),d=a(1191),l=a.n(d),u=a(0);function p(){var e=o.useState(!1),n=Object(t.a)(e,2),a=n[0],d=n[1],p=function(e){return function(n,a){d(!!a&&e)}};return Object(u.jsxs)("div",{children:[Object(u.jsxs)(r.a,{expanded:"panel1"===a,onChange:p("panel1"),children:[Object(u.jsxs)(c.a,{expandIcon:Object(u.jsx)(l.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(u.jsx)(s.a,{sx:{width:"33%",flexShrink:0},children:"General settings"}),Object(u.jsx)(s.a,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),Object(u.jsxs)(r.a,{expanded:"panel2"===a,onChange:p("panel2"),children:[Object(u.jsxs)(c.a,{expandIcon:Object(u.jsx)(l.a,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(u.jsx)(s.a,{sx:{width:"33%",flexShrink:0},children:"Users"}),Object(u.jsx)(s.a,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),Object(u.jsxs)(r.a,{expanded:"panel3"===a,onChange:p("panel3"),children:[Object(u.jsxs)(c.a,{expandIcon:Object(u.jsx)(l.a,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[Object(u.jsx)(s.a,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),Object(u.jsx)(s.a,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),Object(u.jsxs)(r.a,{expanded:"panel4"===a,onChange:p("panel4"),children:[Object(u.jsx)(c.a,{expandIcon:Object(u.jsx)(l.a,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:Object(u.jsx)(s.a,{sx:{width:"33%",flexShrink:0},children:"Personal data"})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},1691:function(e,n,a){"use strict";a.r(n),n.default="import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function ControlledAccordions() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = (panel) => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>\n            General settings\n          </Typography>\n          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.\n            Aliquam eget maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>\n          <Typography sx={{ color: 'text.secondary' }}>\n            You are currently not an owner\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,\n            varius pulvinar diam eros in elit. Pellentesque convallis laoreet\n            laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>\n            Advanced settings\n          </Typography>\n          <Typography sx={{ color: 'text.secondary' }}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},1692:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return x}));var t=a(17),o=a(8),r=a(1),i=a(14),c=a(1693),s=a.n(c),d=a(1533),l=a(1534),u=a(1535),p=a(339),m=a(0),b=Object(i.a)((function(e){return Object(m.jsx)(d.a,Object(o.a)({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var n=e.theme;return{border:"1px solid ".concat(n.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),h=Object(i.a)((function(e){return Object(m.jsx)(l.a,Object(o.a)({expandIcon:Object(m.jsx)(s.a,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:n.spacing(1)}}})),j=Object(i.a)(u.a)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}));function x(){var e=r.useState("panel1"),n=Object(t.a)(e,2),a=n[0],o=n[1],i=function(e){return function(n,a){o(!!a&&e)}};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(b,{expanded:"panel1"===a,onChange:i("panel1"),children:[Object(m.jsx)(h,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(m.jsx)(p.a,{children:"Collapsible Group Item #1"})}),Object(m.jsx)(j,{children:Object(m.jsx)(p.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(m.jsxs)(b,{expanded:"panel2"===a,onChange:i("panel2"),children:[Object(m.jsx)(h,{"aria-controls":"panel2d-content",id:"panel2d-header",children:Object(m.jsx)(p.a,{children:"Collapsible Group Item #2"})}),Object(m.jsx)(j,{children:Object(m.jsx)(p.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(m.jsxs)(b,{expanded:"panel3"===a,onChange:i("panel3"),children:[Object(m.jsx)(h,{"aria-controls":"panel3d-content",id:"panel3d-header",children:Object(m.jsx)(p.a,{children:"Collapsible Group Item #3"})}),Object(m.jsx)(j,{children:Object(m.jsx)(p.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}},1693:function(e,n,a){"use strict";var t=a(607);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a(1159)),r=a(0),i=(0,o.default)((0,r.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");n.default=i},1694:function(e,n,a){"use strict";a.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';\nimport MuiAccordion from '@mui/material/Accordion';\nimport MuiAccordionSummary from '@mui/material/AccordionSummary';\nimport MuiAccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\n\nconst Accordion = styled((props) => (\n  <MuiAccordion disableGutters elevation={0} square {...props} />\n))(({ theme }) => ({\n  border: `1px solid ${theme.palette.divider}`,\n  '&:not(:last-child)': {\n    borderBottom: 0,\n  },\n  '&:before': {\n    display: 'none',\n  },\n}));\n\nconst AccordionSummary = styled((props) => (\n  <MuiAccordionSummary\n    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}\n    {...props}\n  />\n))(({ theme }) => ({\n  backgroundColor:\n    theme.palette.mode === 'dark'\n      ? 'rgba(255, 255, 255, .05)'\n      : 'rgba(0, 0, 0, .03)',\n  flexDirection: 'row-reverse',\n  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {\n    transform: 'rotate(90deg)',\n  },\n  '& .MuiAccordionSummary-content': {\n    marginLeft: theme.spacing(1),\n  },\n}));\n\nconst AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({\n  padding: theme.spacing(2),\n  borderTop: '1px solid rgba(0, 0, 0, .125)',\n}));\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = (panel) => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography>Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography>Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography>Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"},2944:function(e,n,a){"use strict";a.r(n);var t=a(1161),o=a(147),r=a(1135),i=a(1132),c=a(339),s=a(0);n.default=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/accordion",target:"_blank",role:"button",children:[Object(s.jsx)(i.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(c.a,{className:"text-40 my-16 font-700",component:"h1",children:"Accordion"}),Object(s.jsx)(c.a,{className:"description",children:"Accordions contain creation flows and allow lightweight editing of an element."}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card."}),Object(s.jsx)("blockquote",{children:Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:[Object(s.jsx)("strong",{children:"Note:"})," Accordions are no longer documented in the"," ",Object(s.jsx)("a",{href:"https://material.io/",children:"Material Design guidelines"}),', but MUI will continue to support them. It was formerly known as the "expansion panel".']})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic accordion"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1688).default,raw:a(1689)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled accordion"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["Extend the default behavior to create an accordion with the ",Object(s.jsx)("code",{children:"Accordion"})," ","component."]}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1690).default,raw:a(1691)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the"," ",Object(s.jsx)("a",{href:"/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1692).default,raw:a(1694)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Performance"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["The content of Accordions is mounted by default even if the accordion is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your accordion details or simply render many accordions it might be a good idea to change this default behavior by enabling the",Object(s.jsx)("code",{children:"unmountOnExit"})," in ",Object(s.jsx)("code",{children:"TransitionProps"}),":"]}),Object(s.jsx)(o.a,{component:"pre",className:"language-jsx",children:" \n<Accordion TransitionProps={{ unmountOnExit: true }} />\n"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",Object(s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#accordion",children:"https://www.w3.org/TR/wai-aria-practices/#accordion"}),")"]}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["For optimal accessibility we recommend setting ",Object(s.jsx)("code",{children:"id"})," and"," ",Object(s.jsx)("code",{children:"aria-controls"})," on the",Object(s.jsx)("code",{children:"AccordionSummary"}),". The ",Object(s.jsx)("code",{children:"Accordion"})," will derive the necessary"," ",Object(s.jsx)("code",{children:"aria-labelledby"}),"and ",Object(s.jsx)("code",{children:"id"})," for the content region of the accordion."]})]})}},419:function(e,n,a){"use strict";a.r(n),a.d(n,"capitalize",(function(){return t.a})),a.d(n,"createChainedFunction",(function(){return o.a})),a.d(n,"createSvgIcon",(function(){return r.a})),a.d(n,"debounce",(function(){return i.a})),a.d(n,"deprecatedPropType",(function(){return c})),a.d(n,"isMuiElement",(function(){return s.a})),a.d(n,"ownerDocument",(function(){return d.a})),a.d(n,"ownerWindow",(function(){return l.a})),a.d(n,"requirePropFactory",(function(){return u.a})),a.d(n,"setRef",(function(){return p})),a.d(n,"unstable_useEnhancedEffect",(function(){return m.a})),a.d(n,"unstable_useId",(function(){return b.a})),a.d(n,"unsupportedProp",(function(){return h.a})),a.d(n,"useControlled",(function(){return j.a})),a.d(n,"useEventCallback",(function(){return x.a})),a.d(n,"useForkRef",(function(){return f.a})),a.d(n,"useIsFocusVisible",(function(){return g.a}));var t=a(18),o=a(420),r=a(107),i=a(118);var c=function(e,n){return function(){return null}},s=a(197),d=a(67),l=a(90),u=a(1162),p=a(253).a,m=a(75),b=a(261),h=a(1059),j=a(165),x=a(71),f=a(38),g=a(260)}}]);