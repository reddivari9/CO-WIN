(this.webpackJsonpcovid_slots=this.webpackJsonpcovid_slots||[]).push([[0],{139:function(e,t,c){},142:function(e,t){},144:function(e,t){},151:function(e,t,c){},152:function(e,t,c){},160:function(e,t){},162:function(e,t){},189:function(e,t){},191:function(e,t){},192:function(e,t){},197:function(e,t){},199:function(e,t){},218:function(e,t){},230:function(e,t){},233:function(e,t){},263:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(132),s=c.n(a),l=(c(139),c(19)),o=c(50),r=c(6),j=c(42),d=c(5),b=c(32),u=c.n(b),h=c(24),O=c.n(h),v=c(0),f=function(e){return Object(v.jsxs)("div",{className:"row border-line",children:[Object(v.jsx)("div",{className:"updated-time",children:O()().format("HH:MM:SS")}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.date}),Object(v.jsx)("div",{children:e.vaccine}),Object(v.jsx)("div",{className:e.available_capacity>0?"green":"red",children:e.available_capacity})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:e.pincode}),Object(v.jsx)("div",{children:e.session_id})]})]})]})};var x=function(e){var t=e.loading,c=e.slotsList18,n=e.slotsList45,i=e.availableSlots18,a=e.availableSlots45;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (18+)"}),0===i.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:i.map(f)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Centers (18+)"}),t?Object(v.jsx)("div",{className:"loader",children:"Fetching data..."}):Object(v.jsx)("div",{children:c.map(f)})]})]}),Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (45+)"}),0===a.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:a.map(f)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Centers (45+)"}),t?Object(v.jsx)("div",{className:"loader",children:"Fetching data..."}):Object(v.jsx)("div",{children:n.map(f)})]})]})]})},m=c(134),p=c(51);c(151);var g=function(e){var t=e.className,c=void 0===t?"":t,n=e.varient,i=void 0===n?"regular":n,a=e.children,s=e.label,r=Object(o.a)(e,["className","varient","children","label"]);return Object(v.jsx)("button",Object(l.a)(Object(l.a)({class:"button -".concat(i," center ").concat(c)},r),{},{children:a||s}))},N=function(e){return Object(v.jsxs)("div",{className:"row border-line",children:[Object(v.jsx)("div",{className:"updated-time",children:O()().format("HH:MM:SS")}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.date}),Object(v.jsx)("div",{children:e.vaccine}),Object(v.jsx)("div",{className:e.available_capacity>0?"green":"red",children:e.available_capacity})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:e.pincode}),Object(v.jsx)("div",{children:e.session_id})]})]})]})},S=function(e){var t=u.a.getVoiceByName("Alex");new u.a({voice:t,pitch:1,rate:1}).write(e)};var y=function(e){var t=e.availableSlots18,c=(e.availableSlots45,e.token),i=e.setToken,a=Object(n.useState)([]),s=Object(r.a)(a,2),l=s[0],o=s[1],j=Object(n.useState)([]),d=Object(r.a)(j,2),b=d[0],u=d[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),x=f[0],y=f[1],k=Object(n.useState)(!1),_=Object(r.a)(k,2),w=(_[0],_[1]),C=Object(n.useState)(null),I=Object(r.a)(C,2),A=I[0],B=I[1];Object(n.useEffect)((function(){var e=setInterval((function(){E()}),11e4);return setTimeout((function(){S("Session expired")}),84e4),function(){clearTimeout(e)}}),[]),Object(n.useEffect)((function(){if(t.length>0&&b.length&&x){var e=!1;t.forEach((function(t){t.available_capacity>=b.length&&!e&&(e=!0,T(t))}))}}),[t]),Object(n.useEffect)((function(){E()}),[c]);var E=function(){c&&fetch("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{headers:{authorization:"Bearer "+c}}).then((function(e){return e.json()})).then((function(e){o(e.beneficiaries)})).catch((function(e){console.log(e),i(null),S()}))},T=function(e){(c||0!==b.length)&&(w(!0),fetch("https://cdn-api.co-vin.in/api/v2/appointment/schedule",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+c},"content-type":"application/json",mode:"cors",body:JSON.stringify({dose:1,session_id:e.session_id,center_id:e.center_id,slot:e.slots[0],beneficiaries:b})}).then((function(e){return e.json()})).then((function(e){B(e),u([]),S("Your booking is successfully completed")})).catch((function(e){return console.log(e)})).finally((function(){w(!1),E(),y(!1)})))},Y=function(e){0!==b.length?y(e):y(!1)};return console.log(x),Object(v.jsxs)(v.Fragment,{children:[A&&Object(v.jsx)("div",{className:"banner success",children:"Your booking is successfully completed"}),Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (18+)"}),0===t.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:t.map(N)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Beneficiary Details"}),c?Object(v.jsxs)("div",{style:{padding:10},children:[Object(v.jsxs)("div",{children:[b.length," Selected"," "]}),l.map((function(e){var t=parseInt(O()().format("YYYY"))-parseInt(e.birth_year);return t>=45?null:Object(v.jsxs)("div",{className:"row border-line be-info",children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{disabled:x,type:"checkbox",onChange:function(t){return function(e,t){var c=Object(p.a)(b);e.target.checked?(c.push(t.beneficiary_reference_id),c=Object(p.a)(Object(m.a)(Array,Object(p.a)(new Set(c))))):c=c.filter((function(e){return t.beneficiary_reference_id!==e})),u(c)}(t,e)},checked:-1!==b.indexOf(e.beneficiary_reference_id)})}),Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:t}),Object(v.jsxs)("div",{children:[e.appointments.length," ","appointments"]})]})})),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(g,{label:"Auto Book",onClick:function(){Y(!0)}}),Object(v.jsx)(g,{label:"cancel",onClick:function(){Y(!1)}})]}),Object(v.jsx)("div",{children:x?"Please wait until automatic booking complete.":"Please select Beneficiary's and click on schedule"})]}):Object(v.jsx)("div",{className:"loader error",children:"Please Login"})]})]})]})};c(152);var k=function(e){var t=e.token,c=Object(n.useState)({state:16,district:29}),i=Object(r.a)(c,2),a=i[0];i[1],Object(n.useEffect)((function(){s(),l()}),[]);var s=function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},l=function(){a.state&&fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+a.state,{headers:{"content-type":"application/json",Authorization:"Bearer "+t},mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))};return Object(v.jsx)("div",{})},_=c(78),w=c.n(_);var C=function(e){var t=e.setToken,c=Object(n.useState)(null),i=Object(r.a)(c,2),a=i[0],s=i[1],o=Object(n.useState)(null),j=Object(r.a)(o,2),d=j[0],b=j[1],u=Object(n.useState)({}),h=Object(r.a)(u,2),O=h[0],f=h[1];return Object(v.jsxs)("div",{children:[!O.txnId&&Object(v.jsxs)("div",{className:"row login",children:[Object(v.jsx)("div",{children:"Mobile No. "}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"tel",value:a,name:"mobile",onChange:function(e){return s(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(g,{label:"Submit",onClick:function(){a&&fetch("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",{body:JSON.stringify({mobile:a,secret:"U2FsdGVkX1/3I5UgN1RozGJtexc1kfsaCKPadSux9LY+cVUADlIDuKn0wCN+Y8iB4ceu6gFxNQ5cCfjm1BsmRQ=="}),headers:{"content-type":"application/json"},method:"POST",mode:"cors",credentials:"omit"}).then((function(e){return e.json()})).then((function(e){console.log(e),f({txnId:e.txnId})})).catch((function(e){return console.log(e)}))}})})]}),O.txnId&&Object(v.jsxs)("div",{className:"row otp",children:[Object(v.jsx)("div",{children:"Enter OTP "}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"number",value:d,name:"mobile",onChange:function(e){return b(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(g,{label:"Submit",onClick:function(){return function(){if(d){var e=w.a.SHA256(d).toString(w.a.enc.Hex);fetch("https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",{body:JSON.stringify({otp:e,txnId:O.txnId}),headers:{"content-type":"application/json"},method:"POST",mode:"cors",credentials:"omit"}).then((function(e){return e.json()})).then((function(e){console.log(e),f(Object(l.a)(Object(l.a)({},O),{},{token:e.token})),t&&t(e.token)})).catch((function(e){return console.log(e)}))}}()}})})]})]})};var I=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),s=Object(r.a)(a,2),b=s[0],h=s[1],f=Object(n.useState)([]),m=Object(r.a)(f,2),p=m[0],N=m[1],S=Object(n.useState)([]),_=Object(r.a)(S,2),w=_[0],I=_[1],A=Object(n.useState)([]),B=Object(r.a)(A,2),E=B[0],T=B[1],Y=Object(n.useState)([]),M=Object(r.a)(Y,2),P=M[0],L=M[1],H=Object(n.useState)(!0),D=Object(r.a)(H,2),J=D[0],F=D[1],z=Object(n.useState)(!1),V=Object(r.a)(z,2),U=V[0],G=V[1],K=function(){h(!0);var e=O()().format("DD-MM-YYYY");fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=294&date="+e).then((function(e){return e.json()})).then((function(e){var t=[],c=[],n=[],i=[];e.centers.forEach((function(e){var a=e.sessions,s=Object(o.a)(e,["sessions"]);a.forEach((function(e){var a=e.min_age_limit,o=e.available_capacity,r=Object(l.a)(Object(l.a)({},s),e);a<45?(t.push(r),o>0&&c.push(r)):(n.push(r),o>0&&i.push(r))}))})),N(t),I(c),T(n),L(i)})).catch((function(e){return console.log(e)})).finally((function(){return h(!1)}))};Object(n.useEffect)((function(){w.length>0&&J&&Q("18+")}),[w]),Object(n.useEffect)((function(){P.length>0&&U&&Q("45+")}),[P]),Object(n.useEffect)((function(){try{var e=sessionStorage.getItem("token");i(e)}catch(c){console.log(c)}K();var t=setInterval((function(){return K()}),2e3);return function(){clearTimeout(t)}}),[]);var Q=function(e){var t=u.a.getVoiceByName("Alex");new u.a({voice:t,pitch:1,rate:1}).write("Covid vaccines are available for "+e)},R=function(e){i(e),sessionStorage.setItem("token",e)};return Object(v.jsx)(j.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav-area",children:[Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/slots_available",children:"Slots available"})}),Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/automatic_booking",children:"Booking"})})]})}),Object(v.jsx)("div",{children:!c&&Object(v.jsx)(C,{setToken:R})}),Object(v.jsxs)("div",{className:"volume-controll",children:[Object(v.jsxs)(g,{onClick:function(){return F(!J)},className:"icon-button",children:[Object(v.jsx)("span",{children:"18+"}),Object(v.jsx)("i",{className:"fa fa-volume-".concat(J?"up":"off")})]}),Object(v.jsxs)(g,{onClick:function(){return G(!U)},className:"icon-button",children:[Object(v.jsx)("span",{children:"45+"}),Object(v.jsx)("i",{className:"fa fa-volume-".concat(U?"up":"off")})]})]})]}),Object(v.jsx)(k,{token:c}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/slots_available",children:Object(v.jsx)(x,{loading:b,slotsList18:p,slotsList45:E,availableSlots18:w,availableSlots45:P})}),Object(v.jsx)(d.a,{path:"/automatic_booking",children:Object(v.jsx)(y,{availableSlots18:w,availableSlots45:P,token:c,setToken:R})}),Object(v.jsx)(d.a,{path:"/",children:Object(v.jsx)(x,{loading:b,slotsList18:p,slotsList45:E,availableSlots18:w,availableSlots45:P})})]})]})})};s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[263,1,2]]]);
//# sourceMappingURL=main.cc52ff99.chunk.js.map