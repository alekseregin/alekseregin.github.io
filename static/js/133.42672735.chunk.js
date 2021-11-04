(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[133],{1161:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var n=a(17),c=a(147),r=a(1146),l=a(1136),s=a(1132),o=a(1138),i=a(1123),d=a(6),m=a(1),u=a(8),j=a(109),b=a(64),x=a.n(b),f=a(421),p=a(183),h=a(82),O=a(1164),v=a(45),g=a(14),y=a(1104),w=a(0),N=["children","name"];function k(e){var t=e.children,a=e.document,n=Object(v.a)();m.useEffect((function(){a.body.dir=n.direction}),[a,n.direction]);var c=m.useMemo((function(){return Object(p.a)({key:"iframe-demo-".concat(n.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===n.direction?[f.a]:[]})}),[a,n.direction]),r=m.useCallback((function(){return a.defaultView}),[a]);return Object(w.jsx)(O.a,{target:a.head,stylisPlugins:"rtl"===n.direction?[f.a]:[],children:Object(w.jsxs)(h.a,{value:c,children:[Object(w.jsx)(y.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(t,{window:r})]})})}var M=Object(g.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function T(e){var t,a=e.children,c=e.name,r=Object(j.a)(e,N),l="".concat(c," demo"),s=m.useRef(null),o=m.useReducer((function(){return!0}),!1),i=Object(n.a)(o,2),d=i[0],b=i[1];m.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||d||b()}),[d]);var f=null===(t=s.current)||void 0===t?void 0:t.contentDocument;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(M,Object(u.a)({onLoad:b,ref:s,title:l},r)),!1!==d?x.a.createPortal(Object(w.jsx)(k,{document:f,children:a}),f.body):null]})}var E=m.memo(T);function P(e){var t=Object(m.useState)(e.currentTabIndex),a=Object(n.a)(t,2),u=a[0],j=a[1],b=e.component,x=e.raw,f=e.iframe,p=e.className;return Object(w.jsxs)(l.a,{className:Object(d.default)(p,"shadow"),children:[Object(w.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(i.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){j(t)},children:[b&&Object(w.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(s.a,{children:"remove_red_eye"})}),x&&Object(w.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(s.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(w.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:b&&(f?Object(w.jsx)(E,{children:Object(w.jsx)(b,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(b,{})}))}),Object(w.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:x&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(c.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})})})]})]})}P.defaultProps={currentTabIndex:0};var R=P},2839:function(e,t,a){"use strict";a.r(t);var n=a(1132),c=a(1109),r=a(339),l=a(1443),s=a(0);function o(e){var t=e.text;return Object(s.jsx)(c.a,{title:t,placement:"top",children:Object(s.jsx)(n.a,{className:"text-red",children:"place"})})}t.default=function(){return Object(s.jsxs)("div",{className:"w-full",children:[Object(s.jsx)(r.a,{className:"h2 mb-16",children:"Simple Map Example"}),Object(s.jsx)("div",{className:"w-full h-512",children:Object(s.jsx)(l.a,{bootstrapURLKeys:{key:""},defaultZoom:12,defaultCenter:[-34.397,150.64],children:Object(s.jsx)(o,{text:"Marker Text",lat:"-34.397",lng:"150.644"})})})]})}},2840:function(e,t,a){"use strict";a.r(t),t.default='import Icon from \'@mui/material/Icon\';\nimport Tooltip from \'@mui/material/Tooltip\';\nimport Typography from \'@mui/material/Typography\';\nimport GoogleMap from \'google-map-react\';\n\nfunction Marker({ text }) {\n\treturn (\n\t\t<Tooltip title={text} placement="top">\n\t\t\t<Icon className="text-red">place</Icon>\n\t\t</Tooltip>\n\t);\n}\n\nfunction SimpleExample() {\n\treturn (\n\t\t<div className="w-full">\n\t\t\t<Typography className="h2 mb-16">Simple Map Example</Typography>\n\t\t\t<div className="w-full h-512">\n\t\t\t\t<GoogleMap\n\t\t\t\t\tbootstrapURLKeys={{\n\t\t\t\t\t\tkey: process.env.REACT_APP_MAP_KEY\n\t\t\t\t\t}}\n\t\t\t\t\tdefaultZoom={12}\n\t\t\t\t\tdefaultCenter={[-34.397, 150.64]}\n\t\t\t\t>\n\t\t\t\t\t<Marker text="Marker Text" lat="-34.397" lng="150.644" />\n\t\t\t\t</GoogleMap>\n\t\t\t</div>\n\t\t</div>\n\t);\n}\n\nexport default SimpleExample;\n'},3034:function(e,t,a){"use strict";a.r(t);var n=a(1161),c=a(1135),r=a(1132),l=a(339),s=a(39),o=a(0);t.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[Object(o.jsx)(l.a,{variant:"h4",className:"",children:"GoogleMapReact"}),Object(o.jsxs)(c.a,{variant:"contained",color:"secondary",component:"a",href:"https://github.com/google-map-react/google-map-react",target:"_blank",role:"button",children:[Object(o.jsx)(r.a,{children:"link"}),Object(o.jsx)("span",{className:"mx-4",children:"Reference"})]})]}),Object(o.jsxs)(l.a,{className:"mb-16",component:"p",children:[Object(o.jsx)("code",{children:"google-map-react"})," is a component written over a small set of the Google Maps API."]}),Object(o.jsx)("hr",{}),Object(o.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usages"}),Object(o.jsx)(n.a,{className:"mb-64",component:a(2839).default,raw:a(2840)}),Object(o.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{className:"mb-8",children:Object(o.jsx)(s.a,{to:"/apps/dashboards/analytics",children:"Analytics Dashboard"})})})]})}}}]);