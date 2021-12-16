//* SIMULAMOS BASE DE DATOS (USUARIOS)
class User {
    constructor(name, lastname, email, password, admin) {
      this.id = id;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.admin = admin;
    }
  }
  
  let usersloged = []

  let users = [
    new User('1','Juan Pablo', 'Capilla', 'juanpablocapilla@gmail.com', '12345678', true),
    new User('2','Sofia', 'Muratore', 'sofi@gmail.com', '12345678', false),
    new User('3','Juan Ignacio', 'Ramallo', 'waka@gmail.com', '12345678', true),
    new User('4','Javier', 'Martinez', 'javier@gmail.com', '12345678',  false),
    new User('5','Carlos', 'Mocsary', 'carlosm@gmail.com', '12345678', true)
  ]
  
  if (!localStorage.getItem('users')) {
    let usersJSON = JSON.stringify(users); //Convertimos users a JSON
    localStorage.setItem('users', usersJSON);
  }
 
  // LOGIN
  
  function loginCheck(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let pass = document.getElementById('pass').value;
    let usersLS = localStorage.getItem('users');
  
    

    const usersLSConvertido = JSON.parse(usersLS);
    let userLogged = usersLSConvertido.find(user => user.email === email);
    // chequeamos si la clave es correcta
    if (userLogged && userLogged.password == pass) {
      //crear una variable para que el usuario logeado pueda navegar y salir despues
      

      if(localStorage.getItem('log')){
        let newLog = userLogged;
        //!Traer de local storage
        let data = localStorage.getItem('log');
        //! Ponerlo en mi idioma
        let usersLS = JSON.parse(data);
        //!Modificar el elemento que trajimos
        usersLS.push(newLog);
        //! Poner en el idioma de LS
        data = JSON.stringify(usersLS);
        //!Volver a enviarlo a local storage
        localStorage.setItem('log', data)
        }else{
          let logeados = userLogged;
          let logeadosJSON = JSON.stringify(logeados);
          localStorage.setItem('log', logeadosJSON);
      }

      window.location.assign(window.location.origin + '/main.html');
      
    } else {
      let dataError = document.createElement('div');
      dataError.innerText = 'Algun dato no es correcto, intenta de nuevo!';
      dataError.classList.add('alert', 'alert-danger', 'mt-3');
      let form = document.querySelector('form');
      form.appendChild(dataError);
      setTimeout(function () {
        form.removeChild(dataError);
      }, 4000);
    }
  }
  
  //* REGISTRO
  
  function register() {
    let email = document.getElementById('register-email').value;
    let lastname = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
  
    let nameOk = /^[A-Z]+$/i.test(name); //true
    let lastnameOk = /^[A-Z]+$/i.test(lastname); //true
    let passwordOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,12}/.test(password); //password de 8 a 12 caracteres
    let emailOk = /([a-z]\w+@[a-z]+\.[a-z]{2,5})/.test(email);
    
  
    if(nameOk && lastnameOk && emailOk && passwordOk){
      let newUser = new User(id, name, lastname, email, password);
      
      //!Traer de local storage
      let data = localStorage.getItem('users');
      //! Ponerlo en mi idioma
      let usersLS = JSON.parse(data);
      //!Modificar el elemento que trajimos
      usersLS.push(newUser);
      //! Poner en el idioma de LS
      data = JSON.stringify(usersLS);
      //!Volver a enviarlo a local storage
      localStorage.setItem('users', data)
      //redirigir a la pagina de registro ok! -mandar email y redirigir al main
    
    window.location.assign(window.location.origin + '/main.html'); //! usamos window.location.origin para no cambiar de pagina
    }else{
      console.log(nameOk,lastnameOk,emailOk,passwordOk);
      const error = document.createElement('div');
      error.innerText = 'Hay campos erroneos';
      error.classList.add('alert', 'alert-danger', 'mt-3', 'w-50', 'text-center');
      const modal = document.getElementById('registerModal');
      modal.appendChild(error);
      setTimeout(()=>{
        modal.removeChild(error);
      },3000)
    }
  }

  // Logout
  function logout() {
    localStorage.removeItem('log');
    console.log("deslogeando...");
    window.location.assign(window.location.origin + '/index.html');
  }