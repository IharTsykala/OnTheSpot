if (jQuery('.Carousel__Cell.is-selected img:first').length > 0) 
    $img = jQuery('.Carousel__Cell.is-selected img:first').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  document.querySelector('.gallery-thumbs a').src

  if (jQuery(".Product__SlideshowNavScroller a").length > 0){
    $arr = [];
   jQuery(".Product__SlideshowNavScroller a").each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).find('img:first').attr('src'))
    })
   $arr
 }

 m-tp-productimagegallery-preview-wrapper

 if (jQuery('.product-single__image').length > 0) 
    $img = 
    'https:' +
     jQuery('.product-single__image')
    .attr('data-srcset')
    .split(' ')[0]
    // .css('background-image').split('url("')[1].slice(0, -2)
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
  
  // .css('background-image').split('url("')[1].slice(0, -2)

  if (jQuery('.product-single__thumbnail-image').length > 0){
    $arr = [];
   jQuery('.product-single__thumbnail-image').each(function(index){
        if (index < 4) 
        $arr.push(('https:' + jQuery(this).attr('src')).split(' ')[0])
    })
   $arr
 }

 owl-lazy img-responsive wrapper-main-slider__image lazy-init

 //////////////////////

 if (jQuery('.slick-active [role="presentation"]:first').length > 0) 
 $img =
  // 'https://www.perfectlens.ca' +
   jQuery('.slick-active [role="presentation"]:first').attr('src')
else
 $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img
///////////////////////////////////////////

if (jQuery('[role="presentation"]').length > 0){
 $arr = [];
jQuery('[role="presentation"]').each(function(index){
     if (index < 4) 
     $arr.push(jQuery(this).attr('src'))
 })
$arr
}
/////////////////////////

if (jQuery('.swiper-slide-active img:first').length > 0) 
$img = jQuery('.swiper-slide-active img:first').attr('src')
.split(' ')[0]
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (jQuery('.swiper-slide-active img').length > 0){
$arr = [];
jQuery('.swiper-slide-active img').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this).attr("src").split(' ')[0])
})
$arr
}

//////////////////////////////
pdp-main-img primary-images col-12

let img
if (document.querySelectorAll("._3KsTU0 img._30XEf0").length > 0) 
img = document.querySelector("._3KsTU0 img._30XEf0").src
else if(document.querySelectorAll(".bJCmFu img.cydMly").length > 0)
img =document.querySelector(".bJCmFu img.cydMly").src
else
img = document.querySelector('meta[property="og:image"]:eq(0)').getAttribute('content')

if (img.indexOf("http") == -1)
'https:'+img
else
img

if (jQuery("._3KsTU0 img._30XEf0").length > 0) 
img = jQuery("._3KsTU0 img._30XEf0").attr('src')
else if(jQuery(".bJCmFu img.cydMly").length > 0)
img =jQuery(".bJCmFu img.cydMly").attr('src')
img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

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

document.querySelectorAll('._3KsTU0 img._30XEf0')

// product__thumbs product__thumbs--below product__thumbs-placement--left small--hide aos-init slick-initialized slick-slider aos-animate

// native
// 
let containerUl = Array.from(document.querySelectorAll('ul.LzhdeS li ._2_AcLJ'))

if(containerUl.length > 4) containerUl.length = 4
containerUl.map(item=>item.getAttribute('style', "background-image").slice(21, -1))


if (jQuery(".primary-image-carousel-container .slick-active img:first").length > 0) 
$img =  jQuery(".primary-image-carousel-container .slick-active img:first").attr("src")
// jQuery(".zoomContainer .zoomWindow:first").css('background-image').split('"')[1] 
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('img[itemprop="image"]').length > 0) 
$img = jQuery(".product__media-preview-image").css('background-image').slice(5, -2)
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

/////////////////////////////////////////////////////////////////////////////

if (jQuery('[data-layout-name="classic"] .slick-active [data-hook="product-image"]:first').length > 0) 
$img = jQuery('[data-layout-name="classic"] .slick-active [data-hook="product-image"]:first').attr('src').replace(/\s/g,'%20')    
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

///////////////////////////////////////

if (jQuery('[data-hook="thumbnails-container"]  [data-hook="thumbnail-image"]').length > 0){
$arr = [];
jQuery('[data-hook="thumbnails-container"]  [data-hook="thumbnail-image"]').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this)
    // .find('img:first')
    .attr("src")
    .replace(/\s/g,'%20')  )  
})
$arr
}

//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////

if (jQuery('[data-hook="product-image"]:first').length > 0) 
$img = jQuery('[data-hook="product-image"]:first').attr('src').replace(/\s/g,'%20')    
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

///////////////////////////////////////

if (jQuery('[data-hook="product-image"]').length > 0){
$arr = [];
jQuery('[data-hook="product-image"]').each(function(index){
    if (index < 4) 
    $arr.push(jQuery(this)
    // .find('img:first')
    .attr("src")
    .replace(/\s/g,'%20')  )  
})
$arr
}

/////////////////////////////////////////////////////

product__thumbnail slick-slide slick-current slick-active
product_gallery_nav 


class="  lazyload "

if (jQuery('.product-image-zoom img:first').length > 0) 
$img = 
// 'https://www.deluxdeco.co.uk/' + 
jQuery('.product-image-zoom img:first').attr('src')
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('.product-single__photo.slick-active img').length > 0) 
 $img =
  // 'https://www.perfectlens.ca' +
   jQuery('.product-single__photo.slick-active img').attr('src')
else
 $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('.photo-zoom-link [role="presentation"]').length > 0) 
    $img = 
    'https:' +
     jQuery('.photo-zoom-link [role="presentation"]')
    .attr('src')
    // .split(' ')[0]
    // .css('background-image').split('url("')[1].slice(0, -2)
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  //////////////////////////////

  if (jQuery('.slick-slide img').length > 0){
    $arr = [];
    jQuery('.slick-slide img').each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).attr("data-srcset").split(' ')[0])
    })
    $arr
    }


  ///////////////////////////////////


  if (jQuery('.zoomWindowContainer div.zoomWindow:first').length > 0) 
    $img = 
    // 'https:' +
     jQuery('.zoomWindowContainer div.zoomWindow:first')
    // .attr('src')
    // .split(' ')[0]
    // .replace('_85x', '_1080x')
    .css('background-image').split('url("')[1].slice(0, -2)
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img


  if (jQuery('[class="product-gallery__item slick-slide"] img').length > 0){
    $arr = [];
    jQuery('[class="product-gallery__item slick-slide"] img').each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).attr("src").split(' ')[0])
    })
    $arr
    }


    if (jQuery('[class="product-gallery__item slick-slide"] img').length > 0) 
$img = jQuery('[class="product-gallery__item slick-slide"] img').attr('src')
.split(' ')[0]
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

/////////////////////////////////////////////////
////////////////////////////////////////////////////

if (jQuery('.Product__SlideItem img:first').length > 0) 
$img = jQuery('.Product__SlideItem  img:first').attr('src')
// .split(' ')[0]
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('.Product__SlideshowNav--thumbnails img').length > 0){
  $arr = [];
  jQuery('.Product__SlideshowNav--thumbnails img').each(function(index){
      if (index < 4) 
      $arr.push('https:'+jQuery(this).attr("src"))
  })
  $arr
  }

  if (jQuery('.etalage_thumb_image:first').length > 0) 
$img = jQuery('.etalage_thumb_image:first').attr('src')
.split(', ')[0]
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img


if (jQuery('.etalage_smallthumb_active img').length > 0){
  $arr = [];
  jQuery('.etalage_smallthumb_active img').each(function(index){
      if (index < 4) 
      $arr.push(jQuery(this).attr("src"))
  })
  $arr
  }

  ////////////////////////////////

  if (jQuery('.zoomContainer img:first').length > 0) 
  $img = jQuery('.zoomContainer img:first').attr('src')
  .split(', ')[0]
  else
  $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')
  
  if ($img.indexOf("http") == -1)
  'https:'+$img
  else
  $img
  
  
  if (jQuery('.owl-wrapper img').length > 0){
    $arr = [];
    jQuery('.owl-wrapper img').each(function(index){
        if (index < 4) 
        $arr.push(jQuery(this).attr("src"))
    })
    $arr
    }

  ///////////////////////////////