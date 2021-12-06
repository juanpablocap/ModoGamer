//CARRITO DE COMPRAS
class Producto{
    constructor(id,nombre,precio,imagen){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  
  let carrito;
  if(JSON.parse(localStorage.getItem('carrito')).lenght===0){
    carrito = [];//['agua', 'cerveza', 'pan']
  }else{
    carrito=JSON.parse(localStorage.getItem('carrito'))
  }
  
  carrito.forEach(product=>{
    let productCard = document.createElement('li');
    productCard.innerHTML=`
    <div id=${product.id}class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${product.nombre}</h5>
      <p class="card-text">${product.precio}</p>
      <a href="#" class="btn btn-primary">Eliminar producto</a>
    </div>
    </div>
    `;
    let carritoContainer = document.querySelector('#carrito-container');
    carritoContainer.appendChild(productCard);
  })
  
  
  let productos = [new Producto(1,'Agua',100,''),
  new Producto(2,'Cerveza', 180, ''),
  new Producto(3,'1kg pan',100,''), 
  new Producto(4,'Vino',500,''), 
  new Producto(5,'Fernet Branca + Coca Cola',750,''), 
  new Producto(6,'Gin',1000,'')];
  console.log(productos);
  
  productos.forEach(producto=>{
    let productCard = document.createElement('div');
    productCard.innerHTML = `
    <div class="card my-3" id=${producto.id} style="width: 18rem;">
      <img src="../img/robo.jpg" class="card-img-top" alt="roborecall">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p></a>
      </div>
      <button onclick="addProduct(event)" class="btn btn-success">Agregar al carrito</button>
    </div>
    `;
    productCard.classList.add('col-4');
    let productContainer = document.querySelector('#products-container');
    productContainer.appendChild(productCard);
  })
  