(this.webpackJsonpverbformer=this.webpackJsonpverbformer||[]).push([[6],{31:function(e,n,i){"use strict";i.d(n,"f",(function(){return r})),i.d(n,"h",(function(){return s})),i.d(n,"i",(function(){return a})),i.d(n,"g",(function(){return u})),i.d(n,"e",(function(){return l})),i.d(n,"b",(function(){return d})),i.d(n,"c",(function(){return p})),i.d(n,"d",(function(){return o})),i.d(n,"a",(function(){return f}));var t=i(1),r=function(e){return function(n){n({type:t.b,payload:e})}},s=function(){return function(e){e({type:t.a,payload:"check"})}},a=function(e){return function(n){n({type:t.f,payload:e})}},u=function(e,n,i,r,s){return function(a){var u;for(u=e;u<n;u++)i.push(r[u]);a({type:t.h,payload:{WorkList:i,"Spr\xe5k":s,testList:i}}),console.log(i)}},l=function(){return function(e){e({type:t.i}),console.log("initial state")}},d=function(e,n,i,r){return function(s){e?(0!==i[0]&&n.splice(i[0]-1,1),i[0]=Math.floor(Math.random()*(n.length-1))+1):0!==n.length&&0!==i[0]?n.splice(0,1):i[0]=1,console.log(n[0]),Object.keys(n[0]).forEach((function(e){r[e]=n[i[0]-1][e]})),s({type:t.c,payload:{WorkList:n,int:i,CheckVerb:r}})}},p=function(e){return function(n){Object.keys(e).forEach((function(n){e[n]=document.getElementById(n).value.toLowerCase()})),n({type:t.g,payload:e})}},m=function(e,n,i,t){return e===n?i:t},o=function(e,n,i){return function(r){var s={"nederl\xe4ndska":i.nederl\u00e4ndska,infinitiv:i.infinitiv,presens:e.presens,preteritum:e.preteritum,supinum:e.supinum,backgroundColor:{},correctAnswer:{}};Object.keys(e).forEach((function(n){var t=n+"Color";s.backgroundColor[t]=m(e[n],i[n],"rgb(139, 188, 51)","#ff4d4d"),s.correctAnswer[n]=m(e[n],i[n],"","(".concat(i[n],")"))})),n.push(s),r({type:t.e,payload:n})}},f=function(){return function(e){e({type:t.d})}}},37:function(e,n,i){"use strict";i.r(n);var t=i(9),r=i(10),s=i(12),a=i(11),u=i(13),l=i(0),d=i.n(l),p=[{name:"deel0",text:" verber 1...10",min:0,max:12},{name:"deel1",text:" verber 11...20",min:12,max:22},{name:"deel2",text:" verber 21...30",min:22,max:32},{name:"deel3",text:" verber 31...40",min:32,max:42},{name:"deel4",text:" verber 41...50",min:42,max:52},{name:"deel5",text:" verber 51...60",min:52,max:62},{name:"deel6",text:" verber 61...70",min:62,max:72},{name:"deel7",text:" verber 71...80",min:72,max:82},{name:"deel8",text:" verber 81...83",min:82,max:86}],m=i(31),o=i(14),f=[{infinitiv:"be",presens:"ber",preteritum:"bad",supinum:"bett","nederl\xe4ndska":"verzoeken/bidden"},{infinitiv:"betyda",presens:"betyder",preteritum:"betydde",supinum:"betytt","nederl\xe4ndska":"beduiden"},{infinitiv:"binda",presens:"binder",preteritum:"band",supinum:"bundit","nederl\xe4ndska":"binden"},{infinitiv:"bita",presens:"biter",preteritum:"bet",supinum:"bitit","nederl\xe4ndska":"(af)bijten"},{infinitiv:"bjuda",presens:"bjuder",preteritum:"bj\xf6d",supinum:"bjudit","nederl\xe4ndska":"uitnodigen/trakteren"},{infinitiv:"bli",presens:"blir",preteritum:"blev",supinum:"blivit","nederl\xe4ndska":"worden"},{infinitiv:"bo",presens:"bor",preteritum:"bodde",supinum:"bott","nederl\xe4ndska":"wonen"},{infinitiv:"brinna",presens:"brinner",preteritum:"brann",supinum:"brunnit","nederl\xe4ndska":"branden"},{infinitiv:"brista",presens:"brister",preteritum:"brast",supinum:"brustit","nederl\xe4ndska":"barsten/breken"},{infinitiv:"bryta",presens:"bryter",preteritum:"br\xf6t",supinum:"brutit","nederl\xe4ndska":"(ver)breken"},{infinitiv:"b\xe4ra",presens:"b\xe4r",preteritum:"bar",supinum:"burit","nederl\xe4ndska":"dragen/aanhebben"},{infinitiv:"b\xf6ra",presens:"b\xf6r",preteritum:"borde",supinum:"bort","nederl\xe4ndska":"zou moeten"},{infinitiv:"dra",presens:"drar",preteritum:"drog",supinum:"dragit","nederl\xe4ndska":"(aan)trekken"},{infinitiv:"dricka",presens:"dricker",preteritum:"drack",supinum:"druckit","nederl\xe4ndska":"drinken"},{infinitiv:"driva",presens:"driver",preteritum:"drev",supinum:"drivit","nederl\xe4ndska":"drijven(handel)"},{infinitiv:"d\xf6",presens:"d\xf6r",preteritum:"dog",supinum:"d\xf6tt","nederl\xe4ndska":"sterven"},{infinitiv:"d\xf6lja",presens:"d\xf6ljer",preteritum:"dolde",supinum:"dolt","nederl\xe4ndska":"verbergen"},{infinitiv:"falla",presens:"faller",preteritum:"f\xf6ll",supinum:"fallit","nederl\xe4ndska":"vallen"},{infinitiv:"fara",presens:"far",preteritum:"for",supinum:"farit","nederl\xe4ndska":"gaan/reizen"},{infinitiv:"finna",presens:"finner",preteritum:"fann",supinum:"funnit","nederl\xe4ndska":"vinden"},{infinitiv:"finnas",presens:"finns",preteritum:"fanns",supinum:"funnits","nederl\xe4ndska":"er is"},{infinitiv:"flyga",presens:"flyger",preteritum:"fl\xf6g",supinum:"flugit","nederl\xe4ndska":"vliegen"},{infinitiv:"frysa",presens:"fryser",preteritum:"fr\xf6s",supinum:"frusit","nederl\xe4ndska":"kou hebben/bevriezen"},{infinitiv:"f\xe5",presens:"f\xe5r",preteritum:"fick",supinum:"f\xe5tt","nederl\xe4ndska":"mogen/krijgen"},{infinitiv:"f\xf6rsvinna",presens:"f\xf6rsvinner",preteritum:"f\xf6rsvann",supinum:"f\xf6rsvunnit","nederl\xe4ndska":"verdwijnen"},{infinitiv:"ge",presens:"ger",preteritum:"gav",supinum:"gett","nederl\xe4ndska":"geven"},{infinitiv:"glida",presens:"glider",preteritum:"gled",supinum:"glidit","nederl\xe4ndska":"glijden"},{infinitiv:"gripa",presens:"griper",preteritum:"grep",supinum:"gripit","nederl\xe4ndska":"grijpen"},{infinitiv:"gr\xe5ta",presens:"gr\xe5ter",preteritum:"gr\xe4t",supinum:"gr\xe5tit","nederl\xe4ndska":"huilen/wenen"},{infinitiv:"g\xe5",presens:"g\xe5r",preteritum:"gick",supinum:"g\xe5tt","nederl\xe4ndska":"gaan"},{infinitiv:"g\xf6ra",presens:"g\xf6r",preteritum:"gjorde",supinum:"gjort","nederl\xe4ndska":"maken/doen"},{infinitiv:"ha",presens:"har",preteritum:"hade",supinum:"haft","nederl\xe4ndska":"hebben"},{infinitiv:"heta",presens:"heter",preteritum:"hette",supinum:"hetat","nederl\xe4ndska":"heten"},{infinitiv:"hinna",presens:"hinner",preteritum:"hann",supinum:"hunnit","nederl\xe4ndska":"tijd hebben voor"},{infinitiv:"h\xe5lla",presens:"h\xe5ller",preteritum:"h\xf6ll",supinum:"h\xe5llit","nederl\xe4ndska":"houden(be_/vast_/heel blijven)"},{infinitiv:"kliva",presens:"kliver",preteritum:"klev",supinum:"klivit","nederl\xe4ndska":"met grote stappen gaan"},{infinitiv:"knyta",presens:"knyter",preteritum:"kn\xf6t",supinum:"knutit","nederl\xe4ndska":"binden"},{infinitiv:"komma",presens:"kommer",preteritum:"kom",supinum:"kommit","nederl\xe4ndska":"komen"},{infinitiv:"krypa",presens:"kryper",preteritum:"kr\xf6p",supinum:"krupit","nederl\xe4ndska":"kruipen"},{infinitiv:"kunna",presens:"kan",preteritum:"kunde",supinum:"kunnat","nederl\xe4ndska":"kunnen"},{infinitiv:"le",presens:"ler",preteritum:"log",supinum:"lett","nederl\xe4ndska":"glimlachen"},{infinitiv:"leva",presens:"lever",preteritum:"levde",supinum:"levat","nederl\xe4ndska":"leven"},{infinitiv:"lida",presens:"lider",preteritum:"led",supinum:"lidit","nederl\xe4ndska":"afzien/lijden"},{infinitiv:"ligga",presens:"ligger",preteritum:"l\xe5g",supinum:"legat","nederl\xe4ndska":"liggen"},{infinitiv:"ljuga",presens:"ljuger",preteritum:"lj\xf6g",supinum:"ljugit","nederl\xe4ndska":"liegen"},{infinitiv:"lyda",presens:"lyder",preteritum:"lydde",supinum:"lytt","nederl\xe4ndska":"gehoorzamen"},{infinitiv:"l\xe5ta",presens:"l\xe5ter",preteritum:"l\xe4t",supinum:"l\xe5tit","nederl\xe4ndska":"luiden/klinken/laten"},{infinitiv:"l\xe4gga",presens:"l\xe4gger",preteritum:"lade",supinum:"lagt","nederl\xe4ndska":"leggen"},{infinitiv:"m\xe5ste",presens:"m\xe5ste",preteritum:"m\xe5ste",supinum:"m\xe5st","nederl\xe4ndska":"moeten"},{infinitiv:"njuta",presens:"njuter",preteritum:"nj\xf6t",supinum:"njutit","nederl\xe4ndska":"genieten"},{infinitiv:"rida",presens:"rider",preteritum:"red",supinum:"ridit","nederl\xe4ndska":"paard rijden"},{infinitiv:"rinna",presens:"rinner",preteritum:"rann",supinum:"runnit","nederl\xe4ndska":"stromen"},{infinitiv:"se",presens:"ser",preteritum:"s\xe5g",supinum:"sett","nederl\xe4ndska":"zien"},{infinitiv:"sitta",presens:"sitter",preteritum:"satt",supinum:"suttit","nederl\xe4ndska":"zitten"},{infinitiv:"sjunga",presens:"sjunger",preteritum:"sj\xf6ng",supinum:"sjungit","nederl\xe4ndska":"zingen"},{infinitiv:"skina",presens:"skiner",preteritum:"sken",supinum:"skinit","nederl\xe4ndska":"schijnen"},{infinitiv:"skilja sig",presens:"skiljer sig",preteritum:"skilde sig",supinum:"skilt sig","nederl\xe4ndska":"scheiden/verschillen"},{infinitiv:"skjuta",presens:"skjuter",preteritum:"sk\xf6t",supinum:"skjutit","nederl\xe4ndska":"schieten/deur open duwen"},{infinitiv:"skola",presens:"ska",preteritum:"skulle",supinum:"skolat","nederl\xe4ndska":"zal"},{infinitiv:"skrika",presens:"skriker",preteritum:"skrek",supinum:"skrikit","nederl\xe4ndska":"gillen"},{infinitiv:"skriva",presens:"skriver",preteritum:"skrev",supinum:"skrivit","nederl\xe4ndska":"schrijven"},{infinitiv:"sk\xe4ra",presens:"sk\xe4r",preteritum:"skar",supinum:"skurit","nederl\xe4ndska":"snijden"},{infinitiv:"slippa",presens:"slipper",preteritum:"slapp",supinum:"sluppit","nederl\xe4ndska":"vermijden/ontkomen"},{infinitiv:"sl\xe5",presens:"sl\xe5r",preteritum:"slog",supinum:"slagit","nederl\xe4ndska":"slaan"},{infinitiv:"sova",presens:"sover",preteritum:"sov",supinum:"sovit","nederl\xe4ndska":"slapen"},{infinitiv:"springa",presens:"springer",preteritum:"sprang",supinum:"sprungit","nederl\xe4ndska":"hard lopen/rennen"},{infinitiv:"sticka",presens:"sticker",preteritum:"stack",supinum:"stuckit","nederl\xe4ndska":"afbollen/steken/prikken"},{infinitiv:"stiga",presens:"stiger",preteritum:"steg",supinum:"stigit","nederl\xe4ndska":"opstaan/opstijgen"},{infinitiv:"stj\xe4la",presens:"stj\xe4l",preteritum:"stal",supinum:"stulit","nederl\xe4ndska":"stelen"},{infinitiv:"stryka",presens:"stryker",preteritum:"str\xf6k",supinum:"strukit","nederl\xe4ndska":"strijken"},{infinitiv:"st\xe5",presens:"st\xe5r",preteritum:"stod",supinum:"st\xe5tt","nederl\xe4ndska":"staan"},{infinitiv:"supa",presens:"super",preteritum:"s\xf6p",supinum:"supit","nederl\xe4ndska":"zuipen"},{infinitiv:"sv\xe4lja",presens:"sv\xe4ljer",preteritum:"svalde",supinum:"svalt","nederl\xe4ndska":"slikken"},{infinitiv:"sv\xe4ra",presens:"sv\xe4r",preteritum:"svor",supinum:"svurit","nederl\xe4ndska":"vloeken"},{infinitiv:"s\xe4ga",presens:"s\xe4ger",preteritum:"sa",supinum:"sagt","nederl\xe4ndska":"zeggen"},{infinitiv:"s\xe4lja",presens:"s\xe4ljer",preteritum:"s\xe5lde",supinum:"s\xe5lt","nederl\xe4ndska":"verkopen"},{infinitiv:"s\xe4tta",presens:"s\xe4tter",preteritum:"satte",supinum:"satt","nederl\xe4ndska":"zetten"},{infinitiv:"ta",presens:"tar",preteritum:"tog",supinum:"tagit","nederl\xe4ndska":"nemen"},{infinitiv:"t\xf6rs",presens:"t\xf6rs",preteritum:"tordes",supinum:"torts","nederl\xe4ndska":"durven"},{infinitiv:"veta",presens:"vet",preteritum:"visste",supinum:"vetat","nederl\xe4ndska":"weten"},{infinitiv:"vilja",presens:"vill",preteritum:"ville",supinum:"velat","nederl\xe4ndska":"willen"},{infinitiv:"vinna",presens:"vinner",preteritum:"vann",supinum:"vunnit","nederl\xe4ndska":"winnen"},{infinitiv:"v\xe4lja",presens:"v\xe4ljer",preteritum:"valde",supinum:"valt","nederl\xe4ndska":"kiezen"},{infinitiv:"vara",presens:"\xe4r",preteritum:"var",supinum:"varit","nederl\xe4ndska":"zijn"},{infinitiv:"\xe4ta",presens:"\xe4ter",preteritum:"\xe5t",supinum:"\xe4tit","nederl\xe4ndska":"eten"},{infinitiv:"tro",presens:"tror",preteritum:"trodde",supinum:"trott","nederl\xe4ndska":"denken"}],k=function(e){function n(){var e,i;Object(t.a)(this,n);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(i=Object(s.a)(this,(e=Object(a.a)(n)).call.apply(e,[this].concat(u)))).bekrafta=function(){var e,n=p.map((function(e){return document.getElementById(e.name).checked})),i=!0;for(e=0;e<n.length;e++)n[e]&&(i=!1);document.getElementById("bekrafta").disabled=i,document.getElementById("ned/swe").disabled=i,document.getElementById("test").disabled=i,document.getElementById("alla former").disabled=i},i.repeatConfirm=function(e,n){var t=i.props,r=t.onSubmit,s=t.Work,a=t.click,u=t.setMingla;a(n),document.getElementById("Mingla").checked&&u(!0),p.map((function(n){return document.getElementById(n.name).checked?r(n.min,n.max,s,f,e):n}))},i}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.Clear(),document.getElementById("bekrafta").disabled=!0,document.getElementById("ned/swe").disabled=!0,document.getElementById("test").disabled=!0,document.getElementById("alla former").disabled=!0}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"d-flex flex-row justify-content-center"},d.a.createElement("div",{className:"flex-col"},d.a.createElement("div",{id:"navbar"},p.map((function(n){return d.a.createElement("div",{key:n.name},d.a.createElement("label",null,d.a.createElement("input",{type:"checkbox",id:n.name,onChange:e.bekrafta}),d.a.createElement("span",null,n.text)))}))),d.a.createElement("label",null,d.a.createElement("input",{type:"checkbox",id:"Mingla"}),d.a.createElement("span",null," Mingla")))),d.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center"},d.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center",style:{width:"320px"}},d.a.createElement("div",{className:"flex-col"},d.a.createElement("button",{type:"button",id:"bekrafta",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.repeatConfirm("swe","click")}},"bekr\xe4fta")),d.a.createElement("div",{className:"flex-col"},d.a.createElement("button",{type:"button",id:"ned/swe",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.repeatConfirm("ned","click")}},"ned/swe")),d.a.createElement("div",{className:"flex-col"},d.a.createElement("button",{type:"button",id:"test",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.repeatConfirm("swe","test")}},"test")),d.a.createElement("div",{className:"flex-col"},d.a.createElement("button",{type:"button",id:"alla former",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.repeatConfirm("swe","alla")}},"alla former")),d.a.createElement("div",{className:"flex-col"},d.a.createElement("button",{type:"button",id:"checklist",className:"btn btn-secondary btn-lg m-2",onClick:function(){return e.repeatConfirm("swe","table")}},"checklist")))))}}]),n}(l.Component);n.default=Object(o.b)((function(e){return{Work:e.VerbReducer.WorkList}}),(function(e){return{onSubmit:function(n,i,t,r,s){return e(Object(m.g)(n,i,t,r,s))},click:function(n){return e(Object(m.f)(n))},setMingla:function(n){return e(Object(m.i)(n))},Clear:function(){return e(Object(m.e)())}}}))(k)}}]);
//# sourceMappingURL=6.8c70dd75.chunk.js.map