ProductMeta__PriceList
'€' + jQuery('.prices span:last').text().trim().split(' ')[0].slice(1)
'€' + jQuery('.ProductMeta__PriceList span.money:last').text().trim().split(' ')[0].slice(1)

jQuery('.prices .money:last').text().trim()
jQuery('.prices .money:first').text().trim()

jQuery('.nonsticky-price__container--visible em.value__price--discounted ').text().trim() || jQuery('.nonsticky-price__container--visible em.value__price ').text().trim()
jQuery('.nonsticky-price__container--visible del.value__price--discount').text().trim()


jQuery('.product-price__price .money').text().trim()
jQuery('.product-price__sale-label .money').text().trim()

'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:last').text().trim() || 
  jQuery('.price-span:contains(~EUR) span[itemprop="price"]:last').text().trim())
'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:first').text().trim() ||
 jQuery('.price-span span:contains(~EUR)').next().text().trim())

jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ').length -1]
jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ').length -1]

jQuery('#price .product-price:first').text().trim()
jQuery('#price .on-sale .was').text().trim()