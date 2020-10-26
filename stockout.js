if (jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions li.c-tp-productdimensions-item--selected')
    .attr('data-availability').toLowerCase() == 'soldout') {
  $status = true
} else {
  $status = false;
}

if (jQuery('[value="add_to_cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[value="add_to_cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
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

if (jQuery('product-mark.sold-out').text().trim().toLowerCase() == 'sold out' ) {
  $status = true
} else {
  $status = false;
}

:not(.h-tp-hidden)

if (jQuery('#add-to-cart button:first').text().trim().toLowerCase().indexOf('sold out')>=0 
  || jQuery('#add-to-cart button:first').text().trim().toLowerCase().indexOf('out of stock')>=0) {
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

if (jQuery('#productAdd a:first').text().trim().toLowerCase() == 'sold out' || jQuery('#productAdd a:first').text().trim().toLowerCase() == 'out of stock' 
  || jQuery('span[id="main:lblNotAvailable"]').text().trim().toLowerCase().indexOf("not available") >= 0)
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

if (jQuery('button.addProduct').text().trim().toLowerCase() == 'sold out' || jQuery('button.addProduct').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

// span[id="main:lblNotAvailable"]

if (jQuery('button[data-talos="buttonAddToCart"]').text().trim().toLowerCase() == 'sold out' || jQuery('button[data-talos="buttonAddToCart"]').text().trim().toLowerCase() == 'out of stock') {
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

if (jQuery('.button[id="btn-basket"]').text().trim().toLowerCase().indexOf('back in stock') >= 0) {
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

if (jQuery('.add_to_cart:first').text().trim().toLowerCase().indexOf('out') >= 0 || jQuery('.sold_out').text().trim() !== '') 
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

if (jQuery('.sold-out-big').text().trim().toLowerCase()  === 'sold out!') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add_to_cart:first').text().trim().toLowerCase().indexOf('out') >= 0 || jQuery('.product__price span.sold_out').text().trim().toLowerCase() === 'sold out') {
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

if (jQuery('input[id="back-in-stock-subscribe-27906"]').attr('value').toLowerCase().indexOf('pranešti') >= 0) {
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