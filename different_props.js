
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

if (jQuery('select[id="SingleOptionSelector-0"] option').length > 0) {
  [
    jQuery('select[id="SingleOptionSelector-0"] option:selected').text() != ""
      ? jQuery('select[id="SingleOptionSelector-0"] option:selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery('select[id="SingleOptionSelector-0"] option').map(function (i, e) {
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
jQuery('select[id="SingleOptionSelector-0"] option').length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery('select[id="SingleOptionSelector-0"] option').each(function () {
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
  jQuery('select[id="SingleOptionSelector-0"] option').length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery('select[id="SingleOptionSelector-0"] option').each(function (index) {
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


if (jQuery(".selector-wrapper:contains(Material) option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Material) option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Material) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Style",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Material) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Style", ["No Style"]];
}

//pa_Styles clicker
if (
jQuery(".selector-wrapper:contains(Material) option").length > 0 &&
$sarg != "Select Style" &&
$sarg != "No Style"
) {
jQuery(".selector-wrapper:contains(Material) option").each(function () {
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
  jQuery(".selector-wrapper:contains(Material) option").length > 0 &&
  $sarg != "No Style" &&
  $sarg != "Select Style"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Material) option").each(function (index) {
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

if (jQuery("fieldset.single-option-radio input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
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

$text = false;
if (
  jQuery("fieldset.single-option-radio input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("fieldset.single-option-radio input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass('soldout')
    ) {
      $text = false;
    }
  });
}
return $text

//////////////////////////////////////
if (jQuery(".container-SkuTalla:contains(Talla:) li").length > 0) {
  [
    jQuery(".container-SkuTalla:contains(Talla:) li.selected").text() != ""
      ? jQuery(".container-SkuTalla:contains(Talla:) li.selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".container-SkuTalla:contains(Talla:) li").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

if (
  jQuery(".container-SkuTalla:contains(Talla:) li").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery(".container-SkuTalla:contains(Talla:) li").each(function () {
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
    jQuery(".container-SkuTalla:contains(Talla:) li").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery(".container-SkuTalla:contains(Talla:) li").each(function (index) {
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
  ////////////////////////////////////

  if (jQuery("fieldset:first input").length > 0) {
    [
      jQuery(
        "fieldset:first input:checked"
      ).length > 0
        ?jQuery(
            "fieldset:first input:checked"
          )
          .parent().text().trim().replace(/\s\s+/g, "")
        : "Select Size",
      jQuery.makeArray(
        jQuery("fieldset:first label").map(function (
          i,
          e
        ) {
          if (jQuery(e).text().trim().replace(/\s\s+/g, "")!=='')
           return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else ["No Size", ["No Size"]];
  
  jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')
  
  
  if (
    jQuery("fieldset:first label").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
  ) {
    jQuery("fieldset:first label").each(function () {
      if (jQuery(e).text().trim().replace(/\s\s+/g, "")!== $sarg) jQuery(this).click();
    });
  }
  wait_for(function () {
    return true;
  });
  
  //pa_sizes stock status
  $text = false;
  if (
    jQuery("fieldset:first label").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("fieldset:first label").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "")!== $sarg &&
        !jQuery(this).parent().find('input').attr('disabled') === 'disabled'
      ) {
        $text = false;
      }
    });
  }
  return $text;


  ////////////////////////////////////////////

if (jQuery("div.swatch:contains(style) input").length > 0) {
  ;[
    jQuery("div.swatch:contains(style) input:checked").length > 0
      ? jQuery("div.swatch:contains(style) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.swatch:contains(style) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No style", ["No style"]]
}

if (
  jQuery("div.swatch:contains(style) input").length > 0 &&
  $sarg != "Select style" &&
  $sarg != "No style"
) {
  jQuery("div.swatch:contains(style) input").each(function () {
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
  jQuery("div.swatch:contains(style) input").length > 0 &&
  $sarg != "No style" &&
  $sarg != "Select style"
) {
  $text = true
  jQuery("div.swatch:contains(style) input").each(function (index) {
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
/////////////////////////////////


////////////////////////////////////////////////////
////////////////////////////////////////////////

if (jQuery(".variant-wrapper:contains(Top Option) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Top Option) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Top Option) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Top Option) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Top Option", ["No Top Option"]]
}

if (
  jQuery("div.product-form__option:contains(Top Option) input").length > 0 &&
  $sarg != "Select Top Option" &&
  $sarg != "No Top Option"
) {
  jQuery("div.product-form__option:contains(Top Option) input").each(function () {
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
  jQuery("div.product-form__option:contains(Top Option) input").length > 0 &&
  $sarg != "No Top Option" &&
  $sarg != "Select Top Option"
) {
  $text = true
  jQuery("div.product-form__option:contains(Top Option) input").each(function (
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


///////////////////////

if (jQuery(".swatch:contains(Dozen) input").length > 0) {
  ;[
    jQuery(".swatch:contains(Dozen) input:checked").length > 0
      ? jQuery(".swatch:contains(Dozen) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".swatch:contains(Dozen) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Dozen", ["No Dozen"]]
}

if (jQuery(".swatch:contains(Dozen) input").length > 0  &&
$sarg != "Select Dozen" &&
$sarg != "No Dozen") {
jQuery(".swatch:contains(Dozen) input").each(function () {
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
  jQuery(".swatch:contains(Dozen) input").length > 0 &&
  $sarg != "No Dozen" &&
  $sarg != "Select Dozen"
) {
  $text = true;
  jQuery(".swatch:contains(Dozen) input").each(function (index) {
    if (
      jQuery(this).attr("value") == $sarg &&
      !jQuery(this).attr('.data-availability')
    ) {
      $text = false;
    }
  });
}
return $text;

////////////////////////////////////////
/////////////////


if (jQuery(".variant-wrapper:contains(Length) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Length) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Length) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Length) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".variant-wrapper:contains(Length) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".variant-wrapper:contains(Length) input").each(function () {
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
  jQuery(".variant-wrapper:contains(Length) input").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery(".variant-wrapper:contains(Length) input").each(function (
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

////////////////////////////////////////////////////

// for ul li

if (jQuery(".product-attribute-item:contains(Szín) li").length > 0) {
  ;[
    jQuery(".product-attribute-item:contains(Szín) li.selected span").length > 0
      ? jQuery(".product-attribute-item:contains(Szín) li.selected span")
          .attr('title') .trim()         
      : "Select Color",
    jQuery.makeArray(
      jQuery(".product-attribute-item:contains(Szín) li span").map(function (i, e) {
        if (jQuery(e).attr('title').trim())
          return jQuery(e).attr('title').trim()
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".product-attribute-item:contains(Szín) li span").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".product-attribute-item:contains(Szín) li span").each(function () {
    if (jQuery(e).attr('title').trim() == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".product-attribute-item:contains(Szín) li span").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = false
  jQuery(".product-attribute-item:contains(Szín) li span").each(function () {
    if (
      jQuery(this).attr('title').trim() == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {      
      $val = false
    }
  })
}
return $val
/////////////////////////////////////////
////////////////////////////////////////////////////

// for ul li

if (jQuery(".product-attribute-item:contains(Méret) li").length > 0) {
  ;[
    jQuery(".product-attribute-item:contains(Méret) li.selected").length > 0
      ? jQuery(".product-attribute-item:contains(Méret) li.selected")
      .text().trim().replace(/\s\s+/g, "")   
      : "Select Color",
    jQuery.makeArray(
      jQuery(".product-attribute-item:contains(Méret) li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".product-attribute-item:contains(Méret) li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".product-attribute-item:contains(Méret) li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".product-attribute-item:contains(Méret) li").length > 0 &&
  $sarg != "No size" &&
  $sarg != "Select size"
) {
  $val = true
  jQuery(".product-attribute-item:contains(Méret) li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

/////////////////////////////////

////////////////////////////////


if (jQuery("div.product-form__option:contains(Source) input").length > 0) {
  ;[
    jQuery("div.product-form__option:contains(Source) input:checked").length > 0
      ? jQuery("div.product-form__option:contains(Source) input:checked")
      // .next()
      // .text().trim()
      .attr('value')
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.product-form__option:contains(Source) input").map(function (i, e) {
    if (jQuery(e).attr('value') != "")
      return jQuery(e).attr('value')
  })
),
]
} else {
;["No Source", ["No Source"]]
}

if (jQuery("div.product-form__option:contains(Source) input").length > 0  &&
$sarg != "Select Source" &&
$sarg != "No Source") {
jQuery("div.product-form__option:contains(Source) input").each(function () {
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
  jQuery("div.product-form__option:contains(Source) input").length > 0 &&
  $sarg != "No Source" &&
  $sarg != "Select Source"
) {
  $text = true;
  jQuery("div.product-form__option:contains(Source) input").each(function (index) {
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

// div label

if (jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").length > 0) {
  [
    jQuery(
      "div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label.active"
    ).length > 0
      ? jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Length",
    jQuery.makeArray(
      jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Length", ["No Length"]];


if (
  jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "Select Length" &&
  $sarg != "No Length"
) {
  jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").length > 0 &&
  $sarg != "No Length" &&
  $sarg != "Select Length"
) {
  $text = true;
  jQuery("div.shop-panel__variant-detail:contains(Length) .shop-panel__variant-value-list label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

/////////////////////////////////////////////////////

// ul li

if (jQuery("div.ProductForm__Option:contains(Taille) input").length > 0) {
  ;[
    jQuery("div.ProductForm__Option:contains(Taille) input:checked").length > 0
      ? jQuery("div.ProductForm__Option:contains(Taille) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.ProductForm__Option:contains(Taille) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Taille", ["No Taille"]]
}

if (
  jQuery("div.ProductForm__Option:contains(Taille) input").length > 0 &&
  $sarg != "Select Taille" &&
  $sarg != "No Taille"
) {
  jQuery("div.ProductForm__Option:contains(Taille) input").each(function () {
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
  jQuery("div.ProductForm__Option:contains(Taille) input").length > 0 &&
  $sarg != "No Taille" &&
  $sarg != "Select Taille"
) {
  $text = true
  jQuery("div.ProductForm__Option:contains(Taille) input").each(function (index) {
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
// select

if (jQuery('select[data-index="option2"] option').length > 0) {
  ;[
    jQuery('select[data-index="option2"] option:selected').text() != ""
      ? jQuery('select[data-index="option2"] option:selected').text().trim()
      : // .replace(/\s\s+/g, "")
        "Select Color",
    jQuery.makeArray(
      jQuery('select[data-index="option2"] option').map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery('select[data-index="option2"] option').length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery('select[data-index="option2"] option').each(function () {
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
  jQuery('select[data-index="option2"] option').length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery('select[data-index="option2"] option').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text


//////////////////////////////////////
/////////////

// radio-wrapper input 

if (jQuery("div.radio-wrapper:contains(Length) input").length > 0) {
  ;[
    jQuery("div.radio-wrapper:contains(Length) input:checked").length > 0
      ? jQuery("div.radio-wrapper:contains(Length) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.radio-wrapper:contains(Length) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Length", ["No Length"]]
}

////////////


if (
  jQuery("div.radio-wrapper:contains(Length) input").length > 0 &&
  $sarg != "Select Length" &&
  $sarg != "No Length"
) {
  jQuery("div.radio-wrapper:contains(Length) input").each(function () {
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
  jQuery("div.radio-wrapper:contains(Length) input").length > 0 &&
  $sarg != "No Length" &&
  $sarg != "Select Length"
) {
  $text = true
  jQuery("div.radio-wrapper:contains(Length) input").each(function (index) {
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

/////////////////////////////////////////////////////
// selector-wrapper input 

if (jQuery(".selector-wrapper:contains(Taille) input").length > 0) {
  ;[
    jQuery(".selector-wrapper:contains(Taille) input:checked").length > 0
      ? jQuery(".selector-wrapper:contains(Taille) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Taille) input").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Taille", ["No Taille"]]
}

$text = false
if (
  jQuery(".selector-wrapper:contains(Taille) input").length > 0 &&
  $sarg != "No Taille" &&
  $sarg != "Select Taille"
) {
  $text = true
  jQuery(".selector-wrapper:contains(Taille) input").each(function (index) {
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

$text = false
if (
  jQuery(".selector-wrapper:contains(Taille) input").length > 0 &&
  $sarg != "No Taille" &&
  $sarg != "Select Taille"
) {
  $text = true
  jQuery(".selector-wrapper:contains(Taille) input").each(function (index) {
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $text = false
    }
  })
}
return $text

 ////////////////////////////////////

 if (jQuery("ProductForm__OptionName:first input").length > 0) {
  [
    jQuery(
      "ProductForm__OptionName:first input:checked"
    ).length > 0
      ?jQuery(
          "ProductForm__OptionName:first input:checked"
        )
        .parent().text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("ProductForm__OptionName:first label").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, "")!=='')
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery("ProductForm__OptionName:first label").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("ProductForm__OptionName:first label").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "")!== $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery("ProductForm__OptionName:first label").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("ProductForm__OptionName:first label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "")!== $sarg &&
      !jQuery(this).parent().find('input').attr('disabled') === 'disabled'
    ) {
      $text = false;
    }
  });
}
return $text;


////////////////////////////////////////////

// for ul li

if (jQuery(".swatch:contains(Style) li").length > 0) {
  ;[
    jQuery(".swatch:contains(Style) li.is-selected").length > 0
      ? jQuery(".swatch:contains(Style) li.is-selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Style",
    jQuery.makeArray(
      jQuery(".swatch:contains(Style) li").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Style", ["No Style"]]

if (
  jQuery(".swatch:contains(Style) li").length > 0 &&
  $sarg != "Select Style" &&
  $sarg != "No Style"
) {
  jQuery(".swatch:contains(Style) li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg)
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".swatch:contains(Style) li").length > 0 &&
  $sarg != "No Style" &&
  $sarg != "Select Style"
) {
  $val = true
  jQuery(".swatch:contains(Style) li").each(function () {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).hasClass("unavailable")
    ) {
      $val = false
    }
  })
}
return $val

////////////////////////////////////////////////////

if (jQuery('select[name="id"] option').length > 0) {
  [
    jQuery('select[name="id"] option:selected').text() != ""
      ? jQuery('select[name="id"] option:selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery('select[name="id"] option').map(function (i, e) {
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
jQuery('select[name="id"] option').length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery('select[name="id"] option').each(function () {
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
  jQuery('select[name="id"] option').length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery('select[name="id"] option').each(function (index) {
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

if (jQuery('select[id="productSelect-product-template-option-0"] option').length > 0) {
  [
    jQuery('select[id="productSelect-product-template-option-0"] option:selected').text() != ""
      ? jQuery('select[id="productSelect-product-template-option-0"] option:selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery('select[id="productSelect-product-template-option-0"] option').map(function (i, e) {
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
jQuery('select[id="productSelect-product-template-option-0"] option').length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery('select[id="productSelect-product-template-option-0"] option').each(function () {
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
  jQuery('select[id="productSelect-product-template-option-0"] option').length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery('select[id="productSelect-product-template-option-0"] option').each(function (index) {
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

if (jQuery('select[id="productSelect-product-template-option-1"] option').length > 0) {
  [
    jQuery('select[id="productSelect-product-template-option-1"] option:selected').text() != ""
      ? jQuery('select[id="productSelect-product-template-option-1"] option:selected')
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery('select[id="productSelect-product-template-option-1"] option').map(function (i, e) {
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
jQuery('select[id="productSelect-product-template-option-1"] option').length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery('select[id="productSelect-product-template-option-1"] option').each(function () {
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
  jQuery('select[id="productSelect-product-template-option-1"] option').length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery('select[id="productSelect-product-template-option-1"] option').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;
///////////////////////////////////////////////////////////////////////
// product-option-item input 

if (jQuery("div.product-option-item:contains(Beden) input").length > 0) {
  ;[
    jQuery("div.product-option-item:contains(Beden) input:checked").length > 0
      ? jQuery("div.product-option-item:contains(Beden) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.product-option-item:contains(Beden) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Length", ["No Length"]]
}

////////////


if (
  jQuery("div.product-option-item:contains(Beden) input").length > 0 &&
  $sarg != "Select Length" &&
  $sarg != "No Length"
) {
  jQuery("div.product-option-item:contains(Beden) input").each(function () {
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
  jQuery("div.product-option-item:contains(Beden) input").length > 0 &&
  $sarg != "No Length" &&
  $sarg != "Select Length"
) {
  $text = true
  jQuery("div.product-option-item:contains(Beden) input").each(function (index) {
    if (
      jQuery(this).val().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().hasClass("soldout")
    ) {
      $text = false
    }
  })
}
return $text