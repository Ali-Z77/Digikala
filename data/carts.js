

export let carts = JSON.parse(localStorage.getItem('carts'));

if (carts.productId === {}) {
  carts = [];
}

export function saveCarts() {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export function addToCart(productId) {
  let matchingItem;

  carts.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    carts.push({
      productId: productId,
      quantity: 1
    });
  }
  saveCarts();
}

export function removeFromCart(productId) {
  const newCarts = [];

  carts.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCarts.push(cartItem);
    }
  });
  carts = newCarts;
  saveCarts();
}


export function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity
}

updateCartQuantity();
