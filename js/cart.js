//CARRITO DE COMPRAS

let carrito;  //
  if(localStorage.getItem('carrito')==null){
    carrito = [];
    console.log("no hay nada");
  }else{
    carrito = JSON.parse(localStorage.getItem('carrito')) 
    console.log(carrito);
  }

  carrito.forEach(product=>{  
    let productCard = document.createElement('li');
    productCard.innerHTML =`
    <div id=${product.id}>
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="deleteGame(${product.id})" class="btn btn-primary">Eliminar</a>
      </div>
    </div>
    `;

    let carritoContainer = document.querySelector('.carrito-container');
    carritoContainer.appendChild(productCard);
  })

 function deleteGame() {

    localStorage.removeItem();
 }