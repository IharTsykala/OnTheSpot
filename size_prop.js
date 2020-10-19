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

if (jQuery('ul#sizes li').length > 0) {
  [
    jQuery('ul#sizes li input:checked').length > 0
      ? jQuery('ul#sizes li input:checked').next().text().trim()         
          
      : "Select item",
    jQuery.makeArray(
      jQuery('ul#sizes li label').map(function (i, e) {
        if (jQuery(e).text().trim() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No item", ["No item"]];      }


  if (jQuery(".product-single__swatches:contains(Size)").length > 0) {
    [
      jQuery(".product-single__swatches:contains(Size) input:checked").attr('value') != (undefined && '')
        ? jQuery(".product-single__swatches:contains(Size) input:checked").attr('value')           
            .replace(/\s\s+/g, "")          
        : "Select item",
      jQuery.makeArray(
        jQuery(".product-single__swatches:contains(Size) input").map(function (i, e) {
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
    jQuery(".product-single__swatches:contains(Size) input").length > 0 &&    
    $sarg != "No Size"
  ) {
    jQuery(".product-single__swatches:contains(Size) input").each(function () {
      if (jQuery(this).attr('value').replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).next()[0].click();
      }
    });
  }
  wait_for(function () {
    return true;
  });


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
  if (jQuery("select#Size option").length > 0) {
    [
      jQuery("select#Size option:selected").text() != ""
        ? jQuery("select#Size option:selected")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Size",
      jQuery.makeArray(
        jQuery("select#Size option").map(function (i, e) {
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
  jQuery("select#Size option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("select#Size option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery("select[id='main:lstSkuSize']")
        .text(jQuery(this).text())
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
  jQuery("select#Size option").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("select#Size option").each(function (index) {
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
if (jQuery("select[id='select-width']").length > 0) {
  [
    jQuery("select[id='select-width'] option:selected").text() != ""
      ? jQuery("select[id='select-width'] option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select width",
    jQuery.makeArray(
      jQuery("select[id='select-width'] option").map(function (i, e) {
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
if (jQuery(".ProductForm__Variants .ProductForm__Option:contains(Size: )").length > 0) {
  [
    jQuery(
      ".ProductForm__Variants .ProductForm__Option:contains(Size: ) .ProductForm__SelectedValue"
    ).length > 0
      ? jQuery(".ProductForm__Variants .ProductForm__Option:contains(Size: ) .ProductForm__SelectedValue")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".OptionSelector:contains(Size) .Popover__ValueList button").map(function (
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
  jQuery(".OptionSelector:contains(Size) .Popover__ValueList button").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".OptionSelector:contains(Size) .Popover__ValueList button").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

// ul li

if (jQuery("ul.product-swatch-list li").length > 0) {
  [
    jQuery(
      "ul.product-swatch-list li.active"
    ).length > 0
      ?jQuery(
          "ul.product-swatch-list li.active"
        )       
          .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("ul.product-swatch-list li").map(function (
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
  jQuery("ul.product-swatch-list li").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("ul.product-swatch-list li").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "")) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery("ul.product-swatch-list li").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("ul.product-swatch-list li").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;

swatch-button swatch-selector star-set-btn star-btn-size-md star-btn-border-1 star-set-btn-rad-0 star-btn-text-upper swatch-selected swatch-allow-animation


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

if (jQuery("div.select:contains(Size) input").length > 0) {
  ;[
    jQuery(".swatch_options .swatch:contains(Size) input:checked").length > 0
      ? jQuery(".swatch_options .swatch:contains(Size) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".swatch_options .swatch:contains(Size) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Size", ["No Size"]]
}

if (jQuery(".swatch_options .swatch:contains(Size) input").length > 0  &&
$sarg != "Select Size" &&
$sarg != "No Size") {
jQuery(".swatch_options .swatch:contains(Size) input").each(function () {
if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
  jQuery(this).next()[0].click()
}
})
}
wait_for(function () {
return true
})

// div divi

if (jQuery(".swatchContainer .textSwatch").length > 0) {
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