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
  jQuery("#gf-products .grid-product").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery("#gf-products .grid-product").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    ('https:' + 
      ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
        jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link =
    'https://minimale-animale.com/' +
      jQuery(this).find(".grid-product__content a:first").attr("href")

    $price = jQuery(this).find(".grid-product__price .money:first").text().trim()
    // if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

grid__image-ratio grid__image-ratio--portrait lazyloaded
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
  jQuery(".grid-tile-container .product-tile").length > 0 &&
  jQuery(".zoomContainer .zoomWindow:first").length === 0
) {
  $arr = [];

  jQuery(".grid-tile-container .product-tile").each(function () {
    $title = jQuery(this).find(".tile-body a.link:first").text().trim();

    $img = jQuery(this).find(".image-container img.tile-image").attr("src") ||jQuery(this).find(".image-container img.tile-image").attr("data-src");

    $link = 'https://www.shoeshowmega.com' + jQuery(this).find(".image-container a:first").attr("href");

    $price = jQuery(this).find(".price span[itemprop='price']:first").text().trim();
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

row product-grid grid-tile-container gtm-container gtm-container-initialized

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  jQuery(".Product__Slideshow .Product__SlideItem:first img:first").length === 0
) {
  $arr = [];

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find("ProductItem__Title a").text().trim();

    $img = 
    'https:' + 
    (jQuery(this).find("source").attr('srcset')
    || jQuery(this).find("img.ProductItem__Image:first").attr('srcset')
     || jQuery(this).find("img.ProductItem__Image:last").attr('srcset')
     ||jQuery(this).find(".product__img").next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 
     

    $link = 'https://www.shopbeergear.com' + jQuery(this).find("a.product-link").attr("href");

    $price = jQuery(this).find(".product__price-price .money:first").text().trim() || jQuery(this).find(".product__price-price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}


if (
  jQuery(".CollectionMain .ProductList .ProductItem__Wrapper").length > 0 
  &&
  jQuery(".Product__Slideshow .Product__SlideItem:first img:first").length === 0
) {
  $arr = [];

  jQuery(".CollectionMain .ProductList .ProductItem__Wrapper").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim();

    $img = 
    'https:' + 
    (jQuery(this).find("img.ProductItem__Image:first").attr('srcset') ||
      jQuery(this).find("img.ProductItem__Image:first").attr('data-srcset') ||
        jQuery(this).find("img.ProductItem__Image:last").attr('srcset') ||
          jQuery(this).find("img.ProductItem__Image:last").attr('srcset') ||
            jQuery(this).find("img.ProductItem__Image:last").next().next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 
     

    $link = 'https://summituk.co.uk' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".ProductItem__Price .money:first").text().trim().split(' ')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}
ProductList ProductList--grid ProductList--removeMargin Grid

if (
  jQuery("._35HD7C ._1R0K0g").length > 0 &&
  jQuery("._3KsTU0 img._30XEf0").length === 0
) {
  $arr = [];

  jQuery("._35HD7C ._1R0K0g").each(function () {
    $title = jQuery(this).find("a._2cLu-l").text().trim();

    $img =    
    jQuery(this).find("img._30XEf0").attr('src')      

    $link = 'https://www.2gud.com/' + jQuery(this).find('a.Zhf2z-').attr("href");

    $price = jQuery(this).find("a._1Vfi6u ._1vC4OE").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}

document.querySelectorAll('._35HD7C ._1R0K0g')
document.querySelectorAll('._3KsTU0 img._30XEf0')
// $price = ('€' + jQuery(this).find(".price-new").attr('data-csscontent')).split(' ')[0]


if (
  jQuery(".collection__container .product-wrap").length > 0 &&
  jQuery("img.zoomImg:first").length === 0
) {
  $arr = [];

  jQuery(".collection__container .product-wrap").each(function () {
    $title = jQuery(this).find(".title").text().trim();

    $img = 'https:' +   
    jQuery(this).find("img:first").attr('src')      

    $link = 'https://houseofbeauty.co.uk/' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find(".price .money:first").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}

section--collection