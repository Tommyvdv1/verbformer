(this.webpackJsonpverbformer=this.webpackJsonpverbformer||[]).push([[4],{31:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return b}));var r=n(1),c=function(e){return function(t){t({type:r.b,payload:e})}},a=function(){return function(e){e({type:r.a,payload:"check"})}},l=function(e){return function(t){t({type:r.f,payload:e})}},o=function(e,t,n,c,a){return function(l){var o;for(o=e;o<t;o++)n.push(c[o]);l({type:r.h,payload:{WorkList:n,"Spr\xe5k":a,testList:n}}),console.log(n)}},i=function(){return function(e){e({type:r.i}),console.log("initial state")}},s=function(e,t,n,c){return function(a){e?(0!==n[0]&&t.splice(n[0]-1,1),n[0]=Math.floor(Math.random()*(t.length-1))+1):0!==t.length&&0!==n[0]?t.splice(0,1):n[0]=1,console.log(t[0]),Object.keys(t[0]).forEach((function(e){c[e]=t[n[0]-1][e]})),a({type:r.c,payload:{WorkList:t,int:n,CheckVerb:c}})}},d=function(e){return function(t){Object.keys(e).forEach((function(t){e[t]=document.getElementById(t).value.toLowerCase()})),t({type:r.g,payload:e})}},u=function(e,t,n,r){return e===t?n:r},m=function(e,t,n){return function(c){var a={"nederl\xe4ndska":n.nederl\u00e4ndska,infinitiv:n.infinitiv,presens:e.presens,preteritum:e.preteritum,supinum:e.supinum,backgroundColor:{},correctAnswer:{}};Object.keys(e).forEach((function(t){var r=t+"Color";a.backgroundColor[r]=u(e[t],n[t],"rgb(139, 188, 51)","#ff4d4d"),a.correctAnswer[t]=u(e[t],n[t],"","(".concat(n[t],")"))})),t.push(a),c({type:r.e,payload:t})}},b=function(){return function(e){e({type:r.d})}}},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(10),a=n(12),l=n(11),o=n(13),i=n(0),s=n.n(i),d=(n(32),n(14)),u=n(31),m=function(e){function t(){var e,n;Object(r.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(n=Object(a.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).G\u00f6rOm=function(){n.props.gorom()},n.getVerb=function(){var e=n.props,t=e.Mingla,r=e.int,c=e.CheckVerb,a=e.Work,l=e.Fill,o=e.SvarVerb,i=e.Spr\u00e5k;l(t,a,r,c),document.getElementById("demo").innerHTML="swe"===i?c.infinitiv:c.nederl\u00e4ndska,Object.keys(o).map((function(e){return document.getElementById(e).value=""})),Object.keys(o).map((function(e){return document.getElementById(e).style=""})),document.getElementById("Answer").style.visibility="hidden",document.getElementById("N\xe4staBtn").disabled=!0,document.getElementById("Svara").disabled=!1,console.clear()},n.check1=function(e,t,n){document.getElementById(n).style.backgroundColor=e===t?"rgb(139, 188, 51)":"#ff4d4d"},n.Check=function(){var e=n.props,t=e.CheckVerb,r=e.SvarVerb;console.log(t),n.props.FillSvarVerb(n.props.SvarVerb),console.log(r),n.check1(t.presens,r.presens,"presens"),n.check1(t.preteritum,r.preteritum,"preteritum"),n.check1(t.supinum,r.supinum,"supinum"),n.ShowAnswer()},n.ShowAnswer=function(){var e=n.props.Work;"rgb(139, 188, 51)"===document.getElementById("presens").style.backgroundColor&&"rgb(139, 188, 51)"===document.getElementById("preteritum").style.backgroundColor&&"rgb(139, 188, 51)"===document.getElementById("supinum").style.backgroundColor?(n.ShowHint(),document.getElementById("N\xe4staBtn").disabled=!1,1===e.length&&(document.getElementById("Svara").disabled=!0,document.getElementById("N\xe4staBtn").disabled=!0)):document.getElementById("Answer").style.visibility="hidden"},n.ShowHint=function(){var e=n.props.CheckVerb;document.getElementById("Answer").style.visibility="visible",document.getElementById("Ned").innerHTML="<i>(".concat(e.nederl\u00e4ndska,")</i>"),document.getElementById("Pres").innerHTML="presens: <b>".concat(e.presens,"</b>"),document.getElementById("Pret").innerHTML="Preteritum: <b>".concat(e.preteritum,"</b>"),document.getElementById("Sup").innerHTML="Supinum: <b>".concat(e.supinum,"</b>")},n.EnterFunction=function(e){console.log(e.which),13===e.which?document.getElementById("Svara").click():49===e.which&&n.props.Work.map((function(e,t){return document.getElementById("AnswerList").innerHTML+="<div key=".concat(t," class='d-flex justify-content-center'>")+"<p class='m-3 d-none d-lg-block d-xl-block' id='Ned'>".concat(e.nederl\u00e4ndska,"</p>")+"<p class='m-3 d-none d-lg-block d-xl-block' id='Pres'>".concat(e.presens,"</p>")+"<p class='m-3 d-none d-lg-block d-xl-block' id='Pret'>".concat(e.preteritum,"</p>")+"<p class='m-3 d-none d-lg-block d-xl-block' id='Sup'>".concat(e.supinum,"</p>")+"</div>"}))},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("N\xe4staBtn").disabled=!1,document.getElementById("Svara").disabled=!0}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Verbformer",id:"Verbformer"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement("div",{className:"text-center m-2"},s.a.createElement("p",null,"Skriv alla verbformer.")),s.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-between border"},s.a.createElement("div",{className:"text-center mt-lg-2 mr-lg-5"},s.a.createElement("p",{id:"demo"})),s.a.createElement("div",{className:"flex-fill px-3"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Presens","aria-label":"Presens","aria-describedby":"basic-addon1",id:"presens"}))),s.a.createElement("div",{className:"flex-fill px-3"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Preteritum","aria-label":"Preteritum","aria-describedby":"basic-addon1",id:"preteritum"}))),s.a.createElement("div",{className:"flex-fill px-3"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Supinum","aria-label":"Supinum","aria-describedby":"basic-addon1",id:"supinum",onKeyPress:function(t){return e.EnterFunction(t)}})))),s.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-between align-items-lg-start border"},s.a.createElement("div",{className:"d-none d-lg-block d-xl-none d-xl-block align-items-center border"},s.a.createElement("button",{type:"button",id:"GorOm",className:"btn btn-secondary btn-lg m-2",style:{visibility:"hidden"}},"G\xf6rOm")),s.a.createElement("div",{className:"d-flex justify-content-center border"},s.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center",style:{width:"250px"}},s.a.createElement("div",{className:"flex-col"},s.a.createElement("button",{type:"button",id:"Svara",className:"btn btn-secondary btn-lg m-2",onClick:this.Check},"Svara")),s.a.createElement("div",{className:"flex-col"},s.a.createElement("button",{type:"button",id:"N\xe4staBtn",className:"btn btn-secondary btn-lg m-2",onClick:this.getVerb},"N\xe4sta")),s.a.createElement("div",{className:"flex-col"},s.a.createElement("button",{type:"button",id:"Hint",className:"btn btn-secondary btn-lg m-2",onClick:this.ShowHint},"Hint")))),s.a.createElement("div",{className:"d-flex flex-row-reverse justify-content-center justify-content-lg-between border"},s.a.createElement("button",{type:"button",id:"GorOm",className:"btn btn-secondary btn-lg m-2",onClick:this.G\u00f6rOm},"G\xf6r om"))),s.a.createElement("div",{className:"container",id:"Answer",style:{visibility:"hidden"}},s.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center mt-3"},s.a.createElement("p",{className:"mr-lg-3",id:"Ned"}),s.a.createElement("p",{className:"mr-lg-3",id:"Pres"}),s.a.createElement("p",{className:"mr-lg-3",id:"Pret"}),s.a.createElement("p",{className:"",id:"Sup"}))),s.a.createElement("div",{className:"container",id:"AnswerList"}))))}}]),t}(i.Component);t.default=Object(d.b)((function(e){return{"Spr\xe5k":e.VerbReducer.Spr\u00e5k,Work:e.VerbReducer.WorkList,Mingla:e.VerbReducer.Mingla,int:e.VerbReducer.int,CheckVerb:e.VerbReducer.CheckVerb,SvarVerb:e.VerbReducer.SvarVerb}}),(function(e){return{Fill:function(t,n,r,c){return e(Object(u.b)(t,n,r,c))},FillSvarVerb:function(t){return e(Object(u.c)(t))},gorom:function(){return e(Object(u.h)())}}}))(m)}}]);
//# sourceMappingURL=4.16fcc57d.chunk.js.map