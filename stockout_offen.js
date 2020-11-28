if (jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.ProductForm__AddToCart:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.ProductForm__AddToCart:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.single_add_to_cart_button').attr('data-button-status') == 'sold-out' || 
jQuery('button.single_add_to_cart_button').attr('data-button-status') == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.product-form__add-button').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.product-form__add-button').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('button.AddtoCart').text().trim().toLowerCase().indexOf('out')  >= 0
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


if (jQuery('input[id="add-to-cart"]').attr('value').toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-to-cart-label="Add to Cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}


if (jQuery('[name="add"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[name="add"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-action="add-to-cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[data-action="add-to-cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[data-hook="add-to-cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[data-hook="add-to-cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}
