if (jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions li.c-tp-productdimensions-item--selected')
    .attr('data-availability').toLowerCase() == 'soldout') {
  $status = true
} else {
  $status = false;
}

///////////////////////////////////////////

if (jQuery('[class="form-control__button"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[class="form-control__button"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

///////////////////////////////////////////////////////////////

if (jQuery('[value="Add to cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[value="Add to cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (!(jQuery('[value="Ajouter au panier"]').length > 0) )
 {
  $status = true
} else {
  $status = false;
}
data-action="add-to-cart"

if (jQuery('button.product-form--atc-button').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.product-form--atc-button').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}
gumb_v_kosarico

if (jQuery('a[id="BIS_trigger"]:not(.h-tp-hidden)').text().trim() == 'Notify me when available' ) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-details .sold-out').text().trim() == 'This product is sold out' ) {
  $status = true
} else {
  $status = false;
}

:not(.h-tp-hidden)

if (jQuery('.shopify-payment-button__button').text().trim().toLowerCase().indexOf('sold out')>=0 
  || jQuery('.shopify-payment-button__button').text().trim().toLowerCase().indexOf('out of stock')>=0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.buyWrapper input').attr('value').toLowerCase().indexOf('out')>=0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.shopify-payment-button__button').text().trim().toLowerCase().indexOf('out')>=0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-price:first').text().trim().toLowerCase().indexOf('out')>=0) {
  $status = true
} else {
  $status = false;
}


if (jQuery('input#variant-add').attr('value').toLowerCase() == 'sold out' || jQuery('input#variant-add').attr('value').toLowerCase() == 'out of stock'
 || jQuery('input#variant-add').attr('value').toLowerCase() == 'unavailable') {
  $status = true
} else {
  $status = false;
}

if (jQuery('a#add-to-cart').text().trim().toLowerCase() == 'sold out' || jQuery('a#add-to-cart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-cart input').attr('value').toLowerCase() == 'sold out' || jQuery('.add-to-cart input').attr('value').toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('#AddToCart-product-template').text().trim().toLowerCase() == 'sold out' ||
 jQuery('#AddToCart-product-template').text().trim().toLowerCase() == 'out of stock' ||
  jQuery('#AddToCart-product-template').text().trim().indexOf("Na zalogi ni dovolj izdelkov") >= 0)
   {
  $status = true
} else {
    $status = false;
}

if (jQuery('#collection--options--wrapper .alert-danger').text().trim().toLowerCase().indexOf("currently not in stock") >= 0)
   {
  $status = true
} else {
    $status = false;
}

if (jQuery('button.btn-addtocart').text().trim().toLowerCase() == 'sold out' ||
 jQuery('button.btn-addtocart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.AddtoCart').text().trim().toLowerCase() == 'sold out' ||
 jQuery('.AddtoCart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

// span[id="main:lblNotAvailable"]

if (jQuery('button[id="submitAddCart"]').text().trim().toLowerCase() == 'sold out' ||
 jQuery('button[id="submitAddCart"]').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.sold-out-message').css('display') !== 'none') {
  $status = true
} else {
  $status = false;
}
sold-out-message

if (jQuery('[id="LowStockMessage"]:contains(SOLD OUT)').length) {
  $status = true
} else {
  $status = false;
}

if (jQuery('#product-title-actions a').text().trim().toLowerCase() == 'sold out' || jQuery('#product-title-actions a').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-autotag="pdp-item-flag"]').text().trim().toLowerCase().indexOf('out') >= 0 ||
jQuery('[data-autotag="pdp-select-size-error"]').text().trim().toLowerCase().indexOf('unavailable') >= 0)  {
  $status = true
} else {
  $status = false;
}

if (jQuery('button[name="add"]').text().trim().toLowerCase().indexOf('stoc epuizat') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('ul li button._2MWPVK').text().trim().toLowerCase().indexOf('out') >= 0 || jQuery('.mBwvBe').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
  $status = false;
}

document.querySelectorAll(".mBwvBe")

Array.from(
  document.querySelectorAll("div div div div")
).filter(
  e => e.textContent.includes("₹")
)[16].innerText;

if (jQuery('.product-form--atc-button:first').text().trim().toLowerCase().indexOf('out') >= 0) 
{
  $status = true
} else {
  $status = false;
}
sold_out

if (jQuery('input[id="notify"]').attr('value').toLowerCase().indexOf('notify') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('#outofstockflag').css('display') === 'block') {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.btn-cart-add').length === 0 && jQuery('.product-notifier').text().trim().toLowerCase() === 'notify me when this product is available') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-card__inner button').text().trim()  === 'Out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-cart-area button').text().trim()  === 'Out of stock') {
  $status = true
} else {
  $status = false;
}


if (!jQuery('.add-to-card__inner .btn-primary').length) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.ProductForm__AddToCart').text().trim().toLowerCase().indexOf('out') >= 0)
  {
  $status = true
} else {
  $status = false;
}

if (jQuery('#submitButtonBasket').text().trim().toLowerCase() == 'sold out' || jQuery('#submitButtonBasket').text().trim().toLowerCase() == 'out of stock' ||
jQuery('.product-rbox h2').text().trim() == 'Izdelka trenutno ni v ponudbi') {
  $status = true
} else {
  $status = false;
}

if (jQuery('input[id="add-to-cart"]').attr('value').indexOf('Uitverkocht') >= 0) {
  $status = true
} else {
  $status = false;
}
product__submit__add

if (jQuery('input[id="back-in-stock-subscribe-27906"]').attr('disabled')) {
  $status = true
} else {
  $status = false;
}


if (jQuery('.vtex-add-to-cart-button-0-x-buttonText').text().trim() == 'No disponible' ||
 jQuery('button.vtex-button').text().trim() == 'No disponible') {
  $status = true
} else {
  $status = false;
}


if (jQuery('input[id="form-action-addToCart"]').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (!jQuery('[id="addToBag"]').length > 0 )
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="add-to-cart"]').hasClass('disabled') )
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-pf-type="ProductATC"]').hasClass('disabled') )
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('.sqs-add-to-cart-button').text().trim().toLowerCase().indexOf('out')  >= 0
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-add-to-cart-component]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[data-add-to-cart-component]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="AddToCart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-pf-type="ProductATC"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[itemprop="availability"]').attr('href').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-details__label-container').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-unavailable').css('display') !== 'none') {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="product_page"] [id="content"] h4').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button:contains(Out)').length) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[class="productlabel soldout"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button[id="product-addtocart-button"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('button[id="product-addtocart-button"]').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add-to-cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[name="add-to-cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('.woocommerce-variation-availability:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-product-atc]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[class="btn-cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product_information .product-detail__form:first').text().trim().toLowerCase().indexOf('unavailable') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-cart-btn-style:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.btn--add-to-cart').text().trim().toLowerCase() == 'sold out' ||
 jQuery('button.btn--add-to-cart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('input.add-to-cart').attr('value').toLowerCase() == 'sold out' || jQuery('input.add-to-cart').attr('value').toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('button[id="product-addtocart-button"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('button[id="product-addtocart-button"]').text().trim().toLowerCase() == 'out of stock' ||
!jQuery('button[id="product-addtocart-button"]').length
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.mainaddtocart:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="shopify_add_to_cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-auto-id="add-to-bag"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-main__submit:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="detail-item-append-btn"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (!jQuery('.details-product-purchase__add-to-bag:first button.form-control__button').length) {
  $status = true
} else {
  $status = false;
}

if (!jQuery('.js-product-button-add-to-cart').length) {
  $status = true
} else {
  $status = false;
}

if (!jQuery('[id="shopify_add_to_cart"]').length) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[aria-label="Add to cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.ProductDetails_addToBag__21uZa:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (!jQuery('[id="product-add-to-cart"]').attr('value').toLowerCase()== 'sold out') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.product-form--add-to-cart:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.btn-add-to-bag:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.JH-BuyCart:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.qty-and-add').css('display') === 'none') {
  $status = true
} else {
  $status = false;
}

if (jQuery('[class="stock out-of-stock"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="AddToCart"]').attr('value').toLowerCase()== 'sold out') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.AddtoCart').attr('value').toLowerCase()== 'sold out') {
  $status = true
} else {
  $status = false;
}