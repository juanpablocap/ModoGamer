//mostramos juegos en main.html

let games = localStorage.getItem("games");
let gamesLS = JSON.parse(games);
console.log(gamesLS);

function publicados() {
  gamesLS.forEach((game) => {
    if (game.published == true) {
      let data = document.createElement("div");
      let largo = game.description.length;
      console.log(largo);

      if (game.description.length > 100) {
        limite = game.description.substr(0, 100) + "...";
      }
      data.id = game.id;
      data.innerHTML = `
            <a href="/gamedetails.html#${game.id}">
            <img src="img/games/${game.image}" alt="${game.id}" id="${game.id}"></a>
            <h3>${game.name}</h3>
            <p>${limite}</p>
            <i id="cart" onclick="agregarCarrito(event)" class="fas fa-shopping-cart"></i>
            `;
      let table = document.querySelector(".news-cards");
      table.appendChild(data);
    }
  });
}

publicados();

function redirigir(event) {
  let padre = event.target.parentElement.id;
  window.location.assign(window.location.origin + `gamedetails.html#${game.id}`);
}

function agregarCarrito(event) {

  let carrito; 
  if (localStorage.getItem("carrito") == null) {
    carrito = [];
    console.log("no hay nada");
  } else {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito);
  }

  console.log(event.target.parentElement);
  let idCarrito = event.target.parentElement.id;
  let game1 = gamesLS.find((juego) => juego.id == idCarrito);
  console.log(game1);
  carrito.push(game1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
