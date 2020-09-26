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