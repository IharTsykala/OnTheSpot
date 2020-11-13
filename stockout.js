if (jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions li.c-tp-productdimensions-item--selected')
    .attr('data-availability').toLowerCase() == 'soldout') {
  $status = true
} else {
  $status = false;
}

///////////////////////////////////////////

if (jQuery('[data-hook="add-to-cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[data-hook="add-to-cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

///////////////////////////////////////////////////////////////

if (jQuery('[value="Add to Cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[value="Add to Cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}
data-action="add-to-cart"

if (jQuery('button.shopify-payment-button__button').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.shopify-payment-button__button').text().trim().toLowerCase() == 'out of stock'
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

if (jQuery('.product-out-of-stock').text().trim() == 'Sorry, currently out of stock' ) {
  $status = true
} else {
  $status = false;
}

:not(.h-tp-hidden)

if (jQuery('input.mar-add-to-bag').attr('value').toLowerCase().indexOf('sold out')>=0 
  || jQuery('input.mar-add-to-bag').attr('value').toLowerCase().indexOf('out of stock')>=0) {
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

if (jQuery('button.vtex-button').text().trim().toLowerCase() == 'sold out' ||
 jQuery('button.vtex-button').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

// span[id="main:lblNotAvailable"]

if (jQuery('button[name="buynow"]').text().trim().toLowerCase() == 'sold out' ||
 jQuery('button[name="buynow"]').text().trim().toLowerCase() == 'out of stock') {
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

if (jQuery('button.btn-cart-add:contains(Sold Out)').length) {
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

if (jQuery('.single-product [name="add"]').text().trim().toLowerCase().indexOf('out') >= 0) 
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

if (jQuery('.notify').css('display') === 'block') {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.btn-cart-add').length === 0 && jQuery('.product-notifier').text().trim().toLowerCase() === 'notify me when this product is available') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.out-of-stock').text().trim()  === 'Out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.styled__Availability-mu8uqe-4').text().trim().toLowerCase().indexOf('indisponibil') >= 0)
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

if (jQuery('input[id="product-add-to-cart"]').attr('value').toLowerCase().indexOf('pranešti') >= 0) {
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


