(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"ANN+":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("ZZ/e"),i=u("Gyf/");class r{constructor(l,n){this.toastController=l,this.ws=n,this.historyhumidity=[],this.historymoisture=[],this.historytemperature=[]}getTemp(){return this.ws.getTemp()}gethumidity(){return this.ws.gethumidity()}getmoisture(){return this.ws.getmoisture()}ngOnInit(){this.temperature=7,this.addToHistory()}addToHistory(){let l=this;setInterval(function(){let n=l.ws.getTemp(),u=l.ws.gethumidity(),e=l.ws.getmoisture();if(n){let t=new Date,i=(t.getDate()<10?"0"+t.getDate():t.getDate())+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds());l.historytemperature.push({timestamp:i,level:n,level1:u,level2:e})}},1e3)}}class o{}var s=u("pMnS"),b=u("oBZk"),h=u("SVse"),a=e.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function c(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,13,"ion-row",[],null,null,null,b.O,b.s)),e.qb(1,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(3,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(4,0,[" "," "])),(l()(),e.rb(5,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(6,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(7,0,[" "," "])),(l()(),e.rb(8,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(9,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(10,0,[" "," "])),(l()(),e.rb(11,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(12,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(13,0,[" "," "]))],function(l,n){l(n,3,0,"12"),l(n,6,0,"12"),l(n,9,0,"12"),l(n,12,0,"12")},function(l,n){var u=n.component;l(n,4,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].timestamp),l(n,7,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level),l(n,10,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level1),l(n,13,0,u.historytemperature[u.historytemperature.length-(n.context.index+1)].level2)})}function m(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,6,"ion-header",[],null,null,null,b.G,b.k)),e.qb(1,49152,null,0,t.y,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,b.R,b.v)),e.qb(3,49152,null,0,t.yb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,b.Q,b.u)),e.qb(5,49152,null,0,t.wb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Sensor Report"])),(l()(),e.rb(7,0,null,null,32,"ion-content",[["color","light"],["padding",""]],null,null,null,b.E,b.i)),e.qb(8,49152,null,0,t.r,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(9,0,null,0,30,"ion-grid",[],null,null,null,b.F,b.j)),e.qb(10,49152,null,0,t.x,[e.h,e.k,e.x],null,null),(l()(),e.rb(11,0,null,0,28,"ion-col",[],null,null,null,b.D,b.h)),e.qb(12,49152,null,0,t.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,26,"ion-card",[["color","medium"]],null,null,null,b.C,b.c)),e.qb(14,49152,null,0,t.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(15,0,null,0,4,"ion-card-header",[],null,null,null,b.z,b.e)),e.qb(16,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(17,0,null,0,2,"ion-card-subtitle",[["class","ion-text-center"]],null,null,null,b.A,b.f)),e.qb(18,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["REPORTS"])),(l()(),e.rb(20,0,null,0,19,"ion-card-content",[],null,null,null,b.y,b.d)),e.qb(21,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(22,0,null,0,17,"ion-grid",[],null,null,null,b.F,b.j)),e.qb(23,49152,null,0,t.x,[e.h,e.k,e.x],null,null),(l()(),e.rb(24,0,null,0,13,"ion-row",[],null,null,null,b.O,b.s)),e.qb(25,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.rb(26,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(27,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Timestamp "])),(l()(),e.rb(29,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(30,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Temperature "])),(l()(),e.rb(32,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(33,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Soil Humidity "])),(l()(),e.rb(35,0,null,0,2,"ion-col",[["size","12"],["size-sm",""]],null,null,null,b.D,b.h)),e.qb(36,49152,null,0,t.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Gb(-1,0,[" Soil Moisture "])),(l()(),e.gb(16777216,null,0,1,null,c)),e.qb(39,278528,null,0,h.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,8,0,"light"),l(n,14,0,"medium"),l(n,27,0,"12"),l(n,30,0,"12"),l(n,33,0,"12"),l(n,36,0,"12"),l(n,39,0,u.historytemperature)},null)}function p(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-report",[],null,null,null,m,a)),e.qb(1,114688,null,0,r,[t.Hb,i.a],null,null)],function(l,n){l(n,1,0)},null)}var g=e.nb("app-report",r,p,{},{},[]),d=u("s7LF"),x=u("iInd");u.d(n,"ReportPageModuleNgFactory",function(){return z});var z=e.ob(o,[],function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[s.a,g]],[3,e.j],e.v]),e.Ab(4608,h.j,h.i,[e.s,[2,h.p]]),e.Ab(4608,d.c,d.c,[]),e.Ab(4608,t.a,t.a,[e.x,e.g]),e.Ab(4608,t.Cb,t.Cb,[t.a,e.j,e.p]),e.Ab(4608,t.Fb,t.Fb,[t.a,e.j,e.p]),e.Ab(1073742336,h.b,h.b,[]),e.Ab(1073742336,d.b,d.b,[]),e.Ab(1073742336,d.a,d.a,[]),e.Ab(1073742336,t.Ab,t.Ab,[]),e.Ab(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),e.Ab(1073742336,o,o,[]),e.Ab(1024,x.k,function(){return[[{path:"",component:r}]]},[])])})}}]);