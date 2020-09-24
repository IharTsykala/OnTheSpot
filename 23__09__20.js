The Gold Gods
www.thegoldgods.com
com/([\w-]+)
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
jQuery('h1.ProductMeta__Title:first').text().trim()
jQuery('meta[name="description"]:first').attr('content')
'https:'+jQuery('.Product__Slideshow img.Image--lazyLoaded:first').attr('src')
if (jQuery('.Product__Slideshow img.Image--lazyLoaded:first').length > 0) 
    $img = jQuery('.Product__Slideshow img.Image--lazyLoaded:first').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('.Product__SlideshowNav span').length > 0){
    $arr = [];
    jQuery(".Product__SlideshowNav span").each(function(index){
    if (index < 4) $arr.push('https:'+jQuery(this).find('img').attr('src'))
    })
    $arr
  } 

  jQuery('.product-single__description p').text().trim()
  jQuery('.product-single__photo:first').text().trim()

  if (jQuery('.ProductForm__AddToCart').text().trim().toLowerCase() == 'sold out') {
    $status = true
  } else {
      $status = false;
  }

  if (jQuery(".yotpo-reviews .yotpo-review").length > 0) {
    $arr = [];
    jQuery(".yotpo-reviews .yotpo-review").each(function (index) {
      content = jQuery(this).find(".content-review").text().trim();
      author = jQuery(this).find(".yotpo-user-name").text().trim();
      rating = jQuery(this).find(".yotpo-icon-star").length;
      reviewed_at = jQuery(this).find(".content-title").text().trim();
      $arr[index] = { content, author, rating, reviewed_at };
    });
    $arr;
  }
  
  if (jQuery('.ProductForm__Option--labelled:contains(Length)').length > 0) {
    [
      jQuery('.ProductForm__Option--labelled:contains(Length)').find('input[checked="checked"]').parent().text().trim()
        ? jQuery('.ProductForm__Option--labelled:contains(Length)').find('input[checked="checked"]').parent().text().trim()          
            
        : "Select Length",
      jQuery.makeArray(
        jQuery('.ProductForm__Option--labelled:contains(Length)').find('li').map(function (i, e) {
          if (jQuery(e).text().trim() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Length", ["No Length"]];
  }

  jQuery('input[checked="checked"')

  if (
     jQuery('.ProductForm__Option--labelled:contains(Length) li').length > 0 &&
    $sarg != "Select Length" &&
    $sarg != "No Length"
  ) {
    jQuery('.ProductForm__Option--labelled:contains(Length) li').each(function () {
      if (jQuery(this).find('input').attr('value') == $sarg) jQuery(this).find('label').trigger('click');
    });
  }

  wait_for(function(){return true;})

  ProductList
  if (
    jQuery(".ProductList .ProductItem__Wrapper").length > 0 &&
    jQuery('.Product__Slideshow img.Image--lazyLoaded:first').length === 0
  ) {
    $arr = [];
  
    jQuery(".ProductList .ProductItem__Wrapper").each(function () {
      $title = jQuery(this).find("h2.ProductItem__Title").text().trim();
  
      $img = 'https:' + jQuery(this).find("noscript:first").text().trim().split(' ')[3].slice(5,-1);
  
      $link = "https://thegoldgods.com/" + jQuery(this).find("a:first").attr("href");
  
      $price = jQuery(this).find(".ProductItem__Price:first").text().trim()
       if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }
  'https:' +

  Bogs Footwear
  www.bogsfootwear.com
  com/([\w-]+)
  wait_for(function(){return jQuery && jQuery.fn.jquery ;}) 

  jQuery('.detail-view__price span:last').text().trim() || jQuery('p.detail-view__price').text().trim().split(' ')[0]
  jQuery('.detail-view__price span:first').text().trim()
  jQuery('.field__input-btn')
  if (jQuery('.detail-view__image:first').attr('src').length > 0) 
    $img = 'https://www.bogsfootwear.com/shop//'+jQuery('.detail-view__image:first').attr('src').slice(4)
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('.swiper-wrapper img.detail-view__thumb').length > 0){
    $arr = [];
    jQuery('.swiper-wrapper img.detail-view__thumb').each(function(index){
    if (index < 4) $arr.push('https://www.bogsfootwear.com/shop//'+jQuery(this).attr('src'))
    })
    $arr
  }

  if (jQuery('#productAdd a:first').text().trim().toLowerCase() == 'sold out' || jQuery('#productAdd a:first').text().trim().toLowerCase() == 'out of stock') {
    $status = true
  } else {
      $status = false;
  }

  if (jQuery("#pr-review-display .pr-review").length > 0) {
    $arr = [];
    jQuery("#pr-review-display .pr-review").each(function (index) {
      content = jQuery(this).find("p.pr-rd-description-text").text().trim();
      author = jQuery(this).find(".pr-rd-author-nickname").text().trim();
      rating = jQuery(this).find(".pr-rating-stars div").length;
      reviewed_at = jQuery(this).find("h2.pr-rd-review-headline").text().trim();
      $arr[index] = { content, author, rating, reviewed_at };
    });
    $arr;
  }

jQuery('#checkout_reduction_code').text().trim()
jQuery('button.field__input-btn').text().trim()
jQuery('.payment-due__price').text().trim()
jQuery('[class="field__input-btn"]')
.attr('content')
itemprop="name
jQuery('header.product-title span:first').text().trim()

[class="field__input-btn"]
[data-trekkie-id="apply_discount_button"]

jQuery('.fieldset input[id="checkout_reduction_code"]')
jQuery('.fieldset button.field__input-btn')
jQuery('.total-line-table .payment-due__price')

const jQuery = $d

