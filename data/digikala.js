
let checkoutHtml = '';

carts.forEach((cart) => {
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
        <img src="${cart.image}">
      </div>
      <div class="product-particuler">
        <span id="product-name">${cart.name}</span>
        <div class="product-color-container">
          <div class="product-color"></div>
          <span>${cart.color}</span>
        </div>
        <div>
          <img id="garantee-icon" src="images/garantee.png">
          <span>${cart.garantee}</span>
        </div>
        <div>
          <img src="images/house-icon.png">
          <span>${cart.sailer}<span>
        </div>
        <div>
          <div class="blue-icon"></div>
          <span>موجود در انبار دیجی‌کالا</span>
        </div>
        <div>
          <img src="images/red-truck.png">
          <span>${cart.sender}</span>
        </div>
        <div>
          <img src="images/fast-emission.png">
          <span>${cart.citySender}</span>
        </div>
      </div>
    </div>
    <div class="delete-price">
      <div class="delete-container">
        <div id="red-plus">+</div>
        <div class="product-number-container">
          <span id="product-number">0</span>
          <span>حداکثر</span>
        </div>
        <div>
          <img src="images/red-recycle-bin-icon.jpg">
        </div>
      </div>
      <div class="price">
        <span>${cart.price}</span>
      </div>
    </div>
  </div>
  <div class="total-checkout">
    <div class="products-price">
      <span>قیمت کالاها (1)</span>
      <span>${cart.priceNumber}</span>
    </div>
    <div class="total-price">
      <span>جمع سبد خرید</span>
      <span>${cart.priceNumber}</span>
    </div>
    <button>ثبت سفارش</button>
  </div>
</div>
  `  
});

document.querySelector('.main-carts').innerHTML = checkoutHtml
