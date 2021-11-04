(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[78],{1161:function(e,n,t){"use strict";t.d(n,"a",(function(){return k}));var a=t(17),i=t(147),o=t(1146),c=t(1136),r=t(1132),s=t(1138),l=t(1123),m=t(6),d=t(1),u=t(8),f=t(109),j=t(64),h=t.n(j),p=t(421),b=t(183),x=t(82),g=t(1164),O=t(45),v=t(14),y=t(1104),S=t(0),R=["children","name"];function w(e){var n=e.children,t=e.document,a=Object(O.a)();d.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var i=d.useMemo((function(){return Object(b.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[p.a]:[]})}),[t,a.direction]),o=d.useCallback((function(){return t.defaultView}),[t]);return Object(S.jsx)(g.a,{target:t.head,stylisPlugins:"rtl"===a.direction?[p.a]:[],children:Object(S.jsxs)(x.a,{value:i,children:[Object(S.jsx)(y.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(n,{window:o})]})})}var N=Object(v.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function I(e){var n,t=e.children,i=e.name,o=Object(f.a)(e,R),c="".concat(i," demo"),r=d.useRef(null),s=d.useReducer((function(){return!0}),!1),l=Object(a.a)(s,2),m=l[0],j=l[1];d.useEffect((function(){var e=r.current.contentDocument;null==e||"complete"!==e.readyState||m||j()}),[m]);var p=null===(n=r.current)||void 0===n?void 0:n.contentDocument;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(N,Object(u.a)({onLoad:j,ref:r,title:c},o)),!1!==m?h.a.createPortal(Object(S.jsx)(w,{document:p,children:t}),p.body):null]})}var V=d.memo(I);function T(e){var n=Object(d.useState)(e.currentTabIndex),t=Object(a.a)(n,2),u=t[0],f=t[1],j=e.component,h=e.raw,p=e.iframe,b=e.className;return Object(S.jsxs)(c.a,{className:Object(m.default)(b,"shadow"),children:[Object(S.jsx)(o.a,{position:"static",color:"default",className:"shadow-0",children:Object(S.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){f(n)},children:[j&&Object(S.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(S.jsx)(r.a,{children:"remove_red_eye"})}),h&&Object(S.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(S.jsx)(r.a,{children:"code"})})]})}),Object(S.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(S.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:j&&(p?Object(S.jsx)(V,{children:Object(S.jsx)(j,{})}):Object(S.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(S.jsx)(j,{})}))}),Object(S.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:h&&Object(S.jsx)("div",{className:"flex flex-1",children:Object(S.jsx)(i.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}T.defaultProps={currentTabIndex:0};var k=T},2373:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t(17),i=t(1),o=t(1165),c=t(3109),r=t(339),s=t(0);function l(){var e=i.useState(2),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(s.jsxs)(o.a,{sx:{"& > legend":{mt:2}},children:[Object(s.jsx)(r.a,{component:"legend",children:"Controlled"}),Object(s.jsx)(c.a,{name:"simple-controlled",value:t,onChange:function(e,n){l(n)}}),Object(s.jsx)(r.a,{component:"legend",children:"Read only"}),Object(s.jsx)(c.a,{name:"read-only",value:t,readOnly:!0}),Object(s.jsx)(r.a,{component:"legend",children:"Disabled"}),Object(s.jsx)(c.a,{name:"disabled",value:t,disabled:!0}),Object(s.jsx)(r.a,{component:"legend",children:"No rating given"}),Object(s.jsx)(c.a,{name:"no-value",value:null})]})}},2374:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Rating from \'@mui/material/Rating\';\nimport Typography from \'@mui/material/Typography\';\n\nexport default function BasicRating() {\n  const [value, setValue] = React.useState(2);\n\n  return (\n    <Box\n      sx={{\n        \'& > legend\': { mt: 2 },\n      }}\n    >\n      <Typography component="legend">Controlled</Typography>\n      <Rating\n        name="simple-controlled"\n        value={value}\n        onChange={(event, newValue) => {\n          setValue(newValue);\n        }}\n      />\n      <Typography component="legend">Read only</Typography>\n      <Rating name="read-only" value={value} readOnly />\n      <Typography component="legend">Disabled</Typography>\n      <Rating name="disabled" value={value} disabled />\n      <Typography component="legend">No rating given</Typography>\n      <Rating name="no-value" value={null} />\n    </Box>\n  );\n}\n'},2375:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t(1);var a=t(3109),i=t(1181),o=t(0);function c(){return Object(o.jsxs)(i.a,{spacing:1,children:[Object(o.jsx)(a.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(o.jsx)(a.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]})}},2376:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Rating from '@mui/material/Rating';\nimport Stack from '@mui/material/Stack';\n\nexport default function HalfRating() {\n  return (\n    <Stack spacing={1}>\n      <Rating name=\"half-rating\" defaultValue={2.5} precision={0.5} />\n      <Rating name=\"half-rating-read\" defaultValue={2.5} precision={0.5} readOnly />\n    </Stack>\n  );\n}\n"},2377:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var a=t(17),i=t(1),o=t(3109),c=t(1165),r=t(1374),s=t.n(r),l=t(0),m={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function d(){var e=i.useState(2),n=Object(a.a)(e,2),t=n[0],r=n[1],d=i.useState(-1),u=Object(a.a)(d,2),f=u[0],j=u[1];return Object(l.jsxs)(c.a,{sx:{width:200,display:"flex",alignItems:"center"},children:[Object(l.jsx)(o.a,{name:"hover-feedback",value:t,precision:.5,onChange:function(e,n){r(n)},onChangeActive:function(e,n){j(n)},emptyIcon:Object(l.jsx)(s.a,{style:{opacity:.55},fontSize:"inherit"})}),null!==t&&Object(l.jsx)(c.a,{sx:{ml:2},children:m[-1!==f?f:t]})]})}},2378:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Rating from '@mui/material/Rating';\nimport Box from '@mui/material/Box';\nimport StarIcon from '@mui/icons-material/Star';\n\nconst labels = {\n  0.5: 'Useless',\n  1: 'Useless+',\n  1.5: 'Poor',\n  2: 'Poor+',\n  2.5: 'Ok',\n  3: 'Ok+',\n  3.5: 'Good',\n  4: 'Good+',\n  4.5: 'Excellent',\n  5: 'Excellent+',\n};\n\nexport default function HoverRating() {\n  const [value, setValue] = React.useState(2);\n  const [hover, setHover] = React.useState(-1);\n\n  return (\n    <Box\n      sx={{\n        width: 200,\n        display: 'flex',\n        alignItems: 'center',\n      }}\n    >\n      <Rating\n        name=\"hover-feedback\"\n        value={value}\n        precision={0.5}\n        onChange={(event, newValue) => {\n          setValue(newValue);\n        }}\n        onChangeActive={(event, newHover) => {\n          setHover(newHover);\n        }}\n        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize=\"inherit\" />}\n      />\n      {value !== null && (\n        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>\n      )}\n    </Box>\n  );\n}\n"},2379:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t(1);var a=t(3109),i=t(1181),o=t(0);function c(){return Object(o.jsxs)(i.a,{spacing:1,children:[Object(o.jsx)(a.a,{name:"size-small",defaultValue:2,size:"small"}),Object(o.jsx)(a.a,{name:"size-medium",defaultValue:2}),Object(o.jsx)(a.a,{name:"size-large",defaultValue:2,size:"large"})]})}},2380:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Rating from \'@mui/material/Rating\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function RatingSIze() {\n  return (\n    <Stack spacing={1}>\n      <Rating name="size-small" defaultValue={2} size="small" />\n      <Rating name="size-medium" defaultValue={2} />\n      <Rating name="size-large" defaultValue={2} size="large" />\n    </Stack>\n  );\n}\n'},2381:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));t(1);var a=t(14),i=t(1165),o=t(3109),c=t(1206),r=t.n(c),s=t(1416),l=t.n(s),m=t(339),d=t(0),u=Object(a.a)(o.a)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function f(){return Object(d.jsxs)(i.a,{sx:{"& > legend":{mt:2}},children:[Object(d.jsx)(m.a,{component:"legend",children:"Custom icon and color"}),Object(d.jsx)(u,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(d.jsx)(r.a,{fontSize:"inherit"}),emptyIcon:Object(d.jsx)(l.a,{fontSize:"inherit"})}),Object(d.jsx)(m.a,{component:"legend",children:"10 stars"}),Object(d.jsx)(o.a,{name:"customized-10",defaultValue:2,max:10})]})}},2382:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Rating from '@mui/material/Rating';\nimport FavoriteIcon from '@mui/icons-material/Favorite';\nimport FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';\nimport Typography from '@mui/material/Typography';\n\nconst StyledRating = styled(Rating)({\n  '& .MuiRating-iconFilled': {\n    color: '#ff6d75',\n  },\n  '& .MuiRating-iconHover': {\n    color: '#ff3d47',\n  },\n});\n\nexport default function CustomizedRating() {\n  return (\n    <Box\n      sx={{\n        '& > legend': { mt: 2 },\n      }}\n    >\n      <Typography component=\"legend\">Custom icon and color</Typography>\n      <StyledRating\n        name=\"customized-color\"\n        defaultValue={2}\n        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}\n        precision={0.5}\n        icon={<FavoriteIcon fontSize=\"inherit\" />}\n        emptyIcon={<FavoriteBorderIcon fontSize=\"inherit\" />}\n      />\n      <Typography component=\"legend\">10 stars</Typography>\n      <Rating name=\"customized-10\" defaultValue={2} max={10} />\n    </Box>\n  );\n}\n"},2383:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t(8),i=t(109),o=(t(1),t(3109)),c=t(2384),r=t.n(c),s=t(2385),l=t.n(s),m=t(2386),d=t.n(m),u=t(2387),f=t.n(u),j=t(2388),h=t.n(j),p=t(0),b=["value"],x={1:{icon:Object(p.jsx)(r.a,{}),label:"Very Dissatisfied"},2:{icon:Object(p.jsx)(l.a,{}),label:"Dissatisfied"},3:{icon:Object(p.jsx)(d.a,{}),label:"Neutral"},4:{icon:Object(p.jsx)(f.a,{}),label:"Satisfied"},5:{icon:Object(p.jsx)(h.a,{}),label:"Very Satisfied"}};function g(e){var n=e.value,t=Object(i.a)(e,b);return Object(p.jsx)("span",Object(a.a)(Object(a.a)({},t),{},{children:x[n].icon}))}function O(){return Object(p.jsx)(o.a,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:g,highlightSelectedOnly:!0})}},2389:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport Rating from '@mui/material/Rating';\nimport SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';\nimport SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';\nimport SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';\nimport SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';\nimport SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';\n\nconst customIcons = {\n  1: {\n    icon: <SentimentVeryDissatisfiedIcon />,\n    label: 'Very Dissatisfied',\n  },\n  2: {\n    icon: <SentimentDissatisfiedIcon />,\n    label: 'Dissatisfied',\n  },\n  3: {\n    icon: <SentimentSatisfiedIcon />,\n    label: 'Neutral',\n  },\n  4: {\n    icon: <SentimentSatisfiedAltIcon />,\n    label: 'Satisfied',\n  },\n  5: {\n    icon: <SentimentVerySatisfiedIcon />,\n    label: 'Very Satisfied',\n  },\n};\n\nfunction IconContainer(props) {\n  const { value, ...other } = props;\n  return <span {...other}>{customIcons[value].icon}</span>;\n}\n\nIconContainer.propTypes = {\n  value: PropTypes.number.isRequired,\n};\n\nexport default function RadioGroupRating() {\n  return (\n    <Rating\n      name=\"highlight-selected-only\"\n      defaultValue={2}\n      IconContainerComponent={IconContainer}\n      highlightSelectedOnly\n    />\n  );\n}\n"},2390:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));t(1);var a=t(1165),i=t(3109),o=t(1374),c=t.n(o),r=t(0),s={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function l(){return Object(r.jsxs)(a.a,{sx:{width:200,display:"flex",alignItems:"center"},children:[Object(r.jsx)(i.a,{name:"text-feedback",value:3.5,readOnly:!0,precision:.5,emptyIcon:Object(r.jsx)(c.a,{style:{opacity:.55},fontSize:"inherit"})}),Object(r.jsx)(a.a,{sx:{ml:2},children:s[3.5]})]})}},2391:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Rating from '@mui/material/Rating';\nimport StarIcon from '@mui/icons-material/Star';\n\nconst labels = {\n  0.5: 'Useless',\n  1: 'Useless+',\n  1.5: 'Poor',\n  2: 'Poor+',\n  2.5: 'Ok',\n  3: 'Ok+',\n  3.5: 'Good',\n  4: 'Good+',\n  4.5: 'Excellent',\n  5: 'Excellent+',\n};\n\nexport default function TextRating() {\n  const value = 3.5;\n\n  return (\n    <Box\n      sx={{\n        width: 200,\n        display: 'flex',\n        alignItems: 'center',\n      }}\n    >\n      <Rating\n        name=\"text-feedback\"\n        value={value}\n        readOnly\n        precision={0.5}\n        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize=\"inherit\" />}\n      />\n      <Box sx={{ ml: 2 }}>{labels[value]}</Box>\n    </Box>\n  );\n}\n"},2999:function(e,n,t){"use strict";t.r(n);var a=t(1161),i=t(1135),o=t(1132),c=t(339),r=t(0);n.default=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(r.jsxs)(i.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/rating",target:"_blank",role:"button",children:[Object(r.jsx)(o.a,{children:"link"}),Object(r.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(r.jsx)(c.a,{className:"text-40 my-16 font-700",component:"h1",children:"Rating"}),Object(r.jsx)(c.a,{className:"description",children:"Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic rating"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2373).default,raw:t(2374)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Rating precision"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["The rating can display any float number with the ",Object(r.jsx)("code",{children:"value"})," prop. Use the"," ",Object(r.jsx)("code",{children:"precision"})," prop to define the minimum increment value change allowed."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2375).default,raw:t(2376)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Hover feedback"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["You can display a label on hover to help the user pick the correct rating value. The demo uses the ",Object(r.jsx)("code",{children:"onChangeActive"})," prop."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2377).default,raw:t(2378)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Sizes"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["For larger or smaller ratings use the ",Object(r.jsx)("code",{children:"size"})," prop."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2379).default,raw:t(2380)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the"," ",Object(r.jsx)("a",{href:"/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2381).default,raw:t(2382)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Radio group"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["The rating is implemented with a radio group, set ",Object(r.jsx)("code",{children:"highlightSelectedOnly"})," to restore the natural behavior."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2383).default,raw:t(2389)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["(",Object(r.jsx)("a",{href:"https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating",children:"WAI tutorial"}),")"]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"The accessibility of this component relies on:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the ",Object(r.jsx)("code",{children:"name"})," prop that is unique to the parent form."]}),Object(r.jsxs)("li",{children:["Labels for the radio buttons containing actual text (\u201c1 Star\u201d, \u201c2 Stars\u201d, \u2026). Be sure to provide a suitable function to the ",Object(r.jsx)("code",{children:"getLabelText"})," prop when the page is in a language other than English. You can use the"," ",Object(r.jsx)("a",{href:"https://mui.com/guides/localization/",children:"included locales"}),", or provide your own."]}),Object(r.jsxs)("li",{children:["A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match ",Object(r.jsx)("a",{href:"https://www.w3.org/TR/WCAG21/#use-of-color",children:"success Criterion 1.4.1"})," of WCAG2.1."]})]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2390).default,raw:t(2391)})}),Object(r.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:'The read only rating has a role of "img", and an aria-label that describes the displayed rating.'}),Object(r.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating."}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"The read only rating is not focusable."})]})}}}]);