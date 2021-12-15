class Game {
    constructor(id, name, category, description, published, image, outstanding) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.published = published;
        this.image = image;
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
        "age_of_empire_IV.png", "age_of_empire_IV.png",
        false
    ),
    new Game(
        2,
        "Red dead redemption II",
        "Mundo abierto",
        "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era. Incluye Red Dead Redemption 2: Modo Historia y Red Dead Online.",
        true,
        "red_dead_redemption_II.jpg",
        false
    ),
    new Game(
        3,
        "Farming simulator 22",
        "Simulacion",
        "Ponte en la piel de un granjero de hoy en día y construye tu granja en tres entornos americanos y europeos. Farming Simulator 22 ofrece una gran variedad de elementos y se centra en la agricultura, la cría de animales y la silvicultura. Ahora, además, ¡se han añadido los ciclos por estaciones!",
        true,
        "farming_simulator_22.jfif",
        false
    ),
    new Game(
        4,
        "Far cry 6",
        "Mundo abierto",
        "Te damos la bienvenida a Yara, un paraíso tropical que se ha detenido en el tiempo. El dictador de Yara, Antón Castillo, está decidido a devolver a su nación la antigua gloria perdida por cualquier medio, y su hijo Diego sigue sus sangrientos pasos. La opresión a la que someten a su pueblo ha dado pie a una revolución.",
        true,
        "far_cry_6.jpg",
        false
    ),
    new Game(
        5,
        "God of War Ragnarök",
        "Acción",
        "Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök.",
        false,
        "god_of_war_ragnarok.jpg",
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
