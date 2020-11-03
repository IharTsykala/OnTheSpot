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

jQuery('.ProdInfo .price:last').text().trim()
jQuery('.ProdInfo .price:first').text().trim() || jQuery('.ProdInfo .price:last').text().trim()
