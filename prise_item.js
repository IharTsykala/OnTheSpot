ProductMeta__PriceList
'€' + jQuery('.prices span:last').text().trim().split(' ')[0].slice(1)
'€' + jQuery('.ProductMeta__PriceList span.money:last').text().trim().split(' ')[0].slice(1)

jQuery('#product_addtocart_form .price-box .price:last').text().trim().split(' ')[0]
jQuery('#product_addtocart_form .price-box .price:first').text().trim().split(' ')[0]

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

jQuery('.product-prices span:first').text().trim()
jQuery('.product-prices span.was').text().trim() || jQuery('.product-prices span:first').text().trim()

jQuery('div[itemprop="offers"] span[itemprop="price"]').text().trim()

jQuery('#product-title-actions span:first').text().trim()
product-title

jQuery('form.order-details strong[data-ui-name="ads.price.strong"]').text().trim()
jQuery('form.order-details del:first').text().trim() || jQuery('form.order-details strong[data-ui-name="ads.price.strong"]').text().trim()

jQuery('.priceTable span[itemprop="price"]').text().trim().replace(/\r|\n/g, ' ').split(' ')[0]
jQuery('.priceTable span:first').next().text().trim() || jQuery('.priceTable span[itemprop="price"]').text().trim().replace(/\r|\n/g, ' ').split(' ')[0]

jQuery('div div div:contains(₹):first').text()

Array.from(
  document.querySelectorAll("div div div div")
).filter(
  e => e.textContent.includes("₹")
)[15].innerText;

Array.from(
  document.querySelectorAll("div div div div")
).filter(
  e => e.textContent.includes("₹")
)[16].innerText;

jQuery('._3iZgFn ._3qQ9m1').text().trim()
jQuery('._3iZgFn ._1POkHg').text().trim() || jQuery('._3iZgFn ._3qQ9m1').text().trim()

_1vC4OE _3qQ9m1
_3auQ3N _1POkHg
_3iZgFn
_1vC4OE _3qQ9m1
_3iZgFn

document.querySelectorAll("._3iZgFn ._3qQ9m1")