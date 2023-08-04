
import {carts, addToCart} from "../data/carts.js";
import { products } from "../data/products.js";

let productHtml = ''

products.forEach((matchingItem) => {
  productHtml = `  
  <div class="product-container">
    <div class="product-image">
      <div class="product-icons">
        <img id="heart-icon" src="images/heart.png">
        <img src="images/share.png">
        <img src="images/notification.png">
        <img id="chart-icon" src="images/chart.jpg">
        <img src="images/comparision.jpg">
        <img id="hamberger-icon" src="images/hamberger-menu.jpg">
      </div>
      <div><img class="product-image-1" src="${matchingItem.image}"></div>
    </div>
    <div class="product-particuler-container">
      <div class="title">
        <div><img src="${matchingItem.brand}"></div>
        <div class="title-text">
          <span>سامسونگ</span><span>/</span><span>${matchingItem.title}</span>
          <p>${matchingItem.name}</p>
        </div>
      </div>
      <div class="sailer-particuler">
        <div class="product-particuler">
          <div class="product-particuler-1">
            <span>${matchingItem.nameEn}</span>
          </div>
          <div class="product-particuler-2">
            <div id="yellow-star"><img src="images/star-yellow.png"></div>
            <span id="star-number">${matchingItem.starNumber}</span>
            <span id="star-vote">${matchingItem.starVote}</span>
            <span class="comments">&bull;</span>
            <span class="comments">${matchingItem.comments}</span>
            <span class="comments">&bull;</span>
            <span class="comments">${matchingItem.questions}</span>
          </div>
          <div class="product-particuler-3">
            <span>رنگ:</span>
            <span>${matchingItem.color}</span>
            <div class="div-1"><img src="images/check-icon.png"></div>
            <div class="div-1-hover">مشکی</div>
          </div>
          <div class="product-particuler-4">
            <div><p class="bold-text">ویژگی ها</p></div>
            <div><span>&bull;</span><span>فناوری صفحه‌نمایش :</span><p>${matchingItem.screenType}</p></div>
            <div><span>&bull;</span><span>اندازه :</span><p>${matchingItem.screenSize}</p></div>
            <div><span>&bull;</span><span>رزولوشن عکس :</span><p>${matchingItem.cameraResolution}</p></div>
            <div><span>&bull;</span><span>نسخه سیستم عامل :</span><p>${matchingItem.systemOperation}</p></div>
            <div><span>&bull;</span><span>اقلام همراه :</span><p>${matchingItem.withItems}</p></div>
          </div>
        </div>
        <div class="sailer-card">
          <div class="sailer-1">
            <span class="sailer-span-1">فروشنده</span>
            <span class="sailer-span-2">${matchingItem.sailer}</span>
          </div>
          <div class="sailer-2">
            <img src="images/digi-icon.png">
            <span>دیجی کالا</span>
          </div>
          <div class="sailer-3">
            <div>
              <span id="operation">100%</span>
              <span>رضایت از کالا</span>
            </div>
            <span>عملکرد</span>
            <span id="operation">عالی</span>
          </div>
          <div class="sailer-4">
            <img src="images/garantee.png">
            <p>گارانتی ۱۸ ماهه دیجی کالا سرویس</p>
          </div>
          <div class="sailer-5">
            <div><span class="exist">موجود در انبار دیجی‌کالا</span><img src="images/lesser-than.png"></div>
            <div><img src="images/red-truck.png"><span class="sending">ارسال دیجی‌کالا</span></div>
            <div><img src="images/fast-emission.png"><span class="sending">ارسال فوری (شهر تهران)</span></div>
          </div>
          <div class="sailer-6">
            <img src="images/bonus.jpg">
            <span>150 امتیاز دیجی کلاب</span>
            <img src="images/i-icon.png">
          </div>
          <div class="sailer-7">
            <div class="off-container">
              <span class="off-number">${matchingItem.offNumber}</span>
              <div class="off-percent"><span>${matchingItem.offPercent}</span></div>
            </div>
            <div class="price">
            <span id="price-number">${matchingItem.price}</span><span>تومان</span>
            </div>
            <div class="in-youre-cart-container">
              <div class="in-youre-cart">
              <span>در سبد شما</span>
              <span>
                <span>مشاهده</span>
                <a id="visit-cart" href="checkout.html"><span>سبد خرید</span></a>
              </span>
              </div>
            </div>  
            <button class="js-add-to-cart-button" data-product-id="${matchingItem.productId}">افزودن به سبد</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

document.querySelector('.main-container').innerHTML = productHtml;


export function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity

}

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    addToCart(productId);

    updateCartQuantity();

  });
});

const addButton = document.querySelector('.js-add-to-cart-button');

const inYoureCart = document.querySelector('.in-youre-cart-container');

addButton.addEventListener('click', () => {
  inYoureCart.style.display = 'flex';
});






