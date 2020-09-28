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
  jQuery("#CollectionSection .grid-uniform .grid-product__wrapper").length > 0 &&
  jQuery('.product-single__photo').length === 0
) {
  $arr = []

  jQuery("#CollectionSection .grid-uniform .grid-product__wrapper").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
    "https:" + jQuery(this).find('img').attr('srcset').split(' ')[0]      

    $link =
    'https://www.dauphinette.com' +
      jQuery(this).find("a.grid-product__image-link").attr("href")

    $price = '$' + jQuery(this).find(".grid-product__price").text().trim().split('$')[1]
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
  jQuery("#plp--wrapper .plp-item--container").length > 0 &&
  jQuery("#zooming-image").length === 0
) {
  $arr = [];

  jQuery("#plp--wrapper .plp-item--container").each(function () {
    $title = jQuery(this).find(".plp--title").text().trim();

    $img = jQuery(this).find("img.img-responsive:first").attr("src");

    $link = 'https:' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".plp--price strong:contains($)").text().trim();
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

plp__products__item__image js-product-tile-link