import{t as C,r as p,g as y,s as q,j as s}from"./index-TAAB46RF.js";import{K as z,N as $,a8 as l,ap as A,b as a,au as j,i as L,U as x,I as G}from"./useAuthNavi-1jCOrt3A.js";function W(){const g=!!location.search.match("roomId"),w=z(),[o]=C(),[b,c]=p.useState(""),n=p.useRef(null);p.useEffect(()=>($.getV()?I():r(),window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}),[]);function m(e){if(e.data.source!=="react-devtools-content-script"&&!e.data.wappalyzer){if(e.data.name==="openCashier"){window.removeEventListener("message",m),console.warn("from iframe",e),l.fail(y("nomoney")),r();return}if(e.data==="disconnect"){console.warn("from iframe",e),r();return}if(e.data==="gameend"){console.warn("from iframe",e),l.fail(y("nomoney")),r();return}}}async function I(){if(!g){n.current.setAttribute("allowfullscreen","true"),n.current.setAttribute("webkitallowfullscreen","true"),n.current.setAttribute("mozallowfullscreen","true");let i=localStorage.getItem("pp")||"";c(i);return}let e=o.get("game")||"",u=o.get("roomId")||1,h=o.get("bets")||"",P=o.get("min")||"";u=="undefined"&&(u=1);const f=await E();let S=f.apiUrl,U=f.token,d=f.gameId;const R=new Date().getTime();let t=`https://www.tigerslot.fun/game1/?game=${e}&apiUrl=${S}&token=${U}&roomId=${u}&min=${P}&timestamp=${R}`;h&&(t+=`&bets=${h}`);const v=$.getV();if(v){const{account:i,password:k}=v;i&&(t+=`&phone=${A.phonePre}${i}`),k&&(t+=`&password=${k}`)}if(q?t+="&device=mobile":t+="&device=desk",d===0)c(t);else{if(d===10001)if(e!="truco"){l.info("Por favor, complete o jogo de poker primeiro!"),r();return}else t+="&bRejoin=true";else if(d===10006)if(e!="cacheta"){l.info("Por favor, complete o jogo de poker primeiro!"),r();return}else t+="&bRejoin=true";else await a.request(j(e),{},"离开先前游戏");c(t)}}async function E(){try{return L.online||await a.relogin(),(await a.request(x.getGameId,{},"")).data}catch{return{gameId:0}}}const r=async()=>{if(window.socket.readyState===WebSocket.OPEN){if(!g)a.request(x.leavePPGame,{});else{let e=o.get("game")||"";a.request(j(e),{},"离开先前游戏")}w("/",{replace:!0})}else N(),w("/",{replace:!0})};function N(){a.relogin()}return s.jsxs("div",{className:"fixed z-[99] top-0 left-0 bottom-0 right-0 bg-black w-full h-full",children:[s.jsx("div",{className:"w-full h-full",style:{display:`${b==""?"none":""}`},children:s.jsx("iframe",{src:b,className:"w-full h-full",ref:n})}),s.jsx("div",{className:"absolute right-[0.1rem] top-0",onClick:r,children:s.jsx(G,{size:30})})]})}export{W as default};