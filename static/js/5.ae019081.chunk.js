(this.webpackJsonpverbformer=this.webpackJsonpverbformer||[]).push([[5],{31:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return f}));var a=n(1),r=function(e){return function(t){t({type:a.b,payload:e})}},c=function(){return function(e){e({type:a.a,payload:"check"})}},o=function(e){return function(t){t({type:a.f,payload:e})}},i=function(e,t,n,r,c){return function(o){var i;for(i=e;i<t;i++)n.push(r[i]);o({type:a.h,payload:{WorkList:n,"Spr\xe5k":c,testList:n}}),console.log(n)}},s=function(){return function(e){e({type:a.i}),console.log("initial state")}},l=function(e,t,n,r){return function(c){e?(0!==n[0]&&t.splice(n[0]-1,1),n[0]=Math.floor(Math.random()*(t.length-1))+1):0!==t.length&&0!==n[0]?t.splice(0,1):n[0]=1,console.log(t[0]),Object.keys(t[0]).forEach((function(e){r[e]=t[n[0]-1][e]})),c({type:a.c,payload:{WorkList:t,int:n,CheckVerb:r}})}},d=function(e){return function(t){Object.keys(e).forEach((function(t){e[t]=document.getElementById(t).value.toLowerCase()})),t({type:a.g,payload:e})}},u=function(e,t,n,a){return e===t?n:a},m=function(e,t,n){return function(r){var c={"nederl\xe4ndska":n.nederl\u00e4ndska,infinitiv:n.infinitiv,presens:e.presens,preteritum:e.preteritum,supinum:e.supinum,backgroundColor:{},correctAnswer:{}};Object.keys(e).forEach((function(t){var a=t+"Color";c.backgroundColor[a]=u(e[t],n[t],"rgb(139, 188, 51)","#ff4d4d"),c.correctAnswer[t]=u(e[t],n[t],"","(".concat(n[t],")"))})),t.push(c),r({type:a.e,payload:t})}},f=function(){return function(e){e({type:a.d})}}},36:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),c=n(12),o=n(11),i=n(13),s=n(0),l=n.n(s),d=n(14),u=n(31),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).fillWordList=function(){var e=[];n.props.Work.forEach((function(t,n){var a=Object.values(t),r=Math.floor(Math.random()*a.length);e.push([a[r],n])})),n.setState({data:e})},n.spliceWordList=function(e){var t=n.state.data;t.splice(e,1),n.setState({data:t})},n.GiveVerb=function(){var e=Math.floor(Math.random()*n.state.data.length),t=n.state.data[e][1],a=n.props.Work[t];n.setState({workverb:n.state.data[e][0],verb:a,verbform:Object.keys(a).find((function(t){return a[t]===n.state.data[e][0]}))}),n.spliceWordList(e)},n.fillSvarList=function(){var e=document.getElementById("infinitiv").value.toLowerCase();n.setState({svar:e})},n.check=function(e,t){return e===t?"rgb(139, 188, 51)":"#ff4d4d"},n.n\u00e4sta=function(){n.state.check?(Object.keys(n.state.verb).forEach((function(e){"nederl\xe4ndska"!==e&&(document.getElementById(e).style.backgroundColor=n.check(document.getElementById(e).value.toLowerCase(),n.state.verb[e]))})),document.getElementById("Answer1").style.visibility="visible",document.getElementById("N\xe4staBtn").innerHTML="N\xe4sta",n.setState({check:!1}),0===n.state.data.length&&(document.getElementById("N\xe4staBtn").disabled=!0)):(n.GiveVerb(),Object.keys(n.state.verb).forEach((function(e){"nederl\xe4ndska"!==e&&(document.getElementById(e).value="",document.getElementById(e).style.backgroundColor="")})),document.getElementById("Answer1").style.visibility="hidden",document.getElementById("N\xe4staBtn").innerHTML="Svara",n.setState({check:!0}))},n.state={data:[["",0]],workverb:"",svar:"",verb:{},verbform:"",check:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fillWordList()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex col-sm m-2 justify-content-center"},this.state.workverb),l.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-column flex-lg-row"},l.a.createElement("div",{className:"col-sm m-2"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"infinitiv","aria-label":"infinitiv","aria-describedby":"basic-addon1",id:"infinitiv"}))),l.a.createElement("div",{className:"col-sm m-2"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"presens","aria-label":"presens","aria-describedby":"basic-addon1",id:"presens"}))),l.a.createElement("div",{className:"col-sm m-2"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"preteritum","aria-label":"preteritum","aria-describedby":"basic-addon1",id:"preteritum"}))),l.a.createElement("div",{className:"col-sm m-2"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"supinum","aria-label":"supinum","aria-describedby":"basic-addon1",id:"supinum"})))),l.a.createElement("div",{className:"",id:"Answer1",style:{visibility:"hidden"}},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("p",{className:"m-3 d-none d-lg-block d-xl-block",id:"Ned"},this.state.verb.nederl\u00e4ndska),l.a.createElement("p",{className:"m-3 d-none d-lg-block d-xl-block",id:"inf"},this.state.verb.infinitiv),l.a.createElement("p",{className:"m-3 d-none d-lg-block d-xl-block",id:"Pres"},this.state.verb.presens),l.a.createElement("p",{className:"m-3 d-none d-lg-block d-xl-block",id:"Pret"},this.state.verb.preteritum),l.a.createElement("p",{className:"m-3 d-none d-lg-block d-xl-block",id:"Sup"},this.state.verb.supinum))),l.a.createElement("div",{className:"d-flex col-sm m-2 justify-content-center"},l.a.createElement("button",{type:"button",id:"N\xe4staBtn",className:"btn btn-secondary btn-lg m-2",onClick:this.n\u00e4sta},"N\xe4sta"),l.a.createElement("button",{type:"button",id:"GorOm",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.props.gorom()}},"G\xf6r om")))}}]),t}(s.Component);t.default=Object(d.b)((function(e){return{Work:e.VerbReducer.WorkList}}),(function(e){return{gorom:function(){return e(Object(u.h)())}}}))(m)}}]);
//# sourceMappingURL=5.ae019081.chunk.js.map