if (jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button#AddToCart-product-template').text().trim().toLowerCase() == 'sold out' || 
jQuery('button#AddToCart-product-template').text().trim().toLowerCase() == 'out of stock'
) {
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