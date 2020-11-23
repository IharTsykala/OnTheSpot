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
      "https://freakins.com/" +
      jQuery(this).find("a.ProductItem__ImageWrapper").attr("href")

    $price = jQuery(this)
      .find(".ProductItem__PriceList:first .Price:first")
      .text()
      .trim()
      .split(" Rs.")[0]
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
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".product-single__photo-wrapper img:first").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()
    // .split(' / ')[0];

    if (jQuery(this).find("noscript").text().trim())
      $img =
        // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
        // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
        "https:" +
        jQuery(this)
          .find("noscript")
          // .prev()
          // .next()
          .text()
          .trim()
          .split('src="')[1]
          .split(" alt")[0]
          .trim()
          .slice(0, -1)
    // .replace('gif', 'jpg')
    else $img = ""

    $link =
      "https://vivolicious.co.za" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".grid-product__price:first")
      .text()
      .trim()
      // jQuery(this).find(".prod-price:first").text().trim()
      // .split("Prix régulier")[1]
      .trim()
    // ||
    // jQuery(this).find(".product-card__price").text().trim()
    // .split('From')[1]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery("#CollectionSection .grid__item").length > 0 && [].length === 0) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("noscript")
        // .next()
        .text()
        .trim()
        .split('src="')[1]
        .split(" alt")[0]
        .slice(0, -1)

    $link = "https://beauut.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".grid-product__price")
      .text()
      .trim()
      .split("Regular price")[1]
    // jQuery(this)
    // .find(".grid-link__meta")
    // .text()
    // .trim()
    // .split("Regular price")[1]
    // .split('No reviews')[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

// div div img one src

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".details-gallery__image-wrapper-inner img.details-gallery__picture:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-src") ||
        //  jQuery(this).find("img:first").attr("data-second-image") ||
        jQuery(this).find("img:first").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://vivolicious.co.za" + jQuery(this).find("a:first").attr("href")

    $price =     
      jQuery(this)
        .find(".product-price__price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("CFA")[0]
    // .split("Sale price")[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// div div background image

if (
  jQuery(".grid--uniform .grid__item").length > 0 &&
  jQuery(".product-gallery__size-limiter img:first").length === 0
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
            .find(".grid-product__secondary-image")
            .css("background-image") || ""
        ).split("url(")[1] || ""
      ).slice(1, -2)

    $link = "https://earthpak.com" + jQuery(this).find("a:first").attr("href")

    $price =      
      jQuery(this)
        .find(".grid-product__price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split("Sale price")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

// ul li only src

if (
  jQuery("ul#products-list li").length > 0 &&
  jQuery(".images-container  a:first").length === 0
) {
  $arr = []

  jQuery("ul#products-list li").each(function () {
    $title = jQuery(this).find(".product-name").text().trim()

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
      // 'https://www.kukyflor.com' +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "PEN" +
      jQuery(this)
        .find(".special-price .price:first")
        .text()
        .trim()
        .split(",–")[0]
    // ||  jQuery(this).find(".gtm-item-price").text().trim()
    // .split('US')[1]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// ul li noscript

if (
  jQuery("ul.product-summary-list li").length > 0 &&
  jQuery('.slick-active [role="presentation"]:first').length === 0
) {
  $arr = []

  jQuery("ul.product-summary-list li").each(function () {
    $title = jQuery(this).find(".name").text().trim()

    $img =
      // "https:" +
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
        .slice(0, -1)

    $link =
      "https://www.thestorygift.co.uk/" +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this)
      .find(".price:first")
      // .parent()
      .text()
      .trim()
    // .split('S/.')[1]
    // .split('ex')[0]
    // ||  jQuery(this).find(".gtm-item-price").text().trim()
    // .split('US')[1]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

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
  jQuery("ul.products-grid li").length > 0 &&
  jQuery(".zoomImg:first").length === 0
) {
  $arr = []

  jQuery("ul.products-grid li").each(function () {
    $title = jQuery(this).find(".product-name").text().trim()

    $img =
      // 'https://www.lampegiganten.dk' +
      //  (jQuery(this).find(".panel-body a:first img").attr("data-src") ||
      jQuery(this).find("img:first").attr("src")
    //  jQuery(this).find("a:first img:first").attr("data-src") ||
    //  jQuery(this).find("a:first source:first").attr("data-srcset") ||
    //  jQuery(this).find("a:first source:first").attr("srcset")

    $link =
      //  'https://www.lampegiganten.dk' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price-box .price:last").text().trim()

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

////////////////////////////////////////////////////////////
