jQuery(".product-single__price-product-template .money:last").text().trim()
jQuery(".product-single__price-product-template .money:first").text().trim() ||
jQuery(".product-single__price-product-template .money:last").text().trim()

if(jQuery(".ml-product-detail .productPricing:last").text().trim().split('Now:')[1]) {
  '£' + jQuery(".ml-product-detail .productPricing:last").text().trim().split('Now:')[0].trim().split('£')[1]
}
else {
  jQuery(".ml-product-detail .productPricing:last").text().trim()
}

if(jQuery(".ml-product-detail .productPricing:last").text().trim().split('Now:')[1]) {
  jQuery(".ml-product-detail .productPricing:last").text().trim().split('Now:')[1].trim() ||
'£' + jQuery(".ml-product-detail .productPricing:last").text().trim().split('Now:')[0].trim().split('£')[1]
}
else {
  jQuery(".ml-product-detail .productPricing:last").text().trim()
}


jQuery('[for="variantChoice1"] .price .money:last').text().trim()
jQuery('[for="variantChoice1"] .price .money:last').text().trim()