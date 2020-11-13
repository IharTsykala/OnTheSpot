const jQuery = $d
if (jQuery(".ProductForm__Option option").length > 0) {
  [
    jQuery(".ProductForm__Option option[selected='selected']").text() != ""
      ? jQuery(".ProductForm__Option option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
          .split(' ')
          .slice(0,2)
          .join('')
      : "Select Size",
    jQuery.makeArray(
      jQuery(".ProductForm__Option option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e)
          .text()
          .trim()
          .replace(/\s\s+/g, "")
          .split(' ')
          .slice(0,2)
          .join('');
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}
//pa_sizes clicker
if (
  jQuery(".ProductForm__Option option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".ProductForm__Option option").each(function () {
    if (jQuery(this).text()
    .trim()
    .replace(/\s\s+/g, "")
    .split(' ')
    .slice(0,2)
    .join('') == $sarg) {
      jQuery("#option-size")
        .text(jQuery(this).text()
        .trim()
        .replace(/\s\s+/g, "")
        .split(' ')
        .slice(0,2)
        .join(''))
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

const jQuery = $d

if (jQuery(".swatch:contains(Size) label").length > 0) {
  [
    jQuery(".swatch:contains(Size) label.active").text() != ""
      ? jQuery(".swatch:contains(Size) label.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Size) label").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e)
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}
//pa_sizes clicker
if (
  jQuery(".swatch:contains(Size) label").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatch:contains(Size) label").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this)[0].click();
    }
  });
}
wait_for(function () {
  return true;
});

if ((jQuery('fieldset.single-option-radio label').length > 0) && ($sarg != "Select item") && ($sarg != "No item")){
  jQuery('fieldset.single-option-radio label').each(function(){
     if (jQuery(this).text().trim() == $sarg){
         jQuery(this)[0].click()
     }
  });
}
wait_for(function(){return true;})


// for input

if (jQuery('.product-details__section:contains(Size) input').length > 0) {
  [
    jQuery('[data-autotag="pdp-size-options"] input:checked').length > 0
      ? jQuery('[data-autotag="pdp-size-options"] input:checked')
      // .text().trim()    
          .attr('value')
      : "Select item",
    jQuery.makeArray(
      jQuery('[data-autotag="pdp-size-options"] input').map(function (i, e) {
        if (jQuery(e).attr('value') != "")
          return jQuery(e).attr('value').replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No item", ["No item"]];      }


  if (jQuery('[data-autotag="pdp-size-options"] input').length > 0) {
    [
      jQuery('[data-autotag="pdp-size-options"] input').attr('value') != (undefined && '')
        ? jQuery('[data-autotag="pdp-size-options"] input').attr('value')           
            .replace(/\s\s+/g, "")          
        : "Select item",
      jQuery.makeArray(
        jQuery('[data-autotag="pdp-size-options"] input').map(function (i, e) {
          if (jQuery(e).attr('value') != "")
            return jQuery(e)
            .attr('value')
            .replace(/\s\s+/g, "")          
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }


  if (
    jQuery('[data-autotag="pdp-size-options"] input').length > 0 &&    
    $sarg != "No Size"
  ) {
    jQuery('[data-autotag="pdp-size-options"] input').each(function () {
      if (jQuery(this).attr('value').replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).click();
      }
    });
  }
  wait_for(function () {
    return true;
  });


  $text = false;
if (
  jQuery('[data-autotag="pdp-size-options"] input').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {  
  $text = true;
  jQuery('[data-autotag="pdp-size-options"] input').each(function (index) {  
    // console.log(jQuery(this),!jQuery(this).attr('class').indexOf("disabled") >= 0)
    if (
      jQuery(this).attr('value') == $sarg &&
      !jQuery(this).attr('class').indexOf("disabled") >= 0
    ) {
      $text = false;            
    }
  });
}
return $text;


  // for li a

  if (jQuery(".variant_options_list__wrapper a").length > 0) {
    [
      jQuery(
        ".variant_options_list__wrapper a.variant_options_list__selected"
      ).length > 0
        ? JSON.parse(jQuery(
            ".variant_options_list__wrapper a.variant_options_list__selected"
          )
          .attr('data-layer-click')).interaction.value
        : "Select Color",
      jQuery.makeArray(
        jQuery(".variant_options_list__wrapper a").map(function (
          i,
          e
        ) {
          if (JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value)
           return JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value;
        })
      ),
    ];
  } else ["No Color", ["No Color"]];


  if (
    jQuery("ul.size a").length > 0 &&
    $sarg != "Select Color" &&
    $sarg != "No Color"
  ) {
    jQuery("ul.size a").each(function () {
      if (JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value == $sarg) jQuery(this).click();
    });
  }
  wait_for(function () {
    return true;
  });

  

  if (jQuery(".variant_options_list__wrapper a").length > 0) {
    [
      jQuery(
        ".variant_options_list__wrapper a .variant_options_list__selected"
      ).length > 0
        ? jQuery(".variant_options_list__wrapper a .variant_options_list__selected")
            .text()
            .trim()
            .replace(/\s\s+/g, "")          
        : "Select Size",
      jQuery.makeArray(
        jQuery(".variant_options_list__wrapper a").map(function (
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
    jQuery(".variant_options_list__wrapper a").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
  ) {
    jQuery(".variant_options_list__wrapper a").each(function () {
      if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
    });
  }
  wait_for(function () {
    return true;
  });


  $text = false;
if (
  jQuery(".variant_options_list__wrapper a").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {  
  $text = true;
  jQuery(".variant_options_list__wrapper a").each(function (index) {  
    // console.log(jQuery(this),!jQuery(this).attr('class').indexOf("disabled") >= 0)
    if (
      jQuery(this).find('a').text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('class').indexOf("disabled") >= 0
    ) {
      $text = false;            
    }
  });
}
return $text;

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

  // Select
  if (jQuery(".select__wrapper:contains(Size) option").length > 0) {
    [
      jQuery(".select__wrapper:contains(Size) .select__wrapper.field.selected").text() != ""
        ? jQuery("select__wrapper:contains(Size) .select__wrapper.field.selected")
            .text()
            .trim()
            // .replace(/\s\s+/g, "")
        : "Select Size",
      jQuery.makeArray(
        jQuery(".select__wrapper:contains(Size) option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }

  //pa_sizes clicker
if (
  jQuery(".select__wrapper:contains(Size) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".select__wrapper:contains(Size) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
        jQuery(this).trigger("change");
    }
  });
}
wait_for(function () {
  return true;
});
//pa_sizes stock status
$text = false;
if (
  jQuery(".select__wrapper:contains(Size) option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".select__wrapper:contains(Size) option").each(function (index) {
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
if (jQuery("#AddToCartForm:contains(Size) option").length > 0) {
  [
    jQuery("#AddToCartForm:contains(Size)  option:selected").text() != ""
      ? jQuery("#AddToCartForm:contains(Size)  option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("#AddToCartForm:contains(Size) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

//pa_sizes clicker
if (
jQuery("#AddToCartForm:contains(Size) option").length > 0 &&
$sarg != "Select Size" &&
$sarg != "No Size"
) {
jQuery("#AddToCartForm:contains(Size) option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {     
      jQuery(this).trigger("change");
  }
});
}
wait_for(function () {
return true;
});
//pa_sizes stock status
$text = false;
if (
jQuery("#AddToCartForm:contains(Size) option").length > 0 &&
$sarg != "No Size" &&
$sarg != "Select Size"
) {
$text = true;
jQuery("#AddToCartForm:contains(Size) option").each(function (index) {
  if (
    jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
    !jQuery(this).attr('disabled')
  ) {
    $text = false;
  }
});
}
return $text;



if (jQuery("div.size-selector-container a[data-talos='buttonSize']").length > 0) {
  [
    jQuery(
      "div.size-selector-container a[data-talos='buttonSize'].selected"
    ).length > 0
      ? jQuery(
        "div.size-selector-container a[data-talos='buttonSize'].selected"
        ).text().trim().replace(/\s\s+/g, "")       
      : "Select Size",
    jQuery.makeArray(
      jQuery("div.size-selector-container a[data-talos='buttonSize']").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() != '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery("div.size-selector-container a[data-talos='buttonSize']").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.size-selector-container a[data-talos='buttonSize']").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

// Select
if (jQuery("select").length > 0) {
  [
    jQuery("select option:selected").text() != ""
      ? jQuery("select option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select width",
    jQuery.makeArray(
      jQuery("select option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No width", ["No width"]];
}

//pa_sizes clicker
if (
jQuery("select[id='select-width']").length > 0 &&
$sarg != "Select width" &&
$sarg != "No width"
) {
jQuery("select[id='select-width'] option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
    jQuery("select[id='select-width']")
      .text(jQuery(this).text())
      .trigger("change");
  }
});
}
wait_for(function () {
return true;
});

// button button
if (jQuery(".product__variants-wrapper button").length > 0) {
  [
    jQuery(
      ".product__variants-wrapper button.product__option--active"
    ).length > 0
      ? jQuery(".product__variants-wrapper button.product__option--active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".product__variants-wrapper button").map(function (
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
  jQuery(".product__variants-wrapper button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".product__variants-wrapper button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery(".product__variants-wrapper button").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".product__variants-wrapper button").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().hasClass("soldout")
    ) {
      $text = false;
    }
  });
}
return $text;

// ul li

if (jQuery('ul[data-option="SIZE"] button').length > 0) {
  [
    jQuery(
      'ul[data-option="SIZE"] button.is-active'
    ).length > 0
      ?jQuery(
          'ul[data-option="SIZE"] button.is-active'
        )       
          .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('ul[data-option="SIZE"] button').map(function (
        i,
        e
      ) {
        if (jQuery(e)
        .text().trim().replace(/\s\s+/g, ""))
         return jQuery(e)
         .text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery('ul[data-option="SIZE"] button').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('ul[data-option="SIZE"] button').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "")) jQuery(this).cbuttonck();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery('ul[data-option="SIZE"] button').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery('ul[data-option="SIZE"] button').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

swatch-button. swatch-selector star-set-btn star-btn-size-md star-btn-border-1 star-set-btn-rad-0 star-btn-text-upper swatch-selected swatch-allow-animation


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

//pa_sizes clicker
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




if (jQuery("tbody.dijitReset:contains(talla) td[data-dojo-attach-point='containerNode']").length > 0) {
  [
    jQuery(".definingAttributes:contains(Talla) span[role='option']")
    .text()
    .trim()
    .replace(/\s\s+/g, "") != (undefined && '')
      ? jQuery(".definingAttributes:contains(Talla) span[role='option']")
      .text().trim().replace(/\s\s+/g, "")          
      : "Select item",
    jQuery.makeArray(
      jQuery("tbody.dijitReset:contains(talla) td[data-dojo-attach-point='containerNode']").map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, "") != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")          
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}


if (
  jQuery("tbody.dijitReset:contains(talla) td[data-dojo-attach-point='containerNode']").length > 0 &&      
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("tbody.dijitReset:contains(talla) td[data-dojo-attach-point='containerNode']").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).click();
    }
  });
}
wait_for(function () {
  return true;
});

// for label input

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

// div divi

if (jQuery("div.product-info__variants_items:contains(Size) input").length > 0) {
  [
    jQuery(
      ".swatchContainer .swatchBoxSelected"
    ).length > 0
      ?jQuery(
        ".swatchContainer .swatchBoxSelected"
        ).find('.textSwatch')
        .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatchContainer .textSwatch").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery(".swatchContainer .textSwatch").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatchContainer .textSwatch").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery(".swatchContainer .textSwatch").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".swatchContainer .textSwatch").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;

// section divi

if (jQuery(".sizes").length > 0) {
  [
    jQuery(
      ".sizes.selected"
    ).length > 0
      ?jQuery(
        ".sizes.selected"
        )
        .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(".sizes").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery(".sizes").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".sizes").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery(".sizes").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery(".sizes").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).find('input').attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



if (
  jQuery(".choose__group:contains(Boyutu) .choose__item a.btn-choose-option")
    .length > 0
) {
  ;[
    jQuery(
      ".choose__group:contains(Boyutu) .choose__item a.btn-choose-option[data-selected='true']"
    ).length > 0
      ? jQuery(
          ".choose__group:contains(Boyutu) .choose__item a.btn-choose-option[data-selected='true']"
        )
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery(
        ".choose__group:contains(Boyutu) .choose__item a.btn-choose-option"
      ).map(function (i, e) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Size", ["No Size"]]

if (
  jQuery(".choose__group:contains(Boyutu) .choose__item a.btn-choose-option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".choose__group:contains(Boyutu) .choose__item a.btn-choose-option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).click()
    }
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".choose__group:contains(Boyutu) .choose__item a.btn-choose-option)
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $val = true
  jQuery(
    ".choose__group:contains(Boyutu) .choose__item a.btn-choose-option"
  ).each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $val = false
    }
  })
}
return $val


// ul li input

if (jQuery("fieldset:contains(Size) ul li").length > 0) {
  [
    jQuery(
      "fieldset:contains(Size) input:checked"
    ).length > 0
      ?jQuery(
          "fieldset:contains(Size) input:checked"
        )
        .parent().text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("fieldset:contains(Size) label").map(function (
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
  jQuery("fieldset:contains(Size) label").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("fieldset:contains(Size) label").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "")!== $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery("fieldset:contains(Size) label").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("fieldset:contains(Size) label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "")!== $sarg &&
      !jQuery(this).parent().find('input').attr('disabled') === 'disabled'
    ) {
      $text = false;
    }
  });
}
return $text;



// if (jQuery('.size-row label').length > 0) {
//   [
//     jQuery('.size-row label.selected').length > 0
//       ? jQuery('.size-row label.selected').text().trim()         
          
//       : "Select item",
//     jQuery.makeArray(
//       jQuery('.size-row label').map(function (i, e) {
//         if (jQuery(e).text().trim() != "")
//           return jQuery(e).text().trim().replace(/\s\s+/g, "");
//       })
//     ),
//   ];
// } else {
//   ["No item", ["No item"]];      }


  

if (
  jQuery('.size-row label').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('.size-row label').each(function () {
    if (jQuery(this).text().trim() == $sarg) {
      jQuery(this)[0].click()
    }
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".size-row label")
    .length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $val = true
  jQuery(
    ".size-row label"
  ).each(function (index) {
    if (
      jQuery(this).text().trim() == $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $val = false
    }
  })
}
return $val

.size-row label.selected

// div divi

if (jQuery("form.variant:target .form__selections .form__options--size a").length > 0) {
  [
    jQuery(
      "form.variant:target .form__selections .form__options--size a.active"
    ).length > 0
      ?jQuery(
        "form.variant:target .form__selections .form__options--size a.active"
        )
        // .css('background-size')
        .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("form.variant:target .form__selections .form__options--size a").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e)
        //  .css('background-size')
         .text().trim().replace(/\s\s+/g, "")
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery("form.variant:target .form__selections .form__options--size a").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("form.variant:target .form__selections .form__options--size a").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery("form.variant:target .form__selections .form__options--size a").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("form.variant:target .form__selections .form__options--size a").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.unavailable')
    ) {
      $text = false;
    }
  });
}
return $text;

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
    jQuery(select#size option").each(function (index) {
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



  if (jQuery("select.super-attribute-select option").length > 0) {
    [
      jQuery("select.super-attribute-select option:selected").text() != ""
        ? jQuery("select.super-attribute-select option:selected")
            .text()
            .trim()
            // .replace(/\s\s+/g, "")
        : "Select Size",
      jQuery.makeArray(
        jQuery("select.super-attribute-select option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }
  
  if (
    jQuery("select.super-attribute-select option").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
    ) {
    jQuery("select.super-attribute-select option").each(function () {
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
      jQuery("select.super-attribute-select option").length > 0 &&
      $sarg != "No Size" &&
      $sarg != "Select Size"
    ) {
      $text = true;
      jQuery("select.super-attribute-select option").each(function (index) {
        if (
          jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
          !jQuery(this).attr('disabled')
        ) {
          $text = false;
        }
      });
    }
    return $text;

    ////////////////////////////////////////////////


    if (jQuery(".selHolder:first option").length > 0) {
      [
        jQuery(".selHolder:first option:selected").text() != ""
          ? jQuery(".selHolder:first option:selected")
              .text()
              .trim()
              .replace(/\s\s+/g, "")
          : "Select Color",
        jQuery.makeArray(
          jQuery(".selHolder:first option").map(function (i, e) {
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
    jQuery(".selHolder:first option").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
    ) {
    jQuery(".selHolder:first option").each(function () {
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
      jQuery(".selHolder:first option").length > 0 &&
      $sarg != "No Size" &&
      $sarg != "Select Size"
    ) {
      $text = true;
      jQuery(".selHolder:first option").each(function (index) {
        if (
          jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
          !jQuery(this).attr('disabled')
        ) {
          $text = false;
        }
      });
    }
    return $text;





    //////////////////////////////////////



    if (jQuery("div.variant--group:contains(Grösse) input").length > 0) {
      ;[
        jQuery("div.variant--group:contains(Grösse) input:checked").length > 0
          ? jQuery("div.variant--group:contains(Grösse) input:checked")
          .attr("title")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery("div.variant--group:contains(Grösse) input").map(function (i, e) {
        if (jQuery(e).attr("title") != "")
          return jQuery(e).attr("title").replace(/\s\s+/g, "")
      })
    ),
    ]
    } else {
    ;["No Grösse", ["No Grösse"]]
    }
    
    if (jQuery("div.variant--group:contains(Grösse) input").length > 0  &&
    $sarg != "Select Grösse" &&
    $sarg != "No Grösse") {
    jQuery("div.variant--group:contains(Grösse) input").each(function () {
    if (jQuery(this).attr("title").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
    })
    }
    wait_for(function () {
    return true
    })
    
    $text = false;
    if (
      jQuery("div.variant--group:contains(Grösse) input").length > 0 &&
      $sarg != "No Grösse" &&
      $sarg != "Select Grösse"
    ) {
      $text = true;
      jQuery("div.variant--group:contains(Grösse) input").each(function (index) {
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




    /////////////////////////////////////////////////


    if (jQuery("select#Option2 option").length > 0) {
      [
        jQuery("select#Option2 option:selected").text() != ""
          ? jQuery("select#Option2 option:selected")
              .text()
              .trim()
              // .replace(/\s\s+/g, "")
          : "Select Size",
        jQuery.makeArray(
          jQuery("select#Option2 option").map(function (i, e) {
            if (jQuery(e).text() != "")
              return jQuery(e).text().trim().replace(/\s\s+/g, "");
          })
        ),
      ];
    } else {
      ["No Size", ["No Size"]];
    }
    
    if (
      jQuery("select#Option2 option").length > 0 &&
      $sarg != "Select Size" &&
      $sarg != "No Size"
      ) {
      jQuery("select#Option2 option").each(function () {
        if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
          jQuery(this).trigger("change");
        }
      });
      }
      wait_for(function () {
      return true;
      });

      //////////////////////////
      
      $text = false;
      if (
        jQuery("select#Option2 option").length > 0 &&
        $sarg != "No Size" &&
        $sarg != "Select Size"
      ) {
        $text = true;
        jQuery("select#Option2 option").each(function (index) {
          if (
            jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
            !jQuery(this).attr('disabled')
          ) {
            $text = false;
          }
        });
      }
      return $text;


    //////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////
    if (jQuery("div.ProductForm__Option:contains(Size) input").length > 0) {
  ;[
    jQuery("div.Option2:contains(Size) input:checked").length > 0
      ? jQuery("div.Option2:contains(Size) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery("div.Option2:contains(Size) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery("div.Option2:contains(Size) input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery("div.Option2:contains(Size) input").each(function () {
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
  jQuery("div.Option2:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.Option2:contains(Size) input").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;







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
    console.log(jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg, !jQuery(this).parent().hasClass('available'))
    console.log(jQuery(this).parent())
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      jQuery(this).parent().hasClass('available')
    ) {
      $text = false;
    }
  });
}
$text;


$text = false;
if (
  jQuery("div.ProductForm__Option:contains(Size) input").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("div.ProductForm__Option:contains(Size) input").each(function (index) {   
    if (
      jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
$text;


if (jQuery(".product__variants-wrapper:last button").length > 0) {
  [
    jQuery(
      ".product__variants-wrapper:last button.product__option--active"
    ).length > 0
      ? jQuery(".product__variants-wrapper:last button.product__option--active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".product__variants-wrapper:last button").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


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


vtex-store-components-3-x-skuSelectorNameContainer

if (jQuery("form.variant:target .form__selections .form__options--size a").length > 0) {
  [
    jQuery(
      "form.variant:target .form__selections .form__options--size a.active"
    ).length > 0
      ?jQuery(
        "form.variant:target .form__selections .form__options--size a.active"
        )
        // .css('background-size')
        .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("form.variant:target .form__selections .form__options--size a").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e)
        //  .css('background-size')
         .text().trim().replace(/\s\s+/g, "")
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery("form.variant:target .form__selections .form__options--size a").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("form.variant:target .form__selections .form__options--size a").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery("form.variant:target .form__selections .form__options--size a").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("form.variant:target .form__selections .form__options--size a").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.unavailable')
    ) {
      $text = false;
    }
  });
}
return $text;
/////////////////////////////////////
/////////////////////////////////////////////

vtex-store-components-3-x-skuSelectorItem--17-cm vtex-store-components-3-x-skuSelectorItem--selected


if (jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').length > 0) {
  [
    jQuery(
      'div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"].vtex-store-components-3-x-skuSelectorItem--selected'
    ).length > 0
      ?jQuery(
        'div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"].vtex-store-components-3-x-skuSelectorItem--selected'
        ).find('.textSwatch')
        .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery('div.vtex-store-components-3-x-skuSelectorSubcontainer:contains(Size) [role="button"]').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('.data-availability') === 'soldout'
    ) {
      $text = false;
    }
  });
}
return $text;