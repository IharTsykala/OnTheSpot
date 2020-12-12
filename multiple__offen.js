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

if (
  jQuery("#CollectionSection .grid__item").length > 0 &&
  jQuery('.photo-zoom-link [role="presentation"]').length === 0
) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      // "https:" +
      (
        (
          jQuery(this)
            .find(".grid-product__secondary-image")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)
    // .next()
    // .text()
    // .trim()
    // .split('src="')[1]
    // .split(" alt")[0]
    // .slice(0, -1)

    $link = "https://beauut.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".grid-product__price .money:first")
      .text()
      .trim()
    // .split('Regular price')[1]
    // .split('No reviews')[0]
    // .trim()

    // if ($title && $img && $link && $price)
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

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find(".ProductItem__Image")
        .next()
        .next()
        .text()
        .trim()
        .split('src="')[2]
        .split(" ")[0]
        .slice(0, -1)

    $link =
      "https://benotable.co" +
      jQuery(this).find("a.ProductItem__ImageWrapper").attr("href")

    $price =
      "HKD" +
      " " +
      jQuery(this)
        .find(".ProductItem__PriceList:first .Price:first")
        .text()
        .trim()
        .split("$")[1]
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
  jQuery(".woocommerce-product-gallery__image img").length === 0
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
      "https://www.mcsquares.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price--main .money").text().trim()
    // .split('€')[1]

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
    // if ($title && $img && $link && $price)
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
  jQuery(".collection-listing--collection .collection-listing--product").length > 0 &&
  jQuery(".swiper-wrapper img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".collection-listing--collection .collection-listing--product").each(function () {
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

    $link =
      "https://tenshundredsthousands.com" + 
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product--price-wrapper .product--price:first").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div img one src

if (
  jQuery(".products .grid-item").length > 0 &&
  jQuery('.product-image-slider-wrapper  img:first').length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".products .grid-item").each(function () {
    $title = jQuery(this).find(".product-title:first").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("data-src") ||
        jQuery(this).find("img:first").attr("data-srcset") ||
         jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.wyattwylde.com/" + jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this)
        .find(".product-price:first .price")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
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
  jQuery("ul.productgrid--items li").length > 0 &&
  jQuery(".product-gallery--image-background img:first").length === 0
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
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://globewestoutlet.com.au" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".money:last").text().trim()
    // .split("$")[1]
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
  jQuery(".mainBand--product .productItem .prodViews img:first").length === 0
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

    $link = "https://shopalicia.co/" + jQuery(this).find("a:first").attr("href")

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
      // 'https://toasterkiwi.shop' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(
        '[data-hook="product-item-product-details"] [data-hook="product-item-price-to-pay"]'
      )
      .text()
      .trim()
    // .split('$')[1]
    // .trim()

    if ($title && $img && $link && $price)
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

    $link = "https://sowow.us" + jQuery(this).find("a:first").attr("href")

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
  jQuery(".collection-product .product-inner").length > 0 &&
  jQuery(
    '[class="product__photo slick-slide slick-current slick-active"] img:first'
  ).length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".collection-product .product-inner").each(function () {
    $title = jQuery(this).find(".title").text().trim()

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
      "https://nz.camillaandmarc.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      "NZD" +
      " " +
      jQuery(this)
        .find(".price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("NZ$")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
///////////////////////////////////////////////
/////////////////////////////////////////

// div div noscript grid-uniform

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  jQuery(".product-image-main img:first").length === 0
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
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://www.stephanspeaksshop.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      jQuery(this).find(".grid-product__price").text().trim().replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div noscript

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".product-single__photo--container-thumb img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find("p:first").text().trim()

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

    $link = "https://www.dressit.dk" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      jQuery(this)
        .find(".grid-product__price-wrap:first .on-sale")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("From")[1]

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
    $title = jQuery(this).find(".h6").text().trim()

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
      "https://workauthority.ca" + jQuery(this).find("a:first").attr("href")

    $price =
      // 'CAD' +
      jQuery(this)
        .find(".product-card__price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('CAD')[0]

    if ($title && $img && $link && $price)
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
            .find(".grid__image-ratio:first")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)

    $link =
      "https://www.ranavat.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$'+
      jQuery(this)
        .find(".grid-product__price:first .visually-hidden:last")
        .next()
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[1]

    if ($title && $img && $link && $price)
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

    //   if (jQuery(this).find("noscript").text().trim())
    //   $img =
    //     // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
    //     // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    //     "https:" +
    //     jQuery(this)
    //       .find("noscript")
    //       .text()
    //       .trim()
    //       .split('src="')[1]
    //       // .split("url('")[1]
    //       .split(" ")[0]
    //       .trim()
    //       .slice(0, -1)
    // // .replace('gif', 'jpg')
    // else $img = ""

    $link =
      "https://www.cosplaywe.com" + jQuery(this).find("a:first").attr("href")

    $price =
      "$" +
      (jQuery(this)
        .find(".price--highlight")
        .text()
        .trim()
        .replace(/\s/g, "")
        .split("$")[1] ||
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
  jQuery('[class="product-gallery__carousel-item is-selected "] img:first')
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

    $link = "https://villainoutwear.com" + jQuery(this).find("a:first").attr("href")

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
  jQuery("ul.products li").length > 0 &&
  jQuery(".woocommerce-product-gallery__image img:first").length === 0
) {
  $arr = []

  jQuery("ul.products li").each(function () {
    $title = jQuery(this).find("h2").text().trim()

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
      //  "https://shop.taregrocery.com" +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "$" + ' ' +
      jQuery(this).find(".woocommerce-Price-amount.amount:last").text().trim()
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
  jQuery(
    '#shopify-section-product [class="responsive-image__wrapper  "] img:first'
  ).length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".products .product").each(function () {
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
          // .split("url('")[1]
          .split(" ")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link = "https://suncain.com" + jQuery(this).find("a:first").attr("href")

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
      "https://acadiaworldtraders.net" +
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
  jQuery(".product-gallery__carousel-wrapper img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
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
      "https://www.eccotique.com" + 
      jQuery(this).find("a:first").attr("href")

    $price =
      // "$" +
     jQuery(this)
        .find(".product-block__title-price:first .price")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("$")[1] 

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}