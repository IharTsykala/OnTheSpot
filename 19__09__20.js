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
  jQuery('.input-box .super-attribute-select option')

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