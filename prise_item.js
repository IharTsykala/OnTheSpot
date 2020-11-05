ProductMeta__PriceList
'USD' + ' ' + jQuery('.product-info__header_price.dj_skin_product_detail_price.money').text().trim().split('p.')[1]
'€' + jQuery('.ProductMeta__PriceList span.money:last').text().trim().split(' ')[0].slice(1)

jQuery(".product-prices__price--current-price:first").text().trim().split(' ')[0]
jQuery(".product-prices__price--original-price:first").text().trim().split('Reg.')[1] ||
 jQuery(".h2.product-single__price #productPrice").text().trim()

'$' +  jQuery('.product__pricing .product__price').attr('ge-data-converted-price')
.split('£')[1].split(' ')[0].trim()
'£' + jQuery('.product-shop .price:first').text().trim().replace(/\r|\n/g, ' ').split('£')[1].trim()||
jQuery('.product-shop .price:last').text().trim().split('£')[1].split(' ')[0].trim()

'€' + (jQuery('.h2.product-single__price #productPrice').text().trim().slice(0, -2) + '.' + (
 jQuery('.m-tp-base:first .c-tp-price-currentprice sup').text().trim() || '00'))

 if(jQuery('.m-tp-base:first .c-tp-price-output ').text()) {
  '€' + (jQuery('.m-tp-base:first .c-tp-price-output ').text().trim().slice(0, -2) + '.' + (
    jQuery('.m-tp-base:first .c-tp-price-output sup').text().trim() || '00'))
 }
 else {
  '€' + (jQuery('.m-tp-base:first .c-tp-price-currentprice ').text().trim().slice(0, -2) + '.' + (
    jQuery('.m-tp-base:first .c-tp-price-currentprice sup').text().trim() || '00'))
 }
 

'€' + (jQuery('.prices [itemprop="price"]').text().trim().split(' ')[0] ||  jQuery('.prices span:first').text().trim().split(' ')[0])

'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:last').text().trim() || 
  jQuery('.price-span:contains(~EUR) span[itemprop="price"]:last').text().trim())
'€' + (jQuery('.discount-row:contains(~EUR) span[itemprop="priceSpecification"]:first').text().trim() ||
 jQuery('.price-span span:contains(~EUR)').next().text().trim())

jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .lowest:first').text().trim().split(' ').length -1]
jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ')[jQuery('.pdp-style-overwrapper .price-card .strike-through:first').text().trim().split(' ').length -1]

jQuery('.price .money:last').text().trim()
jQuery('.mar-product-price .mar-price:first').text().trim() ||
 jQuery('.mar-product-price .discount_price').text().trim()

jQuery('div[itemprop="offers"] span[itemprop="price"]').text().trim()

'RON' + ' ' + jQuery('#pd-price').text().trim().split('RON')[0]
.replace(/\r|\n/g, ' ')
product-title

'€' + jQuery('span.product-price:contains(€):first').text().trim().replace(/\r|\n/g, ' ')
'€' + (jQuery('ul.product-prices:contains(€):first li:first span:first').text().trim().split(' ')[0] ||
jQuery('span.product-price:contains(€):first').text().trim().split(' ')[0])

jQuery('.product-page--pricing .money:first').text().trim().replace(/\r|\n/g, ' ').split(' ')[0]
jQuery('.product-page--pricing .product-page--pricing--variant-compare-at-price .money:first').text().trim() ||
jQuery('.product-page--pricing .money:first').text().trim()


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

 document.querySelector(".pricing__current_code").innerText.trim() + ' ' + document.querySelector(".pricing__current_price").innerText.trim()

 jQuery(".product-info [class='woocommerce-Price-amount amount']:last").text().trim()
jQuery(".product-info [class='woocommerce-Price-amount amount']:first").text().trim().split(' ')[1] || jQuery("#priceCopy").text().trim()

'CZK' + jQuery(".ProductMeta__PriceList .ProductMeta__Price:first").text().trim().split('Kč')[0].trim()
'CZK' + (jQuery(".ProductMeta__PriceList .ProductMeta__Price:last").text().trim() ||
jQuery(".product__price .product__current-price").text().trim())

'RON' + jQuery("#our_price_display").text().trim().split('RON')[0].trim().split(' ').join('')
'RON' + (jQuery("#our_price_display").text().trim().split('RON')[0].trim() ||
jQuery(".product__price .product__current-price").text().trim())

our_price_display


'USD' + ' ' + jQuery('.product-info__header_price.dj_skin_product_detail_price.money').text().trim().split('p.')[1]


jQuery('#define-profile .price').text().trim()
// .split(' ')[0].trim()
jQuery('#define-profile .old-price').text().trim() ||
 jQuery('#define-profile .price').text().trim()
//  .split(' ')[0].trim()

jQuery('.price-area .base_price').text().trim() ||
 jQuery('.price-area .discount_price').text().trim() ||
  'CAD' + jQuery('.detail_price span:first').text().trim().split('CAD')[2].trim()


  jQuery(".summary-inner .woocommerce-Price-amount bdi:first").text().trim()
  jQuery(".price-list .price:last").text().trim()
  jQuery(".product-single__price .product-price:first").text().trim()

  jQuery('h1:first').text().trim().split(' / ')[0]
  jQuery('h1:first').text().trim().split(' / ')[1]

  document.querySelectorAll('[data-hook="sr-formatted-secondary-price"]')