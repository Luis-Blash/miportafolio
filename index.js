window.addEventListener("load",()=>{
    // Habilidades
    let DATOS = [
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
    cardHabilidades(DATOS);

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
});