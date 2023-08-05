

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
/*
let saveQuantity;

carts.forEach((item) => {
  saveQuantity = item.quantity;
});

function cartQuantity2() {
  
  if (saveQuantity === undefined) {
    saveQuantity = 0;
  } else {
    document.querySelector('.cart-quantity').innerHTML = saveQuantity;
  }
};

cartQuantity2();
*/
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


function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity
}

updateCartQuantity()

console.log(carts)