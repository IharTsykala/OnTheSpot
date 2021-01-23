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

jQuery('.ProductItem-details .product-price').text().trim()
jQuery('.ProductItem-details .mar-price:first').text().trim() ||
 jQuery('.ProductItem-details .discount_price').text().trim()

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


'ريال' + (jQuery('.ProductPrice1 .price:first').text().trim())
'ريال' + (jQuery('.ProductPrice1 .price:last').text().trim()||
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


jQuery('.summary .price bdi:last').text().trim()
// .split(' ')[0].trim()
jQuery('.summary .price bdi:first').text().trim() ||
 jQuery('.summary .price bdi:last').text().trim()
//  .split(' ')[0].trim()

jQuery('.price-area .base_price').text().trim() ||
 jQuery('.price-area .discount_price').text().trim() ||
  'CAD' + jQuery('.detail_price span:first').text().trim().split('CAD')[2].trim()


  jQuery(".woocommerce-variation-price .woocommerce-Price-amount bdi:first").text().trim()
  '$'+jQuery(".price-list .price:last").text().trim().split('$')[1]
  jQuery(".product-single__price .product-price:first").text().trim()

  jQuery('h1:first').text().trim().split(' / ')[0]
  jQuery('h1:first').text().trim().split(' / ')[1]

  document.querySelectorAll('[data-hook="sr-formatted-secondary-price"]')


 
jQuery('.price-box .special-price .price').text().trim().split(',00')[0] + ' ' +
jQuery('.price-box .special-price .price').text().trim().split(',00')[1]
||
jQuery('.price-box .regular-price .price').text().trim().split(',00')[0] + ' ' +
jQuery('.price-box .regular-price .price').text().trim().split(',00 ')[1]

jQuery('.price-box .fancy-old-price .price').text().trim().split(',00')[0] + ' ' +
jQuery('.price-box .fancy-old-price .price').text().trim().split(',00')[1]
||
jQuery('.price-box .special-price .price').text().trim().split(',00')[0] + ' ' +
jQuery('.price-box .special-price .price').text().trim().split(',00')[1]
|| 
jQuery('.price-box .regular-price .price').text().trim().split(',00')[0] + ' ' +
jQuery('.price-box .special-price .price').text().trim().split(',00')[1]


'RSD' +
(jQuery('.price-box .special-price .price').text().trim().split(',')[0] ||
jQuery('.price-box .regular-price .price').text().trim().split(',')[0])

'RSD' +
(jQuery('.price-box .fancy-old-price .price').text().trim().split(',')[0] ||
jQuery('.price-box .special-price .price').text().trim().split(',')[0] || 
jQuery('.price-box .regular-price .price').text().trim().split(',')[0])


jQuery('[data-product-price]').text().trim().split('$')[1]
jQuery('[data-hook="product-prices-wrapper"] [data-hook="formatted-primary-price"]').text().trim().split('$')[1]

jQuery('[data-hook="formatted-primary-price"]').text().trim().split('$')[1]
"SEK"+" "+jQuery('[data-hook="product-prices-wrapper"] [data-hook="formatted-primary-price"]').text().trim().split('kr')[0]

'SEK' + jQuery('.product__variant-availability:not(.hide)').text().trim().split('|')[1]

'$' + jQuery('.js-price-wrapper .product__price--current:first').text().trim()

'PEN' + ' ' + jQuery('#our_price_display').text().trim().split('S/.')[1]

'$' + ' ' + jQuery('.woocommerce-Price-currencySymbol:first').parent().text().trim().split('$')[1].split('.')[0]

"XOF" + ' ' + (jQuery('.special-price .price:first').text().trim().replace(/\s/g,'').split(",–")[0])
// .split("CFA")[2].split(" ")[0]
"XOF" + ' ' + (jQuery('.regular-price:first').text().trim().replace(/\s/g,'').split("CFA")[0]) 
|| "XOF" + ' ' + (jQuery('.product-price:first').text().trim().replace(/\s/g,'').split("CFA")[0])

'PKR' + jQuery('#price').text().trim().split('US')[1]

'ZAR' + jQuery('.product-single__price.on-sale:first').text().trim().replace(/\s/g,'').split('R')[1]
'ZAR' +jQuery('.product-single__price--wrapper:first').text().trim().replace(/\s/g,'').split('R')[1] ||
'ZAR' +jQuery('.product-single__price.on-sale:first').text().trim().replace(/\s/g,'').split('R')[1]
ZAR

jQuery('.ProductItem__PriceList:first .Price:first').text().trim().replace(/\s/g,'')
jQuery('.ProductItem__PriceList:first .Price:last').text().trim().replace(/\s/g,'') ||
jQuery('.ProductItem__PriceList:first .Price:first').text().trim().replace(/\s/g,'')


jQuery('.product-shop .price ins:first').text().trim() || jQuery('.product-shop .special-price .price:first').text().trim()
 || jQuery('.product-shop .regular-price:first').text().trim()
jQuery('.product-shop .price del:first').text().trim() || jQuery('.product-shop .old-price .price:first').text().trim()
 || jQuery('.product-shop .price ins:first').text().trim() || jQuery('.product-shop .regular-price:first').text().trim()


 jQuery('.special-price .price:first').text().trim().replace(/\s/g,'').split(",–")[0]
  || jQuery('.price-box .price:first').text().trim().replace(/\s/g,'').split(",–")[0]

  jQuery('[id="price-field"]:first').text().trim().replace(/\s/g,'').split(",–")[0] 
  || jQuery('.special-price .price:first').text().trim().replace(/\s/g,'').split(",–")[0] 
    || jQuery('.price-box .price:first').text().trim().replace(/\s/g,'').split(",–")[0]

  
    '$' +  jQuery('.product-price:first').text().trim().replace(/\s/g,'').split('$')[1]
    '$' + jQuery('.ProductItem__PriceList:first .Price:first').text().trim().replace(/\s/g,'').split('$')[1] ||
    '$' + jQuery('.ProductItem__PriceList:first .Price:first').text().trim().replace(/\s/g,'').split('$')[1]
   

    jQuery('[id="ProductPrice-product-template"]:first').text().trim()
    if(jQuery('[id="ComparePrice-product-template"] .money:first').text().trim() === '€0') 
    jQuery('[id="ProductPrice-product-template"]:first').text().trim()
    else jQuery('[id="ComparePrice-product-template"] .money:first').text().trim()
  
    jQuery(".price--main:first").text().trim()
jQuery(".price--compare-at:first").text().trim() ||
  jQuery(".price--main:first").text().trim()

  jQuery(".ProductMeta__Price.Price--highlight:first").text().trim() 
  || jQuery(".ProductMeta__Price:first").text().trim()
  jQuery(".ProductMeta__Price.Price--compareAt:first").text().trim() ||
    jQuery(".ProductMeta__Price.Price--highlight:first").text().trim()
    || jQuery(".ProductMeta__Price:first").text().trim()

   'EGP' + ' ' + (jQuery(".ProductMeta__Price.Price--highlight:first").text().trim() 
    || jQuery(".ProductMeta__Price:first").text().trim()).split('LE')[1]
    'EGP' + ' ' +(jQuery(".ProductMeta__Price.Price--compareAt:first").text().trim() ||
      jQuery(".ProductMeta__Price.Price--highlight:first").text().trim()
      || jQuery(".ProductMeta__Price:first").text().trim()).split('LE')[1]
    

    "£" + ' ' + jQuery(".product-info .oe_currency_value:last").text().trim()
    "£" + ' ' +jQuery(".product-info .oe_currency_value:first").text().trim() ||
      jQuery(".new-price .price-update:first").text().trim()
    
      'DKK' + ' ' + (jQuery(".special-price .price:first").text().trim().split("kr")[0].trim() 
      ||  jQuery(".regular-price:first").text().trim().split("kr")[0].trim())
      'DKK' + ' ' + (jQuery(".old-price .price:first").text().trim().split("kr")[0].trim() 
       ||jQuery(".special-price price:first").text().trim().split("kr")[0].trim() 
      ||  jQuery(".regular-price:first").text().trim().split("kr")[0].trim())


      jQuery('[id="ProductPrice"]:first').text().trim()
      jQuery(".was:first").text().trim() ||
        jQuery(".product-price:first").text().trim()

        jQuery(".price--compare-at:first .money").text().trim() ||
  jQuery(".price--main:first .money").text().trim()


  jQuery('.current_price:first').text().trim().replace(/\s/g,'') ||
  jQuery('.snize-price:first').text().trim().replace(/\s/g,'')


  jQuery('.price-area:first .product-price').text().trim().replace(/\s/g,'') 

  jQuery('.was-price:first').text().trim().replace(/\s/g,'') ||
  jQuery('.price-area:first .product-price').text().trim().replace(/\s/g,'') 

  jQuery('.was-price:first').text().trim().replace(/\s/g,'') ||
jQuery('.current_price:first').text().trim().replace(/\s/g,'') ||
jQuery('.snize-price:first').text().trim().replace(/\s/g,'')

jQuery('.product-price:first').text().trim().replace(/\s/g,'') ||
  jQuery('.snize-price:first').text().trim().replace(/\s/g,'')

  jQuery('[id="productPrice-product-template"] .visually-hidden:first').text().trim().replace(/\s/g,'') ||
jQuery('.current_price:first').text().trim().replace(/\s/g,'')

'£' + ' ' + jQuery('i:contains(£)').text().trim().replace(/\s/g,'').split('£')[1].trim()

jQuery('.price__sale .price-item--sale:first').text().trim() 
|| jQuery('.price__regular .price-item--regular:first').text().trim() 
jQuery('.price__sale .price-item--regular:first').text().trim() 
|| jQuery('.price__sale .price-item--sale:first').text().trim() 
||  jQuery('.price__regular .price-item--regular:first').text().trim()

jQuery('.product__price .price__sale .price-item--sale:first').text().trim() 
|| jQuery('.product__price .price__regular .price-item--regular:first').text().trim() 
jQuery('.product__price .price__sale .price-item--regular:first').text().trim() 
|| jQuery('.product__price .price__sale .price-item--sale:first').text().trim() 
||  jQuery('.product__price .price__regular .price-item--regular:first').text().trim()


jQuery('.price__sale .price-item--sale:first').text().trim() 
|| jQuery('.price__regular .price-item--regular:first').text().trim() 

jQuery('.price__regular .price-item--regular:first').text().trim() 
|| jQuery('.price__sale .price-item--sale:first').text().trim() 




jQuery('[id="productPrice-product-template"] span:first').text().trim().slice(0,-2)
jQuery('[id="productPrice-product-template"] small').text().trim().slice(0,-2) ||
  jQuery('[id="productPrice-product-template"] span').text().trim().slice(0,-2)

  jQuery('[id="productPrice-product-template"] span:first').text().trim().slice(0,-2)
  + '.' + jQuery('[id="productPrice-product-template"] span:first').text().trim().slice(-2)
jQuery('[id="productPrice-product-template"] small').text().trim().slice(0,-2)
+ '.' + jQuery('[id="productPrice-product-template"] small').text().trim().slice(-2)
||
  jQuery('[id="productPrice-product-template"] span').text().trim().slice(0,-2)
  + '.' + jQuery('[id="productPrice-product-template"] span:first').text().trim().slice(-2)

  jQuery('[id="ProductPrice-product"]:first').text().trim().slice(0,-2)

  jQuery('[class="details-product-price__value ec-price-item notranslate"]').text().trim()
      jQuery(".product-price__price.product-price__sale:first").text().trim() ||
        jQuery(".product-price__price:first").text().trim()

        "$"+(jQuery('.product-form__info-content .price--highlight:first').text().trim().split("$")[1]
        || jQuery('.product-form__info-content .price:first').text().trim().split("$")[1] )
        "$"+(jQuery(".product-form__info-content .price--compare:first").text().trim().split("$")[1]  ||
          jQuery(".product-form__info-content .price--highlight:first").text().trim().split("$")[1]  
          || jQuery('.product-form__info-content .price:first').text().trim().split("$")[1] )

          "NZD" + ' ' + jQuery('.price:first').text().trim().split("NZ$")[1]

          'HKD' + ' ' +(
          jQuery(".ProductMeta__Price.Price--highlight:first").text().trim() .split("$")[1]
  || jQuery(".ProductMeta__Price:first").text().trim().split("$")[1])
  'HKD' + ' ' +(
  jQuery(".ProductMeta__Price.Price--compareAt:first").text().trim().split("$")[1] ||
    jQuery(".ProductMeta__Price.Price--highlight:first").text().trim().split("$")[1]
    || jQuery(".ProductMeta__Price:first").text().trim().split("$")[1])


    '$'+(jQuery('[id="productPrice"] .visually-hidden:first').next().text().trim().replace(/\s/g,'').split('$')[1]
    ||  jQuery('[id="productPrice"] .visually-hidden:first ').text().trim().replace(/\s/g,'').split('$')[1])
    '$'+jQuery('[id="productPrice"] .visually-hidden:first ').text().trim().replace(/\s/g,'').split('$')[1]

    jQuery('.product-price .product-sale-price:first').text().trim() 
|| jQuery('.product-price .product-normal-price:first').text().trim() ||
jQuery('.product-price .product-sale-price:first').text().trim()

if(jQuery('.product-price .product-compare-price:first').text().trim() === jQuery('.product-sale-price:first').text().trim() 
|| (!+jQuery('.product-price .product-compare-price:first').text().trim().split('$')[1])) ''
else {
  jQuery('.product-price .product-compare-price:first').text().trim() 
|| jQuery('.product-sale-price:first').text().trim() 
||  jQuery('.product-normal-price:first').text().trim()
}
 jQuery('.product-detail__title-area .product-price__reduced:first').text().trim().replace(/\s/g,'') ||
jQuery('.product-detail__title-area .product-price:first').text().trim().replace(/\s/g,'') 

 jQuery('[id="productPrice-product-template"] .visually-hidden:first').text().trim().replace(/\s/g,'')
 || jQuery('.product-detail__title-area .product-price:first').text().trim().replace(/\s/g,'') 

 jQuery(".price--highlight:first").text().trim() ||
 jQuery(".price:first").text().trim()
jQuery(".price--compare:first").text().trim() ||  
  jQuery(".price--highlight:first").text().trim() ||
 jQuery(".price:first").text().trim()

 jQuery('.price .pay-price:first').text().trim().replace(/\s/g,'') 
 jQuery('.price .orig-price:first').text().trim().replace(/\s/g,'') ||
 jQuery('.price .pay-price:first').text().trim().replace(/\s/g,'')


 jQuery('[id="productPrice-product-template"] [aria-hidden="true"]:first').text().trim().replace(/\s/g,'').slice(0, -2)
 jQuery('[id="productPrice-product-template"] [aria-hidden="true"]:last').text().trim().replace(/\s/g,'').slice(0, -2)

 'CAD'+jQuery('.product-single__prices [id="ProductPrice"]:first').text().trim().replace(/\s/g,'').split('CAD')[0]

 'CHF' + ' ' + jQuery('.product__price:first').text().trim().replace(/\s/g,'').split('SFr.')[1]
 

 ||jQuery('.product__price:first').text().trim().replace(/\s/g,'')

 jQuery('[id="productPrice"]:first').text().trim().replace(/\s/g,'').slice(0,-2) 
 jQuery('[id="productPrice"]:last strike').text().trim().replace(/\s/g,'') ||
 jQuery('[id="productPrice"]:first').text().trim().replace(/\s/g,'').slice(0,-2) 

 jQuery('.price:first .woocommerce-Price-currencySymbol:first').parent().text().trim()

 jQuery('.price:first .woocommerce-Price-currencySymbol:last').parent().text().trim()
 || jQuery('.price:first .woocommerce-Price-currencySymbol:first').parent().text().trim()
  

 jQuery('.product-price:first [data-product-price]').text().trim().replace(/\s/g,'') 
 jQuery('.product-price:first [data-compare-price]').text().trim().replace(/\s/g,'') ||
 jQuery('.product-price:first [data-product-price]').text().trim().replace(/\s/g,'')


 jQuery('.product_single_price:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.product_single_price:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.product_single_price:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('.price-wrapper:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.price-wrapper:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.price-wrapper:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('.price-container:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.price-container:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.price-container:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('[data-price-container]:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('[data-price-container]:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('[data-price-container]:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('.product_prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.product_prices:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.product_prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.product-single__prices:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

//  jQuery('.product-single__price--wrapper:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
//  jQuery('.product-single__price--wrapper:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
//  jQuery('.product-single__price--wrapper:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('[id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('[id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('[id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery('.price:first[id="price-preview"]').text().trim().replace(/\s/g,'')

 jQuery('[class="product__price on-sale"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 
 jQuery('[class="product__price product__price--compare"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 

 jQuery('[class="product__price on-sale skiptranslate notranslate"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 
 jQuery('[class="product__price product__price--compare skiptranslate notranslate"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 

 jQuery('[data-price-wrapper]:first [data-product-price]').text().trim().replace(/\s/g,'')

 jQuery('.price-preview-container:first .price').text().trim().replace(/\s/g,'')

 jQuery('.product-price:first .product-price__final').text().trim().replace(/\s/g,'') 
 jQuery('.product-price:first .product-price__final').text().trim().replace(/\s/g,'') ||
 jQuery('.product-price:first .product-price__final').text().trim().replace(/\s/g,'')

 jQuery('[class="product-price-special product-page-price-special"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product-price product-page-price"').text().trim().replace(/\s/g,'') 
 jQuery('[class="product-price-original product-page-price-original"]:first').text().trim().replace(/\s/g,'') ||
 jQuery('[class="product-price product-page-price"]:first').text().trim().replace(/\s/g,'') 

 jQuery('.pricearea:first .price').text().trim().replace(/\s/g,'')

 jQuery('.product-price:first .price').text().trim().replace(/\s/g,'') 

 jQuery('.modal_price:first .current_price').text().trim().replace(/\s/g,'') 

 jQuery('.PD-priceInfo:first .PD-price').text().trim().replace(/\s/g,'') 

 '$'+jQuery('.product-price:first .sqs-money-native').text().trim().replace(/\s/g,'') 

 jQuery('.product-info__header_price-wrapper:first .product-info__header_price').text().trim().replace(/\s/g,'') 
 jQuery('.product-info__header_price-wrapper:first .product-info__header_compare-at-price').text().trim().replace(/\s/g,'') 
 || jQuery('.product-info__header_price-wrapper:first .product-info__header_price').text().trim().replace(/\s/g,'') 

 jQuery(".product-price:first .money").text().trim()

 jQuery(".product-price:first .current-price").text().trim()

 jQuery(".prices .price").text().trim()
 

    jQuery('[id="ProductPrice-product-template"]:first').text().trim()

    jQuery('[id="ComparePrice-product-template"]').text().trim()
    || jQuery('[id="ProductPrice-product-template"]:first').text().trim()
  

    jQuery('.product-page--price-wrapper:first .product-page--price').text().trim()

    jQuery('.product-page--price-wrapper:first .product-page--compare-price').text().trim()
    || jQuery('.product-page--price-wrapper:first .product-page--price').text().trim()


    jQuery('.modal_price .current_price ').text().trim().replace(/\s/g,'') 

    jQuery('.modal_price .was_price').text().trim().replace(/\s/g,'') 
    || jQuery('.modal_price .current_price').text().trim().replace(/\s/g,'') 

    jQuery('.product__information:first .current_price ').text().trim().replace(/\s/g,'') 

    jQuery('.product__information:first .was-price').text().trim().replace(/\s/g,'') 
    || jQuery('.product__information:first .current_price').text().trim().replace(/\s/g,'') 

    jQuery('.product__price:first [data-product-price]').text().trim()

    jQuery('.product__price:first [data-compare-price]').text().trim()
    ||  jQuery('.product__price:first [data-product-price]').text().trim()

    jQuery('.one-product-info__price:first .money').text().trim()

    jQuery('[id="productPrice-product-template"]:first .money:first').text().trim().replace(/\s/g,'')

    jQuery('.prices:first .actual-price').text().trim()

    jQuery('.prices:first .compare-price .money').text().trim()
    ||  jQuery('.prices:first .actual-price').text().trim()

    '€' + ' ' + jQuery('.ps-cta__price:first .ps-cta__price-new').text().trim()

    '€' + ' ' + (jQuery('.ps-cta__price:first .ps-cta__price-old').text().trim()
    ||  jQuery('.ps-cta__price:first .ps-cta__price-new').text().trim())

    jQuery('.product_price:first .money').text().trim()

    jQuery('.pdp-hero__price-container:first').text().trim().split('From')[1] 
    || jQuery('.pdp-hero__price-container:first').text().trim().split('From') 

    jQuery(".ProductMeta__PriceList .ProductMeta__Price:first").text().trim()

    jQuery(".ProductMeta__PriceList .ProductMeta__Price:last").text().trim()
    ||   jQuery(".ProductMeta__PriceList .ProductMeta__Price:first").text().trim()

    jQuery(".price-reviews:first .product-price").text().trim()

    jQuery('.price-reviews:first .compare-price').text().trim()
    || jQuery('.price-reviews:first .product-price').text().trim()

    jQuery(".price_pro:first .price_wrapper").text().trim()

    jQuery('[id="product-price"] .product-price').text().trim()

    jQuery('[id="product-price"] .was').text().trim()
    ||jQuery('[id="product-price"] .product-price').text().trim()

    jQuery('[data-price-wrapper] [data-product-price]').text().trim()

    jQuery('.product-single__price-product-template:first [id="ProductPrice-product-template"]').text().trim()

    jQuery('.product-single__price-product-template:first [id="ComparePrice-product-template"] .money').text().trim()
    ||jQuery('.product-single__price-product-template:first [id="ProductPrice-product-template"]').text().trim()

    jQuery(".prices:first .on-sale").text().trim()
    || jQuery(".prices:first .price").text().trim()

    jQuery('.prices:first .compare-price').text().trim()
    || jQuery('.prices:first .price').text().trim()

    jQuery('[data-product-type="price"]:first').text().trim()

    jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.product-single__prices:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery(".product-price-display:first .regular-price").text().trim()

 jQuery('.price:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
 jQuery('.price:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
 jQuery('.price:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

 jQuery("#ProductPrice:first .money").text().trim()
 jQuery('.product--option:first [id="ProductPrice"] .money').text().trim().replace(/\s/g,'') 
 jQuery('.product--option:first [id="ComparePrice"] .money').text().trim().replace(/\s/g,'') ||
 jQuery('.product--option:first [id="ProductPrice"] .money').text().trim().replace(/\s/g,'')

 "NZD" + ' ' + jQuery('.price-product .price__original:first').text().trim().split("NZ$")[1] 
 "NZD" + ' ' + jQuery('.price-product .price__discount:first').text().trim().split("NZ$")[1] ||
 "NZD" + ' ' + jQuery('.price-product .price__original:first').text().trim().split("NZ$")[1]

 jQuery('.product-single__meta-list:first [id="ProductPrice-product-template"] .money').text().trim().replace(/\s/g,'') 
 jQuery('.product-single__meta-list:first [id="ComparePrice-product-template"] .money').text().trim().replace(/\s/g,'') ||
 jQuery('.product-single__meta-list:first [id="ProductPrice-product-template"] .money').text().trim().replace(/\s/g,'')

 jQuery(".price ins:first").text().trim()
 ||  jQuery(".product-image-summary:first .price .woocommerce-Price-amount:last").text().trim()

 jQuery(".price del:first").text().trim()
 ||  jQuery(".price:first .woocommerce-Price-amount").text().trim()

 jQuery(".product-single__meta:first .product__price.sale-price:first").text().trim()
 ||  jQuery(".product-single__meta:first .product__price:first").text().trim()

 jQuery(".product-single__meta:first .product__price--compare:first").text().trim()
 ||  jQuery(".product-single__meta:first .product__price.product__price:first").text().trim()

 jQuery(".product-price-display:first .regular-price").text().trim()

 jQuery('.product-price:first .price .money:first').text().trim().replace(/\s/g,'')

 jQuery('.product-price:first .price .product-price-compare .money:first').text().trim().replace(/\s/g,'')
 || jQuery('.product-price:first .price .money:first').text().trim().replace(/\s/g,'')

 jQuery('.PD-priceInfo:first .PD-price').text().trim().replace(/\s/g,'').slice(0,-2)

 jQuery(".summary .price ins:first").text().trim()
 ||  jQuery(".summary .price:first .woocommerce-Price-amount").text().trim()

 jQuery(".summary .price del:first").text().trim()
 ||  jQuery(".summary .price:first .woocommerce-Price-amount").text().trim()

 jQuery('[id="productPrice"]:first').text().trim().replace(/\s/g,'').slice(0,-2)+'.'+jQuery('[id="productPrice"]:first sup').text().trim().replace(/\s/g,'')

 jQuery('[id="productPrice"]:last strike').text().trim().replace(/\s/g,'') 
 || jQuery('[id="productPrice"]:first').text().trim().replace(/\s/g,'').slice(0,-2)+'.'+jQuery('[id="productPrice"]:first sup').text().trim().replace(/\s/g,'')

 jQuery('.product_header:first h3:first').text().trim().replace(/\s/g,'')

 jQuery('.ec3iic91:first .ec3iic90:first').text().trim().replace(/\s/g,'') 
 jQuery('.ec3iic91:first .ec3iic90:last').text().trim().replace(/\s/g,'') ||
 jQuery('.ec3iic91:first .ec3iic90:first').text().trim().replace(/\s/g,'')

 jQuery('.product-price-wrap:first').text().trim().replace(/\s/g,'')

 jQuery('.tt-product-single-info:first .sale-price').text().trim().replace(/\s/g,'') 
 jQuery('.tt-product-single-info:first .old-price').text().trim().replace(/\s/g,'') ||
 jQuery('.tt-product-single-info:first .sale-price').text().trim().replace(/\s/g,'')

 jQuery('.product__price:first .js-price').text().trim().replace(/\s/g,'') 
 || jQuery('.product__price:first .js-price').text().trim().replace(/\s/g,'') 
 jQuery('.product__price:first .on-sale').text().trim().replace(/\s/g,'') 
 || jQuery('.product__price:first .js-price').text().trim().replace(/\s/g,'')


  jQuery('[data-add-to-cart-component]:first [data-add-to-cart-price]').text().trim().replace(/\s/g,'')
 || jQuery('.pdp-add-to-cart:first [data-price-label]').text().trim().replace(/\s/g,'')

 jQuery('[data-add-to-cart-component]:first [data-add-to-cart-previous-price]').text().trim().replace(/\s/g,'')
 || jQuery('.pdp-add-to-cart:first [data-price-label]').text().trim().replace(/\s/g,'')

 jQuery('.product__price:first .price-item--regular:first').text().trim().replace(/\s/g,'')

 jQuery('.product__price:first .money:first').text().trim().replace(/\s/g,'')

 jQuery('.product-price:first .product-price-minimum').text().trim()

 jQuery('.product-price:first .product-price-compare').text().trim()
 ||  jQuery('.product-price:first .product-price-minimum').text().trim()

 jQuery('.product-single__prices:first .product__price').text().trim()

 jQuery('[data-price-wrapper]:first [data-product-price]').text().trim().replace(/\s/g,'')

 jQuery('[id="ProductPrice-product-template"]:first [class="without-tax "]').text().trim().replace(/\s/g,'') 

 
 "QAR" + 
 (jQuery('.mrprprice:first .new-price').text().trim().split('QR')[1]
 || jQuery('.mrprprice:first .sale-price').text().trim().split('QR')[1])

 "QAR" + 
 (jQuery('.mrprprice:first .new-price').text().trim().split('QR')[1]
 || jQuery('.mrprprice:first .old-price').text().trim().split('QR')[1])

 jQuery('.price_range:first').text().trim()

 jQuery('[id="product-addons-total"]:first .amount:last').text().trim().replace(/\s/g,'')

 jQuery('.price--container:first .actual-price').text().trim()

 jQuery('.price--container:first .compare-price').text().trim()
 ||  jQuery('.price--container:first .actual-price').text().trim()

 jQuery('.price-container:first .isOnSale').text().trim().replace(/\s/g,'') 
 jQuery('.price-container:first .on-sale').text().trim().replace(/\s/g,'') ||
 jQuery('.price-container:first .isOnSale').text().trim().replace(/\s/g,'')


 jQuery(".product-image-summary-wrap .woocommerce-Price-amount").text().trim()

 jQuery('#product-price:first .money:first').text().trim()
 jQuery('#product-price:first .money:last').text().trim()

 jQuery('.price-area:first .price:first').text().trim()

 jQuery('.product__price:first').text().trim()

 jQuery('.product-single__price-number:first .money').text().trim()

 jQuery('.pricearea:first').text().trim().replace(/\s/g,'').split('-')[0]

 jQuery(".price-list:first .price").text().trim()

 jQuery('.product-price:first .product-price-minimum').text().trim()

 jQuery('.product-price:first .product-price-compare').text().trim()
 ||  jQuery('.product-price:first .product-price-minimum').text().trim()

 jQuery('.tt-price .sale-price').text().trim()

 jQuery('.tt-price .old-price').text().trim()
 ||  jQuery('.tt-price .sale-price').text().trim()

 jQuery('.price-area:first').text().trim().replace(/\s/g,'')

 jQuery('.product__price .money:last').text().trim()

 jQuery('.product__price .money:first').text().trim()
 ||  jQuery('.product__price .money:last').text().trim()

 jQuery('.product-price-wrapper .product-price:last').text().trim()

 jQuery('.product__price:first').text().trim()

 jQuery('.product-detail__price:first .theme-money').text().trim()

 jQuery('.prices [itemprop="price"]').text().trim()

 jQuery('.product-page-price:first ._price').text().trim()

 jQuery('.price-area:first .current-price').text().trim().replace(/\s/g,'')

 jQuery('.price-area:first .was-price').text().trim().replace(/\s/g,'') ||
 jQuery('.price-area:first .current-price').text().trim().replace(/\s/g,'')

 jQuery('[id="ProductPrice-"]').text().trim().replace(/\s/g,'')

 '$'+jQuery('[class="price total"]').next().next().text().trim().replace(/\s/g,'')
