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

if (jQuery("#Collection .grid__item").length > 0 && [].length === 0) {
  $arr = []

  jQuery("#Collection .grid__item").each(function () {
    $title = jQuery(this).find(".product-card__title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find(".product-card__image-with-placeholder-wrapper")
        .next()
        .text()
        .trim()
        .split('src="')[1]
        .split(" alt")[0]
        .slice(0, -1)

    $link =
      "https://gaspwardrobe.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".price-item--regular").text().trim()
    // .split('Regular price')[1].split('No reviews')[0].trim()

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

if (jQuery(".products .product").length > 0 && [].length === 0) {
  $arr = []

  jQuery(".products .product").each(function () {
    $title = jQuery(this).find("a.shop_product_title").text().trim()

    $img = "https:" + jQuery(this).find(".aspect-product__images img:first").attr("src")

    $link = "https://www.justhype.co.uk/" + jQuery(this).find('a.aspect-product__wrapper').attr("href")

    $price =
      // "€" +
      jQuery(this).find(".price .money:last").text().trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}
