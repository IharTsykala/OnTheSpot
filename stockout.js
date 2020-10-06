if (jQuery('a.cd-btn-add').text().trim().toLowerCase() == 'sold out' || jQuery('a.cd-btn-add').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.ProductForm__AddToCart ').text().trim().toLowerCase().indexOf('sold out')>=0 
  || jQuery('button.ProductForm__AddToCart ').text().trim().toLowerCase().indexOf('sold out')>=0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('input.add').attr('value').toLowerCase() == 'sold out' || jQuery('input.add').attr('value').toLowerCase() == 'out of stock'
 || jQuery('input.add').attr('value').toLowerCase() == 'unavailable') {
  $status = true
} else {
  $status = false;
}

if (jQuery('a#add-to-cart').text().trim().toLowerCase() == 'sold out' || jQuery('a#add-to-cart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.add_to_cart:last').attr('data-label').toLowerCase() == 'sold out' || jQuery('button.add_to_cart:last').attr('data-label').toLowerCase() == 'out of stock') {
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

if (jQuery('.add-to-cart.btn:first').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-cart.btn:first').text().trim().toLowerCase().indexOf('out') >= 0) {
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

if (jQuery('input#AddToCart').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.btn-cart-add').length === 0 && jQuery('.product-notifier').text().trim().toLowerCase() === 'notify me when this product is available') {
  $status = true
} else {
  $status = false;
}

if (jQuery('#product-price').text().trim().toLowerCase()  === 'sold out') {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add_to_cart:first').text().trim().toLowerCase().indexOf('out') >= 0 || jQuery('.product__price span.sold_out').text().trim().toLowerCase() === 'sold out') {
  $status = true
} else {
  $status = false;
}