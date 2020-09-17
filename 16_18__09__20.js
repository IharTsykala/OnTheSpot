// kaotikobcn
// www.kaotikobcn.com
// https://www.kaotikobcn.com/en/
com/([\w-]+)
// or
([A-Za-z0-9-]+)\.html
// Wait Function Code
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
// Name Getter JS
jQuery('.product-name h1').text().trim()
// Brand Getter JS
'kaotiko'
// Item Description JS
jQuery('.short-description').text().trim()
// or
jQuery('.bundler-Summary-itemSubtitle:first').text().trim()
// Main Image Getter JS
jQuery('.product-image-thumbs img:first').attr('src')
jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').attr('src')
// or
if (jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').length > 0) 
    $img = 'https:'+jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
// Item Images Getter JS
$img = 'https:'+jQuery('.product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)').map(item=>item.src)
// or 
const arr = [...document.querySelectorAll('.product-image-thumbs img')].map(item=>item.src);
arr.length = 4;
arr
// or 
if (jQuery('.product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)').length > 0){
  $arr = [];
  jQuery(".product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)").each(function(index){
  if (index < 4) $arr.push(jQuery(this).attr('src'))
  })
  $arr
}
// Price Getter JS
'€'+jQuery('.product-type-data .price-box .price:first').text().trim().split('€')[0].trim()
// Original Price Getter JS
'€'+jQuery('.product-type-data .price-box .price:last').text().trim().split('€')[0].trim()
// or 
if(jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-old').text().trim()) {jQuery('.priceMessage:first').text().trim().split(' ')[1].slice(0, -1)}
else {jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-lead').text().trim()}
// or 
jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-old').text().trim() ||
jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-lead').text().trim()