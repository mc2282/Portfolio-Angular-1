import{a as k}from"./chunk-XV2SNXW5.js";import{e as h}from"./chunk-CRZ3PT6Z.js";import{$a as n,Db as y,Ib as P,Na as b,O as x,Oa as f,Pa as t,Qa as i,Ra as d,U as c,Wa as p,Y as u,ab as s,bb as m,db as v,ta as l,wa as r}from"./chunk-DNODGKGS.js";var g=class o{http=c(P);urlProjects=k.urlProjects;getProjects(){return this.http.get(this.urlProjects)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"})};var S=(o,a)=>a.id;function j(o,a){if(o&1&&(t(0,"div",5),d(1,"img",6),t(2,"div",7)(3,"span",8),n(4),i(),t(5,"span",8),n(6),i(),t(7,"span",8),n(8),i()(),t(9,"div",9)(10,"div",10),n(11),i(),t(12,"div",11),n(13),i()(),t(14,"div",12)(15,"div",13)(16,"a",14),d(17,"i",15),n(18," Code"),i()(),t(19,"div",13)(20,"a",14),d(21,"i",16),n(22," Preview"),i()()()()),o&2){let e=a.$implicit;r(),p("src",e.imagen,l),r(3),s(e.tecnologia1),r(2),s(e.tecnologia2),r(2),m("",e.tecnologia3," "),r(3),s(e.titulo),r(2),m("",e.descripcion," "),r(3),p("href",e.linkPreview,l),r(4),p("href",e.linkPreview,l)}}function M(o,a){o&1&&(t(0,"p"),n(1,"No hay proyectos."),i())}var w=class o{listaProyectos=[{id:"1",titulo:"Encriptador de Texto",tecnologia1:"JavaScript",tecnologia2:"CSS3",tecnologia3:"NodeJS",descripcion:"Aplicaci\xF3n Web del Proyecto ONE de Oracle+Alura LATAM desarrollada con tecnolog\xEDa HTML5, CSS3 y JavaScript, cuya funci\xF3n es encriptar y desencriptar un texto",imagen:"images/proyecto_alura.webp",linkCode:"https://github.com/mc2282/JuegoPPT",linkPreview:"https://mc2282.github.io/JuegoPPT/"},{id:"2",titulo:"Juego Blackjack",tecnologia1:"JavaScript",tecnologia2:"CSS3",tecnologia3:"Vite",descripcion:"Desarrollo del juego cl\xE1sico de Blackjack utilizando JavaScript, con jugabilidad interactiva y seguimiento de puntajes en tiempo real. Empleo de funciones modulares de JavaScript para gestionar diferentes aspectos del juego, incluyendo la creaci\xF3n del mazo, el reparto de cartas, el c\xE1lculo del valor de las cartas, la creaci\xF3n de HTML para las cartas y la l\xF3gica del turno del computador.",imagen:"images/proyecto_blackjack.webp",linkCode:"https://github.com/mc2282/JS-Blackjack",linkPreview:"https://blackjack-js-vite-app.netlify.app/"},{id:"3",titulo:"Juego Piedra, Papel o Tijera",tecnologia1:"JavaScript",tecnologia2:"CSS3",tecnologia3:"HTML5",descripcion:"Desarrollado con Javascript, CSS3 y HTML5",imagen:"images/proyecto_ppt.webp",linkCode:"https://github.com/mc2282/JuegoPPT",linkPreview:"https://mc2282.github.io/JuegoPPT/"},{id:"4",titulo:"Tareas List",tecnologia1:"JavaScript",tecnologia2:"NodeJS",tecnologia3:"Angular",descripcion:"Aplicaci\xF3n desarrollada con HTML5, CSS3, JavaScript y Angular que permite la gestion de tareas y el almacenamiento de las mismas, simulando una base de datos con un servidor json",imagen:"images/proyecto_tareas.webp",linkCode:"https://github.com/mc2282/TareasList",linkPreview:"https://mc2282.github.io/TareasList"}];ngOnInit(){}proyectoService=c(g);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-projects"]],standalone:!0,features:[v],decls:10,vars:1,consts:[["id","proyectos"],[1,"proyectos_contenido"],["id","proyectos_titulo","data-aos","fade-up"],["id","proyectos_descripcion","data-aos","fade-up"],[1,"contenedor_cards"],["data-aos","fade-up","data-aos-duration","1000",1,"card"],[1,"card_imagen",3,"src"],[1,"contenedor_tecnologias"],[1,"tecnologia"],[1,"card_content"],[1,"card_title"],[1,"card_description"],[1,"contenedor_links"],["data-aos","fade-up",1,"contenedor_link"],[1,"linkPreview","gradient-border",3,"href"],[1,"fa-brands","fa-github","icon_link"],[1,"fa-solid","fa-link","icon_link"]],template:function(e,_){e&1&&(t(0,"section",0)(1,"div",1)(2,"h2",2),n(3,"Proyectos"),i(),t(4,"p",3),n(5,"He realizado los siguientes proyectos"),i(),t(6,"div",4),b(7,j,23,8,"div",5,S,!1,M,2,0,"p"),i()()()),e&2&&(r(7),f(_.listaProyectos))},dependencies:[y,h],styles:["#proyectos[_ngcontent-%COMP%]{display:flex;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:relative;z-index:1;-webkit-box-align:center;align-items:center}.proyectos_contenido[_ngcontent-%COMP%]{position:relative;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;flex-direction:column;width:100%;max-width:1100px;gap:12px}#proyectos_titulo[_ngcontent-%COMP%]{font-size:42px;text-align:center;font-weight:600;margin-top:20px;color:var(--text-primary-color)}#proyectos_descripcion[_ngcontent-%COMP%]{font-size:18px;text-align:center;max-width:600px;color:var(--text-secondary-color)}.card[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;width:330px;height:490px;background-color:var(--background-color);cursor:pointer;border-radius:10px;overflow:hidden;padding:26px 20px;display:flex;flex-direction:column;gap:14px;transition:.5s ease-in-out;border:1px solid var(--border-color-card);font-size:1.3em}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);transition-duration:.5s}.contenedor_cards[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;gap:28px;flex-wrap:wrap}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;background-color:var(--text-primary-color);border-radius:10px}.contenedor_tecnologias[_ngcontent-%COMP%]{width:100%;display:flex;-webkit-box-align:center;align-items:center;flex-wrap:wrap;gap:8px;margin-top:4px}.tecnologia[_ngcontent-%COMP%]{cursor:pointer;box-sizing:border-box;margin:0;font-size:12px;font-weight:400;color:var(--text-primary-color);background-color:rgba(var(--tertiary-color-o),.8);padding:2px 8px;border-radius:10px}.card_content[_ngcontent-%COMP%]{cursor:pointer;box-sizing:border-box;margin:0;width:100%;display:flex;flex-direction:column;gap:0px;padding:0 2px}.card_title[_ngcontent-%COMP%]{cursor:pointer;box-sizing:border-box;margin:0;padding:0;font-size:20px;font-weight:600;color:var(--text-primary-color);display:-webkit-box;max-width:100%;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card_description[_ngcontent-%COMP%]{cursor:pointer;box-sizing:border-box;margin:8px 0 0;padding:0;font-weight:400;color:var(--text-secondary-color);overflow:hidden;display:-webkit-box;max-width:100%;-webkit-box-orient:vertical;text-overflow:ellipsis}.linkCode[_ngcontent-%COMP%], .linkPreview[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;text-decoration:none;width:200px;height:auto;max-width:100px;text-align:center;padding:1em;color:var(--text-primary-color);border-radius:20px;cursor:pointer;font-size:14px;font-weight:600;background:var(--background-color);transition:.2s ease-in-out!important}.contenedor_links[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1em}.icon_link[_ngcontent-%COMP%]{margin-right:8px;font-size:18px}.linkCode[_ngcontent-%COMP%]:hover, .linkPreview[_ngcontent-%COMP%]:hover{background-color:var(--tertiary-color)}"]})};export{w as a};
