
div.radio-wrapper:contains(iPhone)


if (jQuery("div.radio-wrapper:contains(Design) option").length > 0) {
  [
    jQuery("div.radio-wrapper:contains(Design) option:selected").text() != ""
      ? jQuery("div.radio-wrapper:contains(Design) option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("div.radio-wrapper:contains(Design) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

if (
  jQuery("div.radio-wrapper:contains(Design) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery("div.radio-wrapper:contains(Design) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change");
    }
  });
  }
  wait_for(function () {
  return true;
  });
  
  $text = false;
  if (
    jQuery("div.radio-wrapper:contains(Design) option").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.radio-wrapper:contains(Design) option").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('disabled')
      ) {
        $text = false;
      }
    });
  }
  return $text;

//////////////////////////////////////////////////
////////////////////////////////////////////////////

if (jQuery(".select:contains(Metal Color) .selector-wrapper option").length > 0) {
  [
    jQuery(".select:contains(Metal Color) .selector-wrapper option:selected").text() != ""
      ? jQuery(".select:contains(Metal Color) .selector-wrapper option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery(".select:contains(Metal Color) .selector-wrapper option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Metal Color", ["No Metal Color"]];
}

//pa_Metal Colors clicker
if (
jQuery(".select:contains(Metal Color) .selector-wrapper option").length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery(".select:contains(Metal Color) .selector-wrapper option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
    jQuery(this).trigger("change");
  }
});
}
wait_for(function () {
return true;
});

$text = false;
if (
  jQuery(".select:contains(Metal Color) .selector-wrapper option").length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery(".select:contains(Metal Color) .selector-wrapper option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;

document.querySelector('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]')

if (jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').length > 0) {
  [
    jQuery(
      'div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) span:last'
    ).length > 0
      ?jQuery(
        'div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) span:last'
        )
        .text().trim().replace(/\s\s+/g, "")
      : "Select Talla",
    jQuery.makeArray(
      jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Talla", ["No Talla"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').length > 0 &&
  $sarg != "Select Talla" &&
  $sarg != "No Talla"
) {
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').length > 0 &&
  $sarg != "No Talla" &&
  $sarg != "Select Talla"
) {
  $text = true;
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Talla) [role="button"]').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;