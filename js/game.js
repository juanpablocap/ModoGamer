//script que crea la pagina de detalle de cada juego
// tiene que estar creado en el panel admin
let productos = JSON.parse(localStorage.getItem('productos'));

let idProducto = window.location.hash.slice(1);
let prod= productos.find(producto => producto.id == idProducto);
console.log(prod);

let paginaDetalle = document.createElement('div');
paginaDetalle.innerHTML = `
<h3>${prod.nombre}</h3>
<p>${prod.description}</p>
<p>${prod.precio}</p>
`;
let padre = document.getElementById('padre');
padre.appendChild(paginaDetalle);