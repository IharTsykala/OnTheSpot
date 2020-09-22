// kaotikobcn
// www.kaotikobcn.com
// https://www.kaotikobcn.com/en/
com/([\w-]+)
// or
([A-Za-z0-9-]+)\.html
// Wait Function Code
wait_for(function(){return jQuery && jQuery.fn.jquery ;})
// Name Getter JS
jQuery('.product-name h1').text().trim()
// Brand Getter JS
'kaotiko'
// Item Description JS
jQuery('.short-description').text().trim()
// or
jQuery('.bundler-Summary-itemSubtitle:first').text().trim()
// Main Image Getter JS
jQuery('.product-image-thumbs img:first').attr('src')
jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').attr('src')
// or
if (jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').length > 0) 
    $img = 'https:'+jQuery('.product-details-image-gallery-container:not(.bx-clone):first img:first').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
// Item Images Getter JS
$img = 'https:'+jQuery('.product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)').map(item=>item.src)
// or 
const arr = [...document.querySelectorAll('.product-image-thumbs img')].map(item=>item.src);
arr.length = 4;
arr
// or 
if (jQuery('.product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)').length > 0){
  $arr = [];
  jQuery(".product-details-image-gallery-container:not(.bx-clone):not(.video-container) img:not(.zoomImg)").each(function(index){
  if (index < 4) $arr.push(jQuery(this).attr('src'))
  })
  $arr
}
// Price Getter JS
'€'+jQuery('.product-type-data .price-box .price:first').text().trim().split('€')[0].trim()
// Original Price Getter JS
'€'+jQuery('.product-type-data .price-box .price:last').text().trim().split('€')[0].trim()
// or 
if(jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-old').text().trim()) {jQuery('.priceMessage:first').text().trim().split(' ')[1].slice(0, -1)}
else {jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-lead').text().trim()}
// or 
jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-old').text().trim() ||
jQuery('.product-details-full-main-content-right .product-views-price .product-views-price-lead').text().trim()

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// UOI Online
// uoionline.com
https://uoionline.com/
// com/([\w-]+)
// uoionline
// Looking for your new favorite outfit? Look no further! We're bringing you the hottest trends at UOI Online. Find a stylish, affordable outfit today!
// https://shoptimages.s3.amazonaws.com/uoionline.png
jQuery('#product-description h1').text().trim()
jQuery('[itemprop="description"] li').text().trim()
jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1]
if (jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1].length > 0) 
    $img = 'https:'+jQuery('.zoomWindowContainer .zoomWindow').css('background-image').split('"')[1]
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
thumbnail-slider
jQuery('.thumbnail-slider img').attr('src')
if (jQuery('.thumbnail-slider img').length > 0){
  $arr = [];
  jQuery(".thumbnail-slider img").each(function(index){
  if (index < 4) $arr.push(jQuery(this).attr('src'))
  })
  $arr
}
jQuery('#product-price span:first').text().trim()
jQuery('#product-price span:last').text().trim()
//stock avaliable
if (jQuery('#product-price span:first').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
    $status = false;
}


// Henly
// shophenly.com
// com/([\w-]+)
// shophenly. previous image. next image. I hope you like compliments 'cuz DANGGG ⠀ ⠀ Mirror Mirror Velvet Wrap Maxi in Emerald + Barclay Snake Boot + ...
// https://shoptimages.s3.amazonaws.com/shophenly.png
jQuery('h1.title').text().trim()
'https:'+jQuery('.main-image img').attr('src')
jQuery('.thumbnails img')
if (jQuery('.main-image img').attr('src').length > 0) 
    $img = 'https:'+jQuery('.main-image img').attr('src')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img
if (jQuery('.thumbnails img').length > 0){
  $arr = [];
  jQuery('.thumbnails img').each(function(index){
  if (index < 4) $arr.push('https:'+jQuery(this).attr('src'))
  })
  $arr
}
jQuery('.current-price')[0].innerText.split(' ').join('')
if(jQuery('.was-price')[0]) jQuery('.was-price')[0].innerText.split(' ').join('')
else jQuery('.current-price')[0].innerText.split(' ').join('')
// jQuery('.was-price')[0].innerText.split(' ').join('') || jQuery('.current-price')[0].innerText.split(' ').join('')
if (jQuery('span.soldout span:first').text().trim().toLowerCase() == 'sold out') {
  $status = true
} else {
    $status = false;
}
if(jQuery('span.soldout')) jQuery('span.soldout span').text().trim()


if (jQuery(".Shopnow-arrangement-products-items:first .Shopnow-arrangement-products-item").length > 0 &&
 jQuery('.ProductGallery-carouselPlaceholder').length===0){
    $arr = [];
    jQuery(".Shopnow-arrangement-products-items:first .Shopnow-arrangement-products-item").each(function(){
        $title = jQuery(this).find('.Shopnow-arrangement-product-title').text().trim();
        $img = 'https:' + jQuery(this).find('img').attr('data-src');
        $link = jQuery(this).find('a:first').attr('href');
        $price = '$' + jQuery(this).find('.Shopnow-arrangement-product-subtitle').text().replace(/\s/g,'').split('$')[1]
        $arr.push([$title,$img,$link,$price]);
   });
   $arr
  }

  jQuery('.bundler-Summary-itemTitle:first').text().trim() || jQuery('#product-title').text().trim()

  jQuery('.bundler-Summary-itemSubtitle:first').text().trim() || jQuery('.shogun-root span').text().trim()
  
  if (jQuery('.bundler-Preview-imagePlaceholder').length > 0) 
    $img = jQuery('.bundler-Preview-imagePlaceholder').attr('data-bgset')
else
    $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
  'https:'+$img
else
  $img

  jQuery('.has-validPrice [data-type="price"]:first').text().trim() || jQuery('.Product-price').text().trim()

  if (jQuery('.bundler-Subsections-section:contains(Color)').length > 0){
	if(jQuery('.bundler-Subsections-section:contains(Color)').find('input:checked').length > 0){
		[jQuery('.bundler-Subsections-section:contains(Color)').find('input:checked').parent().attr('id').trim(),
    jQuery.makeArray(jQuery('.bundler-Subsections-section:contains(Color)').find('input').map(function(i,e){return jQuery(e).parent().attr('id').trim();}))]
    }else{
        ["Select Color",
        jQuery.makeArray(jQuery('.bundler-Subsections-section:contains(Color)').find('input').map(function(i,e){return jQuery(e).parent().attr('id').trim();}))]
    }}
    else{
    ['No Color',['No Color']]
    }


    if ((jQuery('.bundler-Subsections-section:contains(Color)').length > 0) && ($sarg != "Select Color") && ($sarg != "No Color")){
        jQuery('.bundler-Subsections-section:contains(Color)').find('input').each(function(){
           if (jQuery(this).parent().attr('id').trim() == $sarg){
               jQuery(this).children().trigger('click')
           }
        });
      }
      wait_for(function(){return true;})


      $val = false;
if ((jQuery('.bundler-Subsections-section:contains(Color)').length > 0) && ($sarg != "No Color") && ($sarg != "Select Color")){
 $val = true;
  jQuery('.bundler-Subsections-section:contains(Color) input').each(function(){
     if (jQuery(this).parent().attr('id').trim() == $sarg && !jQuery(this).attr('disabled')){
       $val = false;
     }
  });
} return $val

if (jQuery("#configurable_swatch_size li ").length > 0) {
    [
      jQuery(
        "#configurable_swatch_size li.selected"
      ).length > 0
        ? jQuery(
            "#configurable_swatch_size li.selected"
          )
          .find('.swatch-label')
            .text()
            .trim()
        : "Select Color",
      jQuery.makeArray(
        jQuery("#configurable_swatch_size li").map(function (
          i,
          e
        ) {
          if (jQuery(e).find('.swatch-label').text().trim()) return jQuery(e).find('.swatch-label').text().trim();
        })
      ),
    ];
  } else ["No Color", ["No Color"]];

  if (
    jQuery("#configurable_swatch_size li").length > 0 &&
    $sarg != "Select Color" &&
    $sarg != "No Color"
  ) {
    jQuery("#configurable_swatch_size li").each(function () {
      if (jQuery(this).find('.swatch-label').text().trim() == $sarg) jQuery(this).find('.swatch-label').click();
    });
  }

  $val = false;
if (
  jQuery("#configurable_swatch_size li").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $val = true;
  jQuery("#configurable_swatch_size li").each(function () {
    if (
      jQuery(this).text().trim() == $sarg &&
      !jQuery(this).find('.swatch-label').hasClass(".option-out-of-stock")
    ) {
      $val = false;
    }
  });
}
return $val;



// !!!!!!!!!!!!!!

//==================INPUT==========================

if (jQuery(".swatch:contains(Size)").length > 0) {
    [
      jQuery(".swatch:contains(Size) input:checked").length > 0
        ? jQuery(".swatch:contains(Size) input:checked").attr("value").trim()
        : "Select size",
      jQuery.makeArray(
        jQuery(".swatch:contains(Size) input").map(function (i, e) {
          if (jQuery(e).attr("value").trim() !== "")
            return jQuery(e).attr("value").trim();
        })
      ),
    ];
  } else ["No size", ["No size"]];
  //Length clicker
  if (
    jQuery(".swatch:contains(Size)").length > 0 &&
    $sarg != "Select size" &&
    $sarg != "No size"
  ) {
    jQuery(".swatch:contains(Size) input").each(function () {
      if (jQuery(this).attr("value").trim() == $sarg) jQuery(this)[0].click();
    });
  }
  wait_for(function () {
    return true;
  });
  //Length stock ctatus
  $val = false;
  if (
    jQuery(".swatch.clearfix").length > 0 &&
    $sarg != "No size" &&
    $sarg != "Select size"
  ) {
    $val = true;
    jQuery(".swatch.clearfix input").each(function () {
      if (
        jQuery(this).attr("value").trim() == $sarg &&
        !jQuery(this).hasClass("unavailable").length > 0
      ) {
        $val = false;
      }
    });
  }
  return $val;
  
  //   //=======================INPUT - Label===================================
  //   if (
  //     jQuery(
  //       "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //     ).length > 0
  //   ) {
  //     [
  //       jQuery(
  //         "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //       )
  //         .parent()
  //         .find("input:checked").length > 0
  //         ? jQuery(
  //             "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //           )
  //             .parent()
  //             .find("input:checked")
  //             .val()
  //             .trim()
  //         : "Select Color",
  //       jQuery.makeArray(
  //         jQuery(
  //           "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //         )
  //           .parent()
  //           .find("input")
  //           .map(function (i, e) {
  //             return jQuery(e).val().trim();
  //           })
  //       ),
  //     ];
  //   } else ["No Color", ["No Color"]];
  //   //Length clicker
  //   if (
  //     jQuery(
  //       "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //     ).parent().length > 0 &&
  //     $sarg != "Select Color" &&
  //     $sarg != "No Color"
  //   ) {
  //     jQuery(
  //       "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color):last"
  //     )
  //       .parent()
  //       .find("input")
  //       .each(function () {
  //         if (jQuery(this).val().trim() == $sarg) jQuery(this)[0].click();
  //       });
  //   }
  //   wait_for(function () {
  //     return true;
  //   });
  //   //Length stock ctatus
  //   $val = false;
  //   if (
  //     jQuery(
  //       "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color)"
  //     ).parent().length > 0 &&
  //     $sarg != "No Color" &&
  //     $sarg != "Select Color"
  //   ) {
  //     $val = true;
  //     jQuery(
  //       "#shopify-section-product-template .product-single .product-form .product-form__item label:contains(Color)"
  //     )
  //       .parent()
  //       .find("input")
  //       .each(function () {
  //         if (
  //           jQuery(this).val().trim() == $sarg &&
  //           !jQuery(this).attr("disabled")
  //         ) {
  //           $val = false;
  //         }
  //       });
  //   }
  //   return $val;
  // }

//   if (jQuery('.bundler-Subsections-section:contains(Color)').length > 0){
// 	if(jQuery('.bundler-Subsections-section:contains(Color)').find('input:checked').length > 0){
// 		[jQuery('.bundler-Subsections-section:contains(Color)').find('input:checked').parent().attr('id').trim(),
//     jQuery.makeArray(jQuery('.bundler-Subsections-section:contains(Color)').find('input').map(function(i,e){return jQuery(e).parent().attr('id').trim();}))]
//     }else{
//         ["Select Color",
//         jQuery.makeArray(jQuery('.bundler-Subsections-section:contains(Color)').find('input').map(function(i,e){return jQuery(e).parent().attr('id').trim();}))]
//     }}
//     else{
//     ['No Color',['No Color']]
//     }

//     if ((jQuery('.bundler-Subsections-section:contains(Color)').length > 0) && ($sarg != "Select Color") && ($sarg != "No Color")){
//         jQuery('.bundler-Subsections-section:contains(Color)').find('input').each(function(){
//            if (jQuery(this).parent().attr('id').trim() == $sarg){
//                jQuery(this).children().trigger('click')
//            }
//         });
//       }
//       wait_for(function(){return true;})

// if (jQuery("#configurable_swatch_size li ").length > 0) {
//     [
//       jQuery(
//         "#configurable_swatch_size li.selected"
//       ).length > 0
//         ? jQuery(
//             "#configurable_swatch_size li.selected"
//           )
//           .find('.swatch-label')
//             .text()
//             .trim()
//         : "Select Color",
//       jQuery.makeArray(
//         jQuery("#configurable_swatch_size li").map(function (
//           i,
//           e
//         ) {
//           if (jQuery(e).find('.swatch-label').text().trim()) return jQuery(e).find('.swatch-label').text().trim();
//         })
//       ),
//     ];
//   } else ["No Color", ["No Color"]];

//   if (
//     jQuery("#configurable_swatch_size li").length > 0 &&
//     $sarg != "Select Color" &&
//     $sarg != "No Color"
//   ) {
//     jQuery("#configurable_swatch_size li").each(function () {
//       if (jQuery(this).find('.swatch-label').text().trim() == $sarg) jQuery(this).find('.swatch-label').click();
//     });
//   }

$val = false;
if (
  jQuery("#configurable_swatch_size li").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $val = true;
  jQuery("#configurable_swatch_size li").each(function () {
    if (
      jQuery(this).text().trim() == $sarg &&
      !jQuery(this).hasClass(".not-available")
    ) {
      $val = false;
    }
  });
}
return $val;


// $val = false;
// if ((jQuery('.bundler-Subsections-section:contains(Color)').length > 0) && ($sarg != "No Color") && ($sarg != "Select Color")){
//  $val = true;
//   jQuery('.bundler-Subsections-section:contains(Color) input').each(function(){
//      if (jQuery(this).parent().attr('id').trim() == $sarg && !jQuery(this).attr('disabled')){
//        $val = false;
//      }
//   });
// } return $val


if (jQuery("#option-size").length > 0) {
    [
      jQuery("#option-size option:selected").text() != ""
        ? jQuery("#option-size option:selected")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Color",
      jQuery.makeArray(
        jQuery("#option-size option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Color", ["No Color"]];
  }
  //pa_sizes clicker
  if (
    jQuery("#option-size option").length > 0 &&
    $sarg != "Select Color" &&
    $sarg != "No Color"
  ) {
    jQuery("#option-size option").each(function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery("#option-size")
          .text(jQuery(this).text())
          .trigger("change");
      }
    });
  }
  wait_for(function () {
    return true;
  });
  //pa_sizes stock status
  $text = false;
  if (
    jQuery("#option-size").length > 0 &&
    $sarg != "No Color" &&
    $sarg != "Select Color"
  ) {
    $text = true;
    jQuery("#option-size option").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).text().trim().replace(/\s\s+/g, "").indexOf("out") >= 0
      ) {
        $text = false;
      }
    });
  }
  return $text;

  .selector-wrapper 



  if (jQuery("#option-size").length > 0) {
    [
      jQuery("#option-size option:selected").val() != ""
        ? jQuery("#option-size option:selected").text().trim()
        : "Select Size",
      jQuery.makeArray(
        jQuery("#option-size option").map(function (i, e) {
          if (jQuery(e).val() != "") return jQuery(e).text().trim();
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }
  //size clicker
  if (
    jQuery("#option-size").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
  ) {
    jQuery("#option-size option").each(function () {
      if (jQuery(this).text().trim() == $sarg) {
        jQuery("#option-size").val(jQuery(this).val()).trigger("change");
      }
    });
  }
  wait_for(function () {
    return true;
  });
  //size stock status
  $val = false;
  if (
    jQuery("#option-size").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $val = true;
    jQuery("#option-size option").each(function (index) {
      if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr("disabled")) {
        $val = false;
      }
    });
  }
  return $val;

 

  $val = false;
  if (
    jQuery(".swatch:contains(Size)").length > 0 &&
    $sarg != "No size" &&
    $sarg != "Select size"
  ) {
    $val = true;
    jQuery(".swatch:contains(Size) input").each(function () {
      if (
        jQuery(this).attr("value").trim() == $sarg &&
        !jQuery(this).hasClass("unavailable").length > 0
      ) {
        $val = false;
      }
    });
  }
  return $val;



  if (
    jQuery(".jshop_list_product .block_product").length > 0 &&
    jQuery(".jshop.productfull.vina_jsproduct").length === 0
  ) {
    $arr = [];
  
    jQuery(".jshop_list_product .block_product").each(function () {
      $title = jQuery(this).find(".product-name a").text().trim();
  
      $img = jQuery(this).find(".product-image img").attr("src");
  
      $link =
        "https://bestrocktshirts.com" +
        jQuery(this).find("a.product-image").attr("href");
  
      $price = jQuery(this).find(".price-box .price:last").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  if (
    jQuery("#product-loop .product-index").length > 0 &&
    jQuery(".zoomContainer").length === 0
  ) {
    $arr = [];
  
    jQuery("#product-loop .product-index").each(function () {
      $title = jQuery(this).find(".product-info h3").text().trim();
  
      $img = "https:" + jQuery(this).find(".prod-image img:first").attr("src");
  
      $link =
        "https://uoionline.com" +
        jQuery(this).find(".product-info a:first").attr("href");
  
      $price = jQuery(this).find(".product-info .money:first").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  
  if (
    jQuery(".product-list .product-block").length > 0 &&
    jQuery("#main-product-detail").length === 0
  ) {
    $arr = [];
  
    jQuery(".product-list .product-block").each(function () {
      $title = jQuery(this).find(".title:first").text().trim();
  
      $img = "https:" + jQuery(this).find(".image-label-wrap img:first").attr("src");
  
      $link =
        "https://shophenly.com/" +
        jQuery(this).find(".product-link").attr("href");
  
      $price = jQuery(this).find(".price:first").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  if (
    jQuery(".facets-facet-browse-items .facets-items-collection-view-cell-span3").length > 0 &&
    jQuery(".product-details-image-gallery").length === 0
  ) {
    $arr = [];
  
    jQuery(".facets-facet-browse-items .facets-items-collection-view-cell-span3").each(function () {
      $title = jQuery(this).find("a.facets-item-cell-grid-title").text().trim();
  
      $img = jQuery(this).find("img.facets-item-cell-grid-image").attr("src");
  
      $link = "https://www.thermoworks.com/" + jQuery(this).find("a.facets-item-cell-grid-title").attr("href");
  
      $price = jQuery(this).find(".product-views-price-lead").text().trim();
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price]);
    });
    $arr;
  }

  const jQuery = $d

  jQuery('.order-wizard-promocodeform-expander-head-toggle')[0].click()

//   if (jQuery('.product-image-thumbs img:first').length > 0) 
//     $img = jQuery('.product-image-thumbs img:first').attr('src')
// else
//     $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

// if ($img.indexOf("http") == -1)
//   'https:'+$img
// else
//   $img



  jQuery('.payment-due__price').text().trim()
  jQuery('.field__input-btn')

  $val = false;
  if (
    jQuery("#configurable_swatch_size li").length > 0 &&
    $sarg != "No Color" &&
    $sarg != "Select Color"
  ) {
    $val = true;
    jQuery("#configurable_swatch_size li").each(function () {
      if (
        jQuery(this).text().trim() == $sarg &&
        !jQuery(this).find('.swatch-label').hasClass(".option-out-of-stock")
      ) {
        $val = false;
      }
    });
  }
  return $val;