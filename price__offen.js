jQuery("#price .money:last").text().trim()
jQuery("#price .money:first").text().trim() ||
jQuery("#price .money:last").text().trim()

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

'RSD' +
(jQuery('.price-box .special-price .price').text().trim().split(',')[0] ||
jQuery('.price-box .regular-price .price').text().trim().split(',')[0])
'RSD' +
(jQuery('.price-box .old-price .price').text().trim().split(',')[0] ||
jQuery('.price-box .special-price .price').text().trim().split(',')[0] || 
jQuery('.price-box .regular-price .price').text().trim().split(',')[0])


jQuery('.modal_price .current_price').text().trim()
jQuery('.modal_price .was_price').text().trim() || 
jQuery('.modal_price .current_price').text().trim()

jQuery('.product-info-main .price-box:first .price:last').text().trim()
jQuery('.product-info-main .price-box:first .price:first').text().trim()

jQuery('.ProductMeta__PriceList .Price:first').text().trim()
jQuery('.ProductMeta__PriceList .Price:last').text().trim()

jQuery('#product-price .money:first').text().trim()
jQuery('#product-price .money:last').text().trim()

jQuery('#ProductPrice-product-template:first').text().trim()
jQuery('.size-h3:first').text().trim() || jQuery('.modal_price').text().trim()

'$'+jQuery(".featured-products__price #ProductPrice").text().trim().split('$')[1]
'$'+jQuery(".featured-products__price #ComparePrice").text().trim().split('$')[1]||
'$'+jQuery(".featured-products__price #ProductPrice").text().trim().split('$')[1]
 ||
jQuery(".product__price-sku .product__price").text().trim()

jQuery("[data-product-price]").text().trim().split('$')[1]
jQuery("[data-compare-price]").text().trim().split('$')[1] ||
jQuery("[data-product-price]").text().trim().split('$')[1]