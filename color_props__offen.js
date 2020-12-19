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
if (jQuery(".selector-wrapper:contains(Colour):first option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Colour):first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Colour):first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Colour",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Colour):first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Colour", ["No Colour"]];
}

//pa_Colours clicker
if (
jQuery(".selector-wrapper:contains(Colour):first option").length > 0 &&
$sarg != "Select Colour" &&
$sarg != "No Colour"
) {
jQuery(".selector-wrapper:contains(Colour):first option").each(function () {
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
  jQuery(".selector-wrapper:contains(Colour):first option").length > 0 &&
  $sarg != "No Colour" &&
  $sarg != "Select Colour"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Colour):first option").each(function (index) {
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



if (jQuery("div.product-info__variants_items:contains(Color) input").length > 0) {
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
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;



///////////////////////

if (jQuery(".swatch:contains(Colour) input").length > 0) {
  ;[
    jQuery(".swatch:contains(Colour) input:checked").length > 0
      ? jQuery(".swatch:contains(Colour) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".swatch:contains(Colour) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Colour", ["No Colour"]]
}

if (jQuery(".swatch:contains(Colour) input").length > 0  &&
$sarg != "Select Colour" &&
$sarg != "No Colour") {
jQuery(".swatch:contains(Colour) input").each(function () {
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
  jQuery(".swatch:contains(Colour) input").length > 0 &&
  $sarg != "No Colour" &&
  $sarg != "Select Colour"
) {
  $text = true;
  jQuery(".swatch:contains(Colour) input").each(function (index) {
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
      return jQuery(e).attr('value')
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
      !jQuery(this).attr('.data-availability')
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
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability')
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


////////////////////////////////////////////////////
////////////////////////////////////////////////

if (jQuery(".variant-wrapper:contains(Color) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Color) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Color) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Color) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".variant-wrapper:contains(Color) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".variant-wrapper:contains(Color) input").each(function () {
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
  jQuery(".variant-wrapper:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery(".variant-wrapper:contains(Color) input").each(function (
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

//////////////////////////////////////////////////////
///////////////////////////////////////////////////

// Select
if (jQuery(".variant-wrapper:contains(Color) option").length > 0) {
  [
    jQuery(".variant-wrapper:contains(Color) option:selected").text() != ""
      ? jQuery(".variant-wrapper:contains(Color) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Color) option").map(function (i, e) {
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
jQuery(".variant-wrapper:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".variant-wrapper:contains(Color) option").each(function () {
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
  jQuery(".variant-wrapper:contains(Color) option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".variant-wrapper:contains(Color) option").each(function (index) {
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
/////////////////////////////

// button button
if (jQuery(".color-swatches:first button").length > 0) {
  [
    jQuery(
      ".color-swatches:first button.active"
    ).length > 0
      ? jQuery(".color-swatches:first button.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Color",
    jQuery.makeArray(
      jQuery(".color-swatches:first button").map(function (
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
  jQuery(".color-swatches:first button").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".color-swatches:first button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery(".color-swatches:first button").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".color-swatches:first button").each(function (index) {
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
////////////////////////////////////////

// for ul li

if (jQuery("ul.prodColours:first li").length > 0) {
  ;[
    jQuery("ul.prodColours:first li.selected").length > 0
      ? jQuery("ul.prodColours:first li.selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul.prodColours:first li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery("ul.prodColours:first li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul.prodColours:first li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery("ul.prodColours:first li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery("ul.prodColours:first li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

////////////////////////////////////////////

////////////////////////////////////////

// for ul li ****

if (jQuery(".product-form__item:contains(Couleurs) li").length > 0) {
  ;[
    jQuery(".product-form__item:contains(Couleurs) li a.selected").length > 0
      ? jQuery(".product-form__item:contains(Couleurs) li a.selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".product-form__item:contains(Couleurs) li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".product-form__item:contains(Couleurs) li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".product-form__item:contains(Couleurs) li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".product-form__item:contains(Couleurs) li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".product-form__item:contains(Couleurs) li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

////////////////////////////////////////////

//////////////////////

if (jQuery(".PD-variantsList:first input").length > 0) {
  ;[
    jQuery(".PD-variantsList:first input:checked").length > 0
      ? jQuery(".PD-variantsList:first input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".PD-variantsList:first input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery(".PD-variantsList:first input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery(".PD-variantsList:first input").each(function () {
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
  jQuery(".PD-variantsList:first input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".PD-variantsList:first input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;
///////////////////////////////////////
//////////////////////////////
/////////////////////

// div label

if (jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").length > 0) {
  [
    jQuery(
      "div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label.active"
    ).length > 0
      ? jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Color",
    jQuery.makeArray(
      jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").map(function (
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
  jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("div.shop-panel__variant-detail:contains(Color) .shop-panel__variant-value-list label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;
//////////////////////////////////////////////////////
//////////////////////////////
if (jQuery('.swatch[data-option-index="0"] input').length > 0) {
  ;[
    jQuery('.swatch[data-option-index="0"] input:checked').length > 0
      ? jQuery('.swatch[data-option-index="0"] input:checked')
      .attr("option_value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery('.swatch[data-option-index="0"] input').map(function (i, e) {
    if (jQuery(e).attr("option_value") != "")
      return jQuery(e).attr("option_value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Colour", ["No Colour"]]
}

if (jQuery('.swatch[data-option-index="0"] input').length > 0  &&
$sarg != "Select Colour" &&
$sarg != "No Colour") {
jQuery('.swatch[data-option-index="0"] input').each(function () {
if (jQuery(this).attr("option_value").replace(/\s\s+/g, "") == $sarg) {
  jQuery(this).next()[0].click()
}
})
}
wait_for(function () {
return true
})

$text = false;
if (
  jQuery('.swatch[data-option-index="0"] input').length > 0 &&
  $sarg != "No Colour" &&
  $sarg != "Select Colour"
) {
  $text = true;
  jQuery('.swatch[data-option-index="0"] input').each(function (index) {
    if (
      jQuery(this).attr("option_value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;
////////////
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
      : "Select Color",
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
} else ["No Color", ["No Color"]];


if (
  jQuery('div.colors-wrapper a').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
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
  $sarg != "No Color" &&
  $sarg != "Select Color"
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

// select

if (jQuery('select[id="ProductSelect-product-template-option-0"] option').length > 0) {
  ;[
    jQuery('select[id="ProductSelect-product-template-option-0"] option:selected').text() != ""
      ? jQuery('select[id="ProductSelect-product-template-option-0"] option:selected').text().trim()
      : // .replace(/\s\s+/g, "")
        "Select Color",
    jQuery.makeArray(
      jQuery('select[id="ProductSelect-product-template-option-0"] option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery('select[id="ProductSelect-product-template-option-0"] option').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('select[id="ProductSelect-product-template-option-0"] option').each(function () {
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
  jQuery('select[id="ProductSelect-product-template-option-0"] option').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('select[id="ProductSelect-product-template-option-0"] option').each(function (index) {
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
// div input 


if (jQuery('div[data-option-index="2"] input').length > 0) {
  ;[
    jQuery('div[data-option-index="2"] input:checked').length > 0
      ? jQuery('div[data-option-index="2"] input:checked')
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery('div[data-option-index="2"] input').map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

////

if (
  jQuery('div[data-option-index="2"] input').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('div[data-option-index="2"] input').each(function () {
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
  jQuery('div[data-option-index="2"] input').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('div[data-option-index="2"] input').each(function (index) {
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
// select

if (jQuery('select[data-index="option1"] option').length > 0) {
  ;[
    jQuery('select[data-index="option1"] option:selected').text() != ""
      ? jQuery('select[data-index="option1"] option:selected').text().trim()
      : // .replace(/\s\s+/g, "")
        "Select Color",
    jQuery.makeArray(
      jQuery('select[data-index="option1"] option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery('select[data-index="option1"] option').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('select[data-index="option1"] option').each(function () {
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
  jQuery('select[data-index="option1"] option').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('select[data-index="option1"] option').each(function (index) {
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
if (jQuery("div.radio-wrapper:contains(Color) input").length > 0) {
  ;[
    jQuery("div.radio-wrapper:contains(Color) input:checked").length > 0
      ? jQuery("div.radio-wrapper:contains(Color) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.radio-wrapper:contains(Color) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

////////////

if (
  jQuery("div.radio-wrapper:contains(Color) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("div.radio-wrapper:contains(Color) input").each(function () {
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
  jQuery("div.radio-wrapper:contains(Color) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery("div.radio-wrapper:contains(Color) input").each(function (index) {
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
// Select
if (jQuery(".types-item:contains(Color) option").length > 0) {
  [
    jQuery(".types-item:contains(Color) option:selected").text() != ""
      ? jQuery(".types-item:contains(Color) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".types-item:contains(Color) option").map(function (i, e) {
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
jQuery(".types-item:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".types-item:contains(Color) option").each(function () {
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
  jQuery(".types-item:contains(Color) option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".types-item:contains(Color) option").each(function (index) {
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