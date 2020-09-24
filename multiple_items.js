list_view
if (
  jQuery(".ProductList .ProductItem").length > 0 &&
  jQuery("img.Image--fadeIn:first").length === 0
) {
  $arr = []

  jQuery(".ProductList .ProductItem").each(function () {
    $title = jQuery(this).find("h2.list-view__title span:first").text().trim()

    $img =
      "https://www.bogsfootwear.com//" +
      jQuery(this).find("img.list-view__image:first").attr("src")

    $link =
      "https://www.bogsfootwear.com//" +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".list-view__price span").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

ProductList
ProductItem

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
