if (jQuery('button.ProductForm__AddToCart span:first').text().trim().toLowerCase() == 'sold out' || jQuery('button.ProductForm__AddToCart span:first').text().trim().toLowerCase() == 'out of stock') {
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

if (jQuery('input#product-add-to-cart').attr('value').toLowerCase() == 'sold out' || jQuery('input#product-add-to-cart').attr('value').toLowerCase() == 'out of stock'
 || jQuery('input#product-add-to-cart').attr('value').toLowerCase() == 'unavailable') {
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

if (jQuery('button.add-to-cart').text().trim().toLowerCase() == 'sold out' || jQuery('button.add-to-cart').text().trim().toLowerCase() == 'out of stock') {
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