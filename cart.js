// Updated Sample Products (9 products)
const sampleProducts = [
  { id: 1, name: 'Product 1', price: 49.99 },
  { id: 2, name: 'Product 2', price: 79.99 },
  { id: 3, name: 'Product 3', price: 29.99 },
  { id: 4, name: 'Product 4', price: 19.99 },
  { id: 5, name: 'Product 5', price: 59.99 },
  { id: 6, name: 'Product 6', price: 99.99 },
  { id: 7, name: 'Product 7', price: 24.99 },
  { id: 8, name: 'Product 8', price: 39.99 },
  { id: 9, name: 'Product 9', price: 89.99 },
];

// Cart data
let cart = [];

// DOM Elements
const cartCount = document.getElementById('cart-count');

// Function to render the cart count
function renderCartCount() {
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Add item to cart
function addToCart(productId) {
  const product = sampleProducts.find((p) => p.id === productId);
  const quantity = parseInt(document.getElementById(`quantity${productId}`).value, 10);

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  renderCartCount();
  alert(`${product.name} has been added to your cart.`);
}