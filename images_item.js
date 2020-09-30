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

if (jQuery(".product-image img").length > 0) 
$img = jQuery(".product-image img").attr('src')
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (jQuery('.thumbnails a').length > 0){
$arr = [];
jQuery('.thumbnails a').each(function(index){
    if (index < 4) 
    $arr.push('https:'+jQuery(this).attr("href"))
})
$arr
}
pdp-main-img primary-images col-12

if (jQuery(".product-view a.MagicZoom").length > 0) 
$img = jQuery(".product-view a.MagicZoom").attr("href")
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (jQuery('.MagicToolboxSelectorsContainer a[data-magic-slide-id="zoom"] img').length > 0){
$arr = [];
jQuery('.MagicToolboxSelectorsContainer a[data-magic-slide-id="zoom"] img').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this).attr("src"))
})
$arr
}

product__thumbs product__thumbs--below product__thumbs-placement--left small--hide aos-init slick-initialized slick-slider aos-animate