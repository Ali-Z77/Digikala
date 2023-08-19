
import {carts, addToCart, removeFromCart} from "../data/carts.js";
import { products2 } from "../data/products2.js";
import { openMenu, removeCartQuantity } from "./digikala.js";

openMenu();

let productHtml = ''

products2.forEach((matchingItem) => {
  productHtml = `  
  <div class="product-container">
    <div class="product-image">
      <div class="product-icons">
        <div class="heart-container">
          <img id="black-heart" src="images/black-heart.jpg">
          <img id="heart-icon" src="images/heart.png">
          <div class="icon-hover">اضافه به علاقه مندی</div>
        </div>
        <div class="share-container">
          <img src="images/share.png">
          <div class="icon-hover-2">اشتراک گذاری</div>
        </div>
        <div class="notification-container">
          <img src="images/notification.png">
          <div class="icon-hover-3">اطلاع رسانی</div>
        </div>
        <div class="chart-container">
          <img id="chart-icon" src="images/chart.jpg">
          <div class="icon-hover-4">نمودار قیمت</div>
        </div>
        <div class="comparision-container">
          <img src="images/comparision.jpg">
          <div class="icon-hover-5">مقایسه</div>
        </div>
        <div class="hamberger-container">
          <img id="hamberger-icon" src="images/hamberger-menu.jpg">
          <div class="icon-hover-6">اضافه به لیست</div>
        </div>
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
            <div class="div-1">
              <img src="images/check-icon-white.png">
              <div class="div-hover">${matchingItem.color}</div>
            </div>
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
            <div class="exist-container"><span class="exist">موجود در انبار دیجی‌کالا</span><img class="lesser-than-icon" src="images/lesser-than.png"></div>
            <div><img src="images/red-truck.png"><span class="sending">ارسال دیجی‌کالا</span></div>
            <div><img src="images/fast-emission.png"><span class="sending">ارسال فوری (شهر تهران)</span></div>
          </div>
          <div class="sailer-6">
            <img src="images/bonus.jpg">
            <span>150 امتیاز دیجی کلاب</span>
            <img src="images/i-icon.png">
          </div>
          <div class="sailer-7">
            <div class="price">
              <div>
                <span id="price-number">${matchingItem.price}</span><span> تومان</span>
              </div> 
            </div>
            <div class="main-delete">
              <div class="delete-container">
              <div id="red-plus" class="red-plus" data-product-id="${matchingItem.productId}">+</div>
                <div class="product-number-container">
                <span class="cart-quantity-2 js-cart-quantity-2">1</span>
                <span>حداکثر</span>
              </div>
              <div>
                <img class="delete-button" data-product-id="${matchingItem.productId}" src="images/red-recycle-bin-icon.jpg">
              </div>
            </div>
            <div class="button-container">
              <button class="js-add-to-cart-button" data-product-id="${matchingItem.productId}">افزودن به سبد خرید</button>
            </div> 
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
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    addToCart(productId);

    updateCartQuantity();

    document.querySelector('.js-add-to-cart-button').style.display = 'none';

    document.querySelector('.delete-container').style.display = 'flex';

    removeCartQuantity();

  });
});

document.querySelectorAll('.red-plus').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    addToCart(productId);

    updateCartQuantity();

  });
});

updateCartQuantity()


document.querySelectorAll('.delete-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    removeFromCart(productId);

    document.querySelector('.delete-container').style.display = 'none';

    document.querySelector('.js-add-to-cart-button').style.display = 'block';

    removeCartQuantity();

    updateCartQuantity();
    
  });
});

let colorEn = document.querySelector('.div-1')

products2.forEach((item) => {
  colorEn.style.backgroundColor = `${item.colorEn}`
});

const emptyHeart = document.getElementById("heart-icon")

const blackHeart = document.getElementById("black-heart")

emptyHeart.addEventListener('click', () => {
  emptyHeart.style.display = 'none';
  blackHeart.style.display = 'block';
});

blackHeart.addEventListener('click', () => {
  emptyHeart.style.display = 'block';
  blackHeart.style.display = 'none';
});



