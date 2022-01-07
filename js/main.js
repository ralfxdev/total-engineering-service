// function contact
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
   event.preventDefault();
   const form = new FormData(this);
   $buttonMailto.setAttribute('href', `mailto:totaleservicesu22@gmail.com?subject=Nombre: ${form.get('nombre')} | Correo: ${form.get('correo')} | Asunto: ${form.get('asunto')} &body=${form.get('mensaje')}`)
   $buttonMailto.click()
};

