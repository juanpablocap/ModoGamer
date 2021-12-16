//mostramos juegos en main.html

let games = localStorage.getItem("games");
let gamesLS = JSON.parse(games);

function publicados() {
  gamesLS.forEach((game) => {
    if (game.published == true) {
      let data = document.createElement("div");

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

let logs = localStorage.getItem('log');
let logLS = JSON.parse(logs);

datalog = document.getElementById("userlog");
console.log(datalog);
datalog.innerHTML = `Hola ${logLS.name}`;
let tab = document.querySelector("userlog");
tab.appendChild(datalog);