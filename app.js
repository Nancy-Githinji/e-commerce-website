// ================================
// Product Data
// ================================
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    image: "images/laptop.jpg"
  },
  {
    id: 2,
    name: "Phone",
    price: 400,
    image: "images/phone.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 50,
    image: "images/headphones.jpg"
  }
];

// ================================
// DOM Elements
// ================================
const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

// ================================
// Cart (localStorage)
// ================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// Display Products
// ================================
function displayProducts() {
  productContainer.innerHTML = "";

  products.forEach(product => {
    productContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

// ================================
// Add to Cart
// ================================
function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ================================
// Update Cart Count
// ================================
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// ================================
// Initial Load
// ================================
displayProducts();
updateCartCount();
