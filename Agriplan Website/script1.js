// Get references to HTML elements
const productButtons = document.querySelectorAll('.product-list li button');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const clearCartButton = document.querySelector('.clear-cart');

// Define cart variable to store selected products and total cost
let cart = [];
let total = 0;

// Function to add product to cart and update display
function addToCart(product) {
// Add product to cart array
cart.push(product);

// Calculate total cost
total += product.price;

// Update display
displayCart();
}

// Function to remove product from cart and update display
function removeFromCart(product) {
// Find index of product in cart array
const index = cart.findIndex(item => item.id === product.id);

// Remove product from cart array
cart.splice(index, 1);

// Calculate new total cost
total -= product.price;

// Update display
displayCart();
}

// Function to display cart contents
function displayCart() {
// Clear existing cart display
cartItemsList.innerHTML = '';

// Loop through cart array and add each item to display
cart.forEach(item => {
const li = document.createElement('li');
li.innerText = `${item.name} - ${item.price}`;
const button = document.createElement('button');
button.innerText = 'Supprimer';
button.addEventListener('click', () => removeFromCart(item));
li.appendChild(button);
cartItemsList.appendChild(li);
});









// Update total cost display
cartTotal.innerText = `€${total.toFixed(2)}`;
}

// Add event listeners to product buttons
productButtons.forEach(button => {
button.addEventListener('click', () => {
const product = {
id: button.dataset.id,
name: button.parentElement.querySelector('h3').innerText,
price: parseFloat(button.parentElement.querySelector('p').innerText.slice(1))
};
addToCart(product);
});
});

// Add event listener to clear cart button
clearCartButton.addEventListener('click', () => {
cart = [];
total = 0;
displayCart();
});


  
    