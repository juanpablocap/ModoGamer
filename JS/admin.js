class Game {
    constructor(id, name, category, description, published, image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.published = published;
        this.image = image;
    }
}

let games = [
    new Game(
        1,
        "Age of empire IV",
        "Estrategia",
        "Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.",
        false,
        "age_of_empire_IV.png"
    ),
    new Game(
        2,
        "Red dead redemption II",
        "Mundo abierto",
        "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era. Incluye Red Dead Redemption 2: Modo Historia y Red Dead Online.",
        true,
        "red_dead_redemption_II.jpg"
    ),
    new Game(
        3,
        "Farming simulator 22",
        "Simulacion",
        "Ponte en la piel de un granjero de hoy en día y construye tu granja en tres entornos americanos y europeos. Farming Simulator 22 ofrece una gran variedad de elementos y se centra en la agricultura, la cría de animales y la silvicultura. Ahora, además, ¡se han añadido los ciclos por estaciones!",
        true,
        "farming_simulator_22.jfif"
    ),
    new Game(
        4,
        "Far cry 6",
        "Mundo abierto",
        "Te damos la bienvenida a Yara, un paraíso tropical que se ha detenido en el tiempo. El dictador de Yara, Antón Castillo, está decidido a devolver a su nación la antigua gloria perdida por cualquier medio, y su hijo Diego sigue sus sangrientos pasos. La opresión a la que someten a su pueblo ha dado pie a una revolución.",
        true,
        "far_cry_6.jpg"
    ),
    new Game(
        5,
        "God of War Ragnarök",
        "Acción",
        "Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök.",
        false,
        "god_of_war_ragnarok.jpg"
    ),
    
];

if (!localStorage.getItem("games")) {
    let gamesJSON = JSON.stringify(games);
    localStorage.setItem("games", gamesJSON);
}

mostrarJuegosTabla();

function mostrarJuegosTabla() {
    let data = localStorage.getItem("games");
    let gamesLS = JSON.parse(data);
    
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
        <button onclick="publicado(${game.id})" id="btnPublicado${game.id}"></button>
        </div></td>
        <td class="col-sm-2 col-md-2 col-lg-1">
        <section class="d-flex flex-column justify-content-center align-items-center btnOpciones">
        <div class="opacityIMG_Button imgHover">
        <button onclick="eliminarJuego(${game.id})" class="btn btn-danger m-1"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="opacityIMG_Button imgHover">
        <button onclick="datosJuegoMod(${game.id})" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#adminModal"><i class="fas fa-edit"></i></button>
        </div>
        <div class="opacityIMG_Button imgHover">
        <button onclick="destacarJuego(${game.id})" class="btn btn-warning m-1"><i class="fas fa-medal"></i></button>
        </div>
        </section>
        </td>
        <td class="col-sm-8 col-md-8 col-lg-4">
        <div class="opacityIMG_Button">
        <img src="../IMAGENES/imgGames/${game.image}" class="img-fluid imgJuego">
        </div>
        </td>
        `
        data.className="row paddingTr";
        //data.style="color: color :hover blueviolet";
        let table = document.querySelector("#cuerpoTabla");
        table.appendChild(data);
        colorPublicado(game.published, game.id);
        
    });
}

function crearModalMod(id) {

    let modalModificar = document.createElement("div");
    modalModificar.innerHTML = `
    <div class="modal" id="modalModificar" tabindex="-1">   
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title">Modificar juego</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form class="d-flex flex-column" action="" method="post">
                                    <label class="text-center">ID - ${id}</label>
                                    <label for="gameNameMod">Nombre</label>
                                    <input type="text" name="gameNameMod" id="gameNameMod">
                                    <label for="gameCategoryMod">Categoria</label>
                                    <input type="text" name="gameCategoryMod" id="gameCategoryMod">
                                    <label for="gameDescriptionMod">Descripción</label>
                                    <input type="text" name="gameDescriptionMod" id="gameDescriptionMod">
                                    <label for="gamePublishedMod">Publicado</label>
                                    <input type="checkbox" name="gamePublishedMod" id="gamePublishedMod">
                                    <label for="gameImageURLMod">URL Imagen</label>
                                    <input type="url" name="gameImageURLMod" id="gameImageURLMod">
                                </form>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" onclick="modificarJuego(${id})" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>    
                        </div>
                    </div>
    `
    let modal = document.querySelector("body");
    modal.appendChild(modalModificar);

}

function agregarJuego() {

    let data = localStorage.getItem("games");
    let gamesLS = JSON.parse(data);
    console.log(document.getElementById("gameID").value);
    gamesLS.forEach(game => {
        if(game.id == parseInt(document.getElementById("gameID").value)){

            let name = document.getElementById("gameName").value;
            let category = document.getElementById("gameCategory").value;
            let description = document.getElementById("gameDescription").value;
            let published = document.getElementById("gamePublished").checked ? true : false;
            let image = document.getElementById("gameImageURL").value;

            //console.log(id);
            console.log(game.id);

            game.name = name;
            game.category = category;
            game.description = description;
            game.published = published;
            game.image = image;

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
        let image = document.getElementById("gameImageURL").value;

        let newGame = new Game(id, name, category, description, published, image);

        gamesLS.push(newGame);

        data = JSON.stringify(gamesLS);
        localStorage.setItem("games", data);

        window.location.assign(window.location.origin + "/admin.html");
    }
}

function eliminarJuego(id) {
    let games = localStorage.getItem("games");
    let gamesLS = JSON.parse(games);

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
                        timer: 1150
                    });    
                }
                //window.location.assign(window.location.origin + "/admin.html");
            });
                     
        }
    });
}

function datosJuegoMod(id) { 

    let data = localStorage.getItem("games");
    let gamesLS = JSON.parse(data);

    gamesLS.forEach(game => {
        if(game.id == id){
            document.getElementById('gameID').value = game.id;
            document.getElementById('gameName').value = game.name;
            document.getElementById('gameCategory').value = game.category;
            document.getElementById('gameDescription').value = game.description;
            document.getElementById('gamePublished').checked = game.published;
            document.getElementById('gameImageURL').value = game.image;
        }
    });
}

function destacarJuego(id) { }

function publicado(id) {
    let games = localStorage.getItem("games");
    let gamesLS = JSON.parse(games);
    
    gamesLS.forEach((game) => {
        if (game.id == id) {
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
                        let btnP = document.getElementById("btnPublicado"+id);
                        btnP.className = "btn btn-primary";

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Juego publicado',
                            showConfirmButton: false,
                            timer: 1150
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
                        let btnP = document.getElementById("btnPublicado"+id);
                        btnP.className = "btn btn-danger";

                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Juego sin publicar',
                            showConfirmButton: false,
                            timer: 1150
                        });                      
                    }
                });
            }
        }
    });   
}

function colorPublicado(colorPublished, id) {
    
    if (colorPublished) {   
        let btnP = document.getElementById("btnPublicado"+id);
        btnP.className = "btn btn-primary";
    } else {
        let btnP = document.getElementById("btnPublicado"+id);
        btnP.className = "btn btn-danger";
    } 
}

function limpiarCamposModal (){
    document.getElementById("gameID").value = "ID Autoincremental";
    document.getElementById("gameName").value = "";
    document.getElementById("gameCategory").value = "";
    document.getElementById("gameDescription").value = "";
    document.getElementById("gamePublished").checked = false;
    document.getElementById("gameImageURL").value = "";
}

function limitarCaracteres(){
    if(game.description.length > 120){
        limite = game.description.substr(0, 120)+"...";
     }
}
