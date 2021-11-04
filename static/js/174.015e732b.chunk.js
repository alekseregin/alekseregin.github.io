(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[174],{1207:function(e,t,a){"use strict";var r=a(4),c=a(13),o=a(2),i=a(1),n=(a(12),a(127)),s=a(100),l=a(268),d=a(107),m=a(0),j=Object(d.a)(Object(m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(d.a)(Object(m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=Object(d.a)(Object(m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(18),f=a(24),x=a(14),h=a(96),O=a(89);function v(e){return Object(h.a)("MuiCheckbox",e)}var w=Object(O.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],g=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(p.a)(a.color))]]}})((function(e){var t,a=e.theme,c=e.ownerState;return Object(o.a)({color:a.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===c.color?a.palette.action.active:a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(r.a)(t,"&.".concat(w.checked,", &.").concat(w.indeterminate),{color:a.palette[c.color].main}),Object(r.a)(t,"&.".concat(w.disabled),{color:a.palette.action.disabled}),t))})),C=Object(m.jsx)(u,{}),N=Object(m.jsx)(j,{}),k=Object(m.jsx)(b,{}),S=i.forwardRef((function(e,t){var a,r,s=Object(f.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?C:l,j=s.color,u=void 0===j?"primary":j,b=s.icon,x=void 0===b?N:b,h=s.indeterminate,O=void 0!==h&&h,w=s.indeterminateIcon,S=void 0===w?k:w,z=s.inputProps,P=s.size,R=void 0===P?"medium":P,T=Object(c.a)(s,y),M=O?S:x,q=O?S:d,E=Object(o.a)({},s,{color:u,indeterminate:O,size:R}),I=function(e){var t=e.classes,a=e.indeterminate,r=e.color,c={root:["root",a&&"indeterminate","color".concat(Object(p.a)(r))]},i=Object(n.a)(c,v,t);return Object(o.a)({},t,i)}(E);return Object(m.jsx)(g,Object(o.a)({type:"checkbox",inputProps:Object(o.a)({"data-indeterminate":O},z),icon:i.cloneElement(M,{fontSize:null!=(a=M.props.fontSize)?a:R}),checkedIcon:i.cloneElement(q,{fontSize:null!=(r=q.props.fontSize)?r:R}),ownerState:E,ref:t},T,{classes:I}))}));t.a=S},3049:function(e,t,a){"use strict";a.r(t);var r=a(8),c=a(199),o=a(14),i=a(100),n=a(1145),s=a(1121),l=a(47),d=a(1135),m=a(1136),j=a(1137),u=a(1207),b=a(1141),p=a(1142),f=a(1143),x=a(339),h=a(39),O=a(76),v=a(21),w=a(0),y=Object(o.a)("div")((function(e){var t=e.theme;return{"& .Register3-leftSection":{},"& .Register3-rightSection":{background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(Object(i.b)(t.palette.primary.dark,.5)," 100%)"),color:t.palette.primary.contrastText}}})),g=O.d().shape({name:O.f().required("You must enter your name"),email:O.f().email("You must enter a valid email").required("You must enter a email"),password:O.f().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:O.f().oneOf([O.e("password"),null],"Passwords must match"),acceptTermsConditions:O.c().oneOf([!0],"The terms and conditions must be accepted.")}),C={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};t.default=function(){var e=Object(l.f)({mode:"onChange",defaultValues:C,resolver:Object(c.a)(g)}),t=e.control,a=e.formState,o=e.handleSubmit,i=e.reset,O=a.isValid,N=a.dirtyFields,k=a.errors;return Object(w.jsx)(y,{className:"flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24",children:Object(w.jsxs)(s.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},className:"flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden",children:[Object(w.jsxs)(m.a,{className:"Register3-leftSection  flex flex-col w-full max-w-sm items-center justify-center shadow-0",square:!0,children:[Object(w.jsxs)(j.a,{className:"flex flex-col items-center justify-center w-full py-96 max-w-320",children:[Object(w.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},children:Object(w.jsxs)("div",{className:"flex items-center mb-48",children:[Object(w.jsx)("img",{className:"logo-icon w-48",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(w.jsx)("div",{className:"border-l-1 mr-4 w-1 h-40"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(x.a,{className:"text-24 font-semibold logo-text",color:"inherit",children:"FUSE"}),Object(w.jsx)(x.a,{className:"text-16 tracking-widest -mt-8 font-700",color:"textSecondary",children:"REACT"})]})]})}),Object(w.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:o((function(){i(C)})),children:[Object(w.jsx)(l.a,{name:"name",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Name",autoFocus:!0,type:"name",error:!!k.name,helperText:null===k||void 0===k||null===(t=k.name)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.a,{name:"email",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Email",type:"email",error:!!k.email,helperText:null===k||void 0===k||null===(t=k.email)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.a,{name:"password",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Password",type:"password",error:!!k.password,helperText:null===k||void 0===k||null===(t=k.password)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.a,{name:"passwordConfirm",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Password (Confirm)",type:"password",error:!!k.passwordConfirm,helperText:null===k||void 0===k||null===(t=k.passwordConfirm)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.a,{name:"acceptTermsConditions",control:t,render:function(e){var t,a=e.field;return Object(w.jsxs)(b.a,{className:"items-center",error:!!k.acceptTermsConditions,children:[Object(w.jsx)(p.a,{label:"I read and accept terms and conditions",control:Object(w.jsx)(u.a,Object(r.a)({},a))}),Object(w.jsx)(n.a,{children:null===k||void 0===k||null===(t=k.acceptTermsConditions)||void 0===t?void 0:t.message})]})}}),Object(w.jsx)(d.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"Register",disabled:v.a.isEmpty(N)||!O,type:"submit",children:"Create an account"})]})]}),Object(w.jsxs)("div",{className:"flex flex-col items-center justify-center pb-32",children:[Object(w.jsx)("span",{className:"font-normal",children:"Already have an account?"}),Object(w.jsx)(h.a,{className:"font-normal",to:"/pages/auth/login-3",children:"Login"})]})]}),Object(w.jsx)("div",{className:"Register3-rightSection hidden md:flex flex-1 items-center justify-center p-64",children:Object(w.jsxs)("div",{className:"max-w-320",children:[Object(w.jsx)(s.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(w.jsxs)(x.a,{color:"inherit",className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(w.jsx)("br",{}),"to the ",Object(w.jsx)("br",{})," FUSE React!"]})}),Object(w.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(w.jsx)(x.a,{variant:"subtitle1",color:"inherit",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]})})]})})}}}]);