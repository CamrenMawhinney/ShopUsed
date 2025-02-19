// Sample Products
const sampleProducts = [
  { id: 1, name: 'Product 1', price: 449.99 },
  { id: 2, name: 'Product 2', price: 449.99 },
  { id: 3, name: 'Product 3', price: 499.99 },
  { id: 4, name: 'Product 4', price: 599.99 },
  { id: 5, name: 'Product 5', price: 649.99 },
  { id: 6, name: 'Product 6', price: 599.99 },
  { id: 7, name: 'Product 7', price: 399.99 },
  { id: 8, name: 'Product 8', price: 249.99 },
  { id: 9, name: 'Product 9', price: 249.99 },
];

// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const cartCount = document.getElementById('cart-count');

// Render the cart count
function renderCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Add an item to the cart
function addToCart(productId) {
  const product = sampleProducts.find((p) => p.id === productId);
  const quantity = parseInt(document.getElementById(`quantity${productId}`).value, 10) || 1;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart();
  renderCartCount();
  alert(`${product.name} has been added to your cart.`);
}

// Remove an item from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);

  saveCart();
  renderCart();
  renderCartCount();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Render the cart items on the cart page
function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button class="btn remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Initialize the cart page
if (document.getElementById('cart-container')) {
  renderCart();
}

// Render the cart count on all pages
renderCartCount();
