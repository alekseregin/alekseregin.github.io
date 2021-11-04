(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[176],{3103:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1148),c=a(14),i=a(1132),l=a(339),s=a(168),o=a(1121),d=a(1),u=a(15),b=a(2869),p=a(1574),j=a(2870),m=a(1578),f=a(1131),v=a(1133),x=a(1109),g=a(37),O=a(6),h=a(201),y=a(0),k=Object(c.a)("div")((function(e){e.theme;return{backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:"#FAFAFA",color:"#FFFFFF",backgroundSize:"cover",backgroundPosition:"0 50%",backgroundRepeat:"no-repeat","&:before":{content:"''",position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1,background:"rgba(0, 0, 0, 0.45)"},"&.Jan":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Feb":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Mar":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Apr":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.May":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Jun":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Jul":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Aug":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Sep":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Oct":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Nov":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Dec":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"}}})),w={dayGridMonth:{title:"Month",icon:"view_module"},timeGridWeek:{title:"Week",icon:"view_week"},timeGridDay:{title:"Day",icon:"view_agenda"}};var D,N=function(e){var t=e.calendarRef,a=e.currentDate,r=Object(u.c)(g.f),c=function(){var e;return null===(e=t.current)||void 0===e?void 0:e.getApi()};return Object(y.jsx)(f.a,{theme:r,children:Object(y.jsx)(k,{className:Object(O.default)("flex h-200 min-h-200 relative",Object(h.a)(new Date((null===a||void 0===a?void 0:a.start)||null),"MMM")),children:Object(y.jsxs)("div",{className:"flex flex-1 flex-col p-12 justify-between z-10 container",children:[Object(y.jsxs)("div",{className:"flex flex-col items-center justify-between sm:flex-row",children:[Object(y.jsxs)("div",{className:"flex items-center my-16 sm:mb-0",children:[Object(y.jsx)(i.a,{component:o.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"today"}),Object(y.jsx)(o.a.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Calendar"})]}),Object(y.jsxs)("div",{className:"flex items-center",children:[Object(y.jsx)(x.a,{title:"Today",children:Object(y.jsx)("div",{children:Object(y.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:Object(y.jsx)(v.a,{"aria-label":"today",onClick:function(){return c().today()},size:"large",children:Object(y.jsx)(i.a,{children:"today"})})})})}),Object.entries(w).map((function(e){var t=Object(n.a)(e,2),r=t[0],l=t[1];return Object(y.jsx)(x.a,{title:l.title,children:Object(y.jsx)("div",{children:Object(y.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:Object(y.jsx)(v.a,{"aria-label":r,onClick:function(){return c().changeView(r)},disabled:(null===a||void 0===a?void 0:a.view.type)===r,size:"large",children:Object(y.jsx)(i.a,{children:l.icon})})})})},r)}))]})]}),Object(y.jsxs)(o.a.div,{className:"flex items-center justify-center",initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:[Object(y.jsx)(x.a,{title:"Previous",children:Object(y.jsx)(v.a,{"aria-label":"Previous",onClick:function(){return c().prev()},size:"large",children:Object(y.jsx)(i.a,{children:"ltr"===r.direction?"chevron_left":"chevron_right"})})}),Object(y.jsx)(l.a,{variant:"h6",children:null===a||void 0===a?void 0:a.view.title}),Object(y.jsx)(x.a,{title:"Next",children:Object(y.jsx)(v.a,{"aria-label":"Next",onClick:function(){return c().next()},size:"large",children:Object(y.jsx)(i.a,{children:"ltr"===r.direction?"chevron_right":"chevron_left"})})})]})]})})})},E=a(8),C=a(199),I=a(286),P=a(47),A=a(273),F=a(1146),M=a(1135),R=a(1097),S=a(1257),z=a(1256),W=a(1142),V=a(1108),_=a(1143),G=a(1147),T=a(2913),J=a(76),q=a(21),U=a(4),B=a(3),H=a.n(B),L=a(7),Y=a(34),K=a(53),Q=a.n(K),X=Object(Y.b)("calendarApp/events/getEvents",Object(L.a)(H.a.mark((function e(){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("/api/calendar-app/events");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Z=Object(Y.b)("calendarApp/events/addEvent",function(){var e=Object(L.a)(H.a.mark((function e(t,a){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,e.next=3,Q.a.post("/api/calendar-app/add-event",{newEvent:t});case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),$=Object(Y.b)("calendarApp/events/updateEvent",function(){var e=Object(L.a)(H.a.mark((function e(t,a){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,e.next=3,Q.a.post("/api/calendar-app/update-event",{event:t});case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ee=Object(Y.b)("calendarApp/events/remove-event",function(){var e=Object(L.a)(H.a.mark((function e(t,a){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,e.next=3,Q.a.post("/api/calendar-app/remove-event",{eventId:t});case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r.id);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),te=Object(Y.c)({}),ae=te.getSelectors((function(e){return e.calendarApp.events})),ne=ae.selectAll,re=(ae.selectIds,ae.selectById,Object(Y.d)({name:"calendarApp/events",initialState:te.getInitialState({eventDialog:{type:"new",props:{open:!1},data:null}}),reducers:{openNewEventDialog:{prepare:function(e){return{payload:{type:"new",props:{open:!0},data:{start:Object(I.a)(e.start),end:Object(I.a)(e.end)}}}},reducer:function(e,t){e.eventDialog=t.payload}},openEditEventDialog:{prepare:function(e){return{payload:{type:"edit",props:{open:!0},data:Object(E.a)(Object(E.a)({},e),{},{start:Object(I.a)(e.start),end:Object(I.a)(e.end)})}}},reducer:function(e,t){e.eventDialog=t.payload}},closeNewEventDialog:function(e,t){e.eventDialog={type:"new",props:{open:!1},data:null}},closeEditEventDialog:function(e,t){e.eventDialog={type:"edit",props:{open:!1},data:null}}},extraReducers:(D={},Object(U.a)(D,X.fulfilled,te.setAll),Object(U.a)(D,Z.fulfilled,te.addOne),Object(U.a)(D,$.fulfilled,te.upsertOne),Object(U.a)(D,ee.fulfilled,te.removeOne),D)})),ce=re.actions,ie=ce.openNewEventDialog,le=ce.closeNewEventDialog,se=ce.openEditEventDialog,oe=ce.closeEditEventDialog,de=re.reducer,ue={id:A.a.generateGUID(),title:"",allDay:!0,start:Object(I.a)(new Date),end:Object(I.a)(new Date),extendedProps:{desc:""}},be=J.d().shape({title:J.f().required("You must enter a title")});var pe=function(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.calendarApp.events.eventDialog})),n=Object(P.f)({defaultValues:ue,mode:"onChange",resolver:Object(C.a)(be)}),r=n.reset,c=n.formState,s=n.watch,o=n.control,b=n.getValues,p=c.isValid,j=c.dirtyFields,m=c.errors,f=s("start"),x=s("end"),g=s("id"),O=Object(d.useCallback)((function(){"edit"===a.type&&a.data&&r(Object(E.a)({},a.data)),"new"===a.type&&r(Object(E.a)(Object(E.a)(Object(E.a)({},ue),a.data),{},{id:A.a.generateGUID()}))}),[a.data,a.type,r]);function h(){return"edit"===a.type?t(oe()):t(le())}function k(e){e.preventDefault();var n=b();"new"===a.type?t(Z(n)):t($(Object(E.a)(Object(E.a)({},a.data),n))),h()}return Object(d.useEffect)((function(){a.props.open&&O()}),[a.props.open,O]),Object(y.jsxs)(R.a,Object(E.a)(Object(E.a)({},a.props),{},{onClose:h,fullWidth:!0,maxWidth:"xs",component:"form",children:[Object(y.jsx)(F.a,{position:"static",elevation:0,children:Object(y.jsx)(G.a,{className:"flex w-full",children:Object(y.jsx)(l.a,{variant:"subtitle1",color:"inherit",children:"new"===a.type?"New Event":"Edit Event"})})}),Object(y.jsxs)("form",{noValidate:!0,children:[Object(y.jsxs)(z.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"},children:[Object(y.jsx)(P.a,{name:"title",control:o,render:function(e){var t,a=e.field;return Object(y.jsx)(_.a,Object(E.a)(Object(E.a)({},a),{},{id:"title",label:"Title",className:"mt-8 mb-16",error:!!m.title,helperText:null===m||void 0===m||null===(t=m.title)||void 0===t?void 0:t.message,InputLabelProps:{shrink:!0},variant:"outlined",autoFocus:!0,required:!0,fullWidth:!0}))}}),Object(y.jsx)(P.a,{name:"allDay",control:o,render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(W.a,{className:"mt-8 mb-16",label:"All Day",control:Object(y.jsx)(V.a,{onChange:function(e){a(e.target.checked)},checked:n,name:"allDay"})})}}),Object(y.jsx)(P.a,{name:"start",control:o,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(T.a,{value:n,onChange:a,renderInput:function(e){return Object(y.jsx)(_.a,Object(E.a)({label:"Start",className:"mt-8 mb-16 w-full"},e))},className:"mt-8 mb-16 w-full",maxDate:x})}}),Object(y.jsx)(P.a,{name:"end",control:o,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(T.a,{value:n,onChange:a,renderInput:function(e){return Object(y.jsx)(_.a,Object(E.a)({label:"End",className:"mt-8 mb-16 w-full"},e))},minDate:f})}}),Object(y.jsx)(P.a,{name:"extendedProps.desc",control:o,render:function(e){var t=e.field;return Object(y.jsx)(_.a,Object(E.a)(Object(E.a)({},t),{},{className:"mt-8 mb-16",id:"desc",label:"Description",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}))}})]}),"new"===a.type?Object(y.jsx)(S.a,{className:"justify-between px-8 sm:px-16 pb-16",children:Object(y.jsx)(M.a,{variant:"contained",color:"primary",onClick:k,disabled:q.a.isEmpty(j)||!p,children:"Add"})}):Object(y.jsxs)(S.a,{className:"justify-between px-8 sm:px-16 pb-16",children:[Object(y.jsx)(M.a,{variant:"contained",color:"primary",onClick:k,disabled:q.a.isEmpty(j)||!p,children:"Save"}),Object(y.jsx)(v.a,{onClick:function(){t(ee(g)),h()},size:"large",children:Object(y.jsx)(i.a,{children:"delete"})})]})]})]}))},je=a(136),me=Object(je.c)({events:de}),fe=Object(c.a)("div")((function(e){var t=e.theme;return{"& a":{color:"".concat(t.palette.text.primary,"!important"),textDecoration:"none!important"},"&  .fc-media-screen":{minHeight:"100%"},"& .fc-scrollgrid, & .fc-theme-standard td, & .fc-theme-standard th":{borderColor:"".concat(t.palette.divider,"!important")},"&  .fc-scrollgrid-section > td":{border:0},"& .fc-daygrid-day":{"&:last-child":{borderRight:0}},"& .fc-col-header-cell":{borderWidth:"0 0 1px 0",padding:"16px 0","& .fc-col-header-cell-cushion":{color:t.palette.text.secondary,fontWeight:500}},"& .fc-view ":{borderRadius:20,overflow:"hidden",border:"1px solid ".concat(t.palette.divider),"& > .fc-scrollgrid":{border:0}},"& .fc-daygrid-day-number":{color:t.palette.text.secondary,fontWeight:500},"& .fc-event":{backgroundColor:"".concat(t.palette.primary.dark,"!important"),color:"".concat(t.palette.primary.contrastText,"!important"),border:0,padding:"0 6px",borderRadius:"16px!important"}}})),ve=Object(c.a)("div")((function(e){e.theme;return{position:"absolute",right:12,top:172,zIndex:99}}));function xe(e){return Object(y.jsxs)("div",{className:"flex items-center",children:[Object(y.jsx)(l.a,{className:"text-12 font-semibold",children:e.timeText}),Object(y.jsx)(l.a,{className:"text-12 px-4 truncate",children:e.event.title})]})}t.default=Object(s.a)("calendarApp",me)((function(e){var t=Object(d.useState)(),a=Object(n.a)(t,2),c=a[0],l=a[1],s=Object(u.b)(),f=Object(u.c)(ne),v=Object(d.useRef)();return Object(d.useRef)(null),Object(d.useEffect)((function(){s(X())}),[s]),Object(y.jsxs)(fe,{className:"flex flex-col flex-auto relative",children:[Object(y.jsx)(N,{calendarRef:v,currentDate:c}),Object(y.jsxs)("div",{className:"flex flex-1 p-24 container",children:[Object(y.jsx)(o.a.div,{className:"w-full",initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:Object(y.jsx)(b.a,{plugins:[p.a,j.a,m.a],headerToolbar:!1,initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,datesSet:function(e){l(e)},select:function(e){var t=e.start,a=e.end;s(ie({start:t,end:a}))},events:f,eventContent:xe,eventClick:function(e){var t=e.event,a=t.id,n=t.title,r=t.allDay,c=t.start,i=t.end,l=t.extendedProps;s(se({id:a,title:n,allDay:r,start:c,end:i,extendedProps:l}))},eventAdd:function(e){},eventChange:function(e){},eventRemove:function(e){},eventDrop:function(e){var t=e.event,a=t.id,n=t.title,r=t.allDay,c=t.start,i=t.end,l=t.extendedProps;s($({id:a,title:n,allDay:r,start:c,end:i,extendedProps:l}))},initialDate:new Date(2021,3,1),ref:v})}),Object(y.jsx)(ve,{as:o.a.div,initial:{scale:0},animate:{scale:1,transition:{delay:.4}},children:Object(y.jsx)(r.a,{color:"secondary","aria-label":"add",onClick:function(){return s(ie({start:new Date,end:new Date}))},children:Object(y.jsx)(i.a,{children:"add"})})}),Object(y.jsx)(pe,{})]})]})}))}}]);