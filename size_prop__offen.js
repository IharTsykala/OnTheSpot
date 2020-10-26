// Select
if (jQuery(".selector-wrapper:contains(Size) option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Size) option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Size) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Size) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

//pa_Sizes clicker
if (
jQuery(".selector-wrapper:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery(".selector-wrapper:contains(Size) option").each(function () {
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
  jQuery(".selector-wrapper:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;


//


if (jQuery("select#size option").length > 0) {
  [
    jQuery("select#size option:selected").text() != ""
      ? jQuery("select#size option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("select#size option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

if (
  jQuery("select#size option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery("select#size option").each(function () {
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
    jQuery("select#size option").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("select#size option").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('disabled')
      ) {
        $text = false;
      }
    });
  }
  return $text;



  if (jQuery("div.product-info__variants_items:contains(Size) input").length > 0) {
    ;[
      jQuery("div.product-info__variants_items:contains(Size) input:checked").length > 0
        ? jQuery("div.product-info__variants_items:contains(Size) input:checked")
        .attr("value")
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery("div.product-info__variants_items:contains(Size) input").map(function (i, e) {
      if (jQuery(e).attr("value") != "")
        return jQuery(e).attr("value").replace(/\s\s+/g, "")
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }
  
  if (jQuery("div.product-info__variants_items:contains(Size) input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery("div.product-info__variants_items:contains(Size) input").each(function () {
  if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
    jQuery(this).next()[0].click()
  }
  })
  }
  wait_for(function () {
  return true
  })
  
  $text = false;
  if (
    jQuery("div.product-info__variants_items:contains(Size) input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.product-info__variants_items:contains(Size) input").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;


  //


  if (jQuery("div.product__variants:contains(Size) .swatch-size input").length > 0) {
    ;[
      jQuery("div.product__variants:contains(Size) .swatch-size input:checked").length > 0
        ? jQuery("div.product__variants:contains(Size) .swatch-size input:checked")
        .next()
        .text().trim()
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery("div.product__variants:contains(Size) .swatch-size input").map(function (i, e) {
      if (jQuery(e).next().text().trim() != "")
        return jQuery(e).next().text().trim()
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }
  
  if (jQuery("div.product__variants:contains(Size) .swatch-size input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery("div.product__variants:contains(Size) .swatch-size input").each(function () {
  if (jQuery(this).next().text().trim() == $sarg) {
    jQuery(this).next().text().trim()[0].click()
  }
  })
  }
  wait_for(function () {
  return true
  })
  
  $text = false;
  if (
    jQuery("div.product__variants:contains(Size) .swatch-size input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.product__variants:contains(Size) .swatch-size input").each(function (index) {
      if (
        jQuery(this).next().text().trim() == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;


  //



  if (jQuery(".product-details__section:contains(Size) .product-details__option input").length > 0) {
    ;[
      jQuery(".product-details__section:contains(Size) .product-details__option input:checked").length > 0
        ? jQuery(".product-details__section:contains(Size) .product-details__option input:checked")
        .next()
        .text().trim()
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery(".product-details__section:contains(Size) .product-details__option input").map(function (i, e) {
      if (jQuery(e).next().text().trim() != "")
        return jQuery(e).next().text().trim()
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }
  
  if (jQuery(".product-details__section:contains(Size) .product-details__option input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery(".product-details__section:contains(Size) .product-details__option input").each(function () {
  if (jQuery(this).next().text().trim() == $sarg) {
    jQuery(this).next().text().trim()[0].click()
  }
  })
  }
  wait_for(function () {
  return true
  })
  
  $text = false;
  if (
    jQuery(".product-details__section:contains(Size) .product-details__option input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery(".product-details__section:contains(Size) .product-details__option input").each(function (index) {
      if (
        jQuery(this).next().text().trim() == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;




  // 



  // Select
  if (jQuery("table.variations:contains(sizes) option").length > 0) {
    [
      jQuery("table.variations:contains(sizes) option:selected").text() != ""
        ? jQuery("table.variations:contains(sizes) option:selected")
            .text()
            .trim()
            // .replace(/\s\s+/g, "")
        : "Select sizes",
      jQuery.makeArray(
        jQuery("table.variations:contains(sizes) option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No sizes", ["No sizes"]];
  }

  //pa_sizess clicker
if (
  jQuery("table.variations:contains(sizes) option").length > 0 &&
  $sarg != "Select sizes" &&
  $sarg != "No sizes"
) {
  jQuery("table.variations:contains(sizes) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
        jQuery(this).trigger("change");
    }
  });
}
wait_for(function () {
  return true;
});
//pa_sizess stock status
$text = false;
if (
  jQuery("table.variations:contains(sizes) option").length > 0 &&
  $sarg != "No sizes" &&
  $sarg != "Select sizes"
) {
  $text = true;
  jQuery("table.variations:contains(sizes) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;


