//wait function
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
//name 
jQuery('.template-product__inner-container .product-form__title').text().trim()
//brand getter
if($('.product-detail .product-detail-brand:eq(0)').length > 0) {
    $('.product-detail .product-detail-brand:eq(0)').text().trim()
} else {
    'Stag provisions'
}
//gender getter
jQuery('ul.breadcrumb').text().indexOf('Men') >= 0 ? 'Male' : 'Female'

if (jQuery('.breadcrumb.cf').text().indexOf('Men') >= 0) 'Male'
else if (jQuery('.breadcrumb.cf').text().indexOf('Women') >= 0) 'Female'
else ''
//description
jQuery('.description').text().trim()
jQuery('.description').text().replace(/\s\s+/g,' ').trim()
//main image
if (jQuery('.flickity-slider .responsive-image__wrapper.is-selected').length > 0) 
    $img = 'https:'+jQuery('.flickity-slider .responsive-image__wrapper.is-selected img').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

//item images getter
if (jQuery('.product-gallery__thumbnails-nav .product-gallery__thumbnail a').length > 0){
    $arr = [];
   jQuery(".product-gallery__thumbnails-nav .product-gallery__thumbnail a").each(function(index){
        if (index < 4) 
        $arr.push('https:'+jQuery(this).attr('href'))
    })
   $arr
 }
 //price
 $pr = jQuery('.product-template__container .price-item.price-item--regular').text().trim()

 if (jQuery('.product-template__container .price-item.price-item--regular').length > 0)
  $pr = jQuery('.product-template__container .price-item.price-item--regular').text().trim()
 else 
  $pr = jQuery('.product-template__container .price-item.price-item--regular').text().trim()
 //original price
 $pr = jQuery('.product-essential .price-box .price.further-discounted').length > 0 ? jQuery('.product-essential .price-box .price.further-discounted').text().trim() : jQuery('.product-essential .price-box [itemprop="price"]').text().trim()
 
if (jQuery('.product-template__container .price-item.price-item--regular').length > 0)
 $pr = jQuery('.product-template__container .price-item.price-item--regular').text().trim()
  else 
 $pr = jQuery('.product-template__container .price-item.price-item--regular').text().trim()
 //stock avaliable
 if (jQuery('#product-addtocart-button').text().trim().toLowerCase() == 'sold out' || jQuery('#product-addtocart-button').text().trim().toLowerCase() == 'out of stock') {
    $status = true
  } else {
      $status = false;
  }

  jQuery('.button.button--primary.button--block.product-form__bis-btn').text().trim().toLowerCase().indexOf('out') < 0 ? $status = false : $status = true
  //mulitiproducts
  if (jQuery("#bc-sf-filter-products .grid__item").length > 0 && jQuery('.product-template__container').length == 0){
    $arr = [];
    jQuery("#bc-sf-filter-products .grid__item").each(function(){
        $title = jQuery(this).find('.grid-view-item__title').text().trim();
        $img = jQuery(this).find('.owl-item.active img').attr('src');
        $link = 'https://eggie.us'+jQuery(this).find('a.grid-view-item__link').attr('href');
        $price = jQuery(this).find('.price-item.price-item--sale').length > 0 ? jQuery(this).find('.price-item.price-item--sale').text().trim() : jQuery(this).find('.price-item.price-item--regular').text().trim();
        $arr.push([$title,$img,$link,$price]);
   });
   $arr
  }
  //reviews
  if (jQuery('.bv-content-list-reviews .bv-content-review').length > 0){
    $arr = [];
    jQuery('.bv-content-list-reviews .bv-content-review').each(function(index){
      content = jQuery(this).find('.bv-content-summary-body-text').text().trim();
      author = jQuery(this).find('.bv-author').text().trim();
      rating = jQuery(this).find('[itemprop="ratingValue"]').attr('content');
      reviewed_at = jQuery(this).find('[itemprop="datePublished"]').attr('content');
      $arr[index] = {content, author, rating, reviewed_at};
    });
    $arr;
    }

    if (jQuery('.jdgm-rev-widg__reviews .jdgm-rev').length > 0){
      $arr = [];
      jQuery('.jdgm-rev-widg__reviews .jdgm-rev').each(function(index){
        content = jQuery(this).find('.jdgm-rev__body').text().trim();
        author = jQuery(this).find('.jdgm-rev__author').text().trim();
        rating = jQuery(this).find('.jdgm-rev__rating').attr('data-score');
        reviewed_at = jQuery(this).find('.jdgm-rev__timestamp').text().trim();
        $arr[index] = {content, author, rating, reviewed_at};
      });
      $arr;
    }


    if (jQuery('#pr-review-display .pr-review').length > 0){
      $arr = [];
      jQuery('#pr-review-display .pr-review').each(function(index){
        content = jQuery(this).find('.pr-rd-description-text').text().trim();
        author = jQuery(this).find('.pr-rd-author-nickname span span:last').text().trim();
        rating = jQuery(this).find('.pr-star-v4.pr-star-v4-100-filled').length;
        reviewed_at = jQuery(this).find('.pr-rd-author-submission-date time').text();
        $arr[index] = {content, author, rating, reviewed_at};
      });
      $arr;
    }

    if (jQuery('.pr-contents-wrapper .pr-review-wrap').length > 0){
      $arr = [];
      jQuery('.pr-contents-wrapper .pr-review-wrap').each(function(index){
        content = jQuery(this).find('[itemprop="reviewBody"]').text().trim();
        author = jQuery(this).find('[itemprop="author"]').text().trim();
        rating = jQuery(this).find('[itemprop="ratingValue"]').attr('content');
        reviewed_at = jQuery(this).find('[itemprop="dateCreated"]').attr('content');
        $arr[index] = {content, author, rating, reviewed_at};
      });
      $arr;
    }

  if (jQuery('.spr-reviews .spr-review').length > 0){
    $arr = [];
    jQuery('.spr-reviews .spr-review').each(function(index){
      content = jQuery(this).find('.spr-review-content-body').text().trim();
      author = jQuery(this).find('.spr-review-header-byline strong:eq(0)').text().trim();
      rating = jQuery(this).find('.spr-icon.spr-icon-star').length
      reviewed_at = jQuery(this).find('.spr-review-header-byline strong:eq(1)').text().trim();
      $arr[index] = {content, author, rating, reviewed_at};
    });
    $arr;
    }

  if (jQuery('#BVRRDisplayContentID').length > 0){
    $arr = [];
    jQuery('#BVRRDisplayContentID div.BVRRContentReview').each(function(index){
      content = jQuery(this).find('.BVRRReviewText').text().trim();
      author = jQuery(this).find('.BVRRNickname').text().trim();
      rating = jQuery(this).find('span[itemprop="ratingValue"]').text().trim()
      reviewed_at = jQuery(this).find('.BVRRValue.BVRRReviewDate').text().trim();
      $arr[index] = {content, author, rating, reviewed_at};
    });
    $arr;
    }

    if (jQuery('.stamped-reviews .stamped-review').length > 0){
      $arr = [];
      jQuery('.stamped-reviews .stamped-review').each(function(index){
        content = jQuery(this).find('.stamped-review-content-body').text().trim();
        author = jQuery(this).find('.author').text().trim();
        rating = jQuery(this).find('.stamped-fa-star ').length;
        reviewed_at = jQuery(this).find('.created').text().trim();
        $arr[index] = {content, author, rating, reviewed_at};
      });
      $arr;
      }

  if ($('.yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)').length > 0){
    $arr = [];
    $('.yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)').each(function(index){
      content = $(this).find('.content-review').text().trim();
      author = $(this).find('.yotpo-user-name').text().trim();
      rating = $(this).find('.yotpo-icon-star').length + '';
      reviewed_at = $(this).find('.yotpo-review-date:eq(0)').text().trim();
      $arr[index] = {content, author, rating, reviewed_at};
    });
    $arr;
    }
  //color getter
  if (jQuery('.product-form__option label:contains(Size)').length > 0){
	if(jQuery('.product-form__option label:contains(Colour)').next().find('.is-active').length > 0){
		[jQuery('.product-form__option label:contains(Colour)').next().find('.is-active').text().trim(),
    jQuery.makeArray(jQuery('.product-form__option label:contains(Colour)').next().find('.swatch').map(function(i,e){return jQuery(e).text().trim();}))]
    }else{
        ["Select Color",
        jQuery.makeArray(jQuery('.product-form__option label:contains(Colour)').next().find('.swatch').map(function(i,e){return jQuery(e).text().trim();}))]
    }}
    else{
    ['No Color',['No Color']]
    }
//color clicker
if ((jQuery('.product-form__option label:contains(Colour)').length > 0) && ($sarg != "Select Color") && ($sarg != "No Color")){
    jQuery('.product-form__option label:contains(Colour)').next().find('.swatch').each(function(){
       if (jQuery(this).text().trim() == $sarg){
           jQuery(this).children().trigger('click')
       }
    });
  }
  wait_for(function(){return true;})
//color stock ctatus
$val = false;
if ((jQuery('#colourOptionSelect_JS').length > 0) && ($sarg != "No Color") && ($sarg != "Select Color")){
 $val = true;
  jQuery('#colourOptionSelect_JS option').each(function(){
     if (jQuery(this).text().trim() == $sarg && !jQuery(this).find('input').attr('disabled')){
       $val = false;
     }
  });
} return $val
//for select and options
//size getter
if (jQuery('#size').length > 0){
  [jQuery('#size option:selected').val() != '' ? jQuery('#size option:selected').text().trim() : "Select Size",
  jQuery.makeArray(jQuery('#size option').map(function(i,e){ if(jQuery(e).val()!='') return jQuery(e).text().trim();}))]
  }
  else{
  ['No Size',['No Size']]
  }
//size clicker
if ((jQuery('#size').length > 0) && ($sarg != "Select Size") && ($sarg != "No Size")){
  jQuery('#size option').each(function(){
     if (jQuery(this).text().trim() == $sarg){
         jQuery('#size').val(jQuery(this).val()).trigger('change')
     }
  });
}
wait_for(function(){return true;})
//size stock status
$val = false;
if ((jQuery('#size').length > 0) && ($sarg != "No Size") && ($sarg != "Select Size")){
$val = true;
jQuery('#size option').each(function(index){
   if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr('disabled')){
     $val = false;
   }
});
} return $val
//Style getter
if (jQuery('.product-form__option label:contains(Style)').length > 0){
	if(jQuery('.product-form__option label:contains(Style)').next().find('option:selected').length > 0){
		[jQuery('.product-form__option label:contains(Style)').next().find('option:selected').text().trim(),
    jQuery.makeArray(jQuery('.product-form__option label:contains(Style)').next().find('option').map(function(i,e){return jQuery(e).text().trim();}))]
    }else{
        ["Select Style",
        jQuery.makeArray(jQuery('.product-form__option label:contains(Style)').next().find('option').map(function(i,e){return jQuery(e).text().trim();}))]
    }}
    else{
    ['No Style',['No Style']]
    }
//Style clicker
if ((jQuery('.product-form__option label:contains(Style)').length > 0) && ($sarg != "Select Style") && ($sarg != "No Style")){
    jQuery('.product-form__option label:contains(Style)').next().find('option').each(function(){
       if (jQuery(this).text().trim() == $sarg){
           jQuery('.product-form__option label:contains(Style)').next().val(jQuery(this).val()).trigger('change')
       }
    });
  }
  wait_for(function(){return true;})
//Style stock status
$val = false;
if ((jQuery('.product-form__option label:contains(Style)').length > 0) && ($sarg != "No Style") && ($sarg != "Select Style")){
 $val = true;
  jQuery('.product-form__option label:contains(Style)').next().find('option').each(function(index){
     if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr('disabled')){
       $val = false;
     }
  });
} return $val



//get cuopon fiecd
jQuery('button#taxDrop').click();
//btn click coupon
document.querySelector('.field__input-btn-wrapper').querySelector('.field__input-btn').removeAttribute('disabled');
document.querySelector('.field__input-btn-wrapper').querySelector('.field__input-btn').click();


$('.coupon-form .button--primary').click()


document.addEventListener('click',(e)=>{
  console.log(e.target)
})

 
document.querySelector('[placeholder="Enter promo code or gift card"]').dispatchEvent(new Event('input', {bubbles: true}));
document.querySelector('[placeholder="Enter promo code or gift card"]').dispatchEvent(new Event('blur'));
document.querySelector('[placeholder="Enter promo code or gift card"]').dispatchEvent(new Event('focus'));
document.querySelector('.button.secondary-button').click()