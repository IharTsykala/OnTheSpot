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

if (jQuery('button.js-product-button-add-to-cart:first').attr('data-button-status') == 'sold-out' || 
jQuery('button.js-product-button-add-to-cart:first').attr('data-button-status') == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button#AddToCart').text().trim().toLowerCase() == 'sold out' || 
jQuery('button#AddToCart').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('input.addtoBasket').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}


if (jQuery('input[id="add"]').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="button-cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}