class Game {
    constructor(id, name, category, description, published, image, logo, back, i1, i2, i3,i4, i5, i6 ,i7, v1, b1, b2, b3, t1, t2, t3, h1, h2, h3, distri, studio, date, link, outstanding) {
    
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.published = published;
        this.image = image;
        this.logo = logo;
        this.back = back;
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = i3;
        this.i4 = i4;
        this.i5 = i5;
        this.i6 = i6;
        this.i7 = i7;
        this.v1 = v1;
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
        this.h1 = h1;
        this.h2 = h2;
        this.h3 = h3;
        this.distri = distri;
        this.studio =studio;
        this.date = date;
        this.link = link;

  
        this.outstanding = outstanding
    }
  }

let games = [
    new Game(
        1,
        "Age of empire IV",
        "Estrategia",
        "Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.",
        false,
        "..img/agelogo.png",
        "./img/agelogo.png",
        "./img/ageback.png",
        "./img/age1.jpg",
        "./img/age2.jpg",
        "./img/age3.jpg",
        "./img/age4.jpg",
        "./img/age5.jpg",
        "./img/age6.jpg",
        "./img/age7.jpg",
        "./img/agevideo.mp4",
        "./img/ageB1.jpg",
        "./img/ageB2.jpg",
        "./img/ageB3.jpg",
        "Age of Empires 4 da una mayor importancia a los asedios en las batallas más grandes que se han librado jamás en esta veterana serie de Microsoft",
        "Con cuatro campañas históricas y ocho civilizaciones disponibles en su lanzamiento, este nuevo RTS ambientado en la Edad Media presenta grandes novedades con respecto a los clásicos de Ensemble Studios",
        "El juego tiene 8 civilizaciones en su lanzamiento, con normandos, chinos, mongoles y sultanato de Delhi como primeros imperios confirmados",
        "Mismo espíritu, imagen renovada",
        "Campañas inolvidables",
        "Mas civilizaciones, mayor contenido",
        "steam",
        "relic",
        "28 de octubre de 2021",
        "https://www.ageofempires.com/",

        
        false
    ),
    new Game(
        2,
        "Red dead redemption II",
        "Mundo abierto",
        "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era. Incluye Red Dead Redemption 2: Modo Historia y Red Dead Online.",
        true,
        "",
        "./img/redlogo.png",
        "./img/redback.jpg",
        "./img/red1.jpg",
        "./img/red2.jpg",
        "./img/red3.jpg",
        "./img/red4.jpg",
        "./img/red5.jpg",
        "./img/red6.jpg",
        "./img/red7.jpg",
        "./img/redvideo.mp4",
        "./img/redB1.jpg",
        "./img/redB2.jpg",
        "./img/redB3.jpg",
        "Persigue a fugitivos; caza, pesca y comercia; busca tesoros exóticos; monta tu propia destilería de licor ilegal; o hazte Naturalista para aprender los secretos del reino animal y mucho más en un mundo increíblemente profundo y detallado.",
        "Adéntrate en el dinámico mundo en constante evolución de Red Dead Online y descubre la vida en la frontera americana. Persigue a fugitivos, enfréntate a bandas de forajidos y a otros jugadores",
        "Mientras las divisiones internas aumentan y amenazan con separarlos a todos, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",
        "Detalle al máximo",
        "Red Dead Online",
        "Lealtad",
        "epicgames",
        "rockstargames",
        "5 de Noviembre de 2019",
        "https://www.rockstargames.com/es/games/reddeadredemption2",
        
        false
    ),
    new Game(
        3,
        "Farming simulator 22",
        "Simulacion",
        "Ponte en la piel de un granjero de hoy en día y construye tu granja en tres entornos americanos y europeos. Farming Simulator 22 ofrece una gran variedad de elementos y se centra en la agricultura, la cría de animales y la silvicultura. Ahora, además, ¡se han añadido los ciclos por estaciones!",
        true,
        "",
        "./img/farlogo.png",
        "./img/farback.jpg",
        "./img/far1.jpg",
        "./img/far2.jpg",
        "./img/far3.jpg",
        "./img/far4.jpg",
        "./img/far5.jpg",
        "./img/far6.jpg",
        "./img/far7.jpg",
        "./img/farvideo.mp4",
        "./img/farB1.jpg",
        "./img/farB2.jpg",
        "./img/farB3.jpg",
        "Arranca motores y disfruta del sonido de la tradición agrícola europea. Con el Zetor Z-25 K labrarás los campos con un motor diésel bicilíndrico de cuatro tiempos de otra época.",
        "¡El paquete de pedidos anticipado definitivo! Pero si ya hizo un pedido anticipado de Farming Simulator 22 - Pre-Order Bundle, no hay problema, simplemente agregue Farming Simulator 22 - YEAR 1 Season Pass por el mismo precio.",
        "Consigue el Fendt 900 Vario Black Beauty para Farming Simulator 22 y dale un toque de elegancia a tu granja cuando recorras los campos y carreteras.",
        "FS22 - ZETOR 25 K",
        "Farming Simulator 22 - YEAR 1 Bundle",
        "FS22 - FENDT 900 VARIO BLACK BEAUTY",
        "epicgames",
        "giants-software",
        "22 de Noviembre de 2021",
        "https://farming-simulator.com/about.php",
        
        false
    ),
    new Game(
        4,
        "Far cry 6",
        "Mundo abierto",
        "Te damos la bienvenida a Yara, un paraíso tropical que se ha detenido en el tiempo. El dictador de Yara, Antón Castillo, está decidido a devolver a su nación la antigua gloria perdida por cualquier medio, y su hijo Diego sigue sus sangrientos pasos. La opresión a la que someten a su pueblo ha dado pie a una revolución.",
        true,
        "",
        "./img/crylogo.png",
        "./img/cryback.jpg",
        "./img/cry1.jpg",
        "./img/cry2.jpg",
        "./img/cry3.jpg",
        "./img/cry4.jpg",
        "./img/cry5.jpg",
        "./img/cry6.jpg",
        "./img/cry7.jpg",
        "./img/cryvideo.mp4",
        "./img/cryB1.jpg",
        "./img/cryB2.jpg",
        "./img/cryB3.jpg",
        "Mientras Anton Castillo promete restaurar la otrora próspera nación isleña de Yara, está preparando a su hijo, Diego, para que se convierta en el próximo presidente.",
        "Anton planea forjar su paraíso cueste lo que cueste, incluso si esto significa sacrificar a algunos de sus propios ciudadanos.",
        "Después de escapar por poco de las fuerzas del régimen, Dani se unió a Libertad, un grupo heterogéneo de guerrilleros, para liberar a su hogar de las garras de Anton y del régimen corrupto.",
        "CONFÍA EN TU LÍDER",
        "CUIDADO CON EL DICTADOR",
        "CONOCE A DANI ROJAS",
        "epicgames",
        "ubisoft",
        "7 de Octubre de 2021",
        "https://www.ubisoft.com/es-mx/game/far-cry/far-cry-6",
        
        false
    ),
    new Game(
        5,
        "God of War Ragnarök",
        "Acción",
        "Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök.",
        false,
        "",
        "./img/godlogo.png",
        "./img/godback.jpg",
        "./img/god1.jpg",
        "./img/god2.jpg",
        "./img/god3.jpg",
        "./img/god4.jpg",
        "./img/god5.jpg",
        "./img/god6.jpg",
        "./img/god7.jpg",
        "./img/godvideo.mp4",
        "./img/godB1.jpg",
        "./img/godB2.jpg",
        "./img/godB3.jpg",
        'Atreus busca información que lo ayude a comprender la profecía de "Loki" y el papel que desempeñará en el Ragnarök. Kratos debe decidir entre quedarse atado al miedo de repetir sus errores o librarse del pasado para ser el padre que Atreus necesita.',
        "El hacha Leviatán, las Espadas del Caos y el Escudo de guardián regresan junto con una amplia variedad de nuevas habilidades para Kratos y Atreus",
        "Viaja a increíbles y peligrosos entornos y enfréntate a un montón de diferentes criaturas, monstruos y dioses nórdicos, mientras Kratos y Atreus buscan respuestas y aliados.",
        "Aquellos que rompen el destino",
        "Armas de guerra",
        "Explora los reinos",
        "playstation",
        "santa monica studio",
        "Early 2022",
        "https://www.playstation.com/es-ar/games/god-of-war-ragnarok/",
        false
    ),
    new Game(
        6,
        
    "Fifa 22",
    "Deportes",
    `Powered by Football™, EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos

    EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. Las innovaciones en las mecánicas de juego de FIFA 22 ofrecen un comportamiento más`,
        false,
        "",
        "./img/fifalogo.png",
        "./img/fifaback.jpg",
        "./img/fifa1.jpg",
        "./img/fifa2.jpg",
        "./img/fifa3.jpg",
        "./img/fifa4.jpg",
        "./img/fifa5.jpg",
        "./img/fifa6.jpg",
        "./img/fifa7.jpg",
        "./img/fifavideo.mp4",
        "./img/fifaB1.jpg",
        "./img/fifaB2.jpg",
        "./img/fifaB3.jpg",
        "Con la membresía Pro se recibe la Edición EA Play Pro de FIFA 22, que incluye un artículo de Héroes de FUT, un artículo de jugador Promesas, hasta 4800 FIFA Points y mucho más.",
        "Mejora tu forma de jugar con características más adaptables y detalladas, como la reprogramación de porteros, las físicas del balón, el sprint explosivo y las nuevas tácticas de ataque.",
        "Crea un club en el modo Carrera y llévalo desde los puestos de descenso hasta lo más alto de la competición.",
        "EA Play Pro Edition",
        "Nuevas características de juego",
        "Haz realidad tus sueños",
        "electronicarts",
        "ea",
        "1 de Octubre de 2021",
        "https://www.ea.com/es-es/games/fifa/fifa-22",
        false
    ),
    new Game(
        7,
        "Battlefield 2042",
        "Shooter",
        "Adáptate y sobrevive en un mundo transformado por el desorden. Battlefield™ 2042 es un shooter en primera persona que marca el regreso a la emblemática guerra total de la franquicia. En un mundo en un futuro cercano transformado por el desorden, adáptate y sobrevive con la ayuda de tu patrulla y un arsenal de vanguardia en campos de batalla en constante cambio.",
        true,
        "",
        "./img/batlogo.png",
        "./img/batback.jpg",
        "./img/bat1.jpg",
        "./img/bat2.jpg",
        "./img/bat3.jpg",
        "./img/bat4.jpg",
        "./img/bat5.jpg",
        "./img/bat6.jpg",
        "./img/bat7.jpg",
        "./img/batvideo.mp4",
        "./img/batB1.jpg",
        "./img/batB2.jpg",
        "./img/batB3.jpg",
        "Mejora tu experiencia en Battlefield 2042 con la Ultimate Edition. Consigue acceso anticipado a partir del 12 de noviembre, objetos estéticos exclusivos, un libro de ilustraciones digital y mucho más.",
        "Despliégate tras las líneas enemigas para extraer información en una experiencia de supervivencia con grandes riesgos. En esta batalla solo tienes una vida, así que haz que cada bala, cada combate y cada decisión cuenten.",
        "Battlefield 2042 presenta 7 mapas enormes con partidas para hasta 128* jugadores. Desde las ciudades de Seúl hasta los desiertos de Egipto, todos los mapas ofrecen una experiencia única centrada en un entorno natural.",
        "Actualiza a la Ultimate Edition",
        "Battlefield Hazard Zone",
        "Lucha en campos de batalla épicos",
        "electronicarts",
        "dice",
        "19 de Noviembre de 2021",
        "https://www.ea.com/es-es/games/battlefield/battlefield-2042",
        false
    ),
    new Game(
        8,
        "Los Sims 4",
        "Simulacion",
        "Da rienda suelta a tu imaginación y crea un mundo de Sims totalmente único. Explora y personaliza todos los detalles, desde tus Sims a sus hogares y mucho más. Elige el aspecto, la personalidad y la ropa de tus Sims. Define cómo van a vivir día a día. Diseña y construye casas increíbles para cada familia y luego decóralas con tus muebles y elementos decorativos favoritos.",
        true,
        "",
        "./img/simslogo.png",
        "./img/simsback.jpg",
        "./img/sims1.jpg",
        "./img/sims2.jpg",
        "./img/sims3.jpg",
        "./img/sims4.jpg",
        "./img/sims5.jpg",
        "./img/sims6.jpg",
        "./img/sims7.jpg",
        "./img/simsvideo.mp4",
        "./img/simsB1.jpg",
        "./img/simsB2.jpg",
        "./img/simsB3.jpg",
        "Crea Sims o casas diferentes para cada aspecto de tu personalidad o, simplemente, cambia tu vestuario. Tienes más de una faceta, así que expresa cada peculiaridad de tu identidad con Los Sims 4.",
        "El control de la vida y de los Sims está en tus manos. Personaliza tus Sims únicos, diseña sus casas y llévalos a vivir aventuras salvajes relacionadas con la fama, el romance, las vacaciones y festividades y mucho más.",
        "Conoce a las criaturas de la noche, dirige un restaurante popular o disfruta de un día de spa con aventuras temáticas y divertidas.",
        "Encuentra hoy a tu yo interior",
        "Cada día es diferente con Los Sims",
        "Packs de Contenido",
        "electronicarts",
        "maxis",
        "2 de Septiembre de 2014",
        "https://www.ea.com/es-es/games/the-sims",
        false
    ),
    new Game(
        9,
        "Apex Legends",
        "Shooter",
        "Domina con estilo en Apex Legends, un juego gratuito* de acción en primera persona, donde personajes legendarios con poderosas habilidades forman equipos para luchar y lograr fortuna y gloria en los confines de la Frontera.",
        true,
        "",
        "./img/apexlogo.png",
        "./img/apexback.jpg",
        "./img/apex1.jpg",
        "./img/apex2.jpg",
        "./img/apex3.jpg",
        "./img/apex4.jpg",
        "./img/apex5.jpg",
        "./img/apex6.jpg",
        "./img/apex7.jpg",
        "./img/apexvideo.mp4",
        "./img/apexB1.jpg",
        "./img/apexB2.jpg",
        "./img/apexB3.jpg",
        "¡Vuelve el modo Expreso Hibernal! Elige tu equipamiento, entra en Fin del mundo y captura el tren antes que los otros 2 pelotones. Además, desbloquea óbjetos estéticos limitados del evento para sacar los piratas internos de las leyendas.",
        "Apex Legends presenta un nuevo mapa donde no podrás bajar la guardia: una isla tan paradisíaca como peligrosa, atestada de merodeadores salvajes y arañas asesinas.",
        "Encuentra la leyenda cuyas habilidades se adaptan mejor a tu estilo y ayuda a tu pelotón a alzase como campeón.",
        "Evento de colección Piratas",
        "Nuevo mapa: Punto Tormenta",
        "Conviértete en leyenda",
        "electronicarts",
        "respawn",
        "4 de Febrero de 2019",
        "https://www.ea.com/es-es/games/apex-legends",
        false
    ),
    
];

if (!localStorage.getItem("games")) {
    let gamesJSON = JSON.stringify(games);
    localStorage.setItem("games", gamesJSON);
}

mostrarJuegosTabla();

function mostrarJuegosTabla() {
    
    let gamesLS = getLocalS();
    gamesLS.forEach((game) => {
        let data = document.createElement("tr");
        
        data.innerHTML = `
        <th class="col-sm-2 col-md-2 col-lg-1">Codigo</th>
        <td class="col-sm-2 col-md-2 col-lg-1">Nombre</td>
        <td class="col-sm-3 col-md-3 col-lg-1">Categoria</td>
        <td class="col-sm-5 col-md-5 col-lg-3">Descripcion</td>
        <td class="col-sm-1 col-md-1 col-lg-1 trTabla">Publicado</td>
        <td class="col-sm-1 col-md-1 col-lg-1 trTabla">Opciones</td>
        <td class="col-sm-12 col-md-12 col-lg-4 trTabla">Imagen</td>
        <th class="col-sm-2 col-md-2 col-lg-1">${game.id}</th>
        <td class="col-sm-2 col-md-2 col-lg-1">${game.name}</td>
        <td class="col-sm-3 col-md-3 col-lg-1">${game.category}</td>
        <td class="col-sm-5 col-md-5 col-lg-3">${(game.description.length>120) ? game.description.substr(0, 120)+"..." : game.description}</td>
        <td class="col-sm-2 col-md-2 col-lg-1"><div>
        <button onclick="publicado(${game.id})" id="publishedBtn${game.id}"></button>
        </div></td>
        <td class="col-sm-2 col-md-2 col-lg-1">
        <section class="d-flex flex-column justify-content-center align-items-center btnOpciones">
        <div class="opacityIMG_Button imgHover">
        <button onclick="eliminarJuego(${game.id})" class="btn btn-danger m-1" title="Eliminar juego"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="opacityIMG_Button imgHover">
        <button onclick="datosJuegoMod(${game.id})" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#adminModal" title="Modificar juego"><i class="fas fa-list-alt"></i></button>
        </div>
        <div class="opacityIMG_Button imgHover">
        <button onclick="destacado(${game.id})" class="btn btn-secondary m-1" id="outstandingBtn${game.id}" title="Destacar juego"><i class="fas fa-medal"></i></button>
        </div>
        </section>
        </td>
        <td class="col-sm-8 col-md-8 col-lg-4">
        <div class="opacityIMG_Button" >
        <img src="../IMAGENES/imgGames/${game.image}" class="img-fluid imgJuego" alt="${game.image}">
        </div>
        </td>
        `
        data.className="row paddingTr";
        //data.style="color: color :hover blueviolet";
        let table = document.querySelector("#cuerpoTabla");
        table.appendChild(data);
        colorButton(game.published, game.id, "published");
        colorButton(game.outstanding, game.id, "outstanding");
        
        
    });
}

function agregarJuego() {

    let gamesLS = getLocalS();

    console.log(document.getElementById("gameID").value);
    gamesLS.forEach(game => {
        if(game.id == parseInt(document.getElementById("gameID").value)){

            let name = document.getElementById("gameName").value;
            let category = document.getElementById("gameCategory").value;
            let description = document.getElementById("gameDescription").value;
            let published = document.getElementById("gamePublished").checked ? true : false;
            let outstanding = document.getElementById("gameOutstanding").checked ? true : false;
            let image = document.getElementById("gameImageURL").value;

            console.log(game.id);

            game.name = name;
            game.category = category;
            game.description = description;
            game.published = published;
            game.image = image;
            game.outstanding = outstanding;

            data = JSON.stringify(gamesLS);
            localStorage.setItem("games", data);
            
            window.location.assign(window.location.origin + "/admin.html");

        }
    });

    if(document.getElementById("gameID").value == "ID Autoincremental") {
        let id = localStorage.getItem("games").length + 1;
        let name = document.getElementById("gameName").value;
        let category = document.getElementById("gameCategory").value;
        let description = document.getElementById("gameDescription").value;
        let published = document.getElementById("gamePublished").checked ? true : false;
        let outstanding = document.getElementById("gameOutstanding").checked ? true : false;
        let image = document.getElementById("gameImageURL").value;

        let newGame = new Game(id, name, category, description, published, image, outstanding);

        gamesLS.push(newGame);

        data = JSON.stringify(gamesLS);
        localStorage.setItem("games", data);

        window.location.assign(window.location.origin + "/admin.html");
    }
}

function eliminarJuego(id) {
    
    let gamesLS = getLocalS();

    Swal.fire({
        title: "¿Eliminar juego?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
    }).then((result) => {
        if (result.isConfirmed) {

            gamesLS.forEach((game, cont) => {
                if (game.id === id) {
                    gamesLS.splice(cont, 1);
                    data = JSON.stringify(gamesLS);
                    localStorage.setItem("games", data);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Juego eliminado',
                        showConfirmButton: false,
                        timer: 1100
                    });    
                }
                //window.location.assign(window.location.origin + "/admin.html");
            });
                     
        }
    });
}

function datosJuegoMod(id) { 

    let gamesLS = getLocalS();

    gamesLS.forEach(game => {
        if(game.id == id){
            document.getElementById('gameID').value = game.id;
            document.getElementById('gameName').value = game.name;
            document.getElementById('gameCategory').value = game.category;
            document.getElementById('gameDescription').value = game.description;
            document.getElementById('gamePublished').checked = game.published;
            document.getElementById('gameOutstanding').checked = game.outstanding;
            document.getElementById('gameImageURL').value = game.image;
        }
    });
}

function publicado(id) {
    
    let gamesLS = getLocalS();
    
    gamesLS.forEach((game) => {
        
        if (game.id === id) {
            
            if (game.published == false) {
                Swal.fire({
                    title: "¿Publicar?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                }).then((result) => {
                    if (result.isConfirmed) {

                        game.published = true;
                        data = JSON.stringify(gamesLS);
                        localStorage.setItem("games", data);
                        let btnP = document.getElementById("publishedBtn"+id);
                        btnP.className = "btn btn-success";

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Juego publicado',
                            showConfirmButton: false,
                            timer: 1100
                        });         
                    }
                });
            } else {
                Swal.fire({
                    title: "¿No publicar?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                }).then((result) => {
                    if (result.isConfirmed) {

                        game.published = false;
                        data = JSON.stringify(gamesLS);
                        localStorage.setItem("games", data);
                        let btnP = document.getElementById("publishedBtn"+id);
                        btnP.className = "btn btn-danger";

                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Juego sin publicar',
                            showConfirmButton: false,
                            timer: 1100
                        });                      
                    }
                });
            }
        }
    });   
}

function destacado(id) {
    
    let gamesLS = getLocalS();
    
    gamesLS.forEach((game) => {
        
        if (game.id === id) {
            
            if (game.outstanding == false) {
                Swal.fire({
                    title: "¿Destacar juego?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                }).then((result) => {
                    if (result.isConfirmed) {

                        game.outstanding = true;
                        data = JSON.stringify(gamesLS);
                        localStorage.setItem("games", data);
                        let btnD = document.getElementById("outstandingBtn"+id);
                        btnD.className = "btn btn-warning";

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Juego destacado',
                            showConfirmButton: false,
                            timer: 1100
                        });         
                    }
                });
            } else {
                Swal.fire({
                    title: "¿No destacar?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                }).then((result) => {
                    if (result.isConfirmed) {

                        game.outstanding = false;
                        data = JSON.stringify(gamesLS);
                        localStorage.setItem("games", data);
                        let btnD = document.getElementById("outstandingBtn"+id);
                        btnD.className = "btn btn-secondary";

                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Juego sin destacar',
                            showConfirmButton: false,
                            timer: 1100
                        });                      
                    }
                });
            }
        }
    });   
}

function colorButton(color, id, tipoBoton) {
    
    if (color) {
        let btnC = document.getElementById(tipoBoton+"Btn"+id);
        (tipoBoton == "published")? btnC.className = "btn btn-success" : btnC.className = "btn btn-warning";
    } else {
        let btnC = document.getElementById(tipoBoton+"Btn"+id);
        (tipoBoton == "published")? btnC.className = "btn btn-danger" : btnC.className = "btn btn-secondary";
    } 
}

function limpiarCamposModal (){
    document.getElementById("gameID").value = "ID Autoincremental";
    document.getElementById("gameName").value = "";
    document.getElementById("gameCategory").value = "";
    document.getElementById("gameDescription").value = "";
    document.getElementById("gamePublished").checked = false;
    document.getElementById("gameOutstanding").checked = false;
    document.getElementById("gameImageURL").value = "";
}

function getLocalS(){
    let games = localStorage.getItem("games");
    let gamesLS = JSON.parse(games);
    return gamesLS;
}
