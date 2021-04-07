window.addEventListener("load",()=>{
    // Habilidades
    let habilidades_datos = [
        {
            "Titulo":"Lenguajes",
            "img_titulo":"src/Lenguajes/lenguaje-de-codificacion.png",
            "alt":"Lenguajes",
            "habilidades":[
                {
                    "nombre":"Python",
                    "img":"src/Lenguajes/python.png",
                    "alt":"Python"
                },
                {
                    "nombre":"JavaScript",
                    "img":"src/Lenguajes/javascript.png",
                    "alt":"JavaScript"
                },
                {
                    "nombre":"Html",
                    "img":"src/Lenguajes/html.png",
                    "alt":"Html"
                },
                {
                    "nombre":"Css",
                    "img":"src/Lenguajes/css.png",
                    "alt":"Css"
                }
            ]
        },
        {
            "Titulo":"Frameworks",
            "img_titulo":"src/Lenguajes/framework.png",
            "alt":"frameworks",
            "habilidades":[
                {
                    "nombre":"React",
                    "img":"src/Lenguajes/react.png",
                    "alt":"React"
                },
                {
                    "nombre":"Flask",
                    "img":"src/Lenguajes/flask.png",
                    "alt":"Flask"
                },
                {
                    "nombre":"Django",
                    "img":"src/Lenguajes/django.png",
                    "alt":"Django"
                },
                {
                    "nombre":"Docker",
                    "img":"src/Lenguajes/docker.png",
                    "alt":"Docker"
                }
            ]
        }
    ];

    // Crear las card habilidades
    function cardHabilidades(datos) {
        let habilidades = document.getElementById("habilidades");
        
        datos.forEach(element => {
            // Creamos etiquetas
            let div_habilidades_card = document.createElement("div");
            // Clase de div habilidades card
            div_habilidades_card.classList = "habilidades_card";
            // creamos etiquetas dentro de div habilidades card
            let titulo_habilidades_card = document.createElement("h2");
            let imagen_habilidades_card = document.createElement("img");
            // agregamos el div donde ira la lista de habilidades
            let div_habilidades_card_info = document.createElement("div");
            div_habilidades_card_info.classList = "habilidades_card_info";
            let ul = document.createElement("ul");
            // agregar habilidades_card => habilidades
            habilidades.append(div_habilidades_card);
            // Datos de habilidades_card
            titulo_habilidades_card.innerHTML = element["Titulo"];
            div_habilidades_card.append(titulo_habilidades_card);
            imagen_habilidades_card.src = element["img_titulo"];
            imagen_habilidades_card.alt = element["alt"];
            div_habilidades_card.append(imagen_habilidades_card);
            div_habilidades_card.append(div_habilidades_card_info);
            // Agregar ul => lista habilidades
            div_habilidades_card_info.append(ul);
            // creamos las etiquetas li de nuestras habilidades
            element["habilidades"].forEach(element => {
                let lista_habilidades_card = document.createElement("li");
                let lista_habilidades_card_imagen = document.createElement("img");
                lista_habilidades_card.innerHTML= element["nombre"];
                ul.append(lista_habilidades_card);
                lista_habilidades_card_imagen.src = element["img"];
                lista_habilidades_card_imagen.alt = element["alt"];
                lista_habilidades_card.append(lista_habilidades_card_imagen);
            });
                
            
        });
    }
    cardHabilidades(habilidades_datos);

    // Contactame
    let gmail = document.getElementById("gmail");
    gmail.addEventListener("click",() =>{
        let card_social = document.getElementById("social");
        let div_muestra = document.createElement("div");
        div_muestra.classList = "muestra";
        div_muestra.id = "muestra";
        card_social.append(div_muestra);
        let correo = document.createElement("p");
        correo.innerHTML = "luisocampo.dev@gmail.com"
        correo.id = "correo";
        let copiar =  document.createElement("div");
        copiar.innerHTML = "copiar";
        copiar.classList = "boton";
        div_muestra.append(correo);
        copiar.addEventListener("click",() => {
            eliminar(copiar);
        });
        div_muestra.append(copiar);

    })
    function eliminar(copiar) {
        let no_mostrar = document.getElementById("muestra");
        copiar.innerHTML = "Copiado ✔"
        copiarCorreo("correo");
        no_mostrar.classList = "no_mostrar"
        let tiempo = setInterval(()=>{
            console.log("Eliminado");
            no_mostrar.remove();
            clearInterval(tiempo);
        },900);
    }
    function copiarCorreo(id) {
        let aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }

    // Mi proyectos
    let proyectos_datos = [
        {
            "imagen_proyecto":"https://raw.githubusercontent.com/Luis-Blash/to-do-list/main/images/js/desde_js.png",
            "alt": "todolist",
            "titulo":"To-do List",
            "herramientas":["flask","javascript","css","html","mongo"],
            "descripcion":"To-do list es un proyecto el cual consiste en poner conectar tus tareas, una rest api creada con flask con conexion a mongo db y con diferentes concexiones frontend",
            "link":"https://github.com/Luis-Blash/to-do-list"
        },
        {
            "imagen_proyecto":"src/trabajos/composturas.png",
            "alt": "Composturas Eri",
            "titulo":"Composturas Eri",
            "herramientas":["javascript","html","css"],
            "descripcion":"Composturas Eri es un proyecto hecho para una persona que se encarga de hacer composturas y arreglos a la ropa, es una pagina para poder contactarla",
            "link":"https://composturaseri.netlify.app/"
        },
        {
            "imagen_proyecto":"https://raw.githubusercontent.com/Luis-Blash/kodbox/master/github/Bienvenida.png",
            "alt": "Kodbox",
            "titulo":"Kodbox",
            "herramientas":["django","python","css","html"],
            "descripcion":"Kodbox es una pagina donde pudes subir noticias de programación parecido a un blog, usando el framework Django",
            "link":"https://github.com/Luis-Blash/kodbox"
        },
        {
            "imagen_proyecto":"https://raw.githubusercontent.com/Luis-Blash/hotel-react/main/hotel.png",
            "alt": "Hotel React",
            "titulo":"Hotel React",
            "herramientas":["react","javascript","css","html"],
            "descripcion":"Es una pagina muestra de como usar react para poder ver que tipo de cuarto hay",
            "link":"https://github.com/Luis-Blash/hotel-react"
        },
        {
            "imagen_proyecto":"https://raw.githubusercontent.com/ErickRV19/GameJS/master/img/Preview/GameJs%201.png",
            "alt": "Game JS",
            "titulo":"GameJS",
            "herramientas":["javascript","css","html"],
            "descripcion":"Es un proyecto colaborativo donde puedes subir juegos hechos en javascript como si de una plaaforma se tratara",
            "link":"https://github.com/Luis-Blash/GameJS"
        },
        {
            "imagen_proyecto":"src/trabajos/aprendeflask.png",
            "alt": "Aprende Flask",
            "titulo":"Aprende Flask",
            "herramientas":["javascript","css","html","bootstrap"],
            "descripcion":"Aprende flask es una pagina para aprender lo basico de del microframework el cual es flask",
            "link":"https://aprende-flask.netlify.app/"
        }
    ];

    function proyectosCard(datos) {
        let proyectos = document.getElementById("proyectos");
        datos.forEach(element =>{
            // se crea el div de proyectos card
            let div_proyectos_card = document.createElement("div");
            div_proyectos_card.classList = "proyectos_card";
            proyectos.append(div_proyectos_card);
            // se creaa los div de imagen y de la información
            let div_proyectos_card_imagen = document.createElement("div");
            div_proyectos_card_imagen.classList = "proyectos_card_imagen";
            let div_proyectos_card_info = document.createElement("div");
            div_proyectos_card_info.classList = "proyectos_card_info";
            // agreagar las nuevas etiquetas a proyectos card
            div_proyectos_card.append(div_proyectos_card_imagen);
            div_proyectos_card.append(div_proyectos_card_info);
            // crear lenguajes y agregar a div_proyectos_card_info
            let card_info_creado = document.createElement("div");
            card_info_creado.classList = "proyectos_card_info_creado";
            div_proyectos_card_info.append(card_info_creado);
            element["herramientas"].forEach(element => {
                let span =  document.createElement("span");
                span.id = element;
                span.innerHTML = element;
                card_info_creado.append(span);
            });
            // crear imagen 
            let imagen = document.createElement("img");
            imagen.src = element["imagen_proyecto"];
            imagen.alt = element["alt"];
            div_proyectos_card_imagen.append(imagen);
            // crear titulo
            let titulo = document.createElement("h2");
            titulo.innerHTML = element["titulo"];
            div_proyectos_card_info.append(titulo);
            // crear descripcion
            let descripcion = document.createElement("p");
            descripcion.innerHTML = element["descripcion"];
            div_proyectos_card_info.append(descripcion);
            // Link si tiene pagina
            let link = document.createElement("a");
            link.href = element["link"];
            link.target = "_blank";
            link.innerHTML= "Visita: " + element["titulo"];
            div_proyectos_card_info.append(link);
        })
    }
    proyectosCard(proyectos_datos);
});