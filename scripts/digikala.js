import {products} from "../data/products.js";
import { carts } from "../data/carts.js";


function addToProduct(productId) {
  let matchingItem;

  products.forEach((productItem) => {
    if (productId === productItem.productId) {
      matchingItem = productItem;
    }
  });
  
  if (matchingItem) {
    products.push({
      productId: productId,
      image: "images/a54.jpg",
      title: "گوشی موبایل سامسونگ",
      brand: "images/samsung.jpg",
      name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت - ویتنام",
      nameEn:"Samsung Galaxy A54 5G Dual SIM 256GB And 8GB RAM Mobile Phone with Samsung charger",
      starNumber: "4",
      starVote: "(1)",
      comments: "3 دیدگاه",
      questions: "7 پرسش",
      color: "مشکی",
      screenType: "Super AMOLED",
      screenSize: "6.6",
      cameraResolution: "48 مگاپیکسل",
      systemOperation: "Android 13",
      withItems: "دفترچه راهنما",
      sailer: "5 فروشنده دیگر",
      offNumber: "16,300,000",
      offPercent: "5%",
      price: "15,999,000"
    });
  };
};


function updateCartQuantity() {
  let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
    
  document.querySelector('.cart-quantity').innerHTML = cartQuantity

}

document.querySelectorAll('.js-add-to-product').forEach((href) => {
  href.addEventListener('click', () => {
    const productId = href.dataset.productId;

    addToProduct(productId);

    updateCartQuantity();
  });
});

