const products = [
  { id: 1, name: "Smartphone", price: 299.99, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 99.99, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Laptop", price: 899.99, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: 199.99, img: "https://via.placeholder.com/150" },
];

const cart = [];
const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart");
const viewCartBtn = document.getElementById("view-cart");

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

viewCartBtn.addEventListener("click", () => {
  cartSection.classList.toggle("hidden");
});

renderProducts();
