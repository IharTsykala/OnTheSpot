Iidols Fashion
idolsfashion.com
com/([\w-]+)
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
jQuery('.product-title h2').text().trim()
jQuery('.product-description .panel-title').text().trim()
if (jQuery('img#product-featured-image').length > 0) 
    $img = 'https:'+jQuery('img#product-featured-image').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

if (jQuery('ul#more-view-carousel li').length > 0){
  $arr = [];
  jQuery("ul#more-view-carousel li").each(function(index){
  if (index < 4) $arr.push('https:'+jQuery(this).find('img').attr('src'))
  })
  $arr
}  

jQuery('#add-to-cart-form .on-sale .money:first').text().trim().split(' ')[0] || jQuery('#add-to-cart-form .prices .money:first').text().trim().split(' ')[0]
jQuery('#add-to-cart-form .prices .money:first').text().trim().split(' ')[0]

if (jQuery('#add-to-cart-form #product-add-to-cart').attr('value').toLowerCase().indexOf('sold') >= 0 ||jQuery('#add-to-cart-form #product-add-to-cart').attr('value').toLowerCase().indexOf('out')>= 0) {
  $status = true
} else {
    $status = false;
}

// $val = false;
// if (
//   jQuery(".swatch:contains(Size)").length > 0 &&
//   $sarg != "No Color" &&
//   $sarg != "Select Color"
// ) {
//   $val = true;
//   jQuery(".swatch:contains(Size)").each(function () {
//     if (
//       jQuery(this).text().trim() == $sarg &&
//       !jQuery(this).hasClass(".not-available")
//     ) {
//       $val = false;
//     }
//   });
// }
// return $val;

if (jQuery(".swatch:contains(Color)").length > 0) {
  [
    jQuery(".swatch:contains(Color) input:checked").length > 0
      ? jQuery(".swatch:contains(Color) input:checked").attr("value").trim()
      : "Select size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Color) input").map(function (i, e) {
        if (jQuery(e).attr("value").trim() !== "")
          return jQuery(e).attr("value").trim();
      })
    ),
  ];
} else ["No size", ["No size"]];

if (
  jQuery(".swatch:contains(Color)").length > 0 &&
  $sarg != "Select size" &&
  $sarg != "No size"
) {
  jQuery(".swatch:contains(Color) input").each(function () {
    if (jQuery(this).attr("value").trim() == $sarg) jQuery(this)[0].click();
  });
}

// $val = false;
//   if (
//     jQuery(".swatch:contains(Size)").length > 0 &&
//     $sarg != "No size" &&
//     $sarg != "Select size"
//   ) {
//     $val = true;
//     jQuery(".swatch:contains(Size) input").each(function () {
//       if (
//         jQuery(this).attr("value").trim() == $sarg &&
//         !jQuery(this).hasClass("unavailable").length > 0
//       ) {
//         $val = false;
//       }
//     });
//   }
//   return $val;

if (
  jQuery(".block-row .grid-item").length > 0 &&
  jQuery("#product-featured-image").length === 0
) {
  $arr = [];

  jQuery(".block-row .grid-item").each(function () {
    $title = jQuery(this).find("a.product-title").text().trim();

    $img = jQuery(this).find("img.fc-init").attr("src");

    $link = jQuery(this).find("a.product-grid-image").attr("href");

    $price = jQuery(this).find(".price-box").text().trim();
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

Circa Lighting
circalighting.com
jQuery('.product-name h1').text().trim()
jQuery('.designer').text().trim()
jQuery('img.image-main').attr('src')

if (jQuery('img.image-main').length > 0) 
    $img = jQuery('img.image-main').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  if (jQuery('.owl-stage .item img').length > 0){
    $arr = [];
    jQuery(".owl-stage .item img").each(function(index){
    if (index < 4) $arr.push(jQuery(this).attr('src'))
    })
    $arr
  }  

  jQuery('.price-box .price:first').text().trim()
  jQuery('#configurable_swatch_finish_filter li.option-choose-an-option')
  jQuery('.input-box .jq-dropdown-trigger:first').text().trim()
  jQuery('#configurable_swatch_finish_filter li.option-choose-an-option.active:first').slice(0, 3).text().trim()
  jQuery(".jq-dropdown-wrapper:contains(Shade) .jq-dropdown-list li")

  if (jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-list li").length > 0) {
    [
      jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-trigger:first").text() != ""
        ? jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-trigger:first")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Color",
      jQuery.makeArray(
        jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-list li").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Color", ["No Color"]];
  }

  if (
    jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-list li").length > 0 &&
    $sarg != "Select size" &&
    $sarg != "No size"
  ) {
    jQuery(".jq-dropdown-wrapper:contains(Finish) .jq-dropdown-list li").each(function () {
      if (jQuery(this).text().trim() == $sarg) jQuery(this).find('a')[0].click();
    });
  }

  jQuery('.product-attribute-specs-table .data').text().trim()

  if (
    jQuery("#jq-ajax-product-grid li").length > 0 &&
    jQuery(".image-main").length === 0
  ) {
    $arr = [];
  
    jQuery("#jq-ajax-product-grid li").each(function () {
      $title = jQuery(this).find("a.jq-product-name-link").text().trim();
  
      $img = jQuery(this).find("img").attr("data-src");
  
      $link = jQuery(this).find("a.product-image").attr("href");
  
      $price = jQuery(this).find(".price-box").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  American Freight
  www.americanfreight.com
  com/([\w-]+)
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
https://shoptimages.s3.amazonaws.com/americanfreight.png
jQuery('h2.nwc--heading').text().trim() || jQuery('#pdp-product h1').text().trim()
jQuery('#collection--options--wrapper div:last').text().trim() || jQuery('#overviewWrap div:first').text().trim()
'https:' + jQuery('#zooming-image').attr('src')
jQuery('#zooming-image').attr('src')
jQuery('#pdp--imageWrap img.img-responsive:first')

if (jQuery('img[itemprop="image"]').length > 0) 
    $img = jQuery('img[itemprop="image"]').attr('src') 
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img


  if (jQuery('.slider-list li').length > 0){
    $arr = [];
    jQuery(".slider-list li").each(function(index){
    if (index < 4) $arr.push('https:'+jQuery(this).find('img').attr('src'))
    })
    $arr
  }  

  // jQuery('#pricingWrap strong:first').text().trim() ||

  jQuery('span:contains(Your Price) strong').text().trim() || jQuery('#pricingWrap strong:contains($):first').text().trim()
  jQuery('span:contains(Your Price) strong').text().trim() || jQuery('#pricingWrap del:first').text().trim()

  jQuery('strong:contains(Item Price:)').parent().parent().text().trim()
  jQuery('#plp--wrapper .plp-item--container')
  const jQuery = $d

  if (
    jQuery("#plp--wrapper .plp-item--container").length > 0 &&
    jQuery("#zooming-image").length === 0
  ) {
    $arr = [];
  
    jQuery("#plp--wrapper .plp-item--container").each(function () {
      $title = jQuery(this).find(".plp--title").text().trim();
  
      $img = jQuery(this).find("img.img-responsive:first").attr("src");
  
      $link = 'https:' + jQuery(this).find("a:first").attr("href");
  
      $price = jQuery(this).find(".plp--price strong:contains($)").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  jQuery('h2.nwc--heading').text().trim()
jQuery('#collection--options--wrapper div:last').text().trim()
'https:' + jQuery('#zooming-image').attr('src')
if (jQuery('#zooming-image').length > 0) 
    $img = 'https:' + jQuery('#zooming-image').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  jQuery('img[itemprop="image"]').length

  if (jQuery('#collection--options--wrapper div:first div:contains(Size):first span span').length > 0) {
    [
      jQuery('#collection--options--wrapper div:first div:contains(Size):first span button.bg--primaryActive').text() != ""
        ? jQuery("#collection--options--wrapper div:first div:contains(Size):first span button.bg--primaryActive")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Color",
      jQuery.makeArray(
        jQuery("#collection--options--wrapper div:first div:contains(Size):first span span").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Color", ["No Color"]];
  }

  jQuery('#collection--options--wrapper div:first div:contains(Size):first span span')

  if (
    jQuery("#collection--options--wrapper div:first div:contains(Size):first span span").length > 0 &&
    $sarg != "Select size" &&
    $sarg != "No size"
  ) {
    jQuery("#collection--options--wrapper div:first div:contains(Size):first span span").each(function () {
      if (jQuery(this).text().trim() == $sarg) jQuery(this).find('button')[0].click();
    });
  }
  const jQuery = $d

  Appleseed's™
  www.appleseeds.com
  jQuery('h1.main-name').text().trim()
  jQuery('div[data-testid="description"]').text().trim()
  jQuery('.product-image-zoom img:first')
  if (jQuery('.product-image-zoom img:first').length > 0) 
    $img = jQuery('.product-image-zoom img:first').attr('src') 
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  jQuery('.alice-carousel li')

  if (jQuery('.alice-carousel li').length > 0){
    $arr = [];
    jQuery('.alice-carousel li').each(function(index){
    if (index < 4) $arr.push(jQuery(this).find('img').attr('src'))
    })
    $arr
  }  

  jQuery('.price-display-highlight').text().trim()
  jQuery('.price-display-highlight').text().trim().split(' ')[0]
  jQuery('.price-display-highlight').text().trim().split(' ')[2]
  jQuery('.price-display-markdown').text().trim().split(' ')[0] || jQuery('.price-display-highlight').text().trim().split(' ')[0]
  jQuery('.price-display-linethrough').text().trim().split(' ')[0] || jQuery('.price-display-highlight').text().trim().split(' ')[0]

  jQuery('legend:contains(Color)')


  if (jQuery('legend:contains(Color)').parent().find('a').length > 0) {
    [
      jQuery('legend:contains(Color)').parent().find('a[aria-checked="true"] img').attr('alt')
        ? jQuery('legend:contains(Color)').parent().find('a[aria-checked="true"] img').attr('alt')          
            
        : "Select Color",
      jQuery.makeArray(
        jQuery('legend:contains(Color)').parent().find('img').map(function (i, e) {
          if (jQuery(e).attr('alt') != "")
            return jQuery(e).attr('alt').replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Color", ["No Color"]];
  }

  jQuery('#collection--options--wrapper div:first div:contains(Color):first span span')

  if (
    jQuery('legend:contains(Color)').parent().find('img').length > 0 &&
    $sarg != "Select color" &&
    $sarg != "No color"
  ) {
    jQuery('legend:contains(Color)').parent().find('img').each(function () {
      if (jQuery(this).attr('alt') == $sarg) jQuery(this)[0].click();
    });
  }

  if (jQuery("#pr-review-display .pr-review").length > 0) {
    $arr = [];
    jQuery("#pr-review-display .pr-review").each(function (index) {
      content = jQuery(this).find("p.pr-rd-description-text").text().trim();
      author = jQuery(this).find(".pr-rd-author-nickname").text().trim();
      rating = jQuery(this).find(".pr-snippet-rating-decimal:first").text().trim();
      reviewed_at = jQuery(this).find(".pr-rd-inner-content-block span:last").text().trim();
      $arr[index] = { content, author, rating, reviewed_at };
    });
    $arr;
  }

  if (
    jQuery("#search-bod div[aria-label='Product']").length > 0 &&
    jQuery(".product-image-zoom").length === 0
  ) {
    $arr = [];
  
    jQuery("#search-bod div[aria-label='Product']").each(function () {
      $title = jQuery(this).find("h2.product-link").text().trim();
  
      $img = jQuery(this).find("img.main_product_image:first").attr("src");
  
      $link = "https://www.appleseeds.com" + jQuery(this).find(".see-all-link").attr("href");
  
      $price = jQuery(this).find(".price-display-linethrough:contains($)").text().trim().split(' ')[0] ||
       jQuery(this).find(".price-display-markdown:contains($)").text().trim().split(' ')[0] || 
       jQuery(this).find(".price-display-highlight:contains($)").text().trim().split(' ')[0];
       if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  jQuery('.payment-due__price').text().trim()
  jQuery('.field__input-btn')

  $val = false;
  if (
    jQuery("#option-size option").length > 0 &&
    $sarg != "No Color" &&
    $sarg != "Select Color"
  ) {
    $val = true;
    jQuery("#option-size option").each(function () {
      if (
        jQuery(this).text().trim() == $sarg &&
        !jQuery('span:contains(Sold Out):first').text().trim()
      ) {
        $val = false;
      }
    });
  }
  return $val;

  '$' + jQuery('h2.price-area span.current-price:first').text().trim().slice(2,7)
    '$' + jQuery('h2.price-area')[0].innerText.split(' ')[1].slice(0, 5)
    
    if(jQuery('h2.price-area span.price:first').text().trim())
    '$' + jQuery('h2.price-area span.price:first').text().trim().slice(2,7)
   else if(jQuery('h2.price-area span.was-price:first').text().trim().length > 0)
   '$' + jQuery('h2.price-area span.current-price:first').text().trim().slice(2,7)
   else    
   '$' + jQuery('h2.price-area')[0].innerText.split(' ')[1].slice(0, 5)

   if(jQuery('.was-price')[0]) jQuery('.was-price')[0].innerText.split(' ').join('')
else jQuery('.current-price')[0].innerText.split(' ').join('')

if(jQuery('h2.price-area span.price:first').text().trim())
    '$' + jQuery('h2.price-area span.price:first').text().trim().slice(2,7)
   else if(jQuery('h2.price-area span.was-price:first').text().trim().length > 0)
    jQuery('.was-price')[0].innerText.split(' ').join('')
   else    
   '$' + jQuery('h2.price-area span.current-price:first')[0].innerText.split(' ')[1].slice(0, 5)

   wait_for(function(){return true;})

   if (jQuery('h1.title').parent().find('span.soldout span:first').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
    $status = false;
}