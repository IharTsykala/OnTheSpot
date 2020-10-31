if (jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.js-product-button-add-to-cart:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.js-product-button-add-to-cart:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button#product-addtocart-button').text().trim().toLowerCase() == 'sold out' || 
jQuery('button#product-addtocart-button').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('input.AddtoCart').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}


if (jQuery('input[class="ml-product-instock-msg"]').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[class="ml-product-instock-msg"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}