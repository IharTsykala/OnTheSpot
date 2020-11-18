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

/////////////////////////////////////


// Select
if (jQuery(".radio-wrapper:contains(Size) option").length > 0) {
  [
    jQuery(".radio-wrapper:contains(Size) option:selected").text() != ""
      ? jQuery(".radio-wrapper:contains(Size) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".radio-wrapper:contains(Size) option").map(function (i, e) {
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
jQuery(".radio-wrapper:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery(".radio-wrapper:contains(Size) option").each(function () {
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
  jQuery(".radio-wrapper:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".radio-wrapper:contains(Size) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



//////////////////////////////////////////////


//


if (jQuery('select[class="required-entry super-attribute-select"] option').length > 0) {
  [
    jQuery('select[class="required-entry super-attribute-select"] option:selected').text() != ""
      ? jQuery('select[class="required-entry super-attribute-select"] option:selected')
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('select[class="required-entry super-attribute-select"] option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

if (
  jQuery('select[class="required-entry super-attribute-select"] option').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery('select[class="required-entry super-attribute-select"] option').each(function () {
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
    jQuery('select[class="required-entry super-attribute-select"] option').length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery('select[class="required-entry super-attribute-select"] option').each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('disabled')
      ) {
        $text = false;
      }
    });
  }
  return $text;



  if (jQuery("div.radio-wrapper:contains(Size) input").length > 0) {
    ;[
      jQuery("div.radio-wrapper:contains(Size) input:checked").length > 0
        ? jQuery("div.radio-wrapper:contains(Size) input:checked")
        .attr("value")
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery("div.radio-wrapper:contains(Size) input").map(function (i, e) {
      if (jQuery(e).attr("value") != "")
        return jQuery(e).attr("value").replace(/\s\s+/g, "")
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }

  ////////////
  
  if (jQuery("div.radio-wrapper:contains(Size) input").length > 0) {
    ;[
      jQuery("div.radio-wrapper:contains(Size) input:checked").length > 0
        ? jQuery("div.radio-wrapper:contains(Size) input:checked")
        .attr("value")
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery("div.radio-wrapper:contains(Size) input").map(function (i, e) {
      if (jQuery(e).attr("value") != "")
        return jQuery(e).attr("value").replace(/\s\s+/g, "")
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }


  ////
  
  if (jQuery("div.radio-wrapper:contains(Size) input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery("div.radio-wrapper:contains(Size) input").each(function () {
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
    jQuery("div.radio-wrapper:contains(Size) input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.radio-wrapper:contains(Size) input").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;

  // /////////////////////

  $text = false;
  if (
    jQuery("div.radio-wrapper:contains(Size) input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.radio-wrapper:contains(Size) input").each(function (index) {
      if (
        jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).parent().hasClass('soldout')
      ) {
        $text = false;
      }
    });
  }
return $text
  

  /////////////////////////////////////


  if (jQuery(".asc-product-size-container:contains(Size) input").length > 0) {
    ;[
      jQuery(".asc-product-size-container:contains(Size) input:checked").length > 0
        ? jQuery(".asc-product-size-container:contains(Size) input:checked")
        .attr("data-size-value")
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery(".asc-product-size-container:contains(Size) input").map(function (i, e) {
      if (jQuery(e).attr("data-size-value") != "")
        return jQuery(e).attr("data-size-value").replace(/\s\s+/g, "")
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }
  
  if (jQuery(".asc-product-size-container:contains(Size) input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery(".asc-product-size-container:contains(Size) input").each(function () {
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
    jQuery(".asc-product-size-container:contains(Size) input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery(".asc-product-size-container:contains(Size) input").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;



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
  
  if (jQuery("div.swatch:contains(Size) input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery("div.swatch:contains(Size) input").each(function () {
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
    jQuery("div.swatch:contains(Size) input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.swatch:contains(Size) input").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;



  // ////////////////////////


  //


  if (jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").length > 0) {
    ;[
      jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input:checked").length > 0
        ? jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input:checked")
        .next()
        .text().trim()
        .replace(/\s\s+/g, "")
    : "Select item",
  jQuery.makeArray(
    jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").map(function (i, e) {
      if (jQuery(e).next().text().trim() != "")
        return jQuery(e).next().text().trim()
    })
  ),
  ]
  } else {
  ;["No Size", ["No Size"]]
  }
  
  if (jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").length > 0  &&
  $sarg != "Select Size" &&
  $sarg != "No Size") {
  jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").each(function () {
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
    jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.product__variants-wrapper:contains(Size) .swatch-size input").each(function (index) {
      if (
        jQuery(this).next().text().trim() == $sarg &&
        !jQuery(this).attr('.data-availability') === 'soldout'
      ) {
        $text = false;
      }
    });
  }
  return $text;


  //////////////////////////////////////////////
  /////////////////////////////////////////////////


  
 

  //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////



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
  if (jQuery("table.variations tr:contains(Taille) option").length > 0) {
    [
      jQuery("table.variations tr:contains(Taille) option:selected").text() != ""
        ? jQuery("table.variations tr:contains(Taille) option:selected")
            .text()
            .trim()
            // .replace(/\s\s+/g, "")
        : "Select Taille",
      jQuery.makeArray(
        jQuery("table.variations tr:contains(Taille) option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Taille", ["No Taille"]];
  }

  //pa_Tailles clicker
if (
  jQuery("table.variations tr:contains(Taille) option").length > 0 &&
  $sarg != "Select Taille" &&
  $sarg != "No Taille"
) {
  jQuery("table.variations tr:contains(Taille) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
        jQuery(this).trigger("change");
    }
  });
}
wait_for(function () {
  return true;
});
//pa_Tailles stock status
$text = false;
if (
  jQuery("table.variations tr:contains(Taille) option").length > 0 &&
  $sarg != "No Taille" &&
  $sarg != "Select Taille"
) {
  $text = true;
  jQuery("table.variations tr:contains(Taille) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;


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
    if (
      jQuery(this).attr("alt").replace(/\s\s+/g, "") ==
      $sarg
    ) {
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
  jQuery("fieldset:contains(SIZE:) input").each(function (
    index
  ) {
    if (jQuery(this).attr('alt') == $sarg && !jQuery(this).attr("alt") === 'disabled') {
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
      .attr('value')
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.product-form__option:contains(Size) input").map(function (i, e) {
    if (jQuery(e).attr('value') != "")
      return jQuery(e).next().text().trim()
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery("div.product-form__option:contains(Size) input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery("div.product-form__option:contains(Size) input").each(function () {
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
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.product-form__option:contains(Size) input").each(function (index) {
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



$text = false;
if (
  jQuery("select#pa_volume option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("select#pa_volume option").each(function (index) {
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
 if (jQuery(".variation:contains(Size) option").length > 0) {
  [
    jQuery(".variation:contains(Size) option:selected").text() != ""
      ? jQuery(".variation:contains(Size) option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".variation:contains(Size) option").map(function (i, e) {
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
jQuery(".variation:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery(".variation:contains(Size) option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
      jQuery(this).trigger("change");
  }
});
}
wait_for(function () {
return true;
});
//pa_Sizes stock status
$text = false;
if (
jQuery(".variation:contains(Size) option").length > 0 &&
$sarg != "No Size" &&
$sarg != "Select Size"
) {
$text = true;
jQuery(".variation:contains(Size) option").each(function (index) {
  if (
    jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
    !jQuery(this).attr('disabled')
  ) {
    $text = false;
  }
});
}
return $text;


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
  jQuery("div.ProductForm__Option:contains(Size) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery("div.ProductForm__Option:contains(Size) input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery("div.ProductForm__Option:contains(Size) input").each(function () {
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
  jQuery("div.ProductForm__Option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.ProductForm__Option:contains(Size) input").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;

////////////////////////////////////////////////////
////////////////////////////////////////////////


if (jQuery(".variant-wrapper:contains(Size) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Size) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Size) input:checked")
      // .next()
      // .text().trim()
      .attr('value')
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".variant-wrapper:contains(Size) input").map(function (i, e) {
    if (jQuery(e).attr('value') != "")
      return jQuery(e).next().text().trim()
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery("div.product-form__option:contains(Size) input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery("div.product-form__option:contains(Size) input").each(function () {
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
  jQuery("div.product-form__option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.product-form__option:contains(Size) input").each(function (index) {
    if (
      jQuery(this).attr('value') == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;


//////////////////////////////////////////////////////
///////////////////////////////////////////////////


if (jQuery(".selector-wrapper:contains(Size) select:first option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Size) select:first option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Size) select:first option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Size) select:first option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}


if (
  jQuery(".selector-wrapper:contains(Size) select:first option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery(".selector-wrapper:contains(Size) select:first option").each(function () {
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
  jQuery(".selector-wrapper:contains(Size) select:first option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Size) select:first option").each(function (index) {
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
      : "Select Size",
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
} else ["No Size", ["No Size"]];


if (
  jQuery(".Popover__ValueList:first button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
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
  $sarg != "No Size" &&
  $sarg != "Select Size"
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