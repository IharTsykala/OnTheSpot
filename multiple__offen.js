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

// div div noscript

if (
  jQuery(".card-list .card").length > 0 &&
  jQuery(".pproduct__media-container img:first").length === 0
) {
  $arr = []

  jQuery(".card-list .card").each(function () {
    $title = jQuery(this).find(".card__name").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =       
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
   
    else $img = ""

    $link = "https://carbonnique.com" + jQuery(this).find("a:first").attr("href")

    $price =
    // '£'+
    jQuery(this)   
      .find(".card__price:first")
      .text()
      .trim()
    // .split('£')[1]
    
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

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link =
      "https://theroyallookforless.com" +
      jQuery(this).find("a:first").attr("href")

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
      jQuery(this)
        .find(".plp-product__price .money")
        .attr("ge-data-converted-price")

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

if (
  jQuery(".products .product-item").length > 0 &&
  jQuery(".fotorama__active img").length === 0
) {
  $arr = []

  jQuery(".products .product-item").each(function () {
    $title = jQuery(this).find(".product-item-link").text().trim()

    $img = jQuery(this).find("img:first").attr("src")

    $link =
      // "https://cuoieriashop.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price:first").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

//////////////////

// CollectionMain one src

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim()

      $img =
      "https:" +
      // jQuery(this).find("img:first").attr("data-src") ||
      (
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("src") ||
        ""
      )
        .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://myrosebuddha.com" +
      jQuery(this).find("a.ProductItem__ImageWrapper").attr("href")

    $price =
      // "HKD" +
      // " " +
      jQuery(this)
        .find(".ProductItem__PriceList:first .Price:first")
        .text()
        .trim()
    // .split("$")[1]
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

//////////////////////
//////////////////


// CollectionMain noscript

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim()

    if (jQuery(this).find("noscript").text().trim())
    $img =
    
      "https:" +
      jQuery(this)
        .find("noscript")
        .text()
        .trim()
        .split('src="')[2]
        .split(" ")[0]
        // .split("url('")[1]
        // .split(")")[0]
        .trim()
        .slice(0, -1)
  // .replace('gif', 'jpg')
  else $img = ""

    $link =
      "https://treasuresbykyem.com" +
      jQuery(this).find("a.ProductItem__ImageWrapper").attr("href")

    $price =
      // "HKD" +
      "€" +
      // "$" +
      jQuery(this)
        .find(".ProductItem__PriceList:first .Price:first")
        .text()
        .trim()
    .split("€")[1]
    // .split("$")[1]
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

//////////////////////

if (
  jQuery("ol.product-items li").length > 0 &&
  jQuery('[class="product media"] .fotorama__active img').length === 0
) {
  $arr = []

  jQuery("ol.product-items li").each(function () {
    $title = jQuery(this).find(".product-item-link").text().trim()

    $img =
      // 'https:' +
      jQuery(this).find(" img:first").attr("src")
    //  .split('src="')[2].split(' ')[0].slice(0, -1)

    $link =
      //  'https://www.hairburst.com' +
      jQuery(this).find(" a:first").attr("href")

    $price = jQuery(this).find(".price:first").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

// !!!!!!!!!!!!!!!!
if (
  jQuery("ul.grid--view-items li").length > 0 &&
  jQuery('.product-single__photo [role="presentation"]:first').length === 0
) {
  $arr = []

  jQuery("ul.grid--view-items li").each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim()

    if (
      jQuery(this)
        .find(".product-card__image-with-placeholder-wrapper")
        .next()
        .text()
        .trim()
    )
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find(".product-card__image-with-placeholder-wrapper")
          .next()
          .text()
          .trim()
          .split('src="')[1]
          .split(" alt")[0]
          .trim()
          .slice(0, -1)
    else $img = ""

    $link =
      "https://www.firsthealthapparel.com" +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price-item--regular").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

jQuery(".product-single__image").length

if (
  jQuery("ul.common_pro_list1 li").length > 0 &&
  jQuery(".product-single__media-wrapper img.zoomImg").length === 0
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
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        //  .split(', ')[0];
        .replace(/\s/g, "%20")

    $link =
      "https://www.beautyonface.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first").text().trim().split("US")[1]
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
  jQuery(".product-gallery__image img").length === 0
) {
  $arr = []

  jQuery("ul.productgrid--items li").each(function () {
    $title = jQuery(this).find(".productitem--title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        jQuery(this).find("img:last").attr("srcset") ||
        ""
      ).split(" ")[0]

    $link =
      "https://www.bulldognutrition.ca" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price--main .money").text().trim()
    .split(' ')[0]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

document.querySelectorAll(".product-list--collection .product-item")

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery("img#mainimage:first").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] ||
      jQuery(this)
        .find(".product-image:first")
        .css("background-image")
        .split("url(")[1]
        .slice(1, -2)
    //  ||
    // ('https:' +
    //   ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
    //     jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link = "https://epikcanvas.com" + jQuery(this).find("a:first").attr("href")

    $price =
    '$'+
    (jQuery(this).find(".grid-link__meta:first").text().trim().split('$')[2]
    || jQuery(this).find(".grid-link__meta:first").text().trim().split('$')[1])
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery(".collection__products .grid__item").length > 0 &&
  jQuery("img#mainimage:first").length === 0
) {
  $arr = []

  jQuery(".collection__products .grid__item").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] ||
      jQuery(this)
        .find(".product-image:first")
        .css("background-image")
        .split("url(")[1]
        .slice(1, -2)
    //  ||
    // ('https:' +
    //   ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
    //     jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link = "https://epikcanvas.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-price .money:first").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery('.products-grid .product').length > 0 &&
  // jQuery(".data-zoom-wrapper img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery('.products-grid .product').each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          // .split("url('")[1]
          // .split(")")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = 
    "https://journeymanshop.com" +
     jQuery(this).find("a:first").attr("href")

    $price =
    jQuery(this).find(".price:first .money:first").text().trim().replace(/\s/g, "").split('-')[0]
    ||
    jQuery(this).find(".price:first .money:first").text().trim().replace(/\s/g, "")
    

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery('.products-grid .product').length > 0 &&
  // jQuery(".data-zoom-wrapper img:first").length === 0
  jQuery('.image-link').length === 0
) {
  $arr = []

  jQuery('.products-grid .product').each(function () {
    $title = jQuery(this).find(".shopify-loop-product__title").text().trim()

    $img =
    "https:" +
    jQuery(this).find("img:first").attr("data-src") ||
    (
      jQuery(this).find("img:first").attr("data-srcset") ||
      jQuery(this).find("img:first").attr("srcset") ||
      jQuery(this).find("img:first").attr("src") ||
      ""
    )
     
      .split(" ")[0]


    $link = 
    "https://www.vintageclassy.com/" +
     jQuery(this).find("a:first").attr("href")

    $price =
    jQuery(this).find(".price:first .money:first").text().trim().replace(/\s/g, "").split('-')[0]
    ||
    jQuery(this).find(".price:first .money:first").text().trim().replace(/\s/g, "")
    

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".product-grid .grid__item").length > 0 &&
  // jQuery(".data-zoom-wrapper img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".product-grid .grid__item").each(function () {
    $title = jQuery(this).find(".indiv-product-title-text").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          // .split("url('")[1]
          // .split(")")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://shoemehoney.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".money-styling:first .money:first").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery('.tt-product-listing .tt-product').length >
    0 &&
  jQuery(".qiuck_zoom  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.tt-product-listing .tt-product').each(
    function () {
      $title = jQuery(this)
        .find(".tt-title")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.joycenamenecklace.com/" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".tt-price:first .new-price" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////

///////////////////////////////////

// div div background image

if (
  jQuery(".collection-all-products-wrap .collectionBlock").length > 0 &&
  jQuery(
    '[class="starting-slide slick-slide slick-current slick-active"] img:first'
  ).length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-all-products-wrap .collectionBlock").each(function () {
    $title = jQuery(this).find("h4").text().trim()

    $img =
      // "https:" +
      (
        (
          jQuery(this)
            .find(".collectionBlock-image:first")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)

    $link =
      "https://fictionalobjects.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find("h3").text().trim().replace(/\s/g, "")

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li only src

if (
  jQuery("ul.collection-grid li").length > 0 &&
  jQuery('[class="product-slide swiper-slide swiper-slide-active"] img:first').length === 0
) {
  $arr = []

  jQuery("ul.collection-grid li").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(" ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://eme-te.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      // " " +
      jQuery(this).find(".product-price:first .money").text().trim()
    // .split("USD")[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// ul li noscript

if (
  jQuery("ul.grid--uniform li").length > 0 &&
  jQuery(".product-single__media-wrapper img:first").length === 0
) {
  $arr = []

  jQuery("ul.grid--uniform li").each(function () {
    $title = jQuery(this).find(".product-card__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this)
          .find("noscript")
          // .next()
          .text()
          .trim()
          .split('src="')[1] || ""
      )
        .split(" ")[0]
        // .split(" class")[0]
        .slice(0, -2)

    $link =
     "https://atelier-roupa.com" +
     jQuery(this).find("a:first").attr("href")

    $price =
      // "£" +
      "$" +
      // '€' +
      jQuery(this).find(".price-item--regular:first").text().trim()
    // .split("£")[1]
    .split("$")[1]
    // .split("€")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

if (
  jQuery('[data-hook="product-list-wrapper"] li').length > 0 &&
  jQuery(
    '[data-layout-name="classic"] .slick-active [data-hook="product-image"]:first'
  ).length === 0
) {
  $arr = []

  jQuery('[data-hook="product-list-wrapper"] li').each(function () {
    $title = jQuery(this)
      .find('[data-hook="product-item-product-details"] h3')
      .text()
      .trim()

    // if(jQuery(this).find("img:first").next().text().trim())
    // $img =
    // // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] ||
    // // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    // 'https:' +
    // jQuery(this).find(".product__img-wrapper")
    // .next()
    // .text().trim()
    // .split('src="')[1]
    // .split(' alt')[0].trim()
    // .slice(0, -1)
    // else $img = ''

    $img =
      // 'https:' +
      (
        jQuery(this)
          .find('[data-hook="wix-media-image"]')
          .attr("src")
          .replace(/\s/g, "%20") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        jQuery(this)
          .find('[data-hook="wix-media-image"]')
          .attr("src")
          .replace(/\s/g, "%20") ||
        ""
      ).split(" ")[0]

    $link =
      'https://www.koai.in' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(
        '[data-hook="product-item-product-details"] [data-hook="product-item-price-to-pay"]'
      )
      .text()
      .trim()
    // .split('$')[1]
    // .trim()

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

if (
  jQuery("ul.catalog-list li div").length > 0 &&
  jQuery(".zoomImg:first").length === 0
) {
  $arr = []

  jQuery("ul.catalog-list li div").each(function () {
    $title = jQuery(this).find(".product-card-title").text().trim()

    $img =
      "https://lavzjewellery.ru/" +
      //  (jQuery(this).find(".panel-body a:first img").attr("data-src") ||
      jQuery(this).find("img:first").attr("src")
    //  jQuery(this).find("a:first img:first").attr("data-src") ||
    //  jQuery(this).find("a:first source:first").attr("data-srcset") ||
    //  jQuery(this).find("a:first source:first").attr("srcset")

    $link =
      "https://lavzjewellery.ru/" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-card-price:last").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////
if (
  jQuery('.category__products [class="w-container col"]').length > 0 &&
  jQuery('[class="woocommerce-main-image pswp-main-image zoom"] img:first')
    .length === 0
  // &&  jQuery(".product-essential").length === 0
) {
  $arr = []

  jQuery('.category__products [class="w-container col"]').each(function () {
    $title = jQuery(this)
      .find(".w-product-title")
      .text()
      .trim()
      .replace(/\s\s+/g, "")

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-src") ||
        //  jQuery(this).find("img:first").attr("data-second-image") ||
        jQuery(this).find("img:first").attr("src") ||
        ""
      )
        .replace(/\s/g, "%20")
        .split(", ")[0]
    //  jQuery(this).find("img:first").attr("srcset")

    $link =
      "https://www.huxskateboards.com" +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".font--product-price:first").text().trim()
    // .split('US')[1]
    // .split('Kezdőár:')[1]
    // || jQuery(this).find(".productCurrency:last").text().trim()
    // .split('RON')[0].trim().split(' ').join('')
    //  || jQuery(this).find(".card__price").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery(
    '.category__wrapper .category__products [class="w-cell col col-6 col-sm-6 col-md-4"]'
  ).length > 0 &&
  jQuery('[class="woocommerce-main-image pswp-main-image zoom"] img:first')
    .length === 0
  // &&  jQuery(".product-essential").length === 0
) {
  $arr = []

  jQuery(
    '.category__wrapper .category__products [class="w-cell col col-6 col-sm-6 col-md-4"]'
  ).each(function () {
    $title = jQuery(this)
      .find(".w-product-title")
      .text()
      .trim()
      .replace(/\s\s+/g, "")

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-src") ||
        //  jQuery(this).find("img:first").attr("data-second-image") ||
        jQuery(this).find("img:first").attr("srcset") ||
        ""
      )
        .replace(/\s/g, "%20")
        .split(", ")[0]
    //  jQuery(this).find("img:first").attr("srcset")

    $link =
      "https://www.huxskateboards.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      jQuery(this)
        .find(".font--product-price:first")
        .text()
        .trim()
        .split(" - ")[0] ||
      jQuery(this).find(".font--product-price:first").text().trim()

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".grid-uniform .grid-item").length > 0 &&
  jQuery(".product__image-wrapper img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid-item").each(function () {
    $title = jQuery(this).find("p").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = 
    "https://ananovala.com" + 
    jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      jQuery(this)
        .find(".product-item--price:first small")
        .text()
        .trim()
        .replace(/\s/g, "").slice(0,3)
        + '.' +
        jQuery(this)
        .find(".product-item--price:first small")
        .text()
        .trim()
        .replace(/\s/g, "").slice(-2)

    // .split('$')[2]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////

// ul li noscript

if (
  jQuery("ul.grid--uniform li").length > 0 &&
  jQuery(".product-single__media img:first").length === 0
) {
  $arr = []

  jQuery("ul.grid--uniform li").each(function () {
    $title = jQuery(this).find(".product-card__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this)
          .find("noscript")
          // .next()
          .text()
          .trim()
          .split('src="')[1] || ""
      )
        .split(" ")[0]
        // .split(" class")[0]
        .slice(0, -2)

    $link =
      "https://www.altrsoaps.com" + jQuery(this).find("a:first").attr("href")

    $price =
      "$" +
      " " +
      jQuery(this)
        .find(".price-item--regular:first")
        .text()
        .trim()
        .split("$")[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////

//////////////////////////

// div div img one src

if (
  jQuery(".container .content-indent .pt-product").length > 0 &&
  jQuery(".zoomWindowContainer div:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".container .content-indent .pt-product").each(function () {
    $title = jQuery(this).find("h2.pt-title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find(".pt-img img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = "https://www.thebodyshop.qa" + jQuery(this).find("a:first").attr("href")

    $price =
      "QAR" +
      " " +
      jQuery(this).find(".pt-price:first span:last").text().trim().replace(/\s/g, "")
    .split("QR")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
///////////////////////////////////////////////
/////////////////////////////////////////

// div div noscript grid--uniform

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  // jQuery(".product-single__photo img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title:first").text().trim()

    if (jQuery(this).find("noscript").text().trim().split('src="')[1])
      $img =       
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]          
          .split(" ")[0]
          .trim()
          .slice(0, -1)   
    else $img = ""

    $link = 
    "https://milkmoney.co" +
     jQuery(this).find("a:first").attr("href")

    $price =
      "$" +   
      // '£' +   
       jQuery(this)
        .find(".grid-product__price:first span")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("$")[1]       
        // .split("£")[1]         

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".product-single__photos img:first").length === 0
  &&  jQuery(".product-single__description").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =        
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://byhomegoodies.nl" + jQuery(this).find("a:first").attr("href")

      $price =
      // '£'+
      // '$'+
      '€'+
      (jQuery(this).find(".grid-product__price:first .on-sale").text().trim().split('€')[1]
      || jQuery(this).find(".grid-product__price:first .on-sale").text().trim().split('€')[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

//////////////////////////////////
/////////////////////////////

// div div noscript

if (
  jQuery(".grid-uniform .grid-item").length > 0 &&
  jQuery(".image-zoom img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid-item").each(function () {
    $title = jQuery(this).find("p").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://moodsclothing.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      jQuery(this)
        .find(".product-item--price .visually-hidden:last")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[2]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div one src

if (
  jQuery(".grid-uniform .grid-item").length > 0 &&
  jQuery(".product-photo-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid-item").each(function () {
    $title = jQuery(this).find(".product-item--title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://wildoaktrail.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      (
        jQuery(this)
          .find(".product-item--price .product-item--rg-price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("Sale")[1] ||
        jQuery(this)
          .find(".product-item--price .product-item--rg-price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
      ).slice(0, -2)

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div one src

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".product-single__photos img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )     
        .split(" ")[0]

    $link =
      "https://www.woodcockandcavendish.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      jQuery(this)
        .find(".grid-link__meta:first .money:last")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("$")[1]
      

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery(".products_list .product").length > 0 &&
  jQuery('[class="responsive-image__wrapper  "] img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".products_list .product").each(function () {
    $title = jQuery(this).find(".product_name").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://skumclub.bigcartel.com/" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "£" +
      jQuery(this)
        .find('[class="price active"]:first')
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('£')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div background image

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  jQuery(
    '[class="starting-slide slick-slide slick-current slick-active"] img:first'
  ).length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      // "https:" +
      (
        (
          jQuery(this)
            .find(".grid-product__secondary-image:first")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)

    $link = "https://parkhurst.ca" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$'+
      jQuery(this)
        .find(".grid-product__price:first .money")
        .next()
        .text()
        .trim()
        .replace(/\s/g, "") ||
      // .split('from')[1]
      jQuery(this)
        .find(".grid-product__price:first")
        // .next()
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('from')[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div a container

if (jQuery('[id="productList"] a').length > 0 && [].length === 0) {
  $arr = []

  jQuery('[id="productList"] a').each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      // "https:" +
      jQuery(this).find("img:first").attr("src")

    $link = "http://www.florabrook.com" + jQuery(this).attr("href")

    $price =
      "$" +
      jQuery(this).find(".product-price .sqs-money-native:first").text().trim()
    // .split('От')

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

// div div noscript

if (
  jQuery(".product-list .product-item").length > 0 &&
  jQuery(".product-gallery__carousel-wrapper img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product-list .product-item").each(function () {
    $title = jQuery(this).find(".product-item__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]
   

    $link =
      "https://purenails.co" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      '£'+
      (jQuery(this)
        .find(".price--highlight")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1] ||
        jQuery(this)
          .find(".price")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("£")[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div one src

if (
  jQuery(".product-list .product-item").length > 0 &&
  jQuery(".product-gallery__carousel-wrapper img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product-list .product-item").each(function () {
    $title = jQuery(this).find(".product-item__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]
   

    $link =
      "https://www.ecr4kids.com" + jQuery(this).find("a:first").attr("href")

    $price =
      "$" +
      (jQuery(this)
        .find(".price--highlight")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1] ||
        jQuery(this)
          .find(".price")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("$")[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li grid-uniform

if (
  jQuery("ul.grid-uniform li").length > 0 &&
  jQuery(".mainBand--product .productItem .prodViews img:first").length === 0
) {
  $arr = []

  jQuery("ul.grid-uniform li").each(function () {
    $title = jQuery(this).find(".maxus-product__name").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link = "https://galerie.la" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".maxus-product__amount:first").text().trim()
    // .split("$")[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery(".product-list .product-wrap").length > 0 &&
  jQuery('.gallery-wrap img:first')
    .length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".product-list .product-wrap").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.flickerdigital.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".price span.money:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li only src

if (
  jQuery("ul.products li.product").length > 0 &&
  // jQuery(".woocommerce-product-gallery__image  img:first").length === 0
  jQuery('.product-content').length === 0
) {
  $arr = []

  jQuery("ul.products li.product").each(function () {
    $title = jQuery(this).find(".product-name").text().trim()

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      // "https://www.frontierraas.com/" +
      jQuery(this).find("a:last")
      .attr("href")

    $price =
      // "$" + ' ' +
      // jQuery(this).find(".woocommerce-Price-amount:first bdi").text().trim()
    // .split("$")[1]
    // .trim()
  
    // "$" + ' ' +
    jQuery(this).find(".price-box:first .price").text().trim()
  // .split("$")[1]
  // .trim()


    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li only src

if (
  jQuery("ol.products li.product").length > 0 &&
  jQuery('.fotorama__wrap').length === 0 
  &&
  jQuery('[itemprop="description"]').length === 0
) {
  $arr = []

  jQuery("ol.products li.product").each(function () {
    $title = jQuery(this).find(".product-item-link").text().trim()

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://www.sail.ca" +
      jQuery(this).find("a:first")
      .attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".price-box:first .price:first").text().trim()
    // .split("$")[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


/////
// .product-list .product-item nonscript img

if (
  jQuery("ul.productList li.productItem").length > 0 &&
  jQuery(".mainBand--product .productItem .prodViews img:first").length === 0
) {
  $arr = []

  jQuery("ul.productList li.productItem").each(function () {
    $title = jQuery(this).find(".prodName").text().trim()

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link = "https://www.cue.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".priceRRP:first").text().trim()
    // .split("$")[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".products .product").length > 0 &&
  jQuery(".product-images img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".products .product").each(function () {
    $title = jQuery(this)
      .find(".product-title ")
      .text()
      .trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =      
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)    
    else $img = ""

    $link =
      "https://www.limitedfire.com" +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".price .money:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li grid-uniform

if (
  jQuery(".grid-uniform li").length > 0 &&
  jQuery(".product-photo-container img:first").length === 0
) {
  $arr = []

  jQuery(".grid-uniform li").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://www.magicvsteam.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".grid-link__org_price:first").text().trim()
    // .split("$")[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// .products .product-item

if (
  jQuery(".products .product").length > 0 &&
  jQuery("#product .image img").length === 0
) {
  $arr = []

  jQuery(".products .product").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link =
      "https://www.the311store.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price:first").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div a background image

if (
  jQuery(".collection-all-products-wrap a").length > 0 &&
  jQuery(".single-image img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-all-products-wrap a").each(function () {
    $title = jQuery(this).find(".collection-page-title").text().trim()

    $img =
      // "https:" +
      (
        (
          jQuery(this)
            .find(".collection-single-product:first")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)

    $link = "https://myfairygardens.com" + jQuery(this).attr("href")

    $price =
      jQuery(this)
        .find(".collection-page-price")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("From")[1] ||
      jQuery(this)
        .find(".collection-page-price")
        .text()
        .trim()
        .replace(/\s/g, "")

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div a img noscript

if (
  jQuery(".collection__products a").length > 0 &&
  jQuery(".product__image-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection__products a").each(function () {
    $title = jQuery(this).next().find("a:first").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://beanieandcecil.com" + jQuery(this).attr("href")

    $price = jQuery(this).next().next().text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

///////////////////////////////

// div a collection__wrapper

if (
  jQuery(".collection__wrapper a").length > 0 &&
  jQuery(".product-gallery--media-wrapper  img:first").length === 0
) {
  $arr = []

  jQuery(".collection__wrapper a").each(function () {
    $title = jQuery(this).find("h2").text().trim()

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link = "https://dixiecharliringlights.com" + jQuery(this).attr("href")

    $price =
      // "€" +
      jQuery(this).find("h4").text().trim()
    // .split('От')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

// div div span

if (
  jQuery(".product-list .product-wrap").length > 0 &&
  jQuery(".product_gallery img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product-list .product-wrap").each(function () {
    $title = jQuery(this).find(".title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://ca.bathmatedirect.com/" +
      jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this).find(".price:first").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".product-list .product-block").length > 0 &&
  // jQuery(".main-image img:first").length === 0
  jQuery('.description').length === 0
) {
  $arr = []

  jQuery(".product-list .product-block").each(function () {
    $title = jQuery(this).find(".title:first").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://www.molodress.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      jQuery(this)
        .find(".price:first .theme-money")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split("$")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  //  jQuery(".zoomWindowContainer img:first").length === 0
  jQuery('[id="AddToCart-product-template"]').length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = "https://en.bopied.com" + jQuery(this).find("a:first").attr("href")

    $price =
    "$"+
      jQuery(this)
        .find(".product-price__price:last")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("$")[1] 
        || ""

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}
///////////////////////////////////
///////////////////////////

// div div div attr

if (
  jQuery(".product-grid .product-item").length > 0 &&
  // jQuery('[class="lazy-image product__photo slick-slide slick-current slick-active"] img:first').length === 0
  jQuery('.product-description p').length === 0
) {
  $arr = []

  jQuery(".product-grid .product-item").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this)
          .find(".product-item__image:first div:first")
          .attr("data-bgset") ||
        jQuery(this)
          .find(".product-item__image:last div:last")
          .attr("data-bgset") ||
        // jQuery(this)
        //   .find(".product-item__image:first source:first")
        //   .attr("srcset") ||
        // jQuery(this)
        //   .find(".product-item__image:first source:first")
        //   .attr("data-srcset") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = "https://audvik.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first .mw-price").text().trim().replace(/\s/g, "")
    // .split("$")[1] || ""

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div one img .product-grid

if (
  jQuery(".product-grid .product-item").length > 0 &&
  jQuery('.photos-and-thumbs img:first').length === 0
  // jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".product-grid .product-item").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img =
    "https:" +
    (
      // jQuery(this).find("img:first").attr("data-src") ||
      // jQuery(this).find("img:first").attr("data-srcset") ||
      // jQuery(this).find("img:first").attr("srcset") ||
      jQuery(this).find("img:last").attr("src") ||
      ""
    )
      // .replace(/\s/g, "%20")
      .split(" ")[0]

    $link = "https://miss-spa.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first .money").text().trim().replace(/\s/g, "")
    // .split("$")[1] || ""

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript .product-grid

if (
  jQuery(".product-grid .product-item").length > 0 &&
  jQuery('.product-description p').length === 0
  // jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".product-grid .product-item").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          // .split('src="')[1]
          .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -3)
    .replace('gif', 'jpg')
    else $img = ""

    $link = "https://miss-spa.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first .mw-price").text().trim().replace(/\s/g, "")
    // .split("$")[1] || ""

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div div div attr

if (
  jQuery(".container .grid__item").length > 0 &&
  // jQuery(".product-image-main img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".container .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this)
          .find(".grid__image-ratio:first div:last")
          .attr("data-bgset") ||
        jQuery(this)
          .find(".grid__image-ratio:last div:last")
          .attr("data-bgset") ||
        jQuery(this)
          .find(".grid__image-ratio:first source:first")
          .attr("srcset") ||
        jQuery(this)
          .find(".grid__image-ratio:first source:first")
          .attr("data-srcset") ||
        jQuery(this).find(".grid__image-ratio:last div:last").css("background-image")
        // .split("url(")[1]
        // .slice(-8) 
           ||
        ""
      )
        // .replace(/\s/g, "%20")
        .trim()
        .split(" ")[0]

    $link =
      "https://morrealeparis.com" + jQuery(this).find("a:first").attr("href")

    $price =
      "€" +
      ((
        jQuery(this)
          .find(".grid-product__price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("$")[2] || ""
      ).split("Save")[0] ||
        jQuery(this)
          .find(".grid-product__price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("€")[1])

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}
// div div img one src

if (
  jQuery(".collection-products .product").length > 0 &&
  jQuery('[id="shopify-section-Product-Video-Gallery"] img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-products .product").each(function () {
    $title = jQuery(this).find("h3:first").text().trim()

    $img =
      "https:" +
      (
        // jQuery(this).find("img:first").attr("data-src") ||
        // jQuery(this).find("img:first").attr("data-srcset") ||
        // jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://aestheticlabel.com" + jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this)
        .find(".currPrice:first")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div a img one src

if (
  jQuery(".collection-products .collection-product").length > 0 &&
  jQuery('[class="image slick-slide slick-current slick-active"]  img:first')
    .length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-products .collection-product").each(function () {
    $title = jQuery(this).find(".title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = "https://lightsandlamps.com" + jQuery(this).attr("href")

    $price =
      //  '$' +
      jQuery(this).find(".price:first .money").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div a img one src

if (
  jQuery(".collection-products .product-collection").length > 0 &&
  jQuery('[class="image slick-slide slick-current slick-active"]  img:first')
    .length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-products .product-collection").each(function () {
    $title = jQuery(this).find(".title:first").text().trim() || ''

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = "https://www.rinfit.com" + jQuery(this).attr("href")

    $price =
      //  '$' +
      jQuery(this).find(".price:first span:last").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div article noscript

if (
  jQuery(".product-grid--root article").length > 0 &&
  jQuery(".product-page--images-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".product-grid--root article").each(function () {
    $title = jQuery(this).find(".product--title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://ku-mi.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".product--price-wrapper .product--price:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div article one src

if (
  jQuery(".collection-products article").length > 0 &&
  jQuery(".product-page--images-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-products article").each(function () {
    $title = jQuery(this).find(".product-list-item-title").text().trim()

    $img =
      "https:" +
      // jQuery(this).find("source:first").attr("src") ||
      // jQuery(this).find("source:first").attr("data-srcset") ||
      // jQuery(this).find("source:first").attr("srcset") ||
      (jQuery(this).find("img:first").attr("src") || "")
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.thelovelykeepsakecompany.co.uk" +
      jQuery(this).find("a:first").attr("href")

    $price =
      "£" +
      jQuery(this)
        .find(".product-list-item-price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div article one noscript

if (
  jQuery(".collection-products article").length > 0 &&
  jQuery(".product-main-image img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-products article").each(function () {
    $title = jQuery(this).find(".product-list-item-title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
    $img =     
      "https:" +
      jQuery(this)
        .find("noscript")
        .text()
        .trim()
        .split('src="')[1]
        // .split("url('")[1]
        .split(" ")[0]
        .trim()
        .slice(0, -1)
  // .replace('gif', 'jpg')
  else $img = ""


    $link =
      "https://www.thelovelykeepsakecompany.co.uk" +
      jQuery(this).find("a:first").attr("href")

    $price =
    "$"+
      // "£" +
      jQuery(this)
        .find(".product-list-item-price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("£")[1]
        .split("$")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div div img one src

if (
  jQuery(".products .product").length > 0 &&
  jQuery(
    '.images img:first'
  ).length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".products .product").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      "https:" +
      jQuery(this).find("a:first").attr("data-bgset") 
      // (
      //   jQuery(this).find("source:first").attr("data-srcset") ||
      //   jQuery(this).find("source:first").attr("srcset") ||
      //   jQuery(this).find("a:first div").attr("data-bgset") ||
      //   jQuery(this).find("a:first div").css("background-image").split("url(")[1].slice(1, -2)  || 
      //           ""
      // )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://amazing.ca" + jQuery(this).find("a:first").attr("href")

    $price =
      // "NZD" +
      "$" +
      jQuery(this)
        .find(".product-info .price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("$")[1]
      //    ||
      // jQuery(this).find(".price:first").text().trim().replace(/\s/g, "")

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
///////////////////////////////////////////////

// div div source img one src

if (
  jQuery(".collection-grid .product").length > 0 &&
  jQuery(".cloud-zoom img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-grid .product").each(function () {
    $title = jQuery(this).find(".prod-title").text().trim()

    $img =
      "https:" +
      // jQuery(this).find("source:first").attr("src") ||
      (
        jQuery(this).find(".prod-image:first").attr("data-bgset") ||
        // jQuery(this).find(".prod-image:first").attr("srcset") ||
        // jQuery(this).find(".prod-image:first").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://gbweareurope.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "NZD" +
      // " " +
      jQuery(this)
        .find(".product-price__price:last")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split("-")[1]
    //   ||
    // jQuery(this).find(".price:first").text().trim().replace(/\s/g, "")

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
///////////////////////////////////////////////
// div div img one src

if (
  jQuery(".product-collection .product-item").length > 0 &&
  jQuery(".product-photo-container img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product-collection .product-item").each(function () {
    $title = jQuery(this).find(".product-title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-data-srcie") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("data-srcief") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://mialmastore.com" + jQuery(this).find("a:first").attr("href")

    $price =
       '$' +
      (jQuery(this)
        .find(".price-box:first .special-price")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split('$')[1]
        ||     
      jQuery(this)
        .find(".price-box:first .price-regular")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split('$')[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

///////////////////////////////////////
// div div img one src

if (
  jQuery('[class="product-list collection-matrix clearfix"] .product-wrap')
    .length > 0 &&
  jQuery(".product_gallery img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(
    '[class="product-list collection-matrix clearfix"] .product-wrap'
  ).each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.revitalash.it" + jQuery(this).find("a:first").attr("href")

    $price =
      jQuery(this)
        .find(".product-details:first .money:first")
        .text()
        .trim()
        .replace(/\s/g, "") ||
      // .split('$')[1]
      jQuery(this)
        .find(".product-info__caption:first .modal_price:first")
        .text()
        .trim()
        .replace(/\s/g, "")

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery(".collection-product__wrapper .common__product-gap").length > 0 &&
  jQuery(".sep-loaded-slider img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-product__wrapper .common__product-gap").each(function () {
    $title = jQuery(this)
      .find(".product-snippet__title-normal:first")
      .text()
      .trim()

    $img =
      "https:" +
      // jQuery(this).find("img:first").attr("data-src") ||
      (
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.prettyrosy.com" + jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this)
        .find(".product-snippet__price-wrapper:first .dj_skin_product_price")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

///////////////////////////////////////
// div div img one src

if (
  jQuery('[id="products_container"] [id="product_container"]').length > 0 &&
  jQuery('[id="main_photo_slider"] img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('[id="products_container"] [id="product_container"]').each(
    function () {
      $title = jQuery(this)
        .find('[id="content"]:first [id="product_item"]')
        .next()
        .text()
        .trim()

      $img =
        "https:" +
        // jQuery(this).find("img:first").attr("data-src") ||
        (
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          ""
        )
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://usa.beonebreed.com" + jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find('[id="price"]:first .money')
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////
/////
// div div img one src container

if (
  jQuery(".container .product-wrap").length > 0 &&
  jQuery(".product-gallery__image img").length === 0
) {
  $arr = []

  jQuery(".container .product-wrap").each(function () {
    $title = jQuery(this).find(".product-thumbnail__title-line").text().trim()

    $img =
      // "https:" +
      jQuery(this).find("img:first").attr("src")

    $link =
      "https://roxiecosmetics.co.uk" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".product-thumbnail__price:first .money:first")
      .text()
      .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

//////////////////////////////////////////

///////////////////////////////////////
/////
// div div img noscript container

if (
  jQuery(".container .product-wrap").length > 0 &&
  jQuery('.product-gallery__image img').length === 0
) {
  $arr = []

  jQuery(".container .product-wrap").each(function () {
    $title = jQuery(this).find(".product-thumbnail__title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://dreamersanddrifters.com.au" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price:first .money:first").text().trim()

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

//////////////////////////////////////////
///////////////////

// div div noscript
if (
  jQuery("#CollectionSection .grid__item").length > 0 &&
  jQuery(".product-single__media-wrapper img:first").length === 0
) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://shoppywise.com/" + jQuery(this).find("a:first").attr("href")

    $price =
      "$" +
      jQuery(this)
        .find(".grid-product__price:first")
        .text()
        .trim()
        .split("$")[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })

  $arr
}
////////////////////

// div a img noscript

if (
  jQuery('.css-1aaeukn a[as="[object Object]"]').length > 0 &&
  jQuery(".css-1b25yh7 img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery('.css-1aaeukn a[as="[object Object]"]').each(function () {
    $title = jQuery(this).attr("title")

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://www.mitchellandness.com.au" + jQuery(this).attr("href")

    $price = jQuery(this)
      .next()
      .next()
      .find(".ec3iic90:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript with background

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  jQuery(
    '[class="starting-slide slick-slide slick-current slick-active"] img:first'
  ).length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://parkhurst.ca" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$'+
      jQuery(this)
        .find(".grid-product__price:first .money")
        .next()
        .text()
        .trim()
        .replace(/\s/g, "") ||
      // .split('from')[1]
      jQuery(this)
        .find(".grid-product__price:first")
        // .next()
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('from')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  jQuery(".product__main-photos img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title:first").text().trim()

    if (jQuery(this).find("noscript").text().trim().split('src="')[1])
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]          
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://www.shopbefitted.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +    
      jQuery(this)
        .find(".grid-product__price--original:first")
        .next()
        .next()
        .text()
        .trim()
        .replace(/\s/g, "")
        ||
        jQuery(this)
        .find(".grid-product__price:first .money:first")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split("$")[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

/////////////////////////////////////////

// ul li only src

if (
  jQuery(".products-grid-view li").length > 0 &&
  jQuery('.product-photo-container img:first').length === 0
) {
  $arr = []

  jQuery(".products-grid-view li").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://www.bedandbathlinen.co.uk" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      // " " +
      jQuery(this).find(".grid-link__org_price:first").text().trim()
    // .split("USD")[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////

// ul li only src

if (
  jQuery(".products-grid li").length > 0 &&
  jQuery('.product-image-zoom img:first').length === 0
) {
  $arr = []

  jQuery(".products-grid li").each(function () {
    $title = jQuery(this).find(".product-name").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      // "https://www.baskick.com"  + 
      jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      // " " +
      jQuery(this).find(".regular-price:first .price").text().trim()
    // .split("USD")[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////
// div div noscript

if (
  jQuery(".product-grid--root .product--root").length > 0 &&
  jQuery(".product-page-images-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".product-grid--root .product--root").each(function () {
    $title = jQuery(this).find(".product--title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://www.youthphoria.com.au/" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".product--price-wrapper .product--price:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


// div article one src

if (
  jQuery(".collection-grid article").length > 0 &&
  jQuery(".product-images img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-grid article").each(function () {
    $title = jQuery(this).find(".product-card-title").text().trim()

    $img =
      "https:" +
      // jQuery(this).find("source:first").attr("src") ||
      // jQuery(this).find("source:first").attr("data-srcset") ||
      // jQuery(this).find("source:first").attr("srcset") ||
      (jQuery(this).find("img:first").attr("src") || "")
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://alphalete.uk" +
      jQuery(this).find("a:first").attr("href")

    $price =
      "£" +
      (jQuery(this)
        .find('.product-card-price:first [class=" isOnSale "]')
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1]
        ||
        jQuery(this)
        .find('.product-card-price:first')
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div .products .product-grid-item 

if (
  jQuery('.products .product-grid-item').length >
    0 &&
  jQuery(".product-image-wrap img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.products .product-grid-item').each(
    function () {
      $title = jQuery(this)
        .find(".product-title")
        .text()
        .trim()

      $img =
        // "https:" +
        // jQuery(this).find("img:first").attr("data-src") ||
        (
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          ""
        )
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        // "https://www.tpro.com" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".woocommerce-Price-amount:first bdi"
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

// div div img one src

if (
  jQuery(".product-list .product-block").length > 0 &&
  jQuery('.product_images img:first').length === 0
  //  jQuery(".description").length === 0
) {
  $arr = []

  jQuery(".product-list .product-block").each(function () {
    
    $title = jQuery(this).find("a.title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://missamara.com" + 
      jQuery(this).find("a:first").attr("href")

    $price =
    // '$'+
    jQuery(this)
      .find(".product-block__inner:first .price:first .money:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

///////////////////////////////////

// div div img one src

if (
  jQuery('[data-pf-type="Section"] [data-pf-type="ProductImage2"]').length > 0 &&
  // jQuery(".zoomWindowContainer div:first").length === 0
   jQuery('[data-pf-type="ProductATC"]').length === 0
) {
  $arr = []

  jQuery('[data-pf-type="Section"] [data-pf-type="ProductImage2"]').each(function () {
    
    $title = ''
    // jQuery(this).find("h2.pt-title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link = ''
    // "https://www.thebodyshop.qa" + jQuery(this).find("a:first").attr("href")

    $price = ''
    //   "QAR" +
    //   " " +
    //   jQuery(this).find(".pt-price:first span:last").text().trim().replace(/\s/g, "")
    // .split("QR")[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".collection-products .product").length > 0 &&
  jQuery('.product-single__photo__wrapper img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-products .product").each(function () {
    $title = jQuery(this).find("h3:first").text().trim()

    if (jQuery(this).find("noscript").text().trim())
    $img =
      // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
      // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
      "https:" +
      jQuery(this)
        .find("noscript")
        .text()
        .trim()
        .split('src="')[1]
        // .split("url('")[1]
        .split(" ")[0]
        .trim()
        .slice(0, -1)
  // .replace('gif', 'jpg')
  else $img = ""

    $link =
      "https://jeffersonstreetceramics.com" + jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this)
        .find(".product__price:first .product__price-price")
        .text()
        .trim()
        .replace(/\s/g, "")
    .split('Sold')[0]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div style grid--uniform
if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  // jQuery('.product-image-main img:first').length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    if (jQuery(this).find('a:first div div').text().trim())
    $img =
      // "https:" +     
        (jQuery(this).find('a:first div div').next()
        .css("background-image")
      .split('url("')[1]      
      ||
        ""
       )
       
        .split('"')[0]
        else 
        $img =  "https:" +(
          // jQuery(this).find("img:first").attr("data-mainimage") ||
          
            // jQuery(this).find("img:first").attr("data-srcset") ||
            jQuery(this).find("img:first").attr("srcset") ||
            jQuery(this).find("img:first").attr("data-srcset") ||
            "")
          
            // .replace(/\s/g, "%20")
            .split(" ")[0]

    $link = "https://berle.com" + jQuery(this).find("a:first").attr("href")

    $price =
    '$'+
    jQuery(this).find(".grid-product__price:first").text().trim().replace(/\s/g, "")
    .split('$')[1]
    

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".container .collectionBlock").length > 0 &&
  jQuery(".product-image:first").length === 0
) {
  $arr = []

  jQuery(".container .collectionBlock").each(function () {
    $title = jQuery(this).find(".collectionBlock__title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =       
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          // .split('src="')[1]
          .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -2)
   
    else $img = ""

    $link = "https://hellohues.com" + jQuery(this).find("a:first").attr("href")

    $price =
    // '£'+
    '$'+
    jQuery(this)   
      .find(".collectionBlock-info:first p:first")
      .text()
      .trim()
    // .split('£')[1]
    .split('$')[1]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })

  $arr
}

//////////////////////////////////////////////////////
// div div img one src

if (
  jQuery('.tt-product-listing .tt-product').length >
    0 &&
  jQuery(".tt-mobile-product-slider img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.tt-product-listing .tt-product').each(
    function () {
      $title = jQuery(this)
        .find(".tt-title")
        .text()
        .trim()

      $img =
        "https:" +(
        // jQuery(this).find("img:first").attr("data-mainimage") ||
        
          // jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.joycenamenecklace.com/" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".tt-price:first .new-price" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////
////////////////////////////////////////////
// div div one src

if (
  jQuery(".collection-product-list .product-item").length > 0 &&
  jQuery(".swiper-slide-active img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-product-list .product-item").each(function () {
    $title = jQuery(this).find(".product-item-title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("a:first img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      // "https://wildoaktrail.com" + 
      jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      // (
        jQuery(this)
          .find(".product-item-price .product-item-price-default:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          // .split("Sale")[1]
      //      ||
      //   jQuery(this)
      //     .find(".product-item-price .product-item-price-default:first")
      //     .text()
      //     .trim()
      //     .replace(/\s/g, "")
      // ).slice(0, -2)

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div one src

if (
  jQuery('[id="collection_products"] .product-snippet').length >
    0 &&
  jQuery(".qiuck_zoom  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('[id="collection_products"] .product-snippet').each(
    function () {
      $title = jQuery(this)
        .find(".dj_skin_product_list_title")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.kiwininjastore.com" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".product-snippet__price-wrapper:first .money:first" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      // if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}


if (
  jQuery('.collection__page-products .collection__page-product').length > 0 &&
  // jQuery(".data-zoom-wrapper img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery('.collection__page-products .collection__page-product').each(function () {
    $title = jQuery(this).find(".prod-title").text().trim()

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          .text()
          .trim()
          .split('src="')[1]
          .split(" ")[0]
          // .split("url('")[1]
          // .split(")")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = 
    "https://bloomchic.com" +
     jQuery(this).find("a:first").attr("href")

    $price =
    jQuery(this).find(".price__regular:first .price-item:first").text().trim().replace(/\s/g, "").split('-')[0]
    ||
    jQuery(this).find(".price__regular:first .price-item:first").text().trim().replace(/\s/g, "")
    

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery('.wrapper .feed-col').length >
    0 &&
  jQuery(".MagicZoomPlus  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.wrapper .feed-col').each(
    function () {
      $title = jQuery(this)
        .find(".feed-title")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://shop.barbican.org.uk" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".feed-price:first" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      // if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////
// div div img one src
if (
  jQuery(".products .thumbnail").length > 0 &&
  jQuery(".description").length === 0
) {
  $arr = []

  jQuery(".products .thumbnail").each(function () {
    $title = jQuery(this).find(".title").text().trim()

    $img =
    "https:" +
    jQuery(this).find("img:first").attr("src")

    $link =
      "https://www.huckleberrybikes.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price:first span:first").text().trim()

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

//////////////////
// div div img one src
if (
  jQuery('.wrapper .product-grid-item').length >
    0 &&
  jQuery(".product-single__photos  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.wrapper .product-grid-item').each(
    function () {
      $title = jQuery(this)
        .find(".name_wrapper")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://us.peppyco.com" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".price_wrapper:first" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      // if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

// div div attr .grid--uniform .grid-product
if (
  jQuery(".grid--uniform .grid-product").length > 0 &&
  // jQuery('.product__main-photos img:first').length === 0
  jQuery('.product-single__description-full').length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid-product").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
    "https:" +
    (
      jQuery(this)
        .find(".grid__image-ratio:first div:last")
        .attr("data-bgset") ||
      jQuery(this)
        .find(".grid__image-ratio:last div:last")
        .attr("data-bgset") ||
      jQuery(this)
        .find(".grid__image-ratio:first source:first")
        .attr("srcset") ||
      jQuery(this)
        .find(".grid__image-ratio:first source:first")
        .attr("data-srcset") ||
      jQuery(this).find(".grid__image-ratio:last div:last").css("background-image")
      // .split("url(")[1]
      // .slice(-8) 
         ||
      ""
    )
      // .replace(/\s/g, "%20")
      .trim()
      .split(" ")[0]

    $link = "https://audvik.com" + jQuery(this).find("a:first").attr("href")

    $price =
    '$' +
    jQuery(this).find(".grid-product__price:first").text().trim().replace(/\s/g, "")
    .split("$")[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery('.product-listing .product_item').length >
    0 &&
  jQuery(".tt-mobile-product-slider img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.product-listing .product_item').each(
    function () {
      $title = jQuery(this)
        .find(".product_title")
        .text()
        .trim()

      $img =
        "https:" +(
        // jQuery(this).find("img:first").attr("data-mainimage") ||
        
          // jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.joycenamenecklace.com/" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".product_price:first span:first" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////
if (
  jQuery(".product-list .product-item").length > 0 &&
  jQuery(".product-gallery__carousel-wrapper img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product-list .product-item").each(function () {
    $title = jQuery(this).find(".product-item__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]
   

    $link =
      "www.therugsoutlet.co.uk" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      '£'+
      (jQuery(this)
        .find(".price--highlight")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1] ||
        jQuery(this)
          .find(".price")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("£")[1])

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery('.tt-product-listing .tt-product').length >
    0 &&
  jQuery(".qiuck_zoom  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.tt-product-listing .tt-product').each(
    function () {
      $title = jQuery(this)
        .find(".tt-title")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.joycenamenecklace.com/" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".tt-price:first .new-price" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

// div div img one src

if (
  jQuery('.pt-product-listing .pt-product').length >
    0 &&
  jQuery(".qiuck_zoom  img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.pt-product-listing .pt-product').each(
    function () {
      $title = jQuery(this)
        .find(".pt-title")
        .text()
        .trim()

      $img =
        "https:" +(
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.luxebaeshop.com" + 
        jQuery(this).find("a:first").attr("data-value")

      $price =
        //  '$' +
        jQuery(this)
          .find(".pt-price:first .new-price")
          .text()
          .trim()
          .replace(/\s/g, "")
           ||
           jQuery(this)
          .find(".pt-price:first")
          .text()
          .trim()
          .replace(/\s/g, "")

      
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////
//////////////////////////////////////////////////////
// div div img one src

if (
  jQuery('.product-listings .product-box').length >
    0 &&
  jQuery(".tt-mobile-product-slider img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('.product-listings .product-box').each(
    function () {
      $title = jQuery(this)
        .find(".product-name")
        .text()
        .trim()

      $img =
        "https:" +(
        // jQuery(this).find("img:first").attr("data-mainimage") ||
        
          // jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.corston.com" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".price:first .money" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      // if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}

///////////////////////////////////////

// div article one src

if (
  jQuery(".products article").length > 0 &&
  jQuery(".product-page--images-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".products article").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      // "https:" +
      // jQuery(this).find("source:first").attr("src") ||
      // jQuery(this).find("source:first").attr("data-srcset") ||
      // jQuery(this).find("source:first").attr("srcset") ||
      (jQuery(this).find("img:first").attr("src") || "")
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.theinvisibleedge.co.uk" +
      jQuery(this).find(".prod-light-glow a:first").attr("href")

    $price =
      "£" +
      jQuery(this)
        .find(".product-price-and-shipping:first .price")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("£")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery('[id="app"] .gl-product-card-container').length >
    0 &&
  jQuery('[data-auto-id="image-viewer"]  img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery('[id="app"] .gl-product-card-container').each(
    function () {
      $title = jQuery(this)
        .find(".gl-product-card__name")
        .text()
        .trim()

      $img =
        // "https:" +
        (
        jQuery(this).find("img:first").attr("data-mainimage") ||
        
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          "")
        
          // .replace(/\s/g, "%20")
          .split(" ")[0]

      $link =
        "https://www.adidas.com.ph" + 
        jQuery(this).find("a:first").attr("href")

      $price =
        //  '$' +
        jQuery(this)
          .find(
            ".gl-price .gl-price-item" 
          )
          .text()
          .trim()
          .replace(/\s/g, "")
      // .split('$')[1]
      // .split(' ')[0]

      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    }
  )
  $arr
}
///////////////////////////////////////////////////////////////

// div dii one src

if (
  jQuery(".plp__grid .product-card ").length > 0 &&
  jQuery(".product-photo-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".plp__grid .product-card").each(function () {
    $title = jQuery(this).find(".h5").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://ca.moscot.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      (
        jQuery(this)
          .find(".product-item--price .product-item--rg-price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("Sale")[1] ||
        jQuery(this)
          .find(".product-item--price .product-item--rg-price:first")
          .text()
          .trim()
          .replace(/\s/g, "")
      ).slice(0, -2)

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}
/////////////////////////////////////////////////////
// div article one src

if (
  jQuery(".l-card-list__inner article").length > 0 &&
  jQuery(".product-page--images-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".l-card-list__inner article").each(function () {
    $title = jQuery(this).find(".c-card__heading").text().trim()

    $img =
      "https:" +
      // jQuery(this).find("source:first").attr("src") ||
      // jQuery(this).find("source:first").attr("data-srcset") ||
      // jQuery(this).find("source:first").attr("srcset") ||
      (jQuery(this).find("img:first").attr("src") || "")
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      // "https://www.thelovelykeepsakecompany.co.uk" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "£" +
      jQuery(this)
        .find(".c-price-list:first .c-price-list__item:last")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("£")[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

///////////////////////////////////////////////////////////////

// div dii one src

if (
  jQuery(".grid__products .grid-product").length > 0 &&
  jQuery(".details-gallery__images img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid__products .grid-product").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://shoplymosh.co.za" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      // (
        jQuery(this)
          .find(".grid-product__price .grid-product__price-value:first")
          .text()
          .trim()
          .replace(/\s/g, "")
      //     .split("Sale")[1] ||
      //   jQuery(this)
      //     .find(".grid-product__price .grid-product__price-value:first")
      //     .text()
      //     .trim()
      //     .replace(/\s/g, "")
      // ).slice(0, -2)

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}
/////////////////////////////////////////////////////
// div div img one src

if (
  jQuery(".product-list .product").length > 0 &&
  jQuery('.gallery-wrap img:first')
    .length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".product-list .product").each(function () {
    $title = jQuery(this).find(".product-infos").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:last").attr("data-src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .trim()
        .split(" ")[0]

    $link =
      "https://www.purplesee.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".info span:first")
      .text()
      .trim()
      .replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div div attr

if (
  jQuery('[class="grid"] .collection-grid-item-c').length > 0 &&
  // jQuery(".product-image-main img:first").length === 0
  jQuery('button[name="add"]').length === 0
) {
  $arr = []

  jQuery('[class="grid"]:last .collection-grid-item-c').each(function () {
    $title = jQuery(this).find("#product-title-link").text().trim()

    $img =
    "https:" +
    (
      // jQuery(this).find("a:first img:first").attr("src") ||
      // jQuery(this).find("a:first img:first").attr("data-src") ||
      jQuery(this).find("img.collection_hover-image:first").attr("src") ||
      jQuery(this).find("img.collection_hover-image:first").attr("data-src") ||
      ""
    )
      // .replace(/\s/g, "%20")
      .trim()
      .split(" ")[0]  
       
      // jQuery(this).find("a:first img:first").css("background-image").split('url("')[1].split('")' )[0]
  
     
    $link =  "https://fromourplace.ca" + jQuery(this).find("a:first").attr("href")
    

    $price =
      // "€" +
      (
        jQuery(this)
          .find(".c-greenish:first .compare-at").next()
          .text()
          .trim()
          .replace(/\s/g, "")
          
          ||
        jQuery(this)
          .find(".c-greenish:first span:first")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("-")[0] 
      
          )

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li only src

if (
  jQuery("ul.snize-search-results-content li").length > 0 &&
  jQuery('[class="product-slide swiper-slide swiper-slide-active"] img:first').length === 0
) {
  $arr = []

  jQuery("ul.snize-search-results-content li").each(function () {
    $title = jQuery(this).find(".snize-title").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(" ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://aldoshoes.co.uk" + jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
      // " " +
      jQuery(this).find(".snize-price:first").text().trim()
    // .split("USD")[0]
    // .trim()

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////