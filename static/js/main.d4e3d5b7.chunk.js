(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(25),s=n.n(r),i=(n(40),n(41),n(14)),o=n(66),d=n(62),j=n(67),u=n(3);var l=function(t){var e=t.date.name,n=t.date.startDate,c=t.date.endDate,r=Date.parse(n),s=Date.parse(c),l=new Date(s),b=s-r,O=Object(a.useState)(0),f=Object(i.a)(O,2),m=f[0],x=f[1];function h(){return(Date.now()-r)/b*100}Object(a.useEffect)((function(){setInterval((function(){h()>=100?x(100):x(h())}),500)}));var g=("0"+l.getDate()).slice(-2),D=("0"+(l.getMonth()+1)).slice(-2),p="".concat(l.getFullYear(),".").concat(g,".").concat(D),v="".concat(e," on ").concat(p);return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{children:v}),Object(u.jsx)(j.a,{variant:"determinate",value:m})]})},b=n(63),O=n(24),f=n.n(O),m=Object(b.a)({textStyle:{textAlign:"center"},cardStyle:{borderRadius:4}});var x=function(){var t=m(),e=Object(a.useState)(f()().format("YYYY.MM.DD | HH[:]mm[:]ss")),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){setInterval((function(){r(f()().format("YYYY.MM.DD | HH[:]mm[:]ss"))}),1e3)})),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{className:t.cardStyle,children:Object(u.jsx)(d.a,{className:t.textStyle,variant:"h4",children:c})})})},h=n(65),g=n(64),D=[{name:"LOONA: Not Friends",startDate:"01 Sep 2021 00:00:00 EST",endDate:"2021-09-03T18:00:00.000+09:00"},{name:"LOONA: Hula Hoop",startDate:"01 Sep 2021 00:00:00 EST",endDate:"2021-09-15T18:00:00.000+09:00"},{name:"TWICE: The Feels",startDate:"23 Aug 2021 00:00:00 EST",endDate:"2021-10-01T13:00:00.000+09:00"},{name:"End of Year",startDate:"2021-01-01T00:00:00",endDate:"2022-01-01T00:00:00"}],p=Object(b.a)({boxStyle:{paddingTop:"5%",paddingBottom:"5%",paddingLeft:"5%",paddingRight:"5%"}});var v=function(){var t=p();return Object(u.jsx)(h.a,{className:t.boxStyle,children:Object(u.jsxs)(g.a,{container:!0,spacing:2,direction:"column",justifyContent:"flex-start",alignItems:"stretch",children:[Object(u.jsx)(g.a,{item:!0,xs:12,spacing:3,children:Object(u.jsx)(x,{})}),Object(u.jsx)(g.a,{container:!0,spacing:3,children:D.map((function(t){return Object(u.jsx)(g.a,{item:!0,xs:12,children:Object(u.jsx)(l,{date:t})})}))})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.d4e3d5b7.chunk.js.map