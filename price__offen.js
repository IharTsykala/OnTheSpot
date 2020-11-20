jQuery("#price .money:last").text().trim()
jQuery("#price .money:first").text().trim() ||
  jQuery("#price .money:last").text().trim()

if (
  jQuery(".ml-product-detail .productPricing:last")
    .text()
    .trim()
    .split("Now:")[1]
) {
  "£" +
    jQuery(".ml-product-detail .productPricing:last")
      .text()
      .trim()
      .split("Now:")[0]
      .trim()
      .split("£")[1]
} else {
  jQuery(".ml-product-detail .productPricing:last").text().trim()
}

if (
  jQuery(".ml-product-detail .productPricing:last")
    .text()
    .trim()
    .split("Now:")[1]
) {
  jQuery(".ml-product-detail .productPricing:last")
    .text()
    .trim()
    .split("Now:")[1]
    .trim() ||
    "£" +
      jQuery(".ml-product-detail .productPricing:last")
        .text()
        .trim()
        .split("Now:")[0]
        .trim()
        .split("£")[1]
} else {
  jQuery(".ml-product-detail .productPricing:last").text().trim()
}

"RSD" +
  (jQuery(".price-box .special-price .price").text().trim().split(",")[0] ||
    jQuery(".price-box .regular-price .price").text().trim().split(",")[0])
"RSD" +
  (jQuery(".price-box .old-price .price").text().trim().split(",")[0] ||
    jQuery(".price-box .special-price .price").text().trim().split(",")[0] ||
    jQuery(".price-box .regular-price .price").text().trim().split(",")[0])

jQuery(".modal_price .current_price").text().trim()
jQuery(".modal_price .was_price").text().trim() ||
  jQuery(".modal_price .current_price").text().trim()

jQuery(".product-info-main .price-box:first .price:last").text().trim()
jQuery(".product-info-main .price-box:first .price:first").text().trim()

'INR' + jQuery(".ProductMeta__PriceList .money:first")
  .text()
  .trim()  
  .split("Rs.")[1]
'INR' +(jQuery(".ProductMeta__PriceList .money:last").text().trim().split("Rs.")[1] ||
  jQuery(".ProductMeta__PriceList .money:first")
    .text()
    .trim()    
    .split("Rs.")[1])

jQuery("#product-price .money:first").text().trim()
jQuery("#product-price .money:last").text().trim()

jQuery(".price .price-item--sale:first").text().trim()
jQuery(".price .price-item--sale").text().trim() ||
  jQuery(".product__price .price-item--regular:first").text().trim()

"$" +
  jQuery(".featured-products__price #ProductPrice").text().trim().split("$")[1]
"$" +
  jQuery(".featured-products__price #ComparePrice")
    .text()
    .trim()
    .split("$")[1] ||
  "$" +
    jQuery(".featured-products__price #ProductPrice")
      .text()
      .trim()
      .split("$")[1] ||
  "DKK" +
    jQuery('.product-price-wrap .productPrice:first [itemprop="price"]')
      .text()
      .trim()
"HUF" + jQuery(".price_withVat:first").text().trim().split("Ft")[0]
"HUF" + jQuery(".product-old-price:first").text().trim().split("Ft")[0] ||
  "HUF" + jQuery(".product-new-price:first").text().trim().split("Ft")[0]
// .split('$')[1]

jQuery(".product--price .price--main").text().trim()
jQuery(".product--price .price--compare-at").text().trim() ||
  jQuery(".product--price .price--main").text().trim()

"€" + jQuery(".price-wrapper .price:first").text().trim().split("€")[0]
"€" + jQuery(".old-price .price").text().trim().split("€")[0] ||
  "€" + jQuery(".price-wrapper .price:first").text().trim().split("€")[0]

"HUF" + jQuery(".price_withVat:first").text().trim().split("Ft")[0]
"HUF" + jQuery(".origPrice:first").next().text().trim().split("Ft")[0] ||
  "HUF" + jQuery(".price_withVat:first").text().trim().split("Ft")[0]

"PEN" + " " + jQuery(".sqs-money-native:first").text().trim().split("S/")[1]
"PEN" + " " + jQuery(".js-PrevPrice:first").text().trim().split("S/")[1] ||
  "PEN" + " " + jQuery(".bestPrice:first").text().trim().split("S/")[1]
