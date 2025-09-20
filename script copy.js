const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.getElementById("cart-items");

let cart = [];

// Open Cart
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
});

// Close Cart
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Add to Cart
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const product = e.target.parentElement.querySelector("h3").innerText;
    cart.push(product);
    renderCart();
  });
});

// Render Cart
function renderCart() {
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}
