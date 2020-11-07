if (
  jQuery(".products-flex-container .grid-item").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery(".products-flex-container .grid-item").each(function () {
    $title = jQuery(this).find(".ProductItem__Title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find(".Image__Loader")
        .next()
        .text()
        .trim()
        .split('src="')[1]
        .split(" alt")[0]
        .slice(0, -1)

    $link = "https://coolvanity.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".ProductItem__Price").text().trim()

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery("#CollectionSection .grid__item").length > 0 && [].length === 0) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find(".product__img-wrapper")
        .next()
        .text()
        .trim()
        .split('src="')[1]
        .split(" alt")[0]
        .slice(0, -1)

    $link =
      "https://nightanddaynetmarket.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".grid-link__meta").text().trim()
    .split('Regular price')[1]
    // .split('No reviews')[0]
    .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}


if (
  jQuery(".productList .grid__item").length > 0 &&
  jQuery("#product-featured-image").length === 0
) {
  $arr = []

  jQuery(".productList .grid__item").each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("img:first")
        .attr("src")

    $link = "https:" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".grid-view-item__meta .money:last").text().trim()

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}



if (jQuery(".products-collection a").length > 0 && [].length === 0) {
  $arr = []

  jQuery(".products-collection a").each(function () {
    $title = jQuery(this).find("h3.plp-product__title").text().trim()

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link = "https://eu.aimeleondore.com" + jQuery(this).attr("href")

    $price =
      "€" +
      jQuery(this).find(".plp-product__price .money").attr("ge-data-converted-price")

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

if (jQuery('.products [itemprop="itemListElement"]').length > 0 &&
 jQuery(".product_section .image__container img").length === 0) {
  $arr = []

  jQuery('.products [itemprop="itemListElement"]').each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link = "https://www.daziusa.com/" + jQuery(this).find('a:first').attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price .money:last").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}


//////////////////

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  [].length === 0
) {
  $arr = [];

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim();

    $img = 
    'https:' +     
     jQuery(this).find(".ProductItem__Image").next().next().text().trim()
     .split('src="')[2].split(' ')[0].slice(0, -1) 
     

    $link = 'https://www.hairburst.com' + jQuery(this).find("a.ProductItem__ImageWrapper").attr("href");

    $price = jQuery(this).find(".ProductItem__PriceList .money:first").text().trim()
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });

  $arr
}

//////////////////////


if (
  jQuery('ol[class="products list items product-items"] li').length > 0 &&
  jQuery('[class="product media"] .fotorama__active img').length === 0
) {
  $arr = [];

  jQuery("ol.product-items li").each(function () {
    $title = jQuery(this).find(".product-item-link").text().trim();

    $img = 
    // 'https:' +     
     jQuery(this).find(" img:first").attr('src')
    //  .split('src="')[2].split(' ')[0].slice(0, -1) 
     

    $link =
    //  'https://www.hairburst.com' + 
     jQuery(this).find(" a:first").attr("href");

    $price = jQuery(this).find(".price:first").text().trim()
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });

  $arr
}


if (
  jQuery('ul.products-grid li').length > 0 &&
  [].length === 0
) {
  $arr = [];

  jQuery('ul.products-grid li').each(function () {
    $title = jQuery(this).find(".product_name").text().trim();

    $img = 
    // 'https:' +     
     jQuery(this).find(".product_image img:last").attr('src')
    //  .split('src="')[2].split(' ')[0].slice(0, -1) 
     

    $link =
    //  'https://www.hairburst.com' +
       jQuery(this).find("a:first").attr("href");

    $price = 'RSD' + jQuery(this).find(".price-box .price:last").text().trim()
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });

  $arr
}


jQuery('.product-single__image').length



if (
  jQuery("ul.grid--view-items li").length > 0 &&
  jQuery('img.product-gallery__image').length === 0  
) {
  $arr = []

  jQuery("ul.grid--view-items li").each(function () {
    $title = jQuery(this).find(".product-card__title").text().trim()

    if(jQuery(this).find("a:first").next().next().next().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find("a:first")
    .next().next().next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0].trim()
    .slice(0, -1)
    else $img = ''

    // $img = 
    //   // 'https:' +
    //      (((jQuery(this).find(".attachment-woocommerce_thumbnail img:first").attr("src") ||
    //     //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
    //     //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
    //      jQuery(this).find(".attachment-woocommerce_thumbnail:last").attr("src")|| '')))
    //      .split(', ')[0];

    $link =
    'https://sunrise-gym.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price .price__regular dd").text().trim()
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    // if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery("ul.products li").length > 0 &&
  jQuery('.woocommerce-product-gallery__image img').length === 0  
) {
  $arr = []

  jQuery("ul.products li").each(function () {
    $title = jQuery(this).find(".woocommerce-loop-product__title").text().trim()  

    $img = 
      // 'https:' +
         (((jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
         jQuery(this).find("img:last").attr("srcset")|| '')))
         .split(' ')[0];

    $link =
    // 'https://sunrise-gym.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price bdi:last").text().trim()   
    // .split('€')[1]

    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


document.querySelectorAll('.product-list--collection .product-item')