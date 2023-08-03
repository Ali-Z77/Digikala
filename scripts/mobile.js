import { products } from "../data/products.js";

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


function addToProduct() {
  document.querySelectorAll('.product-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      let matchingItem;
  
      products.forEach((productItem) => {
        if (productId === productItem.productId) {
          matchingItem = productItem;
        }
  
    });
  });
});
}
