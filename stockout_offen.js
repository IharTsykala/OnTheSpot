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

if (jQuery('button.product-form__add-button').text().trim().toLowerCase().indexOf('out')  >= 0
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


if (jQuery('input[class="add"]').attr('value').indexOf('out') >= 0 
|| jQuery('input[class="add"]').attr('value').indexOf('unavailable') >= 0
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add"]').text().trim().toLowerCase().indexOf('sold out') >= 0 ||
jQuery('[name="add"]').text().trim().toLowerCase().indexOf('out of stock') >= 0
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add"]').text().trim().toLowerCase().indexOf('out') >= 0 ||
jQuery('[name="add"]').text().trim().toLowerCase().indexOf('sold') >= 0
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add"]:first').attr('value').indexOf('out') >= 0 
|| jQuery('[name="add"]:first').attr('value').indexOf('Unavailable') >= 0
) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add"]').attr('disabled')) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[name="add"]').css('display')==='none') {
  $status = true
} else {
  $status = false;
}
if (!jQuery('[name="add"]').length) {
  $status = true
} else {
  $status = false;
}
if (!jQuery('input[value="Add to Bag"]').length) {
  $status = true
} else {
  $status = false;
}


if (jQuery('[data-click="addToCart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
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

if (jQuery('[name="add"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[name="add"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
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

if (jQuery('[data-hook="add-to-cart"]').text().trim() == 'Tillfälligt slut' || 
jQuery('[data-hook="add-to-cart"]').text().trim() == 'Tillfälligt slut' )
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

if (jQuery('.shopify-payment-button__button').text().trim().toLowerCase().indexOf('sold out')>=0 
  || jQuery('.shopify-payment-button__button').text().trim().toLowerCase().indexOf('out of stock')>=0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('[title="Add To Cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
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

if (jQuery('[class="btn-add-to-cart"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.add-to-cart').text().trim().toLowerCase().indexOf('out') >= 0) {
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

if (jQuery('[name="add-to-cart"]').text().trim().toLowerCase() == 'sold out' || 
jQuery('[name="add-to-cart"]').text().trim().toLowerCase() == 'out of stock' )
// ||
// jQuery('.availability:first').text().trim().toLowerCase().indexOf('out') >= 0)
 {
  $status = true
} else {
  $status = false;
}

if (jQuery('[id="product-price"]').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}

if (jQuery('.productlabel-container').text().trim().toLowerCase().indexOf('out') >= 0) {
  $status = true
} else {
  $status = false;
}
