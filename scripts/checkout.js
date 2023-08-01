import { carts } from "../data/carts.js";

let checkoutHtml = '';

carts.forEach((product) => {
  checkoutHtml += 
  `
<div class="cart-container">
  <div class="cart-right-section">
    <div class="product-title">
      <p>سبد خرید شما</p>
      <div>۱ کالا</div>
    </div>
    <div class="product">
      <div>
        <img src="${product.image}">
      </div>
      <div class="product-particuler">
        <span id="product-name">${product.name}</span>
        <div class="product-color-container">
          <div class="product-color"></div>
          <span>${product.color}</span>
        </div>
        <div>
          <img id="garantee-icon" src="images/garantee.png">
          <span>${product.garantee}</span>
        </div>
        <div>
          <img src="images/house-icon.png">
          <span>${product.sailer}<span>
        </div>
        <div>
          <div class="blue-icon"></div>
          <span>موجود در انبار دیجی‌کالا</span>
        </div>
        <div>
          <img src="images/red-truck.png">
          <span>${product.sender}</span>
        </div>
        <div>
          <img src="images/fast-emission.png">
          <span>${product.citySender}</span>
        </div>
      </div>
    </div>
    <div class="delete-price">
      <div class="delete-container">
        <div id="red-plus">+</div>
        <div class="product-number-container">
          <span id="product-number">${product.quantity}</span>
          <span>حداکثر</span>
        </div>
        <div>
          <img src="images/red-recycle-bin-icon.jpg">
        </div>
      </div>
      <div class="price">
        <span>${product.price}</span>
      </div>
    </div>
  </div>
  <div class="total-checkout">
    <div class="products-price">
      <span>قیمت کالاها (1)</span>
      <span>${product.priceNumber}</span>
    </div>
    <div class="total-price">
      <span>جمع سبد خرید</span>
      <span>${product.priceNumber}</span>
    </div>
    <button>ثبت سفارش</button>
  </div>
</div>
  `  
});

document.querySelector('.main-carts').innerHTML = checkoutHtml;
