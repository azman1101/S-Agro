(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9cOJ":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("ZZ/e"),i=u("Gyf/");class o{constructor(l,n){this.toastController=l,this.ws=n,this.historyhumidity=[],this.historymoisture=[],this.historytemperature=[]}getTemp(){return this.ws.getTemp()}gethumidity(){return this.ws.gethumidity()}getmoisture(){return this.ws.getmoisture()}ngOnInit(){this.temperature=7,this.addToHistory()}addToHistory(){let l=this;setInterval(function(){let n=l.ws.getTemp(),u=l.ws.gethumidity(),e=l.ws.getmoisture();if(n){let t=new Date,i=(t.getDate()<10?"0"+t.getDate():t.getDate())+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds());l.historytemperature.push({timestamp:i,level:n,level1:u,level2:e})}},1e3)}}class r{}var b=u("pMnS"),s=u("oBZk"),c=u("SVse"),h=e.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function a(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,13,"ion-row",[],null,null,null,s.O,s.s)),e.qb(1,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(3,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(4,0,[" "," "])),(l()(),e.rb(5,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(6,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(7,0,[" "," "])),(l()(),e.rb(8,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(9,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(10,0,[" "," "])),(l()(),e.rb(11,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(12,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(13,0,[" "," "]))],function(l,n){l(n,3,0,"12"),l(n,6,0,"12"),l(n,9,0,"12"),l(n,12,0,"12")},function(l,n){var u=n.component;l(n,4,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].timestamp),l(n,7,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level),l(n,10,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level1),l(n,13,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level2)})}function m(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,10,"ion-header",[],null,null,null,s.G,s.k)),e.qb(1,49152,null,0,t.y,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-toolbar",[["color","dark"]],null,null,null,s.R,s.v)),e.qb(3,49152,null,0,t.yb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.x,s.b)),e.qb(5,49152,null,0,t.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.L,s.q)),e.qb(7,49152,null,0,t.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,2,"ion-title",[],null,null,null,s.Q,s.u)),e.qb(9,49152,null,0,t.wb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Sensor Information"])),(l()(),e.rb(11,0,null,null,76,"ion-content",[["color","light"],["padding",""]],null,null,null,s.E,s.i)),e.qb(12,49152,null,0,t.r,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(13,0,null,0,74,"ion-grid",[],null,null,null,s.F,s.j)),e.qb(14,49152,null,0,t.x,[e.h,e.k,e.x],null,null),(l()(),e.rb(15,0,null,0,29,"ion-row",[["align-items-center",""],["justify-content-center",""]],null,null,null,s.O,s.s)),e.qb(16,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(17,0,null,0,13,"ion-col",[],null,null,null,s.D,s.h)),e.qb(18,49152,null,0,t.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(19,0,null,0,11,"ion-card",[["color","medium"]],null,null,null,s.C,s.c)),e.qb(20,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(21,0,null,0,4,"ion-card-header",[],null,null,null,s.z,s.e)),e.qb(22,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(24,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["CURRENT TEMPERATURE"])),(l()(),e.rb(26,0,null,0,4,"ion-card-content",[],null,null,null,s.y,s.d)),e.qb(27,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(28,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(29,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(30,0,["",""])),(l()(),e.rb(31,0,null,0,13,"ion-col",[],null,null,null,s.D,s.h)),e.qb(32,49152,null,0,t.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(33,0,null,0,11,"ion-card",[["color","medium"]],null,null,null,s.C,s.c)),e.qb(34,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(35,0,null,0,4,"ion-card-header",[],null,null,null,s.z,s.e)),e.qb(36,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(37,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(38,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["CURRENT HUMIDITY"])),(l()(),e.rb(40,0,null,0,4,"ion-card-content",[],null,null,null,s.y,s.d)),e.qb(41,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(42,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(43,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(44,0,["",""])),(l()(),e.rb(45,0,null,0,13,"ion-row",[["align-items-center",""],["justify-content-center",""]],null,null,null,s.O,s.s)),e.qb(46,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(47,0,null,0,11,"ion-card",[["color","medium"]],null,null,null,s.C,s.c)),e.qb(48,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(49,0,null,0,4,"ion-card-header",[],null,null,null,s.z,s.e)),e.qb(50,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(51,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(52,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["CURRENT SOIL MOISTURE"])),(l()(),e.rb(54,0,null,0,4,"ion-card-content",[],null,null,null,s.y,s.d)),e.qb(55,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(56,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(57,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(58,0,["",""])),(l()(),e.rb(59,0,null,0,28,"ion-col",[],null,null,null,s.D,s.h)),e.qb(60,49152,null,0,t.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(61,0,null,0,26,"ion-card",[["color","medium"]],null,null,null,s.C,s.c)),e.qb(62,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(63,0,null,0,4,"ion-card-header",[],null,null,null,s.z,s.e)),e.qb(64,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(65,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,s.A,s.f)),e.qb(66,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["REPORTS"])),(l()(),e.rb(68,0,null,0,19,"ion-card-content",[],null,null,null,s.y,s.d)),e.qb(69,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(70,0,null,0,17,"ion-grid",[],null,null,null,s.F,s.j)),e.qb(71,49152,null,0,t.x,[e.h,e.k,e.x],null,null),(l()(),e.rb(72,0,null,0,13,"ion-row",[],null,null,null,s.O,s.s)),e.qb(73,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(74,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(75,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Timestamp "])),(l()(),e.rb(77,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(78,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Temperature "])),(l()(),e.rb(80,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(81,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Soil Humidity "])),(l()(),e.rb(83,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,s.D,s.h)),e.qb(84,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Soil Moisture "])),(l()(),e.gb(16777216,null,0,1,null,a)),e.qb(87,278528,null,0,c.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,12,0,"light"),l(n,20,0,"medium"),l(n,34,0,"medium"),l(n,48,0,"medium"),l(n,62,0,"medium"),l(n,75,0,"12"),l(n,78,0,"12"),l(n,81,0,"12"),l(n,84,0,"12"),l(n,87,0,u.historytemperature)},function(l,n){var u=n.component;l(n,30,0,u.getTemp()?""+u.getTemp():"Reading..."),l(n,44,0,u.gethumidity()?""+u.gethumidity():"Reading..."),l(n,58,0,u.getmoisture()?""+u.getmoisture():"Reading...")})}function d(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-info",[],null,null,null,m,h)),e.qb(1,114688,null,0,o,[t.Hb,i.a],null,null)],function(l,n){l(n,1,0)},null)}var x=e.nb("app-info",o,d,{},{},[]),q=u("s7LF"),g=u("iInd");u.d(n,"InfoPageModuleNgFactory",function(){return k});var k=e.ob(r,[],function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[b.a,x]],[3,e.j],e.v]),e.Ab(4608,c.j,c.i,[e.s,[2,c.p]]),e.Ab(4608,q.c,q.c,[]),e.Ab(4608,t.a,t.a,[e.x,e.g]),e.Ab(4608,t.Cb,t.Cb,[t.a,e.j,e.p]),e.Ab(4608,t.Fb,t.Fb,[t.a,e.j,e.p]),e.Ab(1073742336,c.b,c.b,[]),e.Ab(1073742336,q.b,q.b,[]),e.Ab(1073742336,q.a,q.a,[]),e.Ab(1073742336,t.Ab,t.Ab,[]),e.Ab(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,g.k,function(){return[[{path:"",component:o}]]},[])])})}}]);