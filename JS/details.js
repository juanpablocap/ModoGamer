 let games = JSON.parse(localStorage.getItem('games'));
 let idGame = window.location.hash.slice(1);
 let game = games.find(games => games.id == idGame);
 

// let detalle = document.createElement('div');
// detalle.innerHTML = `
// <h2>esta esla ID: ${game.id}</h2>
// <p>El nombre del Juego es: ${game.name}</p>
// <img src="/img/games/${game.image}" width="400" height= "300">
// `;
// let padre = document.getElementById('main');
// padre.appendChild(detalle);


//  class Game {
//    constructor(id, name, category, description, published, image, logo, back, i1, i2, i3,i4, i5, i6 ,i7, b1, b2, b3) {
//        this.id = id;
//        this.name = name;
//        this.category = category;
//        this.description = description;
//        this.published = published;
//        this.image = image;
//        this.logo = logo;
//        this.back = back;
//        this.i1 = i1;
//        this.i2 = i2;
//        this.i3 = i3;
//        this.i4 = i4;
//        this.i5 = i5;
//        this.i6 = i6;
//        this.i7 = i7;
//        this.b1 = b1;
//        this.b2 = b2;
//        this.b3 = b3;
 
//    }
//  }
//  let games = [
//    new Game(
//        1,
//        "Age of empire IV",
//        "Estrategia",
//        "Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.",
//        false,
//        "age_of_empire_IV.png"
//    ),
//    new Game(
//        2,
//        "Red dead redemption II",
//        "Mundo abierto",
//        "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era. Incluye Red Dead Redemption 2: Modo Historia y Red Dead Online.",
//        true,
//        "red_dead_redemption_II.jpg"
//    ),
//    new Game(
//      3,
//      "Fifa 22",
//      "Deportes",
//      `Powered by Football™, EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos
 
//      EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. Las innovaciones en las mecánicas de juego de FIFA 22 ofrecen un comportamiento más`,
//      true,
//      "./IMAGENES/fifa/2.jpg",
//      "./IMAGENES/fifa/logo.png",
//      "./IMAGENES/fifa/b1.jpg",
//      "./IMAGENES/fifa/1.jpg",
//      "./IMAGENES/fifa/2.jpg",
//      "./IMAGENES/fifa/3.jpg",
//      "./IMAGENES/fifa/4.jpg",
//      "./IMAGENES/fifa/5.jpg",
//      "./IMAGENES/fifa/6.jpg",
//      "./IMAGENES/fifa/7.jpg",
//      "./IMAGENES/fifa/b1.jpg",
//      "./IMAGENES/fifa/b2.jpg",
//      "./IMAGENES/fifa/b3.jpg",
   
//    )
//     ]

//  console.log(game);
  //! Realizar la funcion para obtener el hash de la card y linjear en el array
 let detailPage = document.querySelector('#main')
 let detailFocus = game
 console.log(detailFocus);
 
 
 function createDetails(){
   data = document.createElement('div');
   
   data.innerHTML =`<div class="opacity "  style="background-image: url(${detailFocus.back})">
   <div class="header ">
     
     <div class="header-body">
       <div class="header-logo">
         <img
           src="${detailFocus.logo}"
           class="header-logo-img"
           alt=""
           srcset=""
         />
       </div>
       <div class="header-resume">
         
         <p>
           ${detailFocus.description}
         </p>
       </div>
       <div class="header-button">
         <a href="http://127.0.0.1:5500/404.html" role="button" class="purchase-button btn btn-primary">
           Obtener juego
         </a>
       </div>
     </div>
   </div>
 </div>
 <!--Carousel de capturas -->
 <div class="container w-100" id="carousel">
   <div class="container w-100">
     <div class="glider-contain">
       <div class="gameplay"><p>Capturas de pantalla</p></div>
       <div class="glider">
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i1}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i2}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i3}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i4}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i5}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><img src="${detailFocus.i6}" alt="" /></button>
         </div>
         <div class="glider-element">
           <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal__gallery"><video controls autobuffer poster="${detailFocus.i7}" src="${detailFocus.v1}" width="100%" height="100%" playsinline></video></button>
         </div>
       </div>
 
       <div role="tablist" class="dots"></div>
     </div>
   </div>
 </div>
  <!--Divs tipo background image-->
   <div class="body-backs">
     <div class="body-img-1">
       <img
         class="image-fluid"
         src="${detailFocus.b1}"
         alt=""
         srcset=""
       />
       <div class="text1">
         <h3>${detailFocus.h1}</h3>
         <p>
           ${detailFocus.t1}
         </p>
       </div>
     </div>
     <div class="body-img-1">
       <img src="${detailFocus.b2}" alt="" srcset="" />
       <div class="text2">
         <h3>${detailFocus.h2}</h3>
         <p>
           ${detailFocus.t2}
         </p>
       </div>
     </div>
     <div class="body-img-1">
       <img src="${detailFocus.b3}" alt="" srcset="" />
       <div class="text3">
         <h3>${detailFocus.h3}</h3>
         <p>
           ${detailFocus.t3}
         </p>
       </div>
     </div>
   </div>
 <!--resumen de juego / descripcion-->
 <section>
     <div class="resume_game d-flex flex-column align-items-center">
         <div class="resume_title ">
             <h3>Resumen</h3>
 
         </div>
         <div class="resume_body w-90">
             
             <ul>
                 <li class="p-3">
                     <h5>Genero</h5>
                     <a href="#">${detailFocus.category}</a>
                 </li>
                 <li class="p-3">
                     <h5>Fecha de Lanzamiento</h5>
                     <p>${detailFocus.date}</p>
                 </li>
                 <li class="p-3">
                   <h5>Distribuidor</h5>
                   <a href="https://${detailFocus.distri.trim()}.com">${detailFocus.distri.toUpperCase()} </a>
               </li>
               <li class="p-3">
                   <h5>Desarrollador</h5>
                   <a href="https://${detailFocus.studio}.com">${detailFocus.studio.toUpperCase()}</a>
               </li>
               <li class="p-3">
                   <h5>Enlace de juego</h5>
                   <a href="${detailFocus.link}">Sitio oficial</a>
               </li>
             
             </ul>
             
 
 
         </div>
     </div>
     
 </section>
 
 </div>
 
 <!--Modal carousel-->
 <div class="modal fade" id="modal__gallery" tabindex="-1" aria-labelledby="modal__gallery__label" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
       <div class="modal-header">
         
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body ">
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                 <div class="carousel-item active" data-bs-interval="2000">
                   <img src="${detailFocus.i1}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img src="${detailFocus.i2}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img src="${detailFocus.i3}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img src="${detailFocus.i4}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img src="${detailFocus.i5}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item" data-bs-interval="2000">
                   <img src="${detailFocus.i6}" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item" data-bs-interval="200000">
                   <video controls autobuffer src="${detailFocus.v1}" class="d-block w-100" poster="${detailFocus.i7}"></video>
                 </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
             </div>
       </div>
       
     </div>
   </div>`
   detailPage.appendChild(data)
 
   console.log(detailFocus.distri);
 };
 createDetails()

 window.addEventListener('load', ()=>{
    new Glider (document.querySelector('.glider'), {
       slidesToShow: 1,
       slideToScroll: 1,
       draggable: true,
       dots: '.dots',
       
       
       responsive: [
          {
             // screens greater than >= 775px
             breakpoint: 375,
             settings: {
               // Set to `auto` and provide item width to adjust to viewport
               slidesToShow: 1,
               slidesToScroll: 1,
               width: 1900,
               
               
               
             }
           },
          {
            // screens greater than >= 775px
            breakpoint: 500,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 'auto',
              slidesToScroll: 'auto',
              itemWidth: 150,
              duration: 0.25,
              
              
            }
          },
          {
             // screens greater than >= 775px
             breakpoint: 768,
             settings: {
               // Set to `auto` and provide item width to adjust to viewport
               slidesToShow: 'auto',
               slidesToScroll: 'auto',
               itemWidth: 150,
               duration: 0.25
               
               
             }
           },{
            // screens greater than >= 1024px
            breakpoint: 1022,
            settings: {
             slidesToShow: 'auto',
             slidesToScroll: 'auto',
             itemWidth: 150,
             duration: 0.25
              
              
            }
          }
        ]
    })
 
    
 })
 
 
 
 
 
 