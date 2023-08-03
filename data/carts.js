

export let carts = JSON.parse(localStorage.getItem('carts'));

  if (!carts) {
    carts = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/a54.jpg",
        name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        color: "مشکی",
        garantee: "گارانتی 18 ماهه اسمارت تکنولوژی قشمگارانتی 18 ماهه اسمارت تکنولوژی قشم",
        sailer: "اسمارت تکنولوژی قشم",
        sender: "ارسال دیجی‌کالا",
        citySender: "ارسال فوری (شهر تهران)",
        price: "15,999,000 تومان",
        priceNumber: "15,999,000",
        quantity: 1
      },
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
        image: "images/a54.jpg",
        name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        color: "مشکی",
        garantee: "گارانتی 18 ماهه اسمارت تکنولوژی قشمگارانتی 18 ماهه اسمارت تکنولوژی قشم",
        sailer: "اسمارت تکنولوژی قشم",
        sender: "ارسال دیجی‌کالا",
        citySender: "ارسال فوری (شهر تهران)",
        price: "15,999,000 تومان",
        priceNumber: "15,999,000",
        quantity: 1
      },
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c8",
        image: "images/a54.jpg",
        name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        color: "مشکی",
        garantee: "گارانتی 18 ماهه اسمارت تکنولوژی قشمگارانتی 18 ماهه اسمارت تکنولوژی قشم",
        sailer: "اسمارت تکنولوژی قشم",
        sender: "ارسال دیجی‌کالا",
        citySender: "ارسال فوری (شهر تهران)",
        price: "15,999,000 تومان",
        priceNumber: "15,999,000",
        quantity: 1
      }
    ];
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
      image: "images/product-images/a54.jpg",
      name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      color: "مشکی",
      garantee: "گارانتی 18 ماهه اسمارت تکنولوژی قشمگارانتی 18 ماهه اسمارت تکنولوژی قشم",
      sailer: "اسمارت تکنولوژی قشم",
      sender: "ارسال دیجی‌کالا",
      citySender: "ارسال فوری (شهر تهران)",
      price: "15,999,000 تومان",
      priceNumber: "15,999,000",
      quantity: 1
    });
  }
  saveCarts();
}

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
