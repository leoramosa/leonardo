(this["webpackJsonpecommerce-shop"]=this["webpackJsonpecommerce-shop"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"home.designer":"Designer","home.front-end":"Front-end Developer, ","home.button":"Spanish","home.button.lan":"English","info.designer":"I design and code beautifully simple things, and I love what I do."}')},102:function(e){e.exports=JSON.parse('{"home.designer":"Dise\xf1ador","home.front-end":"Desarrollador front-end, ","home.button":"Espa\xf1ol","home.button.lan":"Ingles","info.designer":"Dise\xf1o y codifico cosas maravillosamente simples, y amo lo que hago."}')},120:function(e,a,t){e.exports=t(170)},125:function(e,a,t){},147:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},170:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(9),s=t.n(c),r=(t(125),t(100)),m=t(12),i=t(211),o=t(207),u=(t(126),t(127),t(128),t(129),t(26));t(50);function p(e){var a={};return e.username.trim()||(a.username="Nombre requerido"),e.message.trim()||(a.message="Mensaje requerido"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Escribe un email v\xe1lido"):a.email="Escribe un email",a}var d=t(28),E=t(55),v=t(79),N=t.n(v),g=function(e,a){var t=Object(l.useState)({username:"",message:"",email:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(l.useState)({}),m=Object(u.a)(r,2),i=m[0],o=m[1],p=Object(l.useState)(!1),v=Object(u.a)(p,2),g=v[0],f=v[1];return Object(l.useEffect)((function(){0===Object.keys(i).length&&g&&e()}),[i,g,e]),{handleChange:function(e){var a=e.target,t=a.name,l=a.value;s(Object(E.a)(Object(E.a)({},c),{},Object(d.a)({},t,l)))},handleSubmit:function(e){e.preventDefault(),o(a(c)),f(!0),N.a.post("https://getform.io/f/0b2d3fb1-f132-4714-8ce2-b67f4cc4bb6a",c,{headers:{Accept:"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},values:c,errors:i}},f=function(e){var a=e.submitForm,t=g(a,p),l=t.handleChange,c=t.handleSubmit,s=t.values,r=t.errors;return n.a.createElement("div",{className:"form-content-right"},n.a.createElement("form",{onSubmit:c,className:"form",noValidate:!0},n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Nombre"),n.a.createElement("input",{className:"form-input",type:"text",name:"username",placeholder:"Escribe tu nombre",value:s.username,onChange:l}),r.username&&n.a.createElement("p",null,r.username)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Email"),n.a.createElement("input",{className:"form-input",type:"email",name:"email",placeholder:"Escribe tu email",value:s.email,onChange:l}),r.email&&n.a.createElement("p",null,r.email)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Selecciona un plan"),n.a.createElement("br",null),n.a.createElement("select",{name:"package",className:"form-input",id:"package"},n.a.createElement("option",{value:""},"Selecciona"),n.a.createElement("option",{value:"Basic"},"B\xe1sico"),n.a.createElement("option",{value:"Standard"},"Standard"),n.a.createElement("option",{value:"Premium"},"Premium"))),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Mensaje"),n.a.createElement("textarea",{className:"form-input textarea",type:"text",name:"message",placeholder:"Escribe un mensaje",value:s.message,onChange:l}),r.message&&n.a.createElement("p",null,r.message)),n.a.createElement("button",{className:"form-input-btn",type:"submit"},"Enviar")))},b=function(){return n.a.createElement("div",{className:"form-content-right-success"},n.a.createElement("h1",{className:"form-success"},n.a.createElement("i",{class:"fas fa-paper-plane"})," Mensaje enviado con \xe9xito"))},h=t(80),j=t.n(h),k=function(){var e=Object(l.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-container"},t?n.a.createElement(b,null):n.a.createElement(f,{submitForm:function(){c(!0)}}),n.a.createElement("div",{className:"form-content-left"},"Escr\xedbeme por Whatsapp:",n.a.createElement("div",{className:"whastapp-btn"},n.a.createElement("a",{href:"https://wa.me/51938459420"},n.a.createElement("div",{className:"whatsapp"},n.a.createElement("div",{className:"content-btn"},n.a.createElement("div",{className:"img-what"},n.a.createElement("img",{src:j.a,alt:""})),"Env\xedame un mensaje")))))))},_=t(31),y=t(70),w=t(71),x=t(72),S=t(73),O=t(74),C=(t(147),t(203)),D=t(81),P=t.n(D),L=t(82),A=t.n(L),B=t(83),F=t.n(B),M=t(84),V=t.n(M),q=t(85),I=t.n(q),W=t(86),z=t.n(W),H=t(87),R=t.n(H),J=t(88),T=t.n(J),G=t(89),U=t.n(G),X=t(90),Z=t.n(X),K=t(91),Q=t.n(K),Y=t(92),$=t.n(Y),ee=t(93),ae=t.n(ee),te=t(94),le=t.n(te),ne=t(95),ce=t.n(ne),se=t(96),re=t.n(se),me=t(213);_.a.use([y.a,w.a,x.a,S.a]),_.a.use([O.a]);var ie=function(){var e=Object(me.a)().t;return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{className:"HomeLayout"},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"content_information"},n.a.createElement("div",{className:"title_img"},n.a.createElement("h1",null,e("home.front-end")," ",e("home.designer")),n.a.createElement("p",null," ",e("info.designer"))),n.a.createElement("div",{className:"img_info"},n.a.createElement("img",{src:R.a,alt:""})))),n.a.createElement("div",{className:"contact-project"},n.a.createElement("div",{className:"start-project"},"Iniciar Un proyecto"),n.a.createElement("div",{className:"start-project_info"},n.a.createElement("p",null,"Interesado en trabajar juntos? Deber\xedamos hacer cola para charlar. Comprar\xe9 el caf\xe9.")),n.a.createElement("div",{className:"start-project_btn"},n.a.createElement("div",{className:"start-project_btn_content"},"comenzar"))),n.a.createElement(i.a,{spaceBetween:50,slidesPerView:1,loop:!0,navigation:!0,breakpoints:{1228:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20},960:{slidesPerView:3,spaceBetween:20},600:{slidesPerView:2,spaceBetween:20},500:{slidesPerView:1,spaceBetween:20}},onSwiper:function(e){return console.log(e)},onSlideChange:function(){return console.log("slide change")}},n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:P.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Auditor\xedas de sitios web"),n.a.createElement("p",{className:"info-icons"},"\xbfBusca mejorar el rendimiento de su p\xe1gina, el SEO o la experiencia del usuario? Solicite una auditor\xeda gratuita del sitio."))),n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:A.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Gesti\xf3n de contenido"),n.a.createElement("p",{className:"info-icons"},"Desarrollo personalizado de plugins y temas de WordPress. Actualice f\xe1cilmente el contenido sin saber c\xf3mo codificar."))),n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:F.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Dise\xf1o + Desarrollo"),n.a.createElement("p",{className:"info-icons"},"Integraci\xf3n de plataformas de comercio electr\xf3nico, pasarelas de pago, plantillas de productos personalizadas y m\xe1s."))),n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:V.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Ecommerce"),n.a.createElement("p",{className:"info-icons"},"Integraci\xf3n de plataformas de comercio electr\xf3nico, pasarelas de pago, plantillas de productos personalizadas y m\xe1s."))),n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:I.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Anal\xedtica"),n.a.createElement("p",{className:"info-icons"},"Obtenga informaci\xf3n sobre qui\xe9n est\xe1 navegando en su sitio para que pueda tomar decisiones comerciales m\xe1s inteligentes."))),n.a.createElement(o.a,null,n.a.createElement("div",{className:"svg-icon"},n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"svg-img",src:z.a,alt:""})),n.a.createElement("p",{className:"info__title"},"Mobile-friendly"),n.a.createElement("p",{className:"info-icons"},"Un responsive design hace que su sitio web sea accesible para todos los usuarios, independientemente de su dispositivo.")))))),n.a.createElement("section",{className:"section about",id:"about"},n.a.createElement("div",{className:"content about__content"},n.a.createElement("div",{className:"about_info"},n.a.createElement("h1",{className:"about__title"},"Hola, soy Leo. Encantado de conocerte."),n.a.createElement("p",null,"Soy Desarrollador Front-end y dise\xf1ador independiente hace casi 2 a\xf1os, he trabajado a distancia para agencias y he colaborado con personas talentosas para crear productos digitales para uso comercial y de consumo. Tengo una confianza tranquila, una curiosidad natural y un trabajo constante para mejorar mis habilidades.")))),n.a.createElement("section",{className:"section skills has-text-centered"},n.a.createElement("div",{className:"container is-narrow"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"content is-centered"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column"},n.a.createElement("figure",{className:"image"},n.a.createElement("img",{src:T.a,alt:""})),n.a.createElement("h1",{className:"tilte-skills"},"Dise\xf1ador"),n.a.createElement("p",null,"Valoro la estructura de contenido simple, los patrones de dise\xf1o limpios y las interacciones reflexivas."),n.a.createElement("p",{className:"list-title"},"Cosas que disfruto dise\xf1ando:"),n.a.createElement("p",null,"UX, UI, Web, Mobile, Apps, Logos"),n.a.createElement("p",{className:"list-title"},"Herramientas de dise\xf1o:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Balsamiq Mockups"),n.a.createElement("li",null,"Figma"),n.a.createElement("li",null,"Invision"),n.a.createElement("li",null,"Marvel"),n.a.createElement("li",null,"Pen & Paper"),n.a.createElement("li",null,"Sketch"),n.a.createElement("li",null,"Webflow"),n.a.createElement("li",null,"Zeplin"))),n.a.createElement("div",{className:"column"},n.a.createElement("figure",{className:"image"},n.a.createElement("img",{src:U.a,alt:""})),n.a.createElement("h1",{className:"tilte-skills"},"Desarrollador front-end"),n.a.createElement("p",null,"Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador."),n.a.createElement("p",{className:"list-title"},"Lenguajes de programacion:"),n.a.createElement("p",null,"HTML, Pug, CSS, Sass, Javascript, ReactJs, Angular, Svelte"),n.a.createElement("p",{className:"list-title"},"Herramientas de desarrollo:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Atom"),n.a.createElement("li",null,"Bootstrap"),n.a.createElement("li",null,"Bulma"),n.a.createElement("li",null,"Github"),n.a.createElement("li",null,"Terminal"))),n.a.createElement("div",{className:"column"},n.a.createElement("figure",{className:"image"},n.a.createElement("img",{src:Z.a,alt:""})),n.a.createElement("h1",{className:"tilte-skills"},"Back-end Jr."),n.a.createElement("p",null,"Desarrollo aplicaciones web funcionales utilizando Python y Django, creo ApiRestFull con Djnago Rest Frameword o Express"),n.a.createElement("p",{className:"list-title"},"Lenguajes de programacion:"),n.a.createElement("p",null,"Python, Flash, Django, Next, Express, MongoDB, MySql"),n.a.createElement("p",{className:"list-title"},"Herramientas de desarrollo:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Visual Studio Code"),n.a.createElement("li",null,"PyCharn"),n.a.createElement("li",null,"SqlLite 3")))))))),n.a.createElement("section",{className:"project section",id:"portafolio"},n.a.createElement("div",{className:"content-project"},n.a.createElement("div",{className:"skills-title"},n.a.createElement("h1",null,"Mi trabajo reciente")),n.a.createElement("div",{className:"project_init"},n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"Petshop"),n.a.createElement("span",null,"(Ecommerce)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:Q.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://petshop-peru.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website"))))),n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"Ministerio Cultura"),n.a.createElement("span",null,"(Website)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:$.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://tlk-cultura.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website"))))),n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"Fedepedi"),n.a.createElement("span",null,"(ONG)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:ae.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://fedepedi.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website"))))),n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"Pugstagram"),n.a.createElement("span",null,"(Clon App)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:le.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://pugstagram-sapper.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website"))))),n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"CONF"),n.a.createElement("span",null,"(Website)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:ce.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://trusting-jones-33489a.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website"))))),n.a.createElement("div",{className:"column column-project"},n.a.createElement("div",{className:"box-project"},n.a.createElement("div",{className:"project_title"},n.a.createElement("p",null,"El Regreso"),n.a.createElement("span",null,"(Landin page)")),n.a.createElement("div",{className:"project_img"},n.a.createElement("img",{src:re.a,alt:""})),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://el-regreso.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Ver Website")))))))),n.a.createElement("section",{className:"price section",id:"price"},n.a.createElement("div",{className:"content-project"},n.a.createElement("div",{className:"price-title"},n.a.createElement("h1",null,"Precios por proyecto")),n.a.createElement("div",{className:"project_init"},n.a.createElement("div",{className:"column column-price"},n.a.createElement("div",{className:"box-price"},n.a.createElement("div",{className:"price_title"},n.a.createElement("p",null,"B\xc1SICO")),n.a.createElement("div",{className:"project_img"},n.a.createElement("ul",{className:"list-titl"},n.a.createElement("li",null,"Auditor\xeda del sitio web"),n.a.createElement("li",null,"Dise\xf1o"),n.a.createElement("li",null,"Desarrollo"))),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://petshop-peru.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Solicitud de cotizaci\xf3n"))))),n.a.createElement("div",{className:"column column-price"},n.a.createElement("div",{className:"box-price"},n.a.createElement("div",{className:"price_title two"},n.a.createElement("p",null,"STANDARD ")),n.a.createElement("div",{className:"project_img"},n.a.createElement("ul",{className:"list-titl"},n.a.createElement("li",null,"Auditor\xeda del sitio web"),n.a.createElement("li",null,"Dise\xf1o"),n.a.createElement("li",null,"Desarrollo"),n.a.createElement("li",null,"Copias de seguridad"),n.a.createElement("li",null,"Anal\xedtica"),n.a.createElement("li",null,"Chat en vivo"),n.a.createElement("li",null,"Optimizaci\xf3n de motores de b\xfasqueda"),n.a.createElement("li",null,"Gestion de contenido"))),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://petshop-peru.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Solicitud de cotizaci\xf3n"))))),n.a.createElement("div",{className:"column column-price"},n.a.createElement("div",{className:"box-price"},n.a.createElement("div",{className:"price_title three"},n.a.createElement("p",null,"PREMIUM")),n.a.createElement("div",{className:"project_img"},n.a.createElement("ul",{className:"list-titl"},n.a.createElement("li",null,"Auditor\xeda del sitio web"),n.a.createElement("li",null,"Dise\xf1o"),n.a.createElement("li",null,"Desarrollo"),n.a.createElement("li",null,"Copias de seguridad"),n.a.createElement("li",null,"Anal\xedtica"),n.a.createElement("li",null,"Chat en vivo"),n.a.createElement("li",null,"Optimizaci\xf3n de motores de b\xfasqueda"),n.a.createElement("li",null,"Gestion de contenido"),n.a.createElement("li",null,"mantenimiento"),n.a.createElement("li",null,"Ecommerce"),n.a.createElement("li",null,"configuraci\xf3n de correo electr\xf3nico"),n.a.createElement("li",null,"Hosting"))),n.a.createElement("div",{className:"project_button"},n.a.createElement("a",{href:"https://petshop-peru.netlify.app/",target:"blank"},n.a.createElement("div",{className:"btn-home"},"Solicitud de cotizacion")))))))),n.a.createElement("section",{className:"contact",id:"contact"},n.a.createElement("div",{className:"content-contact"},n.a.createElement("div",{className:"skills-title"},n.a.createElement("h1",null,"Cont\xe1ctame")),n.a.createElement("div",{className:"form"},n.a.createElement(k,null)))))};var oe=function(){return n.a.createElement("h1",null,"404: NOt found")},ue=(t(156),t(157),t(34)),pe=(t(165),t(212)),de=t(209),Ee=t(210),ve=t(208),Ne=Object(ve.a)((function(e){var a;return{root:{flexGrow:1},formControl:(a={margin:e.spacing(0),minWidth:120,width:"100%",justifyContent:" center"},Object(d.a)(a,e.breakpoints.down("xs"),{display:"none"}),Object(d.a)(a,e.breakpoints.down("sm"),{display:"none"}),Object(d.a)(a,e.breakpoints.down("md"),{display:"auto"}),Object(d.a)(a,e.breakpoints.down("xl"),{display:"auto"}),a),selectEmpty:{marginTop:e.spacing(2)},selectHome:{background:"white",marginTop:0}}}));var ge=function(){var e=Ne(),a=Object(me.a)(),t=a.t,c=a.i18n,s=Object(l.useState)("en"),r=Object(u.a)(s,2),m=r[0],i=r[1],o=Object(l.useState)("1"),p=Object(u.a)(o,2),d=p[0],E=p[1],v=Object(l.useState)(!1),N=Object(u.a)(v,2),g=N[0],f=N[1],b=function(){return f(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement(ue.Link,{to:"/",className:"navbar-logo",onClick:b},n.a.createElement("i",{className:"fab fa-firstdraft"}),"Leo Ramos"),n.a.createElement("div",{className:"menu-icon",onClick:function(){return f(!g)}},n.a.createElement("i",{className:g?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:g?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(ue.Link,{to:"/",className:"nav-links",onClick:b},"Inicio")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(ue.Link,{to:"about",smooth:!0,duration:1e3,className:"nav-links",onClick:b},"Con\xf3ceme")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(ue.Link,{to:"portafolio",smooth:!0,duration:1e3,onClick:b,className:"nav-links"},"Portafolio")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(ue.Link,{to:"price",smooth:!0,duration:1e3,onClick:b,className:"nav-links"},"Precios")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(ue.Link,{to:"contact",smooth:!0,duration:1e3,onClick:b,className:"nav-links"},"Cont\xe1ctame")),n.a.createElement(de.a,{variant:"outlined",className:e.formControl},n.a.createElement(Ee.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:d,onChange:function(e){E(e.target.value),c.changeLanguage(m),i("en"===m?"es":"en")},className:e.selectHome},n.a.createElement(pe.a,{value:1},t("home.button")),n.a.createElement(pe.a,{value:2},t("home.button.lan")))))))};t(166);var fe=function(){return n.a.createElement("div",null,n.a.createElement("footer",{className:"Footer"},n.a.createElement("div",{className:"container-footer"},n.a.createElement("div",{className:"column-footer"},n.a.createElement("div",{className:"column-footer-content"},n.a.createElement("div",{className:"box-footer"},"Copyright \xa9 2020 Leonardo Ramos - Todos los derechos reservados.")),n.a.createElement("div",{className:"column-footer-content"},n.a.createElement("div",{className:"single-footer-widget"},n.a.createElement("div",{className:"footer-social "},"Mis redes sociales",n.a.createElement("a",{className:"social",href:"https://www.instagram.com/leo.ramosa/",target:"blank"},n.a.createElement("i",{className:"fab fa-facebook-square"})),n.a.createElement("a",{className:"social",href:"https://www.facebook.com/leonardo.ramosa.13",target:"blank"},n.a.createElement("i",{className:"fab fa-instagram-square"})))))))))};t(167);var be=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"layout-global"},n.a.createElement(ge,null),n.a.createElement("div",{className:"layout-content"},n.a.createElement("div",{className:""},e.children)),n.a.createElement(fe,null)))};t(168);var he=function(){return n.a.createElement(r.a,null,n.a.createElement(be,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:ie}),n.a.createElement(m.a,{component:oe}))))},je=t(58),ke=t(42),_e={en:{translation:t(101)},es:{translation:t(102)}};je.a.use(ke.e).init({resources:_e,lng:"es",keySeparator:!1,interpolation:{escapeValue:!1}});je.a;var ye=document.getElementById("app");s.a.render(n.a.createElement(he,null),ye)},50:function(e,a,t){},80:function(e,a,t){e.exports=t.p+"static/media/whatsapp.3650878b.png"},81:function(e,a,t){e.exports=t.p+"static/media/web.5d93f029.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/gestion.3bfaa2c6.jpg"},83:function(e,a,t){e.exports=t.p+"static/media/desarrollo.9e1c0036.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/ecommerce.fb98fae5.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/analitica.7236d735.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/mobile.0b8770b8.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/hero.ae74261d.svg"},88:function(e,a,t){e.exports=t.p+"static/media/pencil.54adb9ad.svg"},89:function(e,a,t){e.exports=t.p+"static/media/code.00c47a20.svg"},90:function(e,a,t){e.exports=t.p+"static/media/base.b116857f.svg"},91:function(e,a,t){e.exports=t.p+"static/media/project1.cf5d9d72.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/project2.5423014a.jpg"},93:function(e,a,t){e.exports=t.p+"static/media/project3.dc01c737.jpg"},94:function(e,a,t){e.exports=t.p+"static/media/project4.78f222e4.jpg"},95:function(e,a,t){e.exports=t.p+"static/media/project5.5fb49117.jpg"},96:function(e,a,t){e.exports=t.p+"static/media/project6.937acfad.jpg"}},[[120,1,2]]]);
//# sourceMappingURL=main.323a74a0.chunk.js.map