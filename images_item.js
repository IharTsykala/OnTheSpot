if (jQuery(".product-zoom-section img").length > 0) 
    $img = jQuery(".product-zoom-section img").attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('ul#ProductThumbs li').length > 0){
    $arr = [];
   jQuery("ul#ProductThumbs li").each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).find('img').attr('src'))
    })
   $arr
 }



 if (jQuery("li.product-images__main__image:first img").length > 0) 
    $img = jQuery("li.product-images__main__image:first img").attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('ul.product-images__thumbnails__container li').length > 0){
    $arr = [];
   jQuery("ul.product-images__thumbnails__container li").each(function(index){
        if (index < 4) 
        $arr.push(jQuery(this).find('img').attr('src'))
    })
   $arr
 }

 if (jQuery("img[itemprop='image']:first").length > 0) 
 $img = 'https://stormfashion.dk' + jQuery("img[itemprop='image']").attr('src')
else
 $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (jQuery('.slick-track img[itemprop="image"]').length > 0){
 $arr = [];
jQuery('.slick-track img[itemprop="image"]').each(function(index){
     if (index < 4) 
     $arr.push('https://stormfashion.dk' + jQuery(this).attr('src'))
 })
$arr
}

if (jQuery(".bigimage img").length > 0) 
$img = jQuery(".bigimage img").attr('src')
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (jQuery('.primary-images .swiper-wrapper .swiper-slide img').length > 0){
$arr = [];
jQuery('.primary-images .swiper-wrapper .swiper-slide img').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this).attr("src"))
})
$arr
}
pdp-main-img primary-images col-12
