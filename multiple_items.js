list_view
if (
  jQuery("#products ul li.storm-item").length > 0 &&
  jQuery('.slick-track img[itemprop="image"]').length === 0
) {
  $arr = []

  jQuery("#products ul li.storm-item").each(function () {
    $title = jQuery(this).find(".pro_txt h3 a").text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]

    $img =
    "https://stormfashion.dk" + (jQuery(this).find(".pro_img img").attr("data-original") ||
      jQuery(this).find(".pro_img img").attr("src"))

    $link =
    'https://stormfashion.dk' +
      jQuery(this).find(".pro_img a").attr("href")

    $price = 'Click on the goods' + jQuery(this).find(".product__price .money:first").text().trim()
    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
grid-view-item__link grid-view-item__image-container full-width-link
product_img product_img--first
grid__item grid__item--collection-template small--one-half medium-up--one-quarter pro_box product_box product-item

ProductList
ProductItem
inner product-item  on-sale wow fadeIn

if (
  jQuery(".ProductList .ProductItem").length > 0 &&
  jQuery(".Product__Slideshow").length === 0
) {
  $arr = []

  jQuery(".ProductList .ProductItem").each(function () {
    $title = jQuery(this).find("h2.ProductItem__Title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("noscript:first")
        .text()
        .trim()
        .split(" ")[3]
        .slice(5, -1)

    $link =
      "https://www.lakenzie.com/" +
      jQuery(this).find("h2.ProductItem__Title a:first").attr("href")

    $price = jQuery(this).find(".ProductItem__Price .money:first").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery("#product-loop .product-index").length > 0 &&
  jQuery('.bigimage img').length === 0
) {
  $arr = []

  jQuery("#product-loop .product-index").each(function () {
    $title = jQuery(this).find(".title-block h3").text().trim()

    $img =
    "https:" + jQuery(this).find('.product-images img').attr('src')      

    $link =
    'https://www.radioshack.com' +
      jQuery(this).find(".product-images a").attr("href")

    $price = jQuery(this).find("#price .product-price:first").text().trim()
    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


{/* <img class="grid-product__image" src="//cdn.shopify.com/s/files/1/2941/5212/products/SicilianCosmo_1024x.png?v=1590089983" alt="Sicilian Cosmo Flower"> */}
          

if (
  jQuery("#search-result-items article").length > 0 &&
  jQuery("ul.product-images__thumbnails__container").length === 0
) {
  $arr = []

  jQuery("#search-result-items article").each(function () {
    $title = jQuery(this).find(".product-tile__name").text().trim()

    $img =
      
      jQuery(this).find("img.plp__products__item__image").attr("data-src") || jQuery(this).find("img").attr("src")

    $link =
      
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-tile__price").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery(".product-grid-container .product-card").length > 0 &&
  jQuery(".image-container img:first").length === 0
) {
  $arr = [];

  jQuery(".product-grid-container .product-card").each(function () {
    $title = jQuery(this).find(".product-card-title a:first").attr('title').text().trim();

    $img = jQuery(this).find(".product-image-container img.product-image").attr("src");

    $link = 'https://www.nbastore.eu/' + jQuery(this).find(".product-image-container a:first").attr("href");

    $price = jQuery(this).find(".price-card .lowest:first").text().trim();
    
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".product-grid-container .product-card").length > 0 &&
  jQuery(".image-container img:first").length === 0
) {
  $arr = [];

  jQuery(".product-grid-container .product-card").each(function () {
    $title = jQuery(this).find(".product-card-title a:first").attr('title');

    $img = jQuery(this).find(".product-image-container img.product-image").attr("src");

    $link = 'https://www.nbastore.eu/' + jQuery(this).find(".product-image-container a:first").attr("href");

    $price = jQuery(this).find(".price-card .lowest:first").text().trim();
    
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

row product-grid

if (
  jQuery("#collection-main .product").length > 0 &&
  jQuery("img.product-single__photo__img").length === 0
) {
  $arr = [];

  jQuery("#collection-main .product").each(function () {
    $title = jQuery(this).find("h3.product__title").text().trim();

    $img = 
    'https:' + 
    (jQuery(this).find("source").attr('srcset')
    || jQuery(this).find("div.img-lazyload").attr('data-bgset')
     || jQuery(this).find("img.img-lazyload").attr('srcset')
     ||jQuery(this).find(".product__img").next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 
     

    $link = 'https://www.shopbeergear.com' + jQuery(this).find("a.product-link").attr("href");

    $price = jQuery(this).find(".product__price-price .money:first").text().trim() || jQuery(this).find(".product__price-price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}
product__img img-lazyload js lazyautosizes lazyloaded
product__price-price product__price-price--sale
product__img-hover img-lazyload js lazyloaded