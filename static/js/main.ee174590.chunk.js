(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),o=(a(40),a(41),a(11)),i=a(63),l=a(68),d=a(64),j=a(65),u=a(69),b=a(3),f=Object(i.a)({cardStyle:{overflow:"auto",borderRadius:4},typography:{fontSize:24}});function h(e,t){return(Date.now()-e)/t*100}var m=function(e){var t=f(),a=e.date.name,c=e.date.startDate,r=e.date.endDate,s=Date.parse(c),i=Date.parse(r),m=new Date(i),O=i-s,x=Object(n.useState)(0),p=Object(o.a)(x,2),g=p[0],v=p[1],D=Object(n.useState)(0),y=Object(o.a)(D,2),S=y[0],T=y[1],M=Object(n.useState)("primary"),Y=Object(o.a)(M,2),w=Y[0],I=Y[1];Object(n.useEffect)((function(){var e=setInterval((function(){return h(s,O)>=100?(v(100),T("Countdown Finished!"),I("secondary")):(v(h(s,O)),T(function(e){var t=e-Date.now(),a=864e5,n=36e5,c=6e4,r=1e3,s=Math.floor(t/a),o=t%a,i=Math.floor(o/n),l=o%n,d=Math.floor(l/c),j=l%c,u=Math.floor(j/r);return"".concat(s," days, ").concat(i," hours, ").concat(d," mins, ").concat(u," seconds left")}(m))),function(){return clearInterval(e)}}),1e3)}),[]);var F=("0"+m.getDate()).slice(-2),N=("0"+(m.getMonth()+1)).slice(-2),C="".concat(m.getFullYear(),".").concat(N,".").concat(F),H="".concat(a),R="".concat(C);return Object(b.jsx)(l.a,{className:t.cardStyle,children:Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(j.a,{className:t.typography,children:[H," on ",R]}),Object(b.jsx)(j.a,{className:t.typography,children:S}),Object(b.jsx)(u.a,{variant:"determinate",value:g,color:w})]})})},O=a(24),x=a.n(O),p=Object(i.a)({textStyle:{textAlign:"center",fontSize:48},cardStyle:{borderRadius:4}});var g=function(){var e=p(),t=Object(n.useState)(x()().format("YYYY.MM.DD | HH[:]mm[:]ss")),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){r(x()().format("YYYY.MM.DD | HH[:]mm[:]ss"))}),1e3);return function(){return clearInterval(e)}}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{className:e.cardStyle,children:Object(b.jsx)(d.a,{children:Object(b.jsx)(j.a,{className:e.textStyle,variant:"h4",children:c})})})})},v=a(67),D=a(66),y=[{name:"End of year",startDate:"2022-01-01T00:00:00",endDate:"2023-01-01T00:00:00"},{name:"Purple Kiss: memeM",startDate:"2022-03-07T15:00:04.000Z",endDate:"2022-03-29T18:00:00.000+09:00"},{name:"ITZY: Voltage",startDate:"2022-02-23T15:00:15.000Z",endDate:"2022-04-06T00:00:00.000+09:00"},{name:"Brave Girls: THANK YOU",startDate:"2022-03-01T15:01:04.000Z",endDate:"2022-03-14T18:00:00.000+09:00"},{name:"Red Velvet: Feel My Rhythm",startDate:"2022-03-01T15:01:27.000Z",endDate:"2022-03-21T18:00:00.000+09:00"}],S=Object(i.a)({boxStyle:{paddingTop:"5%",paddingBottom:"5%",paddingLeft:"5%",paddingRight:"5%"}});var T=function(){var e=S();return Object(b.jsx)(v.a,{className:e.boxStyle,children:Object(b.jsxs)(D.a,{container:!0,spacing:4,direction:"column",justifyContent:"flex-start",alignItems:"stretch",children:[Object(b.jsx)(D.a,{item:!0,xs:12,spacing:4,children:Object(b.jsx)(g,{})}),Object(b.jsx)(D.a,{item:!0,xs:12,spacing:4,children:Object(b.jsx)(D.a,{container:!0,spacing:4,children:y.map((function(e){return Object(b.jsx)(D.a,{item:!0,xs:12,spacing:4,children:Object(b.jsx)(m,{date:e})})}))})})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),M()}},[[48,1,2]]]);
//# sourceMappingURL=main.ee174590.chunk.js.map