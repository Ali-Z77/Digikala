import { carts, removeFromCart } from "../data/carts.js";
import { products } from "../data/products.js";

let checkoutHtml = '';

carts.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matching;

  products.forEach((product) => {
    if (product.productId === productId) {
      matching = product;
    }
  });
  
  if (matching) {
    checkoutHtml += `
      <div class="right-section-container js-right-section-${matching.productId}">
        <div class="cart-right-section">
          <div class="product-title">
            <p>سبد خرید شما</p>
          </div>
          <div class="product">
            <div>
              <img src="${matching.image}">
            </div>
            <div class="product-particuler">
              <span id="product-name">${matching.name}</span>
              <div class="product-color-container">
                <span>${matching.color}</span>
              </div>
              <div>
                <img id="garantee-icon" src="images/garantee.png">
                <span class="garantee">گارانتی 18 ماهه اسمارت تکنولوژی قشم</span>
              </div>
              <div>
                <img src="images/house-icon.png">
                <span>اسمارت تکنولوژی قشم</span>
              </div>
              <div>
                <div class="blue-icon"></div>
                <span>موجود در انبار دیجی‌کالا</span>
              </div>
              <div>
                <img src="images/red-truck.png">
                <span>ارسال دیجی‌کالا</span>
              </div>
              <div>
                <img src="images/fast-emission.png">
                <span>ارسال فوری (شهر تهران)</span>
              </div>
            </div>
          </div>
          <div class="delete-price">
            <div class="delete-container">
              <div id="red-plus">+</div>
              <div class="product-number-container">
                <span class="cart-quantity-2 js-cart-quantity-2">${cartItem.quantity}</span>
                <span>حداکثر</span>
              </div>
              <div>
                <img class="delete-button" data-product-id="${matching.productId}" src="images/red-recycle-bin-icon.jpg">
              </div>
            </div>
            <div class="price">
              <span class="price-number js-price-number">${matching.price}</span> <span class="tooman">تومان</span>
            </div>
          </div>
        </div>
      </div>`
  }
 
});

document.querySelector('.right-section-container').innerHTML = checkoutHtml;

document.querySelectorAll('.delete-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-right-section-${productId}`)
    container.remove();
  });
});

if (carts.length === 0) {
  document.querySelector('.empty-cart').style.display = 'block';
  document.querySelector('.total-container').style.display = 'none';
}

function removeCartQuantity() {
  const cartQuantity = Number(document.querySelector('.cart-quantity').innerText);

  const cartQuantityContainer = document.querySelector('.checkout-number-container');

  if (cartQuantity === 0) {
    cartQuantityContainer.style.display = 'none';
  };
}

removeCartQuantity();

const price = Number(document.querySelector('.js-price-number').innerText);

const quantity = Number(document.querySelector('.js-cart-quantity-2').innerText);

let total = 0;

let totalQuantity = 0;

carts.forEach(() => {
  total += (price * quantity);
  totalQuantity += quantity;
})

document.querySelector('.total-price-number-2').innerHTML = total;

document.querySelector('.total-price-number').innerHTML = total;

document.querySelector('.total-quantity').innerHTML = totalQuantity;