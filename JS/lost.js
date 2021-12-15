let namE = document.querySelector('.recovery_name');
let email = document.querySelector('.recovery_email');
let form = document.querySelector('.recovery_form')

// function lostPass(event) {
//     event.preventDefault();
//     let notok = document.createElement('p')
//     notok.innerText = 'Ingresa un nombre valido'
//     namE.value;
//     email.value;
// let nameOk = /^[A-Z]+$/i.test(namE);
// let emailOk = /([a-z]\w+@[a-z]+\.[a-z]{2,5})/.test(email);
//   if(nameOk){
//       namE.classList.add('verify');

//   }else{namE.classList.add('unverified');
//         namE.appendChild(notok);}

// }
form.addEventListener('submit', (event)=>{event.preventDefault();
    let notok = document.createElement('p')
    notok.innerText = 'Ingresa valor valido'
    namE.value;
    email.value;
let nameOk = /^[A-Z]+$/i.test(namE);
let emailOk = /([a-z]\w+@[a-z]+\.[a-z]{2,5})/.test(email);
  if(nameOk && emailOk){
      namE.classList.add('verify');
      email.classList.add('verify');
      mailRecovery(event);

  }else {
      namE.classList.add('unverified');
      email.classList.add('unverified');
        form.appendChild(notok);
        setTimeout(() => {form.removeChild(notok);}, 2000);
         } 
    console.log(nameOk);
    })

