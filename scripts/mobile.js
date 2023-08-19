import {products2} from "../data/products2.js";
import {products} from "../data/products.js";
import { carts } from "../data/carts.js";

let mobileHtml = '';

products.forEach((product) => {
  mobileHtml += `
    <a class="product-link" href="product.html" data-product-id="${product.productId}">
      <div class="product-container">
        <div class="image-container">
          <img class="product-image" src="${product.image}">
        </div>
        <div>
          <div class="text-1">
            <div class="text-1-1">
              <div><img class="red-truck" src="images/red-truck.png"></div>
              <div><span>ارسال رایگان</span></div>
            </div>
          </div>
          <div class="text-2">
            <h3>${product.name}</h3>
          </div>
          <div class="text-3">
            <div class="emission">
              <img class="fast-emission-icon" src="images/fast-emission.png">
              <span>ارسال فردا</span>
            </div>
            <div class="score">
              <div>${product.starNumber}</div>
              <div><img src="images/star-yellow.png"></div>
            </div>
          </div>
          <div class="text-4">
            <span>${product.price}</span>
            <span id="tooman">تومان</span>
          </div>
        </div>
      </div>
    </a>`
});

document.querySelector('.container').innerHTML = mobileHtml;

export function saveProduct() {
  localStorage.setItem('products2', JSON.stringify(products2));
}

function addToProduct(productId) {
  let matchingItem;

  products.forEach((productItem) => {
    if (productId === productItem.productId) {
      matchingItem = productItem;
    }
  });
  
  if (matchingItem) {
  
    products2.push({
      productId: matchingItem.productId,
      image: matchingItem.image,
      title: matchingItem.title,
      brand: matchingItem.brand,
      name: matchingItem.name,
      nameEn: matchingItem.nameEn,
      starNumber: matchingItem.starNumber,
      starVote: matchingItem.starVote,
      comments: matchingItem.comments,
      questions: matchingItem.questions,
      color: matchingItem.color,
      colorEn: matchingItem.colorEn,
      screenType: matchingItem.screenType,
      screenSize: matchingItem.screenSize,
      cameraResolution: matchingItem.cameraResolution,
      systemOperation: matchingItem.systemOperation,
      withItems: matchingItem.withItems,
      sailer: matchingItem.sailer,
      offNumber: matchingItem.offNumber,
      offPercent: matchingItem.offPercent,
      price: matchingItem.price
    });
  }
}

function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity

}

document.querySelectorAll('.product-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;

    addToProduct(productId);

    saveProduct();

    updateCartQuantity()

  });
});

updateCartQuantity()

function removeCartQuantity() {
  const cartQuantity = Number(document.querySelector('.cart-quantity').innerText);

  const cartQuantityContainer = document.querySelector('.checkout-number-container');

  if (cartQuantity === 0) {
    cartQuantityContainer.style.display = 'none';
  };
}

removeCartQuantity()

