(this.webpackJsonpcovid_slots=this.webpackJsonpcovid_slots||[]).push([[0],{139:function(e,t,c){},142:function(e,t){},144:function(e,t){},151:function(e,t,c){},152:function(e,t,c){},160:function(e,t){},162:function(e,t){},189:function(e,t){},191:function(e,t){},192:function(e,t){},197:function(e,t){},199:function(e,t){},218:function(e,t){},230:function(e,t){},233:function(e,t){},263:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(132),s=c.n(i),l=(c(139),c(20)),r=c(50),o=c(5),j=c(42),d=c(6),b=c(32),u=c.n(b),h=c(18),O=c.n(h),v=c(0),f=function(e){return Object(v.jsxs)("div",{className:"row border-line",children:[Object(v.jsx)("div",{className:"updated-time",children:O()().format("HH:MM:SS")}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.date}),Object(v.jsx)("div",{children:e.vaccine}),Object(v.jsx)("div",{className:e.available_capacity>0?"green":"red",children:e.available_capacity})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:e.pincode}),Object(v.jsx)("div",{children:e.district_name})]})]})]})};var x=function(e){var t=e.loading,c=e.slotsList18,n=e.slotsList45,a=e.availableSlots18,i=e.availableSlots45;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (18+)"}),0===a.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:a.map(f)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Centers (18+)"}),t?Object(v.jsx)("div",{className:"loader",children:"Fetching data..."}):0===c.length?Object(v.jsx)("div",{className:"loader",children:"No Centers available"}):Object(v.jsx)("div",{children:c.map(f)})]})]}),Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (45+)"}),0===i.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:i.map(f)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Centers (45+)"}),t?Object(v.jsx)("div",{className:"loader",children:"Fetching data..."}):0===n.length?Object(v.jsx)("div",{className:"loader",children:"No Centers available"}):Object(v.jsx)("div",{children:n.map(f)})]})]})]})},m=c(134),p=c(51);c(151);var g=function(e){var t=e.className,c=void 0===t?"":t,n=e.varient,a=void 0===n?"regular":n,i=e.children,s=e.label,o=Object(r.a)(e,["className","varient","children","label"]);return Object(v.jsx)("button",Object(l.a)(Object(l.a)({class:"button -".concat(a," center ").concat(c)},o),{},{children:i||s}))},N=function(e){return Object(v.jsxs)("div",{className:"row border-line",children:[Object(v.jsx)("div",{className:"updated-time",children:O()().format("HH:MM:SS")}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.date}),Object(v.jsx)("div",{children:e.vaccine}),Object(v.jsx)("div",{className:e.available_capacity>0?"green":"red",children:e.available_capacity})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:e.pincode}),Object(v.jsx)("div",{children:e.district_name})]})]})]})},S=function(e){var t=u.a.getVoiceByName("Alex");new u.a({voice:t,pitch:1,rate:1}).write(e)};var y=function(e){var t=e.availableSlots18,c=(e.availableSlots45,e.token),a=e.setToken,i=Object(n.useState)([]),s=Object(o.a)(i,2),l=s[0],r=s[1],j=Object(n.useState)([]),d=Object(o.a)(j,2),b=d[0],u=d[1],h=Object(n.useState)(!1),f=Object(o.a)(h,2),x=f[0],y=f[1],k=Object(n.useState)(!1),_=Object(o.a)(k,2),w=(_[0],_[1]),C=Object(n.useState)(null),I=Object(o.a)(C,2),A=(I[0],I[1]),L=Object(n.useState)(null),E=Object(o.a)(L,2),Y=E[0],B=E[1];Object(n.useEffect)((function(){T();var e=setInterval((function(){T()}),11e4);return setTimeout((function(){S("Session expired")}),84e4),function(){clearTimeout(e)}}),[]),Object(n.useEffect)((function(){if(t.length>0&&b.length&&x){var e=!1;t.forEach((function(t){t.available_capacity>=b.length&&!e&&(e=!0,D(t))}))}}),[t]),Object(n.useEffect)((function(){T()}),[c]);var T=function(){c&&fetch("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{headers:{authorization:"Bearer "+c}}).then((function(e){return e.json()})).then((function(e){B(null),r(e.beneficiaries)})).catch((function(e){console.log(e),a(null),S()}))},D=function(e){if(c||0!==b.length){var t=O()().format("DD-MM-YYYY"),n=O()(t).isSame(e.date,"day"),a=0;n&&(a=function(){var e=parseInt(O()().format("HH")),t=0;return e<=7?t=0:e<=9?t=1:e<=11?t=2:e<=12&&(t=3),t}()),w(!0),fetch("https://cdn-api.co-vin.in/api/v2/appointment/schedule",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+c},"content-type":"application/json",mode:"cors",body:JSON.stringify({dose:1,session_id:e.session_id,center_id:e.center_id,slot:e.slots[a],beneficiaries:b})}).then((function(e){return e.json()})).then((function(t){t.error?(S(t.error),B({type:"error",msg:t.error})):(A(t),u([]),B({type:"success",msg:"Your booking is successfully completed"}),S("Your booking is successfully completed for "+e.date+" on "+e.slots[a]))})).catch((function(e){return console.log(e)})).finally((function(){B({type:"error",msg:"Oops!! Something went wrong please try again"}),w(!1),T(),y(!1)}))}},M=function(e){0!==b.length?y(e):y(!1)};return Object(v.jsxs)(v.Fragment,{children:[Y&&Object(v.jsx)("div",{className:"banner ".concat(Y.type),children:Y.msg}),Object(v.jsxs)("div",{className:"App-header",children:[Object(v.jsxs)("div",{className:"available-container",children:[Object(v.jsx)("h2",{className:"title",children:"Slots Available (18+)"}),0===t.length?Object(v.jsx)("div",{className:"loader",children:"No slots available"}):Object(v.jsx)("div",{children:t.map(N)})]}),Object(v.jsxs)("div",{className:"all-centers-container",children:[Object(v.jsx)("h2",{className:"title",children:"Beneficiary Details"}),c?Object(v.jsxs)("div",{style:{padding:10},children:[Object(v.jsxs)("div",{children:[b.length," Selected"," "]}),l.map((function(e){var t=parseInt(O()().format("YYYY"))-parseInt(e.birth_year);return t>=45?null:Object(v.jsxs)("div",{className:"row border-line be-info",children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{disabled:x,type:"checkbox",onChange:function(t){return function(e,t){var c=Object(p.a)(b);e.target.checked?(c.push(t.beneficiary_reference_id),c=Object(p.a)(Object(m.a)(Array,Object(p.a)(new Set(c))))):c=c.filter((function(e){return t.beneficiary_reference_id!==e})),u(c)}(t,e)},checked:-1!==b.indexOf(e.beneficiary_reference_id)})}),Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:t}),Object(v.jsxs)("div",{children:[e.appointments.length," ","appointments"]})]})})),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(g,{label:"Auto Book",onClick:function(){M(!0)}}),Object(v.jsx)(g,{label:"cancel",onClick:function(){M(!1)}})]}),Object(v.jsx)("div",{children:x?"Please wait until automatic booking complete.":"Please select Beneficiary's and click on schedule"})]}):Object(v.jsx)("div",{className:"loader error",children:"Please Login"})]})]})]})};c(152);var k=function(e){var t=e.token,c=e.setDistrictId,a=Object(n.useState)(16),i=Object(o.a)(a,2),s=i[0],l=i[1],r=Object(n.useState)(null),j=Object(o.a)(r,2),d=j[0],b=j[1],u=Object(n.useState)([]),h=Object(o.a)(u,2),O=h[0],f=h[1],x=Object(n.useState)([]),m=Object(o.a)(x,2),p=m[0],g=m[1];Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){S()}),[s]),Object(n.useEffect)((function(){d?c(d):(l(16),b(194))}),[d]);var N=function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){return e.json()})).then((function(e){e.states&&(f(e.states),16!==s||d||b(294))})).catch((function(e){return console.log(e)}))},S=function(){s&&fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+s,{headers:{"content-type":"application/json",Authorization:"Bearer "+t},mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.districts&&(g(e.districts),b(16!==s||d?e.districts[0].district_id:294))})).catch((function(e){return console.log(e)}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{children:Object(v.jsx)("select",{value:s,onChange:function(e){return l(e.target.value)},children:O.map((function(e){return Object(v.jsx)("option",{value:e.state_id,children:e.state_name})}))})}),Object(v.jsx)("div",{children:Object(v.jsx)("select",{value:d,onChange:function(e){b(e.target.value)},children:p.map((function(e){return Object(v.jsx)("option",{value:e.district_id,children:e.district_name})}))})})]})},_=c(78),w=c.n(_);var C=function(e){var t=e.setToken,c=Object(n.useState)(null),a=Object(o.a)(c,2),i=a[0],s=a[1],r=Object(n.useState)(null),j=Object(o.a)(r,2),d=j[0],b=j[1],u=Object(n.useState)({}),h=Object(o.a)(u,2),O=h[0],f=h[1];return Object(v.jsxs)("div",{children:[!O.txnId&&Object(v.jsxs)("div",{className:"row login",children:[Object(v.jsx)("div",{className:"input-label black",children:"Mobile No. "}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"tel",value:i,name:"mobile",onChange:function(e){return s(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(g,{label:"Submit",onClick:function(){i&&fetch("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",{body:JSON.stringify({mobile:i,secret:"U2FsdGVkX1/3I5UgN1RozGJtexc1kfsaCKPadSux9LY+cVUADlIDuKn0wCN+Y8iB4ceu6gFxNQ5cCfjm1BsmRQ=="}),headers:{"content-type":"application/json"},method:"POST",mode:"cors",credentials:"omit"}).then((function(e){return e.json()})).then((function(e){f({txnId:e.txnId})})).catch((function(e){return console.log(e)}))}})})]}),O.txnId&&Object(v.jsxs)("div",{className:"row otp",children:[Object(v.jsx)("div",{className:"input-label black",children:"Enter OTP "}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"number",value:d,name:"mobile",onChange:function(e){return b(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(g,{label:"Submit",onClick:function(){return function(){if(d){var e=w.a.SHA256(d).toString(w.a.enc.Hex);fetch("https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",{body:JSON.stringify({otp:e,txnId:O.txnId}),headers:{"content-type":"application/json"},method:"POST",mode:"cors",credentials:"omit"}).then((function(e){return e.json()})).then((function(e){f(Object(l.a)(Object(l.a)({},O),{},{token:e.token})),t&&t(e.token)})).catch((function(e){return console.log(e)}))}}()}})})]})]})};var I=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),b=s[0],h=s[1],f=Object(n.useState)([]),m=Object(o.a)(f,2),p=m[0],N=m[1],S=Object(n.useState)([]),_=Object(o.a)(S,2),w=_[0],I=_[1],A=Object(n.useState)([]),L=Object(o.a)(A,2),E=L[0],Y=L[1],B=Object(n.useState)([]),T=Object(o.a)(B,2),D=T[0],M=T[1],H=Object(n.useState)(!0),P=Object(o.a)(H,2),V=P[0],F=P[1],J=Object(n.useState)(!1),z=Object(o.a)(J,2),R=z[0],U=z[1],X=Object(n.useState)(294),G=Object(o.a)(X,2),K=G[0],Q=G[1],q=Object(n.useState)("ALL"),W=Object(o.a)(q,2),Z=W[0],$=W[1],ee=function(){h(!0);var e=O()().format("DD-MM-YYYY"),t="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict";t+="?district_id="+K+"&date="+e,"ALL"!==Z&&(t+="&vaccine="+Z),fetch(t).then((function(e){return e.json()})).then((function(e){var t=[],c=[],n=[],a=[];e.centers.forEach((function(e){var i=e.sessions,s=Object(r.a)(e,["sessions"]);i.forEach((function(e){var i=e.min_age_limit,r=e.available_capacity,o=Object(l.a)(Object(l.a)({},s),e);i<45?(t.push(o),r>0&&c.push(o)):(n.push(o),r>0&&a.push(o))}))})),N(t),I(c),Y(n),M(a)})).catch((function(e){return console.log(e)})).finally((function(){return h(!1)}))};Object(n.useEffect)((function(){w.length>0&&V&&te("18+")}),[w]),Object(n.useEffect)((function(){D.length>0&&R&&te("45+")}),[D]),Object(n.useEffect)((function(){try{var e=sessionStorage.getItem("token");a(e)}catch(c){console.log(c)}ee();var t=setInterval((function(){return ee()}),2e3);return function(){clearTimeout(t)}}),[K,Z]);var te=function(e){var t=u.a.getVoiceByName("Alex");new u.a({voice:t,pitch:1,rate:1}).write("Covid vaccines are available for "+e)},ce=function(e){a(e),sessionStorage.setItem("token",e)};return Object(v.jsx)(j.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav-area",children:[Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/slots_available",children:"Slots available"})}),Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/automatic_booking",children:"Booking"})})]})}),Object(v.jsx)("div",{children:!c&&Object(v.jsx)(C,{setToken:ce})}),Object(v.jsxs)("div",{className:"volume-controll",children:[Object(v.jsxs)(g,{onClick:function(){return F(!V)},className:"icon-button",children:[Object(v.jsx)("span",{children:"18+"}),Object(v.jsx)("i",{className:"fa fa-volume-".concat(V?"up":"off")})]}),Object(v.jsxs)(g,{onClick:function(){return U(!R)},className:"icon-button",children:[Object(v.jsx)("span",{children:"45+"}),Object(v.jsx)("i",{className:"fa fa-volume-".concat(R?"up":"off")})]})]})]}),Object(v.jsxs)("div",{className:"row header-baner",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(k,{token:c,setDistrictId:Q}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{className:"input-label",children:"Vaccine Type"}),Object(v.jsxs)("select",{value:Z,onChange:function(e){return $(e.target.value)},children:[Object(v.jsx)("option",{value:"ALL",children:"ALL"}),Object(v.jsx)("option",{value:"COVAXIN",children:"COVAXIN"}),Object(v.jsx)("option",{value:"COVISHIELD",children:"COVISHIELD"})]})]})]}),Object(v.jsxs)("div",{className:"row right-align my-info",children:["@ Praveen Reddy Reddivari | praveen.reddivari@gmail.com",Object(v.jsxs)("div",{className:"contact-icons",children:[Object(v.jsx)("a",{href:"https://www.linkedin.com/in/praveen-reddy-b8481b77/",target:"_blank",class:"fa fa-linkedin"}),Object(v.jsx)("a",{href:"https://www.facebook.com/praveen.reddivari",target:"_blank",class:"fa fa-facebook"}),Object(v.jsx)("a",{href:"https://twitter.com/reddivari_9",target:"_blank",class:"fa fa-twitter"})]})]})]}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/slots_available",children:Object(v.jsx)(x,{loading:b,slotsList18:p,slotsList45:E,availableSlots18:w,availableSlots45:D})}),Object(v.jsx)(d.a,{path:"/automatic_booking",children:Object(v.jsx)(y,{availableSlots18:w,availableSlots45:D,token:c,setToken:ce})}),Object(v.jsx)(d.a,{path:"/",children:Object(v.jsx)(x,{loading:b,slotsList18:p,slotsList45:E,availableSlots18:w,availableSlots45:D})})]})]})})};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[263,1,2]]]);
//# sourceMappingURL=main.bc0911c7.chunk.js.map