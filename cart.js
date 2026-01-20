// ================================
// Product Data (must match app.js)
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
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

// ================================
// Cart (localStorage)
// ================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// Display Cart Items
// ================================
function displayCart() {
  cartItemsContainer.innerHTML = "";

  // If cart is empty
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach((productId, index) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    total += product.price;

    cartItemsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="removeFromCart(${index})">
          Remove
        </button>
      </div>
    `;
  });

  totalPriceEl.textContent = "Total: $" + total;
}

// ================================
// Remove Item
// ================================
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// ================================
// Initial Load
// ================================
displayCart();
