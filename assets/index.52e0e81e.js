import{c as a,d as e,a as t,w as s,p as o,b as n,o as r,e as c,m as d,t as i,r as m,f as l,u,g as p,h as g,i as h,F as v,j as f,k as y,l as S,n as k,q as b}from"./vendor.350f49f8.js";var P,I;(I=P||(P={})).READY="READY",I.PLAYING="PLAYING",I.PASSED="PASSED";const C=["8-ball","kronos","baked-potato","dinosaur","rocket","skinny-unicorn","that-guy","zeppelin"];function R(a){const e=[],t="abcdefghijklmnopqrstuvwxyz_=+",s=t.length;for(let o=0;o<a;o++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function _(){const a=localStorage.getItem("highestRecord");return a?+a:9999}function A(){let a=[...C,...C].map((a=>({id:R(8),flipped:!1,name:a})));for(let e=a.length;e;e-=1){const t=Math.floor(Math.random()*e),s=a[e-1];a[e-1]=a[t],a[t]=s}return a}var M=new class{tryStartGame(a,e){a===P.PLAYING&&(this.timerId=setInterval((function(){e.commit("counting")}),1e3))}tryEndGame(a,e){a===P.PASSED&&(clearInterval(this.timerId),e.commit("updateTopScore"))}};const E=Symbol(),G=a({state:()=>({nonMatchedPairs:8,highestRecord:_(),status:P.READY,cards:A(),timeCost:0}),getters:{nonMatchedPairs:a=>a.nonMatchedPairs,highestRecord:a=>a.highestRecord,status:a=>a.status,cards:a=>a.cards,timeCost:a=>a.timeCost},actions:{updateStatus:(a,e)=>{a.commit("changeStatus",e),M.tryStartGame(e,a),M.tryEndGame(e,a)}},mutations:{reset:a=>{a.nonMatchedPairs=8,a.highestRecord=_(),a.cards=A(),a.status=P.READY,a.timeCost=0},counting:a=>{a.timeCost=a.timeCost+1},updateNonMatchedPairs:(a,e)=>{a.nonMatchedPairs=a.nonMatchedPairs+e},flips:(a,e)=>{a.cards.filter((a=>e.some((e=>e.id===a.id)))).forEach((a=>{a.flipped=!a.flipped}))},changeStatus:(a,e)=>{a.status=e},updateTopScore(a){!function(a){const e=localStorage.getItem("highestRecord");e?+e>a&&localStorage.setItem("highestRecord",`${a}`):localStorage.setItem("highestRecord",`${a}`)}(a.timeCost)}}});var D=e({name:"Logo"});const Y=s();o("data-v-01745ac3");const F={class:"logo"},L=c("a",{href:"https://github.com/leftstick/vue-memory-game",target:"_blank"},"Memory",-1);n();const N=Y(((a,e,s,o,n,c)=>(r(),t("h1",F,[L]))));D.render=N,D.__scopeId="data-v-01745ac3";var B=e({name:"Progress",computed:d(["nonMatchedPairs"])});const j=s();o("data-v-2944a0b0");const z={class:"board"},q=c("span",null,"Cards not Matched",-1);n();const w=j(((a,e,s,o,n,d)=>(r(),t("div",z,[q,c("h2",null,i(a.nonMatchedPairs),1)]))));B.render=w,B.__scopeId="data-v-2944a0b0";var O=e({name:"Score",computed:d(["highestRecord"])});const T=s();o("data-v-e478a366");const $={class:"score"},x=c("span",null,"Highest Record",-1);n();const H=T(((a,e,s,o,n,d)=>(r(),t("div",$,[x,c("h2",null,i(a.highestRecord),1)]))));O.render=H,O.__scopeId="data-v-e478a366";var J=e({name:"ScoreBoard",components:{Logo:D,Progress:B,Score:O}});const K=s();o("data-v-b2e5e2b6");const Q={class:"score-board"};n();const U=K(((a,e,s,o,n,d)=>{const i=m("Logo"),l=m("Progress"),u=m("Score");return r(),t("div",Q,[c(i),c(l),c(u)])}));J.render=U,J.__scopeId="data-v-b2e5e2b6";var V=e({name:"Card",props:{card:{type:Object,required:!0}},emits:{onFlip:a=>!!a},setup:(a,e)=>{const{card:t}=l(a),{commit:s}=u(E);return{card:t,doFlip:a=>{t.value.flipped||(s("flips",[t.value]),e.emit("onFlip",t.value))}}}});const W=s();o("data-v-713c72dc");const X={key:0,class:"front",src:"/vue-memory-game/assets/8-ball.cf7a0feb.png"},Z={key:1,class:"front",src:"/vue-memory-game/assets/baked-potato.39cd6049.png"},aa={key:2,class:"front",src:"/vue-memory-game/assets/dinosaur.66bd2b7c.png"},ea={key:3,class:"front",src:"/vue-memory-game/assets/kronos.36a61fd4.png"},ta={key:4,class:"front",src:"/vue-memory-game/assets/rocket.6759d94f.png"},sa={key:5,class:"front",src:"/vue-memory-game/assets/skinny-unicorn.597e6409.png"},oa={key:6,class:"front",src:"/vue-memory-game/assets/that-guy.aaf8f10d.png"},na={key:7,class:"front",src:"/vue-memory-game/assets/zeppelin.66be3996.png"},ra=c("img",{class:"back",src:"/vue-memory-game/assets/back.d9b958f7.png"},null,-1);n();const ca=W(((a,e,s,o,n,d)=>(r(),t("div",{class:"container",onClick:e[1]||(e[1]=(...e)=>a.doFlip&&a.doFlip(...e))},[c("div",{class:["card",{flipped:a.card.flipped}]},["8-ball"===a.card.name?(r(),t("img",X)):p("",!0),"baked-potato"===a.card.name?(r(),t("img",Z)):p("",!0),"dinosaur"===a.card.name?(r(),t("img",aa)):p("",!0),"kronos"===a.card.name?(r(),t("img",ea)):p("",!0),"rocket"===a.card.name?(r(),t("img",ta)):p("",!0),"skinny-unicorn"===a.card.name?(r(),t("img",sa)):p("",!0),"that-guy"===a.card.name?(r(),t("img",oa)):p("",!0),"zeppelin"===a.card.name?(r(),t("img",na)):p("",!0),ra],2)]))));V.render=ca,V.__scopeId="data-v-713c72dc";var da=e({name:"ChessBoard",components:{Card:V},setup:()=>{let a=g(null);const{state:e,dispatch:t,commit:s}=u(E),o=h((()=>e.status)),n=h((()=>e.nonMatchedPairs));return{onFlip:e=>{if(o.value===P.READY&&t("updateStatus",P.PLAYING),!a.value)return void(a.value=e);if(a.value!==e&&a.value.name===e.name)return a.value=null,s("updateNonMatchedPairs",-1),void(n.value||t("updateStatus",P.PASSED));const r=a.value;a.value=null,setTimeout((()=>{s("flips",[r,e])}),1e3)}}},computed:d(["cards"])});const ia=s();o("data-v-0a868561");const ma={class:"chessboard"};n();const la=ia(((a,e,s,o,n,c)=>{const d=m("Card");return r(),t("div",ma,[(r(!0),t(v,null,f(a.cards,(e=>(r(),t(d,{key:e.id,card:e,onOnFlip:a.onFlip},null,8,["card","onOnFlip"])))),128))])}));da.render=la,da.__scopeId="data-v-0a868561";var ua=e({data:()=>({IStatus:P}),computed:d(["status","timeCost"]),methods:y(["reset"])});const pa=s();o("data-v-99615bd2");const ga={class:"status-footer"},ha={key:0},va={key:1},fa={class:"time-cost"};n();const ya=pa(((a,e,s,o,n,d)=>(r(),t("div",ga,[a.status===a.IStatus.READY?(r(),t("span",ha,"Ready")):p("",!0),a.status===a.IStatus.PLAYING?(r(),t("span",va,"Playing")):p("",!0),a.status===a.IStatus.PASSED?(r(),t("a",{key:2,onClick:e[1]||(e[1]=S(((...e)=>a.reset&&a.reset(...e)),["prevent","stop"]))},"Play again")):p("",!0),c("span",fa,i(a.timeCost)+" s",1)]))));ua.render=ya,ua.__scopeId="data-v-99615bd2";var Sa=e({name:"Game",setup(){const a=u(E),{commit:e}=a;k((()=>{e("reset")}))},components:{ScoreBoard:J,ChessBoard:da,GameStatus:ua}});const ka=s();o("data-v-99203dd0");const ba={class:"game-panel"};n();const Pa=ka(((a,e,s,o,n,d)=>{const i=m("ScoreBoard"),l=m("ChessBoard"),u=m("GameStatus");return r(),t("div",ba,[c(i),c(l),c(u)])}));Sa.render=Pa,Sa.__scopeId="data-v-99203dd0",b(Sa).use(G,E).mount("#game");
