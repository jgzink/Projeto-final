// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar um produto ao carrinho
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCartButton();
  updateCartPopup();
}

// Função para atualizar o botão do carrinho
function updateCartButton() {
  const cartButton = document.getElementById("cart-button");
  cartButton.textContent = `Carrinho (${cart.length})`;
}

// Função para atualizar o popup do carrinho
function updateCartPopup() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Limpar conteúdo atual

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  const cartPopup = document.getElementById("cart-popup");
  cartPopup.style.display = cart.length > 0 ? "block" : "none";
}

// Adicionando eventos para os botões "Adicionar ao Carrinho"
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  const productName = button.previousElementSibling.previousElementSibling.textContent;
  const productPrice = parseFloat(button.previousElementSibling.textContent.replace('R$ ', '').replace(',', '.'));

  button.addEventListener("click", () => addToCart(productName, productPrice));
});

// Exibir/ocultar o carrinho
document.getElementById("cart-button").addEventListener("click", () => {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
});
