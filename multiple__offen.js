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

if (jQuery("#CollectionSection .grid__item").length > 0 &&
jQuery('.photo-zoom-link [role="presentation"]').length === 0) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      // "https:" +
      ((jQuery(this).find('.grid-product__secondary-image').css('background-image') || '')
      .split('url(')[1] || '')
      .slice(1,-2)
        // .next()
        // .text()
        // .trim()
        // .split('src="')[1]
        // .split(" alt")[0]
        // .slice(0, -1)

    $link =
      "https://uk.etatlibredorange.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".grid-product__price .money:first").text().trim()
    // .split('Regular price')[1]
    // .split('No reviews')[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}


if (
  jQuery(".container .product-item").length > 0 &&
  jQuery('[class="product-gallery__item slick-slide"] img').length === 0
) {
  $arr = []

  jQuery(".container .product-item").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("img:first")
        .attr("src")

    $link = "https://theroyallookforless.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-price--current:first").text().trim()

    if ($title && $img && $link && $price)
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

if (jQuery('.products .product-item').length > 0 &&
 jQuery(".fotorama__active img").length === 0) {
  $arr = []

  jQuery('.products .product-item').each(function () {
    $title = jQuery(this).find(".product-item-link").text().trim()

    $img = jQuery(this).find("img:first").attr("src")

    $link = 
    // "https://cuoieriashop.com" + 
    jQuery(this).find('a:first').attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price:first").text().trim()

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

    $price = jQuery(this).find(".ProductItem__PriceList .Price:first").text().trim()
    if ($title && $img && $link && $price)
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

// !!!!!!!!!!!!!!!!
if (
  jQuery('ul.grid--view-items li').length > 0 &&
  jQuery('.product-single__photo [role="presentation"]:first').length === 0
) {
  $arr = [];

  jQuery('ul.grid--view-items li').each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim();

    if(jQuery(this).find(".product-card__image-with-placeholder-wrapper").next().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find(".product-card__image-with-placeholder-wrapper")
    .next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0].trim()
    .slice(0, -1)
    else $img = ''
     

    $link =
     'https://www.rjswim.com' +
       jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".price-item--regular").text().trim()
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });

  $arr
}


jQuery('.product-single__image').length



if (
  jQuery("ul.common_pro_list1 li").length > 0 &&
  jQuery('.product-single__media-wrapper img.zoomImg').length === 0  
) {
  $arr = []

  jQuery("ul.common_pro_list1 li").each(function () {
    $title = jQuery(this).find(".name").text().trim()

    // if(jQuery(this).find("a:first").next().next().next().text().trim())
    // $img =
    // // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    // 'https:' + 
    // jQuery(this).find("a:first")
    // .next().next().next()
    // .text().trim()
    // .split('src="')[1]
    // .split(' alt')[0].trim()
    // .slice(0, -1)
    // else $img = ''

    $img = 
      // 'https:' +
         (((jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
         jQuery(this).find("img:last").attr("src")|| '')))
        //  .split(', ')[0];
        .replace(/\s/g,'%20')

    $link =
    'https://www.beautyonface.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first").text().trim().split('US')[1]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery("ul.productgrid--items li").length > 0 &&
  jQuery('.woocommerce-product-gallery__image img').length === 0  
) {
  $arr = []

  jQuery("ul.productgrid--items li").each(function () {
    $title = jQuery(this).find(".productitem--title").text().trim()  

    $img = 
      'https:' +
         (((jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
         jQuery(this).find("img:last").attr("srcset")|| '')))
         .split(' ')[0];

    $link =
    'https://www.mcsquares.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price--main .money").text().trim()   
    // .split('€')[1]

    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


document.querySelectorAll('.product-list--collection .product-item')


if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    jQuery(this).find('.product-image:first').css('background-image')
    .split('url(')[1]
    .slice(1,-2)
    //  ||
    // ('https:' + 
    //   ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
    //     jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link =
    'https://epikcanvas.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-price .money:first").text().trim()
    // if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery(".collection__products .grid__item").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery(".collection__products .grid__item").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    jQuery(this).find('.product-image:first').css('background-image')
    .split('url(')[1]
    .slice(1,-2)
    //  ||
    // ('https:' + 
    //   ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
    //     jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link =
    'https://epikcanvas.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-price .money:first").text().trim()
    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}