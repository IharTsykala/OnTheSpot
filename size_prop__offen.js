// Select
if (jQuery(".selector-wrapper:contains(SIZE):first option").length > 0) {
  ;[
    jQuery(".selector-wrapper:contains(SIZE):first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(SIZE):first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select SIZE",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(SIZE):first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No SIZE", ["No SIZE"]]
}

//pa_SIZEs clicker
if (
  jQuery(".selector-wrapper:contains(SIZE):first option").length > 0 &&
  $sarg != "Select SIZE" &&
  $sarg != "No SIZE"
) {
  jQuery(".selector-wrapper:contains(SIZE):first option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".selector-wrapper:contains(SIZE):first option").length > 0 &&
  $sarg != "No SIZE" &&
  $sarg != "Select SIZE"
) {
  $text = true
  jQuery(".selector-wrapper:contains(SIZE):first option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////

/////////////////////////////////////////////////
// Select
if (jQuery(".product-size-selector:contains(Size):first option").length > 0) {
  ;[
    jQuery(".product-size-selector:contains(Size):first option:selected").text() != ""
      ? jQuery(".product-size-selector:contains(Size):first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".product-size-selector:contains(Size):first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

//pa_Sizes clicker
if (
  jQuery(".product-size-selector:contains(Size):first option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".product-size-selector:contains(Size):first option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".product-size-selector:contains(Size):first option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".product-size-selector:contains(Size):first option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////

// Select
if (jQuery(".selector-wrapper:contains(size):first option").length > 0) {
  ;[
    jQuery(".selector-wrapper:contains(size):first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(size):first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select size",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(size):first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No size", ["No size"]]
}

//pa_sizes clicker
if (
  jQuery(".selector-wrapper:contains(size):first option").length > 0 &&
  $sarg != "Select size" &&
  $sarg != "No size"
) {
  jQuery(".selector-wrapper:contains(size):first option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".selector-wrapper:contains(size):first option").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $text = true
  jQuery(".selector-wrapper:contains(size):first option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

//////////////////////////////////////////

// Select
if (jQuery(".radio-wrapper:contains(Size) option").length > 0) {
  ;[
    jQuery(".radio-wrapper:contains(Size) option:selected").text() != ""
      ? jQuery(".radio-wrapper:contains(Size) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".radio-wrapper:contains(Size) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

//pa_Sizes clicker
if (
  jQuery(".radio-wrapper:contains(Size) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".radio-wrapper:contains(Size) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".radio-wrapper:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".radio-wrapper:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

//////////////////////////////////////////////

//

if (
  jQuery('select[id="product-select-Size"]:first option')
    .length > 0
) {
  ;[
    jQuery(
      'select[id="product-select-Size"]:first option:selected'
    ).text() != ""
      ? jQuery(
          'select[id="product-select-Size"]:first option:selected'
        )
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(
        'select[id="product-select-Size"]:first option'
      ).map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('select[id="product-select-Size"]:first option')
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('select[id="product-select-Size"]:first option').each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('select[id="product-select-Size"]:first option')
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('select[id="product-select-Size"]:first option').each(
    function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr("disabled")
      ) {
        $text = false
      }
    }
  )
}
return $text

if (jQuery("div.radio-wrapper:contains(Size):first input").length > 0) {
  ;[
    jQuery("div.radio-wrapper:contains(Size):first input:checked").length > 0
      ? jQuery("div.radio-wrapper:contains(Size):first input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.radio-wrapper:contains(Size):first input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

////////////

if (
  jQuery("div.radio-wrapper:contains(Size):first input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.radio-wrapper:contains(Size):first input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

// /////////////////////

$text = false
if (
  jQuery("div.radio-wrapper:contains(Size):first input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.radio-wrapper:contains(Size):first input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().hasClass("soldout")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////

if (jQuery(".asc-product-size-container:contains(Size) input").length > 0) {
  ;[
    jQuery(".asc-product-size-container:contains(Size) input:checked").length >
    0
      ? jQuery(".asc-product-size-container:contains(Size) input:checked")
          .attr("data-size-value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".asc-product-size-container:contains(Size) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("data-size-value") != "")
          return jQuery(e).attr("data-size-value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery(".asc-product-size-container:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".asc-product-size-container:contains(Size) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".asc-product-size-container:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".asc-product-size-container:contains(Size) input").each(function (
    index
  ) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr(".data-availability") === "soldout"
    ) {
      $text = false
    }
  })
}
return $text

////////////////////////////////////////////

if (jQuery("div.swatch:contains(Size) input").length > 0) {
  ;[
    jQuery("div.swatch:contains(Size) input:checked").length > 0
      ? jQuery("div.swatch:contains(Size) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.swatch:contains(Size) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.swatch:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.swatch:contains(Size) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.swatch:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.swatch:contains(Size) input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

// ////////////////////////

//

if (
  jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input")
    .length > 0
) {
  ;[
    jQuery(
      "div.product__variants-wrapper:contains(Size) .swatch-size input:checked"
    ).length > 0
      ? jQuery(
          "div.product__variants-wrapper:contains(Size) .swatch-size input:checked"
        )
          .next()
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(
        "div.product__variants-wrapper:contains(Size) .swatch-size input"
      ).map(function (i, e) {
        if (jQuery(e).next().text().trim() != "")
          return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input")
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(
    "div.product__variants-wrapper:contains(Size) .swatch-size input"
  ).each(function () {
    if (jQuery(this).next().text().trim() == $sarg) {
      jQuery(this).next().text().trim()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input")
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(
    "div.product__variants-wrapper:contains(Size) .swatch-size input"
  ).each(function (index) {
    if (
      jQuery(this).next().text().trim() == $sarg &&
      !jQuery(this).attr(".data-availability") === "soldout"
    ) {
      $text = false
    }
  })
}
return $text

//////////////////////////////////////////////
/////////////////////////////////////////////////

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

if (
  jQuery(
    ".product-details__section:contains(Size) .product-details__option input"
  ).length > 0
) {
  ;[
    jQuery(
      ".product-details__section:contains(Size) .product-details__option input:checked"
    ).length > 0
      ? jQuery(
          ".product-details__section:contains(Size) .product-details__option input:checked"
        )
          .next()
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(
        ".product-details__section:contains(Size) .product-details__option input"
      ).map(function (i, e) {
        if (jQuery(e).next().text().trim() != "")
          return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery(
    ".product-details__section:contains(Size) .product-details__option input"
  ).length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(
    ".product-details__section:contains(Size) .product-details__option input"
  ).each(function () {
    if (jQuery(this).next().text().trim() == $sarg) {
      jQuery(this).next().text().trim()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(
    ".product-details__section:contains(Size) .product-details__option input"
  ).length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(
    ".product-details__section:contains(Size) .product-details__option input"
  ).each(function (index) {
    if (
      jQuery(this).next().text().trim() == $sarg &&
      !jQuery(this).attr(".data-availability") === "soldout"
    ) {
      $text = false
    }
  })
}
return $text

//

// Select
if (jQuery("table.variations tr:contains(Size) option").length > 0) {
  ;[
    jQuery("table.variations tr:contains(Size) option:selected").text() != ""
      ? jQuery("table.variations tr:contains(Size) option:selected")
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery("table.variations tr:contains(Size) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

//pa_Sizes clicker
if (
  jQuery("table.variations tr:contains(Size) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("table.variations tr:contains(Size) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})
//pa_Sizes stock status
$text = false
if (
  jQuery("table.variations tr:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("table.variations tr:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

if (jQuery("fieldset:contains(SIZE:) input").length > 0) {
  ;[
    jQuery("fieldset:contains(SIZE:) input.ml-product-optionSelected").attr(
      "alt"
    ) != (undefined && "")
      ? jQuery("fieldset:contains(SIZE:) input.ml-product-optionSelected")
          .attr("alt")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("fieldset:contains(SIZE:) input").map(function (i, e) {
        if (jQuery(e).attr("alt") != "")
          return jQuery(e).attr("alt").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery("fieldset:contains(SIZE:) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("fieldset:contains(SIZE:) input").each(function () {
    if (jQuery(this).attr("alt").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("fieldset:contains(SIZE:) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery("fieldset:contains(SIZE:) input").each(function (index) {
    if (
      jQuery(this).attr("alt") == $sarg &&
      !jQuery(this).attr("alt") === "disabled"
    ) {
      $text = false
    }
  })
}
return $text

////////////////////////////////

if (jQuery("div.product-form__option:contains(Size) input").length > 0) {
  ;[
    jQuery("div.product-form__option:contains(Size) input:checked").length > 0
      ? jQuery("div.product-form__option:contains(Size) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.product-form__option:contains(Size) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.product-form__option:contains(Size) input").each(function () {
    if (jQuery(this).attr("value") == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.product-form__option:contains(Size) input").each(function (
    index
  ) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////

$text = false
if (
  jQuery("select#pa_volume option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("select#pa_volume option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

// Select
if (jQuery(".variation:contains(Size) option").length > 0) {
  ;[
    jQuery(".variation:contains(Size) option:selected").text() != ""
      ? jQuery(".variation:contains(Size) option:selected").text().trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(".variation:contains(Size) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

//pa_Sizes clicker
if (
  jQuery(".variation:contains(Size) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".variation:contains(Size) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})
//pa_Sizes stock status
$text = false
if (
  jQuery(".variation:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".variation:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////////
/////////////////////////////////////////////////////

if (jQuery("div.ProductForm__Option:contains(Size) input").length > 0) {
  ;[
    jQuery("div.ProductForm__Option:contains(Size) input:checked").length > 0
      ? jQuery("div.ProductForm__Option:contains(Size) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.ProductForm__Option:contains(Size) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.ProductForm__Option:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.ProductForm__Option:contains(Size) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.ProductForm__Option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.ProductForm__Option:contains(Size) input").each(function (index) {
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

////////////////////////////////////////////////////
/////////////////////////////////////////////////////

if (jQuery("div.ProductForm__Option:contains(size) input").length > 0) {
  ;[
    jQuery("div.ProductForm__Option:contains(size) input:checked").length > 0
      ? jQuery("div.ProductForm__Option:contains(size) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.ProductForm__Option:contains(size) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No size", ["No size"]]
}

if (
  jQuery("div.ProductForm__Option:contains(size) input").length > 0 &&
  $sarg != "Select size" &&
  $sarg != "No size"
) {
  jQuery("div.ProductForm__Option:contains(size) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.ProductForm__Option:contains(size) input").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $text = true
  jQuery("div.ProductForm__Option:contains(size) input").each(function (index) {
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

////////////////////////////////////////////////////

////////////////////////////////////////////////

if (jQuery(".variant-wrapper:contains(Size) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Size) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Size) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Size) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.product-form__option:contains(Size) input").each(function () {
    if (jQuery(this).attr("value") == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.product-form__option:contains(Size) input").each(function (
    index
  ) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability") === "soldout"
    ) {
      $text = false
    }
  })
}
return $text

//////////////////////////////////////////////////////
///////////////////////////////////////////////////

if (jQuery(".selector-wrapper:contains(Size) select:first option").length > 0) {
  ;[
    jQuery(
      ".selector-wrapper:contains(Size) select:first option:selected"
    ).text() != ""
      ? jQuery(".selector-wrapper:contains(Size) select:first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Size) select:first option").map(
        function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "")
        }
      )
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery(".selector-wrapper:contains(Size) select:first option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".selector-wrapper:contains(Size) select:first option").each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".selector-wrapper:contains(Size) select:first option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".selector-wrapper:contains(Size) select:first option").each(function (
    index
  ) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

// button button
if (jQuery(".OptionSelector .Popover__ValueList:first button").length > 0) {
  ;[
    jQuery(".OptionSelector .Popover__ValueList:first button.is-selected").length > 0
      ? jQuery(".OptionSelector .Popover__ValueList:first button.is-selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".OptionSelector .Popover__ValueList:first button").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".OptionSelector .Popover__ValueList:first button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".OptionSelector .Popover__ValueList:first button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".OptionSelector .Popover__ValueList:first button").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".OptionSelector .Popover__ValueList:first button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false
    }
  })
}
return $text

// button button
if (jQuery("#sizeColumn:last button").length > 0) {
  ;[
    jQuery("#sizeColumn:last button.sizeSelected").length > 0
      ? jQuery("#sizeColumn:last button.sizeSelected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("#sizeColumn:last button").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery("#sizeColumn:last button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("#sizeColumn:last button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("#sizeColumn:first button").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("#sizeColumn:first button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////
/////////////////////////////////////
///////////////////////

// for li a

if (jQuery("ul.sizes a").length > 0) {
  ;[
    jQuery("ul.sizes a.variant_options_list__selected").length > 0
      ? jQuery("ul.sizes a.variant_options_list__selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul.sizes a").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery("ul.sizes a").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul.sizes a").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery("ul.sizes a").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery("ul.sizes a").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

////////////////////////
///////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////////////

//

if (jQuery('select[id="ProductSelect-product-template-option-1"] option').length > 0) {
  ;[
    jQuery('select[id="ProductSelect-product-template-option-1"] option:selected').text() != ""
      ? jQuery('select[id="ProductSelect-product-template-option-1"] option:selected').text().trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery('select[id="ProductSelect-product-template-option-1"] option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('select[id="ProductSelect-product-template-option-1"] option').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('select[id="ProductSelect-product-template-option-1"] option').each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('select[id="ProductSelect-product-template-option-1"] option').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('select[id="ProductSelect-product-template-option-1"] option').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////////
/////////////////////////////////////////////////////

////////////////////////////////////
//////////////////////

if (jQuery("fieldset.single-option-radio input").length > 0) {
  ;[
    jQuery("fieldset.single-option-radio input:checked").length > 0
      ? jQuery("fieldset.single-option-radio input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("fieldset.single-option-radio input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

////////////

////

if (
  jQuery("fieldset.single-option-radio input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("fieldset.single-option-radio input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

// /////////////////////

$text = false
if (
  jQuery("fieldset.single-option-radio input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("fieldset.single-option-radio input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("soldout")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////
///////////////////////////////////////////////////

// for li a

if (jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").length > 0) {
  ;[
    jQuery(".attr-wrap:contains(размер) ul.js-attr-list li.active").length > 0
      ? jQuery(".attr-wrap:contains(размер) ul.js-attr-list li.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".attr-wrap:contains(размер) ul.js-attr-list li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

//////////////////////////////////////////////////
//////////////////////////////////////////////////////////

////////////////////////////////////////////

if (jQuery("div.swatch input").length > 0) {
  ;[
    jQuery("div.swatch input:checked").length > 0
      ? jQuery("div.swatch input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.swatch input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.swatch input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.swatch input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.swatch input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.swatch input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

// ////////////////////////

// div div span

if (jQuery(".option:contains(Size) div.swatch-Size span").length > 0) {
  ;[
    jQuery(".option:contains(Size) div.swatch-Size.selected").length > 0
      ? jQuery(".option:contains(Size) div.swatch-Size.selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".option:contains(Size) div.swatch-Size span").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".swatches:last div.swatch-Size span").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatches:last div.swatch-Size span").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery("..swatches:last div.swatch-Size span").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".swatches:last div.swatch-Size span).each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

////////////////////////////

// button button
if (jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').length > 0) {
  ;[
    jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button.is-selected').length > 0
      ? jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button.is-selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('[id="popover-5983025791146-product-template-size"] .Popover__ValueList:last button').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////////
///////////////////////////////////

// ul li Input 

if (jQuery("ul.SizeSwatchList input").length > 0) {
  ;[
    jQuery("ul.SizeSwatchList input:checked").length > 0
      ? jQuery("ul.SizeSwatchList input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("ul.SizeSwatchList input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery("ul.SizeSwatchList input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery("ul.SizeSwatchList input").each(function () {
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
  jQuery("ul.SizeSwatchList input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("ul.SizeSwatchList input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;


//////////////////////////////
////////////////////////////////////////////


// for ul li

if (jQuery("ul.product-types-list:first li").length > 0) {
  ;[
    jQuery("ul.product-types-list:first li.active").length > 0
      ? jQuery("ul.product-types-list:first li.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul.product-types-list:first li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery("ul.product-types-list:first li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul.product-types-list:first li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery("ul.product-types-list:first li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery("ul.product-types-list:first li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

//////////////////////////////
//////////////////////////
///////////

if (
  jQuery('.select:contains(Size) option')
    .length > 0
) {
  ;[
    jQuery(
      '.select:contains(Size) option:.selected'
    ).text() != ""
      ? jQuery(
          '.select:contains(Size) option:.selected'
        )
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(
        '.select:contains(Size) option'
      ).map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('.select:contains(Size) option')
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('.select:contains(Size) option').each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('.select:contains(Size) option')
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('.select:contains(Size) option').each(
    function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr("disabled")
      ) {
        $text = false
      }
    }
  )
}
return $text

//////////////////////////////////////////
////////////////////////////

if (jQuery(".variant-wrapper:contains(Size) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Size) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Size) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Size) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".variant-wrapper:contains(Size) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".variant-wrapper:contains(Size) input").each(function () {
    if (jQuery(this).attr("value") == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".variant-wrapper:contains(Size) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery(".variant-wrapper:contains(Size) input").each(function (
    index
  ) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////////////////////////////////////
/////////////////


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
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;

/////////////////////////////

// div button
if (jQuery(".swatch:contains(Size) button").length > 0) {
  [
    jQuery(
      ".swatch:contains(Size) button.active"
    ).length > 0
      ? jQuery(".swatch:contains(Size) button.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Size) button").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery(".swatch:contains(Size) button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatch:contains(Size) button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery(".swatch:contains(Size) button").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".swatch:contains(Size) button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

///////////////////////////////////////////////////////
//////////////////

// div label

if (jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").length > 0) {
  [
    jQuery(
      "div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label.active"
    ).length > 0
      ? jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.shop-panel__variant-detail:contains(Size) .shop-panel__variant-value-list label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

///////////////////////////////////////////////////////
//////////////////

//////////////////

// div a text trim

if (jQuery('div.colors-wrapper a').length > 0) {
  [
    jQuery(
      'div.colors-wrapper a:first'
    ).length > 0
      ? jQuery('div.colors-wrapper a:first')
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery('div.colors-wrapper a').map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery('div.colors-wrapper a').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('div.colors-wrapper a').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery('div.colors-wrapper a').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery('div.colors-wrapper a').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

////////////////

// div input 


if (jQuery('div[data-option-index="1"] input').length > 0) {
  ;[
    jQuery('div[data-option-index="1"] input:checked').length > 0
      ? jQuery('div[data-option-index="1"] input:checked')
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery('div[data-option-index="1"] input').map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

////

if (
  jQuery('div[data-option-index="1"] input').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('div[data-option-index="1"] input').each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('div[data-option-index="1"] input').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('div[data-option-index="1"] input').each(function (index) {
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

// /////////////////////
////////////////////////////

if (jQuery('.variant-wrapper fieldset[name="Size"] input').length > 0) {
  ;[
    jQuery('.variant-wrapper fieldset[name="Size"] input:checked').length > 0
      ? jQuery('.variant-wrapper fieldset[name="Size"] input:checked')
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery('.variant-wrapper fieldset[name="Size"] input').map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery('.variant-wrapper fieldset[name="Size"] input').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('.variant-wrapper fieldset[name="Size"] input').each(function () {
    if (jQuery(this).attr("value") == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('.variant-wrapper fieldset[name="Size"] input').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('.variant-wrapper fieldset[name="Size"] input').each(function (
    index
  ) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////////////////////////////////////
// Select 

if (
  jQuery('select[id="SingleOptionSelector-1"]:first option')
    .length > 0
) {
  ;[
    jQuery(
      'select[id="SingleOptionSelector-1"]:first option:selected'
    ).text() != ""
      ? jQuery(
          'select[id="SingleOptionSelector-1"]:first option:selected'
        )
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(
        'select[id="SingleOptionSelector-1"]:first option'
      ).map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('select[id="SingleOptionSelector-1"]:first option')
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('select[id="SingleOptionSelector-1"]:first option').each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('select[id="SingleOptionSelector-1"]:first option')
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('select[id="SingleOptionSelector-1"]:first option').each(
    function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr("disabled")
      ) {
        $text = false
      }
    }
  )
}
return $text
// ////////////////////////

// div div 

if (jQuery('.e1uv3ko12:first div.e1uv3ko13').length > 0) {
  ;[
    jQuery('.e1uv3ko12:first div.e1uv3ko13 .css-1ooo6qt').length > 0
      ? jQuery('.e1uv3ko12:first div.e1uv3ko13 .css-1ooo6qt')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('.e1uv3ko12:first div.e1uv3ko13').map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery('.e1uv3ko12:first div.e1uv3ko13').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('.e1uv3ko12:first div.e1uv3ko13').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery('.e1uv3ko12:first div.e1uv3ko13').length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery('.e1uv3ko12:first div.e1uv3ko13').each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val
///////////////////////////////////////////////////

// Select
if (jQuery(".variant-wrapper:contains(Size) option").length > 0) {
  [
    jQuery(".variant-wrapper:contains(Size) option:selected").text() != ""
      ? jQuery(".variant-wrapper:contains(Size) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Size) option").map(function (i, e) {
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
jQuery(".variant-wrapper:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery(".variant-wrapper:contains(Size) option").each(function () {
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
  jQuery(".variant-wrapper:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".variant-wrapper:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;

////////////////////////////////////

// Select
if (jQuery(".types-item:contains(Size) option").length > 0) {
  [
    jQuery(".types-item:contains(Size) option:selected").text() != ""
      ? jQuery(".types-item:contains(Size) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".types-item:contains(Size) option").map(function (i, e) {
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
jQuery(".types-item:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery(".types-item:contains(Size) option").each(function () {
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
  jQuery(".types-item:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".types-item:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;

////////////////////////////////////
////////////////////////////
// Div div input

if (jQuery('[data-option="size"]:first input').length > 0) {
  ;[
    jQuery('[data-option="size"]:first input:checked').length > 0
      ? jQuery('[data-option="size"]:first input:checked')
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery('[data-option="size"]:first input').map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).attr("value")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery('[data-option="size"]:first input').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('[data-option="size"]:first input').each(function () {
    if (jQuery(this).attr("value") == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('[data-option="size"]:first input').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('[data-option="size"]:first input').each(function (
    index
  ) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

///////////////////////////////////////////////////////////////////////////
// selector-wrapper input 

if (jQuery("div.selector-wrapper:first input").length > 0) {
  ;[
    jQuery("div.selector-wrapper:first input:checked").length > 0
      ? jQuery("div.selector-wrapper:first input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.selector-wrapper:first input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

////////////

if (
  jQuery("div.selector-wrapper:first input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.selector-wrapper:first input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

// /////////////////////

$text = false
if (
  jQuery("div.selector-wrapper:first input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.selector-wrapper:first input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().hasClass("soldout")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// selector-wrapper input 

if (jQuery("div.selector-wrapper:contains(Size):first input").length > 0) {
  ;[
    jQuery("div.selector-wrapper:contains(Size):first input:checked").length > 0
      ? jQuery("div.selector-wrapper:contains(Size):first input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.selector-wrapper:contains(Size):first input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

////////////

if (
  jQuery("div.selector-wrapper:contains(Size):first input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.selector-wrapper:contains(Size):first input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

// /////////////////////

$text = false
if (
  jQuery("div.selector-wrapper:contains(Size):first input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.selector-wrapper:contains(Size):first input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().hasClass("soldout")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////


// ul li Input 

if (jQuery(".product-option--size ul input").length > 0) {
  ;[
    jQuery(".product-option--size ul input:checked").length > 0
      ? jQuery(".product-option--size ul input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".product-option--size ul input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery(".product-option--size ul input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery(".product-option--size ul input").each(function () {
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
  jQuery(".product-option--size ul input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".product-option--size ul input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;


//////////////////////////////
////////////////////////////////////////////


// for ul li

if (jQuery(".swatch:contains(Size) li").length > 0) {
  ;[
    jQuery(".swatch:contains(Size) li.is-selected").length > 0
      ? jQuery(".swatch:contains(Size) li.is-selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Size) li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".swatch:contains(Size) li").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatch:contains(Size) li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".swatch:contains(Size) li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".swatch:contains(Size) li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

///////////////////////////////////////////////////////////////////////

// Select
if (jQuery('[id="product-options-wrapper"]:contains(SIZE) option').length > 0) {
  ;[
    jQuery('[id="product-options-wrapper"]:contains(SIZE) option:selected').text() != ""
      ? jQuery('[id="product-options-wrapper"]:contains(SIZE) option:selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select SIZE",
    jQuery.makeArray(
      jQuery('[id="product-options-wrapper"]:contains(SIZE) option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No SIZE", ["No SIZE"]]
}

//pa_SIZEs clicker
if (
  jQuery('[id="product-options-wrapper"]:contains(SIZE) option').length > 0 &&
  $sarg != "Select SIZE" &&
  $sarg != "No SIZE"
) {
  jQuery('[id="product-options-wrapper"]:contains(SIZE) option').each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('[id="product-options-wrapper"]:contains(SIZE) option').length > 0 &&
  $sarg != "No SIZE" &&
  $sarg != "Select SIZE"
) {
  $text = true
  jQuery('[id="product-options-wrapper"]:contains(SIZE) option').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////

/////////////////////////////

// div button
if (jQuery(".size-button-container button").length > 0) {
  [
    jQuery(
      ".size-button-container button.toggle-size-button"
    ).length > 0
      ? jQuery(".size-button-container button.toggle-size-button")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".size-button-container button").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery(".size-button-container button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".size-button-container button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery(".size-button-container button").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".size-button-container button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

//Select

if (
  jQuery('select[id="Size"]:first option')
    .length > 0
) {
  ;[
    jQuery(
      'select[id="Size"]:first option:selected'
    ).text() != ""
      ? jQuery(
          'select[id="Size"]:first option:selected'
        )
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(
        'select[id="Size"]:first option'
      ).map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('select[id="Size"]:first option')
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('select[id="Size"]:first option').each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('select[id="Size"]:first option')
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('select[id="Size"]:first option').each(
    function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr("disabled")
      ) {
        $text = false
      }
    }
  )
}
return $text

///////////////////////////////////////////////////////

//Select

if (
  jQuery('select[name="id"]:first option')
    .length > 0
) {
  ;[
    jQuery(
      'select[name="id"]:first option:selected'
    ).text() != ""
      ? jQuery(
          'select[name="id"]:first option:selected'
        )
          .text()
          .trim()
      : // .replace(/\s\s+/g, "")
        "Select Size",
    jQuery.makeArray(
      jQuery(
        'select[name="id"]:first option'
      ).map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery('select[name="id"]:first option')
    .length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('select[name="id"]:first option').each(
    function () {
      if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).trigger("change")
      }
    }
  )
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery('select[name="id"]:first option')
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery('select[name="id"]:first option').each(
    function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr("disabled")
      ) {
        $text = false
      }
    }
  )
}
return $text

////////////////////////////////////////////

if (jQuery("div.swatches__container:contains(Size) input").length > 0) {
  ;[
    jQuery("div.swatches__container:contains(Size) input:checked").length > 0
      ? jQuery("div.swatches__container:contains(Size) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.swatches__container:contains(Size) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

if (
  jQuery("div.swatches__container:contains(Size) input").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.swatches__container:contains(Size) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("div.swatches__container:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery("div.swatches__container:contains(Size) input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr(".data-availability")
    ) {
      $text = false
    }
  })
}
return $text

// ////////////////////////
///////////////////////

if (jQuery(".swatch-sizes input").length > 0) {
  ;[
    jQuery(".swatch-sizes input:checked").length > 0
      ? jQuery(".swatch-sizes input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".swatch-sizes input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery(".swatch-sizes input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery(".swatch-sizes input").each(function () {
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
  jQuery(".swatch-sizes input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".swatch-sizes input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;


///////////////////////////

//////////////////////////////////////////////////////////
// for ul li a

if (jQuery(".pt-wrapper:contains(Size) li").length > 0) {
  ;[
    jQuery(".pt-wrapper:contains(Size) li.active a").length > 0
      ? jQuery(".pt-wrapper:contains(Size) li.active a")
          .attr('data-value')
          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".pt-wrapper:contains(Size) li a").map(function (i, e) {
        if (jQuery(e).attr('data-value'))
          return jQuery(e).attr('data-value')
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".pt-wrapper:contains(Size) li a").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".pt-wrapper:contains(Size) li a").each(function () {
    if (jQuery(e).attr('data-value') == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".pt-wrapper:contains(Size) li a").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".pt-wrapper:contains(Size) li a").each(function () {
    if (
      jQuery(this).attr('data-value') == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val
//////////////////////////////////////
// ////////////////////////

// div div 

if (jQuery('[attribute-code="size"] div.swatch-option').length > 0) {
  ;[
    jQuery('[attribute-code="size"] div.swatch-option.selected').length > 0
      ? jQuery('[attribute-code="size"] div.swatch-option.selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('[attribute-code="size"] div.swatch-option').map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery('[attribute-code="size"] div.swatch-option').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('[attribute-code="size"] div.swatch-option').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery('[attribute-code="size"] div.swatch-option').length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery('[attribute-code="size"] div.swatch-option').each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val
///////////////////////////////////////////////////
////////////////////////////////////////////


// for ul li

if (jQuery(".swatch:contains(Size) li").length > 0) {
  ;[
    jQuery(".swatch:contains(Size) li.is-selected").length > 0
      ? jQuery(".swatch:contains(Size) li.is-selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Size) li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".swatch:contains(Size) li").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatch:contains(Size) li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".swatch:contains(Size) li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".swatch:contains(Size) li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

///////////////////////////////////////////////////////////////////////
// div button
if (jQuery('[data-auto-id="size-selector"] button.gl-label').length > 0) {
  [
    jQuery(
      '[data-auto-id="size-selector"] button.gl-label.selected___2CqxQ'
    ).length > 0
      ? jQuery('[data-auto-id="size-selector"] button.gl-label.selected___2CqxQ')
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery('[data-auto-id="size-selector"] button.gl-label').map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery('[data-auto-id="size-selector"] button.gl-label').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('[data-auto-id="size-selector"] button.gl-label').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery('[data-auto-id="size-selector"] button.gl-label').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery('[data-auto-id="size-selector"] button.gl-label').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

///////////////////////////////////////////////////////
/////////////////////////////////////////////////
// Select
if (jQuery(".selector-wrapper:contains(Size):first option").length > 0) {
  ;[
    jQuery(".selector-wrapper:contains(Size):first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Size):first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Size):first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Size", ["No Size"]]
}

//pa_Sizes clicker
if (
  jQuery(".selector-wrapper:contains(Size):first option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".selector-wrapper:contains(Size):first option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".selector-wrapper:contains(Size):first option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true
  jQuery(".selector-wrapper:contains(Size):first option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

/////////////////////////////////////
// ////////////////////////

// div div 

if (jQuery('.product-options div:contains(Size):first div.product-options__value').length > 0) {
  ;[
    jQuery('.product-options div:contains(Size):first div.product-options__value.active').length > 0
      ? jQuery('.product-options div:contains(Size):first div.product-options__value.active')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('.product-options div:contains(Size):first div.product-options__value').map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery('.product-options div:contains(Size):first div.product-options__value').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('.product-options div:contains(Size):first div.product-options__value').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery('.product-options div:contains(Size):first div.product-options__value').length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery('.product-options div:contains(Size):first div.product-options__value').each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val
///////////////////////////////////////////////////