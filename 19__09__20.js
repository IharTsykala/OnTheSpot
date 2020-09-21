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

  if (jQuery("#configurable_swatch_shade_filter li.option-choose-an-option").length > 0) {
    [
      jQuery("#configurable_swatch_shade_filter li.option-choose-an-option.active:last").text() != ""
        ? jQuery(".input-box .jq-dropdown-trigger:last")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Color",
      jQuery.makeArray(
        jQuery("#configurable_swatch_shade_filter li.option-choose-an-option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Color", ["No Color"]];
  }

  if (
    jQuery("#configurable_swatch_shade_filter li.option-choose-an-option").length > 0 &&
    $sarg != "Select size" &&
    $sarg != "No size"
  ) {
    jQuery("#configurable_swatch_shade_filter li.option-choose-an-option").each(function () {
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

  jQuery('span:contains(Your Price) strong').text().trim() || jQuery('#pricingWrap strong:first').text().trim()
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