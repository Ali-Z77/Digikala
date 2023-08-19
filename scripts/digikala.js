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

/*make mobile menu intractive*/

export function openMenu() {

  const ul = document.querySelector('.ul-1-1');

  const hambergerIcon = document.querySelector('.hamberger');

  const xIcon = document.querySelector('.x-icon');

  hambergerIcon.addEventListener('click', () => {
    ul.style.transform = 'translate(0)';
    hambergerIcon.style.display = 'none';
    xIcon.style.display = 'block';
  });

  xIcon.addEventListener('click', () => {
    ul.style.transform = 'translate(350px)';
    hambergerIcon.style.display = 'block';
    xIcon.style.display = 'none';
  })
}

openMenu();