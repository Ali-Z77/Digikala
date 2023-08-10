import { carts } from "../data/carts.js";

function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity

}

updateCartQuantity()

function removeCartQuantity() {
  const cartQuantity = Number(document.querySelector('.cart-quantity').innerText);

  const cartQuantityContainer = document.querySelector('.checkout-number-container');

  if (cartQuantity === 0) {
    cartQuantityContainer.style.display = 'none';
  };
}

removeCartQuantity()