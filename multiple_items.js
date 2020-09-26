list_view
if (
  jQuery(".grid--view-items .product-item").length > 0 &&
  jQuery('ul#ProductThumbs').length === 0
) {
  $arr = []

  jQuery(".grid--view-items .product-item").each(function () {
    $title = jQuery(this).find(".grid-product__meta h4").text().trim()

    $img =
    "https:" +
      jQuery(this).find("img.product_img--first").attr("src")

    $link =
    'https://shrimps.com/' +
      jQuery(this).find("a.grid-view-item__image-container").attr("href")

    $price = jQuery(this).find(".product__price .money:first").text().trim()
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
