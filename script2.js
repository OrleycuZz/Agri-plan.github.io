
let clickCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
  });
});

const button = document.getElementById('info');

button.addEventListener('click', () => {
  window.location.href = 'htmlinfo.html';
});
   
 
const buttonpaye = document.getElementById('paye');

buttonpaye.addEventListener('click', () => {
    window.location.href = 'payement.html';
  
  });
   
 
const buttoncontact = document.getElementById('contact');
  
  buttoncontact.addEventListener('click', () => {
      window.location.href = 'contact.html';
});
    