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
      <div><img class="product-image-1" src="images/a54.jpg"></div>
    </div>
    <div class="product-particuler-container">
      <div class="title">
        <div><img src="images/samsung.jpg"></div>
        <div class="title-text">
          <span>سامسونگ</span><span>/</span><span>گوشی موبایل سامسونگ</span>
          <p>گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت - ویتنام</p>
        </div>
      </div>
      <div class="sailer-particuler">
        <div class="product-particuler">
          <div class="product-particuler-1">
            <span>Samsung Galaxy A54 5G Dual SIM 256GB And 8GB RAM Mobile Phone with Samsung charger</span>
          </div>
          <div class="product-particuler-2">
            <div id="yellow-star"><img src="images/star-yellow.png"></div>
            <span id="star-number">4</span>
            <span id="star-vote">(1)</span>
            <span class="comments">&bull;</span>
            <span class="comments">3 دیدگاه</span>
            <span class="comments">&bull;</span>
            <span class="comments">7 پرسش</span>
          </div>
          <div class="product-particuler-3">
            <span>رنگ:</span>
            <span>مشکی</span>
            <div class="div-1"><img src="images/check-icon.png"></div>
            <div class="div-1-hover">مشکی</div>
          </div>
          <div class="product-particuler-4">
            <div><p class="bold-text">ویژگی ها</p></div>
            <div><span>&bull;</span><span>فناوری صفحه‌نمایش :</span><p>Super AMOLED</p></div>
            <div><span>&bull;</span><span>اندازه :</span><p>6.6</p></div>
            <div><span>&bull;</span><span>رزولوشن عکس :</span><p>48 مگاپیکسل</p></div>
            <div><span>&bull;</span><span>نسخه سیستم عامل :</span><p>Android 13</p></div>
            <div><span>&bull;</span><span>اقلام همراه :</span><p>دفترچه‌ راهنما</p></div>
          </div>
        </div>
        <div class="sailer-card">
          <div class="sailer-1">
            <span class="sailer-span-1">فروشنده</span>
            <span class="sailer-span-2">5 فروشنده ی دیگر</span>
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
              <span class="off-number">16,300,000</span>
              <div class="off-percent"><span>۵٪</span></div>
            </div>
            <div class="price"><span id="price-number">15,999,000</span><span>تومان</span></div>
            <button class="js-add-to-cart-button" data-product-name="${product.name}">افزودن به سبد</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

document.querySelector('.main-container').innerHTML = productHtml;