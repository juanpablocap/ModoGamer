let games = JSON.parse(localStorage.getItem('games'));

let idGame = window.location.hash.slice(1);
let game = games.find(games => games.id == idGame);
console.log(idGame);

let detalle = document.createElement('div');
detalle.innerHTML = `
<h2>esta esla ID: ${game.id}</h2>
<p>El nombre del Juego es: ${game.name}</p>
<img src="/img/games/${game.image}" width="400" height= "300">
`;
let padre = document.getElementById('padre');
padre.appendChild(detalle);