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
  jQuery(".product__price:first .price-item--regular:first").text().trim()

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

jQuery(".product--container:first .product__price:first").text().trim()
jQuery(".product--price .price--compare-at").text().trim() ||
  jQuery("..product__price:first").text().trim()

  jQuery(".product--price:first .price--main .money:first").text().trim()
  jQuery(".product--price .price--compare-at").text().trim() ||
    jQuery(".product--price:first .price--main .money:first").text().trim()

"€" + jQuery(".price-wrapper .price:first").text().trim().split("€")[0]
"€" + jQuery(".old-price .price").text().trim().split("€")[0] ||
  "€" + jQuery(".price-wrapper .price:first").text().trim().split("€")[0]

  "£" + jQuery(".product-info-main .price-wrapper:first .price:first").text().trim().split("£")[1]
"£" +(jQuery(".old-price .price").text().trim().split("£")[1] ||
jQuery(".product-info-main .price-wrapper:first .price:first").text().trim().split("£")[1])

"HUF" + jQuery(".price_withVat:first").text().trim().split("Ft")[0]
"HUF" + jQuery(".origPrice:first").next().text().trim().split("Ft")[0] ||
  "HUF" + jQuery(".price_withVat:first").text().trim().split("Ft")[0]

"PEN" + " " + jQuery(".sqs-money-native:first").text().trim().split("S/")[1]
"PEN" + " " + jQuery(".js-PrevPrice:first").text().trim().split("S/")[1] ||
  "PEN" + " " + jQuery(".bestPrice:first").text().trim().split("S/")[1]


  jQuery('.modal_price .current_price:first').text().trim().replace(/\s/g,'') ||
  jQuery('.modal_price .snize-price:first').text().trim().replace(/\s/g,'')


  jQuery('.modal_price .was_price .money').text().trim().replace(/\s/g,'') ||
jQuery('.modal_price .current_price:first').text().trim().replace(/\s/g,'') ||
jQuery('.modal_price .snize-price:first').text().trim().replace(/\s/g,'')

jQuery('[id="ProductPrice"]:first').text().trim()

jQuery('[id="ComparePrice"]:first').text().trim() ||
  jQuery('[id="ProductPrice"]:first').text().trim()

  jQuery(".price__regular .money:first").text().trim()
jQuery(".was_price .price-item:first").text().trim() ||
  jQuery(".price__regular .price-item:first").text().trim()

jQuery(".modal_price .current_price .money:first").text().trim()  
jQuery(".modal_price:first .was_price").text().trim() ||
  jQuery(".modal_price .current_price .money:first").text().trim()


  jQuery(".product-normal-price:first").text().trim()

  jQuery(".ProductMeta__Price.Price--highlight:first").text().trim() 
  || jQuery(".ProductMeta__Price:first").text().trim()
  jQuery(".ProductMeta__Price.Price--compareAt:first").text().trim() ||
    jQuery(".ProductMeta__Price.Price--highlight:first").text().trim()
    || jQuery(".ProductMeta__Price:first").text().trim()


    jQuery(".price #ProductPrice:first span:first").text().trim()
    jQuery(".price #ComparePrice:first span:first").text().trim() ||
      jQuery(".price #ProductPrice:first span:first").text().trim()


      jQuery('.price__sale .price-item--sale:first').text().trim() 
|| jQuery('.price__regular .price-item--regular:first').text().trim() 
jQuery('.price__sale .price-item--regular:first').text().trim() 
|| jQuery('.price__sale .price-item--sale:first').text().trim() 
||  jQuery('.price__regular .price-item--regular:first').text().trim()

jQuery(".price ins:first").text().trim()
jQuery(".price del:first").text().trim() ||
  jQuery(".price ins:first").text().trim()
 
jQuery('[data-price-wrapper] [data-product-price]').text().trim() ||
  '£' + ' ' + jQuery('i:contains(£)').text().trim().replace(/\s/g,'').split('£')[1].trim()

  '$'+jQuery(".product--price  .price--main:first").text().trim().split('$')[1]
  '$'+(jQuery(".product--price  .price--compare-at").text().trim().split('$')[1] ||
  jQuery(".product--price  .price--main:first").text().trim().split('$')[1])

  '$'+jQuery(".price-list  .price--highlight:first").text().trim().split('$')[1]
  '$'+(jQuery(".price-list  .price--compare").text().trim().split('$')[1] ||
  jQuery(".price-list  .price--highlight:first").text().trim().split('$')[1])

  '£'+jQuery(".price-list  .price--highlight:first").text().trim().split('£')[1]
  '£'+(jQuery(".price-list  .price--compare").text().trim().split('£')[1] ||
  jQuery(".price-list  .price--highlight:first").text().trim().split('£')[1])

  '€'+jQuery(".c-price-list  .c-price-list__item--highlighted:first").text().trim().split('€')[0]
  '€'+(jQuery(".c-price-list  .c-price-list__item--base").text().trim().split('€')[0] ||
  jQuery(".c-price-list  .c-price-list__item--highlighted:first").text().trim().split('€')[0])

  "$"+(jQuery('.product-form__info-content .price--highlight:first').text().trim().split("$")[1]
  || jQuery('.product-form__info-content .price:first').text().trim().split("$")[1] )
  "$"+(jQuery(".product-form__info-content .price--compare:first").text().trim().split("$")[1]    
    || jQuery('.product-form__info-content .price:first').text().trim().split("$")[1] )

    jQuery('.prices:first .actual-price').text().trim()

    jQuery('.prices:first .compare-price .money').text().trim()
    ||  jQuery('.prices:first .actual-price').text().trim()

    jQuery('.pdp-hero__price-container:first').text().trim().split('From')[1] || jQuery('.pdp-hero__price-container:first').text().trim().split('From') 

    jQuery('[class="product__price on-sale"]:first').text().trim().replace(/\s/g,'') ||
    jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 
    jQuery('[class="product__price product__price--compare"]:first').text().trim().replace(/\s/g,'') ||
    jQuery('[class="product__price"]:first').text().trim().replace(/\s/g,'') 

    jQuery('.product-shop .price ins:first').text().trim() || jQuery('.product-shop .special-price .price:first').text().trim()
 || jQuery('.product-shop .regular-price:first').text().trim()
jQuery('.product-shop .price del:first').text().trim() || jQuery('.product-shop .old-price .price:first').text().trim()
 || jQuery('.product-shop .price ins:first').text().trim() || jQuery('.product-shop .regular-price:first').text().trim()

 jQuery('#product-price:first .money:first').text().trim()
 jQuery('#product-price:first .money:last').text().trim()


 jQuery('.product__price .price__sale .price-item--sale:first').text().trim() 
|| jQuery('.product__price .price__regular .price-item--regular:first').text().trim() 
jQuery('.product__price .price__sale .price-item--regular:first').text().trim() 
|| jQuery('.product__price .price__sale .price-item--sale:first').text().trim() 
||  jQuery('.product__price .price__regular .price-item--regular:first').text().trim()

jQuery('.modal_price:first .current_price ').text().trim().replace(/\s/g,'') 

jQuery('.modal_price:first .was_price').text().trim().replace(/\s/g,'') 
|| jQuery('.modal_price:first .current_price').text().trim().replace(/\s/g,'') 

jQuery('[id="ProductPrice-product-template"]:first').text().trim()

jQuery('[id="ComparePrice-product-template"]').text().trim()
|| jQuery('[id="ProductPrice-product-template"]:first').text().trim()

    jQuery('.product-single__price-product-template:first [id="ProductPrice-product-template"]').text().trim()

    jQuery('.product-single__price-product-template:first [id="ComparePrice-product-template"] .money').text().trim()
    ||jQuery('.product-single__price-product-template:first [id="ProductPrice-product-template"]').text().trim()

    jQuery('.product-price:first .product-price-minimum').text().trim()

    jQuery('.product-price:first .product-price-compare').text().trim()
    ||  jQuery('.product-price:first .product-price-minimum').text().trim()

    jQuery('.product-info__header_price-wrapper:first .product-info__header_price').text().trim().replace(/\s/g,'') 
    jQuery('.product-info__header_price-wrapper:first .product-info__header_compare-at-price').text().trim().replace(/\s/g,'') 
    || jQuery('.product-info__header_price-wrapper:first .product-info__header_price').text().trim().replace(/\s/g,'') 

    jQuery('.product__price .money:first').text().trim()

 jQuery('.product__price:first .money:first').text().trim()
 ||  jQuery('.product__price:first .money:last').text().trim()

jQuery('.price__sale .price-item--sale:first').text().trim() 
|| jQuery('.price__regular .price-item--regular:first').text().trim() 

jQuery('.price__regular .price-item--regular:first').text().trim() 
|| jQuery('.price__sale .price-item--sale:first').text().trim() 

jQuery('[data-product-price]').text().trim().split('$')[1]
jQuery('[data-hook="product-prices-wrapper"] [data-hook="formatted-primary-price"]').text().trim().split('$')[1]

jQuery('[itemprop="price"]').text().trim().replace(/\s/g,'') ||
'$'+jQuery('[class="price total"]').next().next().text().trim().replace(/\s/g,'') 

jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'') 
jQuery('.product-single__prices:first [id="ComparePrice"]').text().trim().replace(/\s/g,'') ||
jQuery('.product-single__prices:first [id="ProductPrice"]').text().trim().replace(/\s/g,'')

jQuery('h1:first span').text().trim()