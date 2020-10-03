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

if (jQuery("._3KsTU0 img._30XEf0").length > 0) 
$img = jQuery("._3KsTU0 img._30XEf0").attr("src")
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

document.querySelector('._3KsTU0 img._30XEf0').src

if (jQuery('ul.LzhdeS li').length > 0){
$arr = [];
jQuery('ul.LzhdeS li').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this).find('._2_AcLJ').css('background-image'))
    // .split('"')[1])
}
$arr
})

document.querySelectorAll('ul.LzhdeS li')

// product__thumbs product__thumbs--below product__thumbs-placement--left small--hide aos-init slick-initialized slick-slider aos-animate

// native
// 
let containerUl = Array.from(document.querySelectorAll('ul.LzhdeS li ._2_AcLJ'))

containerUl.length = 4
containerUl.map(item=>item.getAttribute('style', "background-image").slice(21, -1))

// .filter(item=>item.hasAttribute('style', "background-image"))
// background-image:url(https://rukminim1.flixcart.com/image/128/128/k3xcdjk0pkrrdj/sari/y/5/f/free-black-vjs1299-1-v-j-fashion-vjs1299-1-original-imafjfbhjr7hmmtz.jpeg?q=70)

if (jQuery(".primary-image-carousel-container .slick-active img:first").length > 0) 
$img =  jQuery(".primary-image-carousel-container .slick-active img:first").attr("src")
// jQuery(".zoomContainer .zoomWindow:first").css('background-image').split('"')[1] 
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery("img.zoomImg:first").length > 0) 
$img = 'https:' + jQuery("img.zoomImg:first").attr("src")
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('.product_gallery_nav  .gallery-cell img').length > 0){
$arr = [];
jQuery('.product_gallery_nav  .gallery-cell img').each(function(index){
    if (index < 4) 
    $arr.push('https:'+jQuery(this).attr("src"))    
})
$arr
}

product__thumbnail slick-slide slick-current slick-active
product_gallery_nav 