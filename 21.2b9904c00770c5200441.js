(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2Zt5":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var b=e("XApm");class t extends b.h{constructor(l,n){super(l,n),this.kind="blocker"}}},D0EO:function(l,n,e){"use strict";e.d(n,"a",function(){return b});class b{}},Dt1P:function(l,n,e){"use strict";e.r(n);var b=e("kZht"),t=e("D57K"),a=e("cc5W"),u=e("XApm");e("JRn2");const i=(()=>{return t.a([Object(a.c)("pbl-block-ui-example",{title:"Block UI: Automatic"})],class{constructor(l){this.datasource=l,this.columns=Object(u.j)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(u.k)().onTrigger(()=>this.datasource.getPeople(1e3)).create()}refresh(){this.ds.refresh()}})})(),c=(()=>{return t.a([Object(a.c)("pbl-manual-example",{title:"Block UI: Manual"})],class{constructor(l){this.datasource=l,this.columns=Object(u.j)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(u.k)().onTrigger(()=>this.datasource.getPeople(1e3)).create()}})})(),o=(()=>{return t.a([Object(a.a)(i,c)],class{})})();var s=e("C9Ky"),r=e("pLqg"),d=e("aM4+"),p=e("CTcY"),h=e("7KE4"),m=e("EsQC"),k=e("FxgA"),A=e("2Zt5"),f=e("TEiM"),g=e("ibhO"),_=e("lpRu"),U=e("HZcV"),v=e("iHGu"),C=e("8Y4T"),j=e("uJF3"),O=e("R3BP"),x=e("Gien"),P=e("8JnZ"),R=e("owzC"),B=e("zRZK"),w=b.qb({encapsulation:2,styles:[[""]],data:{}});function S(l){return b.Mb(0,[(l()(),b.sb(0,0,null,null,2,"div",[["class","pbl-ngrid-ui-block"]],null,null,null,null,null)),(l()(),b.sb(1,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,h.b,h.a)),b.rb(2,4374528,null,0,m.b,[b.l,b.z,[2,k.a],[2,m.a]],{mode:[0,"mode"]},null)],function(l,n){l(n,2,0,"indeterminate")},function(l,n){l(n,1,0,"indeterminate"===b.Cb(n,2).mode||"query"===b.Cb(n,2).mode?null:b.Cb(n,2).value,b.Cb(n,2).mode,b.Cb(n,2)._isNoopAnimation)})}function E(l){return b.Mb(2,[(l()(),b.hb(0,null,null,1,null,S)),b.rb(1,212992,null,0,A.a,[b.M,f.a],null,null),(l()(),b.sb(2,16777216,null,null,6,"pbl-ngrid",[["blockUi",""]],null,null,null,g.b,g.a)),b.Hb(5120,null,_.a,U.b,[U.a]),b.Hb(5120,null,v.a,U.c,[U.a]),b.Hb(131584,null,f.a,f.a,[[3,f.a]]),b.rb(6,6209536,null,0,U.a,[b.r,b.P,b.l,b.s,b.z,b.h,C.b,f.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),b.Hb(1024,null,j.b,U.d,[U.a]),b.rb(8,147456,null,0,O.a,[U.a,j.b],{blockUi:[0,"blockUi"]},null),(l()(),b.sb(9,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var b=!0;return"click"===n&&(b=!1!==l.component.refresh()&&b),b},x.d,x.b)),b.rb(10,180224,null,0,P.b,[b.l,R.h,[2,k.a]],null,null),(l()(),b.Kb(-1,0,["Refresh"]))],function(l,n){var e=n.component;l(n,1,0),l(n,6,0,e.ds,e.columns),l(n,8,0,"")},function(l,n){l(n,9,0,b.Cb(n,10).disabled||null,"NoopAnimations"===b.Cb(n,10)._animationMode)})}function H(l){return b.Mb(0,[(l()(),b.sb(0,0,null,null,1,"pbl-block-ui-example",[],null,null,null,E,w)),b.rb(1,49152,null,0,i,[B.a],null,null)],null,null)}var M=b.ob("pbl-block-ui-example",i,H,{},{},[]),I=e("f8B5"),y=e("0S3s"),D=e("4rR8"),V=e("An66"),q=b.qb({encapsulation:2,styles:[[""]],data:{}});function K(l){return b.Mb(0,[(l()(),b.sb(0,0,null,null,2,"div",[["class","pbl-ngrid-ui-block"]],null,null,null,null,null)),(l()(),b.sb(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,I.b,I.a)),b.rb(2,49152,null,0,y.d,[b.l,D.a,[2,V.e],[2,k.a],y.a],null,null)],null,function(l,n){l(n,1,0,b.Cb(n,2)._noopAnimations,b.Cb(n,2).diameter,b.Cb(n,2).diameter)})}function T(l){return b.Mb(2,[(l()(),b.sb(0,16777216,null,null,8,"pbl-ngrid",[["blockUi","false"]],null,null,null,g.b,g.a)),b.Hb(5120,null,_.a,U.b,[U.a]),b.Hb(5120,null,v.a,U.c,[U.a]),b.Hb(131584,null,f.a,f.a,[[3,f.a]]),b.rb(4,6209536,null,0,U.a,[b.r,b.P,b.l,b.s,b.z,b.h,C.b,f.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),b.Hb(1024,null,j.b,U.d,[U.a]),b.rb(6,147456,[["blockUi",4]],0,O.a,[U.a,j.b],{blockUi:[0,"blockUi"]},null),(l()(),b.hb(0,null,0,1,null,K)),b.rb(8,212992,null,0,A.a,[b.M,f.a],null,null),(l()(),b.sb(9,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=0!=(b.Cb(l,6).blockUi=!b.Cb(l,6).blockUi)&&t),t},x.d,x.b)),b.rb(10,180224,null,0,P.b,[b.l,R.h,[2,k.a]],null,null),(l()(),b.Kb(-1,0,["Toggle Block UI (plugin instance)"]))],function(l,n){var e=n.component;l(n,4,0,e.ds,e.columns),l(n,6,0,"false"),l(n,8,0)},function(l,n){l(n,9,0,b.Cb(n,10).disabled||null,"NoopAnimations"===b.Cb(n,10)._animationMode)})}function z(l){return b.Mb(0,[(l()(),b.sb(0,0,null,null,1,"pbl-manual-example",[],null,null,null,T,q)),b.rb(1,49152,null,0,c,[B.a],null,null)],null,null)}var Z=b.ob("pbl-manual-example",c,z,{},{},[]),F=e("76xf"),W=e("OcC5"),J=e("ApNh"),N=e("D4FV"),Q=e("pOQZ"),X=e("aFla"),G=e("zab8"),L=e("ENSU"),Y=e("Sgnd"),$=e("2ob+"),ll=e("1VvW"),nl=e("DiCn"),el=e("qBwE"),bl=e("9Z2Q"),tl=e("S/D4"),al=e("a+5/"),ul=e("tBgR"),il=e("1PzT"),cl=e("dFIu"),ol=e("uWIS"),sl=e("Lv2H"),rl=e("9qA3"),dl=e("SWcI"),pl=e("kiRk"),hl=e("nTHA"),ml=e("FJu8"),kl=e("pDuH"),Al=e("D0EO"),fl=e("x8eK");e.d(n,"BlockUiExampleModuleNgFactory",function(){return gl});var gl=b.pb(o,[],function(l){return b.zb([b.Ab(512,b.j,b.cb,[[8,[s.a,r.a,d.a,p.a,M,Z]],[3,b.j],b.x]),b.Ab(4608,V.q,V.p,[b.u,[2,V.H]]),b.Ab(5120,b.b,function(l,n){return[F.h(l,n)]},[V.e,b.B]),b.Ab(4608,W.c,W.c,[]),b.Ab(4608,J.d,J.d,[]),b.Ab(4608,N.c,N.c,[N.i,N.e,b.j,N.h,N.f,b.r,b.z,V.e,Q.b,[2,V.k]]),b.Ab(5120,N.j,N.k,[N.c]),b.Ab(5120,X.c,X.k,[N.c]),b.Ab(5120,G.b,G.c,[N.c]),b.Ab(4608,L.e,J.e,[[2,J.i],[2,J.n]]),b.Ab(1073742336,V.c,V.c,[]),b.Ab(1073742336,Q.a,Q.a,[]),b.Ab(1073742336,J.n,J.n,[[2,J.f],[2,L.f]]),b.Ab(1073742336,D.b,D.b,[]),b.Ab(1073742336,J.y,J.y,[]),b.Ab(1073742336,P.c,P.c,[]),b.Ab(1073742336,y.c,y.c,[]),b.Ab(1073742336,m.c,m.c,[]),b.Ab(1073742336,F.b,F.b,[]),b.Ab(1073742336,Y.e,Y.e,[]),b.Ab(1073742336,$.b,$.b,[]),b.Ab(1073742336,ll.r,ll.r,[[2,ll.x],[2,ll.o]]),b.Ab(1073742336,nl.h,nl.h,[]),b.Ab(1073742336,W.d,W.d,[]),b.Ab(1073742336,el.d,el.d,[]),b.Ab(1073742336,bl.c,bl.c,[]),b.Ab(1073742336,tl.c,tl.c,[]),b.Ab(1073742336,al.c,al.c,[]),b.Ab(1073742336,ul.e,ul.e,[]),b.Ab(1073742336,N.g,N.g,[]),b.Ab(1073742336,X.j,X.j,[]),b.Ab(1073742336,X.g,X.g,[]),b.Ab(1073742336,il.d,il.d,[]),b.Ab(1073742336,il.c,il.c,[]),b.Ab(1073742336,J.p,J.p,[]),b.Ab(1073742336,J.w,J.w,[]),b.Ab(1073742336,cl.a,cl.a,[]),b.Ab(1073742336,ol.c,ol.c,[]),b.Ab(1073742336,R.a,R.a,[]),b.Ab(1073742336,sl.k,sl.k,[]),b.Ab(1073742336,rl.b,rl.b,[]),b.Ab(1073742336,G.e,G.e,[]),b.Ab(1073742336,dl.c,dl.c,[]),b.Ab(1073742336,pl.q,pl.q,[]),b.Ab(131584,f.a,f.a,[[3,f.a]]),b.Ab(1073742336,hl.b,hl.b,[b.x,f.a,[6,hl.a]]),b.Ab(1073742336,ml.a,ml.a,[]),b.Ab(1073742336,kl.a,kl.a,[]),b.Ab(1073742336,Al.a,Al.a,[]),b.Ab(1073742336,fl.a,fl.a,[]),b.Ab(1073742336,o,o,[])])})},R3BP:function(l,n,e){"use strict";e.d(n,"a",function(){return c});var b=e("D57K"),t=e("9bRT"),a=e("WT5v"),u=e("SKbq"),i=e("XApm");const c=(()=>{return b.a([Object(i.i)({id:"blockUi"}),Object(u.a)()],class{constructor(l,n){this.table=l,this._blockInProgress=!1,this._removePlugin=n.setPlugin("blockUi",this),l.registry.changes.subscribe(l=>{for(const n of l)switch(n.type){case"blocker":this.setupBlocker()}}),n.events.subscribe(l=>{if("onDataSource"===l.kind){const{prev:n,curr:e}=l;n&&u.a.kill(this,n),e.onSourceChanging.pipe(Object(u.a)(this,e)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),e.onSourceChanged.pipe(Object(u.a)(this,e)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(l){let n=Object(a.c)(l);!n||"auto"!==l&&""!==l||(n="auto"),Object(t.a)(l)&&this._blockUi!==l?(Object(t.a)(this._blockUi)&&u.a.kill(this,this._blockUi),this._blockUi=l,l.pipe(Object(u.a)(this,this._blockUi)).subscribe(l=>{this._blockInProgress=l,this.setupBlocker()})):this._blockUi!==n&&(this._blockUi=n,"auto"!==n&&(this._blockInProgress=n,this.setupBlocker()))}ngOnDestroy(){this._removePlugin(this.table)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const l=this.table.registry.getSingle("blocker");l&&(this._blockerEmbeddedVRef=this.table.createView("afterContent",l.tRef,{$implicit:this.table}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.table.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}})})()},x8eK:function(l,n,e){"use strict";e.d(n,"a",function(){return b});class b{}}}]);