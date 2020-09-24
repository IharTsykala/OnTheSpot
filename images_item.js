if (jQuery("img.product-featured-image:first").length > 0) 
    $img = jQuery("img.product-featured-image:first").attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('ul#more-view-carousel li').length > 0){
    $arr = [];
   jQuery("ul#more-view-carousel li").each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).find('img').attr('src'))
    })
   $arr
 }