let productHtml = ''

products.forEach((product) => {
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
      <div><img class="product-image-1" src="${product.image}"></div>
    </div>
    <div class="product-particuler-container">
      <div class="title">
        <div><img src="${product.brand}"></div>
        <div class="title-text">
          <span>سامسونگ</span><span>/</span><span>${product.title}</span>
          <p>${product.name}</p>
        </div>
      </div>
      <div class="sailer-particuler">
        <div class="product-particuler">
          <div class="product-particuler-1">
            <span>${product.nameEn}</span>
          </div>
          <div class="product-particuler-2">
            <div id="yellow-star"><img src="images/star-yellow.png"></div>
            <span id="star-number">${product.starNumber}</span>
            <span id="star-vote">${product.starVote}</span>
            <span class="comments">&bull;</span>
            <span class="comments">${product.comments}</span>
            <span class="comments">&bull;</span>
            <span class="comments">${product.questions}</span>
          </div>
          <div class="product-particuler-3">
            <span>رنگ:</span>
            <span>${product.color}</span>
            <div class="div-1"><img src="images/check-icon.png"></div>
            <div class="div-1-hover">مشکی</div>
          </div>
          <div class="product-particuler-4">
            <div><p class="bold-text">ویژگی ها</p></div>
            <div><span>&bull;</span><span>فناوری صفحه‌نمایش :</span><p>${product.screenType}</p></div>
            <div><span>&bull;</span><span>اندازه :</span><p>${product.screenSize}</p></div>
            <div><span>&bull;</span><span>رزولوشن عکس :</span><p>${product.cameraResolution}</p></div>
            <div><span>&bull;</span><span>نسخه سیستم عامل :</span><p>${product.systemOperation}</p></div>
            <div><span>&bull;</span><span>اقلام همراه :</span><p>${product.withItems}</p></div>
          </div>
        </div>
        <div class="sailer-card">
          <div class="sailer-1">
            <span class="sailer-span-1">فروشنده</span>
            <span class="sailer-span-2">${product.sailer}</span>
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
              <span class="off-number">${product.offNumber}</span>
              <div class="off-percent"><span>${product.offPercent}</span></div>
            </div>
            <div class="price"><span id="price-number">${product.price}</span><span>تومان</span></div>
            <button class="js-add-to-cart-button" data-product-name="${product.name}">افزودن به سبد</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

document.querySelector('.main-container').innerHTML = productHtml;

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    carts.push({
      image: "images/a54.jpg",
      name: "گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      color: "مشکی",
      garantee: "گارانتی 18 ماهه اسمارت تکنولوژی قشمگارانتی 18 ماهه اسمارت تکنولوژی قشم",
      sailer: "اسمارت تکنولوژی قشم",
      sender: "ارسال دیجی‌کالا",
      citySender: "ارسال فوری (شهر تهران)",
      price: "15,999,000 تومان",
      priceNumber: "15,999,000"
    });
    console.log(carts);
  });
});