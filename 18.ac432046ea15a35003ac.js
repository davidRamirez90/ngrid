(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7mXA":function(t,l,e){"use strict";e.r(l);var i=e("kZht"),s=e("D57K"),o=e("cc5W"),n=e("XApm");e("JRn2");const c=(()=>{return s.a([Object(o.c)("pbl-cell-tooltip-example",{title:"Cell Tooltip"})],class{constructor(t){this.datasource=t,this.columns=Object(n.j)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"}).build(),this.ds=Object(n.k)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}})})(),a=(()=>{return s.a([Object(o.c)("pbl-custom-setup-example",{title:"Custom Setup"})],class{constructor(t){this.datasource=t,this.columns=Object(n.j)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"}).build(),this.ds=Object(n.k)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}getTooltipMessage(t){return`${t.colIndex} / ${t.rowIndex} -> ${t.rowIndex%2?"ODD":"EVEN"} ROW\n\n${t.cellTarget.innerText}`}})})(),b=(()=>{return s.a([Object(o.a)(c,a)],class{})})();var r=e("C9Ky"),u=e("pLqg"),h=e("aM4+"),p=e("CTcY"),d=e("ibhO"),g=e("lpRu"),A=e("HZcV"),k=e("iHGu"),f=e("TEiM"),m=e("8Y4T"),w=e("uJF3"),T=e("R3BP"),v=e("cUDL"),_=e("zRZK"),O=i.qb({encapsulation:2,styles:[[""]],data:{}});function S(t){return i.Mb(2,[(t()(),i.sb(0,16777216,null,null,7,"pbl-ngrid",[["blockUi",""],["cellTooltip",""],["class","pbl-ngrid-cell-ellipsis"]],null,null,null,d.b,d.a)),i.Hb(5120,null,g.a,A.b,[A.a]),i.Hb(5120,null,k.a,A.c,[A.a]),i.Hb(131584,null,f.a,f.a,[[3,f.a]]),i.rb(4,6209536,null,0,A.a,[i.r,i.P,i.l,i.s,i.z,i.h,m.b,f.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),i.Hb(1024,null,w.b,A.d,[A.a]),i.rb(6,147456,null,0,T.a,[A.a,w.b],{blockUi:[0,"blockUi"]},null),i.rb(7,147456,null,0,v.a,[A.a,i.r,w.b],{canShow:[0,"canShow"]},null)],function(t,l){var e=l.component;t(l,4,0,e.ds,e.columns),t(l,6,0,""),t(l,7,0,"")},null)}function U(t){return i.Mb(0,[(t()(),i.sb(0,0,null,null,1,"pbl-cell-tooltip-example",[],null,null,null,S,O)),i.rb(1,49152,null,0,c,[_.a],null,null)],null,null)}var j=i.ob("pbl-cell-tooltip-example",c,U,{},{},[]),P=i.qb({encapsulation:2,styles:[[".my-cell-tooltip{background:red;font-size:18px}"]],data:{}});function D(t){return i.Mb(2,[(t()(),i.sb(0,16777216,null,null,8,"pbl-ngrid",[["blockUi",""],["class","pbl-ngrid-cell-ellipsis"]],null,null,null,d.b,d.a)),i.Hb(5120,null,g.a,A.b,[A.a]),i.Hb(5120,null,k.a,A.c,[A.a]),i.Hb(131584,null,f.a,f.a,[[3,f.a]]),i.rb(4,6209536,null,0,A.a,[i.r,i.P,i.l,i.s,i.z,i.h,m.b,f.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),i.Hb(1024,null,w.b,A.d,[A.a]),i.rb(6,147456,null,0,T.a,[A.a,w.b],{blockUi:[0,"blockUi"]},null),(t()(),i.sb(7,0,null,0,1,null,null,null,null,null,null,null)),i.rb(8,147456,null,0,v.a,[A.a,i.r,w.b],{canShow:[0,"canShow"],message:[1,"message"],position:[2,"position"],tooltipClass:[3,"tooltipClass"],showDelay:[4,"showDelay"]},null)],function(t,l){var e=l.component;t(l,4,0,e.ds,e.columns),t(l,6,0,""),t(l,8,0,"",e.getTooltipMessage,"above","my-cell-tooltip","500")},null)}function y(t){return i.Mb(0,[(t()(),i.sb(0,0,null,null,1,"pbl-custom-setup-example",[],null,null,null,D,P)),i.rb(1,49152,null,0,a,[_.a],null,null)],null,null)}var C=i.ob("pbl-custom-setup-example",a,y,{},{},[]),E=e("An66"),x=e("76xf"),I=e("OcC5"),R=e("ApNh"),V=e("D4FV"),H=e("pOQZ"),K=e("aFla"),z=e("zab8"),B=e("ENSU"),L=e("Sgnd"),W=e("2ob+"),q=e("1VvW"),M=e("DiCn"),N=e("qBwE"),Z=e("4rR8"),F=e("9Z2Q"),J=e("S/D4"),Y=e("a+5/"),G=e("8JnZ"),X=e("tBgR"),$=e("1PzT"),Q=e("dFIu"),tt=e("uWIS"),lt=e("owzC"),et=e("Lv2H"),it=e("9qA3"),st=e("EsQC"),ot=e("0S3s"),nt=e("SWcI"),ct=e("kiRk"),at=e("nTHA"),bt=e("FJu8"),rt=e("pDuH"),ut=e("D0EO"),ht=e("x8eK"),pt=e("kxS8"),dt=e("VUb1");e.d(l,"CellTooltipExampleModuleNgFactory",function(){return gt});var gt=i.pb(b,[],function(t){return i.zb([i.Ab(512,i.j,i.cb,[[8,[r.a,u.a,h.a,p.a,j,C]],[3,i.j],i.x]),i.Ab(4608,E.q,E.p,[i.u,[2,E.H]]),i.Ab(5120,i.b,function(t,l){return[x.h(t,l)]},[E.e,i.B]),i.Ab(4608,I.c,I.c,[]),i.Ab(4608,R.d,R.d,[]),i.Ab(4608,V.c,V.c,[V.i,V.e,i.j,V.h,V.f,i.r,i.z,E.e,H.b,[2,E.k]]),i.Ab(5120,V.j,V.k,[V.c]),i.Ab(5120,K.c,K.k,[V.c]),i.Ab(5120,z.b,z.c,[V.c]),i.Ab(4608,B.e,R.e,[[2,R.i],[2,R.n]]),i.Ab(1073742336,E.c,E.c,[]),i.Ab(1073742336,x.b,x.b,[]),i.Ab(1073742336,H.a,H.a,[]),i.Ab(1073742336,L.e,L.e,[]),i.Ab(1073742336,W.b,W.b,[]),i.Ab(1073742336,q.r,q.r,[[2,q.x],[2,q.o]]),i.Ab(1073742336,M.h,M.h,[]),i.Ab(1073742336,I.d,I.d,[]),i.Ab(1073742336,N.d,N.d,[]),i.Ab(1073742336,Z.b,Z.b,[]),i.Ab(1073742336,F.c,F.c,[]),i.Ab(1073742336,J.c,J.c,[]),i.Ab(1073742336,R.n,R.n,[[2,R.f],[2,B.f]]),i.Ab(1073742336,Y.c,Y.c,[]),i.Ab(1073742336,R.y,R.y,[]),i.Ab(1073742336,G.c,G.c,[]),i.Ab(1073742336,X.e,X.e,[]),i.Ab(1073742336,V.g,V.g,[]),i.Ab(1073742336,K.j,K.j,[]),i.Ab(1073742336,K.g,K.g,[]),i.Ab(1073742336,$.d,$.d,[]),i.Ab(1073742336,$.c,$.c,[]),i.Ab(1073742336,R.p,R.p,[]),i.Ab(1073742336,R.w,R.w,[]),i.Ab(1073742336,Q.a,Q.a,[]),i.Ab(1073742336,tt.c,tt.c,[]),i.Ab(1073742336,lt.a,lt.a,[]),i.Ab(1073742336,et.k,et.k,[]),i.Ab(1073742336,it.b,it.b,[]),i.Ab(1073742336,z.e,z.e,[]),i.Ab(1073742336,st.c,st.c,[]),i.Ab(1073742336,ot.c,ot.c,[]),i.Ab(1073742336,nt.c,nt.c,[]),i.Ab(1073742336,ct.q,ct.q,[]),i.Ab(131584,f.a,f.a,[[3,f.a]]),i.Ab(1073742336,at.b,at.b,[i.x,f.a,[6,at.a]]),i.Ab(1073742336,bt.a,bt.a,[]),i.Ab(1073742336,rt.a,rt.a,[]),i.Ab(1073742336,ut.a,ut.a,[]),i.Ab(1073742336,ht.a,ht.a,[]),i.Ab(1073742336,pt.a,pt.a,[[3,pt.a],m.b]),i.Ab(1073742336,dt.a,dt.a,[[3,dt.a],m.b]),i.Ab(1073742336,b,b,[])])})},D0EO:function(t,l,e){"use strict";e.d(l,"a",function(){return i});class i{}},R3BP:function(t,l,e){"use strict";e.d(l,"a",function(){return a});var i=e("D57K"),s=e("9bRT"),o=e("WT5v"),n=e("SKbq"),c=e("XApm");const a=(()=>{return i.a([Object(c.i)({id:"blockUi"}),Object(n.a)()],class{constructor(t,l){this.table=t,this._blockInProgress=!1,this._removePlugin=l.setPlugin("blockUi",this),t.registry.changes.subscribe(t=>{for(const l of t)switch(l.type){case"blocker":this.setupBlocker()}}),l.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:l,curr:e}=t;l&&n.a.kill(this,l),e.onSourceChanging.pipe(Object(n.a)(this,e)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),e.onSourceChanged.pipe(Object(n.a)(this,e)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let l=Object(o.c)(t);!l||"auto"!==t&&""!==t||(l="auto"),Object(s.a)(t)&&this._blockUi!==t?(Object(s.a)(this._blockUi)&&n.a.kill(this,this._blockUi),this._blockUi=t,t.pipe(Object(n.a)(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==l&&(this._blockUi=l,"auto"!==l&&(this._blockInProgress=l,this.setupBlocker()))}ngOnDestroy(){this._removePlugin(this.table)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.table.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.table.createView("afterContent",t.tRef,{$implicit:this.table}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.table.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}})})()},VUb1:function(t,l,e){"use strict";e.d(l,"a",function(){return o});var i=e("XApm"),s=e("cUDL");class o{constructor(t,l){t||i.f.created.subscribe(t=>{const e=l.get(s.a.PLUGIN_KEY);if(e&&!0===e.autoSetAll){const l=t.controller;let e=l.events.subscribe(t=>{"onInit"===t.kind&&(l.hasPlugin(s.a.PLUGIN_KEY)||l.createPlugin(s.a.PLUGIN_KEY),e.unsubscribe(),e=void 0)})}})}}},cUDL:function(t,l,e){"use strict";e.d(l,"a",function(){return A});var i,s=e("D57K"),o=e("kZht"),n=e("WT5v"),c=e("owzC"),a=e("pOQZ"),b=e("D4FV"),r=e("tBgR"),u=e("4rR8"),h=e("zab8"),p=e("SKbq"),d=e("XApm");const g={canShow:t=>{const l=t.cellTarget.firstElementChild||t.cellTarget;return l.scrollWidth>l.offsetWidth},message:t=>t.cellTarget.innerText},A=(()=>{let t=i=class{constructor(t,l,e){this.table=t,this.injector=l,this._removePlugin=e.setPlugin("cellTooltip",this);const i=l.get(d.c);if(this.initArgs=[l.get(b.c),null,l.get(r.d),l.get(o.P),l.get(o.z),l.get(u.a),l.get(c.c),l.get(c.h),l.get(h.b),l.get(a.b),l.get(h.a)],i.onUpdate("cellTooltip").pipe(Object(p.a)(this)).subscribe(t=>this.lastConfig=t.curr),t.isInit)this.init(e);else{let t=e.events.subscribe(l=>{"onInit"===l.kind&&(this.init(e),t.unsubscribe(),t=void 0)})}}set canShow(t){this._canShow="function"==typeof t?t:""===t?void 0:Object(n.c)(t)?t=>!0:t=>!1}static create(t,l){return new i(t,l,d.f.find(t))}ngOnDestroy(){this._removePlugin(this.table),this.killTooltip()}init(t){const l=t.getPlugin("targetEvents")||t.createPlugin("targetEvents");l.cellEnter.pipe(Object(p.a)(this)).subscribe(t=>this.cellEnter(t)),l.cellLeave.pipe(Object(p.a)(this)).subscribe(t=>this.cellLeave(t))}cellEnter(t){if(this.killTooltip(),this._canShow||(this.canShow=this.lastConfig&&this.lastConfig.canShow||g.canShow),this._canShow(t)){const l=this.initArgs.slice();l[1]=new o.l(t.cellTarget),this.toolTip=new h.d(...l),this.toolTip.message=(this.message||this.lastConfig&&this.lastConfig.message||g.message)(t),this.position&&(this.toolTip.position=this.position),this.tooltipClass&&(this.toolTip.tooltipClass=this.tooltipClass),this.showDelay>=0&&(this.toolTip.showDelay=this.showDelay),this.hideDelay>=0&&(this.toolTip.hideDelay=this.hideDelay),this.toolTip.show()}}cellLeave(t){this.killTooltip()}killTooltip(){this.toolTip&&(this.toolTip.hide(),this.toolTip.ngOnDestroy(),this.toolTip=void 0)}};return t.PLUGIN_KEY="cellTooltip",i=s.a([Object(d.i)({id:"cellTooltip",factory:"create"}),Object(p.a)()],t)})()},x8eK:function(t,l,e){"use strict";e.d(l,"a",function(){return i});class i{}}}]);