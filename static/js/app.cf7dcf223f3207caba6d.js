webpackJsonp([6],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},BYxI:function(e,t,n){"use strict";var o=n("t9TF"),a=n.n(o),i={name:"BridgeImage",computed:{listeners:function(){var e=this.$listeners,t=(e.error,a()(e,["error"]));return t}},mounted:function(){var e=this;this.$el.addEventListener("error",function(){return e.$el.style.display="none"})}},r=n("XyMi"),s=Object(r.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("img",this._g({},this.listeners))},[],!1,null,null,null);t.a=s.exports},"C+Nt":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("XyMi"),i=Object(a.a)({name:"App"},function(){var e=this.$createElement;return(this._self._c||e)("router-view")},[],!1,null,null,null).exports,r=n("/ocq"),s=(n("dKnv"),n("uqcV")),u=n("uTOX"),l={name:"YourStory",components:{MainNav:s.a,Footer:u.a}};var d=function(e){n("gQJl")},c=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docked-layout"},[n("MainNav"),e._v(" "),n("section",{staticClass:"smooth-scroller",staticStyle:{"padding-top":"0"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("section",[n("div",{staticClass:"image container"},[n("div",{staticClass:"image"},[n("BridgeImage",{staticStyle:{"margin-bottom":"-6px"},attrs:{src:"/static/images/about%20the%20study.svg"}})],1),e._v(" "),e._m(2)])]),e._v(" "),n("section",[n("div",{staticClass:"image container"},[n("div",{staticClass:"image"},[n("BridgeImage",{staticStyle:{"padding-top":"1.5rem"},attrs:{src:"/static/images/tell%20your%20story.svg"}})],1),e._v(" "),e._m(3)])]),e._v(" "),n("section",[n("div",{staticClass:"image container"},[n("div",{staticClass:"image"},[n("BridgeImage",{staticStyle:{transform:"scale(0.7)","padding-bottom":"1rem"},attrs:{src:"/static/images/create your story.svg"}})],1),e._v(" "),n("div",{staticClass:"text"},[n("h3",[e._v("Create your story")]),e._v(" "),n("p",[e._v("In just a minute you can see if you are eligible to participate in the mPower study. Find out now!")]),e._v(" "),n("p",{staticStyle:{"margin-top":"2rem"}},[n("router-link",{staticClass:"join-button",attrs:{to:"/study/intro"}},[e._v("Join")])],1)])])]),e._v(" "),n("Footer")],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticStyle:{height:"30vw","min-height":"15rem",background:"linear-gradient(#5A478F, #47337D)"}},[t("div",{staticStyle:{height:"30vw","min-height":"15rem","background-image":"url(/static/images/about%20the%20study.svg)","background-position":"center","background-size":"contain","background-repeat":"no-repeat"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",{staticClass:"container"},[t("h2",[this._v("Living with Parkinson’s Disease")]),this._v(" "),t("p",[this._v("We understand that living with Parkinson’s Disease (PD) can be unsettling due to the uncertain nature of the disease.  Unlike many other conditions, symptoms and the way they change over time are different for each person. Due to the irregular and unique progression of PD, you don’t always know when your symptoms will evolve and how disease will impact your life over time. ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text",staticStyle:{"padding-top":"1rem"}},[t("h3",[this._v("Understand your PD")]),this._v(" "),t("p",[this._v("Although your path is uncertain, seeing patterns over time may lead to a better understanding of your PD. Tracking your medication and other factors (e.g. stress, exercise) may provide insight into your symptoms and your ability to complete activities.  Understanding this may provide insights into your day to day health and lifestyle.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text"},[t("h3",[this._v("Telling your story")]),this._v(" "),t("p",[this._v("Through the mPower app, you can tell your story of living with PD. It’s a tool to understand your symptoms, factors, and how these relate to your medication. You also can see your changes over time on physical and cognitive activities. This can help you talk about your story with doctors and caregivers. It is about you and how you live with PD.")])])}],!1,d,"data-v-bf680b12",null).exports,m=n("BYxI");o.a.use(r.a),o.a.component("BridgeImage",m.a);var h=new r.a({mode:"history",scrollBehavior:function(e,t,n){return{x:0,y:0}},routes:[{path:"/",redirect:"/your-story"},{path:"/your-story",component:c},{path:"/about",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"HyoP"))}},{path:"/team",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"VANQ"))}},{path:"/consent",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"tJd/"))}},{path:"/sage-mpower-2/phoneSignIn/:signInToken(\\d{3}-?\\d{3})",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"TEhQ"))}},{path:"/sage-mpower-2/*",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"CDYD"))}},{path:"/privacy-policy",component:function(){return n.e(3).then(n.bind(null,"O3mL"))}},{path:"/embedded-privacy-policy",component:function(){return n.e(3).then(n.bind(null,"wnh/"))}},{path:"/license",component:function(){return n.e(3).then(n.bind(null,"3xyG"))}},{path:"/faq",component:function(){return n.e(3).then(n.bind(null,"oXL1"))}},{path:"/contact",component:function(){return n.e(3).then(n.bind(null,"X5TR"))}},{path:"/study/intro",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ToLA"))}},{path:"/study/overview",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"GqDj"))}},{path:"/study/eligibility",meta:{step:0},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"n0mD"))}},{path:"/study/consent",meta:{step:1},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OvJP"))}},{path:"/study/quiz",meta:{step:2},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"+thr"))}},{path:"/study/sign",meta:{step:3},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"LxU7"))}},{path:"/study/registration",meta:{step:4},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"tg+M"))}},{path:"/study/retake-quiz",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"NMtV"))}},{path:"/study/ineligible",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"zwlx"))}},{path:"/study/done",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"KVYX"))}},{path:"/study/consent-review",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"UlMe"))}},{path:"/study/help",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"9Nqc"))}}]}),p=n("wtjx"),v=n("n6Cl"),g=n("fKPv"),y=n.n(g),f=n("TXmL");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){y()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}o.a.use(f.a);var k,z,j=new f.a({locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b(b({},{languageCodeOnly:!1}),e),n=void 0===navigator.languages?[navigator.language]:navigator.languages;if(n)return n.map(function(e){var n=e.trim();return t.languageCodeOnly?n.split(/-|_/)[0]:n})[0]}({languageCodeOnly:!0})||"en",fallbackLocale:"en",messages:(k=n("hFeb"),z={},k.keys().forEach(function(e){var t=e.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){var n=t[1];z[n]=k(e)}}),z)}),_=new p.a;window.queryParams={},document.location.search&&document.location.search.substring(1).split("&").forEach(function(e){var t=e.split("=");window.queryParams[decodeURIComponent(t[0])]=decodeURIComponent(t[1])}),console.debug("queryParams",queryParams),window.__forceSmoothScrollPolyfill__=!0,n("Rcjy").polyfill(),o.a.use(v.a),o.a.config.productionTip=!0,o.a.mixin({beforeCreate:function(){var e=this.$options;e.store?this.$store=e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}),o.a.directive("freeze",{inserted:function(e){e.addEventListener("touchend",function(e){e.preventDefault(),"A"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName||e.target.click()})}}),h.beforeEach(function(e,t,n){"/study/overview"===t.path&&void 0!==e.meta.step&&e.meta.step!==_.getCurrentStep()||n()}),h.afterEach(function(e,t){ga("set","page",e.path),ga("send","pageview")});var P=["/study/intro","/study/overview","/study/retake-quiz","/study/ineligible","/study/done"];h.beforeEach(function(e,t,n){document.documentElement.classList.toggle("consent",P.some(function(t){return e.path===t})),n()}),new o.a({el:"#app",router:h,store:_,components:{App:i},i18n:j,template:"<App/>"})},NuBg:function(e,t){e.exports={"eligibility-screen":{title:"Let’s find out if you’re eligible",q1:{"i-am":"I am","years-old":"years old."},q2:{"i-live":"I live",select:"Select","in-US":"in the United States","in-other":"in Canada","outside-eligible-area":"outside of the United States and Canada"},q3:{i:"I",select:"Select","have-apple":"have an Apple","have-android":"have an Android","do-not-have":"do not have a","smart-phone":"smart phone."}},"consent-screen":{"step-1":{title:"What is involved","install-on-phone":"If you decide to participate in the study, you’ll first need to install the free mPower app to your phone.","use-app-to":"To understand changes in your health we will ask you to use the app to:","answer-health-questions":"Answer a few questions about your health, once when you start the study (5 minutes).","track-symptoms":"Track your symptoms, triggers and medications daily (5 minutes).","complete-activities":"Complete activities on the app like tapping your fingers or doing a cognitive game daily for 2 weeks (10 minutes). Repeat every 3 months.","participation-time":"We would like you to participate for 2 years if you can but you can participate as long as you like."},"step-2":{title:"Data Collection, Storage & Privacy","data-encrypted":"Your data is encrypted on your phone.","collect-data":"We collect the encrypted survey responses, activity data, and passive sensor measurements from your phone.","not-location":"We will NOT collect your exact location or what you are typing on your phone (for example text messages, emails, etc.)","use-guid":"We replace your name with a unique code (GUID). We will combine your coded study data with data from other volunteers.","on-cloud":"We store the coded study data on a secure cloud server. "},"step-3":{title:"Data Use & Trends","view-activities":"You will be able to view your symptoms, triggers, medication adherence and sensor based activities.","see-data":"You will be able to see your data and can start to see trends in your data.","use-for-research":"We will use your study data for research.",patterns:"We will use the study data to look for patterns. These patterns may help us better understand the symptoms of PD."},"step-4":{title:"Sharing for Future Research","sharing-data":"Sharing your coded study data broadly (without information such as your name) may benefit this and future research.","share-with-researchers":"You get to decide if you want to share your coded study data broadly with qualified researchers.","cannot-withdraw":"Once we have shared your data with other researchers we cannot withdraw it."},"step-5":{title:"Potential Risks","low-participation":"We expect the risk of participating in this study to be low.",tiring:"Some of the activities and questions we ask could be tiring, frustrating, boring or may make you feel uncomfortable.",emotions:"Seeing your data may cause many emotions. ",hacked:"We will do our best to protect your information, but your data could be hacked.",unknowns:"There may be other risks to participating that we do not know about yet."},"step-6":{title:"Potential Benefits","interesting-trends":"You may not directly benefit from taking part but seeing trends in your data may be interesting to you.",share:"You can share this data with your doctors, family members, or others.","help-all":"You may help researchers better understand Parkinson’s Disease. This may help future generations. "},"step-7":{title:"NOT medical care","research-study":"mPower is a research study.","not-medical-care":"mPower does not provide medical care, medical advice, or treatment.","not-diagnosis-tool":"The mPower app is not a diagnosis tool.",concerns:"Contact your health provider if you have questions or concerns related to your health, or if you need medical care."},"step-8":{title:"Issues to Consider","data-plan":"The time you use on this app may count against your mobile data plan. You can set up the app to use Wi-Fi connections instead. ","not-paid":"You will not be paid for participating in this study. You will not be paid for sharing your data. ","no-profit":"You will not receive any profit from this or future research.",injury:"The risk of injury is low in this study. You will not be compensated for injury."},"step-9":{title:"Leaving the Study",voluntary:"Your participation is voluntary.",leave:"You may leave the study at any time and for any reason.","withdraw-consent":"If you leave the study, you withdraw your consent.","before-withdraw":"Your study data from before your withdrawal will continue to be used in the study. It will not be destroyed or deleted."},"step-10":{title:"Contact",email:"If you have questions you can reach us by email at PDApp@sagebionetworks.org or call toll free +1.833-SAGEBIO.","reach-out":"We may want to reach out to you.","opt-out":"You can opt out of these follow up notifications at any time"}},"quiz-screen":{q1:{q:"What is the purpose of this study?",a1:"Understand the changes in Parkinson’s disease symptoms ",a2:"Give medical and treatment advice to people with Parkinson’s disease",a3:"Diagnose people with Parkinson’s disease"},q2:{q:"What will be used to identify my study data?",a1:"My full name",a2:"My house address",a3:"My Global Unique Identifier (GUID)"},q3:{q:"I decided to share my data broadly with qualified researchers and now I want to stop. What happens to the data I have already shared?",a1:"My account and all my data will be deleted ",a2:"The data I already shared will continue to be used in research",a3:"My data will be sent to my regular healthcare provider"},q4:{q:"Are there risks of participating in this study?",a1:"There is no risk of participating in this research study",a2:"There is a risk that my regular doctor won’t be allowed to care for me any longer",a3:"Some activities may be tiring and seeing my data may be stressful"},q5:{q:"With the mPower app I will be able to",a1:"Track my symptoms and triggers",a2:"Schedule an appointment with my regular doctor",a3:"Join a support group for people living with Parkinson's disease"}},"ineligible-screen":{requirements:"You must be at least 18, live in the US or Canada, and be comfortable using a smartphone to participate."}}},WzDB:function(e,t){e.exports={"eligibility-screen":{title:"Laten we kijken of u geschikt bent",q1:{"i-am":"Ik ben","years-old":"jaar oud."},q2:{"i-live":"Ik woon",select:"Select","in-US":"in de Verenigde Staten","in-other":"in Nederland","outside-eligible-area":"niet in de Verenigde Staten of Nederland"},q3:{i:"Ik",select:"Select","have-apple":" heb een Apple","have-android":" heb een Android","do-not-have":" heb een geen","smart-phone":"smartphone."}},"consent-screen":{"step-1":{title:"Wat is erbij betrokken","install-on-phone":"Installeer de mPower app op uw telefoon.","use-app-to":"Om veranderingen in uw gezondheid te begrijpen vragen we u het volgende:","answer-health-questions":"Bij aanvang van het onderzoek beantwoordt een aantal vragen over uw gezondheid (5 minuten).","track-symptoms":"U kunt uw gezondheid dagelijks bijhouden via uw symptomen en medicatie (5 minuten).","complete-activities":"Iedere drie maanden wordt u gevraagd om dagelijks een aantal activiteiten op de app te doen gedurende twee weken, zoals tikken met uw vingers (10 minuten).","participation-time":"We hopen dat u twee jaar mee wilt doen met het onderzoek, maar u mag meedoen zolang u wilt."},"step-2":{title:"Gegevensverzameling, opslag en privacy","data-encrypted":"Uw data is versleuteld op uw telefoon.","collect-data":"We verzamelen de versleutelde antwoorden op de vragenlijsten, gegevens van activiteiten en passieve sensor metingen vanaf uw telefoon.","not-location":"We verzamelen NIET uw exacte locatie of wat u typt op uw telefoon (bijvoorbeeld SMS, e-mails, etc.).","use-guid":"We vervangen uw naam met een willekeurige code en combineren uw gecodeerde onderzoeksgegevens met gegevens van andere vrijwilligers.","on-cloud":"We bewaren de gecodeerde gegevens op een beveiligde online server."},"step-3":{title:"Gegevensgebruik en trends","view-activities":"U kunt uw symptomen, medicatie naleving en op sensor gebaseerde activiteiten zien.","see-data":"U kunt uw gegevens en trends in uw gegevens zien.","use-for-research":"We zullen uw gegevens voor onderzoek gebruiken.",patterns:"We zullen de onderzoeksgegevens gebruiken om te kijken naar patronen. Deze patronen kunnen ons mogelijk helpen om de symptomen van de ziekte van Parkinson beter te begrijpen."},"step-4":{title:"Delen voor toekomstig onderzoek","sharing-data":"Het breder delen van uw gecodeerde onderzoeksgegevens (zonder informatie zoals uw naam) kan helpen bij dit en toekomstig onderzoek.","share-with-researchers":"U kunt zelf beslissen of u uw gecodeerde gegevens breder wilt delen.","cannot-withdraw":"Wanneer we uw gegevens hebben gedeeld met andere onderzoekers, kunnen we het niet meer terugtrekken."},"step-5":{title:"Potentiële risico’s","low-participation":"We verwachten dat de risico’s van het meedoen aan dit onderzoek laag zijn.",tiring:"Sommige activiteiten of vragen kunnen vermoeiend, frustrerend of saai zijn of kunnen u zich oncomfortabel laten voelen.",emotions:"Het zien van uw gegevens kan verschillende emoties opwekken.",hacked:"We doen ons uiterste best om uw informatie te beschermen, maar er bestaat een (zeer kleine) kans dat uw gegevens worden gehackt.",unknowns:"Er kunnen mogelijk risico’s zijn waar we op dit moment nog niet van weten."},"step-6":{title:"Potentiële voordelen","interesting-trends":"U vindt mogelijk geen directe voordelen aan het meedoen aan dit onderzoek maar het zien van trends in uw gegevens kan interessant zijn voor u.",share:"U kunt uw gegevens delen met uw dokters, familieleden en anderen.","help-all":"U kunt onderzoekers helpen om de ziekte van Parkinson beter te begrijpen. Dat kan volgende generaties helpen."},"step-7":{title:"Geen medische zorg","research-study":"mPower is een onderzoek.","not-medical-care":"mPower voorziet geen medische zorg, medisch advies of behandeling.","not-diagnosis-tool":"De mPower app is geen middel voor diagnostiek.",concerns:"Neem contact op met uw zorgverlener als u vragen of zorgen heeft gerelateerd aan uw gezondheid of als u medische zorg nodig heeft."},"step-8":{title:"Zaken om te overwegen","data-plan":"De hoeveelheid data die deze app gebruikt, kan wellicht niet passen in uw mobiele abonnement. U kunt instellen dat de app Wi-Fi connecties gebruikt in plaats van mobiele data (zoals 4G).","not-paid":"U wordt niet betaald voor het meedoen aan dit onderzoek. U wordt niet betaald voor het delen van uw gegevens.","no-profit":"U ontvangt geen enkele winst van dit of toekomstig onderzoek.",injury:"Het risico op blessures is laag in dit onderzoek. U wordt niet gecompenseerd voor blessures/ U krijgt geen vergoeding bij blessures."},"step-9":{title:"Verlaten van het onderzoek",voluntary:"Uw deelname is vrijwillig.",leave:"U kunt het onderzoek op ieder moment verlaten voor iedere reden.","withdraw-consent":"Als u het onderzoek verlaat, kunt u uw toestemming terugtrekken.","before-withdraw":"Uw onderzoeksgegevens van voor uw terugtrekking zullen wel worden gebruikt in het onderzoek."},"step-10":{title:"Contact",email:"Als u vragen heeft, kunt u contact met ons opnemen via stepwise.neuro@radboudumc.nl","reach-out":"We kunnen mogelijk contact met u opnemen.","opt-out":"U kunt u op ieder moment afmelden voor het onderzoek."}},"quiz-screen":{q1:{q:"Wat is het doel van dit onderzoek?",a1:"Begrijpen van fluctuaties in de symptomen van de ziekte van Parkinson",a2:"Medische en behandelingsadviezen geven aan mensen met de ziekte van Parkinson",a3:"Diagnosticeren van de ziekte van Parkinson bij mensen"},q2:{q:"Wat zal worden gebruikt om mijn onderzoeksgegevens te identificeren?",a1:"Mijn volledige naam",a2:"Mijn thuisadres",a3:"Mijn willekeurige code"},q3:{q:"Als ik beslis om mijn gegevens te delen met gekwalificeerde onderzoekers en mij dan bedenk, wat gebeurt er dan met mijn reeds verzamelde gegevens?",a1:"Mijn account en gegevens worden verwijderd",a2:"Mijn gegevens zullen nog worden gebruikt in onderzoek",a3:"Mijn gegevens worden verstuurd naar mijn reguliere zorgverlener"},q4:{q:"Zijn er risico’s verbonden aan het meedoen aan dit onderzoek?",a1:"Er zijn geen risico’s verbonden aan het meedoen aan dit onderzoek",a2:"Er is een risico dat mijn reguliere arts niet meer is toegestaan om mij zorg te verlenen",a3:"Sommige activiteiten kunnen vermoeiend zijn en het zien van mijn gegevens kan emoties oproepen"},q5:{q:"Met de mPower app ben ik in staat om",a1:"Mijn symptomen bij te houden",a2:"Een afspraak te maken bij mijn reguliere arts",a3:"Mij aan te sluiten bij een steungroep voor mensen met de ziekte van Parkinson"}},"ineligible-screen":{requirements:"You must be at least 18, live in the US or the Netherlands, and be comfortable using a smartphone to participate."}}},dKnv:function(e,t){},gQJl:function(e,t){},hFeb:function(e,t,n){var o={"./en.json":"NuBg","./nl.json":"WzDB"};function a(e){return n(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="hFeb"},lbBO:function(e,t){},uTOX:function(e,t,n){"use strict";var o=n("XyMi");var a=function(e){n("C+Nt")},i=Object(o.a)({name:"Footer"},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",[n("div",[e._v("2018 mPower")]),e._v(" "),n("router-link",{attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")]),e._v(" "),n("div",[e._v("|")]),e._v(" "),n("router-link",{attrs:{to:"/license"}},[e._v("License")]),e._v(" "),n("div",[e._v("|")]),e._v(" "),n("router-link",{attrs:{to:"/faq"}},[e._v("FAQ")]),e._v(" "),n("div",[e._v("|")]),e._v(" "),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1),e._v(" "),n("div",[e._v("\n    mPower is for research use only and does not provide medical advice, diagnosis or treatment.\n  ")])])},[],!1,a,"data-v-e4e0790a",null);t.a=i.exports},uqcV:function(e,t,n){"use strict";var o=n("XyMi");var a=function(e){n("lbBO")},i=Object(o.a)({name:"MainNav"},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"left"},[n("BridgeImage",{attrs:{src:"/static/images/logo.svg"}})],1),e._v(" "),n("div",{staticClass:"center"},[n("router-link",{attrs:{to:"/your-story"}},[e._v("Your Story")]),e._v(" "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),n("router-link",{attrs:{to:"/team"}},[e._v("Team")])],1),e._v(" "),n("div",{staticClass:"right"},[n("router-link",{staticClass:"join-button",attrs:{to:"/study/intro"}},[e._v("Join")])],1)])},[],!1,a,"data-v-e9f0a394",null);t.a=i.exports},wtjx:function(e,t,n){"use strict";var o=n("Z60a"),a=n.n(o),i=n("C9uT"),r=n.n(i),s={};function u(e){return s[e]}function l(e,t){s[e]=t}function d(e,t){s[e]=t}var c=function(){function e(){a()(this,e)}return r()(e,[{key:"clearAll",value:function(){s={}}},{key:"getSharingScope",value:function(){return u("scope")||""}},{key:"setSharingScope",value:function(e){l("scope",e)}},{key:"getPhone",value:function(){return u("phone")||""}},{key:"setPhone",value:function(e){l("phone",e)}},{key:"getSystem",value:function(){return u("os")||""}},{key:"setSystem",value:function(e){l("os",e)}},{key:"getName",value:function(){return u("name")||""}},{key:"setName",value:function(e){l("name",e)}},{key:"getAnswers",value:function(){return s["answers"]||{}}},{key:"setAnswers",value:function(e){d("answers",e)}},{key:"getCurrentStep",value:function(){return s["currentStep"]||0}},{key:"setCurrentStep",value:function(e){d("currentStep",e)}},{key:"advanceCurrentStep",value:function(){this.setCurrentStep(this.getCurrentStep()+1)}}]),e}();c.UNSTARTED=0,c.ELIGIBILITY_DONE=1,c.CONSENT_DONE=2,c.QUIZ_DONE=3,c.SIGN_DONE=4,c.REGISTER_DONE=5,t.a=c}},[0]);
//# sourceMappingURL=app.cf7dcf223f3207caba6d.js.map