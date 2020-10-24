if (jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'sold out' || 
jQuery('button.single_add_to_cart_button:first').text().trim().toLowerCase() == 'out of stock'
) {
  $status = true
} else {
  $status = false;
}