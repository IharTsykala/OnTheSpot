// Select
if (jQuery(".selector-wrapper:contains(Color) option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Color) option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Color) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Color) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery(".selector-wrapper:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".selector-wrapper:contains(Color) option").each(function () {
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
  jQuery(".selector-wrapper:contains(Color) option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Color) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



// Select
if (jQuery("#product-options-wrapper option").length > 0) {
  [
    jQuery("#product-options-wrapper option:selected").text() != ""
      ? jQuery("#product-options-wrapper option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("#product-options-wrapper option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery("#product-options-wrapper option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery("#product-options-wrapper option").each(function () {
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
  jQuery("#product-options-wrapper option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("#product-options-wrapper option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



if (jQuery("mar-pdp-color-container:contains( Colors ) input").length > 0) {
  ;[
    jQuery("div.product-info__variants_items:contains(Color) input:checked").length > 0
      ? jQuery("div.product-info__variants_items:contains(Color) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.product-info__variants_items:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery("div.product-info__variants_items:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery("div.product-info__variants_items:contains(Color) input").each(function () {
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
  jQuery("div.product-info__variants_items:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("div.product-info__variants_items:contains(Color) input").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;



///////////////////////

if (jQuery(".swatch:contains(Color) input").length > 0) {
  ;[
    jQuery(".swatch:contains(Color) input:checked").length > 0
      ? jQuery(".swatch:contains(Color) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".swatch:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery(".swatch:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery(".swatch:contains(Color) input").each(function () {
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
  jQuery(".swatch:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".swatch:contains(Color) input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')'
    ) {
      $text = false;
    }
  });
}
return $text;


///////////////////////////



////////////////////////////////


if (jQuery("div.product-form__option:contains(Color) input").length > 0) {
  ;[
    jQuery("div.product-form__option:contains(Color) input:checked").length > 0
      ? jQuery("div.product-form__option:contains(Color) input:checked")
      // .next()
      // .text().trim()
      .attr('value')
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.product-form__option:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr('value') != "")
      return jQuery(e).next().text().trim()
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery("div.product-form__option:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery("div.product-form__option:contains(Color) input").each(function () {
if (jQuery(this).attr('value') == $sarg) {
  jQuery(this)[0].click()
}
})
}
wait_for(function () {
return true
})

$text = false;
if (
  jQuery("div.product-form__option:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("div.product-form__option:contains(Color) input").each(function (index) {
    if (
      jQuery(this).attr('value') == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;


/////////////////////////////////////


if (jQuery("div.ProductForm__Option:contains(Color) input").length > 0) {
  ;[
    jQuery("div.ProductForm__Option:contains(Color) input:checked").length > 0
      ? jQuery("div.ProductForm__Option:contains(Color) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.ProductForm__Option:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery("div.ProductForm__Option:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery("div.ProductForm__Option:contains(Color) input").each(function () {
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
  jQuery("div.ProductForm__Option:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("div.ProductForm__Option:contains(Color) input").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;


// Select
if (jQuery(".Option1:contains(Color) option").length > 0) {
  [
    jQuery(".Option1:contains(Color) option:selected").text() != ""
      ? jQuery(".Option1:contains(Color) option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".Option1:contains(Color) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery(".Option1:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".Option1:contains(Color) option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
      jQuery(this).trigger("change");
  }
});
}
wait_for(function () {
return true;
});
//pa_Colors stock status
$text = false;
if (
jQuery(".Option1:contains(Color) option").length > 0 &&
$sarg != "No Color" &&
$sarg != "Select Color"
) {
$text = true;
jQuery(".Option1:contains(Color) option").each(function (index) {
  if (
    jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
    !jQuery(this).attr('disabled')
  ) {
    $text = false;
  }
});
}
return $text;


// Select
if (jQuery(".radio-wrapper:contains(Color) option").length > 0) {
  [
    jQuery(".radio-wrapper:contains(Color) option:selected").text() != ""
      ? jQuery(".radio-wrapper:contains(Color) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".radio-wrapper:contains(Color) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery(".radio-wrapper:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".radio-wrapper:contains(Color) option").each(function () {
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
  jQuery(".radio-wrapper:contains(Color) option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".radio-wrapper:contains(Color) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;
/////////////////////////////////////////
////////////////////////////////////////////

if (jQuery(".color-swatch-wrapper:contains(Color) input").length > 0) {
  ;[
    jQuery(".color-swatch-wrapper:contains(Color) input:checked").length > 0
      ? jQuery(".color-swatch-wrapper:contains(Color) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".color-swatch-wrapper:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery(".color-swatch-wrapper:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery(".color-swatch-wrapper:contains(Color) input").each(function () {
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
  jQuery(".color-swatch-wrapper:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".color-swatch-wrapper:contains(Color) input").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;

///////////////////////////////////////////////
/////////////////////////////////////////////////

if (jQuery(".selector-wrapper:contains(Color) select:first option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Color) select:first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Color) select:first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Color) select:first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}


if (
  jQuery(".selector-wrapper:contains(Color) select:first option").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
  ) {
  jQuery(".selector-wrapper:contains(Color) select:first option").each(function () {
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
  jQuery(".selector-wrapper:contains(Color) select:first option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Color) select:first option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



// button button
if (jQuery(".Popover__ValueList:first button").length > 0) {
  [
    jQuery(
      ".Popover__ValueList:first button.is-selected"
    ).length > 0
      ? jQuery(".Popover__ValueList:first button.is-selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Color",
    jQuery.makeArray(
      jQuery(".Popover__ValueList:first button").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Color", ["No Color"]];


if (
  jQuery(".Popover__ValueList:first button").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".Popover__ValueList:first button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery(".Popover__ValueList:first button").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".Popover__ValueList:first button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;


// Select
if (jQuery("table.variations tr:contains(Color) option").length > 0) {
  [
    jQuery("table.variations tr:contains(Color) option:selected").text() != ""
      ? jQuery("table.variations tr:contains(Color) option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("table.variations tr:contains(Color) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery("table.variations tr:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery("table.variations tr:contains(Color) option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
      jQuery(this).trigger("change");
  }
});
}
wait_for(function () {
return true;
});
//pa_Colors stock status
$text = false;
if (
jQuery("table.variations tr:contains(Color) option").length > 0 &&
$sarg != "No Color" &&
$sarg != "Select Color"
) {
$text = true;
jQuery("table.variations tr:contains(Color) option").each(function (index) {
  if (
    jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
    !jQuery(this).attr('disabled')
  ) {
    $text = false;
  }
});
}
return $text;