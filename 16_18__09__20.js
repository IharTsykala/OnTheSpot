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

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// UOI Online
// uoionline.com
https://uoionline.com/
// com/([\w-]+)
// uoionline
// Looking for your new favorite outfit? Look no further! We're bringing you the hottest trends at UOI Online. Find a stylish, affordable outfit today!
// https://shoptimages.s3.amazonaws.com/uoionline.png
jQuery('#product-description h1').text().trim()
jQuery('[itemprop="description"] li').text().trim()
jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1]
if (jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1].length > 0) 
    $img = 'https:'+jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1]
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
thumbnail-slider
jQuery('.thumbnail-slider img').attr('src')
if (jQuery('.thumbnail-slider img').length > 0){
  $arr = [];
  jQuery(".thumbnail-slider img").each(function(index){
  if (index < 4) $arr.push(jQuery(this).attr('src'))
  })
  $arr
}
jQuery('#product-price span:first').text().trim()
jQuery('#product-price span:last').text().trim()
//stock avaliable
if (jQuery('#product-price span:first').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
    $status = false;
}


// Henly
// shophenly.com
// com/([\w-]+)
// shophenly. previous image. next image. I hope you like compliments 'cuz DANGGG ⠀ ⠀ Mirror Mirror Velvet Wrap Maxi in Emerald + Barclay Snake Boot + ...
// https://shoptimages.s3.amazonaws.com/shophenly.png
jQuery('h1.title').text().trim()
'https:'+jQuery('.main-image img').attr('src')
jQuery('.thumbnails img')
if (jQuery('.main-image img').attr('src').length > 0) 
    $img = 'https:'+jQuery('.main-image img').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
if (jQuery('.thumbnails img').length > 0){
  $arr = [];
  jQuery('.thumbnails img').each(function(index){
  if (index < 4) $arr.push('https:'+jQuery(this).attr('src'))
  })
  $arr
}
jQuery('.current-price')[0].innerText.split(' ').join('')
if(jQuery('.was-price')[0]) jQuery('.was-price')[0].innerText.split(' ').join('')
else jQuery('.current-price')[0].innerText.split(' ').join('')
// jQuery('.was-price')[0].innerText.split(' ').join('') || jQuery('.current-price')[0].innerText.split(' ').join('')
if (jQuery('span.soldout span:first').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
    $status = false;
}
if(jQuery('span.soldout')) jQuery('span.soldout span').text().trim()