ProductMeta__PriceList
'€' + jQuery('.prices span:last').text().trim().split(' ')[0].slice(1)
'€' + jQuery('.ProductMeta__PriceList span.money:last').text().trim().split(' ')[0].slice(1)

jQuery(".price__regular span:first").text().trim().split(' ')[0]
jQuery("p[class='mt-8 text-center cols:text-left'] span:last").text().trim().split(' ')[0]

'$' + jQuery('.product-price .money:first').text().trim().split(' ')[1]
'$' + jQuery('.product-price .money:last').text().trim().split(' ')[1]|| jQuery('.product-price .sqs-money-native ').text().trim()

'€' + (jQuery('.m-tp-base:first .c-tp-price-currentprice ').text().trim().slice(0, -2) + '.' + (
 jQuery('.m-tp-base:first .c-tp-price-currentprice sup').text().trim() || '00'))

 if(jQuery('.m-tp-base:first .c-tp-price-output ').text()) {
  '€' + (jQuery('.m-tp-base:first .c-tp-price-output ').text().trim().slice(0, -2) + '.' + (
    jQuery('.m-tp-base:first .c-tp-price-output sup').text().trim() || '00'))
 }
 else {
  '€' + (jQuery('.m-tp-base:first .c-tp-price-currentprice ').text().trim().slice(0, -2) + '.' + (
    jQuery('.m-tp-base:first .c-tp-price-currentprice sup').text().trim() || '00'))
 }
 

'€' + (jQuery('.cd-old-price').text().trim().split(' ')[0] ||  jQuery('.cd-current-price:first').text().trim().split(' ')[0])

'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:last').text().trim() || 
  jQuery('.price-span:contains(~EUR) span[itemprop="price"]:last').text().trim())
'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:first').text().trim() ||
 jQuery('.price-span span:contains(~EUR)').next().text().trim())

jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ').length -1]
jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ').length -1]

jQuery('.product-prices span:first').text().split('-')[0].trim()
jQuery('.product-prices span.was').text().trim() || jQuery('.product-prices span:first').text().trim()

jQuery('div[itemprop="offers"] span[itemprop="price"]').text().trim()

'€' + jQuery('.current-price').text().trim().split(' ')[0]
product-title

'€' + jQuery('span.product-price:contains(€):first').text().trim().split(' ')[0]
'€' + (jQuery('ul.product-prices:contains(€):first li:first span:first').text().trim().split(' ')[0] ||
jQuery('span.product-price:contains(€):first').text().trim().split(' ')[0])

jQuery('.priceTable span[itemprop="price"]').text().trim().replace(/\r|\n/g, ' ').split(' ')[0]
jQuery('.priceTable span:first').next().text().trim() || jQuery('.priceTable span[itemprop="price"]').text().trim().replace(/\r|\n/g, ' ').split(' ')[0]


jQuery('.product-info-price .price-wrapper:first').attr('data-price-amount')
jQuery('.product-info-price .price-wrapper:last').attr('data-price-amount')|| jQuery('.product-info-price .price-wrapper:first').attr('data-price-amount')
.split(' ')[0]

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

jQuery('._3iZgFn ._3qQ9m1').text().trim() || jQuery('._36DZFj ._14X7rf').text().trim()
jQuery('._3iZgFn ._1POkHg').text().trim() || jQuery('._3iZgFn ._3qQ9m1').text().trim()
 || jQuery('._36DZFj .mrug3u').text().trim() || jQuery('._36DZFj ._14X7rf').text().trim()

_1vC4OE _3qQ9m1
_3auQ3N _1POkHg
_3iZgFn
_1vC4OE _3qQ9m1
_3iZgFn

document.querySelectorAll("._36DZFj .mrug3u")

'€' + ' ' + jQuery('.product-details__price span.price__value:first').text().trim().slice(0, -3).trim()
'SEK' + ' ' + jQuery('.price-big').text().trim().slice(0, -2)
.split(' ')[1]
.slice(0, -2)
'€' + (jQuery('#artikel-redna-cena span:last').text().trim().split(' ')[0] || jQuery('#artikel-cena').text().trim().split(' ')[0])


'ريال' + (jQuery('.product-info-price .price:first').text().trim())
'ريال' + (jQuery('.product-info-price .price:last').text().trim()||
 jQuery('.product-info-price .price:first').text().trim())

 'TL' + ' ' + jQuery('.product-list__price:first').text().trim().slice(0, -3)
 'SAR' + ' ' + (jQuery('.productinfo__price--sub del').text().trim().slice(0, -3) || jQuery('.productinfo__price').text().trim().slice(0, -3))
 productinfo__price

 document.querySelectorAll("p[class='mt-8 text-center cols:text-left'] span")[0]

 jQuery("#ProductPrice-product-template").text().trim()
jQuery("#ComparePrice-product-template").text().trim() || jQuery("#ProductPrice-product-template").text().trim()