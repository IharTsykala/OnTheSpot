if (jQuery('button.ProductForm__AddToCart span:first').text().trim().toLowerCase() == 'sold out' || jQuery('button.ProductForm__AddToCart span:first').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('input#product-add-to-cart').attr('value').toLowerCase() == 'sold out' || jQuery('input#product-add-to-cart').attr('value').toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('a#add-to-cart').text().trim().toLowerCase() == 'sold out' || jQuery('a#add-to-cart').text().trim().toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}

if (jQuery('form#add-to-cart button#add').attr('value').toLowerCase() == 'sold out' || jQuery('form#add-to-cart button#add').attr('value').toLowerCase() == 'out of stock') {
  $status = true
} else {
  $status = false;
}