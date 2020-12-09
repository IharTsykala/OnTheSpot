
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

if (jQuery("select.dropdown option").length > 0) {
  [
    jQuery("select.dropdown option:selected").text() != ""
      ? jQuery("select.dropdown option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Metal Color",
    jQuery.makeArray(
      jQuery("select.dropdown option").map(function (i, e) {
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
jQuery("select.dropdown option").length > 0 &&
$sarg != "Select Metal Color" &&
$sarg != "No Metal Color"
) {
jQuery("select.dropdown option").each(function () {
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
  jQuery("select.dropdown option").length > 0 &&
  $sarg != "No Metal Color" &&
  $sarg != "Select Metal Color"
) {
  $text = true;
  jQuery("select.dropdown option").each(function (index) {
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


if (jQuery(".selector-wrapper option").length > 0) {
  [
    jQuery(".selector-wrapper option:selected").text() != ""
      ? jQuery(".selector-wrapper option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".selector-wrapper option").map(function (i, e) {
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
jQuery(".selector-wrapper option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".selector-wrapper option").each(function () {
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
  jQuery(".selector-wrapper option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".selector-wrapper option").each(function (index) {
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

if (jQuery("div.swatch:contains(Maat) input").length > 0) {
  ;[
    jQuery("div.swatch:contains(Maat) input:checked").length > 0
      ? jQuery("div.swatch:contains(Maat) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.swatch:contains(Maat) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Maat", ["No Maat"]]
}

if (
  jQuery("div.swatch:contains(Maat) input").length > 0 &&
  $sarg != "Select Maat" &&
  $sarg != "No Maat"
) {
  jQuery("div.swatch:contains(Maat) input").each(function () {
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
  jQuery("div.swatch:contains(Maat) input").length > 0 &&
  $sarg != "No Maat" &&
  $sarg != "Select Maat"
) {
  $text = true
  jQuery("div.swatch:contains(Maat) input").each(function (index) {
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

if (jQuery(".variant-wrapper:contains(Shape) input").length > 0) {
  ;[
    jQuery(".variant-wrapper:contains(Shape) input:checked").length > 0
      ? jQuery(".variant-wrapper:contains(Shape) input:checked")
          // .next()
          // .text().trim()
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".variant-wrapper:contains(Shape) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "") return jQuery(e).next().text().trim()
      })
    ),
  ]
} else {
  ;["No Shape", ["No Shape"]]
}

if (
  jQuery("div.product-form__option:contains(Shape) input").length > 0 &&
  $sarg != "Select Shape" &&
  $sarg != "No Shape"
) {
  jQuery("div.product-form__option:contains(Shape) input").each(function () {
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
  jQuery("div.product-form__option:contains(Shape) input").length > 0 &&
  $sarg != "No Shape" &&
  $sarg != "Select Shape"
) {
  $text = true
  jQuery("div.product-form__option:contains(Shape) input").each(function (
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